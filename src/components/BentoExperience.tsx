import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Briefcase, Calendar, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Engineer (AI & ML)",
    company: "SDX Partners",
    period: "Jan 2026 – Present",
    /*duration: "1+ year",*/
    status: "Current",
    description:
      "Developing AI/ML solutions and scalable backend systems. Building machine learning models, REST APIs, and real-time detection systems with focus on performance optimization and system architecture.",
    tags: ["Python", "TensorFlow", "FastAPI", "AWS", "NLP", "Backend"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    role: "Python Developer Intern",
    company: "Cognifyz Technologies",
    period: "Aug 2023 – Sep 2023",
    duration: "2 months",
    description:
      "Developed backend solutions and automation scripts. Worked on Python-based projects with emphasis on code quality, problem-solving, and scalable architecture design.",
    tags: ["Python", "Backend", "Automation", "API Development"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const BentoExperience = () => {
  const { ref: titleRef, isVisible: titleVis } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVis } = useScrollReveal();

  return (
    <>
      <div ref={titleRef} className={`col-span-full scroll-reveal ${titleVis ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Experience</h2>
      </div>

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.role}
          ref={cardRef}
          className={`bento-card glass-effect hover-lift col-span-full lg:col-span-8 relative scroll-reveal-left ${cardVis ? "visible" : ""}`}
          style={{ transitionDelay: `${index * 0.15}s` }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {/* Timeline accent with glow */}
          <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${exp.gradient} shadow-lg`} />

          {/* Current badge */}
          {exp.status === "Current" && (
            <motion.div
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-500" />
              <span className="text-xs font-semibold text-cyan-500">Active</span>
            </motion.div>
          )}

          <div className="pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.gradient}`}>
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                  <Calendar className="w-3 h-3" /> {exp.period}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{exp.duration}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {exp.description}
            </p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {exp.tags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-secondary/70 text-xs font-mono text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Enhanced stats card */}
      <div
        className={`bento-card glass-effect hover-lift col-span-full lg:col-span-4 scroll-reveal-right ${cardVis ? "visible" : ""}`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-6">Quick Stats</h3>
          
          {/* Stat 1: Experience */}
          <motion.div
            className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all cursor-default group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Current Role</p>
              <p className="text-lg font-bold gradient-text">SDE (AI & ML)</p>
            </div>
          </motion.div>

          {/* Stat 2: Total Experience */}
          <motion.div
            className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all cursor-default group"
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-3 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-all">
              <Calendar className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Experience</p>
              <p className="text-lg font-bold text-cyan-500">3 Months</p>
            </div>
          </motion.div>

          {/* Stat 3: Projects */}
          <motion.div
            className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all cursor-default group"
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-all">
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">ML Projects</p>
              <p className="text-lg font-bold text-purple-500">3+ Completed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BentoExperience;
