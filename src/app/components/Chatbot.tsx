import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect, memo, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const Chatbot = memo(function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const translations = {
    en: {
      header: 'Synapse AI Assistant',
      online: 'Online',
      placeholder: 'Type your message...',
      welcome: "Hi! I'm Synapse AI Assistant. How can I help you today? You can ask me about our services, pricing, process, or anything else about our digital agency!"
    },
    fr: {
      header: 'Assistant IA Synapse',
      online: 'En ligne',
      placeholder: 'Tapez votre message...',
      welcome: "Bonjour! Je suis l'assistant IA de Synapse. Comment puis-je vous aider aujourd'hui? Vous pouvez me poser des questions sur nos services, nos tarifs, notre processus ou tout autre aspect de notre agence numérique!"
    }
  };

  const t = translations[language];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      // Update welcome message when language changes or chatbot opens
      if (messages.length === 0) {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: t.welcome,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      } else {
        // Update the first message if it's from the bot (welcome message)
        setMessages(prevMessages => {
          if (prevMessages.length > 0 && prevMessages[0].sender === 'bot') {
            const updatedMessages = [...prevMessages];
            updatedMessages[0] = {
              ...updatedMessages[0],
              text: t.welcome,
            };
            return updatedMessages;
          }
          return prevMessages;
        });
      }
    }
  }, [isOpen, language, t.welcome]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Business Hours
    if (lowerMessage.match(/\b(business hours|hours of operation|hours open|opening hours|closing hours|hours closed|schedule|when are you open|heures d'ouverture|horaire|quand êtes-vous ouvert)\b/)) {
      return language === 'en'
        ? "Business Hours:\nMonday - Friday\n9:00 AM - 6:00 PM\nSaturday\n10:00 AM - 4:00 PM\nSunday\nClosed\n\nWe typically respond to emails within 24 hours during business days. For urgent inquiries, please contact us at contact@madebysynapse.com"
        : "Heures d'ouverture:\nLundi - Vendredi\n9h00 - 18h00\nSamedi\n10h00 - 16h00\nDimanche\nFermé\n\nNous répondons généralement aux courriels dans les 24 heures pendant les jours ouvrables. Pour les demandes urgentes, veuillez nous contacter à contact@madebysynapse.com";
    }

    // Company information - Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach') || 
        lowerMessage.includes('joindre') || lowerMessage.includes('courriel') || lowerMessage.includes('téléphone') || lowerMessage.includes('appeler')) {
      return language === 'en'
        ? "You can reach us at:\n\nEmail: contact@madebysynapse.com\nWebsite: madebysynapse.com\nLocation: Montréal, Québec\n\nBusiness Hours:\nMonday - Friday\n9:00 AM - 6:00 PM\nSaturday\n10:00 AM - 4:00 PM\nSunday\nClosed\n\nWe typically respond within 24 hours!"
        : "Vous pouvez nous joindre à:\n\nCourriel: contact@madebysynapse.com\nSite web: madebysynapse.com\nEmplacement: Montréal, Québec\n\nHeures d'ouverture:\nLundi - Vendredi\n9h00 - 18h00\nSamedi\n10h00 - 16h00\nDimanche\nFermé\n\nNous répondons généralement dans les 24 heures!";
    }

    // Booking/Consultation
    if (lowerMessage.match(/\b(book|booking|schedule|appointment|consultation|meeting|demo|call|réserver|rendez-vous|consultation|réunion|démo|appel)\b/)) {
      return language === 'en'
        ? "I'd be happy to help you schedule a consultation!\n\nTo book a meeting with our team:\n1. Visit our Contact page\n2. Fill out the consultation form\n3. Select your preferred date and time\n4. Our team will confirm within 24 hours\n\nOr email us directly at contact@madebysynapse.com with your availability. We offer:\n• Free 30-minute discovery calls\n• Project scope consultations\n• Technical architecture reviews\n• Strategy planning sessions\n\nWhat type of consultation would work best for you?"
        : "Je serais ravi de vous aider à planifier une consultation!\n\nPour réserver une réunion avec notre équipe:\n1. Visitez notre page Contact\n2. Remplissez le formulaire de consultation\n3. Sélectionnez votre date et heure préférées\n4. Notre équipe confirmera dans les 24 heures\n\nOu envoyez-nous un courriel directement à contact@madebysynapse.com avec vos disponibilités. Nous offrons:\n• Appels découverte gratuits de 30 minutes\n• Consultations sur la portée du projet\n• Revues d'architecture technique\n• Sessions de planification stratégique\n\nQuel type de consultation vous conviendrait le mieux?";
    }

    // Greetings
    if (lowerMessage.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening|salut|bonjour|bonsoir|allo)\b/)) {
      return language === 'en'
        ? "Hello! I'm here to help you with any questions about Synapse. What would you like to know?"
        : "Bonjour! Je suis là pour vous aider avec toutes vos questions sur Synapse. Que souhaitez-vous savoir?";
    }

    // Services
    if (lowerMessage.match(/\b(service|services|what do you do|what do you offer|offerings|offres|offrez)\b/)) {
      return language === 'en'
        ? "Synapse offers comprehensive digital solutions including:\n\n• Web Development - Custom websites and web applications\n• Mobile Applications - Native and cross-platform solutions for iOS and Android\n• Digital Branding & Strategy - Cohesive brand identity and design systems\n• E-commerce Solutions - Full-featured online stores\n• UI/UX Design - User-centered design that converts\n• Analytics & Insights - Data analysis for informed decisions\n• On-Site Photography - Professional photography for your brand\n• Security & Compliance - Protect your digital assets\n• Support & Maintenance - Ongoing care for your digital products\n• SEO & Digital Marketing - Improve visibility and organic traffic\n\nWhich service interests you most?"
        : "Synapse offre des solutions numériques complètes incluant:\n\n• Développement Web - Sites web et applications web personnalisés\n• Applications Mobiles - Solutions natives et multiplateformes pour iOS et Android\n• Branding & Stratégie Numérique - Identité de marque cohérente et systèmes de design\n• Solutions E-commerce - Boutiques en ligne complètes\n• Design UI/UX - Design centré sur l'utilisateur qui convertit\n• Analyse & Insights - Analyse de données pour des décisions éclairées\n• Photographie Sur Place - Photographie professionnelle pour votre marque\n• Sécurité & Conformité - Protégez vos actifs numériques\n• Support & Maintenance - Soins continus pour vos produits numériques\n• SEO & Marketing Numérique - Améliorer la visibilité et le trafic organique\n\nQuel service vous intéresse le plus?";
    }

    // UI/UX Design
    if (lowerMessage.match(/\b(ui|ux|design|interface|user experience|wireframe|prototype|figma|sketch|adobe xd|conception|expérience utilisateur)\b/)) {
      return language === 'en'
        ? "Our UI/UX design services create exceptional user experiences:\n\n• User research and personas\n• Information architecture\n• Wireframing and prototyping\n• Visual design and branding\n• Usability testing\n• Design systems and component libraries\n• Accessibility compliance (WCAG)\n\nWe use tools like Figma, Adobe XD, and Sketch to craft designs that are both beautiful and functional. Our design process is iterative and user-centered, ensuring your product delights users and drives conversions.\n\nDesign projects typically range from $1,500 to $12,000 depending on scope. Want to discuss your design needs?"
        : "Nos services de design UI/UX créent des expériences utilisateur exceptionnelles:\n\n• Recherche utilisateur et personas\n• Architecture de l'information\n• Wireframing et prototypage\n• Design visuel et branding\n• Tests d'utilisabilité\n• Systèmes de design et bibliothèques de composants\n• Conformité d'accessibilité (WCAG)\n\nNous utilisons des outils comme Figma, Adobe XD et Sketch pour créer des designs à la fois beaux et fonctionnels. Notre processus de design est itératif et centré sur l'utilisateur, garantissant que votre produit ravit les utilisateurs et génère des conversions.\n\nLes projets de design vont généralement de 1 500 $ à 12 000 $ selon la portée. Voulez-vous discuter de vos besoins en design?";
    }

    // Branding
    if (lowerMessage.match(/\b(brand|branding|logo|identity|visual identity|brand guide|marque|identité|identité visuelle)\b/)) {
      return language === 'en'
        ? "Our digital branding services build powerful brand identities:\n\n• Brand strategy and positioning\n• Logo design and visual identity\n• Color palette and typography\n• Brand guidelines and style guides\n• Marketing collateral design\n• Social media assets\n• Brand voice and messaging\n\nWe create cohesive brand experiences that resonate with your target audience and differentiate you from competitors. Our branding packages include comprehensive brand books with guidelines for consistent application across all touchpoints.\n\nBranding packages range from $1,500 to $7,500. Ready to build a memorable brand?"
        : "Nos services de branding numérique construisent des identités de marque puissantes:\n\n• Stratégie et positionnement de marque\n• Conception de logo et identité visuelle\n• Palette de couleurs et typographie\n• Directives de marque et guides de style\n• Conception de matériel marketing\n• Assets pour réseaux sociaux\n• Voix et message de marque\n\nNous créons des expériences de marque cohérentes qui résonnent avec votre public cible et vous différencient de vos concurrents. Nos forfaits de branding incluent des livres de marque complets avec des directives pour une application cohérente sur tous les points de contact.\n\nLes forfaits de branding vont de 1 500 $ à 7 500 $. Prêt à construire une marque mémorable?";
    }

    // E-commerce
    if (lowerMessage.match(/\b(ecommerce|e-commerce|shop|store|online store|shopify|woocommerce|magento|boutique|magasin)\b/)) {
      return language === 'en'
        ? "We build high-converting e-commerce solutions:\n\n• Custom online stores\n• Shopify, WooCommerce, and Magento development\n• Payment gateway integration (Stripe, PayPal, etc.)\n• Inventory management systems\n• Product catalog optimization\n• Shopping cart and checkout optimization\n• Multi-currency and multi-language support\n• Shipping and tax automation\n• Analytics and conversion tracking\n\nOur e-commerce solutions are designed to maximize sales and provide seamless shopping experiences. We've helped small businesses launch successful online stores and grow their revenue.\n\nE-commerce projects range from $3,500 to $20,000+. Want to start selling online?"
        : "Nous construisons des solutions e-commerce à haute conversion:\n\n• Boutiques en ligne personnalisées\n• Développement Shopify, WooCommerce et Magento\n• Intégration de passerelles de paiement (Stripe, PayPal, etc.)\n• Systèmes de gestion des stocks\n• Optimisation du catalogue de produits\n• Optimisation du panier et du paiement\n• Support multi-devises et multilingue\n• Automatisation de l'expédition et des taxes\n• Analytiques et suivi des conversions\n\nNos solutions e-commerce sont conçues pour maximiser les ventes et offrir des expériences d'achat fluides. Nous avons aidé des petites entreprises à lancer des boutiques en ligne réussies et à augmenter leurs revenus.\n\nLes projets e-commerce vont de 3 500 $ à 20 000 $+. Voulez-vous commencer à vendre en ligne?";
    }

    // SEO
    if (lowerMessage.match(/\b(seo|search engine|optimization|ranking|google|organic|traffic|référencement|classement|trafic organique)\b/)) {
      return language === 'en'
        ? "Our SEO services improve your online visibility:\n\n• Comprehensive SEO audits\n• Keyword research and strategy\n• On-page optimization (meta tags, headers, content)\n• Technical SEO (site speed, mobile-friendly, structured data)\n• Content strategy and creation\n• Link building and outreach\n• Local SEO optimization\n• Monthly reporting and analytics\n\nWe use white-hat SEO techniques to improve your search rankings and drive qualified organic traffic. Our affordable SEO services are perfect for small businesses looking to grow their online presence.\n\nSEO services start at $750/month with flexible 3-6 month commitments. Ready to rank higher?"
        : "Nos services SEO améliorent votre visibilité en ligne:\n\n• Audits SEO complets\n• Recherche de mots-clés et stratégie\n• Optimisation on-page (balises meta, en-têtes, contenu)\n• SEO technique (vitesse du site, mobile-friendly, données structurées)\n• Stratégie et création de contenu\n• Construction de liens et sensibilisation\n• Optimisation SEO locale\n• Rapports mensuels et analytiques\n\nNous utilisons des techniques SEO white-hat pour améliorer votre classement dans les recherches et générer du trafic organique qualifié. Nos services SEO abordables sont parfaits pour les petites entreprises cherchant à développer leur présence en ligne.\n\nLes services SEO commencent à 750 $/mois avec des engagements flexibles de 3 à 6 mois. Prêt à mieux vous classer?";
    }

    // Analytics
    if (lowerMessage.match(/\b(analytics|data|insights|metrics|tracking|reporting|google analytics|analytiques|données|métriques|suivi)\b/)) {
      return language === 'en'
        ? "Our analytics services turn data into actionable insights:\n\n• Google Analytics setup and configuration\n• Custom dashboard creation\n• Conversion tracking and funnel analysis\n• User behavior analysis\n• A/B testing and experimentation\n• Performance monitoring and reporting\n• Data visualization\n• ROI measurement\n\nWe help you understand your users, optimize performance, and make data-driven decisions. Our analytics implementations provide clear visibility into what's working and what needs improvement.\n\nAnalytics consulting starts at $1,200 for setup + $400-$1,000/month for ongoing analysis. Want to leverage your data?"
        : "Nos services d'analytiques transforment les données en insights actionnables:\n\n• Configuration de Google Analytics\n• Création de tableaux de bord personnalisés\n• Suivi des conversions et analyse d'entonnoir\n• Analyse du comportement des utilisateurs\n• Tests A/B et expérimentation\n• Surveillance des performances et rapports\n• Visualisation de données\n• Mesure du ROI\n\nNous vous aidons à comprendre vos utilisateurs, optimiser les performances et prendre des décisions basées sur les données. Nos implémentations d'analytiques offrent une visibilité claire sur ce qui fonctionne et ce qui nécessite des améliorations.\n\nLa consultation en analytiques commence à 1 200 $ pour la configuration + 400 $ à 1 000 $/mois pour l'analyse continue. Voulez-vous exploiter vos données?";
    }

    // On-Site Photography
    if (lowerMessage.match(/\b(photography|photo|photos|photographer|photoshoot|images|product photography|commercial photography|photographie|photographe|séance photo)\b/)) {
      return language === 'en'
        ? "Our on-site photography services capture your brand story:\n\n• Product photography and styling\n• Corporate headshots and team photos\n• Lifestyle and brand photography\n• Event coverage and documentation\n• Architectural and space photography\n• Professional editing and retouching\n• High-resolution digital files\n• Usage rights for marketing materials\n\nWe work with professional photographers to create compelling visual content that elevates your brand and connects with your audience. Perfect for e-commerce products, corporate branding, and marketing campaigns.\n\nPhotography packages start at $800 for half-day sessions. Ready to showcase your brand visually?"
        : "Nos services de photographie sur place capturent l'histoire de votre marque:\n\n• Photographie et stylisme de produits\n• Portraits corporatifs et photos d'équipe\n• Photographie lifestyle et de marque\n• Couverture et documentation d'événements\n• Photographie architecturale et d'espaces\n• Édition et retouche professionnelles\n• Fichiers numériques haute résolution\n• Droits d'utilisation pour matériaux marketing\n\nNous travaillons avec des photographes professionnels pour créer du contenu visuel convaincant qui élève votre marque et connecte avec votre audience. Parfait pour les produits e-commerce, le branding corporatif et les campagnes marketing.\n\nLes forfaits de photographie commencent à 800 $ pour des séances d'une demi-journée. Prêt à présenter votre marque visuellement?";
    }

    // Security & Compliance
    if (lowerMessage.match(/\b(security|compliance|gdpr|hipaa|secure|encryption|ssl|certificate|vulnerability|penetration test|audit|sécurité|conformité|certificat|vulnérabilité)\b/)) {
      return language === 'en'
        ? "Our security & compliance services protect your digital assets:\n\n• Security audits and vulnerability assessments\n• SSL/TLS certificate setup and management\n• Data encryption implementation\n• GDPR, HIPAA, and regulatory compliance\n• Penetration testing and security hardening\n• Regular security monitoring and updates\n• Secure authentication and authorization\n• Backup and disaster recovery planning\n• Security policy documentation\n\nWe take security seriously and ensure your applications meet industry standards and regulatory requirements. Our proactive approach protects your business and builds trust with your customers.\n\nSecurity audits start at $1,500, with ongoing monitoring packages from $400/month. Ready to secure your digital presence?"
        : "Nos services de sécurité et conformité protègent vos actifs numériques:\n\n• Audits de sécurité et évaluations de vulnérabilité\n• Configuration et gestion de certificats SSL/TLS\n• Implémentation du chiffrement des données\n• Conformité GDPR, HIPAA et réglementaire\n• Tests de pénétration et durcissement de sécurité\n• Surveillance et mises à jour de sécurité régulières\n• Authentification et autorisation sécurisées\n• Planification de sauvegarde et récupération en cas de sinistre\n• Documentation de politique de sécurité\n\nNous prenons la sécurité au sérieux et garantissons que vos applications respectent les normes de l'industrie et les exigences réglementaires. Notre approche proactive protège votre entreprise et établit la confiance avec vos clients.\n\nLes audits de sécurité commencent à 1 500 $, avec des forfaits de surveillance continue à partir de 400 $/mois. Prêt à sécuriser votre présence numérique?";
    }

    // Web Development
    if (lowerMessage.match(/\b(web|website|web development|web app|webapp|site|développement web)\b/)) {
      return language === 'en'
        ? "Our web development services include:\n\n• Custom website design and development\n• Progressive Web Applications (PWA)\n• E-commerce platforms\n• Content Management Systems (CMS)\n• Web portals and dashboards\n• API development and integration\n• Responsive and mobile-first design\n• Performance optimization\n\nWe use cutting-edge technologies like React, Next.js, Node.js, and more. Projects typically range from $2,500 to $15,000 depending on complexity. Would you like to discuss a specific project?"
        : "Nos services de développement web incluent:\n\n• Conception et développement de sites web personnalisés\n• Applications Web Progressives (PWA)\n• Plateformes e-commerce\n• Systèmes de gestion de contenu (CMS)\n• Portails web et tableaux de bord\n• Développement et intégration d'API\n• Design responsive et mobile-first\n• Optimisation des performances\n\nNous utilisons des technologies de pointe comme React, Next.js, Node.js, et plus encore. Les projets vont généralement de 2 500 $ à 15 000 $ selon la complexité. Souhaitez-vous discuter d'un projet spécifique?";
    }

    // Mobile Apps
    if (lowerMessage.match(/\b(mobile|app|apps|android|ios|mobile app|application mobile)\b/)) {
      return language === 'en'
        ? "We specialize in mobile app development:\n\n• Native iOS apps (Swift)\n• Native Android apps (Kotlin)\n• Cross-platform apps (React Native, Flutter)\n• Mobile UI/UX design\n• App store optimization\n• Push notifications and real-time features\n• Offline functionality\n• Ongoing maintenance and updates\n\nMobile app projects typically start at $8,000 and can go up to $40,000+ for complex applications. What type of app are you thinking about?"
        : "Nous sommes spécialisés dans le développement d'applications mobiles:\n\n• Applications iOS natives (Swift)\n• Applications Android natives (Kotlin)\n• Applications multiplateformes (React Native, Flutter)\n• Design UI/UX mobile\n• Optimisation pour les app stores\n• Notifications push et fonctionnalités en temps réel\n• Fonctionnalité hors ligne\n• Maintenance et mises à jour continues\n\nLes projets d'applications mobiles commencent généralement à 8 000 $ et peuvent aller jusqu'à 40 000 $+ pour des applications complexes. À quel type d'application pensez-vous?";
    }

    // Digital Strategy
    if (lowerMessage.match(/\b(strategy|digital strategy|transformation|roadmap|planning|consulting|stratégie|transformation|feuille de route|planification)\b/)) {
      return language === 'en'
        ? "Our digital strategy services guide your transformation:\n\n• Digital maturity assessment\n• Technology roadmap planning\n• Digital transformation strategy\n• Go-to-market strategy\n• Competitive analysis\n• User research and market validation\n• ROI forecasting and business case development\n• Change management planning\n\nWe help you navigate the digital landscape with data-driven strategies that align technology with your business goals. Our strategic consulting ensures you invest in the right solutions at the right time.\n\nStrategy engagements range from $2,000 to $10,000. Ready to plan your digital future?"
        : "Nos services de stratégie numérique guident votre transformation:\n\n• Évaluation de la maturité numérique\n• Planification de feuille de route technologique\n• Stratégie de transformation numérique\n• Stratégie de mise en marché\n• Analyse concurrentielle\n• Recherche utilisateur et validation de marché\n• Prévision du ROI et développement de business case\n• Planification de gestion du changement\n\nNous vous aidons à naviguer dans le paysage numérique avec des stratégies basées sur les données qui alignent la technologie avec vos objectifs commerciaux. Notre consultation stratégique garantit que vous investissez dans les bonnes solutions au bon moment.\n\nLes engagements stratégiques vont de 2 000 $ à 10 000 $. Prêt à planifier votre avenir numérique?";
    }

    // Pricing/Cost
    if (lowerMessage.match(/\b(price|pricing|cost|costs|how much|budget|expensive|cheap|rate|rates|fee|fees|prix|coût|tarif|combien)\b/)) {
      return language === 'en'
        ? "Our pricing is tailored to each project, but here are typical ranges:\n\n• Website Design: $2,500 - $10,000\n• Web Applications: $5,000 - $30,000+\n• Mobile Apps: $8,000 - $40,000+\n• Branding Package: $1,500 - $7,500\n• Digital Strategy: $2,000 - $10,000\n• E-commerce: $3,500 - $20,000+\n• SEO Services: $750+/month\n• Hourly Rate: $75 - $150/hour\n\nWe're a small business ourselves, so we understand the importance of fair pricing. We offer flexible payment plans and can work within your budget. Each project includes consultation, design, development, testing, and launch support. Want a custom quote?"
        : "Nos tarifs sont adaptés à chaque projet, mais voici les fourchettes typiques:\n\n• Conception de site web: 2 500 $ - 10 000 $\n• Applications web: 5 000 $ - 30 000 $+\n• Applications mobiles: 8 000 $ - 40 000 $+\n• Package de branding: 1 500 $ - 7 500 $\n• Stratégie numérique: 2 000 $ - 10 000 $\n• E-commerce: 3 500 $ - 20 000 $+\n• Services SEO: 750 $+/mois\n• Taux horaire: 75 $ - 150 $/heure\n\nNous sommes nous-mêmes une petite entreprise, nous comprenons donc l'importance de tarifs équitables. Nous offrons des plans de paiement flexibles et pouvons travailler selon votre budget. Chaque projet inclut consultation, design, développement, tests et support au lancement. Voulez-vous un devis personnalisé?";
    }

    // Payment methods
    if (lowerMessage.match(/\b(payment|pay|invoice|billing|deposit|installment|paiement|facture|acompte|versement)\b/)) {
      return language === 'en'
        ? "We offer flexible payment options:\n\n• Payment Plans: Split into milestones (typically 50% upfront, 50% on completion)\n• Monthly Retainers: For ongoing services\n• Installment Plans: Spread payments over project duration\n• Accepted Methods: Bank transfer, credit card, PayPal\n\nTypical payment structure:\n• 50% deposit to begin work\n• 25% at mid-project milestone\n• 25% upon completion and launch\n\nWe provide detailed invoices and can accommodate net-30 terms for established clients. Have specific payment questions?"
        : "Nous offrons des options de paiement flexibles:\n\n• Plans de paiement: Divisé en étapes (typiquement 50% d'avance, 50% à la complétion)\n• Forfaits mensuels: Pour les services continus\n• Plans d'acomptes: Étaler les paiements sur la durée du projet\n• Méthodes acceptées: Virement bancaire, carte de crédit, PayPal\n\nStructure de paiement typique:\n• 50% d'acompte pour commencer le travail\n• 25% à l'étape intermédiaire du projet\n• 25% à la complétion et au lancement\n\nNous fournissons des factures détaillées et pouvons accommoder des termes net-30 pour les clients établis. Avez-vous des questions spécifiques sur le paiement?";
    }

    // Timeline/Duration
    if (lowerMessage.match(/\b(timeline|time|duration|how long|when|deadline|delivery|délai|durée|combien de temps|quand)\b/)) {
      return language === 'en'
        ? "Project timelines vary based on scope:\n\n• Simple Website: 4-6 weeks\n• Complex Website: 8-12 weeks\n• Web Application: 12-20 weeks\n• Mobile App: 16-24 weeks\n• Branding Project: 6-8 weeks\n• E-commerce Store: 8-16 weeks\n\nWe use agile methodology for faster delivery and flexibility. We can discuss expedited timelines for urgent projects. What's your ideal timeframe?"
        : "Les délais de projet varient selon la portée:\n\n• Site web simple: 4-6 semaines\n• Site web complexe: 8-12 semaines\n• Application web: 12-20 semaines\n• Application mobile: 16-24 semaines\n• Projet de branding: 6-8 semaines\n• Boutique e-commerce: 8-16 semaines\n\nNous utilisons la méthodologie agile pour une livraison plus rapide et flexible. Nous pouvons discuter de délais accélérés pour les projets urgents. Quel est votre délai idéal?";
    }

    // Process/How it works
    if (lowerMessage.match(/\b(process|how it works|workflow|methodology|approach|steps|processus|méthodologie|comment|étapes)\b/)) {
      return language === 'en'
        ? "Our proven process ensures success:\n\n1️⃣ Discovery - We understand your goals and requirements\n2️⃣ Strategy - We create a roadmap and project plan\n3️⃣ Design - We craft beautiful, user-centered designs\n4️⃣ Development - We build with cutting-edge technology\n5️⃣ Testing - We ensure quality and performance\n6️⃣ Launch - We deploy and support your project\n7️⃣ Support - Ongoing maintenance and updates\n\nWe maintain transparent communication throughout with regular updates, demos, and feedback sessions. Ready to start?"
        : "Notre processus éprouvé garantit le succès:\n\n1️⃣ Découverte - Nous comprenons vos objectifs et exigences\n2️⃣ Stratégie - Nous créons une feuille de route et un plan de projet\n3️⃣ Design - Nous créons de beaux designs centrés sur l'utilisateur\n4️⃣ Développement - Nous construisons avec des technologies de pointe\n5️⃣ Tests - Nous assurons la qualité et la performance\n6️⃣ Lancement - Nous déployons et supportons votre projet\n7️⃣ Support - Maintenance et mises à jour continues\n\nNous maintenons une communication transparente tout au long avec des mises à jour régulières, des démos et des sessions de feedback. Prêt à commencer?";
    }

    // Technologies
    if (lowerMessage.match(/\b(technology|technologies|tech stack|tools|framework|frameworks|technologie|outils)\b/)) {
      return language === 'en'
        ? "We work with modern, proven technologies:\n\n• Frontend: React, Next.js, Vue.js, Tailwind CSS\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter, Swift, Kotlin\n• Database: PostgreSQL, MongoDB, MySQL, Firebase\n• Cloud: AWS, Google Cloud, Azure, Vercel\n• Design: Figma, Adobe XD, Sketch\n• E-commerce: Shopify, WooCommerce, Magento\n• CMS: WordPress, Contentful, Strapi\n\nWe choose the best tech stack for each project's specific needs. What technology are you interested in?"
        : "Nous travaillons avec des technologies modernes et éprouvées:\n\n• Frontend: React, Next.js, Vue.js, Tailwind CSS\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter, Swift, Kotlin\n• Base de données: PostgreSQL, MongoDB, MySQL, Firebase\n• Cloud: AWS, Google Cloud, Azure, Vercel\n• Design: Figma, Adobe XD, Sketch\n• E-commerce: Shopify, WooCommerce, Magento\n• CMS: WordPress, Contentful, Strapi\n\nNous choisissons la meilleure pile technologique pour les besoins spécifiques de chaque projet. Quelle technologie vous intéresse?";
    }

    // Team/About
    if (lowerMessage.match(/\b(team|who are you|about|company|experience|expertise|équipe|qui êtes|à propos|expérience)\b/)) {
      return language === 'en'
        ? "Synapse is a premium digital agency with:\n\n• 10+ years of industry experience\n• 40+ expert team members\n• 150+ successful projects delivered\n• 98% client satisfaction rate\n• Serving clients in 15+ countries\n• 4.9 average rating\n\nOur team includes designers, developers, strategists, and project managers dedicated to your success. We're passionate about transforming businesses through innovative digital solutions!"
        : "Synapse est une agence numérique premium avec:\n\n• Plus de 10 ans d'expérience dans l'industrie\n• Plus de 40 membres d'équipe experts\n• Plus de 150 projets réussis livrés\n• Taux de satisfaction client de 98%\n• Service de clients dans plus de 15 pays\n• Note moyenne de 4,9\n\nNotre équipe comprend des designers, développeurs, stratèges et chefs de projet dédiés à votre succès. Nous sommes passionnés par la transformation des entreprises grâce à des solutions numériques innovantes!";
    }

    // Portfolio/Projects/Examples
    if (lowerMessage.match(/\b(portfolio|project|projects|examples|work|previous|past work|case study|projets|exemples|travail|réalisations)\b/)) {
      return language === 'en'
        ? "We've delivered 150+ successful projects across various industries:\n\n• E-commerce platforms with $1M+ revenue\n• SaaS applications serving 100K+ users\n• Mobile apps with 4.5+ star ratings\n• Brand redesigns that increased conversions by 200%+\n• Enterprise web portals processing millions of transactions\n\nOur portfolio includes work in fintech, healthcare, education, retail, real estate, and more. Visit our Projects page to see detailed case studies. Which industry interests you?"
        : "Nous avons livré plus de 150 projets réussis dans diverses industries:\n\n• Plateformes e-commerce avec plus de 1M$ de revenus\n• Applications SaaS servant plus de 100K utilisateurs\n• Applications mobiles avec notes de 4,5+ étoiles\n• Redesigns de marque ayant augmenté les conversions de plus de 200%\n• Portails web d'entreprise traitant des millions de transactions\n\nNotre portfolio inclut du travail en fintech, santé, éducation, commerce de détail, immobilier, et plus encore. Visitez notre page Projets pour voir des études de cas détaillées. Quelle industrie vous intéresse?";
    }

    // Support/Maintenance
    if (lowerMessage.match(/\b(support|maintenance|update|updates|help|assistance|fix|aide|mise à jour|réparation)\b/)) {
      return language === 'en'
        ? "We provide comprehensive post-launch support:\n\n• 24/7 technical support\n• Regular updates and maintenance\n• Security patches and monitoring\n• Performance optimization\n• Content updates\n• Feature enhancements\n• Bug fixes and troubleshooting\n• Hosting and infrastructure management\n\nWe offer monthly retainer packages starting at $500/month or pay-as-you-go support. Your success is our priority!"
        : "Nous fournissons un support complet après le lancement:\n\n• Support technique 24/7\n• Mises à jour et maintenance régulières\n• Correctifs de sécurité et surveillance\n• Optimisation des performances\n• Mises à jour de contenu\n• Améliorations de fonctionnalités\n• Corrections de bugs et dépannage\n• Gestion de l'hébergement et de l'infrastructure\n\nNous offrons des forfaits mensuels à partir de 500 $/mois ou un support à la demande. Votre succès est notre priorité!";
    }

    // Location
    if (lowerMessage.match(/\b(location|where|based|office|address|emplacement|où|bureau|adresse)\b/)) {
      return language === 'en'
        ? "Synapse is based in Montréal, Québec and operates globally with a remote-first approach:\n\n• Headquarters: Montréal, Québec\n• Serving clients in 15+ countries\n• Remote collaboration using modern tools\n• Flexible meeting times across time zones\n• On-site consultations available for major projects\n\nWe believe great work knows no boundaries. Where are you located?"
        : "Synapse est basé à Montréal, Québec et opère mondialement avec une approche télétravail d'abord:\n\n• Siège social: Montréal, Québec\n• Service de clients dans plus de 15 pays\n• Collaboration à distance utilisant des outils modernes\n• Heures de réunion flexibles à travers les fuseaux horaires\n• Consultations sur site disponibles pour les grands projets\n\nNous croyons que le grand travail ne connaît pas de frontières. Où êtes-vous situé?";
    }

    // Industries
    if (lowerMessage.match(/\b(industry|industries|sector|vertical|specialization|industrie|secteur|spécialisation)\b/)) {
      return language === 'en'
        ? "We have expertise across multiple industries:\n\n• Fintech & Banking\n• Healthcare & Medical\n• E-commerce & Retail\n• Education & E-learning\n• Real Estate & Property\n• Technology & SaaS\n• Entertainment & Media\n• Manufacturing & Logistics\n\nOur diverse experience allows us to bring best practices from different sectors to your project. What's your industry?"
        : "Nous avons de l'expertise dans plusieurs industries:\n\n• Fintech et Banque\n• Santé et Médical\n• E-commerce et Commerce de détail\n• Éducation et E-learning\n• Immobilier et Propriété\n• Technologie et SaaS\n• Divertissement et Médias\n• Fabrication et Logistique\n\nNotre expérience diversifiée nous permet d'apporter les meilleures pratiques de différents secteurs à votre projet. Quelle est votre industrie?";
    }

    // Thank you
    if (lowerMessage.match(/\b(thank|thanks|appreciate|helpful|great|awesome|excellent|merci|génial|super|excellent)\b/)) {
      return language === 'en'
        ? "You're very welcome! I'm glad I could help. Feel free to ask anything else about Synapse, or visit our Contact page to speak with our team directly. Have a great day! 😊"
        : "De rien! Je suis content d'avoir pu vous aider. N'hésitez pas à poser d'autres questions sur Synapse, ou visitez notre page Contact pour parler directement avec notre équipe. Passez une excellente journée! 😊";
    }

    // Goodbye
    if (lowerMessage.match(/\b(bye|goodbye|see you|later|end chat|au revoir|salut|à plus|à bientôt)\b/)) {
      return language === 'en'
        ? "Thank you for chatting with me! If you have more questions later, I'm always here. Don't hesitate to reach out to our team at contact@madebysynapse.com. Take care! 👋"
        : "Merci d'avoir discuté avec moi! Si vous avez d'autres questions plus tard, je suis toujours là. N'hésitez pas à contacter notre équipe à contact@madebysynapse.com. Prenez soin de vous! 👋";
    }

    // Default response
    return language === 'en'
      ? "That's a great question! While I try to help with common inquiries, I'd recommend:\n\n• Exploring our Services page for detailed information\n• Checking our Projects page for case studies\n• Visiting our Contact page to speak with our expert team\n• Emailing us at contact@madebysynapse.com\n• Booking a free consultation to discuss your specific needs\n\nOur team can provide personalized answers tailored to your situation. What else can I help you with?"
      : "C'est une excellente question! Bien que j'essaie d'aider avec les questions courantes, je vous recommande:\n\n• Explorer notre page Services pour des informations détaillées\n• Consulter notre page Projets pour des études de cas\n• Visiter notre page Contact pour parler avec notre équipe d'experts\n• Nous envoyer un courriel à contact@madebysynapse.com\n• Réserver une consultation gratuite pour discuter de vos besoins spécifiques\n\nNotre équipe peut fournir des réponses personnalisées adaptées à votre situation. Que puis-je d'autre faire pour vous aider?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200); // Random delay between 800-2000ms for realism
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] shadow-lg shadow-[#36BFE3]/50 flex items-center justify-center cursor-pointer group"
            whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(54, 191, 227, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            aria-label={language === 'en' ? 'Open chat assistant' : 'Ouvrir l\'assistant de chat'}
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-0 right-0 left-0 md:bottom-6 md:right-6 md:left-auto z-50 w-full md:w-[400px] h-[100dvh] md:h-[600px] md:rounded-2xl bg-[#27292E] shadow-2xl border-t md:border border-[#36BFE3]/20 flex flex-col overflow-hidden"
            role="dialog"
            aria-label={t.header}
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                  <Bot className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-white font-bold">{t.header}</h2>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
                    <span className="text-white/80 text-xs">
                      {t.online}
                    </span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={language === 'en' ? 'Close chat' : 'Fermer le chat'}
              >
                <X className="w-5 h-5 text-white" aria-hidden="true" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" role="log" aria-live="polite" aria-relevant="additions">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Bot className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white rounded-br-sm'
                        : 'bg-[#2a2d33] text-white/90 rounded-bl-sm'
                    }`}
                    role={message.sender === 'bot' ? 'status' : undefined}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-[#7BC3D1] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <User className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-end"
                  role="status"
                  aria-label={language === 'en' ? 'AI is typing' : 'L\'IA écrit'}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] flex items-center justify-center" aria-hidden="true">
                    <Bot className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="bg-[#2a2d33] p-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1" aria-hidden="true">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#36BFE3]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#36BFE3]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#36BFE3]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#36BFE3]/20 bg-[#2a2d33]">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <label htmlFor="chat-input" className="sr-only">{t.placeholder}</label>
                <input
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.placeholder}
                  className="flex-1 bg-[#27292E] text-white px-4 py-3 rounded-full border border-[#36BFE3]/20 focus:border-[#36BFE3]/50 focus:outline-none placeholder-white/40"
                  aria-label={t.placeholder}
                />
                <motion.button
                  type="submit"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] flex items-center justify-center ${
                    !input.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={input.trim() ? { scale: 1.05 } : {}}
                  whileTap={input.trim() ? { scale: 0.95 } : {}}
                  aria-label={language === 'en' ? 'Send message' : 'Envoyer le message'}
                >
                  <Send className="w-5 h-5 text-white" aria-hidden="true" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});