import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";

const BentoHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bento-card glass-effect col-span-full row-span-2 relative min-h-[85vh] flex flex-col justify-center noise overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[120px] floating" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-[100px] floating-delayed" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-bl from-primary/15 to-accent/15 rounded-full blur-[80px] floating-slow" />
      
      {/* Particle effects */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 rounded-2xl" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-8 glass-effect px-4 py-2 rounded-full w-fit"
        >
          <div className="status-dot" />
          <span className="text-sm text-muted-foreground font-mono">
            Intern at @SDX Partners as Software Development Engineer (AI & ML)
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <motion.a
            href="https://www.linkedin.com/in/harinivas-m-504ab7250/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium shimmer-on-hover hover-lift shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform" /> LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/M-Harinivas"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium shimmer-on-hover hover-lift shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" /> GitHub
          </motion.a>
          <motion.a
            href="mailto:harinivas987@gmail.com"
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 text-sm font-medium hover-lift shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mail className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" /> 
            <span className="relative z-10">Get in Touch</span>
          </motion.a>
        </motion.div>
        </div>
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
