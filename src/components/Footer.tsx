import { Settings, Heart, Instagram, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/svpcetmechmerise2k25/", "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/place/St.+Vincent+Pallotti+College+of+Engineering+and+Technology/@21.0046708,79.0451583,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4bdc6b03bfded:0x51964eb66fa3ec5e!8m2!3d21.0046708!4d79.0477332!16s%2Fm%2F0cp4krn?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D.", "_blank");
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg" alt="Mechmerise logo" />
              <div className="text-xl font-bold text-foreground">
                MECH<span className="text-white">MERISE</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              The premier technical festival of Mechanical Engineering that celebrates 
              innovation, creativity, and excellence in Engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Events", "About", "Coordinators", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Event Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gear-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Date</div>
                  <div className="text-sm text-muted-foreground">10 Oct 2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLocationClick}>
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-gear-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground hover:text-white transition-colors duration-300">St. Vincent Pallotti College of Engineering and Technology</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Instagram className="h-4 w-4 text-gear-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Follow Us</div>
                  <button
                    onClick={handleInstagramClick}
                    className="text-sm text-muted-foreground hover:text-white transition-colors duration-300"
                  >
                    @svpcetmechmerise2k25
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-2 md:mb-0">
              © 2025 MECHMERISE | Presented with <Heart className="inline h-4 w-4 text-red-500" /> by the Department of Mechanical Engineering
            </p>
            <p className="text-muted-foreground font-montserrat font-thin text-xs tracking-wider">
              Design & Developed by : Vedant Giri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;