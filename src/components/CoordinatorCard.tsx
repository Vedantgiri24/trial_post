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
  const handlePhoneClick = () => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_self");
  };

  return (
    <Card className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow h-full">
      <CardContent className="p-3 md:p-6">
        <div className="text-center space-y-2 md:space-y-4">
          {/* Coordinator Image */}
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden">
            <ZoomableImage src={image} alt={`${name}, ${role}`} className="w-full h-full object-cover" />
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