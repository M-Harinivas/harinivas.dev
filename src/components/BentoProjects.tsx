import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink, Github, Cpu, Bug, Sprout, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
      </div>

      {projects.map((project, index) => {
        const { ref, isVisible } = useScrollReveal();
        return (
          <motion.div
            key={project.title}
            ref={ref}
            className={`bento-card bento-card-3d glow-border col-span-full lg:col-span-4 flex flex-col justify-between group scroll-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Animated corner accent */}
            <motion.div 
              className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary/50">{project.period}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <motion.a
                href={project.github}
                className="group/btn p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.link}
                className="group/btn p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default BentoProjects;
