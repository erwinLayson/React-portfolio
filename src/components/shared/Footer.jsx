import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebook, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "aboutMe", label: "About" },
    { to: "languages", label: "Languages" },
    { to: "timeline", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contacts", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/warsak.busdak", icon: FaFacebook, label: "Facebook" },
    { href: "https://github.com/erwinLayson", icon: FaGithub, label: "GitHub" },
    { href: "mailto:lasyonerwin28@gmail.com", icon: FaEnvelope, label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer
      className="relative bg-[var(--primary-dark)] border-t border-[var(--glass-border)]"
      variants={containerVariants}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text font-['Space_Grotesk'] mb-4">
              Erwin Layson
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aspiring Full-Stack Web Developer passionate about creating responsive and secure web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card hover:bg-green-500/20 transition-all duration-300 group"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              lasyonerwin28@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--glass-border)]">
          <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Erwin Layson. Made with 
            <FaHeart className="text-green-500 w-3 h-3 inline" /> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
