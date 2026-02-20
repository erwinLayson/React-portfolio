import { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import { AboutMeContent } from "../components/pages/About";
import { SkillSummary } from "../components/SkillsSummary";
import { Languages } from "../components/pages/Languages";
import { Timeline } from "../components/pages/Timeline";
import { Project } from "../components/pages/Projects";
import { Contacts } from "../components/pages/Contacts";
import { AnimatedSection } from "../components/shared/AnimatedSection";
import { useIsMobile } from "../hooks/useIsMobile";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { getParticlesConfig } from "../config/particlesConfig";
import profile from "../../public/profile.jpg";

export function Home() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const particlesConfig = useMemo(() => getParticlesConfig(isMobile), [isMobile]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div id="home" className="relative min-h-screen w-full bg-[var(--primary)] flex flex-col items-center justify-center overflow-hidden mt-10">
        {/* Particles Background */}
        {!prefersReducedMotion && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"
            init={particlesInit}
            options={particlesConfig}
          />
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--primary)] z-[1]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-[2] flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left max-w-xl"
            variants={containerVariants}
          >
            <motion.span
              className="text-green-400 font-medium tracking-wider uppercase text-sm"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Erwin B. Layson</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Aspiring Full-Stack Web Developer passionate about creating{' '}
              <span className="text-green-400">responsive</span> and{' '}
              <span className="text-green-400">secure</span> web applications.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(13, 202, 13, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contacts"
                className="px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl scale-110" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full animate-pulse-glow animate-float">
              <img
                src={profile}
                alt="Erwin B. Layson"
                className="w-full h-full rounded-full object-cover border-2 border-green-500/30"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-green-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <div id="aboutMe" className="min-h-screen w-full bg-[var(--primary)] p-4 md:p-10 text-[var(--tertiary)]">
        <AnimatedSection className="flex flex-col gap-10 p-5 max-w-6xl mx-auto">
          <AboutMeContent />
          <SkillSummary />
        </AnimatedSection>
      </div>

      {/* Languages Section */}
      <div id="languages" className="min-h-full w-full p-4 md:p-10 bg-[var(--primary)] text-[var(--tertiary)]">
        <AnimatedSection className="flex flex-col p-5 gap-10 max-w-6xl mx-auto" delay={0.1}>
          <Languages />
        </AnimatedSection>
      </div>

      {/* Timeline Section */}
      <div id="timeline" className="w-full bg-[var(--primary)] text-[var(--tertiary)]">
        <Timeline />
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen w-full p-4 md:p-10 bg-[var(--primary)] text-[var(--tertiary)]">
        <div className="max-w-6xl mx-auto">
          <Project />
        </div>
      </div>

      {/* Contacts Section */}
      <Contacts />
    </>
  );
}
