import { useReducedMotion } from "../hooks/useReducedMotion";
import { motion } from "framer-motion";


export default function SkillItem({ skill, index }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = skill.icon;

  return (
    <motion.li
      className="flex gap-3 items-center p-2 rounded-lg hover:bg-green-500/10 transition-colors cursor-default"
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={prefersReducedMotion ? {} : { x: 5 }}
    >
      {Icon && <Icon className={`w-5 h-5 ${skill.color}`} />}
      <span className={skill.color}>{skill.name}</span>
    </motion.li>
  );
}