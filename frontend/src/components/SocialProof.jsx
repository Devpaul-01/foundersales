import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Clutch found a Reddit thread I would've never seen. Got my first customer from it.",
    author: "Sarah K.",
    title: "SaaS Founder",
    initial: "S"
  },
  {
    quote: "I went from frozen to executing every day. 48% reply rate so far.",
    author: "Michael T.",
    title: "Indie Hacker",
    initial: "M"
  },
  {
    quote: "It's like having a co-founder who only focuses on growth.",
    author: "David L.",
    title: "B2B Startup",
    initial: "D"
  }
];

export default function SocialProof() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="bg-light-slate py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-space font-semibold text-center mb-16">
          Founders executing with Clutch
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="bg-white border border-mid-slate rounded-2xl p-8 hover-lift"
            >
              {/* Quote mark */}
              <div className="text-6xl font-space text-electric-blue/20 leading-none mb-4">
                "
              </div>

              {/* Quote */}
              <p className="text-lg font-geist text-near-black leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-blue-600 
                              flex items-center justify-center text-white font-space font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-space font-semibold text-near-black">
                    {testimonial.author}
                  </div>
                  <div className="font-geist text-sm text-slate-gray">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}