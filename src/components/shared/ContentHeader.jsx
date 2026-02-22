import { motion } from "framer-motion";

function ContentHeader({label, prefersReducedMotion}) {
  return(
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-shadow text-center md:text-start font-['Space_Grotesk']"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label}
    </motion.h2>
  )
}


export default ContentHeader;