import React from 'react';
import { motion } from 'framer-motion';

const AdventureLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        
        {/* Outer Pulsing Circle (Compass Ring) */}
        <motion.div
          className="absolute h-32 w-32 rounded-full border-2 border-emerald-100"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* The Spinning Compass Needle */}
        <motion.div
          className="absolute h-24 w-24 rounded-full border-t-4 border-amber-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Central Icon: Mountain Peaks */}
        <div className="relative flex flex-col items-center">
          <svg
            className="h-12 w-12 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 21h18M3 21l8-14 8 14M13 13l3 3m-3-3l-3 3m3-3V7"
            />
          </svg>
        </div>
      </div>

      {/* Loading Text */}
      <motion.div 
        className="mt-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-bold tracking-widest text-slate-800 uppercase italic">
          Tripshalla
        </h2>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-emerald-600"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter mt-2">
          Preparing your journey...
        </p>
      </motion.div>
    </div>
  );
};

export default AdventureLoader;