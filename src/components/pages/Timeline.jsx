import { motion } from 'framer-motion';
import { experienceData, educationData } from '../../data/timelineData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi2';

function TimelineItem({ item, index, isLeft }) {
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

export function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section className="py-20 px-4 md:px-10">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-shadow text-center mb-16 font-['Space_Grotesk']"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <motion.div 
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-500/50 to-transparent -translate-x-1/2 origin-top"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Experience Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-green-400 text-center mb-10"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            💼 Experience
          </motion.h3>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-green-400 text-center mb-10"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            🎓 Education
          </motion.h3>
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index + experienceData.length} 
                isLeft={(index + experienceData.length) % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
