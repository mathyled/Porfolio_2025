'use client';

import { useState } from 'react';
import ChatLanding from '@/components/chat/chat-landing';
import { Presentation } from '@/components/presentation';
import AllProjects from '@/components/projects/AllProjects';
import Skills from '@/components/skills';
import { Contact } from '@/components/contact';
import Resume from '@/components/resume';
import AvailabilityCard from '@/components/AvailabilityCard';
import { presetReplies } from '@/lib/config-loader';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PresetReply } from '@/components/chat/preset-reply';

export default function Home() {
  const [activeTab, setActiveTab] = useState<{question: string, reply: string, tool: string} | null>(null);

  const handleSelection = (question: string) => {
    const preset = presetReplies[question as keyof typeof presetReplies];
    if (preset) {
      setActiveTab({
        question,
        reply: preset.reply,
        tool: preset.tool
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px]">
      <AnimatePresence mode="wait">
        {!activeTab ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <ChatLanding submitQuery={handleSelection} />
          </motion.div>
        ) : (
          <motion.div
            key="section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-4xl mx-auto px-4 py-8"
          >
            <button
              onClick={() => setActiveTab(null)}
              className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </button>
            
            <div className="glass-card p-8 rounded-3xl overflow-hidden shadow-2xl bg-card/30 backdrop-blur-md border border-border/50">
              <PresetReply 
                question={activeTab.question} 
                reply={activeTab.reply} 
                tool={activeTab.tool} 
                onClose={() => setActiveTab(null)}
              />
            </div>
            
            <div className="mt-12 pt-12 border-t border-border/10">
              <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mb-8">
                Otras consultas rápidas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(presetReplies).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSelection(q)}
                    className="p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 text-sm font-medium text-left transition-all hover:shadow-md"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
