export type Language = 'es' | 'en';

export const translations = {
  es: {
    portfolio: 'Portafolio',
    contact_button: 'Contáctame',
    hero_title: 'Frontend Engineer',
    hero_subtitle: 'Creando experiencias web excepcionales con código limpio y diseños modernos',
    hero_cta: 'Hablemos de tu proyecto',
    view_projects: 'Ver proyectos',
    projects_section: 'Proyectos Destacados',
    projects_description: 'Una selección de trabajos que demuestran mi experiencia en desarrollo frontend',
    project_ask: 'Pregúntame sobre este proyecto',
    footer_title: '¿Listo para trabajar juntos?',
    footer_description: 'Estoy disponible para proyectos freelance, posiciones full-time y colaboraciones',
    footer_button: 'Envíame un mensaje',
    footer_copyright: '© 2025 Frontend Engineer Portfolio. Todos los derechos reservados.',
    demo: 'Demo',
    video: 'Video',
    github: 'GitHub',
  },
  en: {
    portfolio: 'Portfolio',
    contact_button: 'Contact Me',
    hero_title: 'Frontend Engineer',
    hero_subtitle: 'Creating exceptional web experiences with clean code and modern design',
    hero_cta: 'Let\'s talk about your project',
    view_projects: 'View projects',
    projects_section: 'Featured Projects',
    projects_description: 'A selection of work that demonstrates my frontend development experience',
    project_ask: 'Ask me about this project',
    footer_title: 'Ready to work together?',
    footer_description: 'I\'m available for freelance projects, full-time positions, and collaborations',
    footer_button: 'Send me a message',
    footer_copyright: '© 2025 Frontend Engineer Portfolio. All rights reserved.',
    demo: 'Demo',
    video: 'Video',
    github: 'GitHub',
  },
};

export const projectTranslations = {
  es: [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, autenticación y panel de administración.',
    },
    {
      title: 'Mobile App',
      description: 'Aplicación para adoptar mascotas',
    },
    {
      title: 'MusicLearn with AI',
      description: 'Aprende inglés a través de canciones. Analiza letras con IA, genera quizzes interactivos y mejora tu vocabulario mientras disfrutas de tu música favorita.',
    },
  ],
  en: [
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce platform with shopping cart, integrated payments, and admin panel.',
    },
    {
      title: 'Mobile App',
      description: 'Application to adopt pets',
    },
    {
        title: 'MusicLearn with AI',
        description: 'Learn English through songs. Analyze lyrics with AI, generate interactive quizzes, and enhance your vocabulary while enjoying your favorite music.',
    },
  ],
};

export function getDefaultLanguage(): Language {
  const browserLanguage = navigator.language.split('-')[0];
  return (browserLanguage === 'es' ? 'es' : 'en') as Language;
}

export function t(key: keyof typeof translations.es, lang: Language): string {
  return translations[lang][key];
}
