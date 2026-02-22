import { motion } from 'framer-motion';
import ClutchIcon from './ClutchIcon';

const modes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1-4.35-7M5 14.5l-1.8 1 4.35-7M5 14.5l4.35 7M19.8 15l-4.35 7" />
      </svg>
    ),
    label: 'Deep Research Mode',
    badge: 'Intelligence',
    description:
      'Clutch shifts into comprehensive research — cross-referencing post histories, engagement signals, and platform context before surfacing a single opportunity.',
    badgeColor: 'violet',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    label: 'Advanced Thinking Mode',
    badge: 'Reasoning',
    description:
      'For complex strategy decisions — Clutch reasons through multi-step paths, weighing tradeoffs and timing before presenting a recommended action.',
    badgeColor: 'violet',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    label: 'Coding Mode',
    badge: 'Technical',
    description:
      'Technical founders can assign development tasks. Clutch breaks them into subtasks and routes each to specialized sub-agents — you review, not manage.',
    badgeColor: 'blue',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
    label: 'Autonomous Task Queue',
    badge: 'Execution',
    description:
      'Assign a queue of tasks and walk away. Clutch works through them in the background and notifies you when results are ready — even when you are offline.',
    badgeColor: 'blue',
  },
];

const badgeStyles = {
  violet: 'bg-violet-600/10 text-violet-400 border-violet-500/20',
  blue: 'bg-electric-blue/10 text-electric-blue border-electric-blue/20',
};

export default function ClutchIntelligence() {
  return (
    <section className="bg-near-black py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">

        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2.5 bg-violet-600/10 border border-violet-500/25 rounded-full px-4 py-2">
              <ClutchIcon size={16} color="#a78bfa" animated />
              <span className="font-geist text-xs text-violet-400 tracking-widest uppercase font-medium">
                Clutch AI
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="font-space font-bold text-3xl sm:text-5xl text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Not a chatbot.{' '}
            <span className="text-gradient-violet">An intelligent execution system.</span>
          </motion.h2>

          <motion.p
            className="font-geist text-base sm:text-lg text-white/50 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Clutch runs continuously in the background. You assign tasks — it breaks them into
            sub-tasks, routes them to specialized agents, and delivers results. You stay focused on building.
          </motion.p>
        </div>

        {/* Intelligence modes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 rounded-2xl border border-white/8 bg-white/[0.03]
                         p-6 sm:p-7 hover:border-white/15 hover:bg-white/[0.05]
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10
                              flex items-center justify-center text-white/60">
                {mode.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-space font-semibold text-white text-base">
                    {mode.label}
                  </span>
                  <span className={`font-geist text-xs border rounded-full px-2.5 py-0.5 ${badgeStyles[mode.badgeColor]}`}>
                    {mode.badge}
                  </span>
                </div>
                <p className="font-geist text-sm text-white/45 leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unlimited uploads callout */}
        <motion.div
          className="rounded-2xl border border-electric-blue/20 bg-electric-blue/5 p-6 sm:p-7
                     flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Upload icon */}
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-electric-blue/10 border border-electric-blue/20
                          flex items-center justify-center text-electric-blue">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </div>

          <div className="flex-1">
            <div className="font-space font-semibold text-white text-base mb-1">
              Unlimited Uploads
            </div>
            <p className="font-geist text-sm text-white/50 leading-relaxed">
              Upload any document, business plan, idea, or resource. Clutch analyzes everything you
              share to continuously sharpen its understanding of your business — and provide better,
              more relevant actions over time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
