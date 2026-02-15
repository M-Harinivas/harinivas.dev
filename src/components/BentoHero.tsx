import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const BentoHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bento-card col-span-full lg:col-span-8 row-span-2 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="status-dot" />
          <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm{" "}
          <span className="gradient-text">Harinivas M</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
          Computer Science student passionate about building impactful software & exploring cutting-edge technology.
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-8">
        <a
          href="https://www.linkedin.com/in/harinivas-m-504ab7250/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="mailto:harinivas@example.com"
          className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="#contact"
          className="ml-auto flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Let's Connect <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default BentoHero;
