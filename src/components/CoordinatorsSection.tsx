import CoordinatorCard from "./CoordinatorCard";
import coordinator1 from "../assets/coordinators/jpg/coordinator1.jpg";
import coordinator2 from "../assets/coordinators/jpg/coordinator2.jpg";
import coordinator3 from "../assets/coordinators/jpg/coordinator3.jpg";
import coordinator4 from "../assets/coordinators/jpg/coordinator4.jpg";
import coordinator5 from "../assets/coordinators/jpg/coordinator5.jpg";
import coordinator6 from "../assets/coordinators/jpg/coordinator6.jpg";
import coordinator7 from "../assets/coordinators/jpg/coordinator7.jpg";
import coordinator8 from "../assets/coordinators/jpg/coordinator8.jpg";

const CoordinatorsSection = () => {
  const coordinators = [
    {
      name: "Kartik Pharande",
      role: "Coordinator",
      phone: "+91-9811111111",
      email: "kartik.pharande@mechmerise.com",
      image: coordinator1
    },
    {
      name: "Vedant Giri",
      role: "Co Coordinator",
      phone: "+91-9028488203",
      email: "girivedant11@gmail.com",
      image: coordinator2
    },
    {
      name: "Yashasvi Bhoyar",
      role: "Co Coordinator",
      phone: "+91-9833333333",
      email: "yashasvi.bhoyar@mechmerise.com",
      image: coordinator3
    },
    {
      name: "Nachiket Jakate",
      role: "Finance Coordinator",
      phone: "+91-9876543211",
      email: "nachiket.jakate@mechmerise.com",
      image: coordinator4
    },
    {
      name: "Paurush Nirwan",
      role: "Media Coordinator",
      phone: "+91-9876543212",
      email: "paurush.nirwan@mechmerise.com",
      image: coordinator5
    },
    {
      name: "Aman Raut",
      role: "Publicity & Promotion Coordinator",
      phone: "+91-9876543213",
      email: "aman.raut@mechmerise.com",
      image: coordinator6
    },
    {
      name: "Himanshu Naidu",
      role: "Anchoring & Stage Coordination Coordinator",
      phone: "+91-9876543214",
      email: "himanshu.naidu@mechmerise.com",
      image: coordinator7
    },
    {
      name: "Jayesh Gajbhiye",
      role: "Discipline Coordinator",
      phone: "+91-9876543215",
      email: "jayesh.gajbhiye@mechmerise.com",
      image: coordinator8
    }
  ];

  return (
    <section id="coordinators" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Our <span className="text-white">Team</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated student coordinators working passionately to make MECHMERISE 2K25 
            an unforgettable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {coordinators.map((coordinator, index) => (
            <div key={index} className="fade-in-up w-full max-w-sm" style={{ animationDelay: `${index * 0.1}s` }}>
              <CoordinatorCard {...coordinator} />
            </div>
          ))}
        </div>

        {/* Team Photo Section */}
        <div className="mt-12 md:mt-16 text-center fade-in-up">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl font-bold text-gear-foreground">TEAM</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              MECHMERISE 2K25 Organizing Committee
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              A passionate group of mechanical engineering students united by the vision of creating 
              an extraordinary technical festival that celebrates innovation, creativity, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;