'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { profileInfo } from '@/lib/config-loader';

export function Presentation() {
  // Personal information now loaded from configuration
  const profile = profileInfo;

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full py-2 font-sans">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:gap-6">

        {/* Main Info Card - Bento Item */}
        <div className="col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-muted/20 p-6 shadow-sm md:col-span-4 lg:p-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col space-y-2"
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
              {profile.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Fullstack Developer</span>
              <div className="bg-border hidden h-1 w-1 rounded-full md:block" />
              <p className="text-muted-foreground flex items-center gap-1"><span className="text-lg">📍</span> {profile.location}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="mt-6"
          >
            <p className="text-foreground/90 text-lg leading-relaxed md:text-xl">
              {profile.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Frontend Architecture', "Spring Boot", "Nest.js", "Express.js", ".Net Core"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-sm shadow-sm transition-colors hover:bg-muted"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Image Card - Bento Item */}
        <div className="col-span-1 aspect-square md:col-span-2 relative h-full min-h-[300px] w-full overflow-hidden rounded-3xl border border-border/50 shadow-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="h-full w-full relative"
          >
            <Image
              src={profile.src}
              alt={profile.name}
              fill
              className="object-cover object-center transition-transform hover:scale-105 duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = profile.fallbackSrc;
              }}
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Presentation;
