/* data.js — every word on the page lives here, so copy can be edited without touching layout.
   Public page: no colleague, partner or venture names, no internal links or IDs, no real internal figures.
   Numbers inside project visualisations are illustrative and are labelled as such on the page. */

window.AK = {
  /* true while Akshay is reviewing: shows dashed "to confirm" notes. Set to false before sharing. */
  draft: false,

  /* The public address of this page, once it has one (e.g. "https://example.org/akshay").
     Leave empty until then. The QR in the Connect section is drawn from this. */
  siteUrl: "https://kanhere.github.io",

  profile: {
    name: "Akshay Kanhere",
    role: "Associate, Technology Operations",
    team: "UpLink, World Economic Forum",
    place: "Geneva",
    intro: [
      "I make an innovation team's operations easier with technical solutions: automations, data plumbing and, lately, a lot of agents.",
      "Computer engineer from Mumbai. Working with the Forum since 2020, joined as staff in January 2024."
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
    ]
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
        id: "engineer",
        when: "2014 – 2017",
        year: "2014–17",
        place: "Mumbai",
        title: "Software engineer",
        sub: "An IT services company",
        body: "First job. Trained on mainframes (DB2, CICS), then moved to Salesforce quality assurance: working out how things break before users do.",
        tags: ["Mainframe", "Salesforce QA"]
      },
      {
        id: "consulting",
        when: "2017 – 2023",
        year: "2017–23",
        place: "Bengaluru, Mumbai, Pune",
        title: "Technology consulting",
        sub: "Analyst, then consultant, then senior consultant",
        body: "Six years in quality: Salesforce testing, scenario testing, then leading test teams. Three cities along the way.",
        tags: ["Salesforce", "Test lead", "Quality management"]
      },
      {
        id: "forum-2020",
        when: "2020",
        year: "2020",
        place: "India",
        title: "Started working with the Forum",
        sub: "On UpLink, its open innovation platform",
        body: "Joined the UpLink project in its early days, as a consultant. UpLink connects early-stage ventures with the partners, experts and funding they need.",
        tags: ["UpLink"]
      },
      {
        id: "staff",
        when: "January 2024",
        year: "2024",
        place: "Geneva",
        title: "Joined the Forum as staff",
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

  themes: [
    { id: "agents", label: "AI agents" },
    { id: "automation", label: "Automation" },
    { id: "data", label: "Data" },
    { id: "quality", label: "Quality" }
  ],

  projectsIntro: {
    title: "Recent work",
    body: "Eight things I have built or am building. Described by what they do and the pattern behind them. Each one has a small visual you can run.",
    disclaimer: "Descriptions are generalised. Numbers in the visuals are illustrative, not real figures."
  },

  /* viz.type decides which small visualisation projects.js draws:
     pipeline | beforeAfter | storyboard | testGrid | flags | usage | schedule | chat */
  projects: [
    {
      id: "lead-research",
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
      title: "Pitch booklets from a database",
      tags: ["agents", "automation"],
      status: "Live, shared with the team",
      oneLiner: "A slide deck for a judging day, generated from the source data and then audited against it.",
      how: "A Claude skill reads the shortlisted records, fills the slide template and places every logo by record. A second, read-only skill then audits the finished deck against the source and reports what does not match.",
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
      id: "explainers",
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
      id: "flags",
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
      id: "digests",
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
      id: "team-agent",
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
    }
  ],

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
  }
};
