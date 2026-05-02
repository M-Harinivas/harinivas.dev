import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Python Developer Intern",
    company: "Cognifyz Technologies",
    period: "Aug 2023 – Sep 2023",
    description:
      "Gained hands-on experience in backend development and automation. Worked on real-world Python projects, focused on problem solving and building scalable solutions.",
    tags: ["Python", "Backend", "Automation"],
  },
];

const BentoExperience = () => {
  const { ref: titleRef, isVisible: titleVis } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVis } = useScrollReveal();

  return (
    <>
      <div ref={titleRef} className={`col-span-full scroll-reveal ${titleVis ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Experience</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// professional journey</p>
      </div>

      {experiences.map((exp, index) => (
        <div
          key={exp.role}
          ref={cardRef}
          className={`bento-card col-span-full lg:col-span-8 relative scroll-reveal-left ${cardVis ? "visible" : ""}`}
          style={{ transitionDelay: `${index * 0.15}s` }}
        >
          {/* Timeline accent */}
          <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />

          <div className="pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                <Calendar className="w-3 h-3" /> {exp.period}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Summary stats card */}
      <div
        className={`bento-card col-span-full lg:col-span-4 flex flex-col justify-center items-center text-center scroll-reveal-right ${cardVis ? "visible" : ""}`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="space-y-6">
          <div>
            <p className="text-4xl font-bold gradient-text">1+</p>
            <p className="text-sm text-muted-foreground">Internship</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">3+</p>
            <p className="text-sm text-muted-foreground">ML Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">5+</p>
            <p className="text-sm text-muted-foreground">AWS Badges</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoExperience;
