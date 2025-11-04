import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Sparkles, Flower2, Heart, Church } from "lucide-react";

const Functions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      name: "Haldi Ceremony",
      icon: Sparkles,
      date: "28th November 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "The Grand Lawn, Heritage Resort",
      description: "A traditional yellow celebration filled with turmeric, laughter, and blessings.",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      name: "Mehndi Night",
      icon: Flower2,
      date: "28th November 2025",
      time: "6:00 PM - 10:00 PM",
      venue: "The Garden Terrace, Heritage Resort",
      description: "An evening of intricate henna designs, music, and celebration.",
      color: "from-green-100 to-green-50",
    },
    {
      name: "Mandap Muhurat",
      icon: Church,
      date: "29th November 2025",
      time: "7:00 PM - 9:00 PM",
      venue: "The Royal Hall, Heritage Resort",
      description: "Sacred ceremony to bless the wedding mandap with prayers and rituals.",
      color: "from-orange-100 to-orange-50",
    },
    {
      name: "Wedding Ceremony",
      icon: Heart,
      date: "30th November 2025",
      time: "6:00 PM - 11:00 PM",
      venue: "The Grand Ballroom, Heritage Resort",
      description: "The moment we've all been waiting for - witness our union and celebrate with us!",
      color: "from-pink-100 to-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">
              Wedding Functions
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl font-body text-foreground/70 max-w-2xl mx-auto">
              Join us for multiple days of celebration, tradition, and love as we embark on this beautiful journey together.
            </p>
          </motion.div>

          {/* Events Timeline */}
          <div ref={ref} className="space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${event.color} rounded-3xl p-8 md:p-10 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="font-heading text-3xl md:text-4xl text-primary mb-3">
                          {event.name}
                        </h3>
                        <p className="text-foreground/70 font-body mb-4">
                          {event.description}
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-body text-sm text-foreground/80">
                              {event.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="font-body text-sm text-foreground/80">
                              {event.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="font-body text-sm text-foreground/80">
                              {event.venue}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline connector (except for last item) */}
                  {index < events.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-primary/30 transform -translate-x-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Functions;
