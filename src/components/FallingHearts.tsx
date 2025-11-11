import { motion } from "framer-motion";
import { useMemo } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  size: number;
  isFilled: boolean;
}

const FallingHearts = () => {
  // Generate hearts with random properties
  const hearts = useMemo(() => {
    const generatedHearts: Heart[] = [];
    for (let i = 0; i < 8; i++) {
      generatedHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 4,
        opacity: 0.2 + Math.random() * 0.4, // 20-60% opacity
        size: 20 + Math.random() * 16, // 20-36px
        isFilled: Math.random() > 0.4, // 60% filled, 40% outline
      });
    }
    return generatedHearts;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            color: "hsl(var(--primary))",
          }}
          initial={{
            y: -50,
            x: 0,
            rotate: 0,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 800,
            x: (Math.random() - 0.5) * 100,
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {heart.isFilled ? (
            // Filled heart
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            // Outline heart
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingHearts;
