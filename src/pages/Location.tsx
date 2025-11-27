import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const venues = [
    {
      type: "Wedding Venue",
      name: "Wedding Ceremony Location",
      address: "Grand Venue",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4915384571407!2d77.20256952346869!3d28.56714867249767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6d3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sWedding%20Venue!5e0!3m2!1sen!2sin!4v1234567890123",
      googleMapsLink: "https://share.google/got2HsfFfbnbypgj5",
    },
    {
      type: "Guest Stay",
      name: "Hotel / Accommodation",
      address: "Comfortable Stay",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1234567890!2d77.19876543210!3d28.57123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6d1234567!2sGuest%20Hotel!5e0!3m2!1sen!2sin!4v1234567890456",
      googleMapsLink: "https://share.google/LYYvc4DiC7pcGBGFD",
      note: "Both Comfortable Stay and engagement celebration happen at this venue",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Venue Location</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl font-body text-foreground/70 max-w-2xl mx-auto">Find us at this beautiful venue where our love story continues.</p>
          </motion.div>

          {/* Two Venues Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} className="space-y-6">
                {/* Venue Card */}
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-primary font-semibold uppercase tracking-wide">{venue.type}</span>
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">{venue.name}</h2>

                  <p className="font-body text-foreground/80 mb-6">{venue.address}</p>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" onClick={() => window.open(venue.googleMapsLink, "_blank")}>
                    <Navigation className="w-5 h-5 mr-2" />
                    View on Google Maps
                  </Button>
                </div>

                {/* Map */}
                <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-primary/20 h-[400px]">
                  <iframe
                    src={venue.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title={`${venue.type} Location Map`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
