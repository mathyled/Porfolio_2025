import { ExternalLink, Video, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t, projectTranslations } from '../i18n';
import mobileAppImage from '../images/mobile-app-project.png';
import musicLearnImage from '../images/music-learn-project.png';
import ecommerceProjectImage from '../images/ecommerce-project.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  video?: string;
  github?: string;
  image?: string;
  imageAlt?: string;
}

const baseProjects = [
  {
    tech: ['React', 'Bootstrap', 'CSS Modules'],
    demo: 'https://my-ecommerce-ten-iota.vercel.app/',
    video: '#',
    github: 'https://github.com/mathyled/my_ecommerce',
    image: ecommerceProjectImage,
    imageAlt: 'Vista previa del proyecto E-Commerce Platform',
  },
  {
    tech: ['Flutter', 'Firebase', 'TypeScript'],
    // demo: '#',
    video: '#',
    github: 'https://github.com/No-Country-simulation/equipo-c23-33-mobile',
    image: mobileAppImage,
    imageAlt: 'Vista previa del proyecto Mobile App',
  },
  {
    tech: ['Next.js', 'Tailwind', 'Vercel AI SDK'],
    demo: 'https://music-learn-with-ai.vercel.app/',
    video: '#',
    github: 'https://github.com/mathyled/music_learn-with-AI',
    image: musicLearnImage,
    imageAlt: 'Vista previa del proyecto MusicLearn with AI',
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();

  const handleContact = () => {
    window.location.href = 'mailto:mathiasimagine@gmail.com';
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-gray-900 transition-all hover:shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>

      {project.image && (
        <div className="mb-4">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            className="w-full h-48 object-cover rounded-lg border border-gray-100"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            {t('demo', language)}
          </a>
        )}
        {project.video && (
          <a
            href={project.video}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <Video className="w-4 h-4" />
            {t('video', language)}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            {t('github', language)}
          </a>
        )}
      </div>

      <button
        onClick={handleContact}
        className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200"
      >
        <Mail className="w-4 h-4" />
        {t('project_ask', language)}
      </button>
    </div>
  );
}

function Projects() {
  const { language } = useLanguage();

  const projects: Project[] = projectTranslations[language].map((proj, idx) => ({
    ...proj,
    ...baseProjects[idx],
  }));

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('projects_section', language)}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('projects_description', language)}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
