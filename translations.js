(function () {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd0Xlkz8ZuP3wPFaGQ9eY71hwHYqjrRKlHijpWLukJKSb04Pg/viewform";

  const common = {
    es: {
      nav: ["Inicio", "Sobre mi", "Servicios", "Planear mi viaje"],
      footerTagline: "Diseño itinerarios a medida que te invitan a redescubrir la autenticidad en cada destino.",
      contact: "Contacto",
      legal: ["Aviso Legal", "Política de Cookies", "Política de Privacidad", "Condiciones de Contratación"],
      copyright: "© 2026 La Bitácora de Sandra. Todos los derechos reservados.",
      emailTitle: "Enviar email",
      name: "Tu nombre",
      email: "Tu email",
      message: "Mensaje",
      prepare: "Preparar email",
      close: "Cerrar formulario"
    },
    en: {
      nav: ["Home", "About me", "Services", "Plan my trip"],
      footerTagline: "I design tailor-made itineraries that invite you to rediscover authenticity in every destination.",
      contact: "Contact",
      legal: ["Legal Notice", "Cookie Policy", "Privacy Policy", "Terms of Service"],
      copyright: "© 2026 La Bitácora de Sandra. All rights reserved.",
      emailTitle: "Send email",
      name: "Your name",
      email: "Your email",
      message: "Message",
      prepare: "Prepare email",
      close: "Close form"
    },
    fr: {
      nav: ["Accueil", "À propos", "Services", "Planifier mon voyage"],
      footerTagline: "Je crée des itinéraires sur mesure qui vous invitent à redécouvrir l’authenticité de chaque destination.",
      contact: "Contact",
      legal: ["Mentions légales", "Politique de cookies", "Politique de confidentialité", "Conditions de prestation"],
      copyright: "© 2026 La Bitácora de Sandra. Tous droits réservés.",
      emailTitle: "Envoyer un email",
      name: "Votre nom",
      email: "Votre email",
      message: "Message",
      prepare: "Préparer l’email",
      close: "Fermer le formulaire"
    }
  };

  const faqEs = [
    ["¿Qué es una asesoría de viajes personalizada?", "La asesoría de viajes personalizada es un servicio en el que te ayudo a organizar un viaje totalmente adaptado a tus gustos, presupuesto y forma de viajar. En La Bitácora de Sandra creo itinerarios personalizados con recomendaciones de vuelos, alojamientos, rutas, actividades y consejos prácticos para que disfrutes del viaje sin perder horas organizándolo."],
    ["¿En qué se diferencia a una agencia de viajes?", "A diferencia de una agencia tradicional, mi servicio de asesoría de viajes personalizada está pensado para ayudarte a organizar un viaje adaptado a ti, sin paquetes cerrados ni precios inflados. Mientras que muchas agencias trabajan con viajes prefabricados y comisiones por reservas, yo busco las opciones que mejor encajan con tu presupuesto y forma de viajar."],
    ["¿Qué incluye el servicio ofrecido por La Bitácora de Sandra?", "Esto dependerá del servicio que quieras contratar, ya sea un Paquete de servicios o incluso puedes elegir servicios independientes, para lo que crearé un presupuesto adaptado a tus necesidades."],
    ["¿Qué tipo de viajes puedes organizar?", "Desde escapadas de fin de semana a estancias de 2/3 semanas, un mes... Road trips, viajes de mochilero, viajes en pareja, viajes con amigos, viajes en familia con niños, itinerarios multicity, viajes sorpresa, lunas de miel y viajes de fin de curso. Me adaptaré a lo que necesites."],
    ["¿Cuál es el precio del servicio?", "Puedes elegir un Paquete de servicios a un precio fijo (<a href=\"servicios.html\">ver tarifas</a>), o puedes solicitarme un presupuesto personalizado en base a los servicios que necesites."],
    ["¿Cuánto tiempo esperaré para recibir mi itinerario en PDF?", "Esto dependerá de la complejidad de la planificación (Paquete elegido, días de duración, extras solicitados). El tiempo estimado es de 3-7 días."],
    ["¿Realizas las reservas de todos los servicios?", "No realizo reservas directamente. Te envío los enlaces de las mejores opciones de vuelos, alojamientos y transporte para que puedas reservarlas tú mismo/a de forma sencilla y segura. ¡Pero te acompaño en el proceso de reserva si lo necesitas!"],
    ["¿Puedo contratar servicios independientes sin necesidad de elegir un Pack?", "Por supuesto. Crearé un presupuesto personalizado para ti en base a lo que necesites."],
    ["¿Necesito elegir el destino antes de contratar el servicio?", "Por más que suene extraño... ¡no! Basándome en mi experiencia, hay destinos mejores que otros según la temporada en la que decidas viajar. Dime en qué mes/temporada te gustaría viajar y te propondré diferentes destinos."],
    ["¿Por qué elegir La Bitácora de Sandra para planificar mi viaje?", "Porque a la hora de elaborar mis itinerarios he pensado hasta en el más mínimo detalle. Entre otros extras, te ofrezco recomendaciones de restaurantes, APPs que te pueden salvar de más de un apuro, recomendaciones de outfits para ir siempre preparado, impresión del PDF en versión revista, tarjetas de regalo para que tu viaje no acabe el día que regresas... ¡y muchas otras sorpresas!"],
    ["¿Puedes planificar un viaje sorpresa para un regalo?", "¡Claro que sí! Y como persona bien coqueta que soy, te ofrezco la posibilidad de preparar un packaging de regalo ideal para que no solo el contenido sea una sorpresa inolvidable."],
    ["¿Puedo contratar tus servicios aunque no viva en España?", "Sí. Mis itinerarios incluyen partida desde cualquier origen y a cualquier destino en el mundo."],
    ["¿Tendré asistencia para incidencias o imprevistos durante mi viaje?", "Uno de los servicios que te ofrezco es la asistencia durante tu viaje. Te daré un teléfono de contacto al que podrás escribirme/llamarme si necesitas mi ayuda para cualquier imprevisto."],
    ["¿Puedo pedir cambios una vez reciba el itinerario en PDF?", "Sí. Entiendo que una vez recibidas las opciones que te ofrezco necesites cambiar/añadir otras alternativas. Según el cambio que se solicite podría conllevar un suplemento."],
    ["¿Puedo pedir reembolso?", "No. Una vez aceptes el presupuesto y yo comience a trabajar en tu itinerario no podrás solicitar el reembolso, puesto que ya habré invertido mi tiempo en ello."],
    ["¿Cómo puedo pagar?", "Los métodos de pago aceptados, por el momento, son los siguientes: Bizum, transferencia bancaria y Paypal."]
  ];

  const faqEn = [
    ["What is personalized travel consulting?", "Personalized travel consulting is a service where I help you organize a trip fully adapted to your tastes, budget and travel style. At La Bitácora de Sandra I create custom itineraries with recommendations for flights, accommodation, routes, activities and practical tips so you can enjoy your trip without spending hours organizing it."],
    ["How is it different from a travel agency?", "Unlike a traditional agency, my personalized travel consulting service is designed to help you organize a trip adapted to you, without fixed packages or inflated prices. While many agencies work with pre-made trips and booking commissions, I look for the options that best fit your budget and way of travelling."],
    ["What does the service offered by La Bitácora de Sandra include?", "It depends on the service you want to book. You can choose a service package, or even choose independent services, and I will create a quote adapted to your needs."],
    ["What kind of trips can you organize?", "From weekend getaways to stays of 2 or 3 weeks, or even a month. Road trips, backpacking trips, couples trips, trips with friends, family trips with children, multicity itineraries, surprise trips, honeymoons and end-of-course trips. I will adapt to what you need."],
    ["What is the price of the service?", "You can choose a service package at a fixed price (<a href=\"servicios.html\">see rates</a>), or request a personalized quote based on the services you need."],
    ["How long will I wait to receive my PDF itinerary?", "This depends on the complexity of the planning (chosen package, trip length, requested extras). The estimated time is 3-7 days."],
    ["Do you make reservations for all services?", "I do not make reservations directly. I send you links to the best flight, accommodation and transport options so you can book them yourself easily and safely. But I can support you during the booking process if you need it!"],
    ["Can I book independent services without choosing a package?", "Of course. I will create a personalized quote for you based on what you need."],
    ["Do I need to choose the destination before booking the service?", "As strange as it may sound... no! Based on my experience, some destinations are better than others depending on the season you want to travel. Tell me which month or season you would like to travel and I will suggest different destinations."],
    ["Why choose La Bitácora de Sandra to plan my trip?", "Because when creating my itineraries I think about even the smallest detail. Among other extras, I offer restaurant recommendations, apps that can save you from more than one problem, outfit recommendations so you are always prepared, printing the PDF in magazine format, gift cards so your trip does not end the day you return... and many other surprises!"],
    ["Can you plan a surprise trip as a gift?", "Of course! And as someone who loves pretty details, I offer the possibility of preparing ideal gift packaging so not only the content becomes an unforgettable surprise."],
    ["Can I book your services if I do not live in Spain?", "Yes. My itineraries include departure from any origin and to any destination in the world."],
    ["Will I have assistance for incidents or unexpected issues during my trip?", "One of the services I offer is assistance during your trip. I will give you a contact phone number so you can write or call me if you need help with any unexpected issue."],
    ["Can I request changes once I receive the PDF itinerary?", "Yes. I understand that once you receive the options I offer, you may need to change or add alternatives. Depending on the requested change, there may be an additional fee."],
    ["Can I request a refund?", "No. Once you accept the quote and I start working on your itinerary, you will not be able to request a refund, as I will already have invested my time in it."],
    ["How can I pay?", "The accepted payment methods, for now, are: Bizum, bank transfer and Paypal."]
  ];

  const faqFr = [
    ["Qu’est-ce qu’un conseil voyage personnalisé ?", "Le conseil voyage personnalisé est un service dans lequel je vous aide à organiser un voyage entièrement adapté à vos goûts, votre budget et votre façon de voyager. Chez La Bitácora de Sandra, je crée des itinéraires personnalisés avec des recommandations de vols, hébergements, routes, activités et conseils pratiques pour profiter du voyage sans passer des heures à l’organiser."],
    ["En quoi est-ce différent d’une agence de voyages ?", "Contrairement à une agence traditionnelle, mon service de conseil voyage personnalisé est pensé pour vous aider à organiser un voyage adapté à vous, sans forfaits fermés ni prix gonflés. Alors que de nombreuses agences travaillent avec des voyages préfabriqués et des commissions sur les réservations, je recherche les options qui correspondent le mieux à votre budget et à votre façon de voyager."],
    ["Que comprend le service proposé par La Bitácora de Sandra ?", "Cela dépendra du service que vous souhaitez réserver. Vous pouvez choisir un pack de services ou même des services indépendants, et je créerai un devis adapté à vos besoins."],
    ["Quel type de voyages pouvez-vous organiser ?", "Des escapades de week-end aux séjours de 2/3 semaines, voire un mois. Road trips, voyages en sac à dos, voyages en couple, voyages entre amis, voyages en famille avec enfants, itinéraires multicity, voyages surprise, lunes de miel et voyages de fin d’études. Je m’adapterai à vos besoins."],
    ["Quel est le prix du service ?", "Vous pouvez choisir un pack de services à prix fixe (<a href=\"servicios.html\">voir tarifs</a>), ou me demander un devis personnalisé selon les services dont vous avez besoin."],
    ["Combien de temps faudra-t-il pour recevoir mon itinéraire en PDF ?", "Cela dépendra de la complexité de la planification (pack choisi, durée du voyage, extras demandés). Le délai estimé est de 3 à 7 jours."],
    ["Effectuez-vous les réservations de tous les services ?", "Je n’effectue pas les réservations directement. Je vous envoie les liens vers les meilleures options de vols, hébergements et transports afin que vous puissiez réserver vous-même simplement et en toute sécurité. Mais je vous accompagne dans le processus de réservation si vous en avez besoin !"],
    ["Puis-je réserver des services indépendants sans choisir de pack ?", "Bien sûr. Je créerai un devis personnalisé pour vous selon vos besoins."],
    ["Dois-je choisir la destination avant de réserver le service ?", "Aussi étrange que cela puisse paraître... non ! D’après mon expérience, certaines destinations sont meilleures que d’autres selon la saison à laquelle vous souhaitez voyager. Dites-moi le mois ou la saison où vous aimeriez partir et je vous proposerai différentes destinations."],
    ["Pourquoi choisir La Bitácora de Sandra pour planifier mon voyage ?", "Parce que lorsque je prépare mes itinéraires, je pense au moindre détail. Parmi d’autres extras, je propose des recommandations de restaurants, des applications qui peuvent vous sauver plus d’une fois, des conseils de tenues pour être toujours prêt, l’impression du PDF en version magazine, des cartes cadeau pour que votre voyage ne se termine pas le jour du retour... et bien d’autres surprises !"],
    ["Pouvez-vous planifier un voyage surprise comme cadeau ?", "Bien sûr ! Et comme j’aime les jolis détails, je vous propose la possibilité de préparer un packaging cadeau idéal pour que le contenu ne soit pas la seule surprise inoubliable."],
    ["Puis-je réserver vos services si je ne vis pas en Espagne ?", "Oui. Mes itinéraires incluent un départ depuis n’importe quelle origine et vers n’importe quelle destination dans le monde."],
    ["Aurai-je une assistance en cas d’incident ou d’imprévu pendant mon voyage ?", "L’un des services que je propose est l’assistance pendant votre voyage. Je vous donnerai un numéro de contact auquel vous pourrez m’écrire ou m’appeler si vous avez besoin d’aide pour un imprévu."],
    ["Puis-je demander des modifications après avoir reçu l’itinéraire en PDF ?", "Oui. Je comprends qu’après avoir reçu les options proposées, vous puissiez avoir besoin de changer ou d’ajouter d’autres alternatives. Selon le changement demandé, un supplément peut s’appliquer."],
    ["Puis-je demander un remboursement ?", "Non. Une fois que vous acceptez le devis et que je commence à travailler sur votre itinéraire, vous ne pourrez pas demander de remboursement, car j’aurai déjà investi mon temps dans ce travail."],
    ["Comment puis-je payer ?", "Les moyens de paiement acceptés, pour le moment, sont : Bizum, virement bancaire et Paypal."]
  ];

  const pages = {
    "index.html": {
      es: {
        title: "La Bitácora de Sandra",
        description: "Diseño de viajes personalizados para descubrir el mundo de una forma auténtica, cómoda y sin estrés.",
        h1: "<span>Asesoría de viajes personalizada para crear</span><span>experiencias únicas</span>",
        subtitle: "Escribiendo tu próxima gran aventura",
        lead: "Hay viajes que se recuerdan por los lugares que visitas. Y otros, por cómo te hicieron sentir.",
        hero2: "En <strong>La Bitácora de Sandra</strong> te ofrezco un servicio de <strong>asesoría de viajes personalizada</strong> para ayudarte a diseñar un <strong>viaje a medida</strong>, adaptado a tu ritmo, tus gustos y tu presupuesto.",
        hero3: "Sin prisas, sin itinerarios imposibles y sin perder horas delante de una pantalla comparando vuelos, alojamientos o actividades. Porque detrás de cada viaje hay una historia diferente: una escapada para desconectar, un sueño pendiente, una aventura improvisada o esas ganas de volver a sentir la emoción de descubrir un lugar nuevo.",
        hero4: "Como <strong>Travel Planner</strong>, me encargo de crear un <strong>itinerario único</strong> pensado exclusivamente para ti, con propuestas de vuelos, alojamientos, restaurantes, actividades, rincones especiales y consejos prácticos para que tengas toda la <strong>planificación de tu viaje</strong> organizada de forma sencilla y clara.",
        hero5: "La idea no es solo viajar. Es <strong>coleccionar momentos</strong>, perderse en calles desconocidas, descubrir nuevos horizontes y volver a casa con <strong>recuerdos que te acompañarán para siempre.</strong>",
        eyebrow: "Mi historia",
        storyTitle: "Diseñando experiencias con alma y propósito",
        story1: "Soy Sandra, viajera incansable y creadora de experiencias a medida.",
        story2: "Tras más de 10 años trabajando en el sector turístico, ayudo a personas a descubrir el mundo de una forma auténtica, sencilla y sin estrés, diseñando viajes personalizados que se adaptan a su ritmo, sus gustos y su manera de vivir cada aventura.",
        story3: "Porque cada viaje debe sentirse único desde el primer instante.",
        more: "Conoce más sobre mi",
        guideTitle: "Guía para comenzar tu aventura",
        steps: [
          ["✈️", "1. Cuéntame un poco sobre tu viaje ideal", "Rellena el formulario con los detalles de ese viaje que tienes en mente: destino, fechas, presupuesto y tus preferencias. Cuanta más información me des, mejor podré diseñarlo a tu medida."],
          ["💬", "2. Primera toma de contacto", "Me pondré en contacto contigo para agendar una llamada/videollamada de 30 minutos. Hablaremos sobre tu idea de viaje y te explicaré cómo puedo ayudarte."],
          ["🗺️", "3. Diseño de tu viaje", "Una vez confirmado, empiezo a trabajar en tu itinerario. Diseño cada detalle pensando en ti, tu estilo de viaje y cómo aprovechar al máximo cada día."],
          ["📖", "4. Recibe tu itinerario completo", "Te enviaré un PDF con todo lo necesario: opciones de transporte, alojamientos, actividades, restaurantes, mapas, consejos prácticos y enlaces directos para que puedas reservar fácilmente."],
          ["🤍", "5. Acompañamiento durante el viaje", "No estarás sola/o. Durante tu viaje contarás con mi apoyo para resolver dudas o imprevistos, para que solo tengas que centrarte en disfrutar."]
        ],
        form: "Ir al formulario",
        faqTitle: "FAQ - ¿Tienes alguna duda?",
        faq: faqEs,
        destination: "Hablemos de tu próximo destino"
      },
      en: {
        title: "La Bitácora de Sandra",
        description: "Tailor-made travel design to discover the world in an authentic, comfortable and stress-free way.",
        h1: "<span>Personalized travel consulting to create</span><span>unique experiences</span>",
        subtitle: "Writing your next great adventure",
        lead: "Some trips are remembered for the places you visit. Others, for how they made you feel.",
        hero2: "At La Bitácora de Sandra, I help you prepare a trip designed for you, at your pace and according to the way you like to travel.",
        hero3: "No rushing, no impossible plans and no hours lost in front of a screen trying to organize everything. Behind every trip there is a different story: a getaway to disconnect, a pending dream, an improvised adventure or the desire to feel the excitement of discovering somewhere new again.",
        hero4: "Let me help shape that trip so all you have to do is enjoy the experience. I will create a detailed itinerary adapted to your style, with flight options, accommodation, special spots, restaurants, activities and practical tips so everything is organized clearly and easily.",
        hero5: "The idea is not just to travel... it is to collect moments, wander through unfamiliar streets, watch new sunsets and come home with memories that stay forever.",
        eyebrow: "My story",
        storyTitle: "Designing meaningful experiences with soul",
        story1: "I’m Sandra, a tireless traveller and creator of tailor-made experiences.",
        story2: "After more than 10 years working in tourism, I help people discover the world in an authentic, simple and stress-free way, designing personalized trips that adapt to their pace, tastes and way of living each adventure.",
        story3: "Because every trip should feel unique from the very first moment.",
        more: "Learn more about me",
        guideTitle: "Guide to start your adventure",
        steps: [
          ["✈️", "1. Tell me about your ideal trip", "Fill in the form with the details of the trip you have in mind: destination, dates, budget and preferences. The more information you give me, the better I can design it for you."],
          ["💬", "2. First contact", "I’ll contact you to schedule a 30-minute call or video call. We’ll talk about your travel idea and I’ll explain how I can help."],
          ["🗺️", "3. Trip design", "Once confirmed, I start working on your itinerary. I design every detail around you, your travel style and how to make the most of each day."],
          ["📖", "4. Receive your complete itinerary", "I’ll send you a PDF with everything you need: transport options, accommodation, activities, restaurants, maps, practical tips and direct links so you can book easily."],
          ["🤍", "5. Support during your trip", "You won’t be alone. During your trip you’ll have my support to solve questions or unexpected issues, so you can focus only on enjoying it."]
        ],
        form: "Go to the form",
        faqTitle: "FAQ - Any questions?",
        faq: faqEn,
        destination: "Let’s talk about your next destination"
      },
      fr: {
        title: "La Bitácora de Sandra",
        description: "Création de voyages personnalisés pour découvrir le monde de façon authentique, confortable et sans stress.",
        h1: "<span>Conseil en voyages personnalisé pour créer</span><span>des expériences uniques</span>",
        subtitle: "Écrivons votre prochaine grande aventure",
        lead: "Certains voyages restent en mémoire pour les lieux visités. D’autres, pour ce qu’ils vous ont fait ressentir.",
        hero2: "Chez La Bitácora de Sandra, je vous aide à préparer un voyage pensé pour vous, à votre rythme et selon votre façon de voyager.",
        hero3: "Sans précipitation, sans plans impossibles et sans passer des heures devant un écran à tout organiser. Derrière chaque voyage se cache une histoire différente : une escapade pour déconnecter, un rêve en attente, une aventure improvisée ou l’envie de ressentir à nouveau l’émotion de découvrir un nouvel endroit.",
        hero4: "Laissez-moi donner forme à ce voyage pour que vous n’ayez qu’à profiter de l’expérience. Je créerai un itinéraire détaillé adapté à votre style, avec des propositions de vols, logements, lieux spéciaux, restaurants, activités et conseils pratiques pour que tout soit organisé simplement et clairement.",
        hero5: "L’idée n’est pas seulement de voyager... c’est de collectionner des moments, se perdre dans des rues inconnues, admirer de nouveaux couchers de soleil et rentrer avec des souvenirs qui restent pour toujours.",
        eyebrow: "Mon histoire",
        storyTitle: "Créer des expériences avec âme et sens",
        story1: "Je suis Sandra, voyageuse infatigable et créatrice d’expériences sur mesure.",
        story2: "Après plus de 10 ans dans le secteur du tourisme, j’aide les personnes à découvrir le monde de façon authentique, simple et sans stress, en créant des voyages personnalisés adaptés à leur rythme, leurs goûts et leur manière de vivre chaque aventure.",
        story3: "Parce que chaque voyage doit être unique dès le premier instant.",
        more: "En savoir plus sur moi",
        guideTitle: "Guide pour commencer votre aventure",
        steps: [
          ["✈️", "1. Parlez-moi de votre voyage idéal", "Remplissez le formulaire avec les détails du voyage que vous avez en tête : destination, dates, budget et préférences. Plus vous me donnez d’informations, mieux je pourrai le créer sur mesure."],
          ["💬", "2. Premier contact", "Je vous contacterai pour planifier un appel ou appel vidéo de 30 minutes. Nous parlerons de votre idée de voyage et je vous expliquerai comment je peux vous aider."],
          ["🗺️", "3. Création de votre voyage", "Une fois confirmé, je commence à travailler sur votre itinéraire. Je crée chaque détail en pensant à vous, à votre style de voyage et à la meilleure façon de profiter de chaque journée."],
          ["📖", "4. Recevez votre itinéraire complet", "Je vous enverrai un PDF avec tout le nécessaire : options de transport, logements, activités, restaurants, cartes, conseils pratiques et liens directs pour réserver facilement."],
          ["🤍", "5. Accompagnement pendant le voyage", "Vous ne serez pas seul/e. Pendant votre voyage, vous pourrez compter sur mon aide pour répondre aux questions ou imprévus, afin de vous concentrer uniquement sur le plaisir."]
        ],
        form: "Aller au formulaire",
        faqTitle: "FAQ - Vous avez une question ?",
        faq: faqFr,
        destination: "Parlons de votre prochaine destination"
      }
    },
    "servicios.html": {
      es: {
        title: "Servicios | La Bitácora de Sandra",
        description: "Descubre cómo funciona el servicio de diseño de itinerarios personalizados.",
        guideTitle: "Guía para comenzar tu aventura",
        steps: [
          ["✈️", "1. Cuéntame un poco sobre tu viaje ideal", "Rellena el formulario con los detalles de ese viaje que tienes en mente: destino, fechas, presupuesto y tus preferencias. Cuanta más información me des, mejor podré diseñarlo a tu medida."],
          ["💬", "2. Primera toma de contacto", "Me pondré en contacto contigo según prefieras (WhatsApp, email o Instagram) para agendar una videollamada de 30 minutos. Hablaremos sobre tu idea de viaje y te explicaré cómo puedo ayudarte, junto con las tarifas."],
          ["🗺️", "3. Diseño de tu viaje", "Una vez confirmado, empiezo a trabajar en tu itinerario. Diseño cada detalle pensando en ti, tu estilo de viaje y cómo aprovechar al máximo cada día."],
          ["📖", "4. Recibe tu itinerario completo", "Te enviaré un PDF con todo lo necesario: opciones de transporte, alojamientos, actividades, restaurantes, mapas, consejos prácticos y enlaces directos para que puedas reservar fácilmente."],
          ["🤍", "5. Acompañamiento durante el viaje", "No estarás sola/o. Durante tu viaje contarás con mi apoyo para resolver dudas o imprevistos, para que solo tengas que centrarte en disfrutar."]
        ],
        form: "Ir al formulario",
        faqTitle: "FAQ - ¿Tienes alguna duda?",
        faq: faqEs,
        destination: "Hablemos de tu próximo destino"
      },
      en: {
        title: "Services | La Bitácora de Sandra",
        description: "Discover how the personalized itinerary design service works.",
        guideTitle: "Guide to start your adventure",
        steps: [
          ["✈️", "1. Tell me about your ideal trip", "Fill in the form with the details of the trip you have in mind: destination, dates, budget and preferences. The more information you give me, the better I can design it for you."],
          ["💬", "2. First contact", "I’ll contact you through your preferred channel (WhatsApp, email or Instagram) to schedule a 30-minute video call. We’ll discuss your travel idea and I’ll explain how I can help, including the rates."],
          ["🗺️", "3. Trip design", "Once confirmed, I start working on your itinerary. I design every detail around you, your travel style and how to make the most of each day."],
          ["📖", "4. Receive your complete itinerary", "I’ll send you a PDF with everything you need: transport options, accommodation, activities, restaurants, maps, practical tips and direct links so you can book easily."],
          ["🤍", "5. Support during your trip", "You won’t be alone. During your trip you’ll have my support to solve questions or unexpected issues, so you can focus only on enjoying it."]
        ],
        form: "Go to the form",
        faqTitle: "FAQ - Any questions?",
        faq: faqEn,
        destination: "Let’s talk about your next destination"
      },
      fr: {
        title: "Services | La Bitácora de Sandra",
        description: "Découvrez le fonctionnement du service de création d’itinéraires personnalisés.",
        guideTitle: "Guide pour commencer votre aventure",
        steps: [
          ["✈️", "1. Parlez-moi de votre voyage idéal", "Remplissez le formulaire avec les détails du voyage que vous avez en tête : destination, dates, budget et préférences. Plus vous me donnez d’informations, mieux je pourrai le créer sur mesure."],
          ["💬", "2. Premier contact", "Je vous contacterai selon votre préférence (WhatsApp, email ou Instagram) pour planifier un appel vidéo de 30 minutes. Nous parlerons de votre idée de voyage et je vous expliquerai comment je peux vous aider, avec les tarifs."],
          ["🗺️", "3. Création de votre voyage", "Une fois confirmé, je commence à travailler sur votre itinéraire. Je crée chaque détail en pensant à vous, à votre style de voyage et à la meilleure façon de profiter de chaque journée."],
          ["📖", "4. Recevez votre itinéraire complet", "Je vous enverrai un PDF avec tout le nécessaire : options de transport, logements, activités, restaurants, cartes, conseils pratiques et liens directs pour réserver facilement."],
          ["🤍", "5. Accompagnement pendant le voyage", "Vous ne serez pas seul/e. Pendant votre voyage, vous pourrez compter sur mon aide pour répondre aux questions ou imprévus, afin de vous concentrer uniquement sur le plaisir."]
        ],
        form: "Aller au formulaire",
        faqTitle: "FAQ - Vous avez une question ?",
        faq: faqFr,
        destination: "Parlons de votre prochaine destination"
      }
    },
    "sobre-mi.html": {
      es: {
        title: "Sobre mi | La Bitácora de Sandra",
        description: "Conoce la historia de Sandra y su forma de diseñar viajes personalizados.",
        eyebrow: "Mi historia",
        h1: "Diseñando experiencias con alma y propósito",
        paragraphs: [
          "Soy Sandra, viajera de alma inquieta y creadora de experiencias pensadas para descubrir el mundo de una forma auténtica.",
          "Diplomada en Turismo y apasionada por los viajes. Llevo más de 10 años trabajando en el sector turístico y atención al cliente, acompañando a viajeros de diferentes partes del mundo a organizar sus estancias, resolver imprevistos y disfrutar de cada destino con tranquilidad y confianza.",
          "A lo largo de estos años he trabajado en diferentes empresas que ofrecen servicio turístico (hoteles, alquiler vacacional, rent a car), aprendiendo desde dentro cómo funciona el negocio del turismo y entendiendo algo muy importante: no existen dos viajeros iguales. Cada persona viaja de una forma distinta, busca experiencias diferentes y vive cada aventura a su manera.",
          "Además del español, durante mis estudios obtuve varios títulos en diferentes idiomas: inglés, francés, alemán e italiano, lo que me ha permitido conectar con viajeros de diferentes culturas y desenvolverme con facilidad en distintos destinos.",
          "Pero viajar, para mí, nunca ha sido solo trabajo. También es mi manera de conectar con el mundo. Me apasiona descubrir lugares auténticos, perderme entre calles desconocidas y encontrar esos pequeños detalles que hacen especial cada destino.",
          "He recorrido diferentes países de Europa, América y el norte de África, tanto sola como con mi pareja o amigos, organizando desde escapadas urbanas hasta viajes largos llenos de rutas, cultura, gastronomía y aventura.",
          "Durante la planificación de mis propios viajes he aprendido a buscar las mejores opciones en internet, encontrar ofertas adaptadas a cada presupuesto y seleccionar compañías, alojamientos y servicios con la mejor relación calidad-precio según cada destino.",
          "Así nació Bitácora de Sandra: un espacio donde transformar toda esa experiencia en viajes personalizados, prácticos y totalmente adaptados a cada persona.",
          "Mi objetivo es ayudarte a vivir un viaje único, bien organizado y sin estrés, cuidando cada detalle para que tú solo tengas que preocuparte de disfrutar la experiencia.",
          "Porque las mejores aventuras empiezan mucho antes de hacer la maleta."
        ],
        plan: "Planear mi viaje",
        curiositiesTitle: "22 Curiosidades sobre mi, como viajera:",
        curiosities: [
          "✈️ <strong>Países visitados:</strong> España, Portugal, Francia, Bélgica, Países Bajos, Luxemburgo, Alemania, Dinamarca, Suecia, Polonia, Italia, Croacia, Grecia, Rumanía, Túnez, Argentina y Uruguay",
          "❤️ <strong>3 destinos favoritos:</strong> Italia, Túnez &amp; Polonia",
          "🌍 <strong>El lugar que más me sorprendió:</strong> Djerba, Túnez",
          "🎨 <strong>La ciudad visitada más bonita arquitectónicamente:</strong> Florencia, Italia",
          "🌿 <strong>El lugar con la naturaleza más impresionante:</strong> Uruguay",
          "🚗 <strong>Mi roadtrip favorito:</strong> París - Luxemburgo - Gante - Brujas - Ámsterdam",
          "✈️ <strong>El vuelo más largo que he tomado:</strong> Madrid ➡️ Buenos Aires - 13 horas",
          "🗺️ <strong>El viaje más largo que he realizado:</strong> 14 días visitando ciudades Europeas - Italia, Polonia y Alemania",
          "📍 <strong>La distancia más larga recorrida:</strong> Madrid ➡️ Buenos Aires - 10.050 km",
          "🏝️ <strong>Destino al que volvería una y otra vez:</strong> Polonia",
          "🍜 <strong>La mejor comida que he probado viajando:</strong> Asado en Uruguay",
          "🏔️ <strong>El paisaje que nunca olvidaré:</strong> Desierto del Sáhara",
          "📸 <strong>Lo que más fotografío cuando viajo:</strong> Vistas panorámicas desde terrazas altas y atardeceres frente al mar",
          "🎶 <strong>Canciones que me recuerdan automáticamente a un destino:</strong> Los del espacio (Argentina) &amp; Ya Baba (Túnez)",
          "📌 <strong>El próximo destino de mi lista:</strong> Estambul, Turquía",
          "🪙 <strong>Lo que colecciono de cada destino:</strong> Imanes, monedas/billetes, tickets de entrada a los monumentos y tarjetas de hotel",
          "🌊 <strong>El mar más bonito que he visto:</strong> Mar Mediterráneo",
          "🧳 <strong>Lo que nunca falta en mi maleta:</strong> Airtag (tip: desde mi iPhone siempre puedo ver si mi equipaje viene conmigo en mis vuelos)",
          "🥽 <strong>La actividad más curiosa pero divertida que he vivido de viaje:</strong> Time Ride en Colonia, Alemania. Experiencia VR que te sumerge en el Carnaval de Colonia de los años 20",
          "🎄 <strong>Mis destinos favoritos en Navidad:</strong> Heidelberg (Alemania) &amp; Estrasburgo (Francia)",
          "🕌 <strong>El monumento que más me impresionó:</strong> Catedral de Santa María del Fiore (Florencia, Italia)",
          "🧡 <strong>El recuerdo más especial que me he traído de un viaje:</strong> SIEMPRE las personas que he conocido durante mis viajes"
        ]
      },
      en: {
        title: "About me | La Bitácora de Sandra",
        description: "Discover Sandra’s story and her way of designing personalized trips.",
        eyebrow: "My story",
        h1: "Designing meaningful experiences with soul",
        paragraphs: [
          "I’m Sandra, a traveller with a restless soul and a creator of experiences designed to discover the world in an authentic way.",
          "I hold a degree in Tourism and I’m passionate about travel. For more than 10 years I have worked in tourism and customer service, helping travellers from different parts of the world organize their stays, solve unexpected issues and enjoy each destination with peace of mind and confidence.",
          "Over the years I have worked in different companies offering tourism services (hotels, holiday rentals and car rental), learning from within how the tourism business works and understanding something very important: no two travellers are the same. Each person travels differently, looks for different experiences and lives every adventure in their own way.",
          "In addition to Spanish, during my studies I obtained several language certificates in English, French, German and Italian, which has allowed me to connect with travellers from different cultures and move with ease in different destinations.",
          "But travelling, for me, has never been just work. It is also my way of connecting with the world. I love discovering authentic places, getting lost in unfamiliar streets and finding those little details that make each destination special.",
          "I have travelled through different countries in Europe, America and North Africa, both solo and with my partner or friends, organizing everything from city breaks to long trips full of routes, culture, gastronomy and adventure.",
          "While planning my own trips, I have learned how to search for the best options online, find deals adapted to each budget and choose companies, accommodation and services with the best value for money depending on each destination.",
          "That is how Bitácora de Sandra was born: a space where I transform all that experience into personalized, practical trips fully adapted to each person.",
          "My goal is to help you live a unique, well-organized and stress-free trip, taking care of every detail so all you have to worry about is enjoying the experience.",
          "Because the best adventures begin long before packing your suitcase."
        ],
        plan: "Plan my trip",
        curiositiesTitle: "22 travel facts about me:",
        curiosities: [
          "✈️ <strong>Countries visited:</strong> Spain, Portugal, France, Belgium, the Netherlands, Luxembourg, Germany, Denmark, Sweden, Poland, Italy, Croatia, Greece, Romania, Tunisia, Argentina and Uruguay",
          "❤️ <strong>3 favourite destinations:</strong> Italy, Tunisia &amp; Poland",
          "🌍 <strong>The place that surprised me the most:</strong> Djerba, Tunisia",
          "🎨 <strong>The most beautiful city architecturally:</strong> Florence, Italy",
          "🌿 <strong>The place with the most impressive nature:</strong> Uruguay",
          "🚗 <strong>My favourite road trip:</strong> Paris - Luxembourg - Ghent - Bruges - Amsterdam",
          "✈️ <strong>The longest flight I have taken:</strong> Madrid ➡️ Buenos Aires - 13 hours",
          "🗺️ <strong>The longest trip I have made:</strong> 14 days visiting European cities - Italy, Poland and Germany",
          "📍 <strong>The longest distance travelled:</strong> Madrid ➡️ Buenos Aires - 10,050 km",
          "🏝️ <strong>Destination I would return to again and again:</strong> Poland",
          "🍜 <strong>The best food I have tasted while travelling:</strong> Asado in Uruguay",
          "🏔️ <strong>The landscape I will never forget:</strong> The Sahara Desert",
          "📸 <strong>What I photograph most when travelling:</strong> Panoramic views from high terraces and sunsets by the sea",
          "🎶 <strong>Songs that instantly remind me of a destination:</strong> Los del espacio (Argentina) &amp; Ya Baba (Tunisia)",
          "📌 <strong>The next destination on my list:</strong> Istanbul, Turkey",
          "🪙 <strong>What I collect from each destination:</strong> Magnets, coins/banknotes, monument tickets and hotel cards",
          "🌊 <strong>The most beautiful sea I have seen:</strong> Mediterranean Sea",
          "🧳 <strong>What never misses from my suitcase:</strong> Airtag (tip: from my iPhone I can always see whether my luggage is travelling with me)",
          "🥽 <strong>The most curious but fun travel activity I have experienced:</strong> Time Ride in Cologne, Germany. A VR experience that immerses you in Cologne Carnival in the 1920s",
          "🎄 <strong>My favourite Christmas destinations:</strong> Heidelberg (Germany) &amp; Strasbourg (France)",
          "🕌 <strong>The monument that impressed me the most:</strong> Cathedral of Santa Maria del Fiore (Florence, Italy)",
          "🧡 <strong>The most special memory I have brought back from a trip:</strong> ALWAYS the people I have met during my travels"
        ]
      },
      fr: {
        title: "À propos | La Bitácora de Sandra",
        description: "Découvrez l’histoire de Sandra et sa façon de créer des voyages personnalisés.",
        eyebrow: "Mon histoire",
        h1: "Créer des expériences avec âme et sens",
        paragraphs: [
          "Je suis Sandra, voyageuse à l’âme curieuse et créatrice d’expériences pensées pour découvrir le monde de façon authentique.",
          "Diplômée en Tourisme et passionnée par les voyages, je travaille depuis plus de 10 ans dans le secteur touristique et le service client, en accompagnant des voyageurs du monde entier pour organiser leurs séjours, résoudre les imprévus et profiter de chaque destination avec tranquillité et confiance.",
          "Au fil des années, j’ai travaillé dans différentes entreprises de services touristiques (hôtels, locations de vacances, location de voitures), en apprenant de l’intérieur le fonctionnement du tourisme et en comprenant quelque chose d’essentiel : il n’existe pas deux voyageurs identiques. Chaque personne voyage différemment, recherche des expériences différentes et vit chaque aventure à sa manière.",
          "En plus de l’espagnol, j’ai obtenu pendant mes études plusieurs diplômes en langues : anglais, français, allemand et italien, ce qui m’a permis d’échanger avec des voyageurs de différentes cultures et de me débrouiller facilement dans différentes destinations.",
          "Mais voyager, pour moi, n’a jamais été seulement un travail. C’est aussi ma façon de me connecter au monde. J’aime découvrir des lieux authentiques, me perdre dans des rues inconnues et trouver ces petits détails qui rendent chaque destination spéciale.",
          "J’ai parcouru différents pays d’Europe, d’Amérique et du nord de l’Afrique, seule, en couple ou avec des amis, en organisant aussi bien des escapades urbaines que de longs voyages pleins de routes, de culture, de gastronomie et d’aventure.",
          "En planifiant mes propres voyages, j’ai appris à chercher les meilleures options en ligne, trouver des offres adaptées à chaque budget et sélectionner des compagnies, logements et services avec le meilleur rapport qualité-prix selon chaque destination.",
          "C’est ainsi qu’est née Bitácora de Sandra : un espace où transformer toute cette expérience en voyages personnalisés, pratiques et totalement adaptés à chaque personne.",
          "Mon objectif est de vous aider à vivre un voyage unique, bien organisé et sans stress, en prenant soin de chaque détail pour que vous n’ayez qu’à profiter de l’expérience.",
          "Parce que les plus belles aventures commencent bien avant de faire la valise."
        ],
        plan: "Planifier mon voyage",
        curiositiesTitle: "22 curiosités sur moi en tant que voyageuse :",
        curiosities: [
          "✈️ <strong>Pays visités :</strong> Espagne, Portugal, France, Belgique, Pays-Bas, Luxembourg, Allemagne, Danemark, Suède, Pologne, Italie, Croatie, Grèce, Roumanie, Tunisie, Argentine et Uruguay",
          "❤️ <strong>3 destinations préférées :</strong> Italie, Tunisie &amp; Pologne",
          "🌍 <strong>Le lieu qui m’a le plus surprise :</strong> Djerba, Tunisie",
          "🎨 <strong>La plus belle ville architecturalement :</strong> Florence, Italie",
          "🌿 <strong>Le lieu à la nature la plus impressionnante :</strong> Uruguay",
          "🚗 <strong>Mon road trip préféré :</strong> Paris - Luxembourg - Gand - Bruges - Amsterdam",
          "✈️ <strong>Le vol le plus long que j’ai pris :</strong> Madrid ➡️ Buenos Aires - 13 heures",
          "🗺️ <strong>Le plus long voyage que j’ai réalisé :</strong> 14 jours à visiter des villes européennes - Italie, Pologne et Allemagne",
          "📍 <strong>La plus longue distance parcourue :</strong> Madrid ➡️ Buenos Aires - 10 050 km",
          "🏝️ <strong>Destination où je retournerais encore et encore :</strong> Pologne",
          "🍜 <strong>Le meilleur plat goûté en voyage :</strong> Asado en Uruguay",
          "🏔️ <strong>Le paysage que je n’oublierai jamais :</strong> Le désert du Sahara",
          "📸 <strong>Ce que je photographie le plus en voyage :</strong> Les vues panoramiques depuis les terrasses en hauteur et les couchers de soleil face à la mer",
          "🎶 <strong>Chansons qui me rappellent automatiquement une destination :</strong> Los del espacio (Argentine) &amp; Ya Baba (Tunisie)",
          "📌 <strong>La prochaine destination sur ma liste :</strong> Istanbul, Turquie",
          "🪙 <strong>Ce que je collectionne de chaque destination :</strong> Aimants, pièces/billets, tickets d’entrée aux monuments et cartes d’hôtel",
          "🌊 <strong>La plus belle mer que j’ai vue :</strong> Mer Méditerranée",
          "🧳 <strong>Ce qui ne manque jamais dans ma valise :</strong> Airtag (astuce : depuis mon iPhone, je peux toujours voir si mon bagage voyage avec moi)",
          "🥽 <strong>L’activité la plus curieuse mais amusante vécue en voyage :</strong> Time Ride à Cologne, Allemagne. Une expérience VR qui vous plonge dans le carnaval de Cologne des années 20",
          "🎄 <strong>Mes destinations préférées à Noël :</strong> Heidelberg (Allemagne) &amp; Strasbourg (France)",
          "🕌 <strong>Le monument qui m’a le plus impressionnée :</strong> La cathédrale Santa Maria del Fiore (Florence, Italie)",
          "🧡 <strong>Le souvenir le plus spécial rapporté d’un voyage :</strong> TOUJOURS les personnes rencontrées pendant mes voyages"
        ]
      }
    }
  };

  const legalPages = {
    "aviso-legal.html": {
      es: {
        title: "Aviso Legal | La Bitácora de Sandra",
        html: `
          <h1>Aviso Legal</h1>
          <h2>Datos identificativos</h2>
          <p>En cumplimiento con el deber de información recogido en la legislación vigente, se informa que la presente web pertenece a:</p>
          <p><strong>Titular:</strong> Sandra Rodríguez Pérez</p>
          <p><strong>DNI:</strong> 77171734H</p>
          <p><strong>Dirección:</strong> Calle Teniente Andújar 11, Cádiz 11006 España</p>
          <p><strong>Correo electrónico:</strong> labitacoradesandra@gmail.com</p>
          <h2>Objeto</h2>
          <p>El presente Aviso Legal regula el acceso, navegación y uso de la web La Bitácora de Sandra.</p>
          <p>El acceso implica la aceptación de las condiciones aquí establecidas.</p>
          <h2>Uso de la web</h2>
          <p>El usuario se compromete a utilizar la web de forma lícita, sin dañar, inutilizar o sobrecargar los contenidos.</p>
          <h2>Propiedad intelectual</h2>
          <p>Todos los contenidos de la web (textos, imágenes, diseño, estructura, etc.) son propiedad de La Bitácora de Sandra.</p>
          <p>Queda prohibida su reproducción sin autorización expresa.</p>
          <h2>Responsabilidad</h2>
          <p>No se garantiza la ausencia de errores en los contenidos ni la disponibilidad permanente de la web.</p>
          <h2>Enlaces externos</h2>
          <p>La web puede contener enlaces a terceros, no siendo responsable de sus contenidos ni servicios.</p>`
      },
      en: {
        title: "Legal Notice | La Bitácora de Sandra",
        html: `
          <h1>Legal Notice</h1>
          <h2>Identification details</h2>
          <p>In compliance with the duty of information established by current legislation, this website is owned by:</p>
          <p><strong>Owner:</strong> Sandra Rodríguez Pérez</p>
          <p><strong>ID number:</strong> 77171734H</p>
          <p><strong>Address:</strong> Calle Teniente Andújar 11, Cádiz 11006 Spain</p>
          <p><strong>Email:</strong> labitacoradesandra@gmail.com</p>
          <h2>Purpose</h2>
          <p>This Legal Notice regulates access, browsing and use of the La Bitácora de Sandra website.</p>
          <p>Access implies acceptance of the conditions established here.</p>
          <h2>Use of the website</h2>
          <p>The user agrees to use the website lawfully, without damaging, disabling or overloading its content.</p>
          <h2>Intellectual property</h2>
          <p>All website content (texts, images, design, structure, etc.) is owned by La Bitácora de Sandra.</p>
          <p>Reproduction without express authorization is prohibited.</p>
          <h2>Liability</h2>
          <p>The absence of errors in the content or permanent availability of the website is not guaranteed.</p>
          <h2>External links</h2>
          <p>The website may contain links to third parties and is not responsible for their content or services.</p>`
      },
      fr: {
        title: "Mentions légales | La Bitácora de Sandra",
        html: `
          <h1>Mentions légales</h1>
          <h2>Données d’identification</h2>
          <p>Conformément à l’obligation d’information prévue par la législation en vigueur, ce site appartient à :</p>
          <p><strong>Titulaire :</strong> Sandra Rodríguez Pérez</p>
          <p><strong>Numéro d’identité :</strong> 77171734H</p>
          <p><strong>Adresse :</strong> Calle Teniente Andújar 11, Cádiz 11006 Espagne</p>
          <p><strong>Email :</strong> labitacoradesandra@gmail.com</p>
          <h2>Objet</h2>
          <p>Les présentes mentions légales régissent l’accès, la navigation et l’utilisation du site La Bitácora de Sandra.</p>
          <p>L’accès implique l’acceptation des conditions établies ici.</p>
          <h2>Utilisation du site</h2>
          <p>L’utilisateur s’engage à utiliser le site de manière licite, sans endommager, rendre inutilisable ou surcharger les contenus.</p>
          <h2>Propriété intellectuelle</h2>
          <p>Tous les contenus du site (textes, images, design, structure, etc.) appartiennent à La Bitácora de Sandra.</p>
          <p>Toute reproduction sans autorisation expresse est interdite.</p>
          <h2>Responsabilité</h2>
          <p>L’absence d’erreurs dans les contenus ou la disponibilité permanente du site ne sont pas garanties.</p>
          <h2>Liens externes</h2>
          <p>Le site peut contenir des liens vers des tiers et n’est pas responsable de leurs contenus ou services.</p>`
      }
    },
    "politica-cookies.html": {
      es: {
        title: "Política de Cookies | La Bitácora de Sandra",
        html: `
          <h1>Política de Cookies</h1>
          <h2>¿Qué son las cookies?</h2>
          <p>Son pequeños archivos que se almacenan en tu dispositivo al navegar por una web.</p>
          <h2>Tipos de cookies utilizadas</h2>
          <p>Esta web puede utilizar:</p>
          <ul><li>Cookies técnicas: necesarias para el funcionamiento.</li><li>Cookies de análisis: para mejorar la experiencia del usuario (si se implementan herramientas como Google Analytics).</li></ul>
          <h2>Gestión de cookies</h2>
          <p>El usuario puede:</p>
          <ul><li>Aceptar</li><li>Rechazar</li><li>Configurar las cookies desde el banner inicial o su navegador.</li></ul>
          <h2>Cómo desactivarlas</h2>
          <p>Puedes eliminar o bloquear cookies desde la configuración de tu navegador.</p>
          <h2>Cambios en la política</h2>
          <p>La Bitácora de Sandra podrá modificar esta política para adaptarla a cambios legales o técnicos.</p>`
      },
      en: {
        title: "Cookie Policy | La Bitácora de Sandra",
        html: `
          <h1>Cookie Policy</h1>
          <h2>What are cookies?</h2>
          <p>Cookies are small files stored on your device when you browse a website.</p>
          <h2>Types of cookies used</h2>
          <p>This website may use:</p>
          <ul><li>Technical cookies: necessary for the website to function.</li><li>Analytics cookies: to improve the user experience (if tools such as Google Analytics are implemented).</li></ul>
          <h2>Cookie management</h2>
          <p>The user may:</p>
          <ul><li>Accept</li><li>Reject</li><li>Configure cookies from the initial banner or from their browser.</li></ul>
          <h2>How to disable them</h2>
          <p>You can delete or block cookies from your browser settings.</p>
          <h2>Changes to this policy</h2>
          <p>La Bitácora de Sandra may modify this policy to adapt it to legal or technical changes.</p>`
      },
      fr: {
        title: "Politique de cookies | La Bitácora de Sandra",
        html: `
          <h1>Politique de cookies</h1>
          <h2>Que sont les cookies ?</h2>
          <p>Ce sont de petits fichiers stockés sur votre appareil lorsque vous naviguez sur un site web.</p>
          <h2>Types de cookies utilisés</h2>
          <p>Ce site peut utiliser :</p>
          <ul><li>Cookies techniques : nécessaires au fonctionnement.</li><li>Cookies d’analyse : pour améliorer l’expérience utilisateur (si des outils comme Google Analytics sont utilisés).</li></ul>
          <h2>Gestion des cookies</h2>
          <p>L’utilisateur peut :</p>
          <ul><li>Accepter</li><li>Refuser</li><li>Configurer les cookies depuis la bannière initiale ou son navigateur.</li></ul>
          <h2>Comment les désactiver</h2>
          <p>Vous pouvez supprimer ou bloquer les cookies depuis les paramètres de votre navigateur.</p>
          <h2>Modifications de la politique</h2>
          <p>La Bitácora de Sandra pourra modifier cette politique afin de l’adapter à des changements légaux ou techniques.</p>`
      }
    },
    "politica-privacidad.html": {
      es: {
        title: "Política de Privacidad | La Bitácora de Sandra",
        html: `
          <h1>Política de Privacidad</h1>
          <h2>Responsable del tratamiento</h2><p><strong>Nombre:</strong> Sandra Rodríguez Pérez</p><p><strong>Email:</strong> labitacoradesandra@gmail.com</p>
          <h2>Datos recopilados</h2><p>Se podrán recoger los siguientes datos:</p><ul><li>Nombre</li><li>Email</li><li>Teléfono</li><li>Nombre de usuario en redes sociales</li><li>Información del viaje (preferencias, presupuesto, fechas, etc.)</li></ul>
          <h2>Finalidad del tratamiento</h2><p>Los datos se utilizarán para:</p><ul><li>Gestionar solicitudes de información</li><li>Elaborar presupuestos personalizados</li><li>Prestar el servicio contratado</li><li>Mantener comunicación con el cliente</li></ul>
          <h2>Legitimación</h2><p>La base legal es el consentimiento del usuario al completar el formulario.</p>
          <h2>Conservación de datos</h2><p>Los datos se conservarán:</p><ul><li>Mientras dure la relación comercial</li><li>O hasta que el usuario solicite su eliminación</li></ul>
          <h2>Derechos del usuario</h2><p>Puedes ejercer tus derechos de:</p><ul><li>Acceso</li><li>Rectificación</li><li>Supresión</li><li>Limitación</li><li>Oposición</li></ul><p>Contactando en: labitacoradesandra@gmail.com</p>
          <h2>Cesión de datos</h2><p>No se cederán datos a terceros salvo obligación legal.</p>
          <h2>Seguridad</h2><p>Se adoptan medidas para proteger los datos personales del usuario.</p>`
      },
      en: {
        title: "Privacy Policy | La Bitácora de Sandra",
        html: `
          <h1>Privacy Policy</h1>
          <h2>Data controller</h2><p><strong>Name:</strong> Sandra Rodríguez Pérez</p><p><strong>Email:</strong> labitacoradesandra@gmail.com</p>
          <h2>Data collected</h2><p>The following data may be collected:</p><ul><li>Name</li><li>Email</li><li>Phone number</li><li>Username on social media</li><li>Trip information (preferences, budget, dates, etc.)</li></ul>
          <h2>Purpose of processing</h2><p>The data will be used to:</p><ul><li>Manage information requests</li><li>Prepare personalized quotes</li><li>Provide the contracted service</li><li>Maintain communication with the client</li></ul>
          <h2>Legal basis</h2><p>The legal basis is the user’s consent when completing the form.</p>
          <h2>Data retention</h2><p>Data will be kept:</p><ul><li>For the duration of the commercial relationship</li><li>Or until the user requests its deletion</li></ul>
          <h2>User rights</h2><p>You may exercise your rights of:</p><ul><li>Access</li><li>Rectification</li><li>Erasure</li><li>Restriction</li><li>Objection</li></ul><p>By contacting: labitacoradesandra@gmail.com</p>
          <h2>Data disclosure</h2><p>Data will not be transferred to third parties unless legally required.</p>
          <h2>Security</h2><p>Measures are adopted to protect users’ personal data.</p>`
      },
      fr: {
        title: "Politique de confidentialité | La Bitácora de Sandra",
        html: `
          <h1>Politique de confidentialité</h1>
          <h2>Responsable du traitement</h2><p><strong>Nom :</strong> Sandra Rodríguez Pérez</p><p><strong>Email :</strong> labitacoradesandra@gmail.com</p>
          <h2>Données collectées</h2><p>Les données suivantes peuvent être collectées :</p><ul><li>Nom</li><li>Email</li><li>Téléphone</li><li>Nom d’utilisateur sur les réseaux sociaux</li><li>Informations sur le voyage (préférences, budget, dates, etc.)</li></ul>
          <h2>Finalité du traitement</h2><p>Les données seront utilisées pour :</p><ul><li>Gérer les demandes d’information</li><li>Élaborer des devis personnalisés</li><li>Fournir le service contracté</li><li>Maintenir la communication avec le client</li></ul>
          <h2>Base légale</h2><p>La base légale est le consentement de l’utilisateur lorsqu’il complète le formulaire.</p>
          <h2>Conservation des données</h2><p>Les données seront conservées :</p><ul><li>Pendant la durée de la relation commerciale</li><li>Ou jusqu’à ce que l’utilisateur demande leur suppression</li></ul>
          <h2>Droits de l’utilisateur</h2><p>Vous pouvez exercer vos droits de :</p><ul><li>Accès</li><li>Rectification</li><li>Suppression</li><li>Limitation</li><li>Opposition</li></ul><p>En contactant : labitacoradesandra@gmail.com</p>
          <h2>Transmission des données</h2><p>Les données ne seront pas transmises à des tiers sauf obligation légale.</p>
          <h2>Sécurité</h2><p>Des mesures sont adoptées pour protéger les données personnelles de l’utilisateur.</p>`
      }
    },
    "condiciones-contratacion.html": {
      es: {
        title: "Condiciones de Contratación | La Bitácora de Sandra",
        html: document.querySelector(".legal-document")?.innerHTML || ""
      },
      en: {
        title: "Terms of Service | La Bitácora de Sandra",
        html: `
          <h1>Terms of Service</h1>
          <h2>1. Purpose of the service</h2><p>La Bitácora de Sandra offers an online personalized travel advice and planning service.</p><p>This service includes the preparation of a detailed travel itinerary adapted to the client’s preferences.</p><p>Under no circumstances does it act as a travel agency or manage bookings on behalf of the client.</p>
          <h2>2. Nature of the service</h2><p>The service consists of recommending transport, accommodation, activities and other tourism services.</p><p>The client is solely responsible for making and managing their bookings through the links provided.</p>
          <h2>3. Contracting process</h2><p>The process will be as follows:</p><ol><li>The client completes the contact form.</li><li>A first contact is held (video call).</li><li>A quote is sent with the details agreed during the video call.</li><li>Once the client accepts the service and fee, payment is made in advance.</li><li>An interactive and detailed PDF with the full travel itinerary will be sent, including links to make all bookings.</li><li>The client will have full assistance throughout the trip.</li></ol>
          <h2>4. Price and payment method</h2><p>The price will be previously communicated to the client after the first call/video call.</p><p>Payment will be made in advance.</p><p><strong>Available payment methods: Bizum, bank transfer or PayPal</strong></p><p>An invoice will be issued if requested by the client.</p>
          <h2>5. Service delivery</h2><p>The client will receive a document, in interactive PDF format with links, which may include (as previously agreed):</p><ul><li>Transport proposals</li><li>Accommodation options</li><li>Activities and experiences</li><li>Recommended restaurants</li><li>Practical tips</li><li>Maps</li><li>Other previously agreed requests</li></ul><p>The client may request printed documents sent by post, subject to an additional cost.</p><p>The delivery deadline will be previously agreed with the client.</p>
          <h2>6. Liability</h2><p>La Bitácora de Sandra will not be responsible for:</p><ul><li>Errors in bookings made by the client.</li><li>Changes, cancellations or incidents caused by providers.</li><li>Problems arising from services contracted with third parties.</li></ul><p>The client assumes final responsibility for verifying and formalizing their bookings.</p>
          <h2>7. Cancellations and refunds</h2><p>As this is a personalized service:</p><p>No refunds are accepted once the work has begun.</p><p>If the client cancels before work begins, each case will be assessed.</p>
          <h2>8. Modifications</h2><p>The client may request reasonable adjustments within the contracted service.</p><p>Additional changes may involve an extra cost.</p>
          <h2>9. Assistance during the trip</h2><p>The service includes assistance during the trip to resolve questions or incidents, within reasonable use and agreed hours.</p>
          <h2>10. Acceptance</h2><p>Contracting the service implies acceptance of these conditions.</p>`
      },
      fr: {
        title: "Conditions de prestation | La Bitácora de Sandra",
        html: `
          <h1>Conditions de prestation</h1>
          <h2>1. Objet du service</h2><p>La Bitácora de Sandra propose un service en ligne de conseil et de planification de voyages personnalisés.</p><p>Ce service comprend l’élaboration d’un itinéraire de voyage détaillé et adapté aux préférences du client.</p><p>En aucun cas il ne s’agit d’une agence de voyages et aucune réservation n’est gérée au nom du client.</p>
          <h2>2. Nature du service</h2><p>Le service consiste à recommander des options de transport, d’hébergement, d’activités et d’autres services touristiques.</p><p>Le client est seul responsable de réaliser et gérer ses réservations via les liens fournis.</p>
          <h2>3. Processus de réservation</h2><p>Le processus sera le suivant :</p><ol><li>Le client remplit le formulaire de contact.</li><li>Un premier contact est réalisé (appel vidéo).</li><li>Un devis est envoyé avec les détails convenus lors de l’appel vidéo.</li><li>Une fois le service et le tarif acceptés par le client, le paiement est effectué à l’avance.</li><li>Un PDF interactif et détaillé avec tout l’itinéraire du voyage sera envoyé, incluant les liens pour effectuer les réservations.</li><li>Le client bénéficiera d’une assistance complète pendant tout son voyage.</li></ol>
          <h2>4. Prix et mode de paiement</h2><p>Le prix sera communiqué au client après le premier appel/appel vidéo.</p><p>Le paiement sera effectué à l’avance.</p><p><strong>Moyens de paiement disponibles : Bizum, virement bancaire ou PayPal</strong></p><p>Une facture sera émise si le client le demande.</p>
          <h2>5. Livraison du service</h2><p>Le client recevra un document au format PDF interactif avec des liens, pouvant inclure (selon accord préalable) :</p><ul><li>Propositions de transport</li><li>Options d’hébergement</li><li>Activités et expériences</li><li>Restaurants recommandés</li><li>Conseils pratiques</li><li>Cartes</li><li>Autres demandes convenues au préalable</li></ul><p>Le client pourra demander les documents imprimés et envoyés par courrier postal, moyennant un supplément.</p><p>Le délai de livraison sera convenu au préalable avec le client.</p>
          <h2>6. Responsabilité</h2><p>La Bitácora de Sandra ne sera pas responsable de :</p><ul><li>Erreurs dans les réservations réalisées par le client.</li><li>Changements, annulations ou incidents de la part des prestataires.</li><li>Problèmes liés à des services contractés auprès de tiers.</li></ul><p>Le client assume la responsabilité finale de vérifier et formaliser ses réservations.</p>
          <h2>7. Annulations et remboursements</h2><p>S’agissant d’un service personnalisé :</p><p>Aucun remboursement n’est accepté une fois le travail commencé.</p><p>Si le client annule avant le début du travail, chaque cas sera étudié.</p>
          <h2>8. Modifications</h2><p>Le client pourra demander des ajustements raisonnables dans le cadre du service contracté.</p><p>Des changements supplémentaires pourront entraîner un coût additionnel.</p>
          <h2>9. Assistance pendant le voyage</h2><p>Le service comprend une assistance pendant le voyage pour résoudre les questions ou incidents, dans le cadre d’un usage raisonnable et selon les horaires convenus.</p>
          <h2>10. Acceptation</h2><p>La souscription au service implique l’acceptation de ces conditions.</p>`
      }
    }
  };

  function getPageKey() {
    const page = window.location.pathname.split("/").pop() || "index.html";
    return page || "index.html";
  }

  function setText(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el && value !== undefined) el.textContent = value;
  }

  function setHtml(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el && value !== undefined) el.innerHTML = value;
  }

  function setMetaDescription(value) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta && value) meta.setAttribute("content", value);
  }

  function applyCommon(lang) {
    const data = common[lang];
    if (!data) return;

    document.documentElement.lang = lang;
    document.querySelectorAll(".main-nav a").forEach((link, index) => {
      if (data.nav[index]) link.textContent = data.nav[index];
    });
    document.querySelectorAll(".legal-header nav a").forEach((link, index) => {
      if (data.nav[index]) link.textContent = data.nav[index];
    });

    setText(".footer-brand p", data.footerTagline);
    setText(".footer-contact h2", data.contact);
    document.querySelectorAll(".footer-legal a").forEach((link, index) => {
      if (data.legal[index]) link.textContent = data.legal[index];
    });
    setText(".copyright", data.copyright);

    setText("#email-modal-title", data.emailTitle);
    const labels = document.querySelectorAll(".email-form label");
    [data.name, data.email, data.message].forEach((text, index) => {
      const label = labels[index];
      if (!label) return;
      const control = label.querySelector("input, textarea");
      label.childNodes[0].nodeValue = `${text}\n          `;
      if (control) label.appendChild(control);
    });
    setText(".email-form button", data.prepare);
    document.querySelectorAll(".modal-close, .modal-backdrop").forEach((el) => {
      el.setAttribute("aria-label", data.close);
    });
  }

  function applyIndex(lang, data) {
    document.title = data.title;
    setMetaDescription(data.description);
    setHtml(".hero h1", data.h1);
    setText(".hero-subtitle", data.subtitle);
    setHtml(".hero .lead", data.lead);
    document.querySelectorAll(".hero-copy p:not(.lead)").forEach((p, index) => {
      const values = [data.hero2, data.hero3, data.hero4, data.hero5];
      if (values[index]) p.innerHTML = values[index];
    });
    if (document.querySelector(".help-copy")) {
      setText(".story .button", data.more);
      applyGuide(data);
      return;
    }
    setText(".story .eyebrow", data.eyebrow);
    setText(".story h2", data.storyTitle);
    const storyParagraphs = document.querySelectorAll(".story-copy p:not(.eyebrow)");
    [data.story1, data.story2, data.story3].forEach((text, index) => {
      if (storyParagraphs[index]) storyParagraphs[index].textContent = text;
    });
    setText(".story .button", data.more);
    applyGuide(data);
  }

  function applyGuide(data) {
    setText(".guide h1, .guide h2", data.guideTitle);
    document.querySelectorAll(".step").forEach((step, index) => {
      const item = data.steps[index];
      if (!item) return;
      setHtml("h3", `<span aria-hidden="true">${item[0]}</span> ${item[1]}`, step);
      setText("p", item[2], step);
    });
    document.querySelectorAll(".outline-button").forEach((button) => {
      if (button.textContent.trim().match(/formulario|form/i)) button.textContent = data.form;
    });
    setText(".faq-section h2", data.faqTitle);
    document.querySelectorAll(".faq-item").forEach((item, index) => {
      const faqItem = data.faq?.[index];
      if (!faqItem) return;
      setText("summary", faqItem[0], item);
      setHtml("p", faqItem[1], item);
    });
    setText(".destination h2", data.destination);
  }

  function applyAbout(lang, data) {
    document.title = data.title;
    setMetaDescription(data.description);
    setText(".about-card .eyebrow", data.eyebrow);
    setText(".about-card h1", data.h1);
    document.querySelectorAll(".about-card p:not(.eyebrow)").forEach((p, index) => {
      if (data.paragraphs[index]) p.textContent = data.paragraphs[index];
    });
    setText(".about-card .button", data.plan);
    setText(".about-curiosities h2", data.curiositiesTitle);
    document.querySelectorAll(".about-curiosities li").forEach((li, index) => {
      if (data.curiosities[index]) li.innerHTML = data.curiosities[index];
    });
  }

  function applyLegal(data) {
    if (!data) return;
    document.title = data.title;
    const documentRoot = document.querySelector(".legal-document");
    if (documentRoot && data.html) documentRoot.innerHTML = data.html;
  }

  function applyLanguage(lang) {
    const pageKey = getPageKey();
    const pageData = pages[pageKey]?.[lang];
    const legalData = legalPages[pageKey]?.[lang];
    applyCommon(lang);
    if (legalData) {
      applyLegal(legalData);
      document.querySelectorAll("[data-lang-switch]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.langSwitch === lang);
      });
      localStorage.setItem("siteLang", lang);
      return;
    }
    if (!pageData) {
      document.querySelectorAll("[data-lang-switch]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.langSwitch === lang);
      });
      localStorage.setItem("siteLang", lang);
      return;
    }
    if (pageKey === "sobre-mi.html") applyAbout(lang, pageData);
    else if (pageKey === "servicios.html") {
      document.title = pageData.title;
      setMetaDescription(pageData.description);
      applyGuide(pageData);
    } else applyIndex(lang, pageData);

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langSwitch === lang);
    });
    localStorage.setItem("siteLang", lang);
  }

  const initialLang = localStorage.getItem("siteLang") || "es";
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
  });
  applyLanguage(initialLang);
})();
