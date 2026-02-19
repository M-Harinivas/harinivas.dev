import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          y: backgroundY,
          scale,
        }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 hero-overlay"
        style={{ opacity }}
      />
      
      {/* Content with Staggered Animation */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            MINIMAL
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            ARCHITECTURE
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          Creating spaces that inspire through thoughtful design and uncompromising quality
        </motion.p>
      </div>
      
      {/* Enhanced Scroll Indicator with Bounce */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <motion.div 
          className="w-px h-16 bg-white/40"
          animate={{ 
            scaleY: [1, 0.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="text-minimal text-white/60 mt-4 rotate-90 origin-center"
          animate={{ 
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;