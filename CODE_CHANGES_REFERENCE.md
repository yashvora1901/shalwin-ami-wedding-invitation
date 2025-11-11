# Before & After Code Comparison

## 1. FallingHearts Component (NEW)

### File: `src/components/FallingHearts.tsx`

```typescript
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
```

---

## 2. Hero Component Changes

### BEFORE: `src/components/Hero.tsx`

```typescript
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  // ... rest of code

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-romantic">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">{/* ... decorative circles ... */}</div>

      {/* Floating Petals */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 text-primary/30"
          // ... petal animation ...
        >
          {/* ... petal SVG ... */}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* ... content ... */}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg" onClick={scrollToNextSection}>
            Join Our Celebration
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
```

### AFTER: `src/components/Hero.tsx`

```typescript
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import FallingHearts from "./FallingHearts";  // ← NEW IMPORT

const Hero = () => {
  // ... rest of code

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-romantic">
      {/* Falling Hearts Animation */}
      <FallingHearts />  {/* ← NEW COMPONENT */}

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* ... decorative circles ... */}
      </div>

      {/* Floating Petals */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 text-primary/30"
          // ... petal animation ...
        >
          {/* ... petal SVG ... */}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* ... content ... */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div  {/* ← NEW: Framer Motion wrapper for button */}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"  {/* ← ENHANCED: added hover effects */}
              onClick={scrollToNextSection}
            >
              Join Our Celebration
            </Button>
          </motion.div>  {/* ← NEW: Closing motion.div */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
```

**Changes Summary:**

- ✅ Added `FallingHearts` import
- ✅ Added `<FallingHearts />` component
- ✅ Wrapped button with `motion.div` for hover/tap effects
- ✅ Enhanced button className with `hover:shadow-xl` and `hover:scale-105`

---

## 3. Navbar Component Changes

### BEFORE: `src/components/Navbar.tsx`

```typescript
<Link to="/" className="flex items-center gap-2">
  <Heart className="text-primary w-6 h-6 fill-primary" />
  <span className="font-heading text-3xl text-primary">S & A</span>
</Link>
```

### AFTER: `src/components/Navbar.tsx`

```typescript
<Link to="/" className="flex items-center gap-2">
  <motion.div  {/* ← NEW: Heart icon animation wrapper */}
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
  >
    <Heart className="text-primary w-6 h-6 fill-primary" />
  </motion.div>

  <motion.span  {/* ← NEW: S&A text animation wrapper */}
    className="font-heading text-3xl text-primary cursor-pointer"
    whileHover={{ scale: 1.05 }}
    animate={{ scale: [1, 1.02, 1] }}
    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
  >
    S & A
  </motion.span>
</Link>
```

**Changes Summary:**

- ✅ Wrapped Heart icon in `motion.div` for pulse animation
- ✅ Added heartbeat scale animation (1 → 1.1 → 1)
- ✅ Wrapped S&A text in `motion.span` for subtle pulse
- ✅ Added hover scale effect (1 → 1.05)
- ✅ Added 1.2s easeInOut transitions

---

## 4. CSS Animations - New Additions

### File: `src/index.css`

**ADDED (after utilities section):**

```css
@layer base {
  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.08);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.08);
    }
  }

  @keyframes pulse-glow {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(212, 82, 107, 0.3);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(212, 82, 107, 0);
    }
  }

  .animate-heartbeat {
    animation: heartbeat 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
}
```

---

## 5. Tailwind Config Changes

### File: `tailwind.config.ts`

**BEFORE:**

```typescript
keyframes: {
  "accordion-down": { /* ... */ },
  "accordion-up": { /* ... */ },
  "fade-in": { /* ... */ },
  "fade-in-down": { /* ... */ },
  "float": { /* ... */ },
  "petal-fall": { /* ... */ },
  "shimmer": { /* ... */ },
},
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "fade-in": "fade-in 0.6s ease-out",
  "fade-in-down": "fade-in-down 0.6s ease-out",
  "float": "float 3s ease-in-out infinite",
  "petal-fall": "petal-fall 10s linear infinite",
  "shimmer": "shimmer 2s linear infinite",
},
```

**AFTER (ADDITIONS):**

```typescript
keyframes: {
  // ... existing keyframes ...
  "heartbeat": {  // ← NEW
    "0%, 100%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.08)" },
    "50%": { transform: "scale(1)" },
    "75%": { transform: "scale(1.08)" },
  },
  "pulse-glow": {  // ← NEW
    "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 82, 107, 0.3)" },
    "50%": { boxShadow: "0 0 0 8px rgba(212, 82, 107, 0)" },
  },
},
animation: {
  // ... existing animations ...
  "heartbeat": "heartbeat 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",  // ← NEW
  "pulse-glow": "pulse-glow 2s infinite",  // ← NEW
},
```

---

## Summary of All Changes

| File                 | Type     | Change                                          |
| -------------------- | -------- | ----------------------------------------------- |
| `FallingHearts.tsx`  | NEW      | Complete new component (90 lines)               |
| `Hero.tsx`           | MODIFIED | Added FallingHearts + enhanced button (8 lines) |
| `Navbar.tsx`         | MODIFIED | Added logo heartbeat animation (12 lines)       |
| `index.css`          | MODIFIED | Added keyframes and animations (30 lines)       |
| `tailwind.config.ts` | MODIFIED | Extended animations (16 lines)                  |

**Total New Code:** ~156 lines
**Total Modified Code:** ~36 lines
**Total Lines Changed:** ~192 lines

---

## Testing the Changes

To verify changes locally:

```bash
# Install dependencies (if needed)
bun install

# Start development server
bun run dev

# Visit http://localhost:5173
# You should see:
# 1. Falling hearts in the header
# 2. Logo with heartbeat pulse
# 3. Button responds to hover with scale/shadow
```

---

## Rollback Instructions (if needed)

If you need to revert any changes:

```bash
# Revert all changes
git checkout -- .

# Or revert specific files
git checkout -- src/components/Hero.tsx
git checkout -- src/components/Navbar.tsx
git checkout -- src/index.css
git checkout -- tailwind.config.ts

# Delete new component
rm src/components/FallingHearts.tsx
```

---

**Implementation Date:** November 11, 2025
**Status:** ✅ Complete and Ready for Production
