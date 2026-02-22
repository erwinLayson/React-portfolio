import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

import { socialLinks } from "../../data/contactData";

function SocialCard({ social, index }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = social.icon;

  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card p-6 flex items-center gap-4 group ${social.hoverColor} transition-all duration-300`}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} group-hover:shadow-lg transition-shadow`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors">
          {social.name}
        </p>
        <p className="text-sm text-gray-400">Click to connect</p>
      </div>
      <motion.span
        className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        →
      </motion.span>
    </motion.a>
  );
}

export function Contacts() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div id="contacts" className="min-h-screen w-full p-4 md:p-10 bg-[var(--primary)] text-[var(--tertiary)]">
      <div className="max-w-6xl mx-auto">
        <section className="flex flex-col gap-12 p-5">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-shadow text-center md:text-start font-['Space_Grotesk']"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.article
              className="glass-card p-8"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 font-['Space_Grotesk']">Send a Message</h3>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="senderEmail" className="text-gray-300 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="senderEmail"
                    placeholder="you@example.com"
                    className="bg-black/30 text-white rounded-xl p-4 border border-[var(--glass-border)] focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300 placeholder:text-gray-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="senderComment" className="text-gray-300 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="senderComment"
                    rows={5}
                    placeholder="Hello! I'd like to discuss..."
                    className="bg-black/30 text-white rounded-xl p-4 border border-[var(--glass-border)] focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none placeholder:text-gray-500"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 cursor-pointer"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(13, 202, 13, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.article>

            {/* Social Links */}
            <motion.article
              className="flex flex-col gap-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold font-['Space_Grotesk']">Connect With Me</h3>
              <p className="text-gray-400">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
              </p>
              
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <SocialCard key={social.name} social={social} index={index} />
                ))}
              </div>
            </motion.article>
          </div>
        </section>
      </div>
    </div>
  );
}