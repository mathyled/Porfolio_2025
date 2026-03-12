'use client';

import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Import the same components that AI responses use
import { Presentation } from '@/components/presentation';
import AllProjects from '@/components/projects/AllProjects';
import Skills from '@/components/skills';
import { Contact } from '@/components/contact';
import Resume from '@/components/resume';
import AvailabilityCard from '@/components/AvailabilityCard';

interface PresetReplyProps {
  question: string;
  reply: string;
  tool: string;
  onClose?: () => void;
}

export function PresetReply({ reply, tool, onClose }: PresetReplyProps) {
  // Render the same components as AI responses for better consistency
  const renderPresetComponent = () => {
    switch (tool) {
      case 'getPresentation':
        return <Presentation />;
      case 'getProjects':
        return <AllProjects />;
      case 'getSkills':
        return <Skills />;
      case 'getContact':
        return <Contact />;
      case 'getResume':
        return <Resume />;
      case 'getInternship':
        return <AvailabilityCard />;
      default:
        return null;
    }
  };

  const presetComponent = renderPresetComponent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full space-y-6"
    >
      {onClose && (
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-200/50 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Reply text if it's not a component-only tool or to provide context */}
      <div className="prose prose-blue max-w-none dark:prose-invert">
        {reply.split('\n').map((line, index) => {
          if (line.trim() === '') return <br key={index} />;
          
          // Handle download link specially
          if (line.includes('Download Resume Here') && line.includes('http')) {
            const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
            if (urlMatch) {
              return (
                <div key={index} className="mb-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm">Currículum disponible</span>
                  </div>
                  <Button
                    onClick={() => window.open(urlMatch[1], '_blank')}
                    size="sm"
                  >
                    Descargar
                  </Button>
                </div>
              );
            }
          }
          
          return (
            <p key={index} className="mb-3 last:mb-0 leading-relaxed text-foreground/80">
              {line}
            </p>
          );
        })}
      </div>

      {presetComponent && (
        <div className="pt-4 mt-4 border-t border-border/10">
          {presetComponent}
        </div>
      )}
    </motion.div>
  );
}
