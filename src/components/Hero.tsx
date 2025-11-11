import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import FallingHearts from "./FallingHearts";

const Hero = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-romantic">
      {/* Falling Hearts Animation */}
      <FallingHearts />

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary rounded-full" />
      </div>

      {/* Floating Petals */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 text-primary/30"
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.p className="text-lg md:text-xl font-body text-foreground/70 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            You're Invited to Celebrate
          </motion.p>

          <motion.h1
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Shalwin & Ami
          </motion.h1>

          <motion.div className="w-24 h-1 bg-primary mx-auto mb-6" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 0.8, duration: 0.6 }} />

          <motion.p className="text-xl md:text-2xl font-body text-foreground/80 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            30th November 2025
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={scrollToNextSection}
              >
                Join Our Celebration
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNextSection}
        >
          <ChevronDown className="text-primary w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
