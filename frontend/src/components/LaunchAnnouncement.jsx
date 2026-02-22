import { motion } from 'framer-motion';

export default function LaunchAnnouncement() {
  return (
    <section className="bg-near-black py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative">

        {/* Label */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-geist text-xs text-electric-blue/70 tracking-widest uppercase
                           border border-electric-blue/20 bg-electric-blue/5 rounded-full px-4 py-1.5">
            Launch timeline
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-space font-bold text-4xl sm:text-6xl text-white mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Launching{' '}
          <span className="text-gradient">Spring 2026</span>
        </motion.h2>

        {/* Pricing clarity */}
        <motion.div
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="font-geist text-lg sm:text-xl text-white/75 leading-relaxed mb-4">
            FounderSales is{' '}
            <span className="text-white font-semibold">completely free</span> during early access.
          </p>
          <p className="font-geist text-base text-white/50 leading-relaxed">
            When we launch publicly, founding members lock in their access terms — forever.
            The first 500 spots are the ones that matter.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            'Free during early access',
            'First 500 spots',
            'Spring 2026',
            'Founder pricing — forever',
          ].map((item) => (
            <span
              key={item}
              className="font-geist text-sm text-white/60 border border-white/10 bg-white/5
                         rounded-full px-4 py-2"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Countdown / urgency */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="font-geist text-sm text-white/35 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue/60" />
            Join before the first 500 spots are taken
          </div>
        </motion.div>

      </div>
    </section>
  );
}
