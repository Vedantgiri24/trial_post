import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, User } from "lucide-react";

interface CoordinatorCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
}

const CoordinatorCard = ({ name, role, phone, email }: CoordinatorCardProps) => {
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
          {/* Avatar */}
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <User className="h-6 w-6 md:h-8 md:w-8 text-gear-foreground" />
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