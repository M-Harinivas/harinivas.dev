import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink, Github, Cpu, Bug, Sprout } from "lucide-react";

const projects = [
  {
    title: "Landmark Detection Using ML",
    description:
      "Developed a machine learning model to locate and localize landmarks in images, focusing on high-accuracy detection. Implemented end-to-end pipeline from data processing to model deployment.",
    tags: ["Machine Learning", "Python", "Computer Vision"],
    icon: Cpu,
    period: "2023 – 2024",
    link: "#",
    github: "#",
  },
  {
    title: "Realtime Pest Detection (RestNet50)",
    description:
      "A real-time detection system to identify pests and intruders in agriculture environments. Utilized computer vision with OpenCV to find and alert for unwanted pests.",
    tags: ["RestNet50", "OpenCV", "Deep Learning", "Real-time"],
    icon: Bug,
    period: "2024 – 2025",
    link: "#",
    github: "#",
  },
  {
    title: "ETL Based Crop Recommendation",
    description:
      "Built an ML-based crop recommendation system using Random Forest from soil & weather data. Automated ETL with Apache Airflow, stored in Snowflake, deployed on AWS EC2 with a Gemini AI chatbot.",
    tags: ["Random Forest", "AWS EC2", "Airflow", "Snowflake", "Gemini AI"],
    icon: Sprout,
    period: "2024 – 2025",
    link: "#",
    github: "#",
  },
];

const BentoProjects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <>
      <div
        ref={titleRef}
        className={`col-span-full scroll-reveal ${titleVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Featured Projects</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// things I've built</p>
      </div>

      {projects.map((project, index) => {
        const { ref, isVisible } = useScrollReveal();
        return (
          <div
            key={project.title}
            ref={ref}
            className={`bento-card col-span-full lg:col-span-4 flex flex-col justify-between group scroll-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <a
                href={project.github}
                className="p-2.5 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.link}
                className="p-2.5 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BentoProjects;
