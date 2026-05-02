import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Brain, Code, Cloud, Database, Globe, MessageSquare } from "lucide-react";

const techSkills = [
  { name: "Python", icon: Code, level: 90 },
  { name: "Machine Learning", icon: Brain, level: 85 },
  { name: "Deep Learning", icon: Brain, level: 78 },
  { name: "NLP", icon: MessageSquare, level: 75 },
  { name: "Cloud (AWS)", icon: Cloud, level: 80 },
  { name: "MySQL", icon: Database, level: 78 },
  { name: "Web Dev", icon: Globe, level: 72 },
  { name: "TensorFlow", icon: Code, level: 80 },
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Adaptability",
  "Team Leading",
  "Decision Making",
];

const tools = [
  "Python", "TensorFlow", "OpenCV", "Flask",
  "AWS EC2", "Snowflake", "Apache Airflow",
  "MySQL", "Git", "VS Code", "Gemini AI", "RestNet50",
];

const BentoSkills = () => {
  const { ref: ref1, isVisible: v1 } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();
  const { ref: ref3, isVisible: v3 } = useScrollReveal();

  return (
    <>
      {/* Tech skills with bars */}
      <div
        ref={ref1}
        className={`bento-card col-span-full sm:col-span-6 lg:col-span-5 row-span-2 scroll-reveal ${v1 ? "visible" : ""}`}
        style={{ transitionDelay: "0.1s" }}
      >
        <h3 className="text-lg font-semibold mb-1">Technical Skills</h3>
        <p className="text-sm text-muted-foreground mb-5 font-mono">// core competencies</p>

        <div className="space-y-4">
          {techSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="flex items-center gap-2 font-medium">
                  <skill.icon className="w-3.5 h-3.5 text-primary" />
                  {skill.name}
                </span>
                <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: v1 ? `${skill.level}%` : "0%",
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                    transitionDelay: "0.3s",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div
        ref={ref2}
        className={`bento-card col-span-full sm:col-span-6 lg:col-span-3 scroll-reveal ${v2 ? "visible" : ""}`}
        style={{ transitionDelay: "0.2s" }}
      >
        <h3 className="text-lg font-semibold mb-1">Soft Skills</h3>
        <p className="text-sm text-muted-foreground mb-4 font-mono">// strengths</p>
        <div className="space-y-2">
          {softSkills.map((skill, i) => (
            <div
              key={skill}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
            >
              <span className="text-xs font-mono text-accent w-5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools chip card */}
      <div
        ref={ref3}
        className={`bento-card col-span-full lg:col-span-4 scroll-reveal ${v3 ? "visible" : ""}`}
        style={{ transitionDelay: "0.3s" }}
      >
        <h3 className="text-lg font-semibold mb-1">Tools & Tech</h3>
        <p className="text-sm text-muted-foreground mb-4 font-mono">// daily stack</p>
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
      </div>
    </>
  );
};

export default BentoSkills;
