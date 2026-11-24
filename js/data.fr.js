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
      "Ingénieur informatique pur et dur, originaire de Mumbai. Je construis des agents IA et des automatisations pour des équipes métier. Au quotidien, je travaille aux côtés de l'équipe d'UpLink, la plateforme d'innovation ouverte du Forum économique mondial, et je résous leurs problèmes opérationnels grâce à la technologie.",
      "Je connectais des systèmes à la main bien avant MCP, et avec les agents IA je le fais maintenant à grande échelle. Les données sont l'autre moitié de mon travail, et mon passé en QA garde les deux fiables."
    ],
    askMeAbout: [
      "Des agents IA pour les équipes métier",
      "Skills et plugins Claude",
      "Connecteurs MCP",
      "Agents en lecture seule",
      "Workflows n8n et Clay",
      "Données Salesforce et Airtable",
      "Débogage et causes racines"
    ],
    glance: {
      title: "En bref",
      rows: [
        { k: "Aujourd'hui", v: "Opérations technologiques chez UpLink, Forum économique mondial" },
        { k: "Basé à", v: "Genève, Suisse" },
        { k: "Expérience", v: "12 ans dans la tech, depuis 2014" },
        { k: "Outils clés", v: "Agents IA, Salesforce, n8n, Airtable, Clay, Python" },
        { k: "Certifié", v: "Cinq certifications Salesforce" }
      ]
    },
    openTo: {
      label: "Ouvert à des postes",
      where: "Suisse ou France voisine. Sur site, hybride ou à distance.",
      note: "Ouvert aussi à tout défi que la technologie peut résoudre."
    },
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
          "  \"description\": \"Construit des agents IA et des automatisations pour des équipes métier\",",
          "  \"tools\": [\"salesforce\", \"airtable\", \"n8n\", \"clay\", \"claude\", \"python\"],",
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

  craft: {
    title: "Ce que je fais",
    body: "Cinq volets du métier, avec plus de place qu'un titre n'en donne.",
    pillars: [
      {
        title: "Connecter des systèmes, avant MCP et après",
        body: [
          "Je construisais des intégrations bien avant MCP. Il fallait lire la doc des API, écrire chaque appel à la main, et gérer connexions, pagination et erreurs système par système.",
          "Les agents IA et les connecteurs MCP ont changé le rythme, pas le métier. Je décris ce qui doit aller où, l'agent fait le câblage, et je relis. Les workflows se documentent eux-mêmes et sont partagés dans l'équipe."
        ],
        viz: {
          caption: "Les outils que je connecte. Touchez-en un pour voir son rôle ici.",
          hub: "Agents et workflows",
          adminLabel: "Je l'administre",
          adminNote: "Un anneau marque les quatre plateformes que j'administre aussi.",
          tools: [
            { role: "Le CRM : la référence pour les organisations, les personnes et les adhésions." },
            { role: "Newsletters et parcours e-mail." },
            { role: "Les bases de travail où l'équipe relit, note et décide." },
            { role: "Des workflows planifiés qui déplacent les données d'un système à l'autre." },
            { role: "Trouve des entreprises et des contacts pour la recherche go-to-market." },
            { role: "Des tables de données gouvernées et les tableaux de bord qui les exploitent." },
            { role: "Les tickets, et les données source des tableaux de bord qualité." },
            { role: "La documentation, tenue à jour par des agents planifiés." },
            { role: "Des scripts pour tout ce que les plateformes ne font pas seules." },
            { role: "Agents et skills, qui accèdent aux systèmes via des connecteurs MCP." }
          ]
        },
        compare: {
          caption: "Une intégration, deux façons",
          before: {
            label: "À la main",
            steps: ["Lire la doc des API", "Écrire chaque appel", "Gérer connexions, pagination et erreurs", "Tester sur de vraies données", "Rédiger la documentation"]
          },
          after: {
            label: "Avec les agents et MCP",
            steps: ["Décrire ce qui doit aller où", "L'agent câble via les connecteurs", "Je relis et je teste", "Il se documente tout seul"]
          }
        }
      },
      {
        title: "Les données, l'autre moitié",
        body: [
          "Une automatisation vaut ce que valent les données dessous, et les données étaient mon métier bien avant l'IA. J'ai piloté des migrations de données sur Salesforce et sur mainframe.",
          "Aujourd'hui, je fais entrer des données issues de fournisseurs de données et du web ouvert, je les rapproche de ce que nous avons déjà, je supprime les doublons, et j'en fais des jeux de données structurés sur lesquels l'entreprise et ses workflows peuvent compter."
        ],
        viz: {
          caption: "Des sources brutes à un jeu de données fiable",
          stages: [
            { label: "Sources", note: "Fournisseurs de données, web ouvert, formulaires et CRM" },
            { label: "Importer", note: "Des récupérations planifiées qui notent leur dernier passage" },
            { label: "Rapprocher", note: "Faire correspondre champs et noms avec l'existant" },
            { label: "Nettoyer", note: "Supprimer les doublons, garder la valeur la plus fiable" },
            { label: "Jeu de données", note: "Une table structurée par sujet" },
            { label: "Utiliser", note: "Workflows, tableaux de bord et personnes" }
          ]
        }
      },
      {
        title: "Fiable, grâce à la QA",
        body: [
          "J'ai passé des années à tester les systèmes des autres, et il m'en reste une habitude : me demander comment une chose va casser avant sa livraison.",
          "Les contrôles sont donc intégrés dès le départ. Un second agent qui ne peut rien modifier audite le premier, et les chiffres qui prouvent qu'un workflow fonctionne sont collectés à chaque exécution, pas assemblés à la main après coup. Les règles qui sous-tendent cela sont dans les notes de terrain plus bas."
        ],
        viz: {
          caption: "Chaque exécution rend compte d'elle-même. Chiffres illustratifs.",
          title: "Exécution hebdomadaire",
          status: "Réussie",
          rows: [
            { k: "Enregistrements lus", v: "310" },
            { k: "Créés", v: "12" },
            { k: "Ignorés, déjà présents", v: "298" },
            { k: "Envoyés à une personne", v: "3" },
            { k: "Audit par un second agent", v: "Aucun écart" }
          ],
          note: "Si un chiffre semble faux, l'exécution le dit avant qu'une personne ne le remarque."
        }
      },
      {
        title: "Montrer plutôt que dire",
        body: [
          "Je préfère montrer une idée qui fonctionne plutôt que la décrire. Une preuve de concept rapide, une démo en direct ou quelque chose que l'on peut ouvrir et partager règle souvent une discussion plus vite qu'un document."
        ],
        viz: {
          caption: "Ce que j'apporte d'habitude en réunion",
          items: [
            { label: "Preuve de concept", note: "L'idée, qui fonctionne sur un petit échantillon" },
            { label: "Démo en direct", note: "Le vrai outil, lancé devant l'équipe" },
            { label: "Tableau de bord", note: "Les chiffres, mis à jour sans moi" },
            { label: "Page de présentation", note: "Un seul lien qui explique tout le flux" },
            { label: "Vidéo explicative", note: "Courte et narrée, pour ceux qui n'étaient pas là" }
          ]
        }
      },
      {
        title: "Le débogage, ma partie préférée",
        body: [
          "J'adore déboguer : suivre un flux pas à pas jusqu'à ce que la cause racine se montre. Je le fais depuis bien avant l'IA, à l'époque des mainframes, et c'est toujours la partie du métier que je préfère.",
          "Le symptôme est rarement là où se trouve le problème. Je remonte donc le flux, une étape à la fois, jusqu'à ce que quelque chose ne colle pas."
        ],
        viz: {
          caption: "Un cas inventé, remonté jusqu'à sa cause",
          next: "Remonter d'une étape",
          again: "Remonter à nouveau",
          steps: [
            { label: "Symptôme", text: "Un e-mail de bienvenue n'est jamais arrivé." },
            { label: "Le workflow a-t-il tourné ?", text: "Oui, comme prévu." },
            { label: "A-t-il pris l'enregistrement ?", text: "Non. L'enregistrement ne correspondait jamais au déclencheur." },
            { label: "Pourquoi ?", text: "Le champ lu par le déclencheur était vide." },
            { label: "Cause racine", text: "Une formule en amont avait été modifiée la semaine d'avant." }
          ],
          fix: "Corriger la formule, puis ajouter un contrôle pour que le prochain champ vide lève une alerte."
        }
      }
    ]
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
        sub: "iGATE, aujourd'hui Capgemini",
        body: "Entré comme ingénieur logiciel. J'ai commencé comme développeur mainframe sur des programmes de gestion de flottes (DB2, CICS), puis je suis passé à l'assurance qualité Salesforce : comprendre comment les choses cassent avant les utilisateurs.",
        tags: ["Mainframe", "QA Salesforce"]
      },
      {
        place: "Bengaluru, Mumbai, Pune",
        body: "Entré comme analyste en technologies d'affaires, parti consultant senior. Développement mainframe, QA Salesforce et analyse métier Salesforce sur des programmes de santé et de gestion de partenaires, puis direction d'une équipe QA. Trois villes au passage.",
        tags: ["QA Salesforce", "Analyse métier", "Responsable QA"]
      },
      {
        when: "Janvier 2024",
        place: "Genève",
        title: "Arrivée au Forum économique mondial",
        sub: "Gestion de produit, puis opérations technologiques, UpLink",
        body: "J'ai débuté en gestion de produit pour UpLink, la plateforme d'innovation ouverte du Forum pour les jeunes entreprises, en travaillant avec des prestataires pour livrer le produit. Puis je suis passé aux opérations technologiques. Basé à Genève.",
        tags: ["Gestion de produit", "Opérations technologiques"]
      },
      {
        year: "Auj.",
        place: "Genève",
        sub: "UpLink et l'équipe technologique élargie du Forum",
        body: "Je construis les agents IA et les automatisations sur lesquels l'équipe s'appuie, en connectant Salesforce, Marketing Cloud, Airtable, n8n, Clay, Databricks, Jira et Confluence avec Python et Claude. J'administre aussi Salesforce, Airtable, n8n et Clay. Les workflows se documentent eux-mêmes et sont partagés dans l'équipe.",
        tags: ["Agents IA", "Automatisation", "Données"]
      }
    ],
    tracks: {
      title: "Ce que j'ai fait, et où",
      caption: "Une marque signifie que j'ai fait ce type de travail dans ce chapitre.",
      yes: "oui",
      no: "non",
      chapters: [
        { when: "2014–17", org: "iGATE, aujourd'hui Capgemini" },
        { when: "2017–23", org: "Deloitte" },
        { when: "2024–auj.", org: "Forum économique mondial" }
      ],
      rows: [
        { label: "Développement mainframe" },
        { label: "QA Salesforce" },
        { label: "Analyse métier" },
        { label: "Direction d'une équipe QA" },
        { label: "Gestion de produit" },
        { label: "Opérations technologiques" },
        { label: "Agents IA et automatisation" }
      ]
    },
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
      title: "Pipeline de leads go-to-market",
      status: "En production",
      oneLiner: "Trouve les entreprises qui correspondent à un défi d'innovation : recherchées par IA, dédoublonnées et notées, avec une personne qui approuve chaque lead avant la prise de contact.",
      how: "Un cahier des charges du défi entre. Une recherche par IA sur Clay et n8n propose des candidats avec leurs sources, les doublons sont supprimés, des bases d'entreprises et le CRM comblent les manques, et un score d'adéquation classe ce qui reste. Une personne approuve chaque lead avant toute prise de contact.",
      lesson: "Le contrôle humain reste. Le travail de l'agent est de le rendre rapide.",
      problem: "Trouver des entreprises adaptées à un défi se faisait à la main, en recherche documentaire : lent, inégal, et plein d'entreprises déjà connues.",
      checks: "Chaque candidat garde ses sources. Les doublons sont repérés par rapport aux leads existants et au CRM avant l'enrichissement, donc rien n'est cherché deux fois. Rien ne part sans l'approbation d'une personne.",
      result: "Une longue liste classée et sourcée pour chaque défi. L'équipe passe son temps à juger l'adéquation plutôt qu'à chercher.",
      stack: ["Clay", "n8n", "Airtable", "Claude", "Salesforce"],
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
      title: "Des skills Claude réutilisables : booklets de pitch",
      status: "En production, partagé avec l'équipe",
      oneLiner: "Des skills que toute l'équipe utilise. L'un construit un booklet de pitch à partir de la base de données, et un second agent, en lecture seule, l'audite.",
      how: "Un skill Claude lit les enregistrements présélectionnés, remplit le modèle de diapositives et place chaque logo par enregistrement. Un second skill, en lecture seule, audite ensuite la présentation terminée par rapport à la source et signale ce qui ne correspond pas. Le même modèle produit maintenant un booklet des lauréats et un booklet des participants à un événement.",
      lesson: "Générer, puis auditer avec une passe distincte qui ne peut rien modifier.",
      problem: "Avant une journée de jury, quelqu'un passait des jours à copier des enregistrements dans des diapositives, à aligner des logos et à courir après les modifications tardives. La présentation était périmée dès que les données changeaient.",
      checks: "Le skill d'audit est distinct du constructeur et ne peut rien modifier. Il compare chaque diapositive à son enregistrement source, teste les liens et classe ses constats par gravité : une personne relit une courte liste, pas toute la présentation.",
      result: "Un booklet à la demande, reconstruit dès que les données changent, et un guide pratique pour que les collègues le lancent sans moi.",
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
      title: "Un agent d'aide en lecture seule dans Slack",
      status: "Pilote en démarrage",
      oneLiner: "Lecture seule par conception : il vérifie les systèmes et donne aux collègues les étapes à suivre. Il ne modifie jamais les données.",
      how: "Packagé comme plugin Claude, avec des playbooks pour les questions récurrentes et des outils en lecture seule. Il consulte l'état actuel, explique ce qu'il a trouvé et rend les étapes à suivre, pour que la personne fasse la modification avec son propre compte.",
      lesson: "Les agents consultent. Les personnes modifient, donc chaque modification garde un responsable.",
      problem: "Les mêmes questions m'arrivent chaque semaine : pourquoi cet enregistrement est bloqué, où est ce document, comment corriger ce champ. Les réponses étaient dans ma tête.",
      checks: "Il n'a que des outils en lecture seule, donc il ne peut pas modifier les données, même si on le lui demande. Il ne porte que des connaissances de travail, et chaque modification reste faite par une personne avec son propre compte.",
      result: "Les collègues ont tout de suite la réponse et les étapes, et j'ai moins d'interruptions. C'est un pilote en démarrage, donc les playbooks s'enrichissent encore.",
      flow: ["Question dans Slack", "L'agent lit les systèmes", "Explique ce qu'il a trouvé", "Rend les étapes à suivre", "Une personne fait la modification"],
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
      title: "Des agents planifiés qui signalent ce qui a changé",
      status: "En production",
      oneLiner: "Ils suivent ce qui a changé dans nos systèmes et qui l'a changé, mettent à jour la doc et envoient une synthèse hebdomadaire par e-mail.",
      problem: "Les systèmes changent sans bruit. Un champ est renommé ou un workflow modifié, et des semaines plus tard personne ne se souvient de qui ni pourquoi. La documentation dérive.",
      checks: "Les agents ne font que lire les systèmes qu'ils surveillent. Ils envoient des comptages et des exceptions, pas des journaux bruts, et chaque e-mail se termine par une carte indiquant ce qui a tourné, qui l'a lancé et quand aura lieu la prochaine exécution.",
      result: "Une synthèse hebdomadaire dans la boîte mail, une documentation à jour, et une réponse quand quelqu'un demande qui a changé quoi.",
      flow: ["Journaux d'audit et historique d'exécution", "Ce qui a changé, et qui", "Doc mise à jour", "E-mail hebdomadaire"],
      how: "Chacun est une tâche planifiée avec un petit fichier de profil qui dit ce qui compte. L'agent lit les journaux d'audit et l'historique d'exécution, repère ce qui a changé et qui l'a changé, met à jour la documentation et rédige un court e-mail, signé par le rouage. D'autres rapportent ce qu'ont fait les campagnes d'e-mails et quels événements tech valent le déplacement.",
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
      title: "Suivi des coûts de l'IA",
      status: "En production",
      oneLiner: "Un tableau de bord et des alertes, pour que les dépenses d'IA soient visibles avant de surprendre qui que ce soit.",
      how: "Un workflow planifié récupère le journal d'audit chaque jour, regroupe les événements en comptages par fonctionnalité et par personne, et les écrit dans une base surmontée d'un tableau de bord et d'un rapport mensuel. Des alertes se déclenchent quand une journée dépasse largement la normale.",
      lesson: "Stockez des comptages, pas des journaux bruts. Le rapport n'a besoin que des comptages.",
      problem: "Les fonctionnalités d'IA consomment des crédits, et la seule vue des dépenses était la facture de fin de mois.",
      checks: "Des alertes se déclenchent quand une journée dépasse largement la normale, donc une automatisation qui s'emballe se voit le jour même. La table garde des comptages, pas des journaux bruts, pour que le rapport reste léger et lisible.",
      result: "Les dépenses sont visibles chaque jour, par fonctionnalité et par personne, avec un rapport mensuel que personne n'a à assembler.",
      flow: ["Journal d'audit", "Agrégation quotidienne", "Table d'usage", "Tableau de bord et rapport mensuel", "Alertes"],
      stack: ["n8n", "Airtable"],
      viz: {
        caption: "Usage quotidien et ligne d'alerte, unités illustratives",
        unit: "unités"
      }
    },
    {
      title: "Des évaluations de fournisseurs menées comme des expériences",
      status: "Terminé",
      oneLiner: "Des fournisseurs de données et des outils comparés sur le coût mesuré par résultat, avant tout achat.",
      how: "Chaque test a sa ligne de réussite écrite d'avance : couverture, exactitude par rapport à des enregistrements fiables, coût par résultat utile, et contrôle sur un échantillon que l'outil n'a pas vu pendant la configuration. Un résultat récent : un verdict partagé, utiliser le nouvel outil pour certaines tâches, garder l'existant pour d'autres.",
      lesson: "Écrivez la ligne de réussite avant de lancer le test.",
      problem: "Les outils et les fournisseurs de données se jugent facilement sur une démo, et difficilement sur des résultats. Nous voulions des preuves avant de décider.",
      checks: "Les lignes de réussite sont écrites avant le test. Chaque outil reçoit le même échantillon, un dernier contrôle utilise des enregistrements qu'il n'a pas vus, et les exécutions échouées comptent dans le coût.",
      result: "Un verdict chiffré, partagé sous forme de page que les décideurs lisent en quelques minutes : à quoi sert chaque outil, et à quoi il ne sert pas.",
      flow: ["Écrire les lignes de réussite", "Même échantillon pour chaque outil", "Mesurer le coût par résultat", "Contrôler sur des enregistrements inconnus", "Verdict"],
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
      { label: "Agents et IA", items: ["Agents IA", "Claude", "Claude Code", "Skills et plugins", "MCP", "Prompt engineering"] },
      { label: "Automatisation", items: ["Automatisation de workflows", "n8n", "Clay", "Automatisations Airtable", "API REST", "GitHub Actions"] },
      { label: "Données et CRM", items: ["Salesforce", "Marketing Cloud", "Data Cloud", "Airtable", "Databricks", "Gestion des données", "Qualité des données", "Gouvernance des données"] },
      { label: "Langages", items: ["Python", "SQL", "JavaScript", "Java"] },
      { label: "Qualité", items: ["Conception de tests", "Automatisation des tests", "Selenium", "Tests de scénarios"] },
      { label: "Produit et opérations", items: ["Gestion de produit", "Analyse métier", "Opérations techniques", "Jira", "Confluence"] },
      { label: "Là où j'ai commencé", items: ["COBOL", "JCL", "DB2"] }
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
      "Les descriptions de projets sont généralisées et les chiffres des visuels sont illustratifs.",
      "Cette page compte les visites avec GoatCounter. Pas de cookies, et rien ne vous suit sur d'autres sites."
    ]
  },

  ui: {
    navApproach: "Dire bonjour",
    navJourney: "Parcours",
    navCraft: "Ce que je fais",
    navWork: "Ma méthode",
    navProjects: "Projets",
    navNotes: "Notes de terrain",
    navToolbox: "Outils",
    navPersonal: "Perso",
    navConnect: "Contact",
    labelApproach: "dire bonjour",
    labelJourney: "parcours",
    labelCraft: "ce que je fais",
    labelWork: "ma méthode",
    labelProjects: "travaux récents",
    labelNotes: "notes de terrain",
    labelToolbox: "boîte à outils",
    labelPersonal: "loin du clavier",
    labelConnect: "contact",
    askMeAbout: "Parlez-moi de",
    hereToLearn: "Ici pour apprendre :",
    howToSayHi: "Comment dire bonjour",
    seeWork: "Voir les travaux récents",
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
    problem: "Le problème",
    checks: "Ce qui le rend fiable",
    result: "Ce que ça apporte à l'équipe",
    flowSteps: "Étapes",
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
