import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Welcome", path: "/" },
    { label: "Our Story", path: "/journey" },
    { label: "The Day", path: "/functions" },
    { label: "Moments", path: "/gallery" },
    { label: "Directions", path: "/location" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="w-full h-[60px] md:h-[75px] flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo/Brand */}
        <motion.div className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Link to="/" className="text-lg md:text-xl font-heading font-light text-rose-500 tracking-wide hover:text-rose-600 transition-colors">
            Shalwin & Ami
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex items-center justify-center gap-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          {menuItems.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <Link to={item.path} className="px-3 lg:px-4 py-2 text-sm lg:text-base font-body font-medium text-gray-700 hover:text-rose-500 transition-colors duration-300 tracking-wide">
                {item.label}
              </Link>
              {index < menuItems.length - 1 && <div className="w-px h-4 bg-gray-300 mx-1" />}
            </div>
          ))}
        </motion.nav>

        {/* Mobile Hamburger Menu */}
        <motion.button className="md:hidden relative z-10 flex flex-col gap-1.5 w-8 h-8 items-center justify-center" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <motion.span className="w-6 h-0.5 bg-gray-700 rounded-full" animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          <motion.span className="w-6 h-0.5 bg-gray-700 rounded-full" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.span className="w-6 h-0.5 bg-gray-700 rounded-full" animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div className="md:hidden overflow-hidden bg-white border-t border-gray-100" initial={{ height: 0 }} animate={{ height: isOpen ? "auto" : 0 }} transition={{ duration: 0.3 }}>
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-body font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-300 border-b border-gray-100 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
