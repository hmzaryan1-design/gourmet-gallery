export type Language = "fr" | "en" | "ar";

export const translations = {
  // Nav
  nav: {
    philosophy: { fr: "Philosophie", en: "Philosophy", ar: "فلسفتنا" },
    services: { fr: "Prestations", en: "Services", ar: "خدماتنا" },
    gastronomy: { fr: "Gastronomie", en: "Gastronomy", ar: "فن الطهي" },
    testimonials: { fr: "Témoignages", en: "Testimonials", ar: "شهادات" },
    contact: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
  },

  // Hero
  hero: {
    title1: {
      fr: "L'Art de Recevoir,",
      en: "The Art of Hosting,",
      ar: "فن الضيافة،",
    },
    title2: {
      fr: "L'Excellence à Votre Table.",
      en: "Excellence at Your Table.",
      ar: "التميز على مائدتكم.",
    },
    subtitle: {
      fr: "Traiteur d'exception à Casablanca pour vos événements précieux.\nMariages, baptêmes et galas : vivez un instant inoubliable avec notre cuisine raffinée.",
      en: "Exceptional catering for your most precious events.\nWeddings, christenings, galas — every moment becomes unforgettable.",
      ar: "تقديم طعام استثنائي لأغلى مناسباتكم.\nحفلات زفاف، تعميد، حفلات — كل لحظة تصبح لا تُنسى.",
    },
    cta: {
      fr: "ORGANISER VOTRE ÉVÉNEMENT",
      en: "PLAN YOUR EVENT",
      ar: "نظّم حدثك",
    },
  },

  // Philosophy
  philosophy: {
    label: { fr: "NOTRE PHILOSOPHIE", en: "OUR PHILOSOPHY", ar: "فلسفتنا" },
    title1: {
      fr: "Là où la gastronomie",
      en: "Where gastronomy",
      ar: "حيث يلتقي فن الطهي",
    },
    title2: {
      fr: "rencontre l'art de vivre",
      en: "meets the art of living",
      ar: "بفن الحياة",
    },
    description: {
      fr: "Sublimer l'instant, orchestrer l'émotion. La Table Raffinée transforme vos réceptions en moments de prestige, mêlant scénographie élégante et art culinaire d'exception. En sélectionnant des ingrédients rares pour des menus sur-mesure, nos équipes imaginent des événements singuliers où chaque détail est une célébration de votre art de recevoir.",
      en: "For over twenty years, La Table Raffinée has elevated every event into a symphony of flavors. Our chefs passionately select the finest ingredients — truffles, lobsters, fresh herbs from our gardens — to create bespoke menus that tell your story.",
      ar: "منذ أكثر من عشرين عامًا، ترتقي La Table Raffinée بكل حدث إلى سيمفونية من النكهات. يختار طهاتنا بشغف أرقى المكونات — الكمأة، والكركند، والأعشاب الطازجة من حدائقنا — لابتكار قوائم طعام مخصصة تروي قصتكم.",
    },
    pillars: {
      fr: [
        { title: "Produits d'Exception", desc: "Sélection rigoureuse de produits nobles, locaux et de saison." },
        { title: "Savoir-Faire Artisanal", desc: "Chaque plat est une œuvre, dressé à la pince avec précision." },
        { title: "Signature Unique", desc: "Votre événement est une pièce unique. Nous façonnons chaque détail à votre image." },
      ],
      en: [
        { title: "Exceptional Ingredients", desc: "Rigorous selection of noble, local, and seasonal products." },
        { title: "Artisanal Craftsmanship", desc: "Each dish is a work of art, plated with precision." },
        { title: "Absolute Bespoke", desc: "Your event is unique, and so is our service." },
      ],
      ar: [
        { title: "مكونات استثنائية", desc: "اختيار دقيق لمنتجات نبيلة ومحلية وموسمية." },
        { title: "حرفية يدوية", desc: "كل طبق هو عمل فني، يُقدّم بدقة متناهية." },
        { title: "تخصيص مطلق", desc: "حدثكم فريد، وكذلك خدمتنا." },
      ],
    },
  },

  // Services
  services: {
    label: { fr: "NOS PRESTATIONS", en: "OUR SERVICES", ar: "خدماتنا" },
    title1: {
      fr: "Des prestations",
      en: "Exceptional",
      ar: "خدمات",
    },
    title2: {
      fr: "d'exception",
      en: "services",
      ar: "استثنائية",
    },
    items: {
      fr: [
        {
          title: "Mariages",
          subtitle: "Le plus beau jour de votre vie, sublimé.",
          description: "De la cérémonie au dîner, nous orchestrons chaque détail culinaire avec une élégance inégalée. Menus dégustation, cocktails signature, pièce montée majestueuse.",
        },
        {
          title: "Baptêmes & Événements Privés",
          subtitle: "Des moments de grâce en famille.",
          description: "Buffets raffinés, pâtisseries délicates, et une attention particulière portée aux plus jeunes convives. Chaque célébration familiale mérite l'exception.",
        },
        {
          title: "Galas & Corporate",
          subtitle: "L'excellence au service de votre image.",
          description: "Notre expertise transforme vos événements d'entreprise en expériences mémorables : dîners de gala, lancements de produits, séminaires ou formations d'équipe.",
        },
        {
          title: "Décoration & Scénographie",
          subtitle: "L'art de créer des ambiances inoubliables.",
          description: "Décoration florale, mise en lumière, scénographies thématiques — nous concevons des univers visuels sur-mesure qui subliment chaque instant de votre événement.",
        },
        {
          title: "Organisation & Coordination",
          subtitle: "Votre sérénité, notre engagement.",
          description: "De la planification à l'exécution, notre équipe d'organisateurs coordonne chaque prestataire et chaque étape pour un événement fluide et sans stress.",
        },
        {
          title: "Sécurité & Accueil",
          subtitle: "Un accueil irréprochable, une sécurité totale.",
          description: "Agents de sécurité professionnels, hôtesses d'accueil élégantes et service de protocole pour garantir le confort et la tranquillité de vos invités.",
        },
        {
          title: "Service Voiturier",
          subtitle: "L'élégance dès l'arrivée.",
          description: "Un service de voiturier discret et professionnel pour accueillir vos convives avec distinction et assurer une expérience premium du premier au dernier instant.",
        },
        {
          title: "Location de Salles",
          subtitle: "Des lieux d'exception pour des moments rares.",
          description: "Accès à un réseau de salles et domaines prestigieux à Casablanca et au-delà. Nous vous accompagnons dans le choix du cadre idéal pour votre réception.",
        },
        {
          title: "Plateau Artistique",
          subtitle: "L'âme musicale de votre soirée.",
          description: "Orchestres, DJ, artistes ou groupes de musique : nous composons le plateau artistique idéal, soutenu par une sonorisation de pointe et des écrans géants haute définition, pour donner à votre événement une atmosphère unique et vibrante.",
        },
      ],
      en: [
        {
          title: "Weddings",
          subtitle: "The most beautiful day of your life, elevated.",
          description: "From ceremony to dinner, we orchestrate every culinary detail with unmatched elegance. Tasting menus, signature cocktails, spectacular wedding cake.",
        },
        {
          title: "Christenings & Private Events",
          subtitle: "Moments of grace with family.",
          description: "Refined buffets, delicate pastries, and special attention to the youngest guests. Every family celebration deserves excellence.",
        },
        {
          title: "Galas & Corporate",
          subtitle: "Excellence at the service of your image.",
          description: "Gala dinners, product launches, prestigious seminars. Our expertise transforms your corporate events into memorable experiences.",
        },
        {
          title: "Decoration & Scenography",
          subtitle: "The art of creating unforgettable atmospheres.",
          description: "Floral décor, lighting design, thematic scenography — we create bespoke visual worlds that elevate every moment of your event.",
        },
        {
          title: "Planning & Coordination",
          subtitle: "Your peace of mind, our commitment.",
          description: "From planning to execution, our team coordinates every vendor and every step for a seamless, stress-free event.",
        },
        {
          title: "Security & Hospitality",
          subtitle: "Impeccable welcome, total security.",
          description: "Professional security agents, elegant hostesses and protocol service to ensure the comfort and peace of mind of your guests.",
        },
        {
          title: "Valet Service",
          subtitle: "Elegance from the moment of arrival.",
          description: "A discreet and professional valet service to welcome your guests with distinction and ensure a premium experience from start to finish.",
        },
        {
          title: "Venue Rental",
          subtitle: "Exceptional venues for rare moments.",
          description: "Access to a network of prestigious halls and estates in Casablanca and beyond. We guide you in choosing the perfect setting for your reception.",
        },
        {
          title: "Entertainment",
          subtitle: "The musical soul of your evening.",
          description: "Orchestras, DJs, live artists, music bands — we curate the entertainment lineup that gives your event a unique and vibrant atmosphere.",
        },
      ],
      ar: [
        {
          title: "حفلات الزفاف",
          subtitle: "أجمل يوم في حياتكم، بلمسة راقية.",
          description: "من الحفل إلى العشاء، ننسق كل تفصيل بأناقة لا مثيل لها. قوائم تذوق، كوكتيلات مميزة، كعكة زفاف مذهلة.",
        },
        {
          title: "التعميد والمناسبات الخاصة",
          subtitle: "لحظات من النعمة مع العائلة.",
          description: "بوفيهات راقية، معجنات رقيقة، واهتمام خاص بأصغر الضيوف. كل احتفال عائلي يستحق التميز.",
        },
        {
          title: "الحفلات الرسمية والشركات",
          subtitle: "التميز في خدمة صورتكم.",
          description: "عشاءات غالا، إطلاق منتجات، ندوات مرموقة. خبرتنا تحوّل فعالياتكم إلى تجارب لا تُنسى.",
        },
        {
          title: "الديكور والسينوغرافيا",
          subtitle: "فن خلق أجواء لا تُنسى.",
          description: "ديكورات زهرية، إضاءة فنية، سينوغرافيا موضوعية — نبتكر عوالم بصرية مخصصة ترتقي بكل لحظة من حدثكم.",
        },
        {
          title: "التنظيم والتنسيق",
          subtitle: "راحة بالكم، التزامنا.",
          description: "من التخطيط إلى التنفيذ، فريقنا ينسق كل مزود وكل مرحلة لحدث سلس وخالٍ من التوتر.",
        },
        {
          title: "الأمن والاستقبال",
          subtitle: "استقبال لا تشوبه شائبة، أمان تام.",
          description: "عناصر أمن محترفون، مضيفات أنيقات وخدمة بروتوكول لضمان راحة وطمأنينة ضيوفكم.",
        },
        {
          title: "خدمة صف السيارات",
          subtitle: "الأناقة منذ لحظة الوصول.",
          description: "خدمة صف سيارات راقية واحترافية لاستقبال ضيوفكم بتميز وضمان تجربة فاخرة من البداية حتى النهاية.",
        },
        {
          title: "تأجير القاعات",
          subtitle: "أماكن استثنائية للحظات نادرة.",
          description: "وصول إلى شبكة من القاعات والأملاك الفاخرة في الدار البيضاء وخارجها. نرافقكم في اختيار الإطار المثالي لحفلكم.",
        },
        {
          title: "الفقرات الفنية",
          subtitle: "الروح الموسيقية لسهرتكم.",
          description: "أوركسترا، دي جي، فنانون حيّون، فرق موسيقية — نؤلف البرنامج الفني الذي يمنح حدثكم أجواءً فريدة ونابضة بالحياة.",
        },
      ],
    },
  },

  // Gastronomy
  gastronomy: {
    label: { fr: "LA CARTE", en: "THE MENU", ar: "القائمة" },
    title1: { fr: "Nos", en: "Our", ar: "خدماتنا" },
    title2: { fr: "prestations", en: "services", ar: "المتميزة" },
    description: {
      fr: "Buffets d'exception, tables somptueuses et réceptions en plein air — nous orchestrons chaque détail pour sublimer vos événements les plus précieux.",
      en: "Exceptional buffets, sumptuous table settings and outdoor receptions — we orchestrate every detail to elevate your most precious events.",
      ar: "بوفيهات استثنائية، موائد فاخرة واستقبالات في الهواء الطلق — ننسّق كل تفصيل لنرتقي بأغلى مناسباتكم.",
    },
    dishes: {
      fr: ["Buffet Gastronomique", "Art de la Table", "Réception en Plein Air", "Buffet Jardin", "Accueil Événementiel"],
      en: ["Gourmet Buffet", "Table Art", "Outdoor Reception", "Garden Buffet", "Event Welcome"],
      ar: ["بوفيه فاخر", "فن المائدة", "استقبال في الهواء الطلق", "بوفيه الحديقة", "استقبال الفعاليات"],
    },
    dishDescriptions: {
      fr: [
        "Un buffet chaud somptueux aux saveurs raffinées et généreuses",
        "Dressage en or et blanc pour une élégance absolue",
        "Une réception champêtre sublimée par une décoration florale d'exception",
        "Un écrin de verdure avec verrines, fruits frais et pâtisseries artisanales",
        "Un accueil prestigieux à la hauteur de vos événements les plus mémorables"
      ],
      en: [
        "A sumptuous hot buffet with refined and generous flavors",
        "Gold and white table setting for absolute elegance",
        "A countryside reception elevated by exceptional floral decoration",
        "A garden oasis with verrines, fresh fruits and artisanal pastries",
        "A prestigious welcome worthy of your most memorable events"
      ],
      ar: [
        "بوفيه ساخن فاخر بنكهات راقية وسخية",
        "تزيين مائدة بالذهب والأبيض لأناقة مطلقة",
        "استقبال ريفي يرتقي بزخرفة زهرية استثنائية",
        "واحة خضراء مع كؤوس صغيرة وفواكه طازجة ومعجنات حرفية",
        "استقبال مرموق يليق بأكثر فعالياتكم تميزاً"
      ],
    },
  },

  // Testimonials
  testimonials: {
    label: { fr: "TÉMOIGNAGES", en: "TESTIMONIALS", ar: "شهادات" },
    title1: { fr: "Nos références", en: "Our references", ar: "مراجعنا" },
    title2: { fr: "& témoignages", en: "& testimonials", ar: "وشهادات" },
    items: {
      fr: [
        { name: "Salma & Youssef B.", event: "Mariage — Riad à Casablanca", quote: "La Table Raffinée a transformé notre mariage en un rêve éveillé. Chaque bouchée était une œuvre d'art, chaque service d'une élégance rare. Nos invités en parlent encore." },
        { name: "M. Robin De Michelena, PDG de DEKRA Automotive Maroc", event: "Centenaire DEKRA — 300 Convives", quote: "Je tiens à vous remercier personnellement pour la parfaite organisation du centenaire de DEKRA Automotive Maroc. Ce fut un franc succès, tant auprès de nos 300 collaborateurs que de nos clients. Votre accompagnement a été déterminant pour garantir une qualité de service exemplaire, en parfaite coordination avec nos équipes. Nous ferons sans aucun doute appel à votre expertise pour nos prochains événements." },
        { name: "Famille Bennani", event: "Baptême — Villa Anfa", quote: "Une délicatesse absolue, tant dans les saveurs que dans l'attention portée aux détails. Le buffet était somptueux et les pâtisseries ont enchanté petits et grands." },
        { name: "Groupe Saham", event: "Gala annuel — Hyatt Regency Casablanca", quote: "Le résultat a été à la hauteur de nos attentes. Nous avons apprécié le sens du détail dans tous les aspects de l'organisation de notre événement. Nos collaborateurs et invités en étaient satisfaits : une excellence opérationnelle rare et un sens du prestige qui a marqué nos invités, qu'il s'agisse aussi bien de nos séminaires ou de notre dîner de gala." },
      ],
      en: [
        { name: "Salma & Youssef B.", event: "Wedding — Riad in Casablanca", quote: "La Table Raffinée transformed our wedding into a waking dream. Every bite was a work of art, every course of rare elegance. Our guests still talk about it." },
        { name: "Mr. Robin De Michelena, CEO of DEKRA Automotive Maroc", event: "DEKRA Centenary — 300 Guests", quote: "I wanted to personally thank you for the perfect organization of DEKRA Automotive Maroc's centenary. It was a great success, both with our 300 employees and our clients. Your support was decisive in ensuring exemplary quality of service, in perfect coordination with our teams. We will undoubtedly call on your expertise for our next events." },
        { name: "The Bennani Family", event: "Christening — Villa Anfa", quote: "Absolute delicacy, both in flavors and attention to detail. The buffet was sumptuous and the pastries delighted young and old alike." },
        { name: "Saham Group", event: "Annual Gala — Hyatt Regency Casablanca", quote: "The result exceeded our expectations. We appreciated the attention to detail in every aspect of the organization. Our employees and guests were delighted: rare operational excellence and a sense of prestige that made a mark, whether for our seminars or our gala dinner." },
      ],
      ar: [
        { name: "سلمى ويوسف ب.", event: "زفاف — رياض في الدار البيضاء", quote: "حوّلت La Table Raffinée حفل زفافنا إلى حلم يقظة. كل لقمة كانت عملاً فنياً، وكل خدمة بأناقة نادرة. ضيوفنا ما زالوا يتحدثون عنها." },
        { name: "السيد روبن دي ميشيلينا، المدير العام لشركة ديكرا أوتوموتيف المغرب", event: "الذكرى المئوية لديكرا — 300 ضيف", quote: "أود أن أشكركم شخصيًا على التنظيم المثالي للذكرى المئوية لشركة ديكرا أوتوموتيف المغرب. لقد كان نجاحًا باهرًا، سواء لدى موظفينا البالغ عددهم 300 موظف أو لدى عملائنا. كان دعمكم حاسمًا في ضمان جودة خدمة مثالية، بتنسيق تام مع فرقنا. سنستعين بلا شك بخبرتكم في فعالياتنا القادمة." },
        { name: "عائلة بناني", event: "تعميد — فيلا أنفا", quote: "رقة مطلقة، سواء في النكهات أو في الاهتمام بالتفاصيل. كان البوفيه فاخراً والمعجنات أسعدت الصغار والكبار." },
        { name: "مجموعة سهام", event: "حفل سنوي — حياة ريجنسي الدار البيضاء", quote: "كانت النتيجة على قدر تطلعاتنا. لقد قدرنا الاهتمام بالتفاصيل في جميع جوانب تنظيم فعاليتنا. كان موظفونا وضيوفنا راضين للغاية: تميز تشغيلي نادر وحس بالرقي ترك بصمة لدى ضيوفنا، سواء في ندواتنا أو في عشاء الغالا الخاص بنا." },
      ],
    },
  },

  // Footer / Contact
  footer: {
    label: { fr: "CONTACT", en: "CONTACT", ar: "اتصل بنا" },
    title1: { fr: "Demande de", en: "Request a", ar: "طلب" },
    title2: { fr: "consultation privée", en: "private consultation", ar: "استشارة خاصة" },
    description: {
      fr: "Partagez avec nous vos besoins. Notre équipe vous recontacte sous 24 heures pour créer ensemble un événement à votre image.",
      en: "Share your vision with us. Our team will contact you within 24 hours to create an event that reflects you.",
      ar: "شاركونا رؤيتكم. سيتواصل فريقنا معكم خلال 24 ساعة لنصنع معاً حدثاً يعكس شخصيتكم.",
    },
    namePlaceholder: { fr: "Votre nom", en: "Your name", ar: "اسمكم" },
    phonePlaceholder: { fr: "Votre téléphone", en: "Your phone number", ar: "رقم هاتفكم" },
    emailPlaceholder: { fr: "Votre email", en: "Your email", ar: "بريدكم الإلكتروني" },
    eventLabel: { fr: "Type d'événement", en: "Event type", ar: "نوع الحدث" },
    eventOptions: {
      fr: ["Mariage", "Baptême", "Gala & Corporate", "Événement privé"],
      en: ["Wedding", "Christening", "Gala & Corporate", "Private Event"],
      ar: ["زفاف", "تعميد", "حفل رسمي وشركات", "حدث خاص"],
    },
    messagePlaceholder: {
      fr: "Décrivez votre vision...",
      en: "Describe your vision...",
      ar: "صفوا رؤيتكم...",
    },
    submitButton: {
      fr: "ENVOYER MA DEMANDE",
      en: "SEND MY REQUEST",
      ar: "أرسل طلبي",
    },
    successMessage: {
      fr: "Merci pour votre demande. Nous vous recontactons sous 24h.",
      en: "Thank you for your request. We will contact you within 24 hours.",
      ar: "شكراً لطلبكم. سنتواصل معكم خلال 24 ساعة.",
    },
    address: {
      fr: "",
      en: "",
      ar: "",
    },
    copyright: {
      fr: "© 2026 La Table Raffinée — Service sur-mesure",
      en: "© 2026 La Table Raffinée — Bespoke Service",
      ar: "© 2026 La Table Raffinée — خدمة مخصصة",
    },
  },
} as const;
