import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
  maxParticipants?: string;
  prize?: string;
}

const EventCard = ({ title, description, image }: EventCardProps) => {
  return (
    <Card className="group h-full flex flex-col overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4 mt-auto">
          <Button variant="gear" className="w-full">
            Register Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;