'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from './icons';
import type { NavItem } from '@/lib/navItems';

type Props = {
  item: NavItem;
  index: number;
  active: boolean;
  onActivate: (href: string) => void;
};

export default function SidebarItem({ item, index, active, onActivate }: Props) {
  const Icon = Icons[item.icon];
  const linkHref = item.href.startsWith('#')
    ? { pathname: '/', hash: item.href.slice(1) }
    : item.href;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 120, damping: 15 }}
      className="group"
    >
      <Link
        href={linkHref}
        onClick={() => onActivate(item.href)}
        className="relative flex w-full items-center gap-3 rounded-2xl p-3 transition-all duration-300 ease-out hover:translate-x-1"
      >
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-slate-950 shadow-glow transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {item.label}
          </span>
          <span className="text-xs text-slate-500 transition-opacity duration-300 group-hover:text-slate-400 dark:text-slate-400">
            {item.description}
          </span>
        </span>
        {active ? (
          <motion.span
            layoutId="active-pill"
            className="absolute inset-0 -z-10 rounded-2xl bg-slate-900/5 shadow-inner dark:bg-white/5"
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          />
        ) : null}
      </Link>
    </motion.li>
  );
}
