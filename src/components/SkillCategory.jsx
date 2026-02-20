import { useReducedMotion } from "../hooks/useReducedMotion";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";


export default function SkillCategory({ title, skillList }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="flex flex-col gap-4"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-bold text-shadow text-lg font-['Space_Grotesk']">{title}</p>
      <ul className="flex flex-col gap-2 text-lg">
        {skillList.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </ul>
    </motion.section>
  );
}
