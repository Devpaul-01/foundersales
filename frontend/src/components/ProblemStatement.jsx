import { motion } from 'framer-motion';

const walls = [
  {
    number: '01',
    title: "You can't explain your idea clearly enough to close.",
    body:
      "You know your product is valuable — but when it comes to articulating it to a stranger, the words fall flat. Deals die in the presentation, not the product.",
    signal: 'Presentation Wall',
  },
  {
    number: '02',
    title: 'Fear of rejection keeps you from executing.',
    body:
      "Every cold message feels like a gamble. The silence after sending is deafening. So you polish the draft one more time instead of hitting send.",
    signal: 'Execution Wall',
  },
  {
    number: '03',
    title: "You are moving fast — but in the wrong direction.",
    body:
      'You are busy. You are working. But without the right signals, you are optimizing the wrong funnel, reaching the wrong people, at the wrong time.',
    signal: 'Direction Wall',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProblemStatement() {
  return (
    <section className="bg-near-black py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">

        {/* Section label */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-geist text-xs text-red-400/80 tracking-widest uppercase border border-red-400/20 bg-red-400/5 rounded-full px-4 py-1.5">
            Why most startups stall
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold text-white text-center max-w-4xl mx-auto leading-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Bad ideas don't kill startups.{' '}
          <span className="text-red-400">These three walls do.</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg font-geist text-white/50 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Most founders fail not because their idea is bad — but because these invisible walls block
          execution at every step.
        </motion.p>

        {/* Three wall cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {walls.map((wall, i) => (
            <motion.div
              key={wall.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative rounded-2xl border border-red-500/15 bg-white/[0.03] p-7 sm:p-8
                         hover:border-red-500/30 transition-colors duration-300"
            >
              {/* Wall indicator line */}
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

              {/* Number + signal badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-space font-bold text-4xl text-white/8 select-none">
                  {wall.number}
                </span>
                <span className="font-geist text-xs text-red-400/70 border border-red-400/20 bg-red-400/5 rounded-full px-3 py-1 tracking-wide">
                  {wall.signal}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space font-semibold text-lg sm:text-xl text-white leading-snug mb-4">
                {wall.title}
              </h3>

              {/* Body */}
              <p className="font-geist text-sm sm:text-base text-white/45 leading-relaxed">
                {wall.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge line to solution */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="font-geist text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            FounderSales was built to collapse all three walls —{' '}
            <span className="text-electric-blue font-medium">simultaneously.</span>
          </p>
          {/* Arrow down */}
          <motion.div
            className="mt-6 flex justify-center text-electric-blue/40"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3v14M4 11l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
