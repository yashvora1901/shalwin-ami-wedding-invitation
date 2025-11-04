import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-primary" />
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border"
        >
          <p className="text-lg md:text-xl font-body text-foreground/80 leading-relaxed mb-6">
            Love is not just about finding the perfect person, but about seeing
            an imperfect person perfectly. Our journey began in the most
            unexpected way, and every moment since has been nothing short of
            magical.
          </p>
          <p className="text-lg md:text-xl font-body text-foreground/80 leading-relaxed mb-6">
            From our first conversation to countless memories we've created
            together, every step has led us to this beautiful moment. We've
            laughed, we've grown, and we've built a love that will last a
            lifetime.
          </p>
          <p className="text-lg md:text-xl font-body text-foreground/80 leading-relaxed">
            Now, we're ready to start the greatest adventure of all - marriage.
            And we'd be honored to have you witness this special day as we
            pledge our love and commitment to each other.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-heading text-3xl md:text-4xl text-primary italic">
            "Two souls, one heart"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
