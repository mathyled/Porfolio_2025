'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layers, Sparkles } from 'lucide-react';
import { getConfig } from '@/lib/config-loader';
import Image from 'next/image';

const ProjectsGrid = () => {
  const config = getConfig();
  const projects = config.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full py-12">
      <div className="flex flex-col items-center mb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4"
        >
          <Sparkles className="w-3 h-3" />
          <span>Portfolio</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl px-4">
          A collection of my work ranging from AI-powered applications to scalable SaaS platforms.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
          >
            {/* Project Image / Placeholder */}
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Code className="w-12 h-12 text-primary/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-background/80 backdrop-blur-md border border-border/50 rounded-full text-foreground/80">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 text-[11px] font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:bg-secondary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-2 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30"
                  >
                    {link.name === 'Live Site' ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;
