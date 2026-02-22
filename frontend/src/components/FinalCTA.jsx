import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successPosition, setSuccessPosition] = useState(null);
  const [error, setError] = useState('');

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
    <section className="bg-white py-28 sm:py-36">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">

        <motion.h2
          className="font-space font-bold text-3xl sm:text-5xl lg:text-6xl text-near-black
                     mb-6 leading-tight max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Your next customer posted something today.
          <span className="text-electric-blue"> You just don't know where.</span>
        </motion.h2>

        <motion.p
          className="font-geist text-base sm:text-xl text-slate-gray mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Clutch finds them, prepares the action, and hands you a one-click launch.
          Stop missing what's already out there.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {!success ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-5">
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
              className="bg-emerald-50 border-2 border-emerald-400 rounded-xl px-8 py-5
                         max-w-md mx-auto mb-5"
            >
              <div className="font-space font-bold text-lg text-emerald-800 mb-1">
                You're in! 🎉
              </div>
              <div className="font-geist text-sm text-emerald-700">
                {successPosition
                  ? `You're #${successPosition} on the list. Check your email.`
                  : 'Check your email for next steps.'}
              </div>
            </motion.div>
          )}

          {/* Trust row */}
          <div className="flex items-center justify-center gap-3 flex-wrap font-geist text-sm text-slate-gray">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Free to start
            </span>
            <span className="text-mid-slate">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Launching Spring 2026
            </span>
            <span className="text-mid-slate">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> First 500 get exclusive access
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
