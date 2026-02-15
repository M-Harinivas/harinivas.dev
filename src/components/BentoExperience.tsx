import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Tech Company Name",
    period: "Jun 2025 – Aug 2025",
    description: "Built REST APIs and contributed to frontend features using React and Node.js. Improved app performance by 30%.",
    tags: ["React", "Node.js", "REST API"],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2024 – Present",
    description: "Contributed to open-source projects on GitHub, fixing bugs and adding features for developer tools.",
    tags: ["Git", "Open Source", "Collaboration"],
  },
];

const BentoExperience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="col-span-full"
      >
        <h2 className="text-3xl font-bold mb-1">Experience</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// where I've worked</p>
      </motion.div>

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
          className="bento-card col-span-full lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </div>
            <span className="ml-auto text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default BentoExperience;
