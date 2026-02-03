import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" // "up", "down", "left", "right", "none"
}) {
  const prefersReducedMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionOffset[direction] || directionOffset.up;

  if (prefersReducedMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedItem({ 
  children, 
  className = "", 
  delay = 0,
  hover = true
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hover ? { 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}
    </motion.div>
  );
}
