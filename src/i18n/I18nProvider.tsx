import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.businesses": "For Businesses",
  "nav.partnerships": "Partnerships",
  "nav.about": "About",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.faqs": "FAQs",
  "nav.becomeAgent": "Become an Agent",
  "nav.howItWorks": "How It Works",
  "page.hiw.customers.title": "How TimWay works for customers.",
  "page.hiw.customers.subtitle": "Order food, send a parcel or book an inter-urban ride in just three simple steps — fully tracked, end to end.",
  "page.hiw.agents.title": "How TimWay works for agents.",
  "page.hiw.agents.subtitle": "Sign up, complete a quick KYC and start earning on your own schedule with TimWay's verified delivery network.",

  // Hero
  "hero.badge": "Now serving Douala & Yaoundé",
  "hero.title.1": "Seamless Deliveries at",
  "hero.title.2": "Your Fingertips",
  "hero.subtitle": "Craving something delicious? Get your favorite meals, groceries, and more delivered right to your door with just a few taps. Browse local restaurants and stores, place your order, and track your delivery in real time.",
  "hero.cta.agent": "Get Started as a Delivery Agent",
  "hero.cta.request": "Request Service",
  "hero.stat.rating": "rated experience",
  "hero.stat.cities": "cities live",
  "hero.stat.services": "services",
  "hero.float.live": "Live order",
  "hero.float.eta": "Arriving in 12 min",
  "hero.float.earn": "Earn as agent",
  "hero.float.flex": "Flexible hours",

  // Quick actions
  "qa.delivery": "Place a Delivery",
  "qa.delivery.desc": "Request a Pickup",
  "qa.food": "Order Food & Grocery",
  "qa.food.desc": "Restaurants & stores",
  "qa.ride": "Book an Inter-urban Ride",
  "qa.ride.desc": "City-to-city travel",
  "qa.agent": "Become an Agent",
  "qa.agent.desc": "Earn on your time",
  "qa.bonus": "Bonuses & Rewards",
  "qa.bonus.desc": "Loyalty perks",

  // Products carousel
  "products.eyebrow": "TimWay Products",
  "products.title.1": "Reliable solutions for your",
  "products.title.2": "personal & business needs.",
  "products.subtitle": "Discover TimWay's full range of delivery, transportation and logistics services — built for life across Douala and Yaoundé.",
  "products.learnMore": "Learn more",
  "products.tag.everyday": "Everyday",
  "products.tag.logistics": "Logistics",
  "products.tag.travel": "Travel",
  "products.tag.moving": "Moving",
  "products.tag.network": "Network",
  "products.tag.business": "Business",

  // Services (shared with home grid + page)
  "services.eyebrow": "Our Services",
  "services.title.1": "One Platform,",
  "services.title.2": "Every Need.",
  "services.subtitle": "Explore our range of specialized logistics and transportation services across Douala and Yaoundé.",
  "services.requestService": "Request Service",
  "service.food": "Food & Grocery",
  "service.food.desc": "Fresh meals and household essentials delivered fast to your doorstep.",
  "service.parcel": "Goods & Parcel",
  "service.parcel.desc": "Secure and reliable delivery for all your packages across town.",
  "service.intercity": "Inter-urban Rides",
  "service.intercity.desc": "Comfortable long-distance travel and punctual airport transfers.",
  "service.relocation": "Relocations",
  "service.relocation.desc": "Hassle-free moving services for your home or office with expert handling.",
  "service.thirdparty": "3rd-Party Rider",
  "service.thirdparty.desc": "Expand your business fleet with our network of verified independent riders.",

  // Products extra descriptions
  "product.food.desc": "Fresh meals and household essentials delivered fast to your doorstep across Douala and Yaoundé.",
  "product.parcel.desc": "Secure and reliable delivery for all your packages across town, with real-time tracking from pickup to drop-off.",
  "product.intercity.desc": "Comfortable long-distance travel between cities and punctual airport transfers with verified drivers.",
  "product.relocation.desc": "Hassle-free moving services for your home or office with expert handling from start to finish.",
  "product.thirdparty.desc": "Expand your business fleet with our network of verified independent riders, on demand.",
  "product.business.desc": "Streamline deliveries, run in-app ads and reach thousands of customers across Cameroon.",
  "product.business.title": "For Businesses",

  // Features
  "features.eyebrow": "Features",
  "features.title": "Why Choose Our Platform?",
  "features.subtitle": "The best local delivery experience. Wide selection, easy ordering, fast delivery, and dedicated support. Choose us and discover the difference.",
  "features.users": "For Users",
  "features.agents": "For Agents",
  "feat.kyc.title": "Easy Registration & KYC",
  "feat.kyc.desc": "Our streamlined registration takes just a few minutes, and our simplified KYC verification ensures a secure and compliant experience without the hassle.",
  "feat.manage.title": "Accept & Manage Delivery Requests",
  "feat.manage.desc": "Take control of your deliveries. Accept new requests, manage active jobs, get real-time notifications, and optimize your routes.",
  "feat.earnings.title": "Track Earnings in Real-Time",
  "feat.earnings.desc": "See exactly how much you're earning with each delivery, daily and weekly totals, with instant access to your full history.",
  "feat.payments.title": "Secure Payments",
  "feat.payments.desc": "Industry-leading encryption and security protocols ensure all transactions are safe. Your payment information is fully protected.",

  // InterCity
  "ic.eyebrow": "Inter-urban",
  "ic.tag": "Travel Farther",
  "ic.title.1": "Inter City",
  "ic.title.2": "Transportation",
  "ic.subtitle": "Modern, reliable, and secure travel between major towns and cities. Airport transfers, scheduled trips, and verified drivers at your fingertips.",
  "ic.c2c.title": "City-to-City",
  "ic.c2c.desc": "Comfortable long-distance rides between urban hubs like Douala and Yaoundé.",
  "ic.airport.title": "Airport Rides",
  "ic.airport.desc": "Punctual and professional transfers ensuring you never miss a flight.",
  "ic.cta": "Start Your Journey Today",

  // Business segments
  "segments.eyebrow": "Who We Serve",
  "segments.title": "Businesses that thrive with TimWay.",
  "segments.subtitle": "From local restaurants to growing SMEs and corporate offices — TimWay adapts to how Cameroon does business.",
  "seg.restaurants.title": "Restaurants & Stores",
  "seg.restaurants.desc": "Fulfill food and grocery orders with TimWay's verified rider network. Get your meals and household essentials to customers fast.",
  "seg.sellers.title": "Social Sellers & SMEs",
  "seg.sellers.desc": "Send packages across Douala and Yaoundé with ease. Scale your reach with in-app ads inside the TimWay platform.",
  "seg.corporate.title": "Corporate & Offices",
  "seg.corporate.desc": "Streamline corporate deliveries, schedule airport transfers and book full office relocations with one trusted platform.",

  // Programs
  "prog.business.eyebrow": "Scale Your Reach",
  "prog.business.title": "For Businesses",
  "prog.business.desc": "Streamline your deliveries, upload in-app ads, and reach thousands of customers across Douala and Yaoundé instantly.",
  "prog.business.cta": "Explore Features",
  "prog.partner.eyebrow": "Join the Revolution",
  "prog.partner.title": "Partnership Programs",
  "prog.partner.desc": "Turn your bike into a business or manage your own fleet. Flexible models designed for Cameroon's urban economy.",
  "prog.partner.cta": "Become a Partner",

  // Stats
  "stats.eyebrow": "Trusted by Thousands",
  "stats.title": "Powering everyday movement across Cameroon.",
  "stats.cities": "Cities Live",
  "stats.services": "Specialized Services",
  "stats.customers": "Trusted Customers",
  "stats.tracking": "Real-Time Tracking",

  // Testimonials
  "test.eyebrow": "What People Say",
  "test.title": "Hear from our community.",
  "test.1.quote": "TimWay has changed how we run deliveries in Douala. Orders go out faster and our customers love the live tracking.",
  "test.1.role": "Restaurant Owner, Douala",
  "test.2.quote": "I started as a delivery agent on weekends and it's now my main income. Simple registration, transparent earnings.",
  "test.2.role": "TimWay Delivery Agent",
  "test.3.quote": "We used TimWay for an office relocation between Yaoundé and Douala — punctual, careful, professional from end to end.",
  "test.3.role": "Operations Lead",

  // Download
  "dl.eyebrow": "Download",
  "dl.title": "Getting Started is Simple",
  "dl.subtitle": "Ready to get started? It's quick and easy! Sign up, create an account, or download the app. You'll be ready in minutes.",
  "dl.users.tag": "For Users",
  "dl.users.title.1": "Order anything,",
  "dl.users.title.2": "delivered fast.",
  "dl.users.desc": "Browse, order and track in real-time from your favorite local stores and restaurants.",
  "dl.agents.tag": "For Agents",
  "dl.agents.title.1": "Earn money on",
  "dl.agents.title.2": "your own time.",
  "dl.agents.desc": "Become a delivery partner with flexible hours, competitive pay, and full earnings transparency.",
  "dl.store.googleSub": "Get it on",
  "dl.store.googleLabel": "Google Play",
  "dl.store.appleSub": "Download on the",
  "dl.store.appleLabel": "App Store",

  // FAQ home + page
  "faq.eyebrow": "FAQs",
  "faq.title": "Frequently asked questions.",
  "faq.subtitle": "Quick answers about TimWay's services, agents and partnerships. Need more help? We're one click away.",
  "faq.contact": "Contact Support",
  "faq.q1": "Where does TimWay operate?",
  "faq.a1": "TimWay currently operates across Douala and Yaoundé in Cameroon, covering food & grocery, parcel delivery, inter-urban rides, relocations and 3rd-party rider services.",
  "faq.q2": "How do I request a delivery or service?",
  "faq.a2": "Use the TimWay app or the contact form on tim.cm to request food, grocery, parcel delivery, relocations or a 3rd-party rider.",
  "faq.q3": "How do I become a delivery agent?",
  "faq.a3": "Download the TimWay Agent app from Google Play or the App Store and complete the streamlined registration and KYC process — it only takes a few minutes.",
  "faq.q4": "How do I book an inter-urban ride?",
  "faq.a4": "Visit the Inter-urban Transportation section to book city-to-city rides between Douala and Yaoundé, or schedule a punctual airport transfer.",
  "faq.q5": "Are payments secure?",
  "faq.a5": "Yes. TimWay uses industry-leading encryption and security protocols to ensure that all transactions are safe and secure.",
  "faq.q6": "Can businesses partner with TimWay?",
  "faq.a6": "Yes. Businesses can streamline deliveries, run in-app ads and reach thousands of customers. Visit the For Businesses page to learn more.",
  "faq.page.subtitle": "Everything you need to know about TimWay's services, agents and partnerships.",

  // Final CTA
  "cta.title": "Trusted by thousands across Cameroon.",
  "cta.subtitle": "Join the fastest-growing delivery and transportation network in Douala and Yaoundé.",
  "cta.request": "Request Service",
  "cta.agent": "Become an Agent",

  // Footer
  "footer.tagline": "One platform, every need. Specialized logistics & transportation across Douala and Yaoundé.",
  "footer.services": "Services",
  "footer.company": "Company",
  "footer.contact": "Get in touch",
  "footer.location": "Douala & Yaoundé, Cameroon",
  "footer.contactForm": "contact form",
  "footer.rights": "All rights reserved.",
  "footer.built": "Built for Cameroon. Crafted with care.",

  // Pages
  "page.about.eyebrow": "About TimWay",
  "page.about.title": "Built for Cameroon's urban economy.",
  "page.about.subtitle": "TimWay is a delivery and transportation platform connecting people, businesses and verified riders across Douala and Yaoundé. One platform, every need.",
  "page.about.p1": "We bring together food, groceries, parcels, intercity rides, relocations and a network of verified third-party riders into a single seamless app — designed for the realities of Cameroonian cities.",
  "page.about.p2": "From a quick lunch order to a full office relocation, from an airport transfer to scaling your business fleet, TimWay is the trusted platform powering everyday movement in Douala and Yaoundé.",

  "page.biz.eyebrow": "For Businesses",
  "page.biz.title": "Scale your reach across Cameroon.",
  "page.biz.subtitle": "Streamline your deliveries, upload in-app ads, and reach thousands of customers across Douala and Yaoundé instantly.",
  "page.biz.cta": "Explore Features",
  "page.biz.streamlined.title": "Streamlined Deliveries",
  "page.biz.streamlined.desc": "Manage all your outgoing deliveries in one dashboard.",
  "page.biz.ads.title": "In-app Ads",
  "page.biz.ads.desc": "Upload and run promotions directly inside the TimWay app.",
  "page.biz.reach.title": "Reach Thousands",
  "page.biz.reach.desc": "Tap into customers across Douala and Yaoundé instantly.",

  "page.partner.eyebrow": "Partnerships",
  "page.partner.title": "Join the revolution.",
  "page.partner.subtitle": "Turn your bike into a business or manage your own fleet. Flexible models designed for Cameroon's urban economy.",
  "page.partner.cta": "Become a Partner",
  "page.partner.rider.title": "Independent Rider",
  "page.partner.rider.desc": "Own a bike? Earn money on flexible hours by joining our verified rider network.",
  "page.partner.rider.cta": "Get Started",
  "page.partner.fleet.title": "Fleet Manager",
  "page.partner.fleet.desc": "Manage and grow your own fleet of riders with TimWay's logistics infrastructure.",
  "page.partner.fleet.cta": "Learn More",

  "page.iu.eyebrow": "Inter-urban Transportation",
  "page.iu.title": "Travel farther, comfortably.",
  "page.iu.subtitle": "Modern, reliable, and secure travel between major towns and cities. Airport transfers, scheduled trips, and verified drivers at your fingertips.",

  "page.contact.eyebrow": "Contact",
  "page.contact.title": "We'd love to hear from you.",
  "page.contact.subtitle": "Request a service, partner with us, or get in touch with the TimWay team.",
  "page.contact.operating": "Operating in",
  "page.contact.reach": "Reach us",
  "page.contact.formCta": "Contact form on tim.cm",
  "page.contact.openForm": "Open Contact Form",
  "page.contact.apps.title": "Get the apps",
  "page.contact.apps.desc": "Order, manage and track on the go.",

  "page.blog.eyebrow": "Blog",
  "page.blog.title": "News & updates from TimWay.",
  "page.blog.subtitle": "Stay in the loop on new services, city launches and partner stories.",
  "page.blog.soon.title": "Articles coming soon",
  "page.blog.soon.desc": "We're preparing fresh stories from the road. In the meantime, follow our journey on tim.cm.",
  "page.blog.visit": "Visit tim.cm",

  // How it works
  "hiw.eyebrow": "How It Works",
  "hiw.title.1": "Get moving in",
  "hiw.title.2": "three simple steps.",
  "hiw.subtitle": "Whether you need a delivery or want to earn as an agent — TimWay keeps every step simple, transparent and fast.",
  "hiw.tab.user": "For Users",
  "hiw.tab.agent": "For Agents",
  "hiw.user.1.title": "Download the App",
  "hiw.user.1.desc": "Get TimWay on Google Play or the App Store and create your account in minutes.",
  "hiw.user.2.title": "Create a Delivery Request",
  "hiw.user.2.desc": "Order food, send a parcel, book an inter-urban ride or schedule a relocation.",
  "hiw.user.3.title": "Track and Receive Your Package",
  "hiw.user.3.desc": "Follow your verified rider in real time from pickup to drop-off, with instant notifications.",
  "hiw.agent.1.title": "Sign Up",
  "hiw.agent.1.desc": "Download the TimWay Agent app and create your account in just a few minutes.",
  "hiw.agent.2.title": "Complete Your KYC",
  "hiw.agent.2.desc": "Submit a Government-Issued ID and Proof of Address to verify your identity securely.",
  "hiw.agent.3.title": "Start Accepting Deliveries",
  "hiw.agent.3.desc": "Go online, accept incoming requests, manage active jobs and track your earnings live.",

  // Download QR
  "dl.qr.user": "Scan to download TimWay",
  "dl.qr.agent": "Scan to download TimWay Agent",
  "dl.qr.scan": "Scan to download",

  // Lang switch
  "lang.switch": "Switch language",
};

const fr: Dict = {
  // Nav
  "nav.home": "Accueil",
  "nav.services": "Services",
  "nav.businesses": "Pour les entreprises",
  "nav.partnerships": "Partenariats",
  "nav.about": "À propos",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.faqs": "FAQ",
  "nav.becomeAgent": "Devenir agent",
  "nav.howItWorks": "Comment ça marche",
  "page.hiw.customers.title": "Comment TimWay fonctionne pour les clients.",
  "page.hiw.customers.subtitle": "Commandez un repas, envoyez un colis ou réservez un trajet interurbain en trois étapes simples — suivi du début à la fin.",
  "page.hiw.agents.title": "Comment TimWay fonctionne pour les agents.",
  "page.hiw.agents.subtitle": "Inscrivez-vous, complétez un KYC rapide et commencez à gagner à votre rythme avec le réseau de livraison vérifié de TimWay.",

  // Hero
  "hero.badge": "Disponible à Douala et Yaoundé",
  "hero.title.1": "Des livraisons fluides",
  "hero.title.2": "au bout des doigts",
  "hero.subtitle": "Envie de quelque chose de délicieux ? Faites-vous livrer vos repas, courses et bien plus en quelques tapotements. Parcourez les restaurants et boutiques près de chez vous, passez commande et suivez votre livraison en temps réel.",
  "hero.cta.agent": "Devenir agent de livraison",
  "hero.cta.request": "Demander un service",
  "hero.stat.rating": "expérience notée",
  "hero.stat.cities": "villes desservies",
  "hero.stat.services": "services",
  "hero.float.live": "Commande en cours",
  "hero.float.eta": "Arrive dans 12 min",
  "hero.float.earn": "Gagnez en tant qu'agent",
  "hero.float.flex": "Horaires flexibles",

  // Quick actions
  "qa.delivery": "Demander une livraison",
  "qa.delivery.desc": "Demander un enlèvement",
  "qa.food": "Commander repas & courses",
  "qa.food.desc": "Restaurants et boutiques",
  "qa.ride": "Réserver un trajet interurbain",
  "qa.ride.desc": "Voyage entre les villes",
  "qa.agent": "Devenir agent",
  "qa.agent.desc": "Gagnez à votre rythme",
  "qa.bonus": "Bonus & récompenses",
  "qa.bonus.desc": "Avantages fidélité",

  // Products carousel
  "products.eyebrow": "Produits TimWay",
  "products.title.1": "Des solutions fiables pour vos",
  "products.title.2": "besoins personnels et professionnels.",
  "products.subtitle": "Découvrez toute la gamme de services de livraison, de transport et de logistique de TimWay — pensée pour le quotidien à Douala et Yaoundé.",
  "products.learnMore": "En savoir plus",
  "products.tag.everyday": "Quotidien",
  "products.tag.logistics": "Logistique",
  "products.tag.travel": "Voyage",
  "products.tag.moving": "Déménagement",
  "products.tag.network": "Réseau",
  "products.tag.business": "Entreprise",

  // Services
  "services.eyebrow": "Nos services",
  "services.title.1": "Une plateforme,",
  "services.title.2": "tous vos besoins.",
  "services.subtitle": "Découvrez notre gamme de services spécialisés de logistique et de transport à Douala et Yaoundé.",
  "services.requestService": "Demander un service",
  "service.food": "Repas & Courses",
  "service.food.desc": "Repas frais et essentiels du quotidien livrés rapidement à votre porte.",
  "service.parcel": "Colis & Marchandises",
  "service.parcel.desc": "Livraison sécurisée et fiable pour tous vos colis à travers la ville.",
  "service.intercity": "Trajets interurbains",
  "service.intercity.desc": "Voyages longue distance confortables et transferts aéroport ponctuels.",
  "service.relocation": "Déménagements",
  "service.relocation.desc": "Déménagements maison ou bureau sans tracas, avec une prise en charge experte.",
  "service.thirdparty": "Coursier tiers",
  "service.thirdparty.desc": "Renforcez votre flotte avec notre réseau de coursiers indépendants vérifiés.",

  "product.food.desc": "Repas frais et essentiels du quotidien livrés rapidement à votre porte à Douala et Yaoundé.",
  "product.parcel.desc": "Livraison sécurisée et fiable pour tous vos colis, avec un suivi en temps réel de l'enlèvement à la livraison.",
  "product.intercity.desc": "Voyages longue distance confortables entre villes et transferts aéroport ponctuels avec des chauffeurs vérifiés.",
  "product.relocation.desc": "Déménagements maison ou bureau sans tracas, pris en charge avec expertise du début à la fin.",
  "product.thirdparty.desc": "Renforcez votre flotte avec notre réseau de coursiers indépendants vérifiés, à la demande.",
  "product.business.desc": "Optimisez vos livraisons, diffusez des publicités in-app et touchez des milliers de clients à travers le Cameroun.",
  "product.business.title": "Pour les entreprises",

  // Features
  "features.eyebrow": "Avantages",
  "features.title": "Pourquoi choisir notre plateforme ?",
  "features.subtitle": "La meilleure expérience de livraison locale. Large choix, commande facile, livraison rapide et support dédié. Choisissez-nous et faites la différence.",
  "features.users": "Pour les utilisateurs",
  "features.agents": "Pour les agents",
  "feat.kyc.title": "Inscription & KYC simplifiés",
  "feat.kyc.desc": "Notre inscription rapide ne prend que quelques minutes, et notre vérification KYC simplifiée garantit une expérience sécurisée et conforme, sans complications.",
  "feat.manage.title": "Accepter et gérer les demandes",
  "feat.manage.desc": "Prenez le contrôle de vos livraisons. Acceptez de nouvelles demandes, gérez les courses actives, recevez des notifications en temps réel et optimisez vos itinéraires.",
  "feat.earnings.title": "Suivi des gains en temps réel",
  "feat.earnings.desc": "Voyez exactement combien vous gagnez à chaque livraison, avec totaux quotidiens et hebdomadaires et accès instantané à votre historique.",
  "feat.payments.title": "Paiements sécurisés",
  "feat.payments.desc": "Un chiffrement et des protocoles de sécurité de pointe garantissent la sûreté de chaque transaction. Vos informations de paiement sont entièrement protégées.",

  // InterCity
  "ic.eyebrow": "Interurbain",
  "ic.tag": "Voyagez plus loin",
  "ic.title.1": "Transport",
  "ic.title.2": "Interurbain",
  "ic.subtitle": "Des voyages modernes, fiables et sécurisés entre les principales villes. Transferts aéroport, trajets planifiés et chauffeurs vérifiés à portée de main.",
  "ic.c2c.title": "De ville en ville",
  "ic.c2c.desc": "Trajets longue distance confortables entre les pôles urbains comme Douala et Yaoundé.",
  "ic.airport.title": "Transferts aéroport",
  "ic.airport.desc": "Transferts ponctuels et professionnels pour ne jamais manquer un vol.",
  "ic.cta": "Commencez votre voyage",

  // Business segments
  "segments.eyebrow": "À qui nous nous adressons",
  "segments.title": "Des entreprises qui prospèrent avec TimWay.",
  "segments.subtitle": "Des restaurants locaux aux PME en croissance et aux bureaux d'entreprise — TimWay s'adapte à la façon dont le Cameroun fait des affaires.",
  "seg.restaurants.title": "Restaurants & Boutiques",
  "seg.restaurants.desc": "Honorez vos commandes de repas et de courses avec le réseau de coursiers vérifiés TimWay. Livrez vite vos clients.",
  "seg.sellers.title": "Vendeurs sociaux & PME",
  "seg.sellers.desc": "Envoyez des colis à Douala et Yaoundé en toute simplicité. Élargissez votre portée avec les publicités in-app TimWay.",
  "seg.corporate.title": "Entreprises & Bureaux",
  "seg.corporate.desc": "Optimisez les livraisons, planifiez les transferts aéroport et organisez des déménagements de bureau complets sur une seule plateforme.",

  // Programs
  "prog.business.eyebrow": "Élargissez votre portée",
  "prog.business.title": "Pour les entreprises",
  "prog.business.desc": "Optimisez vos livraisons, diffusez des publicités in-app et touchez instantanément des milliers de clients à Douala et Yaoundé.",
  "prog.business.cta": "Découvrir les fonctionnalités",
  "prog.partner.eyebrow": "Rejoignez la révolution",
  "prog.partner.title": "Programmes de partenariat",
  "prog.partner.desc": "Transformez votre moto en business ou gérez votre propre flotte. Des modèles flexibles pensés pour l'économie urbaine du Cameroun.",
  "prog.partner.cta": "Devenir partenaire",

  // Stats
  "stats.eyebrow": "La confiance de milliers de personnes",
  "stats.title": "Au cœur de la mobilité quotidienne au Cameroun.",
  "stats.cities": "Villes desservies",
  "stats.services": "Services spécialisés",
  "stats.customers": "Clients satisfaits",
  "stats.tracking": "Suivi en temps réel",

  // Testimonials
  "test.eyebrow": "Ce que les gens disent",
  "test.title": "Écoutez notre communauté.",
  "test.1.quote": "TimWay a transformé notre façon de gérer les livraisons à Douala. Les commandes partent plus vite et nos clients adorent le suivi en direct.",
  "test.1.role": "Restauratrice, Douala",
  "test.2.quote": "J'ai commencé comme agent le week-end et c'est devenu mon revenu principal. Inscription simple, gains transparents.",
  "test.2.role": "Agent de livraison TimWay",
  "test.3.quote": "Nous avons utilisé TimWay pour un déménagement de bureau entre Yaoundé et Douala — ponctuels, soigneux et professionnels du début à la fin.",
  "test.3.role": "Responsable des opérations",

  // Download
  "dl.eyebrow": "Téléchargement",
  "dl.title": "Démarrer est très simple",
  "dl.subtitle": "Prêt à commencer ? C'est rapide et facile ! Inscrivez-vous, créez un compte ou téléchargez l'application. Vous serez prêt en quelques minutes.",
  "dl.users.tag": "Pour les utilisateurs",
  "dl.users.title.1": "Commandez tout,",
  "dl.users.title.2": "livré rapidement.",
  "dl.users.desc": "Parcourez, commandez et suivez en temps réel auprès de vos restaurants et boutiques préférés.",
  "dl.agents.tag": "Pour les agents",
  "dl.agents.title.1": "Gagnez de l'argent",
  "dl.agents.title.2": "à votre rythme.",
  "dl.agents.desc": "Devenez partenaire de livraison avec horaires flexibles, rémunération compétitive et transparence totale sur les gains.",
  "dl.store.googleSub": "Disponible sur",
  "dl.store.googleLabel": "Google Play",
  "dl.store.appleSub": "Télécharger sur",
  "dl.store.appleLabel": "App Store",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Questions fréquentes.",
  "faq.subtitle": "Réponses rapides sur les services, les agents et les partenariats TimWay. Besoin d'aide ? Nous sommes à un clic.",
  "faq.contact": "Contacter le support",
  "faq.q1": "Où TimWay opère-t-il ?",
  "faq.a1": "TimWay opère actuellement à Douala et Yaoundé au Cameroun, avec la livraison de repas et de courses, la livraison de colis, les trajets interurbains, les déménagements et les services de coursiers tiers.",
  "faq.q2": "Comment demander une livraison ou un service ?",
  "faq.a2": "Utilisez l'application TimWay ou le formulaire de contact sur tim.cm pour demander un repas, des courses, une livraison de colis, un déménagement ou un coursier tiers.",
  "faq.q3": "Comment devenir agent de livraison ?",
  "faq.a3": "Téléchargez l'application TimWay Agent depuis Google Play ou l'App Store et complétez l'inscription et la vérification KYC simplifiées — cela ne prend que quelques minutes.",
  "faq.q4": "Comment réserver un trajet interurbain ?",
  "faq.a4": "Rendez-vous sur la section Transport interurbain pour réserver un trajet entre Douala et Yaoundé, ou planifier un transfert aéroport ponctuel.",
  "faq.q5": "Les paiements sont-ils sécurisés ?",
  "faq.a5": "Oui. TimWay utilise un chiffrement et des protocoles de sécurité de pointe pour garantir la sûreté de chaque transaction.",
  "faq.q6": "Les entreprises peuvent-elles devenir partenaires ?",
  "faq.a6": "Oui. Les entreprises peuvent optimiser les livraisons, diffuser des publicités in-app et toucher des milliers de clients. Visitez la page Pour les entreprises pour en savoir plus.",
  "faq.page.subtitle": "Tout ce que vous devez savoir sur les services, les agents et les partenariats de TimWay.",

  // Final CTA
  "cta.title": "La confiance de milliers de Camerounais.",
  "cta.subtitle": "Rejoignez le réseau de livraison et de transport qui grandit le plus vite à Douala et Yaoundé.",
  "cta.request": "Demander un service",
  "cta.agent": "Devenir agent",

  // Footer
  "footer.tagline": "Une plateforme, tous vos besoins. Logistique et transport spécialisés à Douala et Yaoundé.",
  "footer.services": "Services",
  "footer.company": "Entreprise",
  "footer.contact": "Nous contacter",
  "footer.location": "Douala & Yaoundé, Cameroun",
  "footer.contactForm": "formulaire de contact",
  "footer.rights": "Tous droits réservés.",
  "footer.built": "Conçu pour le Cameroun. Avec soin.",

  // Pages
  "page.about.eyebrow": "À propos de TimWay",
  "page.about.title": "Conçu pour l'économie urbaine du Cameroun.",
  "page.about.subtitle": "TimWay est une plateforme de livraison et de transport qui connecte les particuliers, les entreprises et des coursiers vérifiés à Douala et Yaoundé. Une plateforme, tous vos besoins.",
  "page.about.p1": "Nous réunissons repas, courses, colis, trajets interurbains, déménagements et un réseau de coursiers tiers vérifiés dans une seule application fluide — pensée pour la réalité des villes camerounaises.",
  "page.about.p2": "D'une commande de déjeuner à un déménagement de bureau complet, d'un transfert aéroport à l'extension de votre flotte, TimWay est la plateforme de confiance qui anime la mobilité quotidienne à Douala et Yaoundé.",

  "page.biz.eyebrow": "Pour les entreprises",
  "page.biz.title": "Élargissez votre portée à travers le Cameroun.",
  "page.biz.subtitle": "Optimisez vos livraisons, diffusez des publicités in-app et touchez instantanément des milliers de clients à Douala et Yaoundé.",
  "page.biz.cta": "Découvrir les fonctionnalités",
  "page.biz.streamlined.title": "Livraisons optimisées",
  "page.biz.streamlined.desc": "Gérez toutes vos livraisons sortantes depuis un seul tableau de bord.",
  "page.biz.ads.title": "Publicités in-app",
  "page.biz.ads.desc": "Diffusez et lancez des promotions directement dans l'application TimWay.",
  "page.biz.reach.title": "Touchez des milliers",
  "page.biz.reach.desc": "Atteignez instantanément les clients à Douala et Yaoundé.",

  "page.partner.eyebrow": "Partenariats",
  "page.partner.title": "Rejoignez la révolution.",
  "page.partner.subtitle": "Transformez votre moto en business ou gérez votre propre flotte. Des modèles flexibles pensés pour l'économie urbaine du Cameroun.",
  "page.partner.cta": "Devenir partenaire",
  "page.partner.rider.title": "Coursier indépendant",
  "page.partner.rider.desc": "Vous avez une moto ? Gagnez de l'argent à votre rythme en rejoignant notre réseau de coursiers vérifiés.",
  "page.partner.rider.cta": "Commencer",
  "page.partner.fleet.title": "Gestionnaire de flotte",
  "page.partner.fleet.desc": "Gérez et développez votre propre flotte de coursiers grâce à l'infrastructure logistique de TimWay.",
  "page.partner.fleet.cta": "En savoir plus",

  "page.iu.eyebrow": "Transport interurbain",
  "page.iu.title": "Voyagez plus loin, confortablement.",
  "page.iu.subtitle": "Des voyages modernes, fiables et sécurisés entre les principales villes. Transferts aéroport, trajets planifiés et chauffeurs vérifiés à portée de main.",

  "page.contact.eyebrow": "Contact",
  "page.contact.title": "Nous serions ravis de vous lire.",
  "page.contact.subtitle": "Demandez un service, devenez partenaire ou contactez l'équipe TimWay.",
  "page.contact.operating": "Présent à",
  "page.contact.reach": "Joignez-nous",
  "page.contact.formCta": "Formulaire de contact sur tim.cm",
  "page.contact.openForm": "Ouvrir le formulaire",
  "page.contact.apps.title": "Téléchargez les applications",
  "page.contact.apps.desc": "Commandez, gérez et suivez en déplacement.",

  "page.blog.eyebrow": "Blog",
  "page.blog.title": "Actualités et nouveautés TimWay.",
  "page.blog.subtitle": "Restez informé des nouveaux services, ouvertures de villes et histoires de partenaires.",
  "page.blog.soon.title": "Articles bientôt disponibles",
  "page.blog.soon.desc": "Nous préparons de nouveaux récits du terrain. En attendant, suivez notre actualité sur tim.cm.",
  "page.blog.visit": "Visiter tim.cm",

  // How it works
  "hiw.eyebrow": "Comment ça marche",
  "hiw.title.1": "Lancez-vous en",
  "hiw.title.2": "trois étapes simples.",
  "hiw.subtitle": "Que vous ayez besoin d'une livraison ou souhaitiez gagner en tant qu'agent — TimWay garde chaque étape simple, transparente et rapide.",
  "hiw.tab.user": "Pour les utilisateurs",
  "hiw.tab.agent": "Pour les agents",
  "hiw.user.1.title": "Téléchargez l'application",
  "hiw.user.1.desc": "Obtenez TimWay sur Google Play ou l'App Store et créez votre compte en quelques minutes.",
  "hiw.user.2.title": "Créez une demande de livraison",
  "hiw.user.2.desc": "Commandez à manger, envoyez un colis, réservez un trajet interurbain ou planifiez un déménagement.",
  "hiw.user.3.title": "Suivez et recevez votre colis",
  "hiw.user.3.desc": "Suivez votre coursier vérifié en temps réel, de l'enlèvement à la livraison, avec des notifications instantanées.",
  "hiw.agent.1.title": "Inscrivez-vous",
  "hiw.agent.1.desc": "Téléchargez l'application TimWay Agent et créez votre compte en quelques minutes.",
  "hiw.agent.2.title": "Complétez votre KYC",
  "hiw.agent.2.desc": "Soumettez une pièce d'identité officielle et un justificatif de domicile pour vérifier votre identité en toute sécurité.",
  "hiw.agent.3.title": "Commencez à accepter des livraisons",
  "hiw.agent.3.desc": "Passez en ligne, acceptez les demandes, gérez vos courses actives et suivez vos gains en direct.",

  // Download QR
  "dl.qr.user": "Scannez pour télécharger TimWay",
  "dl.qr.agent": "Scannez pour télécharger TimWay Agent",
  "dl.qr.scan": "Scanner pour télécharger",

  // Lang switch
  "lang.switch": "Changer de langue",
};

const dictionaries: Record<Lang, Dict> = { en, fr };

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nContext = createContext<I18nCtx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("tim.lang") as Lang | null;
    if (saved === "en" || saved === "fr") return saved;
    return window.navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem("tim.lang", l); } catch { /* ignore */ }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
};
