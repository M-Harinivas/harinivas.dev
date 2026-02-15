import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Assistant",
    description: "A conversational AI chatbot built with Python and NLP techniques for intelligent responses.",
    tags: ["Python", "NLP", "Flask"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with cart, payments, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking app with beautiful visualizations and forecasts.",
    tags: ["TypeScript", "API", "Charts"],
    link: "#",
    github: "#",
  },
];

const BentoProjects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="col-span-full"
      >
        <h2 className="text-3xl font-bold mb-1">Featured Projects</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// things I've built</p>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
          className="bento-card col-span-full sm:col-span-6 lg:col-span-4 flex flex-col justify-between group"
        >
          <div>
            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
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
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.link}
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default BentoProjects;
