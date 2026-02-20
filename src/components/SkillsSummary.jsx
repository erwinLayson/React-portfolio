import { motion } from "framer-motion";
import { skills } from "../data/skillsData";
import { useReducedMotion } from "../hooks/useReducedMotion";
import SkillCategory from "./SkillCategory";

export function SkillSummary() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="glass-card p-6 md:p-8 flex flex-col gap-10"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-shadow text-center md:text-start font-['Space_Grotesk']"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skill Summary
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-lg md:text-xl">
        <SkillCategory title="Frontend" skillList={skills.frontend} />
        <SkillCategory title="Backend" skillList={skills.backend} />
        <SkillCategory title="Database" skillList={skills.database} />
      </div>
    </motion.section>
  );
}
