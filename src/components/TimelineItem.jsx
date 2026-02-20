import { useReducedMotion } from "../hooks/useReducedMotion";
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi2';
import { motion } from 'framer-motion';

export default function TimelineItem({ item, index, isLeft }) {
  const prefersReducedMotion = useReducedMotion();
  
  const Icon = item.type === 'education' ? HiAcademicCap : HiBriefcase;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const content = (
    <div className={`flex items-center gap-4 w-full ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
      <div className="glass-card p-6 flex-1 group hover:scale-[1.02] transition-all duration-300">
        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
          <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-sm text-green-400 font-medium">{item.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1 font-['Space_Grotesk']">
          {item.title}
        </h3>
        <p className="text-green-400/80 font-medium mb-3">{item.company}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <div className={`relative flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
        <div className="w-full md:w-[calc(50%-2rem)]">
          {content}
        </div>
        {/* Timeline dot */}
        <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2 shadow-lg shadow-green-500/50" />
      </div>
    );
  }

  return (
    <motion.div
      className={`relative flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="w-full md:w-[calc(50%-2rem)]">
        {content}
      </div>
      {/* Timeline dot */}
      <motion.div 
        className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2 shadow-lg shadow-green-500/50"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
      />
    </motion.div>
  );
}

