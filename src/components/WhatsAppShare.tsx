import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppShare = () => {
  const handleShare = () => {
    const message = encodeURIComponent(
      `🎊 You're Invited! 🎊\n\n💑 Shalwin & Ami's Wedding\n📅 30th November 2025\n\nJoin us for this beautiful celebration of love!\n\n🔗 View the invitation: ${window.location.origin}`
    );
    
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4"
    >
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-gradient-romantic rounded-3xl p-8 md:p-12 shadow-lg border border-border">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <h3 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            Share Our Joy
          </h3>
          
          <p className="text-lg font-body text-foreground/80 mb-8">
            Help us spread the word! Share our wedding invitation with your loved ones on WhatsApp.
          </p>

          <Button
            onClick={handleShare}
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Share on WhatsApp
          </Button>

          <p className="text-sm font-body text-foreground/60 mt-4 italic">
            "Love is meant to be shared, and so is our celebration!"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppShare;
