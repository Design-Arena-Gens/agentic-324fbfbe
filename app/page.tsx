'use client';

import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import { navItems } from '@/lib/navItems';

const stats = [
  { label: 'Active projects', value: '12', delta: '+18.4%' },
  { label: 'Design handoffs', value: '47', delta: '+6.2%' },
  { label: 'Team velocity', value: '92', delta: '+3.1%' },
  { label: 'Customer joy score', value: '8.7', delta: '+1.9%' }
];

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 transition-all duration-500 ease-out dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-16 pt-8 lg:flex-row lg:gap-12 lg:px-10">
        <Sidebar />
        <main className="flex-1 space-y-12 lg:pl-[22rem] xl:pl-[20rem]">
          <section id="overview" className="space-y-8 pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/70 p-10 shadow-[0px_30px_60px_-45px_rgba(99,102,241,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.45),_transparent_55%)] opacity-70" />
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 shadow-sm backdrop-blur-xl dark:bg-white/10 dark:text-indigo-300"
                  >
                    New in v3.2
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white lg:text-4xl"
                  >
                    A sidebar that feels alive—fluid motion, tactile feedback and a design system built for teams that move fast.
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-base leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    Craft immersive navigation moments, orchestrate product areas and animate transitions with a system that stays in sync across devices. Motion Studio delivers a delightful sidebar blueprint ready for your next experience.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-3xl border border-white/60 bg-white/70 p-6 text-right shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">Active sprint</p>
                  <p className="mt-2 text-4xl font-semibold text-slate-900 dark:text-white">01:18:54</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">Time left to finalize launch assets</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.06 }
                }
              }}
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-emerald-500">{stat.delta}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {navItems.slice(1).map((section, index) => (
            <motion.section
              id={section.href.replace('#', '')}
              key={section.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/80 px-8 py-10 shadow-lg shadow-indigo-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-px rounded-[30px] bg-gradient-to-br from-white/80 via-white/40 to-white/10 opacity-60 dark:from-white/15 dark:via-white/5 dark:to-white/0" />
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${section.accent} text-slate-950 shadow-glow`}> 
                      <span className="text-lg font-semibold">{index + 1}</span>
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{section.label}</p>
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{section.description}</h2>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    Elevate your team&apos;s workflow with real-time collaboration, adaptive layouts and a library of motion presets. Each section of the sidebar is thoughtfully designed to surface context, maintain focus and feel as smooth as native software.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      <p className="font-semibold text-slate-900 dark:text-white">Playbook cards</p>
                      <p className="mt-1 text-xs leading-relaxed">
                        Drag-and-drop routines that keep your product rhythms aligned. Launch retros, QA checklists and stakeholder reviews in seconds.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      <p className="font-semibold text-slate-900 dark:text-white">Guided automation</p>
                      <p className="mt-1 text-xs leading-relaxed">
                        Build micro-automations that react to events inside your workspace. Trigger motion states, send nudges and close loops automatically.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative h-full w-full max-w-sm overflow-hidden rounded-[32px] border border-slate-200/80 bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-transparent p-6 shadow-[0_25px_50px_-30px_rgba(79,70,229,0.6)] backdrop-blur-xl dark:border-white/10 dark:from-indigo-500/20">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-4 text-sm text-white"
                    >
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Signal</p>
                        <p className="mt-2 text-base font-semibold">Product demo session begins</p>
                        <p className="mt-1 text-xs text-indigo-100/80">Auto-recording, motion annotations enabled</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Next</p>
                        <p className="mt-2 text-base font-semibold">Share prototype with research panel</p>
                        <p className="mt-1 text-xs text-indigo-100/80">4 collaborators, 12 observers</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Focus</p>
                        <p className="mt-2 text-base font-semibold">Sync animations to shipped components</p>
                        <p className="mt-1 text-xs text-indigo-100/80">Cohesive transitions across touchpoints</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </main>
      </div>
    </div>
  );
}
