import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const BentoHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bento-card col-span-full row-span-2 relative min-h-[85vh] flex flex-col justify-center noise"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/15 rounded-full blur-[100px] floating" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/15 rounded-full blur-[80px] floating-delayed" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/10 rounded-full blur-[60px] floating-slow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 rounded-2xl" />

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="status-dot" />
          <span className="text-sm text-muted-foreground font-mono">
            Open for internships & collaborations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
        >
          Hi, I'm
          <br />
          <span className="gradient-text">Harinivas M</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-4"
        >
          Machine Learning Engineer & AI Enthusiast — building predictive models, real-time detection systems, and intelligent solutions with Python, TensorFlow & AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Dharmapuri, India
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> +91 6369792085
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="https://www.linkedin.com/in/harinivas-m-504ab7250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="mailto:harinivas987@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono">scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </motion.div>
  );
};

export default BentoHero;
