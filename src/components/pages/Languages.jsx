import { motion } from "framer-motion";
import {  SiJavascript, } from "react-icons/si";
import { useReducedMotion } from "../../hooks/useReducedMotion";

import {languages} from '../../data/languageData';
import Article from "../shared/Article";

function LanguageItem({ language, index }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = language.icon;

  return (
    <motion.li
      className="flex gap-4 items-center p-3 rounded-xl hover:bg-green-500/10 transition-all duration-300 cursor-default group"
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={prefersReducedMotion ? {} : { x: 10, scale: 1.02 }}
    >
      <motion.div
        className="p-3 rounded-lg bg-black/30 group-hover:bg-black/50 transition-colors"
        whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6" style={{ color: language.color }} />
      </motion.div>
      <span className="text-xl font-medium" style={{ color: language.color }}>
        {language.name}
      </span>
    </motion.li>
  );
}

export function Languages() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-shadow text-center md:text-start font-['Space_Grotesk']"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Languages
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages List */}
        <Article
          className="glass-card p-8"
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          children={
            <ul className="list-none flex flex-col gap-3">
              {languages.map((language, index) => (
                <LanguageItem key={language.name} language={language} index={index} />
              ))}
            </ul>
          }
        />

        {/* Main Tech Highlight */}
        <Article
          className="glass-card p-8 flex flex-col gap-6 justify-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          children={
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-shadow font-['Space_Grotesk']">
            Main Tech
          </h3>
          
          <motion.div
            className="flex items-center gap-5 p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03, borderColor: "rgba(247, 223, 30, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="p-4 rounded-xl bg-yellow-500/20"
              animate={prefersReducedMotion ? {} : { rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <SiJavascript className="w-10 h-10 text-yellow-400" />
            </motion.div>
            <div>
              <span className="text-2xl md:text-3xl font-bold text-yellow-400">
                JavaScript
              </span>
              <p className="text-gray-400 text-sm mt-1">Primary Language</p>
            </div>
          </motion.div>

          <p className="text-gray-400 text-sm leading-relaxed">
            JavaScript powers both my frontend and backend development, enabling me to build full-stack applications with a unified language ecosystem.
          </p>
            </>
          }
        />
        
      </div>
    </>
  );
}