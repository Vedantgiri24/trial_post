import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import ZoomableImage from "./ZoomableImage";

interface CoordinatorCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

const CoordinatorCard = ({ name, role, phone, email, image }: CoordinatorCardProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent zoom toggle
    window.open(`tel:${phone}`, "_self");
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent zoom toggle
    window.open(`mailto:${email}`, "_self");
  };

  // Close zoom when tapping outside card (mobile only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 768) {
        if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
          setIsZoomed(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Toggle zoom on card tap (mobile only)
  const handleCardClick = () => {
    if (window.innerWidth < 768) {
      setIsZoomed((prev) => !prev);
    }
  };

  return (
    <Card
      ref={cardRef}
      onClick={handleCardClick}
      className={`group bg-card/80 backdrop-blur-sm border-border transition-all duration-300 h-full 
        ${isZoomed ? "scale-105 border-primary/50" : "scale-100"} 
        md:hover:border-primary/50 md:hover:scale-105`}
    >
      <CardContent className="p-3 md:p-6">
        <div className="text-center space-y-2 md:space-y-4">
          {/* Coordinator Image */}
          <div
            className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden 
                        transform transition-transform duration-300
                        ${isZoomed ? "scale-125" : "scale-100"} 
                        md:group-hover:scale-125`}
          >
            <ZoomableImage
              src={image}
              alt={`${name}, ${role}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Role */}
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-white transition-colors duration-300">
              {name}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              {role}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 md:space-y-3 pt-3 md:pt-4">
            <Button
              variant="ghost"
              onClick={handlePhoneClick}
              className="w-full justify-start text-muted-foreground hover:text-white"
            >
              <Phone className="h-4 w-4 mr-3" />
              {phone}
            </Button>

            <Button
              variant="ghost"
              onClick={handleEmailClick}
              className="w-full justify-start text-muted-foreground hover:text-white"
            >
              <Mail className="h-4 w-4 mr-3" />
              {email}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoordinatorCard;
