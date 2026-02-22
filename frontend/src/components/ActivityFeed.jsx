import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { getRandomActivity, getInitialActivities } from '../utils/activities';

const categoryColors = {
  research: 'border-electric-blue bg-electric-blue/5',
  execution: 'border-violet-500 bg-violet-500/5',
  growth: 'border-emerald-500 bg-emerald-500/5',
};

const categoryDots = {
  research: 'bg-electric-blue',
  execution: 'bg-violet-500',
  growth: 'bg-emerald-500',
};

export default function ActivityFeed() {
  const [feed, setFeed] = useState(() => getInitialActivities(5));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer — only run interval when in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Live stream simulation
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setFeed((prev) => {
        const next = getRandomActivity();
        // Avoid consecutive duplicates
        if (next.baseId === prev[0]?.baseId) return prev;
        return [next, ...prev.slice(0, 4)];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="bg-white py-20 sm:py-28" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          {/* LIVE indicator */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2.5 bg-light-slate border border-mid-slate
                            rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot flex-shrink-0" />
              <span className="font-geist text-xs text-slate-gray font-medium tracking-wider uppercase">
                Live Activity
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="font-space font-bold text-3xl sm:text-5xl text-near-black mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Clutch in action. Right now.
          </motion.h2>

          <motion.p
            className="font-geist text-base sm:text-lg text-slate-gray max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            While you read this, Clutch is autonomously researching, preparing, and queueing
            actions for founders. Here's what that looks like.
          </motion.p>
        </div>

        {/* Feed container */}
        <div className="relative">
          {/* Top fade gradient */}
          <div className="absolute top-0 left-0 right-0 h-6 z-10 pointer-events-none
                          bg-gradient-to-b from-white to-transparent" />

          <div className="space-y-2.5 overflow-hidden" style={{ minHeight: '280px' }}>
            <AnimatePresence initial={false} mode="popLayout">
              {feed.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: -32, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 16, scale: 0.97, transition: { duration: 0.2 } }}
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  className={`flex items-center gap-4 rounded-xl border-l-4 px-5 py-3.5
                              ${categoryColors[item.category] || 'border-slate-300 bg-light-slate'}`}
                >
                  {/* Category dot */}
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryDots[item.category] || 'bg-slate-400'}`}
                  />

                  {/* Icon */}
                  <span className="text-xl flex-shrink-0 select-none">{item.icon}</span>

                  {/* Text */}
                  <span className="flex-1 font-geist text-sm sm:text-base text-near-black font-medium leading-snug min-w-0">
                    {item.text}
                  </span>

                  {/* Timestamp */}
                  <span className="font-geist text-xs text-light-gray flex-shrink-0 ml-2 hidden sm:block">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none
                          bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Legend + disclosure */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category legend */}
          <div className="flex items-center gap-4 text-xs font-geist text-light-gray">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-electric-blue" /> Research
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-500" /> Execution
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Growth
            </span>
          </div>

          {/* Honest note */}
          <p className="text-xs font-geist text-light-gray/70 text-center sm:text-right">
            Simulated preview · Launching Spring 2026
          </p>
        </div>

      </div>
    </section>
  );
}
