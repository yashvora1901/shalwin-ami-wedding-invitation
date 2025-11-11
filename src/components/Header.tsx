import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const menuItems = [
    { label: "Welcome", path: "/" },
    { label: "Our Story", path: "/journey" },
    { label: "The Day", path: "/functions" },
    { label: "Moments", path: "/gallery" },
    { label: "Directions", path: "/location" },
  ];

  return (
    <header className="">
      {/* Subtle decorative elements */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 left-1/4 w-48 h-48 rounded-full border border-rose-gold blur-md" />
        <div className="absolute bottom-12 right-1/4 w-32 h-32 rounded-full border border-rose-gold blur-md" />
      </div> */}

      {/* Main content */}
      <motion.div className="relative z-10 text-center px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        {/* Main heading */}
        {/* <motion.h1
          className="font-heading text-6xl md:text-7xl lg:text-8xl text-rose-gold mb-8 font-light tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Shalwin & Ami
        </motion.h1> */}

        {/* Decorative line */}
        {/* <motion.div className="w-32 h-0.5 bg-rose-gold mx-auto mb-8" initial={{ width: 0 }} animate={{ width: 128 }} transition={{ delay: 0.5, duration: 0.8 }} /> */}

        {/* Navigation menu */}
        {/* <motion.nav className="flex items-center justify-center gap-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
          {menuItems.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <Link to={item.path} className="px-4 py-2 text-sm md:text-base font-body font-medium text-gray-700 hover:text-rose-gold transition-colors duration-300 tracking-wide">
                {item.label}
              </Link>
              {index < menuItems.length - 1 && <div className="w-px h-4 bg-gray-300 mx-1" />}
            </div>
          ))}
        </motion.nav> */}
      </motion.div>
    </header>
  );
};

export default Header;
