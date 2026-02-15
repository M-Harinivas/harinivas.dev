import Navigation from "@/components/Navigation";
import BentoHero from "@/components/BentoHero";
import BentoAbout from "@/components/BentoAbout";
import BentoSkills from "@/components/BentoSkills";
import BentoProjects from "@/components/BentoProjects";
import BentoEducation from "@/components/BentoEducation";
import BentoExperience from "@/components/BentoExperience";
import BentoContact from "@/components/BentoContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />

      {/* Marquee ticker */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="marquee whitespace-nowrap flex gap-8 text-xs font-mono tracking-wider">
          <span>PYTHON • MACHINE LEARNING • DEEP LEARNING • AWS • TENSORFLOW • NLP • OPENCV • FLASK • MYSQL •</span>
          <span>PYTHON • MACHINE LEARNING • DEEP LEARNING • AWS • TENSORFLOW • NLP • OPENCV • FLASK • MYSQL •</span>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 pt-6 pb-20 max-w-6xl">
        <div className="grid grid-cols-12 gap-4">
          {/* Hero */}
          <BentoHero />

          {/* About */}
          <div className="col-span-full mt-12" id="about" />
          <BentoAbout />

          {/* Skills */}
          <div className="col-span-full mt-12" id="skills" />
          <BentoSkills />

          {/* Projects */}
          <div className="col-span-full mt-12" id="projects" />
          <BentoProjects />

          {/* Education */}
          <div className="col-span-full mt-12" id="education" />
          <BentoEducation />

          {/* Experience */}
          <div className="col-span-full mt-12" id="experience" />
          <BentoExperience />

          {/* Contact */}
          <div className="col-span-full mt-12" id="contact" />
          <BentoContact />
        </div>

        <footer className="mt-20 mb-8 text-center text-sm text-muted-foreground font-mono">
          <p>© 2026 Harinivas M — Built with 💜</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
