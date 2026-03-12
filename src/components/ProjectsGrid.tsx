'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { data } from '@/components/projects/ConfigData';
import { Card } from '@/components/projects/apple-cards-carousel';

const ProjectsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="featured-projects" className="w-full py-12 scroll-mt-20">
      <div className="flex flex-col items-center mb-10 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4"
        >
          <Sparkles className="w-3 h-3" />
          <span>Portfolio</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl px-4 text-base md:text-lg">
          Una selección de mis trabajos, desde aplicaciones impulsadas por IA hasta plataformas SaaS escalables.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {data.map((card, index) => (
          <Card key={card.title} card={card} index={index} layout={true} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;
