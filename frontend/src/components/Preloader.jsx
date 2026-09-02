import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.5em] text-slate-800 dark:text-white"
        initial={{ opacity: 0, letterSpacing: '1em', scale: 0.8 }}
        animate={{ opacity: 1, letterSpacing: '0.1em', scale: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        PORTFOLIO
      </motion.div>
    </motion.div>
  );
}
