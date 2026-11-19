/*
 * AKQR - tiny dependency-free QR code generator (byte mode, UTF-8, EC level M, versions 1-10).
 *   AKQR.matrix(text)               -> rows of booleans (true = dark), no quiet zone
 *   AKQR.svg(text, {margin, moduleSize}) -> SVG string (white background, one merged <path>)
 * Implements the ISO/IEC 18004 pipeline: Reed-Solomon over GF(256)/0x11D, block interleaving,
 * function patterns, zig-zag placement, 8 masks scored with the 4 penalty rules, BCH format/version info.
 */
(function () {
  'use strict';

  // Level M tables for versions 1..10 (index = version - 1).
  var EC_PER_BLOCK = [10, 16, 26, 18, 24, 16, 18, 22, 22, 26];
  var BLOCKS = [ // [count, data codewords per block] groups
    [[1, 16]], [[1, 28]], [[1, 44]], [[2, 32]], [[2, 43]],
    [[4, 27]], [[4, 31]], [[2, 38], [2, 39]], [[3, 36], [2, 37]], [[4, 43], [1, 44]]
  ];
  var ALIGN = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50]];

  // GF(256) log/antilog tables.
  var EXP = [], LOG = [];
  (function () {
    var x = 1, i;
    for (i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 0x11D; }
    for (i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  function mul(a, b) { return a && b ? EXP[LOG[a] + LOG[b]] : 0; }

  function rsGenerator(n) { // coefficients, highest degree first, leading 1
    var g = [1], i, j, next;
    for (i = 0; i < n; i++) {
      next = [];
      for (j = 0; j <= g.length; j++) next.push(0);
      for (j = 0; j < g.length; j++) { next[j] ^= g[j]; next[j + 1] ^= mul(g[j], EXP[i]); }
      g = next;
    }
    return g;
  }

  function rsRemainder(data, n) {
    var gen = rsGenerator(n), rem = [], i, k, f;
    for (i = 0; i < n; i++) rem.push(0);
    for (k = 0; k < data.length; k++) {
      f = data[k] ^ rem.shift();
      rem.push(0);
      for (i = 0; i < n; i++) rem[i] ^= mul(gen[i + 1], f);
    }
    return rem;
  }

  function utf8(text) {
    var s = encodeURIComponent(String(text)), out = [], i;
    for (i = 0; i < s.length; i++) {
      if (s[i] === '%') { out.push(parseInt(s.substr(i + 1, 2), 16)); i += 2; }
      else out.push(s.charCodeAt(i));
    }
    return out;
  }

  // Build the final interleaved codeword sequence (data + EC) for the smallest fitting version.
  function encode(text) {
    var bytes = utf8(text), ver, groups, dataCw, i, g, b, bits = [], blocks = [], ecc = [], out = [];
    for (ver = 1; ver <= 10; ver++) {
      dataCw = 0;
      BLOCKS[ver - 1].forEach(function (gr) { dataCw += gr[0] * gr[1]; });
      if (4 + (ver < 10 ? 8 : 16) + 8 * bytes.length <= dataCw * 8) break;
    }
    if (ver > 10) throw new Error('Text too long for QR version 10-M (max 213 UTF-8 bytes, got ' + bytes.length + ')');

    function put(val, len) { for (var k = len - 1; k >= 0; k--) bits.push((val >>> k) & 1); }
    put(4, 4); // byte mode indicator 0100
    put(bytes.length, ver < 10 ? 8 : 16);
    bytes.forEach(function (v) { put(v, 8); });
    for (i = 0; i < 4 && bits.length < dataCw * 8; i++) bits.push(0); // terminator
    while (bits.length % 8) bits.push(0);
    var cw = [];
    for (i = 0; i < bits.length; i += 8) {
      var v = 0;
      for (b = 0; b < 8; b++) v = (v << 1) | bits[i + b];
      cw.push(v);
    }
    for (i = 0; cw.length < dataCw; i++) cw.push(i % 2 ? 0x11 : 0xEC); // pad bytes

    groups = BLOCKS[ver - 1];
    var pos = 0, maxLen = 0;
    groups.forEach(function (gr) {
      for (g = 0; g < gr[0]; g++) {
        var blk = cw.slice(pos, pos + gr[1]);
        pos += gr[1];
        blocks.push(blk);
        ecc.push(rsRemainder(blk, EC_PER_BLOCK[ver - 1]));
        maxLen = Math.max(maxLen, gr[1]);
      }
    });
    for (i = 0; i < maxLen; i++) blocks.forEach(function (blk) { if (i < blk.length) out.push(blk[i]); });
    for (i = 0; i < EC_PER_BLOCK[ver - 1]; i++) ecc.forEach(function (e) { out.push(e[i]); });
    return { version: ver, codewords: out };
  }

  function bch(value, poly, degree, shift) { // remainder of value<<shift by poly
    var rem = value << shift, i;
    for (i = degree; i >= 0; i--) if ((rem >>> (i + shift)) & 1) rem ^= poly << i;
    return rem;
  }

  var MASKS = [
    function (x, y) { return (x + y) % 2 === 0; },
    function (x, y) { return y % 2 === 0; },
    function (x, y) { return x % 3 === 0; },
    function (x, y) { return (x + y) % 3 === 0; },
    function (x, y) { return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; },
    function (x, y) { return (x * y) % 2 + (x * y) % 3 === 0; },
    function (x, y) { return ((x * y) % 2 + (x * y) % 3) % 2 === 0; },
    function (x, y) { return ((x + y) % 2 + (x * y) % 3) % 2 === 0; }
  ];

  function penalty(m, n) {
    var p = 0, x, y, d, i, run, dark = 0, line, P1 = '10111010000', P2 = '00001011101';
    for (d = 0; d < 2; d++) {
      for (y = 0; y < n; y++) {
        line = '';
        for (x = 0; x < n; x++) line += (d ? m[x][y] : m[y][x]) ? '1' : '0';
        run = 1; // rule 1: runs of 5+ same-colour modules
        for (x = 1; x <= n; x++) {
          if (x < n && line[x] === line[x - 1]) run++;
          else { if (run >= 5) p += run - 2; run = 1; }
        }
        for (x = 0; x <= n - 11; x++) { // rule 3: finder-like 1:1:3:1:1 with 4-module light border
          var s = line.substr(x, 11);
          if (s === P1 || s === P2) p += 40;
        }
      }
    }
    for (y = 0; y < n; y++) {
      for (x = 0; x < n; x++) {
        if (m[y][x]) dark++;
        if (x < n - 1 && y < n - 1 && m[y][x] === m[y][x + 1] && m[y][x] === m[y + 1][x] && m[y][x] === m[y + 1][x + 1]) p += 3; // rule 2
      }
    }
    i = Math.floor(Math.abs(dark * 100 / (n * n) - 50) / 5); // rule 4: dark/light balance
    return p + 10 * i;
  }

  function build(text) {
    var enc = encode(text), ver = enc.version, n = 17 + 4 * ver, m = [], fn = [], x, y, i;
    for (y = 0; y < n; y++) { m.push([]); fn.push([]); for (x = 0; x < n; x++) { m[y].push(false); fn[y].push(false); } }
    function set(px, py, v) { if (px >= 0 && py >= 0 && px < n && py < n) { m[py][px] = !!v; fn[py][px] = true; } }

    for (i = 0; i < n; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); } // timing
    [[3, 3], [n - 4, 3], [3, n - 4]].forEach(function (c) { // finders + separators
      for (var dy = -4; dy <= 4; dy++) for (var dx = -4; dx <= 4; dx++) {
        var dist = Math.max(Math.abs(dx), Math.abs(dy));
        set(c[0] + dx, c[1] + dy, dist !== 2 && dist !== 4);
      }
    });
    var al = ALIGN[ver - 1], last = al.length - 1;
    al.forEach(function (ax, ai) {
      al.forEach(function (ay, aj) {
        if ((ai === 0 && aj === 0) || (ai === 0 && aj === last) || (ai === last && aj === 0)) return;
        for (var dy = -2; dy <= 2; dy++) for (var dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      });
    });
    function format(mask) { // level M = 00, BCH(15,5) then XOR 0x5412
      var data = mask, bits = ((data << 10) | bch(data, 0x537, 4, 10)) ^ 0x5412, k;
      function bit(j) { return ((bits >>> j) & 1) === 1; }
      for (k = 0; k <= 5; k++) set(8, k, bit(k));
      set(8, 7, bit(6)); set(8, 8, bit(7)); set(7, 8, bit(8));
      for (k = 9; k < 15; k++) set(14 - k, 8, bit(k));
      for (k = 0; k < 8; k++) set(n - 1 - k, 8, bit(k));
      for (k = 8; k < 15; k++) set(8, n - 15 + k, bit(k));
      set(8, n - 8, true); // dark module
    }
    format(0); // reserve the area
    if (ver >= 7) { // version information, BCH(18,6)
      var vbits = (ver << 12) | bch(ver, 0x1F25, 6, 12);
      for (i = 0; i < 18; i++) {
        var vb = ((vbits >>> i) & 1) === 1, a = n - 11 + (i % 3), b = Math.floor(i / 3);
        set(a, b, vb); set(b, a, vb);
      }
    }

    // zig-zag data placement; remainder bits stay light
    var bi = 0, total = enc.codewords.length * 8, right, vert, j, up;
    for (right = n - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      up = ((right + 1) & 2) === 0;
      for (vert = 0; vert < n; vert++) {
        for (j = 0; j < 2; j++) {
          x = right - j; y = up ? n - 1 - vert : vert;
          if (!fn[y][x]) {
            m[y][x] = bi < total && ((enc.codewords[bi >>> 3] >>> (7 - (bi & 7))) & 1) === 1;
            bi++;
          }
        }
      }
    }

    function applyMask(k) {
      for (var yy = 0; yy < n; yy++) for (var xx = 0; xx < n; xx++) if (!fn[yy][xx] && MASKS[k](xx, yy)) m[yy][xx] = !m[yy][xx];
    }
    var best = 0, bestScore = Infinity, k, score;
    for (k = 0; k < 8; k++) {
      applyMask(k); format(k);
      score = penalty(m, n);
      if (score < bestScore) { bestScore = score; best = k; }
      applyMask(k); // undo
    }
    applyMask(best); format(best);
    return m;
  }

  function svg(text, opts) {
    opts = opts || {};
    var margin = opts.margin === undefined ? 4 : opts.margin, ms = opts.moduleSize === undefined ? 8 : opts.moduleSize;
    var m = build(text), n = m.length, size = n + 2 * margin, d = '', x, y, w;
    for (y = 0; y < n; y++) {
      for (x = 0; x < n; x++) {
        if (!m[y][x]) continue;
        for (w = 1; x + w < n && m[y][x + w]; w++);
        d += 'M' + (x + margin) + ' ' + (y + margin) + 'h' + w + 'v1h-' + w + 'z';
        x += w;
      }
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + size + ' ' + size + '" width="' + size * ms +
      '" height="' + size * ms + '" shape-rendering="crispEdges" role="img" aria-label="QR code">' +
      '<rect width="' + size + '" height="' + size + '" fill="#fff"/><path fill="#000" d="' + d + '"/></svg>';
  }

  var AKQR = { matrix: build, svg: svg };
  if (typeof window !== 'undefined') window.AKQR = AKQR;
  if (typeof module !== 'undefined' && module.exports) module.exports = AKQR;
})();
