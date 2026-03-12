import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { projectData, getConfig } from '@/lib/config-loader';

// Get project content from configuration
const config = getConfig();
const PROJECT_CONTENT = config.projects;

// ProjectContent component - now uses config data
const ProjectContent = ({ project }: { project: { title: string } }) => {
  const projectData = PROJECT_CONTENT.find(p => p.title === project.title);

  if (!projectData) return null;

  return (
    <div className="w-full space-y-10 p-0">
      {/* Description & Metadata */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-sm font-semibold tracking-wide uppercase text-primary/80">
          <span>{projectData.date}</span>
          {projectData.status && (
            <>
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <span className={`px-3 py-1 rounded-full text-[10px] ${
                projectData.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-400' :
                projectData.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-400' :
                'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-400'
              }`}>
                {projectData.status}
              </span>
            </>
          )}
        </div>

        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl font-sans font-light">
          {projectData.description}
        </p>
      </div>

      {/* Achievements & Metrics */}
      {(projectData.achievements || projectData.metrics) && (
        <div className="grid md:grid-cols-2 gap-8 ring-1 ring-neutral-200 dark:ring-neutral-800 p-8 rounded-3xl bg-neutral-50/50 dark:bg-neutral-800/20">
          {projectData.achievements && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Achievements</h4>
              <ul className="space-y-2">
                {projectData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {projectData.metrics && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {projectData.metrics.map((metric, index) => (
                  <div key={index} className="px-4 py-3 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <span className="text-lg font-bold text-primary">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tech Stack */}
      {projectData.techStack && projectData.techStack.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-xl px-4 py-2 text-sm font-medium border border-neutral-200 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Project Links</h4>
          <div className="flex flex-wrap gap-4">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                <Link className="h-4 w-4" />
                <span className="font-semibold">{link.name}</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export - now dynamically generated from config
export const data = projectData.map(project => ({
  category: project.category,
  title: project.title,
  src: project.src,
  content: <ProjectContent project={{ title: project.title }} />,
}));
