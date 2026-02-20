import { useReducedMotion } from "../hooks/useReducedMotion";
import { motion } from 'framer-motion';

export default function TimeLineCard({ items, TimelineItem, startIndex = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      <motion.h3 
        className="text-2xl font-bold text-green-400 text-center mb-10"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {items.icon} {items.type.charAt(0).toUpperCase() + items.type.slice(1)}
      </motion.h3>
      <div className="space-y-8">
        {items.content.map((item, index) => (
          <TimelineItem 
            key={item.id} 
            item={item} 
            index={index} 
            isLeft={(startIndex + index) % 2 === 0}
          />
        ))}
      </div>
    </>
  )
}