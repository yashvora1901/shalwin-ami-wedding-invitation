import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Flame } from "lucide-react";

const Journey = () => {
  const timelineSteps = [
    {
      title: "Groom's Story",
      subtitle: "Shalwin's Early Life",
      description: "Born into a loving family, Shalwin grew up with strong values of respect, dedication, and faith. His journey shaped him into a man of character, ready to build a family rooted in tradition.",
      icon: "✨",
    },
    {
      title: "Bride's Story",
      subtitle: "Ami's Early Life",
      description: "Ami blossomed with grace, kindness, and devotion. Nurtured by her family's blessings, she carried the essence of tradition and warmth, preparing to embrace a new chapter.",
      icon: "🌸",
    },
    {
      title: "When Families Met",
      subtitle: "The Sacred Union Begins",
      description: "With prayers to Lord Ganesh, both families came together. Hearts aligned, blessings exchanged, and destiny whispered — this union was written in the stars.",
      icon: "🪔",
    },
    {
      title: "Roka Ceremony",
      subtitle: "First Official Meeting",
      description: "In the presence of elders and divine grace, Shalwin and Ami met for the first time. Eyes spoke, hearts felt, and a beautiful journey began with blessings and sacred rituals.",
      icon: "🙏",
    },
    {
      title: "Engagement",
      subtitle: "Ring Ceremony",
      description: "Surrounded by joy and celebration, rings were exchanged as a promise of togetherness. Two souls, two families, united in love and faith.",
      icon: "💍",
    },
    {
      title: "Pre-Wedding Rituals",
      subtitle: "Haldi, Mehndi, Sangeet",
      description: "Colors of turmeric, patterns of henna, and melodies of celebration filled the air. Each ritual blessed the couple with prosperity, beauty, and eternal joy.",
      icon: "🌼",
    },
    {
      title: "Saat Phere – The Seven Sacred Vows",
      subtitle: "Bound by the sacred fire",
      description: "",
      pheras: [
        { number: 1, vow: "Nourishment & Respect", text: "We walk together to provide and honor each other." },
        { number: 2, vow: "Strength & Togetherness", text: "We promise to be each other's support in every phase." },
        { number: 3, vow: "Prosperity & Growth", text: "We vow to grow together in wealth and wisdom." },
        { number: 4, vow: "Happiness & Love", text: "We commit to fill our lives with love and joy." },
        { number: 5, vow: "Blessings for Children", text: "We seek divine blessings for our family." },
        { number: 6, vow: "Health & Lifelong Support", text: "We pledge to care for each other in health and hardship." },
        { number: 7, vow: "Eternal Bond & Friendship", text: "We become companions, friends, and soulmates forever." },
      ],
      sanskrit: "सप्तपदी भव — With seven steps, we become one.",
      icon: "🔥",
    },
    {
      title: "The Wedding Day",
      subtitle: "30 November 2025",
      description: "Under the sacred Mandap, with Agni as witness, garlands exchanged, blessings received, and hearts united. A new journey begins — from two individuals to one soul.",
      icon: "💐",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 gradient-elegant">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Flame className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">
              Our Journey
            </h1>
            <p className="text-lg md:text-xl font-body text-foreground/70 italic">
              "In the presence of Agni, we promise forever."
            </p>
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
              <TimelineItem 
                key={index} 
                step={step} 
                index={index} 
                isRight={index % 2 !== 0}
              />
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
            <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-primary" />
            <p className="font-heading text-4xl md:text-5xl text-primary mb-4">
              "Two hearts, one soul, bound in the sacred fire of Agni"
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="text-3xl">🪔</span>
              <span className="text-3xl">🌺</span>
              <span className="text-3xl">🪔</span>
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
    icon: string;
    pheras?: Array<{ number: number; vow: string; text: string }>;
    sanskrit?: string;
  };
  index: number;
  isRight: boolean;
}

const TimelineItem = ({ step, index, isRight }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative mb-16 md:mb-24 ${
        isRight ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"
      } md:w-1/2`}
    >
      {/* Timeline Icon */}
      <div className="hidden md:block absolute top-8 left-1/2 md:left-auto md:right-auto transform -translate-x-1/2 w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center text-3xl shadow-lg z-10"
        style={isRight ? { right: "-2rem" } : { left: "-2rem" }}
      >
        {step.icon}
      </div>

      {/* Content Card */}
      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4 md:hidden">
          <span className="text-4xl">{step.icon}</span>
          <div>
            <h3 className="font-heading text-3xl text-primary">{step.title}</h3>
            <p className="text-sm text-foreground/60 font-body">{step.subtitle}</p>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="font-heading text-4xl text-primary mb-2">{step.title}</h3>
          <p className="text-base text-foreground/60 font-body mb-4">{step.subtitle}</p>
        </div>

        {step.description && (
          <p className="text-foreground/80 font-body leading-relaxed">
            {step.description}
          </p>
        )}

        {/* Seven Pheras Section */}
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
                  <span className="text-2xl font-bold text-primary flex-shrink-0">
                    {phera.number}
                  </span>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">
                      {phera.vow}
                    </h4>
                    <p className="text-sm text-foreground/70 font-body italic">
                      {phera.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {step.sanskrit && (
              <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                <p className="font-heading text-2xl text-primary italic">
                  {step.sanskrit}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className={`hidden md:block absolute top-0 ${isRight ? "left-0" : "right-0"} -z-10`}>
        <Sparkles className="w-8 h-8 text-primary/20" />
      </div>
    </motion.div>
  );
};

export default Journey;
