/* data.js — the English copy and all configuration. Every word on the page lives here (or in
   data.fr.js / data.de.js, which hold only the translated strings and are merged over this file by lang.js).
   Public page: no colleague, partner or venture names, no internal links or IDs, no real internal figures.
   Numbers inside project visualisations are illustrative and are labelled as such on the page. */

window.AK_LANGS = window.AK_LANGS || {};

window.AK_LANGS.en = {
  /* true while Akshay is reviewing: shows dashed "to confirm" notes. false on the live page. */
  draft: false,

  /* The public address of this page. The QR in the Connect section is drawn from this. */
  siteUrl: "https://kanhere.github.io",

  photos: {
    portrait: { src: "assets/akshay-portrait.jpg", alt: "Akshay by a lake at sunset, wearing sunglasses" },
    outdoors: { src: "assets/akshay-outdoors.jpg", alt: "Akshay standing by a forest lake in autumn colours" }
  },

  profile: {
    name: "Akshay Kanhere",
    role: "Associate, Technology Operations",
    team: "UpLink, World Economic Forum",
    place: "Geneva",
    intro: [
      "Hardcore computer engineer from Mumbai. I began as a mainframe developer, then spent nine years in quality engineering on Salesforce programmes for clients of IT services and consulting firms, and ended up leading test teams.",
      "Today I look after technology operations for UpLink, the World Economic Forum's open innovation platform, where I turn weekly chores into automations and agents."
    ],
    askMeAbout: [
      "Agents for operations teams",
      "Claude skills and plugins",
      "MCP connectors",
      "Read-only agents",
      "n8n workflows",
      "Airtable and Salesforce sync"
    ],
    hereToLearn: ["Evals", "Agents in production", "How you review agent-written code"],
    linkedin: "https://www.linkedin.com/in/akshaykanhere"
  },

  mark: {
    name: "Claukshay",
    note: "Claude + Akshay. It is the name I gave my automations, and this little cog signs the emails they send."
  },

  /* A small scripted terminal in the hero. Commands are tapped, not typed. */
  terminal: {
    title: "akshay@geneva: ~",
    hint: "Tap a command",
    commands: [
      {
        cmd: "whoami",
        out: [
          "akshay: computer engineer, Mumbai to Geneva",
          "role: technology operations, UpLink (World Economic Forum)",
          "mode: introvert, friendly, curious"
        ]
      },
      {
        cmd: "uptime",
        out: [
          "12 years in tech",
          "9 with IT services and consulting firms, almost 3 at the Forum",
          "load average: one agent, several workflows, too many tabs"
        ]
      },
      {
        cmd: "cat agent-card.json",
        code: true,
        out: [
          "{",
          "  \"name\": \"akshay\",",
          "  \"description\": \"Turns weekly chores into automations and agents\",",
          "  \"tools\": [\"airtable\", \"n8n\", \"salesforce\", \"claude\", \"python\"],",
          "  \"input_modes\": [\"a real problem\", \"a quiet corner\"],",
          "  \"output_modes\": [\"a working automation\", \"an honest opinion\"],",
          "  \"rate_limits\": { \"small_talk\": \"low\", \"deep_dives\": \"unlimited\" },",
          "  \"auth\": \"say hi\"",
          "}"
        ]
      },
      { cmd: "ls projects/", dynamic: "projects" },
      { cmd: "openers --random", dynamic: "opener" },
      {
        cmd: "curl /llms.txt",
        out: ["This page is also written for your agent."],
        link: { href: "llms.txt", label: "kanhere.github.io/llms.txt" }
      },
      {
        cmd: "./play.sh",
        out: ["A short game: can you keep an agent read-only?"],
        link: { href: "#game", label: "Play: read or change?" }
      }
    ]
  },

  approach: {
    title: "I'm an introvert",
    body: [
      "I like being here, and I rarely make the first move. If you are reading this, you already did the hard part.",
      "Come say hi. If small talk is not your thing either, pick one of these and we can skip it."
    ],
    startersLabel: "Easy openers",
    starters: [
      {
        ask: "What is the most useful boring thing an agent does for you?",
        mine: "Mine: a Monday email that tells me what my workflows did last week."
      },
      {
        ask: "How do you stop an agent from changing things it should only read?",
        mine: "My team-help agent looks things up and hands back steps. It never makes the change."
      },
      {
        ask: "Tell me about a workflow that broke in a funny way.",
        mine: "I collect these. Ask me about the trigger that fired once for every row in the table."
      },
      {
        ask: "Where would you go hiking around here?",
        mine: "I used to hike in India. I would like a recommendation."
      }
    ],
    battery: {
      label: "Social battery",
      hint: "Good questions charge it. Open an opener and watch.",
      levels: ["Running on reserve", "Warming up", "Getting somewhere", "Nearly there", "Fully charged. Come say hi."]
    }
  },

  journey: {
    title: "The trail so far",
    route: ["Mumbai", "Bengaluru", "Mumbai", "Pune", "Geneva"],
    stops: [
      {
        id: "degree",
        when: "2010 – 2014",
        year: "2010–14",
        place: "Mumbai",
        title: "Computer Engineering",
        sub: "Bachelor's degree, University of Mumbai",
        body: "Four years of computer engineering in Mumbai. Graduated in 2014.",
        tags: []
      },
      {
        id: "capgemini",
        when: "2014 – 2017",
        year: "2014–17",
        place: "Mumbai",
        title: "Senior Software Engineer",
        sub: "Capgemini",
        org: "Capgemini",
        body: "Started as a mainframe developer (DB2, CICS), then moved to Salesforce quality assurance: working out how things break before users do.",
        tags: ["Mainframe", "Salesforce QA"]
      },
      {
        id: "deloitte",
        when: "2017 – 2023",
        year: "2017–23",
        place: "Bengaluru, Mumbai, Pune",
        title: "Senior Consultant",
        sub: "Deloitte",
        org: "Deloitte",
        body: "Joined as a business technology analyst and left as a senior consultant. Six years in quality on client programmes: Salesforce testing, scenario testing, then leading test teams. Three cities along the way.",
        tags: ["Salesforce", "Test lead", "Quality management"]
      },
      {
        id: "staff",
        when: "January 2024",
        year: "2024",
        place: "Geneva",
        title: "Joined the World Economic Forum",
        sub: "Tech operations and digital product, UpLink",
        body: "From testing other people's systems to owning them: the data, the integrations and the day-to-day tooling of the team. Based in Geneva.",
        tags: ["Airtable", "Salesforce", "Integrations"]
      },
      {
        id: "now",
        when: "2026",
        year: "Now",
        place: "Geneva",
        title: "Associate, Technology Operations",
        sub: "UpLink, in the Forum's technology team",
        body: "Most of my week is automation and agents now: Claude skills the team shares, n8n workflows, and the checks that keep them honest.",
        tags: ["Agents", "Automation", "Data"]
      }
    ],
    certsLabel: "Five Salesforce certifications along the way",
    certs: ["Administrator", "Business Analyst", "Marketing Cloud Administrator", "AI Associate", "Data Cloud Consultant"]
  },

  /* An interactive loop: tap a step to see what it means in practice. */
  howIWork: {
    title: "How I work",
    body: "The same loop, whatever the tool.",
    steps: [
      { id: "spot", label: "Spot", line: "Find the chore someone does by hand every week.", example: "Example: two days of copying records into slides before every judging day." },
      { id: "map", label: "Map", line: "Read the system before touching it. Read-only first.", example: "Example: an agent reads the schemas, automations and run history, and changes nothing." },
      { id: "build", label: "Build", line: "The smallest thing that removes the chore: a workflow, a script or a skill.", example: "Example: a skill that fills the slide template straight from the database." },
      { id: "check", label: "Check", line: "A second pass that cannot edit audits the first.", example: "Example: an audit skill compares every slide with its source record and lists the mismatches." },
      { id: "hand", label: "Hand over", line: "Docs, an owner and an off switch. Then it belongs to the team.", example: "Example: a how-to page, a named owner, and a flag that turns it off without a deployment." }
    ]
  },

  themes: [
    { id: "agents", label: "AI agents" },
    { id: "automation", label: "Automation" },
    { id: "data", label: "Data" },
    { id: "quality", label: "Quality" }
  ],

  projectsIntro: {
    title: "Recent work",
    body: "Fifteen things I have built or am building, described by what they do and the pattern behind them. Each one has a small visual you can run.",
    disclaimer: "Descriptions are generalised. Numbers and names in the visuals are illustrative, not real figures."
  },

  /* featured: true  -> the card shows its visual straight away.
     featured: false -> a compact card that opens on tap.
     viz.type decides which small visualisation is drawn:
     pipeline | beforeAfter | storyboard | testGrid | flags | usage | schedule | chat   (js/projects.js)
     waterfall | chain | merge | scorecard | map | inventory | footer                    (js/viz-more.js) */
  projects: [
    {
      id: "lead-research",
      featured: true,
      title: "Lead research pipeline",
      tags: ["agents", "automation", "data"],
      status: "Live",
      oneLiner: "Finds companies that fit an innovation challenge before they apply.",
      how: "A challenge brief goes in. AI desk research proposes candidates with sources, duplicates are removed, company databases and the CRM fill the gaps, and a fit score ranks what is left. A person checks every lead before any outreach.",
      lesson: "The human check stays. The agent's job is to make it fast.",
      stack: ["Airtable", "n8n", "Claude", "Salesforce"],
      viz: {
        type: "pipeline",
        caption: "One run, illustrative numbers",
        stages: [
          { label: "Brief", kind: "input", count: 1, unit: "brief" },
          { label: "AI research", kind: "agent", count: 400, unit: "candidates" },
          { label: "De-dupe", kind: "rule", count: 310, unit: "new" },
          { label: "Enrich", kind: "data", count: 310, unit: "enriched" },
          { label: "Fit score", kind: "agent", count: 120, unit: "good fit" },
          { label: "Human check", kind: "human", count: 45, unit: "approved" },
          { label: "Outreach", kind: "output", count: 45, unit: "contacted" }
        ]
      }
    },
    {
      id: "booklets",
      featured: false,
      title: "Pitch booklets from a database",
      tags: ["agents", "automation"],
      status: "Live, shared with the team",
      oneLiner: "A slide deck for a judging day, generated from the source data and then audited against it.",
      how: "A Claude skill reads the shortlisted records, fills the slide template and places every logo by record. A second, read-only skill then audits the finished deck against the source and reports what does not match. The same pattern now builds a winners booklet and an event participant booklet.",
      lesson: "Generate, then audit with a separate pass that cannot edit.",
      stack: ["Claude skills", "Airtable", "Python", "PowerPoint"],
      viz: {
        type: "beforeAfter",
        caption: "Steps for one booklet, illustrative",
        before: {
          label: "By hand",
          steps: ["Export the data", "Paste into slides", "Align every logo", "Chase late edits", "Proofread it all", "Export and share"],
          effort: "about 2 days"
        },
        after: {
          label: "With the skill",
          steps: ["Ask for the booklet", "Skill fills the template", "Audit skill checks it", "Review the findings"],
          effort: "about 1 hour"
        }
      }
    },
    {
      id: "team-agent",
      featured: true,
      title: "A read-only help agent for colleagues",
      tags: ["agents", "quality"],
      status: "Early pilot",
      oneLiner: "Answers the questions I get asked every week, with my context. It reads and checks. It never changes data.",
      how: "Packaged as a Claude plugin with playbooks for the recurring questions and read-only tools. It looks up the current state, explains what it found, and hands back the steps so the person makes the change under their own login.",
      lesson: "Agents look things up. People make the change, so every edit keeps an owner.",
      stack: ["Claude plugin", "Slack", "Airtable"],
      viz: {
        type: "chat",
        caption: "An illustrative exchange",
        badge: "read-only",
        messages: [
          { from: "colleague", text: "Can you update this record for me?" },
          { from: "agent", text: "I checked it. The status is still pending because one required field is empty." },
          { from: "agent", text: "Here are the three steps to fix it yourself. I can't make the change, and that is on purpose." }
        ],
        why: "Why read-only? Edits stay attributable to the person who asked."
      }
    },
    {
      id: "system-map",
      featured: true,
      title: "Mapping an undocumented system with a read-only agent",
      tags: ["agents", "quality"],
      status: "Done",
      oneLiner: "A production base with years of history and no reliable docs, mapped end to end without changing a thing.",
      how: "The agent read schemas, automations, workflow definitions and run history, saved raw dumps to disk and kept a running log. Out came a flow map, a reusable pattern and documentation the team now works from. Every finding carries a date, because the system keeps moving.",
      lesson: "A map has a date. Re-check what is deployed before you trust it.",
      stack: ["Claude Code", "Airtable", "n8n", "Confluence"],
      viz: {
        type: "map",
        caption: "What the agent read, and what it changed",
        nodes: [
          { label: "Tables" },
          { label: "Fields" },
          { label: "Automations" },
          { label: "Workflows" },
          { label: "Run history" },
          { label: "Docs written" }
        ],
        links: [[0, 1], [0, 2], [2, 3], [3, 4], [1, 5], [4, 5]],
        readLabel: "read",
        changedLabel: "changed",
        changed: 0
      }
    },
    {
      id: "flags",
      featured: false,
      title: "Feature flags and kill switches",
      tags: ["quality"],
      status: "Exploring",
      oneLiner: "Shipping behind a flag: off, on for a pilot group, on for everyone, and one switch that overrides all of it.",
      how: "Helping the wider technology team look at how features are released behind flags, how a pilot group gets them first, and how a kill switch turns something off without a deployment.",
      lesson: "The kill switch has to win over every other rule.",
      stack: ["Feature flags", "Progressive delivery"],
      viz: {
        type: "flags",
        caption: "Try it: who sees the feature?",
        users: 20,
        pilot: 4
      }
    },
    {
      id: "ai-usage",
      featured: false,
      title: "AI credit usage monitor",
      tags: ["data", "automation"],
      status: "Live",
      oneLiner: "An audit log becomes a daily usage table, a monthly report and three alerts.",
      how: "A scheduled workflow pulls the audit log every day, rolls events up into counts per feature and per person, and writes them to a base with a dashboard on top. Alerts fire when a day runs far above normal.",
      lesson: "Store counts, not raw logs. The report only ever needs the counts.",
      stack: ["n8n", "Airtable"],
      viz: {
        type: "usage",
        caption: "Daily usage against an alert line, illustrative units",
        series: [22, 25, 19, 28, 31, 24, 12, 10, 27, 33, 29, 35, 71, 38, 14, 11, 30, 34, 36, 29, 41],
        threshold: 60,
        unit: "units"
      }
    },
    {
      id: "explainers",
      featured: false,
      title: "Narrated explainer videos",
      tags: ["agents"],
      status: "Live, shared with the team",
      oneLiner: "A deck or a study goes in. A short narrated video with a hand-drawn mascot comes out.",
      how: "A skill writes the script from the source, a pronunciation step fixes names and acronyms, open-source text-to-speech records the voice, and the scenes are rendered in code with captions and music.",
      lesson: "Spell names for the voice before you record. It saves every retake.",
      stack: ["Claude skills", "Remotion", "Open-source TTS", "Python"],
      viz: {
        type: "storyboard",
        caption: "How one video is made",
        frames: [
          { label: "Source", note: "A deck, a page or a report" },
          { label: "Script", note: "Short beats, one idea each" },
          { label: "Pronounce", note: "Names and acronyms spelled out" },
          { label: "Voice", note: "Text-to-speech narration" },
          { label: "Board", note: "Mascot and doodles, drawn in code" },
          { label: "Captions", note: "Burned in, plus soft music" }
        ]
      }
    },
    {
      id: "qa-signals",
      featured: false,
      title: "Quality signals: smoke tests and a QA dashboard",
      tags: ["quality", "data", "automation"],
      status: "Prototype and rollout",
      oneLiner: "A pull request starts a smoke suite in another repository. The result comes back to chat.",
      how: "A workflow in the product repository triggers the test repository, waits, counts results from the report and posts one line to a chat channel. Separately, issue-tracker data lands in lakehouse tables and feeds a QA dashboard.",
      lesson: "A green run is not proof. Count the report.",
      stack: ["GitHub Actions", "Playwright", "Slack", "Jira", "Databricks"],
      viz: {
        type: "testGrid",
        caption: "One smoke run, illustrative",
        total: 24,
        fail: 1,
        flaky: 2,
        message: "smoke · web · 21 passed · 2 flaky · 1 failed"
      }
    },
    {
      id: "crm-onboarding",
      featured: false,
      title: "Onboarding into the CRM, in the right order",
      tags: ["data", "automation", "quality"],
      status: "Live",
      oneLiner: "Selected participants become four linked CRM records: organisation, person, position, membership.",
      how: "Records are staged in a base, then created one link at a time by workflows. Each step waits for a gate that checks a fact, the ID written by the step before, never a status someone typed. Every creator can run twice without creating twice.",
      lesson: "Gates read facts, not statuses.",
      stack: ["Airtable", "n8n", "Salesforce"],
      viz: {
        type: "chain",
        caption: "Four linked records, each gated on the one before",
        steps: ["Organisation", "Person", "Position", "Membership"],
        gate: "ID present",
        firstRun: "First run: 4 created",
        secondRun: "Second run: 0 created, 4 skipped"
      }
    },
    {
      id: "enrichment",
      featured: false,
      title: "Founder and contact enrichment",
      tags: ["data", "automation"],
      status: "Live",
      oneLiner: "Fills in who runs each venture, from several sources, in a fixed order of trust.",
      how: "A weekly workflow picks the records that were never checked or not checked for six months. It asks each source in turn, keeps the most trusted answer for every field, and writes down when it looked so nothing is fetched twice.",
      lesson: "Write down when you last checked. It is the cheapest cache there is.",
      stack: ["n8n", "Airtable", "Salesforce"],
      viz: {
        type: "waterfall",
        caption: "One record, filled source by source (illustrative)",
        sources: ["CRM", "Company database", "Second database", "Email finder"],
        fields: [
          { label: "Founder name", from: 0 },
          { label: "Role", from: 0 },
          { label: "LinkedIn profile", from: 1 },
          { label: "Company website", from: 2 },
          { label: "Work email", from: 3 }
        ],
        stamp: "Checked today. Next look in six months."
      }
    },
    {
      id: "dedupe",
      featured: false,
      title: "One row per organisation",
      tags: ["data"],
      status: "Live",
      oneLiner: "A daily script folds duplicate organisation records into one clean list.",
      how: "The same organisation often exists several times under slightly different names. A script strips legal suffixes and punctuation into a match key, merges the rows that share it, and rewrites the clean table every morning. Corrections belong in the source, not in the copy.",
      lesson: "Build a match key. Leave the original names alone.",
      stack: ["Airtable", "JavaScript"],
      viz: {
        type: "merge",
        caption: "Made-up names, real pattern",
        rows: [
          { name: "Acme Example Ltd.", key: "acme example" },
          { name: "ACME Example", key: "acme example" },
          { name: "Acme Example, Inc.", key: "acme example" },
          { name: "Northwind Demo GmbH", key: "northwind demo" },
          { name: "Northwind Demo", key: "northwind demo" },
          { name: "Sample Works SA", key: "sample works" }
        ],
        beforeLabel: "6 records",
        afterLabel: "3 organisations"
      }
    },
    {
      id: "vendor-eval",
      featured: false,
      title: "Evaluating a data tool like a test suite",
      tags: ["data", "quality"],
      status: "Done",
      oneLiner: "Before buying, five measured tests decided what a new tool should and should not be used for.",
      how: "Each test had its pass line written down first: coverage, accuracy against records we already trust, cost per useful result, and a check on a sample the tool had not seen during set-up. The outcome was a split verdict: use it for some jobs, keep the existing stack for others.",
      lesson: "Write the pass line before you run the test.",
      stack: ["Python", "Airtable", "Evals"],
      viz: {
        type: "scorecard",
        caption: "Five tests against their pass lines, illustrative scores",
        tests: [
          { label: "Coverage", score: 82, pass: 70 },
          { label: "Accuracy against trusted records", score: 78, pass: 75 },
          { label: "Cost per useful result", score: 52, pass: 60 },
          { label: "Out-of-sample check", score: 74, pass: 70 },
          { label: "Fits the workflow", score: 64, pass: 60 }
        ],
        passLabel: "pass line",
        verdict: "Split verdict: good for some jobs, not for others."
      }
    },
    {
      id: "workflow-inventory",
      featured: false,
      title: "A workflow inventory with owners",
      tags: ["quality", "automation"],
      status: "Done",
      oneLiner: "Every workflow gets a status, an owner and a warning label if it writes to production.",
      how: "An agent read every workflow and credential in the project, sorted them into folders and tagged each one: live, manual tool, in development, paused or stale; who owns it; whether it writes to production or calls an external AI. Tagging creates no new version, so nothing live was touched.",
      lesson: "If nobody owns it, it is already stale.",
      stack: ["n8n", "Claude"],
      viz: {
        type: "inventory",
        caption: "An illustrative inventory. Tap a status.",
        statuses: [
          { id: "live", label: "Live", count: 14 },
          { id: "manual", label: "Manual tool", count: 5 },
          { id: "dev", label: "In development", count: 4 },
          { id: "paused", label: "Paused", count: 3 },
          { id: "stale", label: "Stale candidate", count: 4 }
        ],
        flagLabel: "writes to production",
        flagged: 6
      }
    },
    {
      id: "digests",
      featured: false,
      title: "Scheduled agents that email me",
      tags: ["agents", "automation"],
      status: "Live",
      oneLiner: "Every week: events worth going to, what the email campaigns did, and what my workflows got up to.",
      how: "Each one is a scheduled task with a small profile file that says what matters. The agent gathers, filters and writes a short email, signed by the cog. One of them watches for events like this one.",
      lesson: "Send counts and exceptions. Nobody reads a log by email.",
      stack: ["Claude", "n8n", "Salesforce Marketing Cloud"],
      viz: {
        type: "schedule",
        caption: "A week of runs, illustrative times",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        runs: [
          { day: 0, time: "08:00", label: "Workflow admin digest", tag: "automation" },
          { day: 2, time: "09:00", label: "Tech events alert", tag: "agents" },
          { day: 6, time: "16:00", label: "Email activity summary", tag: "data" },
          { day: 6, time: "16:00", label: "Sourcing tracker report", tag: "agents" }
        ]
      }
    },
    {
      id: "signed-emails",
      featured: false,
      title: "Automated emails that sign their work",
      tags: ["automation", "agents"],
      status: "Live",
      oneLiner: "Every email an automation sends me ends with a small card: what ran, who started it, how long it took and when it runs next.",
      how: "One shared script sends the mail and appends the footer, so no task can forget it. The cog changes its badge by report type. If a machine wrote it, the reader can tell at a glance.",
      lesson: "Label machine-written mail. Trust starts with knowing who is talking.",
      stack: ["Python", "Claude"],
      viz: {
        type: "footer",
        caption: "The footer card, illustrative values. Tap a report type.",
        signature: "Generated by Claukshay",
        rows: [
          { k: "Steps", v: "4 of 4 done" },
          { k: "Started by", v: "Schedule" },
          { k: "Took", v: "2 min" },
          { k: "Next run", v: "Monday 08:00" }
        ],
        kinds: [
          { id: "events", label: "Events alert" },
          { id: "digest", label: "Workflow digest" },
          { id: "usage", label: "Usage report" }
        ]
      }
    }
  ],

  game: {
    perGame: 8,
    secondsPerCall: 7,
    label: "bonus round",
    title: "Read or change?",
    body: "An agent wants to run a tool call. You are the guardrail. Let it run if it only reads. Hand it to a human if it changes anything. Eight calls, a few seconds each.",
    start: "Start",
    again: "Play again",
    allow: "Let it run",
    allowHint: "it only reads",
    block: "Hand to a human",
    blockHint: "it changes something",
    round: "Call {n} of {total}",
    scoreLabel: "Score",
    streakLabel: "Streak",
    bestLabel: "Best",
    timeout: "Too slow. The agent went ahead.",
    right: "Right.",
    wrong: "Not quite.",
    next: "Next call",
    resultTitle: "{n} of {total}",
    share: "Tell me your score when you say hi. It is an easy opener.",
    ranks: [
      { min: 0, title: "The agent is running the place", line: "Come find me. I have stories like that." },
      { min: 4, title: "Careful operator", line: "Solid. The tricky ones catch everybody." },
      { min: 7, title: "Read-only purist", line: "You would get on with my help agent." },
      { min: 8, title: "Human guardrail", line: "A perfect run. Tell me your secret when you say hi." }
    ],
    calls: [
      { call: "GET /records?limit=10", changes: false, why: "A plain read." },
      { call: "DELETE /records/42", changes: true, why: "Deleting is as changing as it gets." },
      { call: "POST /search {\"query\": \"water\"}", changes: false, why: "POST, but it only searches. Still a read." },
      { call: "SELECT name FROM ventures WHERE year = 2026", changes: false, why: "A query. Nothing is written." },
      { call: "UPDATE leads SET status = 'approved'", changes: true, why: "It rewrites every row. There is no WHERE." },
      { call: "list_workflows()", changes: false, why: "Listing is reading." },
      { call: "publish_workflow(id)", changes: true, why: "Publishing makes a draft live." },
      { call: "git status", changes: false, why: "It only looks." },
      { call: "git push --force", changes: true, why: "It overwrites history on the remote." },
      { call: "send_email(to: 400 contacts)", changes: true, why: "No database changes, but 400 inboxes do." },
      { call: "get_schema(table)", changes: false, why: "Reading the schema changes nothing." },
      { call: "PATCH /flags/new-feature {\"on\": true}", changes: true, why: "It turns a feature on for real users." },
      { call: "EXPLAIN DELETE FROM leads", changes: false, why: "EXPLAIN only shows the plan. Nothing is deleted." },
      { call: "rm -rf ./tmp", changes: true, why: "Even temporary files are a change." }
    ]
  },

  fieldNotes: {
    title: "Field notes",
    body: "Things production taught me. Most of them the hard way.",
    notes: [
      { rule: "One cell, one writer.", why: "Every field has exactly one automation allowed to write it. Two writers means a slow, polite fight." },
      { rule: "Gates read facts, not statuses.", why: "Check that the record ID exists, not that a status field says done. Statuses lie; facts are there or they are not." },
      { rule: "Creators must be idempotent.", why: "One day a trigger will fire again for every row. Make sure the second run creates nothing." },
      { rule: "Zero new items is not proof.", why: "An empty sweep can mean nothing changed, or that you only look for new things and missed the edits." },
      { rule: "A draft is not a deployment.", why: "Edits made through an API can sit unpublished while everyone believes they are live. Check the running version." },
      { rule: "Agents read. People change.", why: "Give the agent the lookup and the person the last click. Every edit keeps an owner." }
    ]
  },

  toolbox: {
    title: "Toolbox",
    groups: [
      { label: "Agents", items: ["Claude", "Claude Code", "Skills and plugins", "MCP"] },
      { label: "Automation", items: ["n8n", "Airtable automations", "GitHub Actions", "Python"] },
      { label: "Data and CRM", items: ["Airtable", "Salesforce", "Marketing Cloud", "Databricks", "SQL"] }
    ]
  },

  personal: {
    title: "Away from the keyboard",
    photoCaption: "Usually found near water, trees or both.",
    cards: [
      {
        id: "tech",
        title: "Technology, also for fun",
        body: "I like finding out how a tool really behaves, usually by breaking it gently. Lately that means coding agents and teaching myself better Python."
      },
      {
        id: "hiking",
        title: "Hiking, back in India",
        body: "I used to go hiking in India. Ask me about it, or tell me where to start around here.",
        todo: "To confirm with Akshay: which hills or treks, and when. Nothing specific is claimed until then."
      },
      {
        id: "quiet",
        title: "Quiet by default",
        body: "I listen more than I talk. Give me a real problem to think about and that changes quickly."
      }
    ]
  },

  connect: {
    title: "Stay in touch",
    body: "LinkedIn is the best place to reach me. A short note about where we met helps.",
    linkedinLabel: "Connect on LinkedIn",
    qrTitle: "Share this page",
    qrReady: "Let someone scan this to open the page.",
    qrPending: "This QR points to my LinkedIn for now. It will point to this page once the page has a public address."
  },

  footer: {
    lines: [
      "A personal page. Views are my own.",
      "Project descriptions are generalised and the numbers in the visuals are illustrative."
    ],
    built: "Planned and built with Claude, reviewed by a human."
  },

  /* Small interface strings. Code reads these through AKt(key, fallback, vars). {n}, {total}, {v}, {unit} are placeholders. */
  ui: {
    navApproach: "Say hi",
    navJourney: "Journey",
    navWork: "How I work",
    navProjects: "Projects",
    navNotes: "Field notes",
    navToolbox: "Toolbox",
    navPersonal: "Personal",
    navConnect: "Connect",
    labelApproach: "say hi",
    labelJourney: "journey",
    labelWork: "how I work",
    labelProjects: "recent work",
    labelNotes: "field notes",
    labelToolbox: "toolbox",
    labelPersonal: "away from the keyboard",
    labelConnect: "connect",
    askMeAbout: "Ask me about",
    hereToLearn: "Here to learn:",
    howToSayHi: "How to say hi",
    youAreHere: "you are here",
    themeToggle: "Switch between light and dark",
    language: "Language",
    showQr: "Show QR full screen",
    close: "Close",
    draft: "draft",
    all: "All",
    ofCount: "{n} of {total}",
    open: "Open",
    runAgain: "Run again",
    play: "Play",
    howItWorks: "How it works",
    lesson: "Lesson",
    stack: "Stack",
    kindInput: "input",
    kindAgent: "agent",
    kindRule: "rule",
    kindData: "data",
    kindHuman: "human",
    kindOutput: "output",
    flagOff: "Off",
    flagPilot: "Pilot",
    flagEveryone: "Everyone",
    killSwitch: "Kill switch",
    killWins: "Kill switch wins",
    seeFeature: "{n} of {total} see the feature",
    pilotGroup: "Pilot group",
    alertLine: "alert line",
    dayN: "Day {n}",
    dayReadout: "Day {n} · {v} {unit}",
    tapAPoint: "Tap a day",
    rolloutLabel: "Rollout",
    usageAria: "{caption}. Peak {peak} {unit} on day {day}, alert line at {threshold}. Use arrow keys to read each day.",
    chatFromAgent: "Agent",
    chatFromColleague: "Colleague",
    vm_from: "from {src}",
    vm_skip: "skip",
    vm_id: "ID ✓",
    vm_pass: "pass",
    vm_fail: "fail",
    vm_score: "{label}: {score} of 100, pass line {pass}, {result}",
    vm_count: "×{n}",
    skipToContent: "Skip to content",
    topOfPage: "{name}, top of page",
    navSections: "Sections",
    terminalCommands: "Commands",
    stepN: "Step {n}",
    qrCode: "QR code",
    gameToolCall: "Agent tool call",
    gameResultDots: "Result for each call",
    gameDotRight: "right",
    gameDotWrong: "wrong",
    noscript: "This page needs JavaScript for its interactive parts."
  }
};
