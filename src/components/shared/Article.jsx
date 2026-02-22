import { motion } from "framer-motion";

function Article({
  children,
  initial,
  whileInview,
  viewPort,
  transition,
  className,

}) {
  return (
    <motion.article className={`glass-card p-8 ${className || ''}`}
      initial={initial || { opacity: 0 }}
      whileInView={whileInview || { opacity: 1 }}
      viewport={viewPort || { once: true }}
      transition={transition || { duration: 0.5 }}>
      {children}
    </motion.article>
  );
} 

export default Article;