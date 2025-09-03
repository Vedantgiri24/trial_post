import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        isScrolled || (typeof window !== "undefined" && window.innerWidth < 768)
          ? "bg-background/95 backdrop-blur-md shadow-deep border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-16 py-2 md:py-0">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="header-logo-shine rounded-full w-14 h-14 md:w-16 md:h-16 overflow-hidden">
              <Logo className="w-full h-full" alt="Mechmerise logo" />
            </div>
            <div className="text-xl font-bold text-foreground header-text-shine">
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

          {/* Mobile Morphing Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Main Menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`menu ${isMenuOpen ? "opened" : ""}`}
            >
              {/* 🔽 Reduced size here */}
              <svg width="30" height="30" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 
                     94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 
                     85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 
                     75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 
                     94.498839,71.182648 94.532987,33.288669 
                     94.543142,22.019327 90.966081,18.329754 
                     85.259173,18.331003 79.552261,18.332249 
                     75.000211,25.000058 75.000211,25.000058 
                     L 25.000021,74.999942"
                />
              </svg>
            </button>
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

      {/* Animation Styles */}
      <style>{`
        .menu {
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .line {
          fill: none;
          stroke: white;
          stroke-width: 6;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
          stroke-linecap: round;
        }

        .line1 {
          stroke-dasharray: 60 207;
          stroke-width: 6;
        }

        .line2 {
          stroke-dasharray: 60 60;
          stroke-width: 6;
        }

        .line3 {
          stroke-dasharray: 60 207;
          stroke-width: 6;
        }

        .opened .line1 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
        }

        .opened .line2 {
          stroke-dasharray: 1 60;
          stroke-dashoffset: -30;
        }

        .opened .line3 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
        }
      `}</style>
    </header>
  );
};

export default Header;
