import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        quote: "Get a Quote"
      },
      hero: {
        subtitle: "Premier IT Services in Cotonou",
        title: "Reliable IT Solutions for Your Business",
        desc: "From computer installations and CCTV security to network cabling and IT consulting. HBM Informatique delivers top-tier technology services to keep your operations running smoothly.",
        whatsapp: "Contact via WhatsApp",
        explore: "Explore Our Services",
        trusted: "Trusted",
        trustedDesc: "Secure & Reliable",
        fast: "Fast",
        fastDesc: "Quick Response",
        expert: "Expert",
        expertDesc: "Professional Team"
      },
      servicesGrid: {
        title1: "Computer Installation",
        desc1: "Professional setup of desktops, laptops, and workstations for your office or home.",
        title2: "Printer Maintenance",
        desc2: "Expert repair and routine maintenance for all types of printers and copiers.",
        title3: "CCTV Installation",
        desc3: "Secure your premises with high-quality surveillance camera systems and monitoring.",
        title4: "Network Cabling",
        desc4: "Structured cabling solutions for reliable and fast internet connectivity.",
        title5: "Mobile Phone Services",
        desc5: "Repairs, unlocking, and software troubleshooting for all smartphone brands.",
        title6: "IT Equipment Supply",
        desc6: "Sourcing and selling high-quality computers, parts, and accessories.",
        title7: "IT Consulting",
        desc7: "Strategic advice to optimize your technology infrastructure and business processes.",
        title8: "Transport & Logistics",
        desc8: "Safe and efficient transportation of delicate IT equipment and goods.",
        title9: "Loading Services",
        desc9: "Professional handling and loading of equipment for secure transit.",
        title10: "Card Sales",
        desc10: "Retail of SIM cards and mobile recharge cards for all major networks.",
        title11: "Printing & Scanning",
        desc11: "High-quality document printing, scanning, and photocopying services.",
        catMain: "Main Services",
        catSupply: "IT Supply",
        catAdd: "Additional Services"
      },
      about: {
        title: "About HBM Informatique",
        subtitle: "\"Entrepreneur à succès et exemple de réussite\"",
        storyTitle: "Our Story",
        story1: "Founded in Cotonou, Benin, HBM Informatique has grown to become a trusted name in the local IT sector. Under the visionary leadership of our CEO, M. Marius Kounma, we have consistently delivered excellence in technology solutions.",
        story2: "We believe that robust IT infrastructure is the backbone of any successful modern enterprise. Our goal is to empower local businesses by providing reliable, scalable, and secure technological foundations.",
        ceoTitle: "Message from the CEO",
        ceoQuote: "\"Our commitment is to excellence. We don't just fix computers; we build lasting partnerships with our clients to ensure their technological success.\"",
        ceoName: "— M. Marius Kounma",
        exp: "10+ Years Experience",
        missionTitle: "Our Mission",
        missionDesc: "To provide accessible, high-quality IT services and equipment that drive efficiency and growth for businesses in Benin.",
        teamTitle: "Our Team",
        teamDesc: "A dedicated group of certified technicians and IT consultants passionate about solving complex technological challenges.",
        valuesTitle: "Our Values",
        valuesDesc: "Integrity, speed, reliability, and a relentless focus on customer satisfaction in every project we undertake.",
        trustTitle: "Why Choose Us",
        trustReliability: "Reliability",
        trustReliabilityDesc: "Consistent and dependable IT support you can count on.",
        trustSpeed: "Speed",
        trustSpeedDesc: "Swift response times to minimize your business downtime.",
        trustAffordability: "Affordability",
        trustAffordabilityDesc: "Premium technology solutions that fit your budget."
      },
      home: {
        coreServices: "Our Core Services",
        coreDesc: "Comprehensive technology solutions designed to keep your business connected, secure, and efficient.",
        viewAll: "View All Services",
        supportTitle: "Need Immediate IT Support?",
        supportDesc: "Our team of experts is ready to assist you with any technical issues or new installations.",
        call: "Call",
        whatsappUs: "WhatsApp Us"
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive IT solutions tailored to meet the demands of modern businesses and individuals in Benin.",
        customTitle: "Need a Custom Solution?",
        customDesc: "Don't see exactly what you're looking for? Contact us to discuss your specific IT requirements. We offer tailored solutions to meet your unique business challenges.",
        contactUs: "Contact Us Today"
      },
      pricing: {
        title: "Transparent Pricing",
        subtitle: "We offer competitive rates for top-quality IT services. Contact us for a detailed quote tailored to your specific needs.",
        plan1Name: "Basic Diagnosis",
        plan1Price: "Starting at 5,000 CFA",
        plan1Desc: "Perfect for initial troubleshooting and minor software issues.",
        plan1Feat1: "System health check",
        plan1Feat2: "Virus & malware scanning",
        plan1Feat3: "Software updates",
        plan1Feat4: "Basic optimization",
        plan1Feat5: "Cost estimate for repairs",
        plan2Name: "Network Setup",
        plan2Price: "Custom Quote",
        plan2Desc: "Comprehensive networking solutions for offices and businesses.",
        plan2Feat1: "Site survey & planning",
        plan2Feat2: "Structured cabling",
        plan2Feat3: "Router & switch configuration",
        plan2Feat4: "Wi-Fi optimization",
        plan2Feat5: "Security setup",
        plan3Name: "CCTV Package",
        plan3Price: "Custom Quote",
        plan3Desc: "Complete security camera installation for your premises.",
        plan3Feat1: "High-definition cameras",
        plan3Feat2: "DVR/NVR setup",
        plan3Feat3: "Mobile viewing configuration",
        plan3Feat4: "Cabling & installation",
        plan3Feat5: "1-month free support",
        mostRequested: "Most Requested",
        requestQuote: "Request Quote"
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our IT services.",
        q1: 'Where are you located?',
        a1: 'We are based in Cotonou, Benin. We provide services throughout the city and surrounding areas.',
        q2: 'Do you offer on-site repairs?',
        a2: 'Yes, for most networking, CCTV, and computer installation tasks, we come directly to your office or home. For complex hardware repairs, we may need to take the device to our workshop.',
        q3: 'How quickly can you respond to an IT emergency?',
        a3: 'We prioritize urgent requests and typically respond within a few hours during business days. Please call us directly for immediate assistance.',
        q4: 'Do you sell IT equipment or just repair it?',
        a4: 'Both! We source and sell high-quality IT equipment, computers, and accessories, in addition to providing maintenance and repair services.',
        q5: 'Can I get a consultation before committing to a service?',
        a5: 'Absolutely. We offer general IT consulting to help you understand your needs and provide a tailored solution and quote before any work begins.'
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Don't just take our word for it. Here's what businesses and individuals in Benin have to say about our services.",
        role1: 'Business Owner',
        content1: 'HBM Informatique completely overhauled our office network. Their cabling work was neat, and the speed improvement is incredible. Highly recommended in Cotonou!',
        role2: 'Retail Manager',
        content2: 'We hired them for CCTV installation at our store. M. Marius and his team were professional, fast, and explained how to use the system perfectly.',
        role3: 'Freelancer',
        content3: 'My laptop crashed right before a major deadline. They diagnosed the issue quickly, recovered my data, and had it running like new the next day.'
      },
      errors: {
        required: "This field is required",
        phone: "Invalid phone number format"
      },
      callback: {
        title: "Request a Callback",
        desc: "Leave your details and we will call you back shortly.",
        submit: "Request Callback"
      },
      contact: {
        title: "Contact Us",
        subtitle: "We're here to help with all your IT needs. Reach out to us today.",
        getInTouch: "Get in Touch",
        phone: "Phone Numbers",
        email: "Email Address",
        location: "Location",
        hours: "Business Hours",
        hoursDesc: "Monday - Saturday: 8:00 AM - 6:00 PM",
        sunday: "Sunday: Closed",
        sendMessage: "Send us a Message",
        formName: "Full Name",
        formPhone: "Phone Number",
        formMessage: "How can we help you?",
        formPlaceholder: "Describe your IT needs...",
        formSubmit: "Send via WhatsApp"
      },
      footer: {
        desc: "Your trusted partner for comprehensive IT solutions, networking, and technical support in Cotonou, Benin.",
        quickLinks: "Quick Links",
        services: "Services",
        contactUs: "Contact Us",
        rights: "All rights reserved. CEO: M. Marius Kounma."
      },
      floating: {
        chat: "Chat with us!"
      },
      gallery: {
        title: "Our Work in Action",
        subtitle: "Take a look at our recent projects, IT setups, and behind-the-scenes moments."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À propos",
        contact: "Contact",
        quote: "Obtenir un devis"
      },
      hero: {
        subtitle: "Premiers services informatiques à Cotonou",
        title: "Des solutions informatiques fiables pour votre entreprise",
        desc: "De l'installation d'ordinateurs et la sécurité CCTV au câblage réseau et conseil informatique. HBM Informatique fournit des services technologiques de premier plan pour assurer le bon fonctionnement de vos opérations.",
        whatsapp: "Contactez via WhatsApp",
        explore: "Découvrez nos services",
        trusted: "De confiance",
        trustedDesc: "Sécurisé et fiable",
        fast: "Rapide",
        fastDesc: "Réponse rapide",
        expert: "Expert",
        expertDesc: "Équipe professionnelle"
      },
      servicesGrid: {
        title1: "Installation d'ordinateurs",
        desc1: "Installation professionnelle d'ordinateurs de bureau, portables et stations de travail.",
        title2: "Maintenance d'imprimantes",
        desc2: "Réparation experte et maintenance de routine pour tous types d'imprimantes.",
        title3: "Installation de vidéosurveillance",
        desc3: "Sécurisez vos locaux avec des systèmes de caméras de surveillance de haute qualité.",
        title4: "Câblage réseau",
        desc4: "Solutions de câblage structuré pour une connectivité internet fiable et rapide.",
        title5: "Services de téléphonie mobile",
        desc5: "Réparations, déblocage et dépannage logiciel pour toutes les marques de smartphones.",
        title6: "Fourniture de matériel informatique",
        desc6: "Recherche et vente d'ordinateurs, de pièces et d'accessoires de haute qualité.",
        title7: "Conseil en informatique",
        desc7: "Conseils stratégiques pour optimiser votre infrastructure technologique.",
        title8: "Transport et logistique",
        desc8: "Transport sûr et efficace de matériel informatique et de marchandises délicates.",
        title9: "Services de chargement",
        desc9: "Manutention et chargement professionnels d'équipements pour un transit sécurisé.",
        title10: "Vente de cartes",
        desc10: "Vente au détail de cartes SIM et de cartes de recharge mobile pour tous les réseaux.",
        title11: "Impression et numérisation",
        desc11: "Services d'impression, de numérisation et de photocopie de documents de haute qualité.",
        catMain: "Services principaux",
        catSupply: "Fourniture informatique",
        catAdd: "Services supplémentaires"
      },
      about: {
        title: "À propos de HBM Informatique",
        subtitle: "\"Entrepreneur à succès et exemple de réussite\"",
        storyTitle: "Notre Histoire",
        story1: "Fondée à Cotonou, au Bénin, HBM Informatique a grandi pour devenir un nom de confiance dans le secteur informatique local. Sous la direction visionnaire de notre PDG, M. Marius Kounma, nous avons constamment fourni l'excellence dans les solutions technologiques.",
        story2: "Nous pensons qu'une infrastructure informatique robuste est l'épine dorsale de toute entreprise moderne prospère. Notre objectif est de donner aux entreprises locales les moyens d'agir en fournissant des bases technologiques fiables, évolutives et sécurisées.",
        ceoTitle: "Message du PDG",
        ceoQuote: "\"Notre engagement est l'excellence. Nous ne nous contentons pas de réparer des ordinateurs ; nous construisons des partenariats durables avec nos clients pour assurer leur succès technologique.\"",
        ceoName: "— M. Marius Kounma",
        exp: "10+ Années d'expérience",
        missionTitle: "Notre Mission",
        missionDesc: "Fournir des services et équipements informatiques accessibles et de haute qualité qui stimulent l'efficacité et la croissance des entreprises au Bénin.",
        teamTitle: "Notre Équipe",
        teamDesc: "Un groupe dévoué de techniciens certifiés et de consultants informatiques passionnés par la résolution de défis technologiques complexes.",
        valuesTitle: "Nos Valeurs",
        valuesDesc: "Intégrité, rapidité, fiabilité et une concentration constante sur la satisfaction du client dans chaque projet que nous entreprenons.",
        trustTitle: "Pourquoi nous choisir",
        trustReliability: "Fiabilité",
        trustReliabilityDesc: "Un support informatique constant et fiable sur lequel vous pouvez compter.",
        trustSpeed: "Rapidité",
        trustSpeedDesc: "Des temps de réponse rapides pour minimiser les temps d'arrêt de votre entreprise.",
        trustAffordability: "Abordabilité",
        trustAffordabilityDesc: "Des solutions technologiques haut de gamme adaptées à votre budget."
      },
      home: {
        coreServices: "Nos services principaux",
        coreDesc: "Des solutions technologiques complètes conçues pour garder votre entreprise connectée, sécurisée et efficace.",
        viewAll: "Voir tous les services",
        supportTitle: "Besoin d'une assistance informatique immédiate ?",
        supportDesc: "Notre équipe d'experts est prête à vous aider pour tout problème technique ou nouvelle installation.",
        call: "Appeler",
        whatsappUs: "Contactez-nous sur WhatsApp"
      },
      services: {
        title: "Nos Services",
        subtitle: "Des solutions informatiques complètes adaptées pour répondre aux exigences des entreprises modernes et des particuliers au Bénin.",
        customTitle: "Besoin d'une solution personnalisée ?",
        customDesc: "Vous ne trouvez pas exactement ce que vous cherchez ? Contactez-nous pour discuter de vos besoins informatiques spécifiques. Nous offrons des solutions sur mesure pour répondre à vos défis commerciaux uniques.",
        contactUs: "Contactez-nous aujourd'hui"
      },
      pricing: {
        title: "Tarification transparente",
        subtitle: "Nous offrons des tarifs compétitifs pour des services informatiques de haute qualité. Contactez-nous pour un devis détaillé adapté à vos besoins spécifiques.",
        plan1Name: "Diagnostic de base",
        plan1Price: "À partir de 5 000 CFA",
        plan1Desc: "Parfait pour le dépannage initial et les problèmes logiciels mineurs.",
        plan1Feat1: "Bilan de santé du système",
        plan1Feat2: "Analyse des virus et logiciels malveillants",
        plan1Feat3: "Mises à jour logicielles",
        plan1Feat4: "Optimisation de base",
        plan1Feat5: "Estimation du coût des réparations",
        plan2Name: "Configuration réseau",
        plan2Price: "Devis personnalisé",
        plan2Desc: "Solutions de mise en réseau complètes pour les bureaux et les entreprises.",
        plan2Feat1: "Étude de site et planification",
        plan2Feat2: "Câblage structuré",
        plan2Feat3: "Configuration des routeurs et commutateurs",
        plan2Feat4: "Optimisation Wi-Fi",
        plan2Feat5: "Configuration de la sécurité",
        plan3Name: "Forfait vidéosurveillance",
        plan3Price: "Devis personnalisé",
        plan3Desc: "Installation complète de caméras de sécurité pour vos locaux.",
        plan3Feat1: "Caméras haute définition",
        plan3Feat2: "Configuration DVR/NVR",
        plan3Feat3: "Configuration de la visualisation mobile",
        plan3Feat4: "Câblage et installation",
        plan3Feat5: "1 mois d'assistance gratuite",
        mostRequested: "Le plus demandé",
        requestQuote: "Demander un devis"
      },
      faq: {
        title: "Foire aux questions",
        subtitle: "Trouvez des réponses aux questions courantes sur nos services informatiques.",
        q1: 'Où êtes-vous situé ?',
        a1: 'Nous sommes basés à Cotonou, au Bénin. Nous fournissons des services dans toute la ville et les environs.',
        q2: 'Proposez-vous des réparations sur site ?',
        a2: 'Oui, pour la plupart des tâches de mise en réseau, de vidéosurveillance et d\'installation d\'ordinateurs, nous nous déplaçons directement à votre bureau ou à votre domicile. Pour les réparations matérielles complexes, nous devrons peut-être emmener l\'appareil dans notre atelier.',
        q3: 'À quelle vitesse pouvez-vous répondre à une urgence informatique ?',
        a3: 'Nous accordons la priorité aux demandes urgentes et répondons généralement dans les quelques heures pendant les jours ouvrables. Veuillez nous appeler directement pour une assistance immédiate.',
        q4: 'Vendez-vous du matériel informatique ou le réparez-vous seulement ?',
        a4: 'Les deux ! Nous nous approvisionnons et vendons des équipements informatiques, des ordinateurs et des accessoires de haute qualité, en plus de fournir des services de maintenance et de réparation.',
        q5: 'Puis-je obtenir une consultation avant de m\'engager dans un service ?',
        a5: 'Absolument. Nous offrons des conseils informatiques généraux pour vous aider à comprendre vos besoins et vous fournir une solution sur mesure et un devis avant le début des travaux.'
      },
      testimonials: {
        title: "Ce que disent nos clients",
        subtitle: "Ne nous croyez pas sur parole. Voici ce que les entreprises et les particuliers au Bénin ont à dire sur nos services.",
        role1: 'Propriétaire d\'entreprise',
        content1: 'HBM Informatique a complètement remanié notre réseau de bureau. Leur travail de câblage était soigné et l\'amélioration de la vitesse est incroyable. Fortement recommandé à Cotonou !',
        role2: 'Directrice de magasin',
        content2: 'Nous les avons embauchés pour l\'installation de vidéosurveillance dans notre magasin. M. Marius et son équipe étaient professionnels, rapides et ont expliqué comment utiliser le système parfaitement.',
        role3: 'Indépendant',
        content3: 'Mon ordinateur portable est tombé en panne juste avant une échéance majeure. Ils ont diagnostiqué le problème rapidement, récupéré mes données et l\'ont fait fonctionner comme neuf le lendemain.'
      },
      errors: {
        required: "Ce champ est requis",
        phone: "Format de numéro de téléphone invalide"
      },
      callback: {
        title: "Demander un rappel",
        desc: "Laissez vos coordonnées et nous vous rappellerons sous peu.",
        submit: "Demander un rappel"
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Nous sommes là pour vous aider avec tous vos besoins informatiques. Contactez-nous dès aujourd'hui.",
        getInTouch: "Entrer en contact",
        phone: "Numéros de téléphone",
        email: "Adresse e-mail",
        location: "Emplacement",
        hours: "Heures d'ouverture",
        hoursDesc: "Lundi - Samedi : 8h00 - 18h00",
        sunday: "Dimanche : Fermé",
        sendMessage: "Envoyez-nous un message",
        formName: "Nom complet",
        formPhone: "Numéro de téléphone",
        formMessage: "Comment pouvons-nous vous aider ?",
        formPlaceholder: "Décrivez vos besoins informatiques...",
        formSubmit: "Envoyer via WhatsApp"
      },
      footer: {
        desc: "Votre partenaire de confiance pour des solutions informatiques complètes, la mise en réseau et le support technique à Cotonou, au Bénin.",
        quickLinks: "Liens rapides",
        services: "Services",
        contactUs: "Contactez-nous",
        rights: "Tous droits réservés. PDG : M. Marius Kounma."
      },
      floating: {
        chat: "Discutez avec nous !"
      },
      gallery: {
        title: "Notre Travail en Action",
        subtitle: "Découvrez nos projets récents, nos installations informatiques et nos moments en coulisses."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
