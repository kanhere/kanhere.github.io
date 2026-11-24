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
      "Hardcore computer engineer from Mumbai. I build AI agents and automations for business teams. Day to day I sit with the team at UpLink, the World Economic Forum's open innovation platform, and solve their operational problems with technology.",
      "I was wiring systems together by hand long before MCP, and with AI agents I now do it at scale. Data is the other half of my work, and my QA background keeps both reliable."
    ],
    askMeAbout: [
      "AI agents for business teams",
      "Claude skills and plugins",
      "MCP connectors",
      "Read-only agents",
      "n8n and Clay workflows",
      "Salesforce and Airtable data",
      "Debugging and root causes"
    ],
    /* A short facts card next to the photo: what a recruiter looks for first. */
    glance: {
      title: "At a glance",
      rows: [
        { k: "Now", v: "Technology operations at UpLink, World Economic Forum" },
        { k: "Based in", v: "Geneva, Switzerland" },
        { k: "Experience", v: "12 years in tech, since 2014" },
        { k: "Core stack", v: "AI agents, Salesforce, n8n, Airtable, Clay, Python" },
        { k: "Certified", v: "Five Salesforce certifications" }
      ]
    },
    openTo: {
      label: "Open to roles",
      roles: ["Forward Deployed Engineer", "GTM Engineer", "AI Automation Engineer", "Salesforce Solutions Engineer"],
      where: "Switzerland or nearby France. On-site, hybrid or remote.",
      note: "Also open to any challenge that technology can solve."
    },
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
          "  \"description\": \"Builds AI agents and automations for business teams\",",
          "  \"tools\": [\"salesforce\", \"airtable\", \"n8n\", \"clay\", \"claude\", \"python\"],",
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

  /* "What I do": four pillars, each with a short text and a small visual (js/craft.js).
     viz.type: toolmap | flow | runReport | artifacts | trace. Numbers in runReport are illustrative. */
  craft: {
    title: "What I do",
    body: "Five parts of the job, with more room than a headline gives them.",
    pillars: [
      {
        id: "connect",
        title: "Connecting systems, before MCP and after",
        body: [
          "I was building integrations long before MCP existed. It meant reading the API docs, writing each call by hand, and dealing with logins, paging and errors one system at a time.",
          "AI agents and MCP connectors changed the pace, not the job. I describe what should move where, the agent does the wiring, and I review it. The workflows document themselves and are shared across the team."
        ],
        viz: {
          type: "toolmap",
          caption: "The tools I connect. Tap one to see what it does here.",
          hub: "Agents and workflows",
          adminLabel: "I administer this",
          adminNote: "A ring marks the four platforms I also administer.",
          tools: [
            { id: "salesforce", name: "Salesforce", admin: true, role: "The CRM: the record of organisations, people and memberships." },
            { id: "marketing-cloud", name: "Marketing Cloud", admin: false, role: "Newsletters and email journeys." },
            { id: "airtable", name: "Airtable", admin: true, role: "The working bases where the team reviews, scores and decides." },
            { id: "n8n", name: "n8n", admin: true, role: "Scheduled workflows that move data between the other systems." },
            { id: "clay", name: "Clay", admin: true, role: "Finds companies and contacts for go-to-market research." },
            { id: "databricks", name: "Databricks", admin: false, role: "Governed data tables and the dashboards on top of them." },
            { id: "jira", name: "Jira", admin: false, role: "Tickets, and the source data for quality dashboards." },
            { id: "confluence", name: "Confluence", admin: false, role: "Documentation, kept current by scheduled agents." },
            { id: "python", name: "Python", admin: false, role: "Scripts for whatever the platforms cannot do on their own." },
            { id: "claude", name: "Claude", admin: false, role: "Agents and skills, reaching the systems through MCP connectors." }
          ]
        },
        compare: {
          caption: "One integration, two ways",
          before: {
            label: "By hand",
            steps: ["Read the API docs", "Write each call", "Handle logins, paging and errors", "Test against real data", "Write the documentation"]
          },
          after: {
            label: "With agents and MCP",
            steps: ["Describe what should move where", "The agent wires it through connectors", "I review and test it", "It documents itself"]
          }
        }
      },
      {
        id: "data",
        title: "Data, the other half",
        body: [
          "An automation is only as good as the data under it, and data was my job well before AI. I have owned data migrations on Salesforce and on mainframes.",
          "Today I bring data in from data providers and the open web, map it to what we already hold, remove the duplicates, and turn it into structured datasets that the business and its workflows can rely on."
        ],
        viz: {
          type: "flow",
          caption: "From raw sources to a dataset people trust",
          stages: [
            { label: "Sources", note: "Data providers, the open web, forms and the CRM" },
            { label: "Bring in", note: "Scheduled pulls that note when they last ran" },
            { label: "Map", note: "Match fields and names to what we already hold" },
            { label: "Clean", note: "Remove duplicates, keep the most trusted value" },
            { label: "Dataset", note: "One structured table per subject" },
            { label: "Use", note: "Workflows, dashboards and people" }
          ]
        }
      },
      {
        id: "quality",
        title: "Reliable, because of QA",
        body: [
          "I spent years testing other people's systems, and it left me with one habit: asking how something will break before it ships.",
          "So the checks are built in from the start. A second agent that cannot edit audits the first, and the numbers that prove a workflow works are collected on every run, not put together by hand afterwards. The rules behind this are in the field notes further down."
        ],
        viz: {
          type: "runReport",
          caption: "Every run reports itself. Illustrative numbers.",
          title: "Weekly run",
          status: "Passed",
          rows: [
            { k: "Records read", v: "310" },
            { k: "Created", v: "12" },
            { k: "Skipped, already there", v: "298" },
            { k: "Sent to a person", v: "3" },
            { k: "Audit by a second agent", v: "No mismatches" }
          ],
          note: "If a number looks wrong, the run says so before a person has to notice."
        }
      },
      {
        id: "show",
        title: "Show, don't tell",
        body: [
          "I would rather show an idea working than describe it. A quick proof of concept, a live demo or something people can open and share usually settles a discussion faster than a document."
        ],
        viz: {
          type: "artifacts",
          caption: "What I usually bring to the meeting",
          items: [
            { id: "poc", label: "Proof of concept", note: "The idea, working on a small sample" },
            { id: "demo", label: "Live demo", note: "The real thing, run in front of the team" },
            { id: "dashboard", label: "Dashboard", note: "The numbers, updated without me" },
            { id: "page", label: "Walkthrough page", note: "One link that explains the whole flow" },
            { id: "video", label: "Explainer video", note: "Short and narrated, for people who were not in the room" }
          ]
        }
      },
      {
        id: "debug",
        title: "Debugging, my favourite part",
        body: [
          "I love debugging: following a flow step by step until the root cause shows itself. I have done it since long before AI, back on mainframes, and it is still the part of the job I enjoy most.",
          "The symptom is rarely where the problem is. So I trace the flow backwards, one step at a time, until something does not add up."
        ],
        viz: {
          type: "trace",
          caption: "A made-up case, traced back to its cause",
          next: "Trace the next step",
          again: "Trace it again",
          steps: [
            { kind: "symptom", label: "Symptom", text: "A welcome email never arrived." },
            { kind: "ok", label: "Did the workflow run?", text: "Yes, on schedule." },
            { kind: "bad", label: "Did it pick up the record?", text: "No. The record never matched the trigger." },
            { kind: "bad", label: "Why not?", text: "The field the trigger reads was empty." },
            { kind: "root", label: "Root cause", text: "A formula upstream was changed the week before." }
          ],
          fix: "Fix the formula, then add a check so the next empty field raises a flag."
        }
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
        id: "capgemini",
        when: "2014 – 2017",
        year: "2014–17",
        place: "Mumbai",
        title: "Senior Software Engineer",
        sub: "iGATE, now Capgemini",
        org: "Capgemini",
        body: "Joined as a software engineer. Started as a mainframe developer on fleet programmes (DB2, CICS), then moved into Salesforce QA: working out how things break before users do.",
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
        body: "Joined as a business technology analyst and left as a senior consultant. Mainframe development, Salesforce QA and Salesforce business analysis on healthcare and partner management programmes, then leading a QA team. Three cities along the way.",
        tags: ["Salesforce QA", "Business analysis", "QA lead"]
      },
      {
        id: "staff",
        when: "January 2024",
        year: "2024",
        place: "Geneva",
        title: "Joined the World Economic Forum",
        sub: "Product management, then technology operations, UpLink",
        body: "Began in product management for UpLink, the Forum's open innovation platform for early-stage ventures, working with vendors to deliver the product. Then moved into technology operations. Based in Geneva.",
        tags: ["Product management", "Technology operations"]
      },
      {
        id: "now",
        when: "2026",
        year: "Now",
        place: "Geneva",
        title: "Associate, Technology Operations",
        sub: "UpLink and the Forum's wider technology team",
        body: "I build the AI agents and automations the team runs on, connecting Salesforce, Marketing Cloud, Airtable, n8n, Clay, Databricks, Jira and Confluence with Python and Claude. I also administer Salesforce, Airtable, n8n and Clay. The workflows document themselves and are shared across the team.",
        tags: ["AI agents", "Automation", "Data"]
      }
    ],
    /* A small matrix under the trail: which kind of work happened in which chapter. */
    tracks: {
      title: "What I did where",
      caption: "A mark means I did that kind of work in that chapter.",
      yes: "yes",
      no: "no",
      chapters: [
        { when: "2014–17", org: "iGATE, now Capgemini" },
        { when: "2017–23", org: "Deloitte" },
        { when: "2024–now", org: "World Economic Forum" }
      ],
      rows: [
        { label: "Mainframe development", in: [true, true, false] },
        { label: "Salesforce QA", in: [true, true, false] },
        { label: "Business analysis", in: [false, true, false] },
        { label: "Leading a QA team", in: [false, true, false] },
        { label: "Product management", in: [false, false, true] },
        { label: "Technology operations", in: [false, false, true] },
        { label: "AI agents and automation", in: [false, false, true] }
      ]
    },
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
      title: "Go-to-market lead pipeline",
      tags: ["agents", "automation", "data"],
      status: "Live",
      oneLiner: "Finds companies that fit an innovation challenge: AI-researched, de-duplicated and scored, with a person approving each lead before outreach.",
      problem: "Finding companies that fit a challenge used to be desk research by hand: slow, uneven, and full of companies we already knew.",
      checks: "Every candidate keeps its sources. Duplicates are caught against existing leads and the CRM before enrichment, so nothing is looked up twice. Nothing goes out without a person's approval.",
      result: "A ranked, sourced long list for each challenge. The team spends its time judging fit instead of searching.",
      how: "A challenge brief goes in. AI research on Clay and n8n proposes candidates with sources, duplicates are removed, company databases and the CRM fill the gaps, and a fit score ranks what is left. A person approves every lead before any outreach.",
      lesson: "The human check stays. The agent's job is to make it fast.",
      stack: ["Clay", "n8n", "Airtable", "Claude", "Salesforce"],
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
      title: "Reusable Claude skills: pitch booklets",
      tags: ["agents", "automation"],
      status: "Live, shared with the team",
      oneLiner: "Skills the whole team runs. One builds a pitch booklet from the database, and a second, read-only agent audits it.",
      problem: "Before a judging day, someone spent days copying records into slides, aligning logos and chasing late edits. The deck was out of date as soon as the data changed.",
      checks: "The audit skill is separate from the builder and cannot edit. It compares every slide with its source record, tests the links and ranks what it finds by severity, so a person reviews a short list instead of the whole deck.",
      result: "A booklet on request, rebuilt whenever the data changes, and a how-to guide so colleagues run it without me.",
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
      title: "A read-only help agent in Slack",
      tags: ["agents", "quality"],
      status: "Early pilot",
      oneLiner: "Read-only by design: it checks the systems and hands colleagues the steps. It never changes data.",
      problem: "The same questions reach me every week: why is this record stuck, where is that document, how do I fix this field. The answers sat in my head.",
      checks: "It has read-only tools and nothing else, so it cannot change data even when asked. It carries work knowledge only, and every change is still made by a person under their own login.",
      result: "Colleagues get the answer and the steps straight away, and I get fewer interruptions. It is an early pilot, so the playbooks are still growing.",
      flow: ["Question in Slack", "Agent reads the systems", "Explains what it found", "Hands back the steps", "A person makes the change"],
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
      id: "digests",
      featured: false,
      title: "Scheduled agents that report what changed",
      tags: ["agents", "automation"],
      status: "Live",
      oneLiner: "They track what changed in our systems and who changed it, update the docs and email a weekly summary.",
      problem: "Systems change quietly. A field is renamed or a workflow is edited, and weeks later nobody remembers who did it or why. The documentation drifts.",
      checks: "The agents only read the systems they watch. They send counts and exceptions, not raw logs, and every email ends with a card showing what ran, who started it and when it runs next.",
      result: "A weekly summary in the inbox, documentation that stays current, and an answer when someone asks who changed what.",
      flow: ["Audit logs and run history", "What changed, and who", "Docs updated", "Weekly email"],
      how: "Each one is a scheduled task with a small profile file that says what matters. The agent reads the audit logs and run history, works out what changed and who changed it, updates the documentation and writes a short email, signed by the cog. Others report what the email campaigns did and which tech events are worth attending.",
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
      id: "ai-usage",
      featured: false,
      title: "AI cost tracking",
      tags: ["data", "automation"],
      status: "Live",
      oneLiner: "A dashboard and alerts, so AI spend is visible before it surprises anyone.",
      problem: "AI features use credits, and the only view of the spend was the bill at the end of the month.",
      checks: "Alerts fire when a day runs far above normal, so a runaway automation shows up the same day. The table keeps counts, not raw logs, so the report stays small and readable.",
      result: "Spend is visible every day, by feature and by person, with a monthly report nobody has to put together.",
      flow: ["Audit log", "Daily roll-up", "Usage table", "Dashboard and monthly report", "Alerts"],
      how: "A scheduled workflow pulls the audit log every day, rolls events up into counts per feature and per person, and writes them to a base with a dashboard and a monthly report on top. Alerts fire when a day runs far above normal.",
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
      id: "vendor-eval",
      featured: false,
      title: "Vendor evaluations run as experiments",
      tags: ["data", "quality"],
      status: "Done",
      oneLiner: "Data providers and tools compared on measured cost per result, before anything is bought.",
      problem: "Tools and data providers are easy to judge on a demo and hard to judge on results. We wanted evidence before deciding.",
      checks: "The pass lines are written before the test runs. Every tool gets the same sample, a final check uses records it has not seen, and failed runs count towards the cost.",
      result: "A verdict with numbers behind it, shared as a page the decision-makers can read in a few minutes: what each tool is good for, and what it is not.",
      flow: ["Write the pass lines", "Same sample for every tool", "Measure cost per result", "Check on unseen records", "Verdict"],
      how: "Each test has its pass line written down first: coverage, accuracy against records we already trust, cost per useful result, and a check on a sample the tool has not seen during set-up. One recent outcome was a split verdict: use the new tool for some jobs, keep the existing stack for others.",
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
      { label: "Agents and AI", items: ["AI agents", "Claude", "Claude Code", "Skills and plugins", "MCP", "Prompt engineering"] },
      { label: "Automation", items: ["Workflow automation", "n8n", "Clay", "Airtable automations", "REST APIs", "GitHub Actions"] },
      { label: "Data and CRM", items: ["Salesforce", "Marketing Cloud", "Data Cloud", "Airtable", "Databricks", "Data management", "Data quality", "Data governance"] },
      { label: "Languages", items: ["Python", "SQL", "JavaScript", "Java"] },
      { label: "Quality", items: ["Test design", "Test automation", "Selenium", "Scenario testing"] },
      { label: "Product and operations", items: ["Product management", "Business analysis", "Technical operations", "Jira", "Confluence"] },
      { label: "Where I started", items: ["COBOL", "JCL", "DB2"] }
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
      "Project descriptions are generalised and the numbers in the visuals are illustrative.",
      "This page counts visits with GoatCounter. No cookies, and nothing follows you to other sites."
    ]
  },

  /* Small interface strings. Code reads these through AKt(key, fallback, vars). {n}, {total}, {v}, {unit} are placeholders. */
  ui: {
    navApproach: "Say hi",
    navCraft: "What I do",
    navJourney: "Journey",
    navWork: "How I work",
    navProjects: "Projects",
    navNotes: "Field notes",
    navToolbox: "Toolbox",
    navPersonal: "Personal",
    navConnect: "Connect",
    labelApproach: "say hi",
    labelCraft: "what I do",
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
    seeWork: "See recent work",
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
    problem: "The problem",
    howItWorks: "How it works",
    checks: "What keeps it reliable",
    result: "What it gives the team",
    flowSteps: "Steps",
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
