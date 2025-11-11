'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';
import ThemeToggle from './ThemeToggle';
import { navItems } from '@/lib/navItems';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeHash, setActiveHash] = useState('#overview');

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1024;
      setIsMobile(isSmall);
      setOpen(!isSmall);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash || '#overview';
      setActiveHash(hash);
    };
    updateActive();
    window.addEventListener('hashchange', updateActive);
    return () => window.removeEventListener('hashchange', updateActive);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200/60 bg-white/60 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 lg:hidden">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
            <span className="text-lg font-black">MS</span>
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Motion Studio</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Animated sidebar design system</p>
          </div>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-slate-200/70 bg-white/70 p-2 backdrop-blur transition hover:scale-105 dark:border-white/10 dark:bg-white/10"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            key="sidebar"
            initial={{ x: isMobile ? -320 : 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isMobile ? -320 : 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.7 }}
            className="group/sidebar fixed inset-y-0 left-0 z-30 flex w-full max-w-xs flex-col space-y-6 border-r border-slate-200/60 bg-white/80 px-5 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 lg:relative"
          >
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-lg shadow-indigo-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-glow">
                <span className="text-lg font-black">MS</span>
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Motion Studio</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Design-led product team</span>
              </div>
            </div>

            <nav className="flex-1">
              <motion.ul layout className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <SidebarItem
                    key={item.label}
                    item={item}
                    index={index}
                    active={activeHash === item.href}
                    onActivate={(href) => {
                      setActiveHash(href);
                      if (isMobile) {
                        setOpen(false);
                      }
                    }}
                  />
                ))}
              </motion.ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-indigo-500/15 via-slate-100 to-transparent p-4 text-sm text-slate-600 shadow-inner dark:border-white/5 dark:from-indigo-500/20 dark:via-slate-900 dark:text-slate-200">
                <p className="font-semibold text-slate-900 dark:text-white">Design sprint in progress</p>
                <p className="mt-2 text-xs leading-relaxed">
                  Collaborate with your team in real-time. Drop components, create playbooks and animate transitions without leaving the sidebar experience.
                </p>
              </div>
              <ThemeToggle />
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
