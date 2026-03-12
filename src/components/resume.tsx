'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Download, Eye, File, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { resumeDetails } from '@/lib/config-loader';

export function Resume() {
  // Resume details loaded from configuration

  const handleOpen = () => {
    // For external URLs, open in a new tab
    window.open(resumeDetails.downloadUrl, '_blank');
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      {/* Resume Card */}
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
      >
        {/* Details area */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Open PDF"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.div >


    </div >
  );
}

export default Resume;