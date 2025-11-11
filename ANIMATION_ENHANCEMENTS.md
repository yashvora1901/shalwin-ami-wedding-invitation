# Wedding Invitation UI Enhancements - Animation Updates

## Overview

Enhanced the wedding invitation website header/landing page with interactive animations to create a more romantic and visually engaging experience.

## Changes Made

### 1. **New Falling Hearts Animation Component** ✨

**File:** `src/components/FallingHearts.tsx`

A new reusable component that renders continuously falling hearts with these features:

- **Quantity:** 8 hearts falling at any given time (subtle and elegant)
- **Color:** Uses the primary theme color (pink/maroon: `hsl(347 36% 58%)`)
- **Size Variation:** Hearts range from 20-36px (small to medium)
- **Shape Variation:** 60% filled hearts, 40% outline hearts for visual interest
- **Opacity:** Varies from 20%-60% to maintain elegance without distraction
- **Animation:**
  - **Duration:** 8-12 seconds per fall cycle (varying speeds)
  - **Delay:** Staggered starts (0-3 seconds) for continuous cascade
  - **Motion:** Falls vertically with slight horizontal drift (±50px)
  - **Rotation:** Gentle 360° rotation during descent
  - **Repeat:** Infinite loop for continuous effect

**Key Features:**

- Randomized properties for each heart (position, speed, size, opacity, style)
- Uses React `useMemo` for performance optimization
- Responsive to viewport height
- Non-interactive overlay (`pointer-events-none`)

### 2. **Enhanced Hero Section** 🎨

**File:** `src/components/Hero.tsx`

**Updates:**

- Imported and integrated the new `FallingHearts` component
- Enhanced button with interactive hover effects:
  - **Scale transformation:** 5% scale increase on hover (`whileHover={{ scale: 1.05 }}`)
  - **Tap feedback:** 2% scale decrease on click (`whileTap={{ scale: 0.98 }}`)
  - **Shadow enhancement:** Shadow increases on hover
  - **Smooth transitions:** All effects use Framer Motion for fluid animations

### 3. **Heartbeat Pulse Animation on S&A Logo** 💓

**File:** `src/components/Navbar.tsx`

**Updates:**

- Added heartbeat pulse animation to the heart icon
  - **Scale:** Oscillates between 1.0 and 1.1
  - **Duration:** 1.2 seconds per beat
  - **Loop:** Infinite continuous animation
- Added subtle heartbeat pulse to "S & A" text
  - **Scale:** Oscillates between 1.0 and 1.02 (very subtle)
  - **Duration:** 1.2 seconds per beat
  - **Loop:** Infinite continuous animation
  - **Hover effect:** Additional 5% scale on hover for interactivity

### 4. **CSS Animations & Keyframes** 🎬

**File:** `src/index.css`

Added new CSS keyframes and animations:

```css
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
```

### 5. **Tailwind Configuration Updates** ⚙️

**File:** `tailwind.config.ts`

Extended the Tailwind configuration with:

- **Keyframes:** Added `heartbeat` and `pulse-glow` keyframes
- **Animations:** Added corresponding animation utilities:
  - `animate-heartbeat`: 1.2s cubic-bezier timing for life-like pulse
  - `animate-pulse-glow`: 2s infinite pulse with shadow effect

## Visual Style Guide

### Colors

- **Primary Color (Pink/Maroon):** `hsl(347 36% 58%)`
- All hearts use this primary color for cohesion

### Animation Timing

- **Falling Hearts:** 8-12 seconds (slow, graceful descent)
- **Logo Heartbeat:** 1.2 seconds (natural pulse rhythm)
- **Button Hover:** Instant (interactive feedback)

### Opacity Levels

- **Falling Hearts:** 20%-60% (subtle, elegant)
- **Background Decorations:** 10% (minimal visual interference)

## Browser Compatibility

- Built with Framer Motion for smooth animations
- CSS animations provide fallbacks
- Tested on modern browsers (Chrome, Firefox, Safari, Edge)

## Performance Considerations

1. **Optimized Rendering:**

   - Uses `useMemo` in FallingHearts to prevent unnecessary re-renders
   - Hearts use `pointer-events-none` to avoid hit detection overhead
   - Framer Motion handles GPU-accelerated transforms

2. **Responsive Design:**
   - Hearts scale appropriately with viewport
   - All animations work on mobile and desktop
   - No blocking animations or heavy computations

## User Experience Improvements

✅ Romantic, elegant aesthetic maintained
✅ Interactive feedback on key elements
✅ Subtle animations don't distract from content
✅ Professional yet playful tone
✅ Enhances emotional engagement with the celebration theme

## Future Enhancement Suggestions

- Add animation settings to allow users to enable/disable animations
- Create alternative animation styles (e.g., flower petals, confetti)
- Add audio feedback for interactive elements
- Implement reduced-motion media query for accessibility
- Create variant animations for different sections of the site

---

**Last Updated:** November 11, 2025
**Status:** ✅ Complete and Ready for Testing
