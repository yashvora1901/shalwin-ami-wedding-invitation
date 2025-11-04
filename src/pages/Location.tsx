import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const venue = {
    name: "Heritage Resort & Convention Center",
    address: "123 Garden Street, Downtown District",
    city: "Your City, State 12345",
    phone: "+1 (555) 123-4567",
    email: "events@heritageresort.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5883792075586!2d-73.98784668459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    googleMapsLink: "https://goo.gl/maps/example",
  };

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
              Venue Location
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl font-body text-foreground/70 max-w-2xl mx-auto">
              Find us at this beautiful venue where our love story continues.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
                <h2 className="font-heading text-4xl text-primary mb-6">
                  {venue.name}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-body text-foreground/80">{venue.address}</p>
                      <p className="font-body text-foreground/80">{venue.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${venue.phone}`}
                      className="font-body text-foreground/80 hover:text-primary transition-colors"
                    >
                      {venue.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${venue.email}`}
                      className="font-body text-foreground/80 hover:text-primary transition-colors"
                    >
                      {venue.email}
                    </a>
                  </div>
                </div>

                <Button
                  className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  onClick={() => window.open(venue.googleMapsLink, "_blank")}
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>

              {/* Parking & Additional Info */}
              <div className="bg-secondary/50 rounded-3xl p-8 border border-border">
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Helpful Information
                </h3>
                <ul className="space-y-3 font-body text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Complimentary valet parking available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Wheelchair accessible venue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Air-conditioned indoor halls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Beautiful outdoor garden areas</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-primary/20 h-full min-h-[500px]">
                <iframe
                  src={venue.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[500px]"
                  title="Venue Location Map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
