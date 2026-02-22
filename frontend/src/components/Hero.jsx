import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successPosition, setSuccessPosition] = useState(null);
  const [error, setError] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(null);
  const videoRef = useRef(null);

  // Fetch real waitlist count on mount
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/waitlist/count`)
      .then((res) => {
        if (res.data?.count != null) setWaitlistCount(res.data.count);
      })
      .catch(() => {}); // silently fail — badge just won't show
  }, []);

  // Auto-play video when it enters the viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) video.play(); });
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/waitlist/signup`,
        { email }
      );
      setSuccess(true);
      setSuccessPosition(res.data?.position ?? null);
      setEmail('');
      if (waitlistCount != null) setWaitlistCount((c) => c + 1);
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      const msg = err.response?.data?.message;
      setError(
        msg === 'Email already registered'
          ? "You're already on the list! 🎉"
          : msg || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 bg-white overflow-hidden" id="signup">
      {/* Subtle top gradient that bleeds from the dark ProblemStatement above */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.04), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">

        {/* Waitlist badge — only renders when count is loaded */}
        {waitlistCount !== null && (
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 bg-light-slate border border-electric-blue/25
                          rounded-full px-5 py-2.5 shadow-sm">
              {/* Live dot */}
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 live-dot"
              />
              <span className="font-geist text-sm text-near-black">
                <span className="font-semibold">{waitlistCount.toLocaleString()}</span> founders already on the waitlist
              </span>
            </div>
          </motion.div>
        )}

        {/* Hero Headline */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-space font-bold leading-tight">
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-electric-blue mb-1">
              Meet Clutch.
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl text-near-black">
              Your autonomous execution partner.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl font-geist text-slate-gray text-center
                     max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          Clutch runs in the background — researching opportunities, preparing actions, and
          executing on your behalf.{' '}
          <span className="font-medium text-near-black">Even when you're offline. Even when you're asleep.</span>
        </motion.p>

        {/* Signup Form */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {!success ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div
                className="flex items-center gap-2 bg-white border-2 border-mid-slate rounded-xl p-1.5
                           focus-within:border-electric-blue transition-colors duration-200"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 font-geist text-sm sm:text-base
                             outline-none bg-transparent min-w-0"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 bg-electric-blue text-white px-5 sm:px-8 py-3 sm:py-3.5
                             rounded-lg font-geist font-semibold text-sm sm:text-base
                             hover:brightness-110 transition-all duration-150
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="bg-emerald-50 border-2 border-emerald-400 rounded-xl px-8 py-5 text-center w-full max-w-md"
            >
              <div className="font-space font-bold text-lg text-emerald-800 mb-1">
                You're in! 🎉
              </div>
              <div className="font-geist text-sm text-emerald-700">
                {successPosition
                  ? `You're #${successPosition} on the list. Check your email for next steps.`
                  : 'Check your email for next steps.'}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="text-center text-sm font-geist text-slate-gray mb-20 flex items-center
                     justify-center gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> Free to join
          </span>
          <span className="text-mid-slate">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> Free to start
          </span>
          <span className="text-mid-slate">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span> First 500 get exclusive early access
          </span>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          {/* Video context copy above */}
          <p className="text-center font-geist text-base text-slate-gray max-w-2xl mx-auto mb-5 leading-relaxed">
            Here's a preview of what your mornings will look like — Clutch surfaces a high-intent opportunity,
            prepares personalized outreach, and hands you a one-click launch across Reddit, LinkedIn,
            Gmail, or WhatsApp.
          </p>

          {/* Video frame */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-electric-blue/40 shadow-electric w-full">

            {/* In-frame "Product Preview" badge — honest but premium */}
            <div className="absolute top-3 left-3 z-10">
              <div className="flex items-center gap-2 bg-near-black/80 backdrop-blur-sm
                            border border-white/15 rounded-lg px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse-slow" />
                <span className="font-geist text-xs text-white/80 font-medium tracking-wide">
                  Product Preview — Launching Spring 2026
                </span>
              </div>
            </div>

            <video
              ref={videoRef}
              src="/demo-video.mp4"
              className="w-full block"
              loop
              muted
              playsInline
              controls
            />
          </div>

          {/* Honest simulation note */}
          <p className="text-center text-sm font-geist text-light-gray mt-4">
            Simulation of the real product experience · Not all features are live yet
          </p>
        </motion.div>

      </div>
    </section>
  );
}
