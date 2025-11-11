import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="font-heading text-3xl text-primary">Shalwin & Ami</span>
        </div>

        <p className="text-foreground/70 font-body mb-2">November 30, 2025</p>

        <p className="text-foreground/60 font-body text-sm">We can't wait to celebrate with you!</p>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-foreground/50 font-body text-xs">Made with love © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
