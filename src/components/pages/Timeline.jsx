import { motion } from 'framer-motion';

// Data
import { experienceData, educationData } from '../../data/timelineData';
// Custom hooks
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Components
import TimeLineCard from '../TimeLineCard';
import TimelineItem from '../TimelineItem';
import ContentHeader from '../shared/ContentHeader';

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
      <ContentHeader
        label={'Experience & Education'}
        prefersReducedMotion={prefersReducedMotion}
      />

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
          <TimeLineCard items={experienceData} TimelineItem={TimelineItem} startIndex={0} />
        </div>

        {/* Education Section */}
        <div>
          <TimeLineCard items={educationData} TimelineItem={TimelineItem} startIndex={experienceData.content.length} />
        </div>
      </div>
    </section>
  );
}
