export type Locale = "ru" | "en";
type Project = {
  name: string;
  category: string;
  year: string;
  imageAlt: string;
};
type Service = { title: string; description: string };
type Copy = {
  navigationLabel: string;
  scroll: string;
  nav: { id: string; label: string }[];
  hero: {
    kicker: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    primary: string;
    secondary: string;
    orbLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    emphasis: string;
    body: string;
    link: string;
  };
  work: { eyebrow: string; title: string; view: string };
  projects: Project[];
  services: { eyebrow: string; title: string; items: Service[] };
  process: { eyebrow: string; title: string; body: string; steps: string[] };
  reasons: { eyebrow: string; items: { title: string; text: string }[] };
  stats: { eyebrow: string; items: { value: string; label: string }[] };
  cta: { eyebrow: string; lineOne: string; lineTwo: string; button: string };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    name: string;
    email: string;
    company: string;
    project: string;
    select: string;
    budget: string;
    budgetSelect: string;
    message: string;
    submit: string;
    sent: string;
  };
  socials: { name: string; url: string }[];
  footer: { tagline: string; location: string };
};
const projectRows = [
  [
    "NOIR",
    "Digital Experience / Web Design",
    "2026",
    "Abstract midnight architecture",
  ],
  ["LUNAR", "Brand Identity / Art Direction", "2025", "Blue lunar surface"],
  [
    "ORBIT",
    "3D / Creative Development",
    "2025",
    "Futuristic architectural form",
  ],
  [
    "NOVA",
    "Web Development / Interactive",
    "2024",
    "Monochrome night landscape",
  ],
] as const;
const projects = projectRows.map(([name, category, year, imageAlt]) => ({
  name,
  category,
  year,
  imageAlt,
}));
const socials = [
  { name: "Telegram", url: "https://t.me/your_studio" },
  { name: "Instagram", url: "https://instagram.com/your_studio" },
  { name: "Behance", url: "https://behance.net/your_studio" },
];
export const content: Record<Locale, Copy> = {
  ru: {
    navigationLabel: "Основная навигация",
    scroll: "листайте, чтобы войти",
    nav: [
      { id: "work", label: "Работы" },
      { id: "services", label: "Услуги" },
      { id: "about", label: "О студии" },
      { id: "process", label: "Процесс" },
      { id: "contact", label: "Контакты" },
    ],
    hero: {
      kicker: "Creative design & development studio",
      titleFirst: "Мы создаём",
      titleSecond: "цифровые миры.",
      description:
        "Сайты, визуальные системы и digital experiences для брендов, которым тесно в рамках обычного.",
      primary: "Обсудить проект",
      secondary: "Смотреть работы",
      orbLabel: "Сигнал из будущего",
    },
    about: {
      eyebrow: "01 — Манифест",
      title: "MOONVANTA — это",
      emphasis: "не просто дизайн-студия.",
      body: "Мы объединяем визуальную культуру, технологии и смелое мышление — чтобы бренды не просто появлялись в сети, а оставляли в ней след.",
      link: "Познакомиться с нами",
    },
    work: {
      eyebrow: "02 — Избранные работы",
      title: "Сигналы из нашей орбиты",
      view: "Смотреть проект",
    },
    projects,
    services: {
      eyebrow: "03 — Возможности",
      title: "От первого импульса до запуска.",
      items: [
        {
          title: "Web Design",
          description:
            "UX/UI, art direction, адаптивные интерфейсы и дизайн-системы.",
        },
        {
          title: "Web Development",
          description:
            "Современные сайты, интерактивные опыты и чистый frontend.",
        },
        {
          title: "Visual Identity",
          description:
            "Айдентика, графика и визуальные коды, которые остаются в памяти.",
        },
        {
          title: "3D / Motion",
          description: "3D-модели, CGI и выразительная цифровая пластика.",
        },
        {
          title: "Telegram Bots",
          description: "Боты, автоматизация и удобные интеграции для бизнеса.",
        },
        {
          title: "Creative Development",
          description: "Экспериментальные интерфейсы, creative coding и WebGL.",
        },
      ],
    },
    process: {
      eyebrow: "04 — Процесс",
      title: "Ясный путь к смелому результату.",
      body: "Движемся быстро, но не торопимся с решениями. Каждая фаза — пространство для точности и новых идей.",
      steps: ["Исследование", "Концепция", "Дизайн", "Разработка", "Запуск"],
    },
    reasons: {
      eyebrow: "05 — Почему MOONVANTA",
      items: [
        { title: "Design-first", text: "Начинаем с идеи, а не с шаблона." },
        {
          title: "Built with purpose",
          text: "У каждого пикселя есть причина быть здесь.",
        },
        {
          title: "Focused work",
          text: "Меньше бюрократии. Больше внимания проекту.",
        },
        {
          title: "Design × Technology",
          text: "Соединяем культуру дизайна и код.",
        },
      ],
    },
    stats: {
      eyebrow: "В цифрах",
      items: [
        { value: "01", label: "студия" },
        { value: "06", label: "направлений" },
        { value: "∞", label: "идей" },
        { value: "24/7", label: "creative mode" },
      ],
    },
    cta: {
      eyebrow: "Ваш ход",
      lineOne: "Есть идея?",
      lineTwo: "Давайте дадим ей форму.",
      button: "Начать проект",
    },
    contact: {
      eyebrow: "06 — Контакт",
      title: "Начнём разговор.",
      body: "Расскажите о задаче — мы вернёмся с первым импульсом в течение двух рабочих дней.",
      name: "Ваше имя",
      email: "Email",
      company: "Компания",
      project: "Тип проекта",
      select: "Выберите направление",
      budget: "Бюджет",
      budgetSelect: "Выберите диапазон",
      message: "Расскажите о проекте",
      submit: "Отправить запрос",
      sent: "Запрос отправлен",
    },
    socials,
    footer: {
      tagline: "Creative Design & Development Studio",
      location: "Bishkek · Worldwide",
    },
  },
  en: {
    navigationLabel: "Main navigation",
    scroll: "scroll to enter",
    nav: [
      { id: "work", label: "Work" },
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "process", label: "Process" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      kicker: "Creative design & development studio",
      titleFirst: "We design",
      titleSecond: "digital worlds.",
      description:
        "Websites, visual systems and digital experiences for brands that refuse to blend in.",
      primary: "Start a project",
      secondary: "Explore work",
      orbLabel: "Signal from the future",
    },
    about: {
      eyebrow: "01 — Manifest",
      title: "MOONVANTA is",
      emphasis: "not just a design studio.",
      body: "We combine visual culture, technology and bold thinking so brands don’t just appear online — they leave a lasting trace.",
      link: "Get to know us",
    },
    work: {
      eyebrow: "02 — Selected work",
      title: "Signals from our orbit",
      view: "View project",
    },
    projects,
    services: {
      eyebrow: "03 — Capabilities",
      title: "From first spark to launch.",
      items: [
        {
          title: "Web Design",
          description:
            "UX/UI, art direction, responsive interfaces and design systems.",
        },
        {
          title: "Web Development",
          description:
            "Modern websites, interactive experiences and clean frontend.",
        },
        {
          title: "Visual Identity",
          description:
            "Identity, graphic design and visual codes that stay with you.",
        },
        {
          title: "3D / Motion",
          description: "3D objects, CGI and expressive digital matter.",
        },
        {
          title: "Telegram Bots",
          description: "Bots, automation and practical business integrations.",
        },
        {
          title: "Creative Development",
          description: "Experimental interfaces, creative coding and WebGL.",
        },
      ],
    },
    process: {
      eyebrow: "04 — Process",
      title: "A clear path to a bold result.",
      body: "We move fast, but never rush decisions. Each phase creates room for precision and new ideas.",
      steps: ["Discovery", "Concept", "Design", "Development", "Launch"],
    },
    reasons: {
      eyebrow: "05 — Why MOONVANTA",
      items: [
        {
          title: "Design-first",
          text: "We start with an idea, not a template.",
        },
        {
          title: "Built with purpose",
          text: "Every pixel has a reason to be here.",
        },
        {
          title: "Focused work",
          text: "Less bureaucracy. More focus on the work.",
        },
        {
          title: "Design × Technology",
          text: "We connect design culture with code.",
        },
      ],
    },
    stats: {
      eyebrow: "In numbers",
      items: [
        { value: "01", label: "studio" },
        { value: "06", label: "disciplines" },
        { value: "∞", label: "ideas" },
        { value: "24/7", label: "creative mode" },
      ],
    },
    cta: {
      eyebrow: "Your move",
      lineOne: "Have an idea?",
      lineTwo: "Let’s give it a form.",
      button: "Start a project",
    },
    contact: {
      eyebrow: "06 — Contact",
      title: "Let’s start a conversation.",
      body: "Tell us what you’re building. We’ll return with a first signal within two business days.",
      name: "Your name",
      email: "Email",
      company: "Company",
      project: "Project type",
      select: "Select a discipline",
      budget: "Budget",
      budgetSelect: "Select a range",
      message: "Tell us about your project",
      submit: "Send inquiry",
      sent: "Inquiry sent",
    },
    socials,
    footer: {
      tagline: "Creative Design & Development Studio",
      location: "Bishkek · Worldwide",
    },
  },
};
