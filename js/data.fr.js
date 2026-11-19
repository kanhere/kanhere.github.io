/* data.fr.js — French strings only, same shape as data.js. Merged over the English by lang.js. */
window.AK_LANGS = window.AK_LANGS || {};
window.AK_LANGS.fr = {
  photos: {
    portrait: { alt: "Akshay au bord d'un lac au coucher du soleil, avec des lunettes de soleil" },
    outdoors: { alt: "Akshay au bord d'un lac de forêt aux couleurs d'automne" }
  },

  profile: {
    team: "UpLink, Forum économique mondial",
    place: "Genève",
    intro: [
      "Ingénieur informatique pur et dur, originaire de Mumbai. J'ai débuté comme développeur mainframe, puis passé neuf ans en ingénierie qualité sur des programmes Salesforce pour des clients de sociétés de services informatiques et de conseil, jusqu'à diriger des équipes de test.",
      "Aujourd'hui, je m'occupe des opérations technologiques d'UpLink, la plateforme d'innovation ouverte du Forum économique mondial, où je transforme les corvées de la semaine en automatisations et en agents."
    ],
    askMeAbout: [
      "Des agents pour les équipes opérationnelles",
      "Skills et plugins Claude",
      "Connecteurs MCP",
      "Agents en lecture seule",
      "Workflows n8n",
      "Synchronisation Airtable et Salesforce"
    ],
    hereToLearn: ["Evals", "Agents en production", "Comment vous relisez le code écrit par un agent"]
  },

  mark: {
    note: "Claude + Akshay. C'est le nom que j'ai donné à mes automatisations, et ce petit rouage signe les e-mails qu'elles envoient."
  },

  terminal: {
    hint: "Touchez une commande",
    commands: [
      {
        out: [
          "akshay: ingénieur informatique, de Mumbai à Genève",
          "rôle: opérations technologiques, UpLink (Forum économique mondial)",
          "mode: introverti, aimable, curieux"
        ]
      },
      {
        out: [
          "12 ans dans la tech",
          "9 en sociétés de services informatiques et de conseil, presque 3 au Forum",
          "charge moyenne: un agent, plusieurs workflows, trop d'onglets"
        ]
      },
      {
        out: [
          "{",
          "  \"name\": \"akshay\",",
          "  \"description\": \"Transforme les corvées hebdomadaires en automatisations et en agents\",",
          "  \"tools\": [\"airtable\", \"n8n\", \"salesforce\", \"claude\", \"python\"],",
          "  \"input_modes\": [\"un vrai problème\", \"un coin tranquille\"],",
          "  \"output_modes\": [\"une automatisation qui tourne\", \"un avis honnête\"],",
          "  \"rate_limits\": { \"small_talk\": \"faible\", \"deep_dives\": \"illimité\" },",
          "  \"auth\": \"dites bonjour\"",
          "}"
        ]
      },
      {},
      {},
      {
        out: ["Cette page est aussi écrite pour votre agent."]
      },
      { out: ["Un petit jeu : saurez-vous garder un agent en lecture seule ?"], link: { label: "Jouer : lire ou modifier ?" } }
    ]
  },

  approach: {
    title: "Je suis introverti",
    body: [
      "Je suis content d'être ici, et je fais rarement le premier pas. Si vous lisez ceci, vous avez déjà fait le plus dur.",
      "Venez dire bonjour. Si les banalités ne sont pas votre truc non plus, choisissez l'une de ces entrées en matière et on saute cette étape."
    ],
    startersLabel: "Pour démarrer facilement",
    starters: [
      {
        ask: "Quelle est la tâche ennuyeuse la plus utile qu'un agent fait pour vous ?",
        mine: "La mienne : un e-mail du lundi qui me dit ce que mes workflows ont fait la semaine dernière."
      },
      {
        ask: "Comment empêchez-vous un agent de modifier ce qu'il ne devrait que lire ?",
        mine: "Mon agent d'aide à l'équipe consulte les données et rend des étapes à suivre. Il ne fait jamais la modification."
      },
      {
        ask: "Racontez-moi un workflow qui est tombé en panne de façon cocasse.",
        mine: "J'en collectionne. Demandez-moi le déclencheur qui s'est activé une fois pour chaque ligne de la table."
      },
      {
        ask: "Où iriez-vous faire une randonnée dans la région ?",
        mine: "Je faisais de la randonnée en Inde. J'aimerais une recommandation."
      }
    ],
    battery: {
      label: "Batterie sociale",
      hint: "Les bonnes questions la rechargent. Ouvrez une entrée en matière et regardez.",
      levels: ["Sur la réserve", "En train de chauffer", "Ça avance", "Presque là", "Pleine charge. Venez dire bonjour."]
    }
  },

  journey: {
    title: "Le parcours jusqu'ici",
    route: ["Mumbai", "Bengaluru", "Mumbai", "Pune", "Genève"],
    stops: [
      {
        title: "Ingénierie informatique",
        sub: "Bachelor, Université de Mumbai",
        body: "Quatre ans d'ingénierie informatique à Mumbai. Diplômé en 2014.",
        tags: []
      },
      {
        body: "J'ai commencé comme développeur mainframe (DB2, CICS), puis je suis passé à l'assurance qualité Salesforce : comprendre comment les choses cassent avant les utilisateurs.",
        tags: ["Mainframe", "QA Salesforce"]
      },
      {
        place: "Bengaluru, Mumbai, Pune",
        body: "Entré comme analyste en technologies d'affaires, parti consultant senior. Six ans de qualité sur des programmes clients : tests Salesforce, tests de scénarios, puis direction d'équipes de test. Trois villes au passage.",
        tags: ["Salesforce", "Test lead", "Gestion de la qualité"]
      },
      {
        when: "Janvier 2024",
        place: "Genève",
        title: "Arrivée au Forum économique mondial",
        sub: "Opérations technologiques et produit digital, UpLink",
        body: "De tester les systèmes des autres à en être responsable : les données, les intégrations et les outils du quotidien de l'équipe. Basé à Genève.",
        tags: ["Airtable", "Salesforce", "Intégrations"]
      },
      {
        year: "Auj.",
        place: "Genève",
        sub: "UpLink, au sein de l'équipe technologique du Forum",
        body: "L'essentiel de ma semaine, c'est désormais l'automatisation et les agents : des skills Claude que l'équipe partage, des workflows n8n, et les contrôles qui les gardent honnêtes.",
        tags: ["Agents", "Automatisation", "Données"]
      }
    ],
    certsLabel: "Cinq certifications Salesforce en chemin",
    certs: ["Administrator", "Business Analyst", "Marketing Cloud Administrator", "AI Associate", "Data Cloud Consultant"]
  },

  howIWork: {
    title: "Ma façon de travailler",
    body: "La même boucle, quel que soit l'outil.",
    steps: [
      { label: "Repérer", line: "Trouver la corvée que quelqu'un fait à la main chaque semaine.", example: "Exemple : deux jours à copier des enregistrements dans des diapositives avant chaque journée de jury." },
      { label: "Cartographier", line: "Lire le système avant d'y toucher. En lecture seule d'abord.", example: "Exemple : un agent lit les schémas, les automatisations et l'historique d'exécution, et ne change rien." },
      { label: "Construire", line: "Le plus petit outil qui supprime la corvée : un workflow, un script ou un skill.", example: "Exemple : un skill qui remplit le modèle de diapositives directement depuis la base de données." },
      { label: "Contrôler", line: "Une seconde passe qui ne peut rien modifier audite la première.", example: "Exemple : un skill d'audit compare chaque diapositive à son enregistrement source et liste les écarts." },
      { label: "Transmettre", line: "Une doc, un responsable et un interrupteur. Ensuite, ça appartient à l'équipe.", example: "Exemple : une page de mode d'emploi, un responsable nommé, et un flag qui l'éteint sans déploiement." }
    ]
  },

  themes: [
    { label: "Agents IA" },
    { label: "Automatisation" },
    { label: "Données" },
    { label: "Qualité" }
  ],

  projectsIntro: {
    title: "Travaux récents",
    body: "Quinze choses que j'ai construites ou que je construis, décrites par ce qu'elles font et le modèle qui les sous-tend. Chacune a un petit visuel que vous pouvez lancer.",
    disclaimer: "Les descriptions sont généralisées. Les chiffres et les noms des visuels sont illustratifs, pas réels."
  },

  projects: [
    {
      title: "Pipeline de recherche de leads",
      status: "En production",
      oneLiner: "Trouve les entreprises qui correspondent à un défi d'innovation avant qu'elles ne candidatent.",
      how: "Un cahier des charges du défi entre. Une recherche documentaire par IA propose des candidats avec leurs sources, les doublons sont supprimés, des bases d'entreprises et le CRM comblent les manques, et un score d'adéquation classe ce qui reste. Une personne vérifie chaque lead avant toute prise de contact.",
      lesson: "Le contrôle humain reste. Le travail de l'agent est de le rendre rapide.",
      stack: ["Airtable", "n8n", "Claude", "Salesforce"],
      viz: {
        caption: "Une exécution, chiffres illustratifs",
        stages: [
          { label: "Cahier des charges", unit: "cahier" },
          { label: "Recherche IA", unit: "candidats" },
          { label: "Dédoublonnage", unit: "nouveaux" },
          { label: "Enrichissement", unit: "enrichis" },
          { label: "Score d'adéquation", unit: "bonne adéquation" },
          { label: "Contrôle humain", unit: "approuvés" },
          { label: "Prise de contact", unit: "contactés" }
        ]
      }
    },
    {
      title: "Des booklets de pitch à partir d'une base de données",
      status: "En production, partagé avec l'équipe",
      oneLiner: "Une présentation pour une journée de jury, générée depuis les données sources puis auditée par rapport à elles.",
      how: "Un skill Claude lit les enregistrements présélectionnés, remplit le modèle de diapositives et place chaque logo par enregistrement. Un second skill, en lecture seule, audite ensuite la présentation terminée par rapport à la source et signale ce qui ne correspond pas. Le même modèle produit maintenant un booklet des lauréats et un booklet des participants à un événement.",
      lesson: "Générer, puis auditer avec une passe distincte qui ne peut rien modifier.",
      stack: ["Skills Claude", "Airtable", "Python", "PowerPoint"],
      viz: {
        caption: "Étapes pour un booklet, illustratif",
        before: {
          label: "À la main",
          steps: ["Exporter les données", "Coller dans les diapositives", "Aligner chaque logo", "Courir après les modifications tardives", "Tout relire", "Exporter et partager"],
          effort: "environ 2 jours"
        },
        after: {
          label: "Avec le skill",
          steps: ["Demander le booklet", "Le skill remplit le modèle", "Le skill d'audit le contrôle", "Relire les constats"],
          effort: "environ 1 heure"
        }
      }
    },
    {
      title: "Un agent d'aide en lecture seule pour les collègues",
      status: "Pilote en démarrage",
      oneLiner: "Répond aux questions qu'on me pose chaque semaine, avec mon contexte. Il lit et vérifie. Il ne modifie jamais les données.",
      how: "Packagé comme plugin Claude, avec des playbooks pour les questions récurrentes et des outils en lecture seule. Il consulte l'état actuel, explique ce qu'il a trouvé et rend les étapes à suivre, pour que la personne fasse la modification avec son propre compte.",
      lesson: "Les agents consultent. Les personnes modifient, donc chaque modification garde un responsable.",
      stack: ["Plugin Claude", "Slack", "Airtable"],
      viz: {
        caption: "Un échange illustratif",
        badge: "lecture seule",
        messages: [
          { text: "Pouvez-vous mettre à jour cet enregistrement pour moi ?" },
          { text: "J'ai vérifié. Le statut est toujours en attente parce qu'un champ obligatoire est vide." },
          { text: "Voici les trois étapes pour le corriger vous-même. Je ne peux pas faire la modification, et c'est voulu." }
        ],
        why: "Pourquoi la lecture seule ? Les modifications restent attribuables à la personne qui les a demandées."
      }
    },
    {
      title: "Cartographier un système non documenté avec un agent en lecture seule",
      status: "Terminé",
      oneLiner: "Une base de production avec des années d'historique et sans documentation fiable, cartographiée de bout en bout sans rien modifier.",
      how: "L'agent a lu les schémas, les automatisations, les définitions de workflows et l'historique d'exécution, enregistré des copies brutes sur disque et tenu un journal. Il en est sorti une carte des flux, un modèle réutilisable et une documentation sur laquelle l'équipe s'appuie aujourd'hui. Chaque constat porte une date, car le système continue d'évoluer.",
      lesson: "Une carte a une date. Revérifiez ce qui est déployé avant de lui faire confiance.",
      stack: ["Claude Code", "Airtable", "n8n", "Confluence"],
      viz: {
        caption: "Ce que l'agent a lu, et ce qu'il a modifié",
        nodes: [
          { label: "Tables" },
          { label: "Champs" },
          { label: "Automatisations" },
          { label: "Workflows" },
          { label: "Historique d'exécution" },
          { label: "Docs rédigées" }
        ],
        readLabel: "lu",
        changedLabel: "modifié"
      }
    },
    {
      title: "Feature flags et kill switches",
      status: "En exploration",
      oneLiner: "Livrer derrière un flag : éteint, activé pour un groupe pilote, activé pour tous, et un interrupteur qui prime sur tout le reste.",
      how: "J'aide l'équipe technologique au sens large à examiner comment les fonctionnalités sont livrées derrière des flags, comment un groupe pilote les reçoit en premier, et comment un kill switch coupe une fonctionnalité sans déploiement.",
      lesson: "Le kill switch doit l'emporter sur toutes les autres règles.",
      stack: ["Feature flags", "Livraison progressive"],
      viz: {
        caption: "Essayez : qui voit la fonctionnalité ?"
      }
    },
    {
      title: "Suivi de la consommation de crédits IA",
      status: "En production",
      oneLiner: "Un journal d'audit devient une table d'usage quotidienne, un rapport mensuel et trois alertes.",
      how: "Un workflow planifié récupère le journal d'audit chaque jour, regroupe les événements en comptages par fonctionnalité et par personne, et les écrit dans une base surmontée d'un tableau de bord. Des alertes se déclenchent quand une journée dépasse largement la normale.",
      lesson: "Stockez des comptages, pas des journaux bruts. Le rapport n'a besoin que des comptages.",
      stack: ["n8n", "Airtable"],
      viz: {
        caption: "Usage quotidien et ligne d'alerte, unités illustratives",
        unit: "unités"
      }
    },
    {
      title: "Vidéos explicatives narrées",
      status: "En production, partagé avec l'équipe",
      oneLiner: "Une présentation ou une étude entre. Une courte vidéo narrée avec une mascotte dessinée à la main en sort.",
      how: "Un skill écrit le script à partir de la source, une étape de prononciation corrige les noms et les acronymes, une synthèse vocale open source enregistre la voix, et les scènes sont rendues par du code avec sous-titres et musique.",
      lesson: "Épelez les noms pour la voix avant d'enregistrer. Cela évite chaque reprise.",
      stack: ["Skills Claude", "Remotion", "Synthèse vocale open source", "Python"],
      viz: {
        caption: "Comment une vidéo est fabriquée",
        frames: [
          { label: "Source", note: "Une présentation, une page ou un rapport" },
          { label: "Script", note: "Des séquences courtes, une idée chacune" },
          { label: "Prononciation", note: "Noms et acronymes épelés" },
          { label: "Voix", note: "Narration par synthèse vocale" },
          { label: "Tableau", note: "Mascotte et dessins, tracés par du code" },
          { label: "Sous-titres", note: "Incrustés, avec une musique douce" }
        ]
      }
    },
    {
      title: "Signaux qualité : smoke tests et tableau de bord QA",
      status: "Prototype et déploiement",
      oneLiner: "Une pull request lance une suite de smoke tests dans un autre dépôt. Le résultat revient dans le chat.",
      how: "Un workflow du dépôt produit déclenche le dépôt de tests, attend, compte les résultats dans le rapport et publie une ligne dans un canal de discussion. Par ailleurs, les données du gestionnaire de tickets arrivent dans des tables lakehouse et alimentent un tableau de bord QA.",
      lesson: "Un run vert n'est pas une preuve. Comptez le rapport.",
      stack: ["GitHub Actions", "Playwright", "Slack", "Jira", "Databricks"],
      viz: {
        caption: "Un run de smoke tests, illustratif",
        message: "smoke · web · 21 réussis · 2 instables · 1 échoué"
      }
    },
    {
      title: "Intégration dans le CRM, dans le bon ordre",
      status: "En production",
      oneLiner: "Les participants sélectionnés deviennent quatre enregistrements CRM liés : organisation, personne, poste, adhésion.",
      how: "Les enregistrements sont préparés dans une base, puis créés un lien à la fois par des workflows. Chaque étape attend une barrière qui vérifie un fait, l'ID écrit par l'étape précédente, jamais un statut saisi à la main. Chaque créateur peut tourner deux fois sans créer en double.",
      lesson: "Les points de contrôle lisent des faits, pas des statuts.",
      stack: ["Airtable", "n8n", "Salesforce"],
      viz: {
        caption: "Quatre enregistrements liés, chacun conditionné par le précédent",
        steps: ["Organisation", "Personne", "Poste", "Adhésion"],
        gate: "ID présent",
        firstRun: "Premier run : 4 créés",
        secondRun: "Second run : 0 créé, 4 ignorés"
      }
    },
    {
      title: "Enrichissement des fondateurs et des contacts",
      status: "En production",
      oneLiner: "Renseigne qui dirige chaque start-up, à partir de plusieurs sources, dans un ordre de confiance fixe.",
      how: "Un workflow hebdomadaire choisit les enregistrements jamais vérifiés ou pas vérifiés depuis six mois. Il interroge chaque source à tour de rôle, garde la réponse la plus fiable pour chaque champ, et note la date de sa consultation pour que rien ne soit récupéré deux fois.",
      lesson: "Notez quand vous avez vérifié pour la dernière fois. C'est le cache le moins cher qui existe.",
      stack: ["n8n", "Airtable", "Salesforce"],
      viz: {
        caption: "Un enregistrement, rempli source après source (illustratif)",
        sources: ["CRM", "Base d'entreprises", "Seconde base", "Recherche d'e-mails"],
        fields: [
          { label: "Nom du fondateur" },
          { label: "Fonction" },
          { label: "Profil LinkedIn" },
          { label: "Site de l'entreprise" },
          { label: "E-mail professionnel" }
        ],
        stamp: "Vérifié aujourd'hui. Prochain contrôle dans six mois."
      }
    },
    {
      title: "Une ligne par organisation",
      status: "En production",
      oneLiner: "Un script quotidien fusionne les doublons d'organisations en une liste propre.",
      how: "La même organisation existe souvent plusieurs fois sous des noms légèrement différents. Un script retire les suffixes juridiques et la ponctuation pour produire une clé de rapprochement, fusionne les lignes qui la partagent et réécrit la table propre chaque matin. Les corrections se font dans la source, pas dans la copie.",
      lesson: "Construisez une clé de rapprochement. Laissez les noms d'origine tranquilles.",
      stack: ["Airtable", "JavaScript"],
      viz: {
        caption: "Noms inventés, vrai modèle",
        rows: [{}, {}, {}, {}, {}, {}],
        beforeLabel: "6 enregistrements",
        afterLabel: "3 organisations"
      }
    },
    {
      title: "Évaluer un outil de données comme une suite de tests",
      status: "Terminé",
      oneLiner: "Avant d'acheter, cinq tests mesurés ont décidé pour quoi un nouvel outil devait ou ne devait pas servir.",
      how: "Chaque test avait sa ligne de réussite écrite d'avance : couverture, exactitude par rapport à des enregistrements fiables, coût par résultat utile, et contrôle sur un échantillon que l'outil n'avait pas vu pendant la configuration. Le résultat : un verdict partagé, à utiliser pour certaines tâches, à garder l'existant pour d'autres.",
      lesson: "Écrivez la ligne de réussite avant de lancer le test.",
      stack: ["Python", "Airtable", "Evals"],
      viz: {
        caption: "Cinq tests face à leur ligne de réussite, scores illustratifs",
        tests: [
          { label: "Couverture" },
          { label: "Exactitude par rapport aux données fiables" },
          { label: "Coût par résultat utile" },
          { label: "Contrôle hors échantillon" },
          { label: "S'intègre au workflow" }
        ],
        passLabel: "ligne de réussite",
        verdict: "Verdict partagé : bon pour certaines tâches, pas pour d'autres."
      }
    },
    {
      title: "Un inventaire des workflows avec leurs responsables",
      status: "Terminé",
      oneLiner: "Chaque workflow reçoit un statut, un responsable et une étiquette d'avertissement s'il écrit en production.",
      how: "Un agent a lu chaque workflow et chaque credential du projet, les a rangés dans des dossiers et a étiqueté chacun : actif, outil manuel, en développement, en pause ou périmé ; qui en est responsable ; s'il écrit en production ou appelle une IA externe. Étiqueter ne crée aucune nouvelle version, donc rien d'actif n'a été touché.",
      lesson: "Si personne n'en est responsable, il est déjà périmé.",
      stack: ["n8n", "Claude"],
      viz: {
        caption: "Un inventaire illustratif. Touchez un statut.",
        statuses: [
          { label: "Actif" },
          { label: "Outil manuel" },
          { label: "En développement" },
          { label: "En pause" },
          { label: "Candidat périmé" }
        ],
        flagLabel: "écrit en production"
      }
    },
    {
      title: "Des agents planifiés qui m'envoient des e-mails",
      status: "En production",
      oneLiner: "Chaque semaine : les événements à ne pas manquer, ce qu'ont fait les campagnes d'e-mails, et ce que mes workflows ont fabriqué.",
      how: "Chacun est une tâche planifiée avec un petit fichier de profil qui dit ce qui compte. L'agent collecte, filtre et rédige un court e-mail, signé par le rouage. L'un d'eux guette les événements comme celui-ci.",
      lesson: "Envoyez des comptages et des exceptions. Personne ne lit un journal par e-mail.",
      stack: ["Claude", "n8n", "Salesforce Marketing Cloud"],
      viz: {
        caption: "Une semaine d'exécutions, horaires illustratifs",
        days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        runs: [
          { label: "Digest admin des workflows" },
          { label: "Alerte événements tech" },
          { label: "Synthèse de l'activité e-mail" },
          { label: "Rapport de suivi du sourcing" }
        ]
      }
    },
    {
      title: "Des e-mails automatiques qui signent leur travail",
      status: "En production",
      oneLiner: "Chaque e-mail qu'une automatisation m'envoie se termine par une petite carte : ce qui a tourné, qui l'a lancé, combien de temps ça a pris et quand aura lieu la prochaine exécution.",
      how: "Un script partagé envoie le message et ajoute le pied de page, donc aucune tâche ne peut l'oublier. Le rouage change de badge selon le type de rapport. Si une machine l'a écrit, le lecteur le voit d'un coup d'œil.",
      lesson: "Étiquetez les e-mails écrits par des machines. La confiance commence par savoir qui parle.",
      stack: ["Python", "Claude"],
      viz: {
        caption: "La carte de pied de page, valeurs illustratives. Touchez un type de rapport.",
        signature: "Généré par Claukshay",
        rows: [
          { k: "Étapes", v: "4 sur 4 terminées" },
          { k: "Lancé par", v: "Planification" },
          { k: "Durée", v: "2 min" },
          { k: "Prochaine exécution", v: "Lundi 08:00" }
        ],
        kinds: [
          { label: "Alerte événements" },
          { label: "Digest des workflows" },
          { label: "Rapport d'usage" }
        ]
      }
    }
  ],

  game: {
    label: "manche bonus",
    title: "Lire ou modifier ?",
    body: "Un agent veut lancer un appel d'outil. Le garde-fou, c'est vous. Laissez-le faire s'il ne fait que lire. Passez-le à un humain s'il modifie quoi que ce soit. Huit appels, quelques secondes chacun.",
    start: "Démarrer",
    again: "Rejouer",
    allow: "Laisser faire",
    allowHint: "il ne fait que lire",
    block: "Passer à un humain",
    blockHint: "il modifie quelque chose",
    round: "Appel {n} sur {total}",
    scoreLabel: "Score",
    streakLabel: "Série",
    bestLabel: "Record",
    timeout: "Trop lent. L'agent a continué.",
    right: "Exact.",
    wrong: "Pas tout à fait.",
    next: "Appel suivant",
    resultTitle: "{n} sur {total}",
    share: "Donnez-moi votre score en venant dire bonjour. C'est une entrée en matière facile.",
    ranks: [
      { title: "L'agent dirige la maison", line: "Venez me voir. J'ai des histoires de ce genre." },
      { title: "Opérateur prudent", line: "Solide. Les pièges attrapent tout le monde." },
      { title: "Puriste de la lecture seule", line: "Vous vous entendriez bien avec mon agent d'aide." },
      { title: "Garde-fou humain", line: "Un sans-faute. Dites-moi votre secret en venant dire bonjour." }
    ],
    calls: [
      { why: "Une simple lecture." },
      { why: "Supprimer, c'est modifier au maximum." },
      { why: "POST, mais ce n'est qu'une recherche. Cela reste une lecture." },
      { why: "Une requête. Rien n'est écrit." },
      { why: "Cela réécrit chaque ligne. Il n'y a pas de WHERE." },
      { why: "Lister, c'est lire." },
      { why: "Publier rend un brouillon actif." },
      { why: "Cela ne fait que regarder." },
      { why: "Cela écrase l'historique sur le dépôt distant." },
      { why: "Aucune base ne change, mais 400 boîtes mail, si." },
      { why: "Lire le schéma ne change rien." },
      { why: "Cela active une fonctionnalité pour de vrais utilisateurs." },
      { why: "EXPLAIN montre seulement le plan. Rien n'est supprimé." },
      { why: "Même des fichiers temporaires, c'est une modification." }
    ]
  },

  fieldNotes: {
    title: "Notes de terrain",
    body: "Ce que la production m'a appris. Le plus souvent à la dure.",
    notes: [
      { rule: "Une cellule, un seul auteur.", why: "Chaque champ a exactement une automatisation autorisée à l'écrire. Deux auteurs, c'est une bagarre lente et polie." },
      { rule: "Les points de contrôle lisent des faits, pas des statuts.", why: "Vérifiez que l'ID de l'enregistrement existe, pas qu'un champ de statut indique « terminé ». Les statuts mentent ; les faits sont là ou ne le sont pas." },
      { rule: "Les créateurs doivent être idempotents.", why: "Un jour, un déclencheur s'activera de nouveau pour chaque ligne. Assurez-vous que le second run ne crée rien." },
      { rule: "Zéro nouveauté n'est pas une preuve.", why: "Un balayage vide peut signifier que rien n'a changé, ou que vous ne cherchez que du nouveau et avez raté les modifications." },
      { rule: "Un brouillon n'est pas un déploiement.", why: "Des modifications faites via une API peuvent rester non publiées pendant que tout le monde les croit actives. Vérifiez la version qui tourne." },
      { rule: "Les agents lisent. Les personnes modifient.", why: "Donnez la consultation à l'agent et le dernier clic à la personne. Chaque modification garde un responsable." }
    ]
  },

  toolbox: {
    title: "Boîte à outils",
    groups: [
      { label: "Agents", items: ["Claude", "Claude Code", "Skills et plugins", "MCP"] },
      { label: "Automatisation", items: ["n8n", "Automatisations Airtable", "GitHub Actions", "Python"] },
      { label: "Données et CRM", items: ["Airtable", "Salesforce", "Marketing Cloud", "Databricks", "SQL"] }
    ]
  },

  personal: {
    title: "Loin du clavier",
    photoCaption: "On me trouve généralement près de l'eau, des arbres, ou des deux.",
    cards: [
      {
        title: "La technologie, aussi pour le plaisir",
        body: "J'aime découvrir comment un outil se comporte vraiment, en général en le cassant doucement. En ce moment, cela veut dire les agents de code et un meilleur Python en autodidacte."
      },
      {
        title: "Randonnée, en Inde",
        body: "Je faisais de la randonnée en Inde. Interrogez-moi à ce sujet, ou dites-moi par où commencer ici.",
        todo: "À confirmer avec Akshay : quelles collines ou quels treks, et quand. Rien de précis n'est affirmé d'ici là."
      },
      {
        title: "Calme par défaut",
        body: "J'écoute plus que je ne parle. Donnez-moi un vrai problème à réfléchir et cela change vite."
      }
    ]
  },

  connect: {
    title: "Restons en contact",
    body: "LinkedIn est le meilleur moyen de me joindre. Un petit mot sur l'endroit où nous nous sommes rencontrés aide.",
    linkedinLabel: "Se connecter sur LinkedIn",
    qrTitle: "Partager cette page",
    qrReady: "Faites scanner ce code pour ouvrir la page.",
    qrPending: "Ce QR code pointe pour l'instant vers mon LinkedIn. Il pointera vers cette page dès qu'elle aura une adresse publique."
  },

  footer: {
    lines: [
      "Une page personnelle. Les opinions sont les miennes.",
      "Les descriptions de projets sont généralisées et les chiffres des visuels sont illustratifs."
    ],
    built: "Conçue et réalisée avec Claude, relue par un humain."
  },

  ui: {
    navApproach: "Dire bonjour",
    navJourney: "Parcours",
    navWork: "Ma méthode",
    navProjects: "Projets",
    navNotes: "Notes de terrain",
    navToolbox: "Outils",
    navPersonal: "Perso",
    navConnect: "Contact",
    labelApproach: "dire bonjour",
    labelJourney: "parcours",
    labelWork: "ma méthode",
    labelProjects: "travaux récents",
    labelNotes: "notes de terrain",
    labelToolbox: "boîte à outils",
    labelPersonal: "loin du clavier",
    labelConnect: "contact",
    askMeAbout: "Parlez-moi de",
    hereToLearn: "Ici pour apprendre :",
    howToSayHi: "Comment dire bonjour",
    youAreHere: "vous êtes ici",
    themeToggle: "Basculer entre clair et sombre",
    language: "Langue",
    showQr: "Afficher le QR code en plein écran",
    close: "Fermer",
    draft: "brouillon",
    all: "Tout",
    ofCount: "{n} sur {total}",
    open: "Ouvrir",
    runAgain: "Relancer",
    play: "Lancer",
    howItWorks: "Comment ça marche",
    lesson: "Leçon",
    stack: "Stack",
    kindInput: "entrée",
    kindAgent: "agent",
    kindRule: "règle",
    kindData: "données",
    kindHuman: "humain",
    kindOutput: "sortie",
    flagOff: "Éteint",
    flagPilot: "Pilote",
    flagEveryone: "Tous",
    killSwitch: "Kill switch",
    killWins: "Le kill switch l'emporte",
    seeFeature: "{n} sur {total} voient la fonctionnalité",
    pilotGroup: "Groupe pilote",
    alertLine: "ligne d'alerte",
    dayN: "Jour {n}",
    dayReadout: "Jour {n} · {v} {unit}",
    tapAPoint: "Touchez un jour",
    rolloutLabel: "Déploiement",
    usageAria: "{caption}. Pic de {peak} {unit} le jour {day}, ligne d'alerte à {threshold}. Utilisez les flèches pour lire chaque jour.",
    chatFromAgent: "Agent",
    chatFromColleague: "Collègue",
    vm_from: "via {src}",
    vm_skip: "ignoré",
    vm_id: "ID ✓",
    vm_pass: "réussi",
    vm_fail: "échoué",
    vm_score: "{label} : {score} sur 100, ligne de réussite {pass}, {result}",
    vm_count: "×{n}",
    skipToContent: "Aller au contenu",
    topOfPage: "{name}, haut de page",
    navSections: "Sections",
    terminalCommands: "Commandes",
    stepN: "Étape {n}",
    qrCode: "QR code",
    gameToolCall: "Appel d'outil de l'agent",
    gameResultDots: "Résultat de chaque appel",
    gameDotRight: "juste",
    gameDotWrong: "faux",
    noscript: "Cette page a besoin de JavaScript pour ses parties interactives."
  }
};
