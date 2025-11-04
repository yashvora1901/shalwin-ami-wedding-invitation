import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import Countdown from "@/components/Countdown";
import PhotoSlider from "@/components/PhotoSlider";
import WhatsAppShare from "@/components/WhatsAppShare";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StorySection />
      <Countdown />
      <PhotoSlider />
      <WhatsAppShare />
      <Footer />
    </div>
  );
};

export default Index;
