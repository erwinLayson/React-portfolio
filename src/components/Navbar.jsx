import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Navbar() {
  const [navIsOpen, setNavIsopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const sidebar = [
    { route: "home", label: "Home" },
    { route: "aboutMe", label: "About Me" },
    { route: "languages", label: "Languages" },
    { route: "timeline", label: "Experience" },
    { route: "projects", label: "Projects" },
    { route: "contacts", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function NavLink({ link, duration, Label }) {
    return (
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={`${link}`}
          duration={duration}
          smooth="easeInOutQuart"
          offset={-80}
          spy={true}
          activeClass="text-green-400 bg-green-500/10"
          onClick={() => setNavIsopen(false)}
          className="cursor-pointer px-4 py-2 rounded-lg text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 block text-center"
        >
          {Label}
        </Link>
      </motion.div>
    );
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        className={`flex justify-between items-center px-6 z-50 py-4 fixed top-0 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--primary)]/80 backdrop-blur-xl border-b border-[var(--glass-border)] shadow-lg shadow-green-500/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-bold font-['Space_Grotesk'] gradient-text"
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        >
          Portfolio
        </motion.h1>

        {/* Mobile menu button */}
        <motion.button
          className="block md:hidden p-2 rounded-lg glass-card cursor-pointer"
          onClick={() => setNavIsopen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
        >
          {navIsOpen ? (
            <XMarkIcon className="h-6 w-6 text-green-400" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-green-400" />
          )}
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center">
          {sidebar.map((data, index) => (
            <NavLink
              key={index}
              link={data.route}
              duration={0}
              Label={data.label}
            />
          ))}
        </nav>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {navIsOpen && (
          <motion.nav
            className="fixed right-4 top-20 z-40 md:hidden glass-card p-4 min-w-[200px]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col gap-2">
              {sidebar.map((sidebarLinks, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <NavLink
                    link={sidebarLinks.route}
                    duration={800}
                    Label={sidebarLinks.label}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}