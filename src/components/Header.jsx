import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
          SMART BRANDING
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            문의하기
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
