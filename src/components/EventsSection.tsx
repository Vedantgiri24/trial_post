import EventCard from "./EventCard";
import bridgeImage from "@/assets/hvac.png";
import quizImage from "@/assets/event-quiz.jpg";
import junkyardImage from "@/assets/cnc.png";
import hero1 from "@/assets/Startup.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import caImage from "@/assets/ca.png"; // CatastStrike image
import ggImage from "@/assets/far.png"; // TAR Workshop image
import aoImage from "@/assets/Automation.png"; // FAR Workshop image

const EventsSection = () => {
  const events = [
    {
      title: "CAD Clash",
      description: "A battle of design minds where participants compete in computer-aided design challenges to showcase creativity and precision.",
      image: hero3,
      duration: "3 hours",
      maxParticipants: "Teams of 2-3",
      prize: "₹15,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfqy2UmCuzj7OlQsNhLmVd8cerHSIxNi1qoCir9CkKMFYnVew/viewform?usp=header"
    },
    {
      title: "EV Edge",
      description: "An event exploring the innovations and advancements in Electric Vehicles with technical competitions and design challenges.",
      image: hero2,
      duration: "2 hours",
      maxParticipants: "Teams of 3-4",
      prize: "₹20,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd6y5HvWERxdzsOWlznfKWF5AkUl5OKTrcJNXVFhfTblM7Z4g/viewform?usp=header"
    },
    {
      title: "Start Up Genesis 2.0",
      description: "A platform for young innovators to pitch their startup ideas, blending entrepreneurship with technical feasibility.",
      image: hero1,
      duration: "2.5 hours",
      maxParticipants: "Teams of 2-4",
      prize: "₹8,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd1wZ2KuFefgC2d6Ni0qQmSJespi6n-pXEpCWck5Dj25i9w4w/viewform?usp=header"
    },
    {
      title: "3v3 Showdown",
      description: "A thrilling basketball showdown where teams of three face off in high-energy, fast-paced matches.",
      image: quizImage,
      duration: "1.5 hours",
      maxParticipants: "Teams of 3",
      prize: "₹10,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeGpR2S3rslNFlYO16fpVStinwXnSFjhfRcXdADu5Hju_WDPQ/viewform?usp=header"
    },
    {
      title: "HVAC Hustle",
      description: "An event highlighting smart HVAC innovations through interactive engineering and design challenges.",
      image: bridgeImage,
      duration: "4 hours",
      maxParticipants: "Teams of 3-5",
      prize: "₹12,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScnIUv2zoufcRZdvNC1fRAy919VCOxEkWZgrOw5cD-QJyrVtQ/viewform?usp=header"
    },
    {
      title: "Techforge",
      description: "An event showcasing innovative machine building through hands-on CNC and engineering challenges.",
      image: junkyardImage,
      duration: "5 hours",
      maxParticipants: "Teams of 4-6",
      prize: "₹18,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0SARTRWlAlUMOg8U8q3wLJzJb93IH5SI3EE09Ps8GZhiIjA/viewform?usp=header"
    },
    {
      title: "Ignitron",
      description: "An engaging TAR & FAR workshop for Formula Bharat, enhancing knowledge and real-world application skills.",
      image: ggImage,
      duration: "TBD",
      maxParticipants: "TBD",
      prize: "TBD",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeU5-Ix8wbFQYn8A0rDGhjJ3iodGTVZXPUW1bKX5dhxjIOeHQ/viewform?usp=header"
    },
    {
      title: "Catastrike",
      description: "A thrilling challenge where teams build and launch catapults to hit targets in fast-paced, action-packed rounds.",
      image: caImage,
      duration: "TBD",
      maxParticipants: "TBD",
      prize: "TBD",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfPzAhrVPRYU-4xe-XGN3VyqhLWLENgVAbl8shhDUNI-zAwKg/viewform?usp=header"
    },
    {
      title: "Roboarena",
      description: "An event showcasing Arduino-based automation through hands-on building and programming challenges",
      image: aoImage,
      duration: "TBD",
      maxParticipants: "TBD",
      prize: "TBD",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOgelReyjNRWhQyGBLf2fKwMvGXdZAh94yGKqxsesm21o2xQ/viewform?usp=header"
    }
  ];

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            <span className="text-white">Events</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unleash your potential, embrace new challenges, and let your talent inspire others. The stage is waiting—it's time to be a part of it!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {events.map((event, index) => (
            <div key={index} className="fade-in-up w-full max-w-sm" style={{ animationDelay: `${index * 0.1}s` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
