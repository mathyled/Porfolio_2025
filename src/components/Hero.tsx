import { Mail, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

function Hero() {
  const { language } = useLanguage();

  const handleContact = () => {
    window.location.href = 'mailto:mathiasimagine@gmail.com';
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {t('hero_title', language)}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('hero_subtitle', language)}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={handleContact}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center gap-2 font-medium text-lg shadow-lg"
          >
            <Mail className="w-5 h-5" />
            {t('hero_cta', language)}
          </button>
          <button
            onClick={scrollToProjects}
            className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 font-medium text-lg"
          >
            {t('view_projects', language)}
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          <span className="px-4 py-2 bg-gray-100 rounded-full">React</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full">TypeScript</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full">Next.js</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full">Firebase</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full">Vercel AI SDK</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
