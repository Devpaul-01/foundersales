import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(options = {}) {
  const { threshold = 0.2, triggerOnce = true } = options;
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  
  return { ref, inView };
}