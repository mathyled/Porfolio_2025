'use client';

import { motion } from 'framer-motion';
import { Award, Code, GraduationCap, Mail, MessageSquare, Briefcase } from 'lucide-react';
import React from 'react';

import { presetReplies } from '@/lib/config-loader';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
  handlePresetReply?: (question: string, reply: string, tool: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery, handlePresetReply }) => {

  // Suggested questions that the user can click on
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: 'Who are you?',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'What projects are you most proud of?',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: 'What are your skills?',
    },
    {
      icon: <Briefcase className="h-4 w-4" />,
      text: 'Am I available for opportunities?',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'How can I reach you?',
    },
  ];

  const handleQuestionClick = (questionText: string) => {
    // Check if this question has a preset reply
    const preset = presetReplies[questionText as keyof typeof presetReplies];

    if (preset && handlePresetReply) {
      // Show preset reply first
      handlePresetReply(questionText, preset.reply, preset.tool);
    } else {
      // Fall back to AI query
      submitQuery(questionText);
    }
  };

  // Animation variants for staggered animation
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
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Welcome message */}
      <motion.div className="mb-8 text-center" variants={itemVariants}>
        <h2 className="mb-3 text-2xl font-semibold">
          I'm Mathias
        </h2>
        <p className="text-muted-foreground mx-auto max-w-md">
          Begin your interview with me.
        </p>
      </motion.div>

      {/* Available for Opportunities Button */}
      <motion.div className="mb-8" variants={itemVariants}>
        <motion.button
          onClick={() => handleQuestionClick('Am I available for opportunities?')}
          className="bg-background hover:bg-muted border border-border rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for Opportunities
        </motion.button>
      </motion.div>

      {/* Suggested questions in a Grid */}
      <motion.div
        className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
        variants={containerVariants}
      >
        {suggestedQuestions.map((question, index) => (
          <motion.button
            key={index}
            className="bg-accent/50 border border-border/50 hover:bg-accent hover:border-border/80 flex w-full items-center rounded-2xl px-5 py-4 transition-all shadow-sm"
            onClick={() => handleQuestionClick(question.text)}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-background mr-4 flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full shadow-sm">
              {question.icon}
            </span>
            <span className="text-left font-medium text-foreground">{question.text}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;
