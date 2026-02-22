import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';

const voices = [
  {
    quote:
      "I spend 3 hours a day trying to figure out who to reach out to and what to say. If Clutch can automate that research and prep, I'm sold before it launches.",
    label: 'SaaS Founder',
    tag: 'Early waitlist member',
    initial: 'A',
  },
  {
    quote:
      "My biggest problem isn't the product. It's consistently getting in front of the right people. I need something that does the hunting so I can focus on closing.",
    label: 'Indie Developer',
    tag: 'Beta interest',
    initial: 'J',
  },
  {
    quote:
      "Fear of cold outreach is real and founders don't talk about it enough. I want something that handles all the preparation so I can just show up and execute.",
    label: 'B2B Founder',
    tag: 'Early community member',
    initial: 'M',
  },
];

function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!target) return;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function WaitlistSignal() {
  const [realCount, setRealCount] = useState(null);
  const displayCount = useCountUp(realCount);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/waitlist/count`)
      .then((res) => {
        if (res.data?.count != null) setRealCount(res.data.count);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-light-slate py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="inline-block font-geist text-xs text-slate-gray tracking-widest uppercase
                       border border-mid-slate bg-white rounded-full px-4 py-1.5 mb-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            From our early community
          </motion.span>

          <motion.h2
            className="font-space font-bold text-3xl sm:text-5xl text-near-black leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Founders know exactly what they're missing.
          </motion.h2>

          <motion.p
            className="font-geist text-base sm:text-lg text-slate-gray leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Here's what early community members say about the problems FounderSales is built to solve.
          </motion.p>
        </div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {voices.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-mid-slate rounded-2xl p-7 sm:p-8 hover-lift
                         flex flex-col"
            >
              {/* Large quote mark */}
              <div className="font-space text-5xl text-electric-blue/15 leading-none mb-4 select-none">
                "
              </div>

              {/* Quote */}
              <p className="flex-1 font-geist text-sm sm:text-base text-near-black leading-relaxed mb-6">
                {v.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-mid-slate">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-violet-600
                              flex items-center justify-center text-white font-space font-bold text-sm
                              flex-shrink-0"
                >
                  {v.initial}
                </div>
                <div>
                  <div className="font-space font-semibold text-near-black text-sm">{v.label}</div>
                  <div className="font-geist text-xs text-light-gray">{v.tag}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist Counter — real data */}
        {realCount !== null && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex flex-col items-center bg-white border border-mid-slate
                            rounded-2xl px-10 py-8 shadow-sm">
              <div className="font-space font-bold text-5xl sm:text-6xl text-electric-blue mb-2">
                {displayCount.toLocaleString()}
              </div>
              <div className="font-geist text-base text-slate-gray">
                founders on the waitlist and growing
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot" />
                <span className="font-geist text-xs text-light-gray">Live count</span>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
