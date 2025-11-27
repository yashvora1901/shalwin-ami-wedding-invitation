import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Flame, Flower2, Lamp } from "lucide-react";

const Journey = () => {
  const timelineSteps = [
    {
      title: "Groom's Story",
      subtitle: "Shalwin's Early Life",
      description:
        "Born into a loving family, Shalwin grew up with strong values of respect, dedication, and faith. His journey shaped him into a man of character, ready to build a family rooted in tradition.",
    },
    {
      title: "Bride's Story",
      subtitle: "Ami's Early Life",
      description: "Ami blossomed with grace, kindness, and devotion. Nurtured by her family's blessings, she carried the essence of tradition and warmth, preparing to embrace a new chapter.",
    },
    {
      title: "When Families Met",
      subtitle: "The Sacred Union Begins",
      description: "With prayers and blessings, both families came together. Hearts aligned, blessings exchanged, and destiny whispered — this union was written in the stars.",
    },
    {
      title: "Pre-Wedding Rituals",
      subtitle: "Haldi, Mehndi, Engagement",
      description: "Colors of turmeric, patterns of henna, and melodies of celebration filled the air. Each ritual blessed the couple with prosperity, beauty, and eternal joy.",
      date: "29th November 2025",
    },
    {
      title: "Engagement",
      subtitle: "Ring Ceremony",
      description: "In an intimate celebration, rings were exchanged as a precious promise of commitment and eternal togetherness. A beautiful prelude to the wedding ceremonies.",
      date: "Earlier",
    },
    {
      title: "Var Malaa – First Function",
      subtitle: "Ceremonial Garland Exchange at Wedding",
      description: "Before the sacred Hastmelap, the couple exchanges garlands in a beautiful ritual symbolizing their acceptance and devotion to each other.",
      date: "30th November 2025",
    },
    {
      title: "Hastmelap",
      subtitle: "Hastmelap & Jaimala Celebration",
      description:
        "Under the sacred Mandap, with blessings of Paramatma as witness, hearts unite in Jain traditions. A new journey begins — from two individuals to one soul, rooted in dharma and seva.",
      date: "30th November 2025",
    },
    {
      title: "Chaar Phere – The Four Sacred Vows",
      subtitle: "The Sacred Circumambulation",
      description: "",
      pheras: [
        { number: 1, vow: "Nourishment & Support", text: "We vow to nourish and support each other in all circumstances." },
        { number: 2, vow: "Strength & Courage", text: "We promise to be each other's strength and courage in every phase of life." },
        { number: 3, vow: "Prosperity & Wisdom", text: "We commit to grow together in prosperity and spiritual wisdom." },
        { number: 4, vow: "Love & Eternal Bond", text: "We pledge eternal love, loyalty, and companionship forever." },
      ],
      sanskrit: "चार फेरे — With four steps, we unite for eternity.",
      date: "30th November 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 gradient-elegant">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-romantic border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                <Flame className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Our Journey</h1>
            <p className="text-lg md:text-xl font-body text-foreground/70 italic">"Through four sacred steps, we unite in eternal love."</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-1 bg-primary/30" />
              <span className="text-primary text-2xl">✦</span>
              <div className="w-16 h-1 bg-primary/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />

            {timelineSteps.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} isRight={index % 2 !== 0} />
            ))}
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center gradient-romantic rounded-2xl p-12 border border-border"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/30 border-2 border-primary rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>
            <p className="font-heading text-4xl md:text-5xl text-primary mb-4">"Two hearts, one soul, bound by four sacred vows"</p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Lamp className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Flower2 className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Lamp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface TimelineItemProps {
  step: {
    title: string;
    subtitle: string;
    description: string;
    pheras?: Array<{ number: number; vow: string; text: string }>;
    sanskrit?: string;
    date?: string;
  };
  index: number;
  isRight: boolean;
}

const TimelineItem = ({ step, index, isRight }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`mb-16 md:mb-24 md:w-full relative`}
    >
      {/* Card wrapper: half width with equal padding on both sides */}
      <div className={isRight ? "md:ml-auto md:w-1/2 md:pr-8" : "md:mr-auto md:w-1/2 md:pl-8"}>
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
          {/* Mobile Content */}
          <div className="md:hidden">
            <h3 className="font-heading text-2xl text-primary">{step.title}</h3>
            <p className="text-sm text-foreground/60 font-body">{step.subtitle}</p>
            {step.date && <p className="text-xs text-primary/70 font-semibold mt-1">{step.date}</p>}
          </div>

          {/* Desktop Title and Date Display */}
          <div className="hidden md:block">
            <h3 className="font-heading text-4xl text-primary mb-2">{step.title}</h3>
            <p className="text-base text-foreground/60 font-body mb-2">{step.subtitle}</p>
            {step.date && <p className="text-sm text-primary/70 font-semibold mb-4">{step.date}</p>}
          </div>

          {step.description && <p className="text-foreground/80 font-body leading-relaxed">{step.description}</p>}

          {/* Pheras Section */}
          {step.pheras && (
            <div className="mt-6 space-y-4">
              {step.pheras.map((phera) => (
                <motion.div
                  key={phera.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: phera.number * 0.1 }}
                  className="bg-gradient-romantic rounded-lg p-4 border border-primary/20"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-primary flex-shrink-0">{phera.number}</span>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-1">{phera.vow}</h4>
                      <p className="text-sm text-foreground/70 font-body italic">{phera.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {step.sanskrit && (
                <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                  <p className="font-heading text-2xl text-primary italic">{step.sanskrit}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Journey;
