'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AvailabilityData {
  availability: string;
  preferences: {
    roleTypes: string[];
    industries: string[];
    workMode: string;
    location: string;
  };
  experience: {
    internshipCompleted: string;
    freelanceWork: string;
    projectExperience: string;
  };
  skills: {
    technical: string[];
    soft: string[];
  };
  achievements: string[];
  lookingFor: {
    growthOpportunities: string;
    mentorship: string;
    impactfulWork: string;
    technicalChallenges: string;
    collaboration: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
}

interface AvailabilityCardProps {
  data?: AvailabilityData;
}

const AvailabilityCard = ({ data }: AvailabilityCardProps) => {
  const router = useRouter();


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <Image
              src="/profile.png"
              alt="Avatar de Mathias"
              width={64}
              height={64}
              className="h-full w-full object-cover object-[center_top_-5%] scale-95"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Mathias Ledesma
            </h2>
            <p className="text-muted-foreground text-sm">
              Disponible para nuevas oportunidades
            </p>
          </div>
        </div>

        {/* Enhanced Live badge with availability status */}
        <div className="mt-4 flex flex-col items-center gap-2 sm:mt-0 sm:items-end">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Disponible ahora
          </span>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Busco roles Full-time o Freelance
          </p>
        </div>
      </div>

      {/* Availability Highlight Section */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
            <Briefcase className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Estado de Disponibilidad Actual</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Estado</p>
            <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
              {data?.availability || "✅ Disponible para incorporación inmediata"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Buscando</p>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
              Roles Full-time, Proyectos Freelance y SaaS
            </p>
          </div>
        </div>
      </div>

      {/* Internship Info (Now General Opportunity Info) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Modalidad</p>
            <p className="text-muted-foreground text-sm">
              {data?.preferences.workMode || "Disponible para roles full-time con inicio inmediato"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Ubicación</p>
            <p className="text-muted-foreground text-sm">
              {data?.preferences.location || "Argentina, abierto modalidad presencial o remoto 🇦🇷"}
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Stack Tecnológico</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                {data?.skills.technical.slice(0, 4).map((skill, index) => (
                  <li key={index}>{skill}</li>
                )) || (
                    <>
                      <li>JavaScript, TypeScript, HTML/CSS</li>
                      <li>React.js, Next.js (App Router), Tailwind CSS</li>
                      <li>Node.js, NestJS, Express.js</li>
                      <li>MongoDB, PostgreSQL, Prisma</li>
                    </>
                  )}
              </ul>
              <ul className="list-disc pl-4">
                {data?.skills.technical.slice(4, 8).map((skill, index) => (
                  <li key={index}>{skill}</li>
                )) || (
                    <>
                      <li>Vercel, Docker, Git/GitHub</li>
                      <li>Java (Spring Boot), Python, Go</li>
                      <li>Arquitectura de Microservicios y SaaS</li>
                    </>
                  )}
                <li>
                  <button
                    onClick={() => router.push('/?query=¿Cuáles son tus habilidades técnicas?')}
                    className="cursor-pointer items-center text-blue-500 underline text-sm"
                  >
                    Ver más habilidades
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lo que aporto */}
      <div className="mt-10">
        <h3 className="text-foreground mb-4 text-lg font-semibold tracking-tight">
          Lo que aporto como profesional
        </h3>
        <ul className="text-foreground/80 text-sm space-y-3 list-disc list-inside marker:text-primary">
          <li>
            {data?.experience.internshipCompleted || "+3 años de experiencia en una startup EdTech escalable (Henry), con mentalidad orientada a resultados."}
          </li>
          <li>
            {data?.experience.freelanceWork || "Desarrollo integral de plataformas SaaS y ecosistemas digitales complejos como ingeniero freelance."}
          </li>
          <li>
            {data?.experience.projectExperience || "Capacidad comprobada para diseñar y lanzar productos con impacto real (actualmente sirviendo a +300 usuarios)."}
          </li>
          <li>
            Visión integral: desde arquitectura de bases de datos hasta interfaces de usuario modernas y accesibles.
          </li>
        </ul>
      </div>

      {/* Objetivo */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Objetivo</p>
        <p className="text-foreground text-sm">
          {data?.lookingFor.growthOpportunities || "Busco integrarme en equipos con desafíos tecnológicos reales donde pueda aportar mi visión técnica y proactividad."} Me apasiona trabajar con {data?.lookingFor.technicalChallenges || "tecnologías de vanguardia"} que {data?.lookingFor.impactfulWork || "resuelvan problemas del mundo real y generen un impacto significativo"}. Soy adaptable, aprendo rápido y estoy listo para contribuir en {data?.lookingFor.collaboration || "entornos innovadores y colaborativos"}. 🚀
        </p>
      </div>

    </motion.div>
  );
};

export default AvailabilityCard;
