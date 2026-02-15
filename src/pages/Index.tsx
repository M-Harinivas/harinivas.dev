import Navigation from "@/components/Navigation";
import BentoHero from "@/components/BentoHero";
import BentoSkills from "@/components/BentoSkills";
import BentoProjects from "@/components/BentoProjects";
import BentoEducation from "@/components/BentoEducation";
import BentoExperience from "@/components/BentoExperience";
import BentoAchievements from "@/components/BentoAchievements";
import BentoContact from "@/components/BentoContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
          {/* Hero Section */}
          <BentoHero />
          
          {/* Skills Section */}
          <div className="col-span-full" id="skills" />
          <BentoSkills />
          
          {/* Projects Section */}
          <div className="col-span-full mt-8" id="projects" />
          <BentoProjects />
          
          {/* Education Section */}
          <div className="col-span-full mt-8" id="education" />
          <BentoEducation />
          
          {/* Experience Section */}
          <div className="col-span-full mt-8" id="experience" />
          <BentoExperience />
          
          {/* Achievements Section */}
          <div className="col-span-full mt-8" />
          <BentoAchievements />
          
          {/* Contact Section */}
          <div className="col-span-full mt-8" />
          <BentoContact />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground font-mono">
          <p>© 2026 Harinivas M. Built with 💜</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
