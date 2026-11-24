/* data.de.js — German strings only, same shape as data.js. Merged over the English by lang.js. */
window.AK_LANGS = window.AK_LANGS || {};
window.AK_LANGS.de = {
  photos: {
    portrait: { alt: "Akshay an einem See bei Sonnenuntergang, mit Sonnenbrille" },
    outdoors: { alt: "Akshay an einem Waldsee in Herbstfarben" }
  },

  profile: {
    role: "Associate, Technology Operations",
    team: "UpLink, Weltwirtschaftsforum",
    place: "Genf",
    intro: [
      "Computeringenieur durch und durch, aus Mumbai. Ich baue KI-Agenten und Automatisierungen für Business-Teams. Im Alltag sitze ich beim Team von UpLink, der offenen Innovationsplattform des Weltwirtschaftsforums, und löse ihre operativen Probleme mit Technologie.",
      "Lange vor MCP habe ich Systeme von Hand verbunden, indem ich API-Doku gelesen habe. Mit KI-Agenten und MCP mache ich dieselbe Arbeit heute in grossem Massstab. Daten sind die andere Hälfte meiner Arbeit, von Migrationen auf Salesforce und Mainframes bis zu Datensätzen aus Datenanbietern und dem offenen Web. Mein QA-Hintergrund hält das Ganze verlässlich."
    ],
    askMeAbout: [
      "KI-Agenten für Business-Teams",
      "Claude-Skills und Plugins",
      "MCP-Connectors",
      "Read-only-Agenten",
      "n8n- und Clay-Workflows",
      "Salesforce- und Airtable-Daten"
    ],
    hereToLearn: ["Evals", "Agenten in Produktion", "Wie du von Agenten geschriebenen Code reviewst"]
  },

  mark: {
    note: "Claude + Akshay. So heissen meine Automatisierungen, und dieses kleine Zahnrad signiert die E-Mails, die sie verschicken."
  },

  terminal: {
    hint: "Befehl antippen",
    commands: [
      {
        out: [
          "akshay: Computeringenieur, von Mumbai nach Genf",
          "rolle: Technology Operations, UpLink (Weltwirtschaftsforum)",
          "modus: introvertiert, freundlich, neugierig"
        ]
      },
      {
        out: [
          "12 Jahre in der Tech-Branche",
          "9 bei IT-Dienstleistern und Beratungsfirmen, fast 3 beim Forum",
          "load average: ein Agent, mehrere Workflows, zu viele Tabs"
        ]
      },
      {
        out: [
          "{",
          "  \"name\": \"akshay\",",
          "  \"description\": \"Baut KI-Agenten und Automatisierungen für Business-Teams\",",
          "  \"tools\": [\"salesforce\", \"airtable\", \"n8n\", \"clay\", \"claude\", \"python\"],",
          "  \"input_modes\": [\"ein echtes Problem\", \"eine ruhige Ecke\"],",
          "  \"output_modes\": [\"eine funktionierende Automatisierung\", \"eine ehrliche Meinung\"],",
          "  \"rate_limits\": { \"small_talk\": \"niedrig\", \"deep_dives\": \"unbegrenzt\" },",
          "  \"auth\": \"sag hallo\"",
          "}"
        ]
      },
      {},
      {},
      {
        out: ["Diese Seite ist auch für deinen Agenten geschrieben."]
      },
      { out: ["Ein kurzes Spiel: Hältst du einen Agenten read-only?"], link: { label: "Spielen: Lesen oder ändern?" } }
    ]
  },

  approach: {
    title: "Ich bin introvertiert",
    body: [
      "Ich bin gern hier und mache selten den ersten Schritt. Wenn du das hier liest, hast du den schwierigen Teil schon erledigt.",
      "Sag Hallo. Wenn dir Smalltalk auch nicht liegt, such dir einen dieser Einstiege aus, dann können wir ihn überspringen."
    ],
    startersLabel: "Einfache Einstiege",
    starters: [
      {
        ask: "Was ist die nützlichste langweilige Aufgabe, die ein Agent für dich übernimmt?",
        mine: "Meine: eine Montags-Mail, die mir sagt, was meine Workflows letzte Woche getan haben."
      },
      {
        ask: "Wie hinderst du einen Agenten daran, Dinge zu ändern, die er nur lesen sollte?",
        mine: "Mein Team-Hilfe-Agent schlägt Dinge nach und liefert Schritte zurück. Die Änderung macht er nie selbst."
      },
      {
        ask: "Erzähl mir von einem Workflow, der auf lustige Weise kaputtgegangen ist.",
        mine: "Ich sammle solche Geschichten. Frag mich nach dem Trigger, der einmal für jede Zeile der Tabelle ausgelöst hat."
      },
      {
        ask: "Wo würdest du hier in der Gegend wandern?",
        mine: "In Indien bin ich früher gewandert. Ich freue mich über eine Empfehlung."
      }
    ],
    battery: {
      label: "Sozialer Akku",
      hint: "Gute Fragen laden ihn auf. Öffne einen Einstieg und sieh zu.",
      levels: ["Im Reservemodus", "Wärmt sich auf", "Kommt in Fahrt", "Fast so weit", "Voll geladen. Sag Hallo."]
    }
  },

  journey: {
    title: "Der bisherige Weg",
    route: ["Mumbai", "Bengaluru", "Mumbai", "Pune", "Genf"],
    stops: [
      {
        sub: "Bachelor, Universität Mumbai",
        body: "Vier Jahre Computer Engineering in Mumbai. Abschluss 2014.",
        tags: []
      },
      {
        sub: "iGATE, heute Capgemini",
        body: "Als Software Engineer eingestiegen. Als Mainframe-Entwickler gestartet, an Flottenprogrammen (DB2, CICS), dann in die Salesforce-QA gewechselt: herausfinden, wie Dinge kaputtgehen, bevor es die Nutzer tun.",
        tags: ["Mainframe", "Salesforce-QA"]
      },
      {
        body: "Als Business Technology Analyst eingestiegen und als Senior Consultant gegangen. Mainframe-Entwicklung, Salesforce-QA und Salesforce-Business-Analyse in Programmen für Gesundheitswesen und Partnermanagement, dann Leitung eines QA-Teams. Drei Städte unterwegs.",
        tags: ["Salesforce-QA", "Business-Analyse", "QA-Lead"]
      },
      {
        when: "Januar 2024",
        place: "Genf",
        title: "Beim Weltwirtschaftsforum eingestiegen",
        sub: "Produktmanagement, dann Technology Operations, UpLink",
        body: "Angefangen im Produktmanagement für UpLink, die offene Innovationsplattform des Forums für Ventures in der Frühphase. Zusammen mit Anbietern das Produkt geliefert. Dann in die Technology Operations gewechselt. Standort Genf.",
        tags: ["Produktmanagement", "Technology Operations"]
      },
      {
        year: "Jetzt",
        place: "Genf",
        sub: "UpLink und das weitere Technologieteam des Forums",
        body: "Ich baue die KI-Agenten und Automatisierungen, auf denen das Team läuft, und verbinde Salesforce, Marketing Cloud, Airtable, n8n, Clay, Databricks, Jira und Confluence mit Python und Claude. Dazu administriere ich Salesforce, Airtable, n8n und Clay. Die Workflows dokumentieren sich selbst und werden im Team geteilt.",
        tags: ["KI-Agenten", "Automatisierung", "Daten"]
      }
    ],
    certsLabel: "Fünf Salesforce-Zertifizierungen unterwegs",
    certs: ["Administrator", "Business Analyst", "Marketing Cloud Administrator", "AI Associate", "Data Cloud Consultant"]
  },

  howIWork: {
    title: "So arbeite ich",
    body: "Immer dieselbe Schleife, egal mit welchem Tool. Ich zeige lieber, als zu erzählen.",
    steps: [
      { label: "Erkennen", line: "Die Routine finden, die jemand jede Woche von Hand erledigt.", example: "Beispiel: zwei Tage lang Datensätze in Folien kopieren, vor jedem Jury-Tag." },
      { label: "Kartieren", line: "Das System lesen, bevor ich es anfasse. Zuerst Read-only.", example: "Beispiel: Ein Agent liest Schemas, Automatisierungen und Laufhistorie und ändert nichts." },
      { label: "Bauen", line: "Das Kleinste, was die Routine beseitigt, früh gezeigt: ein Proof of Concept, eine Live-Demo, ein Dashboard oder eine Walkthrough-Seite.", example: "Beispiel: ein Skill, der die Folienvorlage direkt aus der Datenbank füllt." },
      { label: "Prüfen", line: "Ein zweiter Durchgang, der nichts ändern kann, prüft den ersten, und die Zahlen, die belegen, dass es funktioniert, werden automatisch gesammelt.", example: "Beispiel: Ein Audit-Skill vergleicht jede Folie mit ihrem Quelldatensatz und listet die Abweichungen auf." },
      { label: "Übergeben", line: "Doku, ein Owner und ein Ausschalter. Dann gehört es dem Team.", example: "Beispiel: eine Anleitung, ein benannter Owner und ein Flag, das es ohne Deployment abschaltet." }
    ]
  },

  themes: [
    { label: "KI-Agenten" },
    { label: "Automatisierung" },
    { label: "Daten" },
    { label: "Qualität" }
  ],

  projectsIntro: {
    title: "Aktuelle Arbeiten",
    body: "Fünfzehn Dinge, die ich gebaut habe oder gerade baue, beschrieben nach dem, was sie tun, und nach dem Muster dahinter. Zu jedem gibt es eine kleine Visualisierung zum Ausprobieren.",
    disclaimer: "Die Beschreibungen sind verallgemeinert. Zahlen und Namen in den Visualisierungen sind illustrativ, keine echten Werte."
  },

  projects: [
    {
      title: "Go-to-market-Lead-Pipeline",
      status: "Live",
      oneLiner: "Findet Unternehmen, die zu einer Innovation Challenge passen: KI-recherchiert, dedupliziert und bewertet, und ein Mensch gibt jeden Lead frei, bevor eine Ansprache stattfindet.",
      how: "Ein Challenge-Briefing geht rein. KI-Recherche mit Clay und n8n schlägt Kandidaten mit Quellen vor, Dubletten werden entfernt, Firmendatenbanken und das CRM füllen die Lücken, und ein Fit-Score sortiert, was übrig bleibt. Ein Mensch gibt jeden Lead frei, bevor irgendeine Ansprache stattfindet.",
      lesson: "Die menschliche Prüfung bleibt. Der Agent soll sie schnell machen.",
      stack: ["Clay", "n8n", "Airtable", "Claude", "Salesforce"],
      viz: {
        caption: "Ein Lauf, illustrative Zahlen",
        stages: [
          { label: "Briefing", unit: "Briefing" },
          { label: "KI-Recherche", unit: "Kandidaten" },
          { label: "Dubletten", unit: "neu" },
          { label: "Anreichern", unit: "angereichert" },
          { label: "Fit-Score", unit: "guter Fit" },
          { label: "Menschliche Prüfung", unit: "freigegeben" },
          { label: "Ansprache", unit: "kontaktiert" }
        ]
      }
    },
    {
      title: "Wiederverwendbare Claude-Skills: Pitch-Booklets",
      status: "Live, mit dem Team geteilt",
      oneLiner: "Skills, die das ganze Team nutzt. Einer baut ein Pitch-Booklet aus der Datenbank, ein zweiter, nur lesender Agent prüft es.",
      how: "Ein Claude-Skill liest die Shortlist-Datensätze, füllt die Folienvorlage und setzt jedes Logo anhand des Datensatzes. Ein zweiter, nur lesender Skill prüft anschliessend die fertige Präsentation gegen die Quelle und meldet, was nicht übereinstimmt. Dasselbe Muster baut inzwischen auch ein Gewinner-Booklet und ein Teilnehmer-Booklet für Events.",
      lesson: "Erst erzeugen, dann mit einem separaten Durchgang prüfen, der nichts ändern kann.",
      stack: ["Claude-Skills", "Airtable", "Python", "PowerPoint"],
      viz: {
        caption: "Schritte für ein Booklet, illustrativ",
        before: {
          label: "Von Hand",
          steps: ["Daten exportieren", "In Folien einfügen", "Jedes Logo ausrichten", "Späten Änderungen nachlaufen", "Alles Korrektur lesen", "Exportieren und teilen"],
          effort: "etwa 2 Tage"
        },
        after: {
          label: "Mit dem Skill",
          steps: ["Booklet anfordern", "Skill füllt die Vorlage", "Audit-Skill prüft es", "Befunde durchsehen"],
          effort: "etwa 1 Stunde"
        }
      }
    },
    {
      title: "Ein Read-only-Hilfe-Agent in Slack",
      status: "Früher Pilot",
      oneLiner: "Read-only von Grund auf: Er prüft die Systeme und liefert Kolleginnen und Kollegen die Schritte. Er ändert nie Daten.",
      how: "Verpackt als Claude-Plugin mit Playbooks für die wiederkehrenden Fragen und nur lesenden Tools. Er schlägt den aktuellen Stand nach, erklärt, was er gefunden hat, und liefert die Schritte zurück, damit die Person die Änderung unter ihrem eigenen Login macht.",
      lesson: "Agenten schlagen nach. Menschen ändern, so behält jede Änderung einen Owner.",
      stack: ["Claude-Plugin", "Slack", "Airtable"],
      viz: {
        caption: "Ein illustrativer Austausch",
        badge: "read-only",
        messages: [
          { text: "Kannst du diesen Datensatz für mich aktualisieren?" },
          { text: "Ich habe nachgesehen. Der Status ist noch ausstehend, weil ein Pflichtfeld leer ist." },
          { text: "Hier sind die drei Schritte, um es selbst zu beheben. Ich kann die Änderung nicht machen, und das ist Absicht." }
        ],
        why: "Warum read-only? Änderungen bleiben der Person zuordenbar, die darum gebeten hat."
      }
    },
    {
      title: "Ein undokumentiertes System mit einem Read-only-Agenten kartieren",
      status: "Erledigt",
      oneLiner: "Eine Produktionsbase mit jahrelanger Geschichte und ohne verlässliche Doku, von Anfang bis Ende kartiert, ohne etwas zu ändern.",
      how: "Der Agent las Schemas, Automatisierungen, Workflow-Definitionen und Laufhistorie, speicherte Rohdaten auf der Platte und führte ein laufendes Log. Heraus kamen eine Flow-Karte, ein wiederverwendbares Muster und Dokumentation, mit der das Team jetzt arbeitet. Jeder Befund trägt ein Datum, weil sich das System weiterbewegt.",
      lesson: "Eine Karte hat ein Datum. Prüf nach, was deployed ist, bevor du ihr traust.",
      stack: ["Claude Code", "Airtable", "n8n", "Confluence"],
      viz: {
        caption: "Was der Agent gelesen und was er geändert hat",
        nodes: [
          { label: "Tabellen" },
          { label: "Felder" },
          { label: "Automatisierungen" },
          { label: "Workflows" },
          { label: "Laufhistorie" },
          { label: "Doku geschrieben" }
        ],
        readLabel: "gelesen",
        changedLabel: "geändert"
      }
    },
    {
      title: "Geplante Agenten, die berichten, was sich geändert hat",
      status: "Live",
      oneLiner: "Sie verfolgen, was sich in unseren Systemen geändert hat und wer es geändert hat, aktualisieren die Doku und mailen eine wöchentliche Zusammenfassung.",
      how: "Jeder ist eine geplante Aufgabe mit einer kleinen Profildatei, die sagt, was wichtig ist. Der Agent sammelt, filtert und schreibt eine kurze E-Mail, signiert vom Zahnrad. Andere berichten, was die E-Mail-Kampagnen bewirkt haben und welche Tech-Events sich lohnen.",
      lesson: "Schick Zählwerte und Ausnahmen. Niemand liest ein Log per E-Mail.",
      stack: ["Claude", "n8n", "Salesforce Marketing Cloud"],
      viz: {
        caption: "Eine Woche mit Läufen, illustrative Zeiten",
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
        runs: [
          { label: "Workflow-Admin-Digest" },
          { label: "Tech-Event-Hinweis" },
          { label: "E-Mail-Aktivitätsübersicht" },
          { label: "Sourcing-Tracker-Bericht" }
        ]
      }
    },
    {
      title: "Tracking der KI-Kosten",
      status: "Live",
      oneLiner: "Ein Dashboard und Alarme, damit die KI-Ausgaben sichtbar sind, bevor sie jemanden überraschen.",
      how: "Ein geplanter Workflow holt jeden Tag das Audit-Log, verdichtet die Ereignisse zu Zählwerten pro Funktion und pro Person und schreibt sie in eine Base mit einem Dashboard und einem Monatsbericht darüber. Alarme lösen aus, wenn ein Tag weit über dem Normalen liegt.",
      lesson: "Speichere Zählwerte, nicht rohe Logs. Der Bericht braucht immer nur die Zählwerte.",
      stack: ["n8n", "Airtable"],
      viz: {
        caption: "Täglicher Verbrauch gegen eine Alarmlinie, illustrative Einheiten",
        unit: "Einheiten"
      }
    },
    {
      title: "Anbieter-Evaluationen als Experimente",
      status: "Erledigt",
      oneLiner: "Datenanbieter und Tools, verglichen nach gemessenen Kosten pro Ergebnis, bevor etwas gekauft wird.",
      how: "Jeder Test hat seine Bestehensgrenze vorab festgelegt: Abdeckung, Genauigkeit gegenüber Datensätzen, denen wir schon vertrauen, Kosten pro brauchbarem Ergebnis und eine Prüfung an einer Stichprobe, die das Tool beim Einrichten nicht gesehen hat. Ein aktuelles Ergebnis war ein geteiltes Urteil: das neue Tool für manche Aufgaben nutzen, für andere beim bestehenden Stack bleiben.",
      lesson: "Leg die Bestehensgrenze fest, bevor du den Test laufen lässt.",
      stack: ["Python", "Airtable", "Evals"],
      viz: {
        caption: "Fünf Tests gegen ihre Bestehensgrenzen, illustrative Werte",
        tests: [
          { label: "Abdeckung" },
          { label: "Genauigkeit gegenüber vertrauenswürdigen Datensätzen" },
          { label: "Kosten pro brauchbarem Ergebnis" },
          { label: "Out-of-sample-Prüfung" },
          { label: "Passt in den Workflow" }
        ],
        passLabel: "Bestehensgrenze",
        verdict: "Geteiltes Urteil: gut für manche Aufgaben, für andere nicht."
      }
    },
    {
      title: "Vertonte Erklärvideos",
      status: "Live, mit dem Team geteilt",
      oneLiner: "Eine Präsentation oder eine Studie geht rein. Ein kurzes vertontes Video mit einem handgezeichneten Maskottchen kommt raus.",
      how: "Ein Skill schreibt das Skript aus der Quelle, ein Aussprache-Schritt korrigiert Namen und Akronyme, Open-Source-Text-to-Speech nimmt die Stimme auf, und die Szenen werden im Code gerendert, mit Untertiteln und Musik.",
      lesson: "Schreib Namen für die Stimme aus, bevor du aufnimmst. Das spart jeden Neudreh.",
      stack: ["Claude-Skills", "Remotion", "Open-Source-TTS", "Python"],
      viz: {
        caption: "Wie ein Video entsteht",
        frames: [
          { label: "Quelle", note: "Eine Präsentation, eine Seite oder ein Bericht" },
          { label: "Skript", note: "Kurze Beats, je eine Idee" },
          { label: "Aussprache", note: "Namen und Akronyme ausgeschrieben" },
          { label: "Stimme", note: "Text-to-Speech-Sprecher" },
          { label: "Board", note: "Maskottchen und Doodles, im Code gezeichnet" },
          { label: "Untertitel", note: "Eingebrannt, dazu leise Musik" }
        ]
      }
    },
    {
      title: "Onboarding ins CRM, in der richtigen Reihenfolge",
      status: "Live",
      oneLiner: "Ausgewählte Teilnehmende werden zu vier verknüpften CRM-Datensätzen: Organisation, Person, Position, Mitgliedschaft.",
      how: "Die Datensätze werden in einer Base vorbereitet und dann von Workflows Glied für Glied angelegt. Jeder Schritt wartet auf ein Gate, das einen Fakt prüft, die ID aus dem vorherigen Schritt, nie einen Status, den jemand eingetippt hat. Jeder Creator kann zweimal laufen, ohne doppelt anzulegen.",
      lesson: "Gates lesen Fakten, keine Status.",
      stack: ["Airtable", "n8n", "Salesforce"],
      viz: {
        caption: "Vier verknüpfte Datensätze, jeder hängt am vorherigen",
        steps: ["Organisation", "Person", "Position", "Mitgliedschaft"],
        gate: "ID vorhanden",
        firstRun: "Erster Lauf: 4 erstellt",
        secondRun: "Zweiter Lauf: 0 erstellt, 4 übersprungen"
      }
    },
    {
      title: "Anreicherung von Gründer- und Kontaktdaten",
      status: "Live",
      oneLiner: "Ergänzt, wer jedes Venture führt, aus mehreren Quellen, in einer festen Vertrauensreihenfolge.",
      how: "Ein wöchentlicher Workflow wählt die Datensätze, die nie oder seit sechs Monaten nicht mehr geprüft wurden. Er fragt jede Quelle der Reihe nach, behält für jedes Feld die vertrauenswürdigste Antwort und notiert, wann er nachgesehen hat, damit nichts doppelt abgerufen wird.",
      lesson: "Notier, wann du zuletzt geprüft hast. Es ist der billigste Cache, den es gibt.",
      stack: ["n8n", "Airtable", "Salesforce"],
      viz: {
        caption: "Ein Datensatz, Quelle für Quelle gefüllt (illustrativ)",
        sources: ["CRM", "Firmendatenbank", "Zweite Datenbank", "E-Mail-Finder"],
        fields: [
          { label: "Gründername" },
          { label: "Rolle" },
          { label: "LinkedIn-Profil" },
          { label: "Firmenwebsite" },
          { label: "Geschäftliche E-Mail" }
        ],
        stamp: "Heute geprüft. Nächster Blick in sechs Monaten."
      }
    },
    {
      title: "Eine Zeile pro Organisation",
      status: "Live",
      oneLiner: "Ein tägliches Skript faltet doppelte Organisationsdatensätze zu einer sauberen Liste zusammen.",
      how: "Dieselbe Organisation existiert oft mehrfach unter leicht abweichenden Namen. Ein Skript entfernt Rechtsformzusätze und Satzzeichen und bildet daraus einen Abgleichschlüssel, führt die Zeilen mit demselben Schlüssel zusammen und schreibt die saubere Tabelle jeden Morgen neu. Korrekturen gehören in die Quelle, nicht in die Kopie.",
      lesson: "Bau einen Abgleichschlüssel. Lass die Originalnamen in Ruhe.",
      stack: ["Airtable", "JavaScript"],
      viz: {
        caption: "Erfundene Namen, echtes Muster",
        rows: [{}, {}, {}, {}, {}, {}],
        beforeLabel: "6 Datensätze",
        afterLabel: "3 Organisationen"
      }
    },
    {
      title: "Ein Workflow-Inventar mit Ownern",
      status: "Erledigt",
      oneLiner: "Jeder Workflow bekommt einen Status, einen Owner und ein Warnschild, wenn er in Produktion schreibt.",
      how: "Ein Agent las jeden Workflow und jede Zugangsdaten-Konfiguration im Projekt, sortierte sie in Ordner und taggte jeden: live, manuelles Tool, in Entwicklung, pausiert oder veraltet; wem er gehört; ob er in Produktion schreibt oder eine externe KI aufruft. Taggen erzeugt keine neue Version, also wurde nichts Laufendes angefasst.",
      lesson: "Wenn er niemandem gehört, ist er schon veraltet.",
      stack: ["n8n", "Claude"],
      viz: {
        caption: "Ein illustratives Inventar. Tippe einen Status an.",
        statuses: [
          { label: "Live" },
          { label: "Manuelles Tool" },
          { label: "In Entwicklung" },
          { label: "Pausiert" },
          { label: "Kandidat für veraltet" }
        ],
        flagLabel: "schreibt in Produktion"
      }
    },
    {
      title: "Qualitätssignale: Smoke-Tests und ein QA-Dashboard",
      status: "Prototyp und Rollout",
      oneLiner: "Ein Pull Request startet eine Smoke-Suite in einem anderen Repository. Das Ergebnis kommt zurück in den Chat.",
      how: "Ein Workflow im Produkt-Repository löst das Test-Repository aus, wartet, zählt die Ergebnisse aus dem Report und postet eine Zeile in einen Chat-Kanal. Getrennt davon landen Daten aus dem Issue-Tracker in Lakehouse-Tabellen und speisen ein QA-Dashboard.",
      lesson: "Ein grüner Lauf ist kein Beweis. Zähl den Report.",
      stack: ["GitHub Actions", "Playwright", "Slack", "Jira", "Databricks"],
      viz: {
        caption: "Ein Smoke-Lauf, illustrativ",
        message: "smoke · web · 21 bestanden · 2 instabil · 1 fehlgeschlagen"
      }
    },
    {
      title: "Feature Flags und Kill Switches",
      status: "In Erkundung",
      oneLiner: "Mit Flag ausliefern: aus, an für eine Pilotgruppe, an für alle, und ein Schalter, der alles übersteuert.",
      how: "Ich helfe dem weiteren Technologieteam, sich anzusehen, wie Features hinter Flags veröffentlicht werden, wie eine Pilotgruppe sie zuerst bekommt und wie ein Kill Switch etwas ohne Deployment abschaltet.",
      lesson: "Der Kill Switch muss jede andere Regel schlagen.",
      stack: ["Feature Flags", "Progressive Delivery"],
      viz: {
        caption: "Probier es aus: Wer sieht das Feature?"
      }
    },
    {
      title: "Automatische E-Mails, die ihre Arbeit signieren",
      status: "Live",
      oneLiner: "Jede E-Mail, die mir eine Automatisierung schickt, endet mit einer kleinen Karte: was lief, wer es gestartet hat, wie lange es dauerte und wann es das nächste Mal läuft.",
      how: "Ein gemeinsames Skript verschickt die Mail und hängt die Fusszeile an, also kann keine Aufgabe sie vergessen. Das Zahnrad wechselt sein Abzeichen je nach Berichtstyp. Wenn eine Maschine es geschrieben hat, sieht der Leser das auf einen Blick.",
      lesson: "Kennzeichne maschinell geschriebene Mails. Vertrauen beginnt damit, zu wissen, wer spricht.",
      stack: ["Python", "Claude"],
      viz: {
        caption: "Die Fusszeilenkarte, illustrative Werte. Tippe einen Berichtstyp an.",
        signature: "Erstellt von Claukshay",
        rows: [
          { k: "Schritte", v: "4 von 4 erledigt" },
          { k: "Gestartet von", v: "Zeitplan" },
          { k: "Dauer", v: "2 Min." },
          { k: "Nächster Lauf", v: "Montag 08:00" }
        ],
        kinds: [
          { label: "Event-Hinweis" },
          { label: "Workflow-Digest" },
          { label: "Verbrauchsbericht" }
        ]
      }
    }
  ],

  game: {
    label: "bonusrunde",
    title: "Lesen oder ändern?",
    body: "Ein Agent will einen Tool-Call ausführen. Du bist die Leitplanke. Lass ihn laufen, wenn er nur liest. Gib ihn an einen Menschen, wenn er etwas ändert. Acht Calls, je ein paar Sekunden.",
    start: "Start",
    again: "Nochmals spielen",
    allow: "Laufen lassen",
    allowHint: "er liest nur",
    block: "An einen Menschen",
    blockHint: "er ändert etwas",
    round: "Call {n} von {total}",
    scoreLabel: "Punkte",
    streakLabel: "Serie",
    bestLabel: "Rekord",
    timeout: "Zu langsam. Der Agent hat weitergemacht.",
    right: "Richtig.",
    wrong: "Nicht ganz.",
    next: "Nächster Call",
    resultTitle: "{n} von {total}",
    share: "Sag mir deinen Punktestand, wenn du Hallo sagst. Das ist ein einfacher Einstieg.",
    ranks: [
      { title: "Der Agent schmeisst den Laden", line: "Komm vorbei. Ich habe solche Geschichten." },
      { title: "Vorsichtiger Operator", line: "Solide. Die kniffligen erwischen alle." },
      { title: "Read-only-Purist", line: "Du würdest dich mit meinem Hilfe-Agenten verstehen." },
      { title: "Menschliche Leitplanke", line: "Fehlerfrei. Verrat mir dein Geheimnis, wenn du Hallo sagst." }
    ],
    calls: [
      { why: "Ein einfacher Lesezugriff." },
      { why: "Löschen ist so ändernd, wie es nur geht." },
      { why: "POST, aber es wird nur gesucht. Bleibt ein Lesezugriff." },
      { why: "Eine Abfrage. Nichts wird geschrieben." },
      { why: "Das überschreibt jede Zeile. Es gibt kein WHERE." },
      { why: "Auflisten ist Lesen." },
      { why: "Publizieren schaltet einen Entwurf live." },
      { why: "Das schaut nur." },
      { why: "Das überschreibt die History auf dem Remote." },
      { why: "Keine Datenbank ändert sich, aber 400 Postfächer schon." },
      { why: "Das Schema zu lesen ändert nichts." },
      { why: "Das schaltet ein Feature für echte Nutzer ein." },
      { why: "EXPLAIN zeigt nur den Plan. Nichts wird gelöscht." },
      { why: "Auch temporäre Dateien sind eine Änderung." }
    ]
  },

  fieldNotes: {
    title: "Feldnotizen",
    body: "Dinge, die mir die Produktion beigebracht hat. Die meisten auf die harte Tour.",
    notes: [
      { rule: "Eine Zelle, ein Schreiber.", why: "Jedes Feld hat genau eine Automatisierung, die es beschreiben darf. Zwei Schreiber heisst ein langsamer, höflicher Streit." },
      { rule: "Gates lesen Fakten, keine Status.", why: "Prüf, ob die Datensatz-ID existiert, nicht ob ein Statusfeld „erledigt“ sagt. Status lügen; Fakten sind da oder eben nicht." },
      { rule: "Creators müssen idempotent sein.", why: "Eines Tages feuert ein Trigger für jede Zeile erneut. Sorg dafür, dass der zweite Lauf nichts anlegt." },
      { rule: "Null neue Einträge ist kein Beweis.", why: "Ein leerer Sweep kann heissen, dass sich nichts geändert hat, oder dass du nur nach Neuem suchst und die Bearbeitungen verpasst." },
      { rule: "Ein Entwurf ist kein Deployment.", why: "Änderungen über eine API können unveröffentlicht liegen, während alle glauben, sie seien live. Prüf die laufende Version." },
      { rule: "Agenten lesen. Menschen ändern.", why: "Gib dem Agenten das Nachschlagen und dem Menschen den letzten Klick. Jede Änderung behält einen Owner." }
    ]
  },

  toolbox: {
    title: "Toolbox",
    groups: [
      { label: "Agenten und KI", items: ["KI-Agenten", "Claude", "Claude Code", "Skills und Plugins", "MCP", "Prompt Engineering"] },
      { label: "Automatisierung", items: ["Workflow-Automatisierung", "n8n", "Clay", "Airtable-Automationen", "REST-APIs", "GitHub Actions"] },
      { label: "Daten und CRM", items: ["Salesforce", "Marketing Cloud", "Data Cloud", "Airtable", "Databricks", "Datenmanagement", "Datenqualität", "Data Governance"] },
      { label: "Sprachen", items: ["Python", "SQL", "JavaScript", "Java"] },
      { label: "Qualität", items: ["Testdesign", "Testautomatisierung", "Selenium", "Szenariotests"] },
      { label: "Produkt und Betrieb", items: ["Produktmanagement", "Business-Analyse", "Technical Operations", "Jira", "Confluence"] },
      { label: "Wo ich angefangen habe", items: ["COBOL", "JCL", "DB2"] }
    ]
  },

  personal: {
    title: "Weg von der Tastatur",
    photoCaption: "Meist in der Nähe von Wasser, Bäumen oder beidem zu finden.",
    cards: [
      {
        title: "Technik, auch zum Spass",
        body: "Ich finde gern heraus, wie sich ein Tool wirklich verhält, meistens, indem ich es sanft kaputt mache. In letzter Zeit heisst das Coding-Agenten und besseres Python, das ich mir selbst beibringe."
      },
      {
        title: "Wandern, damals in Indien",
        body: "Früher bin ich in Indien wandern gegangen. Frag mich danach, oder sag mir, wo ich hier anfangen soll.",
        todo: "Mit Akshay zu klären: welche Hügel oder Treks, und wann. Bis dahin wird nichts Konkretes behauptet."
      },
      {
        title: "Standardmässig leise",
        body: "Ich höre mehr zu, als ich rede. Gib mir ein echtes Problem zum Nachdenken, dann ändert sich das schnell."
      }
    ]
  },

  connect: {
    title: "In Kontakt bleiben",
    body: "LinkedIn ist der beste Weg, mich zu erreichen. Eine kurze Notiz, wo wir uns begegnet sind, hilft.",
    linkedinLabel: "Auf LinkedIn vernetzen",
    qrTitle: "Diese Seite teilen",
    qrReady: "Lass jemanden das scannen, um die Seite zu öffnen.",
    qrPending: "Dieser QR-Code führt vorerst zu meinem LinkedIn-Profil. Er führt zu dieser Seite, sobald sie eine öffentliche Adresse hat."
  },

  footer: {
    lines: [
      "Eine persönliche Seite. Die Ansichten sind meine eigenen.",
      "Die Projektbeschreibungen sind verallgemeinert, und die Zahlen in den Visualisierungen sind illustrativ."
    ]
  },

  ui: {
    navApproach: "Hallo sagen",
    navJourney: "Weg",
    navWork: "Arbeitsweise",
    navProjects: "Projekte",
    navNotes: "Feldnotizen",
    navToolbox: "Toolbox",
    navPersonal: "Privat",
    navConnect: "Kontakt",
    labelApproach: "hallo sagen",
    labelJourney: "weg",
    labelWork: "arbeitsweise",
    labelProjects: "aktuelle arbeiten",
    labelNotes: "feldnotizen",
    labelToolbox: "toolbox",
    labelPersonal: "weg von der tastatur",
    labelConnect: "kontakt",
    askMeAbout: "Frag mich nach",
    hereToLearn: "Hier, um zu lernen:",
    howToSayHi: "So sagst du Hallo",
    youAreHere: "du bist hier",
    themeToggle: "Zwischen hell und dunkel wechseln",
    language: "Sprache",
    showQr: "QR im Vollbild zeigen",
    close: "Schliessen",
    draft: "Entwurf",
    all: "Alle",
    ofCount: "{n} von {total}",
    open: "Öffnen",
    runAgain: "Nochmals",
    play: "Los",
    howItWorks: "So funktioniert's",
    lesson: "Lektion",
    stack: "Stack",
    kindInput: "Eingabe",
    kindAgent: "Agent",
    kindRule: "Regel",
    kindData: "Daten",
    kindHuman: "Mensch",
    kindOutput: "Ausgabe",
    flagOff: "Aus",
    flagPilot: "Pilot",
    flagEveryone: "Alle",
    killSwitch: "Kill Switch",
    killWins: "Kill Switch gewinnt",
    seeFeature: "{n} von {total} sehen das Feature",
    pilotGroup: "Pilotgruppe",
    alertLine: "Alarmlinie",
    dayN: "Tag {n}",
    dayReadout: "Tag {n} · {v} {unit}",
    tapAPoint: "Tag antippen",
    rolloutLabel: "Rollout",
    usageAria: "{caption}. Spitze {peak} {unit} an Tag {day}, Alarmlinie bei {threshold}. Mit den Pfeiltasten jeden Tag lesen.",
    chatFromAgent: "Agent",
    chatFromColleague: "Kollegin oder Kollege",
    vm_from: "aus {src}",
    vm_skip: "übersprungen",
    vm_id: "ID ✓",
    vm_pass: "bestanden",
    vm_fail: "nicht bestanden",
    vm_score: "{label}: {score} von 100, Bestehensgrenze {pass}, {result}",
    vm_count: "×{n}",
    skipToContent: "Zum Inhalt springen",
    topOfPage: "{name}, Seitenanfang",
    navSections: "Abschnitte",
    terminalCommands: "Befehle",
    stepN: "Schritt {n}",
    qrCode: "QR-Code",
    gameToolCall: "Tool-Call des Agenten",
    gameResultDots: "Ergebnis pro Call",
    gameDotRight: "richtig",
    gameDotWrong: "falsch",
    noscript: "Diese Seite braucht JavaScript für ihre interaktiven Teile."
  }
};
