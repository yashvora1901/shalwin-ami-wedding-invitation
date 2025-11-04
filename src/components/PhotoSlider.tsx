import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const PhotoSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder images - these would be couple's photos
  const photos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522673607198-f30bcf494d0f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-4">
            Our Moments
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="w-full max-w-5xl"
          >
            {photos.map((photo, index) => (
              <SwiperSlide
                key={index}
                className="w-full md:w-[500px] h-[300px] md:h-[400px]"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={photo}
                    alt={`Couple moment ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoSlider;
