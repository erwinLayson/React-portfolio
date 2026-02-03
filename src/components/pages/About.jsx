import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiExpress,
  SiCss3,
  SiTailwindcss,
  SiCodeigniter,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const skills = {
  frontend: [
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiCss3, name: "CSS", color: "text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  ],
  backend: [
    { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiCodeigniter, name: "CodeIgniter", color: "text-red-500" },
    { name: "RESTful APIs", color: "text-purple-400" },
    { name: "Authentication", color: "text-orange-400" },
  ],
  database: [
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
  ],
};

function SkillItem({ skill, index }) {
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

function SkillCategory({ title, skillList }) {
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

export function AboutMeContent() {
  const prefersReducedMotion = useReducedMotion();

  const paragraphs = [
    "Hi, I'm Erwin B. Layson, a BSIT student who enjoys building full-stack web applications and learning how things work behind the scenes.",
    "I'm a curious and patient learner who likes solving problems, especially when it comes to debugging and improving user experience. I enjoy turning ideas into working systems and take satisfaction in writing clean, organized, and readable code. When something doesn't work, I see it as a challenge to learn rather than a setback.",
    "I primarily work with React (Vite) for frontend development, CSS and Tailwind CSS for styling, and Node.js with Express for backend development. I'm comfortable building RESTful APIs, implementing JWT-based authentication, handling cookies and routing, and connecting applications to databases.",
    "Alongside my academic projects, I've worked on freelance, school-related web systems for classmates and students from other sections and schools. These experiences helped me improve my communication skills, understand real user needs, and deliver functional solutions within academic deadlines.",
  ];

  return (
    <section className="flex gap-10 flex-col">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-shadow text-center sm:text-start font-['Space_Grotesk']"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="glass-card p-6 md:p-8"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-5 text-gray-300 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

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
