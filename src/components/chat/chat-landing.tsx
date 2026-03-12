'use client';

import { motion } from 'framer-motion';
import { Award, Code, GraduationCap, Mail, MessageSquare, Briefcase, Sparkles, ChevronDown } from 'lucide-react';
import React from 'react';

import { presetReplies } from '@/lib/config-loader';
import ProjectsGrid from '@/components/ProjectsGrid';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
  handlePresetReply?: (question: string, reply: string, tool: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery, handlePresetReply }) => {

  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: '¿Quién eres?',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'Muéstrame tus proyectos',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: '¿Cuáles son tus habilidades técnicas?',
    },
    {
      icon: <Briefcase className="h-4 w-4" />,
      text: '¿Estás buscando nuevas oportunidades?',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: '¿Cómo puedo contactarte?',
    },
  ];

  const handleQuestionClick = (questionText: string) => {
    const preset = presetReplies[questionText as keyof typeof presetReplies];

    if (preset && handlePresetReply) {
      handlePresetReply(questionText, preset.reply, preset.tool);
    } else {
      submitQuery(questionText);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        className="flex w-full flex-col items-center px-4 py-12 md:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Welcome message */}
        <motion.div className="mb-12 text-center relative" variants={itemVariants}>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 mx-auto w-fit"
          >
            <Sparkles className="w-3 h-3" />
            <span>AI-Native Portfolio v2.1</span>
          </motion.div>
          <h1 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            I'm Mathias
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mx-auto max-w-lg font-medium">
            Frontend Engineer specializing in High-Performance Web Applications & AI Integration.
          </p>
        </motion.div>

        {/* Action Button - Available for Opportunities */}
        <motion.div className="mb-16" variants={itemVariants}>
          <motion.button
            onClick={() => handleQuestionClick('¿Estás buscando nuevas oportunidades?')}
            className="group relative bg-foreground text-background hover:bg-foreground/90 rounded-2xl px-8 py-4 text-sm font-semibold transition-all duration-300 shadow-xl shadow-foreground/5 overflow-hidden flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            Available for Opportunities
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        </motion.div>

        {/* Search Suggestion Grid */}
        <motion.div
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24"
          variants={containerVariants}
        >
          {suggestedQuestions.map((question, index) => (
            <motion.button
              key={index}
              className="group bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/30 flex items-center rounded-2xl px-6 py-5 transition-all duration-300 text-left shadow-sm hover:shadow-md"
              onClick={() => handleQuestionClick(question.text)}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="bg-primary/5 group-hover:bg-primary/10 mr-4 flex h-12 w-12 min-w-[48px] items-center justify-center rounded-xl transition-colors shadow-inner">
                {React.cloneElement(question.icon as any, { className: "h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" })}
              </div>
              <span className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{question.text}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Section Trigger */}
        <motion.div 
          className="flex flex-col items-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Exploring my work</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground/40 animate-bounce" />
        </motion.div>

        {/* Projects Grid Component */}
        <div className="w-full border-t border-border/10 pt-16">
          <ProjectsGrid />
        </div>
      </motion.div>
    </div>
  );
};

export default ChatLanding;
