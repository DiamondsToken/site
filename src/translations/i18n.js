// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      cookieBanner: {
        initialTitle: "Teniamo alla tua privacy",
        initialDescription:
          "Utilizziamo cookie per migliorare la tua esperienza di navigazione, offrire annunci o contenuti personalizzati e analizzare il nostro traffico. Cliccando su \"Accetta tutto\", acconsenti all'uso dei cookie.",
        customizeBtn: "Personalizza",
        acceptAllBtn: "Accetta tutto",

        secondTitle: "Personalizza le preferenze sui cookie",
        secondDescription1:
          "Troverai informazioni dettagliate su tutti i cookie nelle categorie di consenso qui sotto.",
        secondDescription2:
          "I cookie classificati come \"Necessari\" sono memorizzati nel tuo browser perché indispensabili per il funzionamento base del sito.",
        secondDescription3:
          "Utilizziamo anche cookie di terze parti per analizzare il traffico, memorizzare le tue preferenze e offrirti contenuti e annunci personalizzati. Questi cookie verranno salvati solo con il tuo consenso.",
        secondDescription4:
          "Puoi scegliere di abilitare o disabilitare alcuni o tutti questi cookie, ma alcune funzioni del sito potrebbero non funzionare correttamente se disabilitati.",
        showLessBtn: "Mostra meno",

        categories: {
          necessary: {
            title: "Necessari (Sempre Attivi)",
            description:
              "Cookie indispensabili per garantire le funzioni base del sito, come l’accesso sicuro e la gestione delle preferenze. Non memorizzano dati personali.",
          },
          functional: {
            title: "Funzionali",
            description:
              "Cookie che abilitano funzionalità aggiuntive, come la condivisione sui social o il feedback degli utenti.",
          },
          analytics: {
            title: "Analitici",
            description:
              "Cookie utilizzati per comprendere come gli utenti interagiscono con il sito (numero di visitatori, bounce rate, ecc.).",
          },
          performance: {
            title: "Prestazioni",
            description:
              "Cookie che analizzano gli indici chiave di performance per migliorare l’esperienza utente.",
          },
          advertisement: {
            title: "Pubblicitari",
            description:
              "Cookie utilizzati per fornire annunci personalizzati in base alle pagine visitate e valutare l’efficacia delle campagne.",
          },
        },

        savePreferencesBtn: "Salva le mie preferenze",
      },
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds Group</span> (DMNS)",
        description:
          "Benvenuti nella documentazione ufficiale di Diamonds Group (DMNS), un ecosistema innovativo costruito sulla blockchain Solana che colma il divario tra economia tradizionale e decentralizzata. DMNS offre strumenti reali per migliorare la finanza personale e favorire l’integrazione aziendale nel mondo Web3.",
        roadmapButton: "Scopri la Roadmap",
        purchaseButton: "Come Acquistare",
      },
      vision: {
        title: "Visione e Valori",
        description:
          "Diamonds Group (DMNS) si propone di integrare il mondo tradizionale e quello decentralizzato, offrendo strumenti pratici per la finanza personale e l’integrazione aziendale nel Web3.",
        list: {
          innovation:
            "Innovazione: Soluzioni sostenibili e all’avanguardia per massimizzare l’efficacia del token.",
          decentralization:
            "Decentralizzazione: Governance guidata dalla community attraverso un modello DAO condiviso.",
          transparency:
            "Trasparenza: Tutte le transazioni e processi sono verificabili on-chain.",
          inclusivity:
            "Inclusività: Strumenti finanziari e opportunità per tutti, dagli esperti ai neofiti.",
          sharedGrowth:
            "Professionalità: Un team internazionale di esperti, con background in crypto e finanza tradizionale, che garantisce affidabilità e praticità.",
        },
      },
      features: {
        primaryTitle: "Caratteristiche Principali",
        extendedTitle: "Un Ecosistema Integrato",
        primary: [
          {
            title: "DMNS: Il Cuore dell'Ecosistema",
            description:
              "Il token DMNS alimenta l’intero ecosistema, assicurando trasparenza, sicurezza e utilità pratica per transazioni rapide e innovative.",
          },
          {
            title: "Ecosistema Integrato",
            description:
              "Offre una suite completa di servizi: DMNS SOCIAL, COMMERCE, ACADEMY, PAY & WALLET, DEX e DAO, per un’esperienza Web3 completa.",
          },
          {
            title: "Diamonds Army",
            description:
              "La community esclusiva: possedere almeno 50 milioni di DMNS garantisce accesso a eventi, iniziative dedicate e NFT personalizzati.",
          },
        ],
        extended: [
          {
            title: "DMNS SOCIAL",
            description:
              "Una rete sociale decentralizzata che connette utenti e protegge la privacy, offrendo contenuti personalizzati.",
          },
          {
            title: "DMNS COMMERCE",
            description:
              "Una piattaforma di social commerce che collega imprese locali e globali, incentivando pagamenti in DMNS.",
          },
          {
            title: "DMNS ACADEMY",
            description:
              "Una piattaforma educativa avanzata dedicata a blockchain, cripto, intelligenza artificiale e strategie finanziarie.",
          },
          {
            title: "DMNS PAY & WALLET",
            description:
              "Soluzioni di pagamento decentralizzate per integrazioni sicure e rapide nel mondo digitale.",
          },
          {
            title: "DMNS DEX & DAO",
            description:
              "Un exchange decentralizzato per il trading di asset crypto e una struttura DAO per la governance partecipativa.",
          },
        ],
      },
      solana: {
        title: "Perché Solana?",
        cards: [
          {
            title: "Velocità",
            description: "Fino a 65.000 TPS con finalità quasi istantanea.",
          },
          {
            title: "Costo",
            description: "Transazioni a partire da $0,00025 ciascuna.",
          },
        ],
        description:
          "La blockchain Solana garantisce sicurezza, scalabilità e basse commissioni, rendendo DMNS ideale per transazioni rapide e sicure.",
      },
      roadmap: {
        title: "Roadmap 2025",
        items: [
          {
            quarter: "Q1 (Gennaio – Marzo)",
            holdersTarget: "5.000 HOLDERS",
            milestones: [
              "Fair Launch su Solana",
              "Primi listaggi su siti di ranking (CMC, CG)",
              "Consolidamento della community",
              "Miglioramenti alla documentazione",
            ],
          },
          {
            quarter: "Q2 (Aprile – Giugno)",
            holdersTarget: "25.000 HOLDERS",
            milestones: [
              "Eventi live e prime integrazioni con piattaforme di e-commerce tramite DMNS Pay",
              "Distribuzione dell’Airdrop",
            ],
          },
          {
            quarter: "Q3 (Luglio – Settembre)",
            holdersTarget: "60.000 HOLDERS",
            milestones: [
              "Rilascio delle funzionalità base del DEX",
              "Beta testing della DAO",
              "Espansione di DMNS Academy con nuovi corsi e workshop",
            ],
          },
          {
            quarter: "Q4 (Ottobre – Dicembre)",
            holdersTarget: "100.000 HOLDERS",
            milestones: [
              "Implementazione completa della DAO",
              "NFT dedicati all’educazione",
              "Nuove partnership strategiche",
            ],
          },
        ],
      },
      purchase: {
        title: "Come Acquistare DMNS",
        intro:
          "DMNS è attualmente disponibile su Raydium (un AMM basato su Solana). Avrai bisogno di una wallet compatibile (es. Phantom o Solflare).",
        list: ["Raydium (AMM di Solana)", "Prossimamente su CEX Top 20"],
        instructions:
          "Collega la tua wallet a Raydium, seleziona DMNS inserendo il Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5 (se non appare automaticamente), specifica l’importo di SOL da scambiare e conferma. I token DMNS saranno subito visibili nella tua wallet.",
        note:
          "Eventuali futuri listaggi su CEX saranno annunciati tramite i canali ufficiali.",
      },
      faq: {
        title: "Domande Frequenti",
        items: [
          {
            question: "Che cos’è la Diamonds Army?",
            answer:
              "La Diamonds Army è il nucleo della community. Possedere almeno 50 milioni di DMNS garantisce l’accesso a eventi esclusivi, iniziative dedicate e NFT personalizzati.",
          },
          {
            question: "Quali vantaggi offre il token DMNS?",
            answer:
              "DMNS è il motore dell’ecosistema, offrendo trasparenza, sicurezza e utilità per transazioni rapide e innovative sulla blockchain Solana.",
          },
          {
            question: "Come funziona la governance tramite DAO?",
            answer:
              "I detentori di DMNS partecipano alle decisioni presentando proposte e votando, garantendo una governance trasparente e condivisa.",
          },
          {
            question: "Quali strumenti offre l’ecosistema DMNS?",
            answer:
              "L’ecosistema integra DMNS SOCIAL, COMMERCE, ACADEMY, PAY & WALLET, DEX e DAO, offrendo una gamma completa di servizi Web3.",
          },
          {
            question: "DMNS è un buon investimento?",
            answer:
              "Le criptovalute sono ad alto rischio. Fai sempre le tue ricerche e valuta la tua tolleranza al rischio. DMNS offre strumenti reali e vantaggi, ma non costituisce un consiglio finanziario.",
          },
        ],
      },
      community: {
        title: "Unisciti alla Diamonds Army",
        description:
          "Diventa parte integrante della nostra community esclusiva: partecipa a eventi, iniziative e accedi a NFT personalizzati, contribuendo alla crescita e all’innovazione dell’ecosistema DMNS.",
        social: {
          x: "Seguici su X",
          telegram: "Unisciti al Gruppo Telegram",
          whatsapp: "Unisciti al Gruppo WhatsApp",
        },
      },
      disclaimer: {
        title: "Disclaimer",
        text:
          "Le informazioni fornite non costituiscono consulenza finanziaria o legale. Le criptovalute sono investimenti ad alto rischio. Valuta attentamente la tua tolleranza e fai ricerche approfondite (DYOR). Diamonds Group (DMNS) non si assume responsabilità per eventuali perdite.",
        channelsTitle: "Canali Ufficiali",
        channels: [
          { name: "Sito Ufficiale", url: "https://diamonds-group.com/" },
          { name: "Telegram", url: "https://t.me/dmnstoken" },
          { name: "Twitter (X)", url: "https://x.com/DmnsGroup" },
        ],
      },
      footer: {
        text: "© 2025 - 2026 Diamonds Group (DMNS). Tutti i diritti riservati.",
        poweredBy: "",
      },
      airdrop: {
        title: "Partecipa all'Airdrop DMNS!",
        description1:
          "Un airdrop è un’iniziativa per distribuire token gratuitamente, incentivando la crescita della community.",
        description2:
          "In questo evento esclusivo verranno distribuiti token DMNS tra i partecipanti. Rimani aggiornato per ulteriori dettagli!",
        cta: "Partecipa ora!",
      },
      techSpecs: {
        title: "Dettagli Tecnici e Tokenomics",
        items: [
          "Nome: Diamonds Group",
          "Ticker: DMNS",
          "Rete: Solana (Token SPL)",
          "Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5",
          "Decimali: 6",
          "Supply Totale: 100,000,000,000 DMNS",
          "Distribuzione: Fair Launch 13.1%, Marketing 5%, Liquidity Pool 24.5%, Token Vesting 47.3%, Nuovo Liquidity Pool 10.1%",
          "Vesting: 8% disponibile al completamento del Fair Launch (23 Gennaio 2025), 2% dopo 15 giorni, 2% ogni 5 giorni successivi",
        ],
      },
      purchaseDetailed: {
        introText: "Segui questi passaggi dettagliati per acquistare DMNS:",
        steps: {
          step1: {
            title: "1. Acquista SOLANA su un Exchange Centralizzato (CEX)",
            list: [
              {
                label: "Passo 1",
                text: "Registrati su un exchange affidabile (es. Binance, Coinbase, Kraken).",
              },
              {
                label: "Passo 2",
                text: "Completa il processo di verifica (KYC) se richiesto.",
              },
              {
                label: "Passo 3",
                text: "Deposita valuta fiat o criptovalute e acquista SOLANA.",
              },
            ],
          },
          step2: {
            title: "2. Trasferisci SOLANA al tuo wallet Phantom",
            list: [
              {
                label: "Passo 1",
                text: "Apri il tuo wallet Phantom e copia l’indirizzo pubblico.",
              },
              {
                label: "Passo 2",
                text: "Accedi alla sezione prelievi del CEX e incolla l’indirizzo della tua wallet.",
              },
              {
                label: "Passo 3",
                text: "Verifica le commissioni e conferma la transazione.",
              },
            ],
          },
          step3: {
            title: "3. Scambia SOL con DMNS tramite Phantom",
            list: [
              {
                label: "Passo 1",
                text: "Apri l’app Phantom e vai alla sezione 'Swap'.",
              },
              {
                label: "Passo 2",
                text: "Seleziona SOL come valuta di partenza e DMNS come valuta di destinazione.",
              },
              {
                label: "Passo 3",
                text: "Inserisci l’importo da scambiare, controlla il tasso di cambio e conferma l’operazione.",
              },
            ],
          },
          step4: {
            title: "4. Benvenuto nella Diamonds Army!",
            list: [
              {
                label: "Passo 1",
                text: "Visita il nostro sito ufficiale e i canali social per restare aggiornato.",
              },
              {
                label: "Passo 2",
                text: "Unisciti al gruppo Telegram e seguici su X per eventi e notizie.",
              },
              {
                label: "Passo 3",
                text: "Partecipa attivamente alla community per accedere a vantaggi esclusivi.",
              },
            ],
          },
        },
        raydiumButton: "Acquista DMNS su Raydium",
      },
    },
  },
  en: {
    translation: {
      cookieBanner: {
        initialTitle: "We value your privacy",
        initialDescription:
          "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
        customizeBtn: "Customize",
        acceptAllBtn: "Accept All",

        secondTitle: "Customize Consent Preferences",
        secondDescription1:
          "You will find detailed information about all cookies under each consent category below.",
        secondDescription2:
          'Cookies categorized as "Necessary" are stored on your browser as they are essential for the site’s basic functionalities.',
        secondDescription3:
          "We also use third-party cookies to analyze your website usage, store your preferences, and provide personalized content and ads. These cookies will only be saved with your consent.",
        secondDescription4:
          "You can choose to enable or disable some or all of these cookies, but disabling some might affect your browsing experience.",
        showLessBtn: "Show less",

        categories: {
          necessary: {
            title: "Necessary (Always Active)",
            description:
              "Necessary cookies enable the basic features of this site, such as secure log-in and consent preferences. They do not store any personal data.",
          },
          functional: {
            title: "Functional",
            description:
              "Functional cookies help enable additional features like social sharing and user feedback.",
          },
          analytics: {
            title: "Analytics",
            description:
              "Analytical cookies are used to understand user interactions (visitor count, bounce rate, etc.).",
          },
          performance: {
            title: "Performance",
            description:
              "Performance cookies analyze key performance metrics to improve user experience.",
          },
          advertisement: {
            title: "Advertisement",
            description:
              "Advertisement cookies deliver personalized ads based on visited pages and assess campaign effectiveness.",
          },
        },

        savePreferencesBtn: "Save My Preferences",
      },
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds Group</span> (DMNS)",
        description:
          "Welcome to the official documentation of Diamonds Group (DMNS), an innovative ecosystem built on the Solana blockchain to bridge the gap between traditional and decentralized finance. DMNS provides real-world tools to enhance personal finance and facilitate business integration into Web3.",
        roadmapButton: "Discover the Roadmap",
        purchaseButton: "How to Purchase",
      },
      vision: {
        title: "Vision and Values",
        description:
          "Diamonds Group (DMNS) aims to bridge traditional and decentralized finance by providing practical tools for personal finance and business integration in Web3.",
        list: {
          innovation:
            "Innovation: Pursuing sustainable, cutting-edge solutions to maximize token effectiveness.",
          decentralization:
            "Decentralization: Community-driven governance through a shared DAO model.",
          transparency:
            "Transparency: All key transactions and processes are verifiable on-chain.",
          inclusivity:
            "Inclusivity: Financial tools and opportunities for everyone, from experts to newcomers.",
          sharedGrowth:
            "Professionalism: An international team of experts with backgrounds in both crypto and traditional finance, ensuring reliability and practicality.",
        },
      },
      features: {
        primaryTitle: "Main Features",
        extendedTitle: "An Integrated Ecosystem",
        primary: [
          {
            title: "DMNS: The Heart of the Ecosystem",
            description:
              "The DMNS token powers the entire ecosystem, ensuring transparency, security, and practical utility for fast, innovative transactions.",
          },
          {
            title: "Integrated Ecosystem",
            description:
              "A complete suite of services including DMNS SOCIAL, COMMERCE, ACADEMY, PAY & WALLET, DEX, and DAO for a full Web3 experience.",
          },
          {
            title: "Diamonds Army",
            description:
              "The exclusive community – holding at least 50 million DMNS grants access to exclusive events, dedicated initiatives, and personalized NFTs.",
          },
        ],
        extended: [
          {
            title: "DMNS SOCIAL",
            description:
              "A decentralized Web3 social network offering personalized content and privacy protection.",
          },
          {
            title: "DMNS COMMERCE",
            description:
              "A social commerce platform connecting local and global businesses, promoting payments in DMNS.",
          },
          {
            title: "DMNS ACADEMY",
            description:
              "An advanced educational platform focused on blockchain, crypto, AI, and financial strategies.",
          },
          {
            title: "DMNS PAY & WALLET",
            description:
              "Decentralized payment solutions designed for seamless digital transactions.",
          },
          {
            title: "DMNS DEX & DAO",
            description:
              "A decentralized exchange for trading crypto assets and a DAO structure for community-driven governance.",
          },
        ],
      },
      solana: {
        title: "Why Solana?",
        cards: [
          {
            title: "Speed",
            description: "Up to 65,000 TPS with near-instant finality.",
          },
          {
            title: "Cost",
            description: "Transactions starting from $0.00025 each.",
          },
        ],
        description:
          "Solana’s blockchain ensures security, scalability, and low fees, making DMNS ideal for fast and secure transactions.",
      },
      roadmap: {
        title: "2025 Roadmap",
        items: [
          {
            quarter: "Q1 (January – March)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Fair Launch on Solana",
              "Initial listings on ranking sites (CMC, CG)",
              "Community consolidation",
              "Documentation improvements",
            ],
          },
          {
            quarter: "Q2 (April – June)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Live events and early integrations with e-commerce platforms via DMNS Pay",
              "Airdrop distribution",
            ],
          },
          {
            quarter: "Q3 (July – September)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "Release of basic DEX functionalities",
              "DAO beta testing",
              "Expansion of DMNS Academy with new courses and workshops",
            ],
          },
          {
            quarter: "Q4 (October – December)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Full DAO implementation",
              "NFTs dedicated to education",
              "Potential new strategic partnerships",
            ],
          },
        ],
      },
      purchase: {
        title: "How to Purchase DMNS",
        intro:
          "DMNS is currently available on Raydium (a Solana-based AMM). You will need a compatible wallet (e.g., Phantom or Solflare).",
        list: ["Raydium (Solana AMM)", "Coming Soon on Top 20 CEX"],
        instructions:
          "Connect your wallet to Raydium, select DMNS by entering the Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5 (if it doesn't appear automatically), specify the amount of SOL to swap, and confirm. Your DMNS tokens will appear instantly in your wallet.",
        note:
          "Any future CEX listings will be announced through official channels.",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is the Diamonds Army?",
            answer:
              "The Diamonds Army is the core of the community. Holding at least 50 million DMNS grants access to exclusive events, dedicated initiatives, and personalized NFTs.",
          },
          {
            question: "What benefits does the DMNS token offer?",
            answer:
              "DMNS powers the ecosystem, ensuring transparency, security, and practical utility for fast, innovative transactions on Solana.",
          },
          {
            question: "How does DAO governance work?",
            answer:
              "DMNS holders can participate in decision-making by submitting proposals and voting on initiatives, ensuring transparent, shared governance.",
          },
          {
            question: "What tools are available within the DMNS ecosystem?",
            answer:
              "The ecosystem includes DMNS SOCIAL, COMMERCE, ACADEMY, PAY & WALLET, DEX, and DAO, offering a comprehensive suite of Web3 services.",
          },
          {
            question: "Is DMNS a good investment?",
            answer:
              "Cryptocurrencies carry high risks. Always conduct thorough research and assess your risk tolerance. DMNS offers real-world tools and potential advantages, but this is not financial advice.",
          },
        ],
      },
      community: {
        title: "Join the Diamonds Army",
        description:
          "Become an integral part of our exclusive community. Participate in events, initiatives, and access personalized NFTs while contributing to the growth and innovation of the DMNS ecosystem.",
        social: {
          x: "Follow us on X",
          telegram: "Join our Telegram Group",
          whatsapp: "Join our WhatsApp Group",
        },
      },
      disclaimer: {
        title: "Disclaimer",
        text:
          "The information provided does not constitute financial or legal advice. Cryptocurrencies are high-risk investments. Each user should assess their own risk tolerance and conduct thorough research (DYOR). Diamonds Group (DMNS) is not responsible for any financial losses.",
        channelsTitle: "Official Channels",
        channels: [
          { name: "Official Website", url: "https://diamonds-group.com/" },
          { name: "Telegram", url: "https://t.me/dmnstoken" },
          { name: "Twitter (X)", url: "https://x.com/DmnsGroup" },
        ],
      },
      footer: {
        text: "© 2025 - 2026 Diamonds Group (DMNS). All rights reserved.",
        poweredBy: "",
      },
      airdrop: {
        title: "Join the DMNS Airdrop!",
        description1:
          "An airdrop is an initiative to distribute tokens for free, encouraging community growth.",
        description2:
          "In this exclusive event, DMNS tokens will be distributed to participants. Stay tuned for more details!",
        cta: "Join Now!",
      },
      techSpecs: {
        title: "Technical Details & Tokenomics",
        items: [
          "Name: Diamonds Group",
          "Ticker: DMNS",
          "Network: Solana (SPL Token)",
          "Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5",
          "Decimals: 6",
          "Total Supply: 100,000,000,000 DMNS",
          "Distribution: Fair Launch 13.1%, Marketing 5%, Liquidity Pool 24.5%, Token Vesting 47.3%, New Liquidity Pool 10.1%",
          "Vesting: 8% available at Fair Launch completion (January 23, 2025), 2% after 15 days, 2% every subsequent 5 days",
        ],
      },
      purchaseDetailed: {
        introText: "Follow these detailed steps to purchase DMNS:",
        steps: {
          step1: {
            title: "1. Buy SOLANA on a Centralized Exchange (CEX)",
            list: [
              {
                label: "Step 1",
                text: "Sign up for a reliable exchange (e.g., Binance, Coinbase, Kraken).",
              },
              {
                label: "Step 2",
                text: "Complete the account verification (KYC) process if required.",
              },
              {
                label: "Step 3",
                text: "Deposit fiat or cryptocurrencies and purchase SOLANA.",
              },
            ],
          },
          step2: {
            title: "2. Transfer SOLANA to Your Phantom Wallet",
            list: [
              {
                label: "Step 1",
                text: "Open your Phantom wallet and copy your public address.",
              },
              {
                label: "Step 2",
                text: "Access the withdrawal section on the CEX and paste your Phantom address.",
              },
              {
                label: "Step 3",
                text: "Review the withdrawal fees and confirm the transaction.",
              },
            ],
          },
          step3: {
            title: "3. Swap SOL for DMNS Using Phantom",
            list: [
              {
                label: "Step 1",
                text: "Open the Phantom app and navigate to the 'Swap' section.",
              },
              {
                label: "Step 2",
                text: "Select SOL as the source currency and DMNS as the target currency.",
              },
              {
                label: "Step 3",
                text: "Enter the amount to swap, verify the exchange rate, and confirm the swap.",
              },
            ],
          },
          step4: {
            title: "4. Welcome to the Diamonds Army!",
            list: [
              {
                label: "Step 1",
                text: "Visit our official website and social channels to stay updated.",
              },
              {
                label: "Step 2",
                text: "Join our Telegram group and follow us on X for events and news.",
              },
              {
                label: "Step 3",
                text: "Engage with the community to unlock exclusive benefits.",
              },
            ],
          },
        },
        raydiumButton: "Purchase DMNS on Raydium",
      },
    },
  },
  es: {
    translation: {
      cookieBanner: {
        initialTitle: "Valoramos tu privacidad",
        initialDescription:
          "Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer anuncios o contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", aceptas nuestro uso de cookies.",
        customizeBtn: "Personalizar",
        acceptAllBtn: "Aceptar todo",

        secondTitle: "Personalizar preferencias de consentimiento",
        secondDescription1:
          "Encontrarás información detallada sobre todas las cookies en cada categoría de consentimiento a continuación.",
        secondDescription2:
          'Las cookies clasificadas como "Necesarias" se almacenan en tu navegador porque son esenciales para las funcionalidades básicas del sitio.',
        secondDescription3:
          "También utilizamos cookies de terceros para analizar tu uso del sitio, guardar tus preferencias y ofrecer contenido y anuncios personalizados. Estas cookies solo se guardarán con tu consentimiento.",
        secondDescription4:
          "Puedes optar por habilitar o deshabilitar algunas o todas estas cookies, pero deshabilitar algunas podría afectar tu experiencia.",
        showLessBtn: "Mostrar menos",

        categories: {
          necessary: {
            title: "Necesarias (Siempre Activas)",
            description:
              "Cookies indispensables para el funcionamiento básico del sitio, como el inicio de sesión seguro y la gestión de preferencias. No almacenan datos personales.",
          },
          functional: {
            title: "Funcionales",
            description:
              "Cookies que habilitan funciones adicionales, como compartir en redes sociales o recopilar comentarios.",
          },
          analytics: {
            title: "Analíticas",
            description:
              "Cookies utilizadas para entender cómo interactúan los usuarios con el sitio (número de visitantes, tasa de rebote, etc.).",
          },
          performance: {
            title: "Rendimiento",
            description:
              "Cookies que analizan métricas clave para mejorar la experiencia del usuario.",
          },
          advertisement: {
            title: "Publicidad",
            description:
              "Cookies para mostrar anuncios personalizados basados en las páginas visitadas y evaluar la efectividad de las campañas.",
          },
        },

        savePreferencesBtn: "Guardar mis preferencias",
      },
      hero: {
        welcome: "<span class='text-yellow-400'>Diamonds Group</span> (DMNS)",
        description:
          "Bienvenidos a la documentación oficial de Diamonds Group (DMNS), un ecosistema innovador construido sobre la blockchain Solana que cierra la brecha entre las finanzas tradicionales y descentralizadas. DMNS ofrece herramientas reales para mejorar las finanzas personales e integrar a las empresas en el mundo Web3.",
        roadmapButton: "Descubre la Hoja de Ruta",
        purchaseButton: "Cómo Comprar",
      },
      vision: {
        title: "Nuestra Visión y Valores",
        description:
          "Diamonds Group (DMNS) aspira a unir las finanzas tradicionales y descentralizadas, ofreciendo herramientas prácticas para mejorar las finanzas personales y la integración empresarial en el mundo Web3.",
        list: {
          innovation:
            "Innovación: Soluciones sostenibles y de vanguardia para maximizar la eficacia del token.",
          decentralization:
            "Descentralización: Gobernanza impulsada por la comunidad a través de un modelo DAO compartido.",
          transparency:
            "Transparencia: Todas las transacciones y procesos son verificables on-chain.",
          inclusivity:
            "Inclusividad: Herramientas financieras y oportunidades para todos, desde expertos hasta principiantes.",
          sharedGrowth:
            "Profesionalismo: Un equipo internacional de expertos con experiencia en cripto y finanzas tradicionales, garantizando fiabilidad y practicidad.",
        },
      },
      features: {
        primaryTitle: "Características Principales",
        extendedTitle: "Un Ecosistema Integrado",
        primary: [
          {
            title: "DMNS: El Corazón del Ecosistema",
            description:
              "El token DMNS impulsa todo el ecosistema, asegurando transparencia, seguridad y utilidad práctica para transacciones rápidas e innovadoras.",
          },
          {
            title: "Ecosistema Integrado",
            description:
              "Una suite completa de servicios que incluye DMNS SOCIAL, COMMERCE, ACADEMY, PAY & WALLET, DEX y DAO para una experiencia Web3 integral.",
          },
          {
            title: "Diamonds Army",
            description:
              "La comunidad exclusiva: poseer al menos 50 millones de DMNS otorga acceso a eventos exclusivos, iniciativas dedicadas y NFTs personalizados.",
          },
        ],
        extended: [
          {
            title: "DMNS SOCIAL",
            description:
              "Una red social descentralizada que conecta usuarios y protege su privacidad, ofreciendo contenido personalizado.",
          },
          {
            title: "DMNS COMMERCE",
            description:
              "Una plataforma de comercio social que conecta negocios locales y globales, promoviendo pagos en DMNS.",
          },
          {
            title: "DMNS ACADEMY",
            description:
              "Una plataforma educativa avanzada centrada en blockchain, cripto, IA y estrategias financieras.",
          },
          {
            title: "DMNS PAY & WALLET",
            description:
              "Soluciones de pago descentralizadas diseñadas para transacciones digitales seguras y sin fricciones.",
          },
          {
            title: "DMNS DEX & DAO",
            description:
              "Un exchange descentralizado para el comercio de activos cripto y una estructura DAO para la gobernanza comunitaria.",
          },
        ],
      },
      solana: {
        title: "¿Por qué Solana?",
        cards: [
          {
            title: "Velocidad",
            description: "Hasta 65,000 TPS con finalización casi instantánea.",
          },
          {
            title: "Costo",
            description: "Transacciones desde $0.00025 cada una.",
          },
        ],
        description:
          "La blockchain de Solana garantiza seguridad, escalabilidad y bajas comisiones, haciendo de DMNS la opción ideal para transacciones rápidas y seguras.",
      },
      roadmap: {
        title: "Hoja de Ruta 2025",
        items: [
          {
            quarter: "Q1 (Enero – Marzo)",
            holdersTarget: "5,000 HOLDERS",
            milestones: [
              "Fair Launch en Solana",
              "Listados iniciales en sitios de ranking (CMC, CG)",
              "Consolidación de la comunidad",
              "Mejoras en la documentación",
            ],
          },
          {
            quarter: "Q2 (Abril – Junio)",
            holdersTarget: "25,000 HOLDERS",
            milestones: [
              "Eventos en vivo e integraciones tempranas con plataformas de e-commerce vía DMNS Pay",
              "Distribución del Airdrop",
            ],
          },
          {
            quarter: "Q3 (Julio – Septiembre)",
            holdersTarget: "60,000 HOLDERS",
            milestones: [
              "Lanzamiento de funcionalidades básicas del DEX",
              "Beta testing de la DAO",
              "Expansión de DMNS Academy con nuevos cursos y talleres",
            ],
          },
          {
            quarter: "Q4 (Octubre – Diciembre)",
            holdersTarget: "100,000 HOLDERS",
            milestones: [
              "Implementación completa de la DAO",
              "NFTs dedicados a la educación",
              "Nuevas alianzas estratégicas",
            ],
          },
        ],
      },
      purchase: {
        title: "Cómo Comprar DMNS",
        intro:
          "DMNS está actualmente disponible en Raydium (un AMM basado en Solana). Necesitarás una wallet compatible (como Phantom o Solflare).",
        list: ["Raydium (AMM de Solana)", "Próximamente en CEX Top 20"],
        instructions:
          "Conecta tu wallet a Raydium, selecciona DMNS ingresando el Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5 (si no aparece automáticamente), especifica la cantidad de SOL a intercambiar y confirma. Tus tokens DMNS aparecerán al instante en tu wallet.",
        note:
          "Cualquier futuro listado en CEX se anunciará a través de los canales oficiales.",
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Qué es Diamonds Army?",
            answer:
              "Diamonds Army es el núcleo de la comunidad. Poseer al menos 50 millones de DMNS otorga acceso a eventos exclusivos, iniciativas dedicadas y NFTs personalizados.",
          },
          {
            question: "¿Qué beneficios ofrece el token DMNS?",
            answer:
              "DMNS impulsa el ecosistema, garantizando transparencia, seguridad y utilidad práctica para transacciones rápidas e innovadoras en Solana.",
          },
          {
            question: "¿Cómo funciona la gobernanza a través de la DAO?",
            answer:
              "Los poseedores de DMNS pueden participar en la toma de decisiones mediante la presentación de propuestas y votando sobre iniciativas, asegurando una gobernanza compartida y transparente.",
          },
          {
            question: "¿Qué herramientas ofrece el ecosistema DMNS?",
            answer:
              "El ecosistema integra DMNS SOCIAL, COMMERCE, ACADEMY, PAY & WALLET, DEX y DAO, ofreciendo una suite completa de servicios Web3.",
          },
          {
            question: "¿Es DMNS una buena inversión?",
            answer:
              "Las criptomonedas son inversiones de alto riesgo. Realiza una investigación exhaustiva y evalúa tu tolerancia. DMNS ofrece herramientas prácticas y ventajas potenciales, pero no constituye un consejo financiero.",
          },
        ],
      },
      community: {
        title: "Únete a Diamonds Army",
        description:
          "Forma parte de nuestra comunidad exclusiva. Participa en eventos, iniciativas y accede a NFTs personalizados mientras contribuyes al crecimiento e innovación del ecosistema DMNS.",
        social: {
          x: "Síguenos en X",
          telegram: "Únete al Grupo de Telegram",
          whatsapp: "Únete al Grupo de WhatsApp",
        },
      },
      disclaimer: {
        title: "Descargo de responsabilidad",
        text:
          "La información proporcionada no constituye asesoramiento financiero ni legal. Las criptomonedas son inversiones de alto riesgo. Cada usuario debe evaluar su tolerancia y realizar una investigación exhaustiva (DYOR). Diamonds Group (DMNS) no se hace responsable de ninguna pérdida financiera.",
        channelsTitle: "Canales Oficiales",
        channels: [
          { name: "Sitio Oficial", url: "https://diamonds-group.com/" },
          { name: "Telegram", url: "https://t.me/dmnstoken" },
          { name: "Twitter (X)", url: "https://x.com/DmnsGroup" },
        ],
      },
      footer: {
        text: "© 2025 - 2026 Diamonds Group (DMNS). Todos los derechos reservados.",
        poweredBy: "",
      },
      airdrop: {
        title: "¡Participa en el Airdrop de DMNS!",
        description1:
          "Un airdrop es una iniciativa para distribuir tokens gratuitamente, fomentando el crecimiento de la comunidad.",
        description2:
          "En este evento exclusivo se distribuirán tokens DMNS entre los participantes. ¡Mantente atento para más detalles!",
        cta: "¡Participa ahora!",
      },
      techSpecs: {
        title: "Detalles Técnicos y Tokenomics",
        items: [
          "Nombre: Diamonds Group",
          "Ticker: DMNS",
          "Red: Solana (Token SPL)",
          "Mint Address: 3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5",
          "Decimales: 6",
          "Supply Total: 100,000,000,000 DMNS",
          "Distribución: Fair Launch 13.1%, Marketing 5%, Liquidity Pool 24.5%, Token Vesting 47.3%, Nuevo Liquidity Pool 10.1%",
          "Vesting: 8% disponible al completamento del Fair Launch (23 de enero de 2025), 2% después de 15 días, 2% cada 5 días posteriores",
        ],
      },
      purchaseDetailed: {
        introText: "Sigue estos pasos detallados para comprar DMNS:",
        steps: {
          step1: {
            title: "1. Compra SOLANA en un Exchange Centralizado (CEX)",
            list: [
              {
                label: "Paso 1",
                text: "Regístrate en un exchange confiable (p. ej., Binance, Coinbase, Kraken).",
              },
              {
                label: "Paso 2",
                text: "Completa el proceso de verificación (KYC) si es necesario.",
              },
              {
                label: "Paso 3",
                text: "Deposita moneda fiat o criptovalutas y compra SOLANA.",
              },
            ],
          },
          step2: {
            title: "2. Transfiere SOLANA a tu wallet Phantom",
            list: [
              {
                label: "Paso 1",
                text: "Abre tu wallet Phantom y copia tu dirección pública.",
              },
              {
                label: "Paso 2",
                text: "Accede a la sección de retiros del CEX y pega tu dirección Phantom.",
              },
              {
                label: "Paso 3",
                text: "Revisa las comisiones de retiro y confirma la transacción.",
              },
            ],
          },
          step3: {
            title: "3. Intercambia SOL por DMNS usando Phantom",
            list: [
              {
                label: "Paso 1",
                text: "Abre la aplicación Phantom y dirígete a la sección 'Swap'.",
              },
              {
                label: "Paso 2",
                text: "Selecciona SOL como moneda de origen y DMNS como moneda de destino.",
              },
              {
                label: "Paso 3",
                text: "Ingresa la cantidad a intercambiar, verifica el tipo di cambio y confirma lo scambio.",
              },
            ],
          },
          step4: {
            title: "4. ¡Bienvenido a Diamonds Army!",
            list: [
              {
                label: "Paso 1",
                text: "Visita nuestro sitio oficial y canales sociales para estar al día.",
              },
              {
                label: "Paso 2",
                text: "Únete al grupo de Telegram y síguenos en X para eventos y noticias.",
              },
              {
                label: "Paso 3",
                text: "Participa activamente en la comunidad para acceder a beneficios exclusivos.",
              },
            ],
          },
        },
        raydiumButton: "Compra DMNS en Raydium",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split('-')[0], // Rileva la lingua del browser
  fallbackLng: 'it',                    // Lingua di fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
