import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EventsSection from "../components/EventsSection";
import AboutSection from "../components/AboutSection";
import CoordinatorsSection from "../components/CoordinatorsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <AboutSection />
        <CoordinatorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
