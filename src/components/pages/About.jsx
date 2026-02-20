import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";


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
