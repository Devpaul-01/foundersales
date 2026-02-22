import { motion } from 'framer-motion';

// Clean inline SVG icons — no emojis
const Icons = {
  Radar: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.6}>
      <circle cx="16" cy="16" r="4" fill="currentColor" fillOpacity={0.15} />
      <circle cx="16" cy="16" r="4" strokeWidth={2} />
      <circle cx="16" cy="16" r="9" strokeOpacity={0.4} />
      <circle cx="16" cy="16" r="14" strokeOpacity={0.2} />
      <line x1="16" y1="2" x2="16" y2="7" strokeWidth={2} strokeLinecap="round" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 4L8 18h7l-1 10 11-14h-7L18 4z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l9 3.5v8c0 5-4 9.5-9 11-5-1.5-9-6-9-11V7.5L16 4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l3 3 7-7" strokeWidth={2} />
    </svg>
  ),
  Brain: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 8c-3 0-5 2.5-5 5 0 1.5.6 2.8 1.5 3.7C6 17.5 6 18.2 6 19c0 2.2 1.8 4 4 4h1M22 8c3 0 5 2.5 5 5 0 1.5-.6 2.8-1.5 3.7.5.8.5 1.5.5 2.3 0 2.2-1.8 4-4 4h-1M16 5v2M16 25v2M10 12h12M11 17h10" />
    </svg>
  ),
  Chat: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h22v14H18l-5 4v-4H5V7z" />
      <line x1="10" y1="12" x2="22" y2="12" strokeLinecap="round" />
      <line x1="10" y1="16" x2="18" y2="16" strokeLinecap="round" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.8}>
      <rect x="4" y="6" width="24" height="22" rx="3" />
      <line x1="4" y1="12" x2="28" y2="12" />
      <line x1="10" y1="4" x2="10" y2="9" strokeLinecap="round" />
      <line x1="22" y1="4" x2="22" y2="9" strokeLinecap="round" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" />
      <circle cx="16" cy="19" r="1.5" fill="currentColor" />
      <circle cx="20" cy="19" r="1.5" fill="currentColor" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const transition = (duration = 0.5) => ({
  duration,
  ease: [0.22, 1, 0.36, 1],
});

export default function BentoGrid() {
  return (
    <section className="bg-light-slate py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.span
            className="inline-block font-geist text-xs text-electric-blue tracking-widest uppercase
                       border border-electric-blue/20 bg-electric-blue/5 rounded-full px-4 py-1.5 mb-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition()}
          >
            Capabilities
          </motion.span>

          <motion.h2
            className="font-space font-bold text-3xl sm:text-5xl lg:text-6xl text-near-black
                       leading-tight mb-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition(0.55), delay: 0.08 }}
          >
            Built for execution,{' '}
            <span className="text-electric-blue">not procrastination.</span>
          </motion.h2>

          <motion.p
            className="font-geist text-base sm:text-lg text-slate-gray leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.5 }}
          >
            Every feature in FounderSales was designed to remove a specific friction point
            between you and your next customer.
          </motion.p>
        </div>

        {/* Bento Grid — mobile-first */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">

          {/* Card 1: The Hunter (Tall — spans 2 rows on desktop) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={transition(0.52)}
            className="col-span-1 md:row-span-2 bg-white border border-mid-slate rounded-3xl p-7 sm:p-8
                       hover-lift hover:border-electric-blue group cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-electric-blue">
                <Icons.Radar />
              </div>
              <span className="bg-violet-600 text-white text-xs font-geist font-bold uppercase
                               px-3 py-1.5 rounded-full tracking-wide">
                Agentic
              </span>
            </div>

            <h3 className="font-space font-semibold text-2xl sm:text-3xl text-near-black mb-4 leading-snug">
              The Hunter That Never Sleeps
            </h3>

            <p className="font-geist text-sm sm:text-base text-slate-gray leading-relaxed mb-6">
              Clutch doesn't wait for your prompt. It autonomously scans Reddit, Twitter, LinkedIn,
              and Product Hunt — performing deep research on post history, engagement patterns, and
              intent signals before ever surfacing an opportunity to you.
            </p>

            <div className="mt-auto pt-2 flex items-center gap-2 text-electric-blue font-geist font-semibold text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot" />
              <span>Working while you sleep</span>
            </div>
          </motion.div>

          {/* Card 2: Execution in 10 Seconds (Wide) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...transition(0.52), delay: 0.08 }}
            className="col-span-1 md:col-span-2 bg-white border border-mid-slate rounded-3xl p-7 sm:p-8
                       hover-lift hover:border-electric-blue group cursor-default"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="text-electric-blue">
                <Icons.Zap />
              </div>
              <span className="bg-electric-blue text-white text-xs font-geist font-bold uppercase
                               px-3 py-1.5 rounded-full tracking-wide">
                Instant
              </span>
            </div>

            <h3 className="font-space font-semibold text-2xl sm:text-3xl text-near-black mb-4 leading-snug">
              From Opportunity to Sent in Seconds
            </h3>

            <p className="font-geist text-sm sm:text-base text-slate-gray leading-relaxed mb-4">
              No blank pages. No decision fatigue. Clutch provides the target, full context-aware
              research, and a prepared execution — personalized to you. One click to launch via
              Gmail, Reddit, LinkedIn, or WhatsApp, wherever your lead is.
            </p>

            <div className="flex items-center gap-2 text-electric-blue font-geist font-semibold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M2 8h12M9 3l5 5-5 5" />
              </svg>
              <span>Opportunity to sent in one click</span>
            </div>
          </motion.div>

          {/* Card 3: Immunity to No (Small) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...transition(0.52), delay: 0.12 }}
            className="col-span-1 bg-white border border-mid-slate rounded-3xl p-7 sm:p-8
                       hover-lift hover:border-electric-blue group cursor-default"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="text-amber-500">
                <Icons.Shield />
              </div>
              <span className="bg-amber-500 text-white text-xs font-geist font-bold uppercase
                               px-3 py-1.5 rounded-full tracking-wide">
                Resilience
              </span>
            </div>

            <h3 className="font-space font-semibold text-xl sm:text-2xl text-near-black mb-3 leading-snug">
              Immunity to 'No'
            </h3>

            <p className="font-geist text-sm text-slate-gray leading-relaxed mb-4">
              Practice with AI that role-plays realistic responses — interest, rejection, ghosting.
              Build psychological armor before the real stakes hit.
            </p>

            <div className="flex items-center gap-2 text-amber-500 font-geist font-semibold text-xs">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M7 2v5l3 3" />
                <circle cx="7" cy="7" r="5.5" />
              </svg>
              <span>Get comfortable with rejection</span>
            </div>
          </motion.div>

          {/* Card 4: Autonomous Growth Partner (Wide) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...transition(0.52), delay: 0.16 }}
            className="col-span-1 md:col-span-2 bg-white border border-mid-slate rounded-3xl p-7 sm:p-8
                       hover-lift hover:border-electric-blue group cursor-default"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="text-violet-600">
                <Icons.Brain />
              </div>
              <span className="bg-violet-600 text-white text-xs font-geist font-bold uppercase
                               px-3 py-1.5 rounded-full tracking-wide">
                Learns from you
              </span>
            </div>

            <h3 className="font-space font-semibold text-2xl sm:text-3xl text-near-black mb-4 leading-snug">
              Your Autonomous Growth Partner
            </h3>

            <p className="font-geist text-sm sm:text-base text-slate-gray leading-relaxed mb-4">
              Clutch doesn't give generic responses. During onboarding, it interviews you deeply —
              absorbing your voice, your goals, your business context. Every action it prepares is
              personalized. Every send it learns from, getting smarter about your business daily.
            </p>

            <div className="flex items-center gap-2 text-violet-600 font-geist font-semibold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M2 12L6 4l4 6 2-3 4 5" />
              </svg>
              <span>AI that knows your business like a co-founder</span>
            </div>
          </motion.div>

          {/* Card 5: Deep Onboarding (Small) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...transition(0.52), delay: 0.2 }}
            className="col-span-1 bg-white border border-mid-slate rounded-3xl p-7 sm:p-8
                       hover-lift hover:border-electric-blue group cursor-default"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="text-electric-blue">
                <Icons.Chat />
              </div>
              <span className="bg-electric-blue text-white text-xs font-geist font-bold uppercase
                               px-3 py-1.5 rounded-full tracking-wide">
                Personalized
              </span>
            </div>

            <h3 className="font-space font-semibold text-xl sm:text-2xl text-near-black mb-3 leading-snug">
              Deep Onboarding
            </h3>

            <p className="font-geist text-sm text-slate-gray leading-relaxed mb-4">
              Clutch asks intelligent follow-up questions to understand your goals, challenges,
              and audience at a deep level. One conversation. Infinite context.
            </p>
          </motion.div>

          {/* Card 6: Event Intelligence (Small) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...transition(0.52), delay: 0.24 }}
            className="col-span-1 md:col-span-2 bg-white border border-mid-slate rounded-3xl p-7 sm:p-8
                       hover-lift hover:border-electric-blue group cursor-default"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="text-emerald-600">
                <Icons.Calendar />
              </div>
              <span className="bg-emerald-500 text-white text-xs font-geist font-bold uppercase
                               px-3 py-1.5 rounded-full tracking-wide">
                Strategic
              </span>
            </div>

            <h3 className="font-space font-semibold text-xl sm:text-2xl text-near-black mb-3 leading-snug">
              Event Intelligence
            </h3>

            <p className="font-geist text-sm text-slate-gray leading-relaxed mb-4">
              Add your launches, interviews, or conferences to Clutch's calendar. It autonomously
              preps talking points and outreach strategies before you even open your laptop —
              so every moment of leverage is already prepared.
            </p>

            <div className="flex items-center gap-2 text-emerald-600 font-geist font-semibold text-xs">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M7 1v12M1 7h12" />
              </svg>
              <span>Never miss a strategic moment again</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
