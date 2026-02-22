import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-near-black/95 backdrop-blur-md border-b border-white/8 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="FounderSales" className="w-11 h-11 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-space font-bold text-xl sm:text-2xl text-white leading-tight tracking-tight">
              FounderSales
            </span>
            <span className="font-geist text-[10px] text-electric-blue/60 tracking-widest uppercase leading-none hidden sm:block">
              Powered by Clutch AI
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToSignup}
          className="relative bg-electric-blue text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg
                     font-geist font-semibold text-sm sm:text-base
                     hover:brightness-110 transition-all duration-150"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Join Waitlist
          {/* Subtle glow ring on button */}
          <span
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{ boxShadow: '0 0 0 0 rgba(59,130,246,0.5)', animation: 'none' }}
          />
        </motion.button>
      </div>
    </motion.nav>
  );
}
