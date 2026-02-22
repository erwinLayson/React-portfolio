import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Custom hooks
import { useReducedMotion } from "../hooks/useReducedMotion";

import Article from "./shared/Article";

export default function ProjectCard({ project, index }) {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Article 
      className="glass-card p-6 group overflow-hidden"
      variants={prefersReducedMotion ? {} : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
      children={
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <h3 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-green-400 transition-colors">
              {project.projectTitle}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-xl lg:w-[60%] flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.img
                src={project.image}
                alt={project.projectTitle}
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              {/* Blur placeholder effect */}
              <div className="absolute inset-0 bg-green-500/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-0 transition-opacity" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-5 flex-1">
              {/* Description */}
              <div className="glass-card p-5 flex-1">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-h-[12rem] overflow-y-auto scrollbar-hide">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex-1"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, boxShadow: "0 0 25px rgba(13, 202, 13, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaCode className="w-4 h-4" />
                  View Code
                </motion.a>
                <motion.a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300 flex-1"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}