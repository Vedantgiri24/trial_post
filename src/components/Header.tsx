import { useState, useEffect } from "react";
import { Menu, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Disable shrink/expand on small screens
      if (window.innerWidth < 768) return;
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Events", id: "events" },
    { label: "About", id: "about" },
    { label: "Coordinators", id: "coordinators" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Always keep a solid header on mobile to avoid visual jumps
        isScrolled || typeof window !== 'undefined' && window.innerWidth < 768
          ? "bg-background/95 backdrop-blur-md shadow-deep border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-16 py-2 md:py-0">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="header-logo-shine rounded-full w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 overflow-hidden">
              <Logo className="w-full h-full" alt="Mechmerise logo" />
            </div>
            <div className="text-xl md:text-xl font-bold text-foreground header-text-shine">
              MECH<span className="text-white">MERISE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant={isMenuOpen ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-16 w-16 rounded-xl"
            >
              {isMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 p-3 border-t border-border bg-background/95 backdrop-blur-lg shadow-lg z-40">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 px-4 text-xl font-medium text-foreground hover:text-white hover:bg-secondary/70 rounded-lg transition-colors duration-300 mb-1"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;