import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Mengimpor Link sebagai ScrollLink

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { name: "People Inside", to: "who" },
    { name: "What we do?", to: "feature" },
    { name: "Activities", to: "activities" },
    { name: "Other", to: "hero" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay each link's animation
        duration: 0.5,
      },
    }),
  };

  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 45, scale: 1.2 },
  };

  return (
    <header className="sticky top-0 z-50 bg-black sm:py-6 py-4 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <a href="/" title="" className="flex">
              <img
                className="w-auto h-9"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                alt="Logo"
              />
            </a>
          </motion.div>

          {/* Mobile Menu Button with Transition */}
          <div className="flex md:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              <motion.svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial="closed"
                animate={expanded ? "open" : "closed"}
                variants={iconVariants}
                transition={{ duration: 0.3 }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={expanded ? "2" : "1.5"}
                  d={
                    !expanded
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </motion.svg>
            </motion.button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white cursor-pointer"
              >
                <ScrollLink to={link.to} smooth={true} duration={500}>
                  {link.name}
                </ScrollLink>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Links with Close Animation */}
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                animate={expanded ? "visible" : "hidden"}
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white cursor-pointer"
              >
                <ScrollLink to={link.to} smooth={true} duration={500}>
                  {link.name}
                </ScrollLink>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
