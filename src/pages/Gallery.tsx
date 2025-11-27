import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Couple's wedding and engagement photos
  const images = [
    "/images/WhatsApp Image 2025-11-16 at 12.26.40 PM (1).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.40 PM (2).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.40 PM.jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.41 PM (1).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.41 PM (2).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.41 PM.jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.42 PM (1).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.42 PM (2).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.42 PM.jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.43 PM (1).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.43 PM (2).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.43 PM.jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.44 PM (1).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.44 PM (2).jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.44 PM.jpeg",
    "/images/WhatsApp Image 2025-11-16 at 12.26.45 PM.jpeg",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Our Gallery</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl font-body text-foreground/70 max-w-2xl mx-auto">Moments captured, memories cherished - a glimpse into our love story.</p>
          </motion.div>

          {/* Masonry Grid */}
          <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} src={selectedImage} alt="Full size" className="max-w-full max-h-full object-contain rounded-lg" />
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
