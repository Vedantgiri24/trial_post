import { Settings, Lightbulb, Users, Award } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const isMobile = useIsMobile();
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Innovation",
      description: "Cutting-edge engineering challenges that push the boundaries of creativity"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creativity",
      description: "Think outside the box and develop unique solutions to complex problems"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Teamwork",
      description: "Collaborate with passionate engineers and build lasting connections"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Compete at the highest level and showcase your skills, creativity, and innovation"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 slide-in-left">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                About <span className="text-white">MECHMERISE</span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">MECHMERISE</strong> is the annual technical festival that unites creativity, innovation, and collaboration in a dynamic celebration of talent and knowledge.
                </p>

                <p>
                  With an exciting lineup of technical competitions, workshops, and engaging fun-based events, the fest provides every student an opportunity to improve skills, showcase talent, and explore new possibilities. It is a platform where learning meets excitement and challenges inspire growth.
                </p>

                <p>
                  Join us in this journey of discovery, competition, and collaboration as we shape ideas into achievements and create experiences to remember.
                </p>
              </div>
            </div>

            {/* Legacy Stats */}
            <div className="pt-6 flex justify-center">
              <div className="w-full sm:w-auto text-center p-6 bg-card/50 rounded-lg border border-border">
                <div className="text-4xl font-bold text-white mb-1">7+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-4 md:space-y-6 slide-in-right">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-gear-foreground group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-20 right-20">
            <Settings className="h-32 w-32 text-white gear-rotate" />
          </div>
          <div className="absolute bottom-20 left-20">
            <Settings className="h-24 w-24 text-accent gear-rotate-reverse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;