import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ClutchIcon from './ClutchIcon';

const SPLASH_TEXT = "Intelligence that executes.";
const words = SPLASH_TEXT.split(" ");

export default function SplashScreen({ onComplete }) {
  const [showText, setShowText] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show text after logo fully appears
    const textTimer = setTimeout(() => setShowText(true), 500);
    // Begin exit
    const exitTimer = setTimeout(() => setExiting(true), 2400);
    // Signal parent
    const doneTimer = setTimeout(() => onComplete?.(), 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-near-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          {/* Ambient background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.10) 0%, transparent 70%)',
            }}
          />

          {/* Logo + glow ring container */}
          <motion.div
            className="relative flex items-center justify-center mb-8"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Outer hum ring */}
            <motion.div
              className="absolute rounded-full border border-electric-blue/25"
              style={{ width: 160, height: 160 }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Inner glow ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 120,
                height: 120,
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />

            {/* Logo image */}
            <motion.img
              src="/logo.svg"
              alt="FounderSales"
              style={{ width: 72, height: 72, position: 'relative', zIndex: 1 }}
              animate={{
                filter: [
                  'drop-shadow(0 0 8px rgba(59,130,246,0.4))',
                  'drop-shadow(0 0 20px rgba(59,130,246,0.7))',
                  'drop-shadow(0 0 8px rgba(59,130,246,0.4))',
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            className="font-space font-bold text-white text-2xl tracking-tight mb-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.35 }}
          >
            FounderSales
          </motion.div>

          {/* Animated word-by-word text reveal */}
          <AnimatePresence>
            {showText && (
              <motion.div
                className="flex gap-[0.35em] overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="font-geist text-base text-electric-blue/80 tracking-wide"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
