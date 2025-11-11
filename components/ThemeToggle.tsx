'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2"
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        {isDark ? 'Dark' : 'Light'} mode
      </motion.span>
    </motion.button>
  );
}
