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
          description: "Dîners de gala, lancements de produits, séminaires prestigieux. Notre expertise transforme vos événements d'entreprise en expériences mémorables pour sublimer vos clients et vos collaborateurs.",
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
      ],
    },
  },

  // Gastronomy
  gastronomy: {
    label: { fr: "LA CARTE", en: "THE MENU", ar: "القائمة" },
    title1: { fr: "L'art du", en: "The art of", ar: "فن" },
    title2: { fr: "dressage", en: "plating", ar: "التقديم" },
    description: {
      fr: "Chaque assiette est une toile, chaque saveur une émotion. Nos chefs transforment les produits d'exception en œuvres éphémères.",
      en: "Each plate is a canvas, each flavor an emotion. Our chefs transform exceptional ingredients into ephemeral works of art.",
      ar: "كل طبق لوحة فنية، وكل نكهة عاطفة. يحوّل طهاتنا المكونات الاستثنائية إلى أعمال فنية عابرة.",
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
    title1: { fr: "Prestigieuses", en: "Prestigious", ar: "مراجع" },
    title2: { fr: "références", en: "references", ar: "مرموقة" },
    items: {
      fr: [
        { name: "Isabelle & Thomas D.", event: "Mariage — Château de Versailles", quote: "La Table Raffinée a transformé notre mariage en un rêve éveillé. Chaque bouchée était une œuvre d'art, chaque service d'une élégance rare. Nos invités en parlent encore." },
        { name: "Famille Leroy", event: "Baptême — Villa Borghese", quote: "Une délicatesse absolue, tant dans les saveurs que dans l'attention portée aux détails. Le buffet était somptueux et les pâtisseries ont enchanté petits et grands." },
        { name: "Groupe Hermès", event: "Gala annuel — Palais de Tokyo", quote: "Un partenaire d'exception pour nos événements les plus prestigieux. Le professionnalisme et la créativité culinaire sont tout simplement incomparables." },
      ],
      en: [
        { name: "Isabelle & Thomas D.", event: "Wedding — Château de Versailles", quote: "La Table Raffinée transformed our wedding into a waking dream. Every bite was a work of art, every course of rare elegance. Our guests still talk about it." },
        { name: "The Leroy Family", event: "Christening — Villa Borghese", quote: "Absolute delicacy, both in flavors and attention to detail. The buffet was sumptuous and the pastries delighted young and old alike." },
        { name: "Hermès Group", event: "Annual Gala — Palais de Tokyo", quote: "An exceptional partner for our most prestigious events. The professionalism and culinary creativity are simply unmatched." },
      ],
      ar: [
        { name: "إيزابيل وتوماس د.", event: "زفاف — قصر فرساي", quote: "حوّلت La Table Raffinée حفل زفافنا إلى حلم يقظة. كل لقمة كانت عملاً فنياً، وكل خدمة بأناقة نادرة. ضيوفنا ما زالوا يتحدثون عنها." },
        { name: "عائلة لوروا", event: "تعميد — فيلا بورغيزي", quote: "رقة مطلقة، سواء في النكهات أو في الاهتمام بالتفاصيل. كان البوفيه فاخراً والمعجنات أسعدت الصغار والكبار." },
        { name: "مجموعة هيرميس", event: "حفل سنوي — قصر طوكيو", quote: "شريك استثنائي لأرقى فعالياتنا. الاحترافية والإبداع في الطهي لا مثيل لهما ببساطة." },
      ],
    },
  },

  // Footer / Contact
  footer: {
    label: { fr: "CONTACT", en: "CONTACT", ar: "اتصل بنا" },
    title1: { fr: "Demande de", en: "Request a", ar: "طلب" },
    title2: { fr: "consultation privée", en: "private consultation", ar: "استشارة خاصة" },
    description: {
      fr: "Partagez-nous votre vision. Notre équipe vous recontacte sous 24 heures pour créer ensemble un événement à votre image.",
      en: "Share your vision with us. Our team will contact you within 24 hours to create an event that reflects you.",
      ar: "شاركونا رؤيتكم. سيتواصل فريقنا معكم خلال 24 ساعة لنصنع معاً حدثاً يعكس شخصيتكم.",
    },
    namePlaceholder: { fr: "Votre nom", en: "Your name", ar: "اسمكم" },
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
