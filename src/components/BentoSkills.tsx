import { motion } from "framer-motion";

const techStack = [
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 90 },
  { name: "Java", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "SQL", level: 80 },
];

const tools = ["Git", "VS Code", "Docker", "Linux", "Figma", "MongoDB", "Firebase", "Tailwind CSS"];

const BentoSkills = () => {
  return (
    <>
      {/* Skills bars card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bento-card col-span-full sm:col-span-6 lg:col-span-4 row-span-2"
      >
        <h3 className="text-lg font-semibold mb-1">Tech Stack</h3>
        <p className="text-sm text-muted-foreground mb-5 font-mono">// languages & frameworks</p>
        
        <div className="space-y-4">
          {techStack.map((tech) => (
            <div key={tech.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium">{tech.name}</span>
                <span className="text-muted-foreground font-mono">{tech.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tools chip card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bento-card col-span-full sm:col-span-6 lg:col-span-4"
      >
        <h3 className="text-lg font-semibold mb-1">Tools & Tech</h3>
        <p className="text-sm text-muted-foreground mb-4 font-mono">// daily drivers</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BentoSkills;
