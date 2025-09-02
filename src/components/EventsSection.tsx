import EventCard from "./EventCard";
import bridgeImage from "@/assets/event-bridge.jpg";
import quizImage from "@/assets/event-quiz.jpg";
import junkyardImage from "@/assets/event-junkyard.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const EventsSection = () => {
  const events = [
    {
      title: "CAD Clash",
      description: "A battle of design minds where participants compete in computer-aided design challenges to showcase creativity and precision.",
      image: hero3,
      duration: "3 hours",
      maxParticipants: "Teams of 2-3",
      prize: "₹15,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScjhoCUOYDv0KklOcItuv9_6JiCE7TnVSJCrOZtPXzjaAKl1g/viewform?usp=sf_link"
    },
    {
      title: "EV Edge",
      description: "An event exploring the innovations and advancements in Electric Vehicles with technical competitions and design challenges.",
      image: hero2,
      duration: "2 hours",
      maxParticipants: "Teams of 3-4",
      prize: "₹20,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXpZCzH-EhwQTOiW9TBCl5fhSLjO9_yHrCWemEDTN1gNKYxg/viewform?usp=sf_link"
    },
    {
      title: "Start Up Genesis 2.0",
      description: "A platform for young innovators to pitch their startup ideas, blending entrepreneurship with technical feasibility.",
      image: hero1,
      duration: "2.5 hours",
      maxParticipants: "Teams of 2-4",
      prize: "₹8,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfQKKGk4vbus5BFYxvkm_DUdNUKfAYlm-tVSgz_muCGl7k9Yw/viewform?usp=sf_link"
    },
    {
      title: "3v3 Showdown",
      description: "A thrilling basketball showdown where teams of three face off in high-energy, fast-paced matches.",
      image: quizImage,
      duration: "1.5 hours",
      maxParticipants: "Teams of 3",
      prize: "₹10,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdJKqMvYeYEHK9nNZ5qWmJU8qYYzJWQyRVZ0HNdWg4G8YFZAQ/viewform?usp=sf_link"
    },
    {
      title: "Bridge It",
      description: "Build the strongest bridge with limited materials. Apply structural engineering principles to create efficient designs.",
      image: bridgeImage,
      duration: "4 hours",
      maxParticipants: "Teams of 3-5",
      prize: "₹12,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5J7QGnAi8VCuT8ex8s7yjUYSHxA9jOxYLkI8nsWXcuA7UJA/viewform?usp=sf_link"
    },
    {
      title: "Junkyard Wars",
      description: "Build innovative machines from scrap materials. Turn waste into wonder with your engineering creativity and problem-solving skills.",
      image: junkyardImage,
      duration: "5 hours",
      maxParticipants: "Teams of 4-6",
      prize: "₹18,000",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfLxo8ub9DVHmgAO6bFWVk7VJmL2SFTmy0nYKkQqK3TUL3TQw/viewform?usp=sf_link"
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