import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { User, Target, Lightbulb, Sparkles } from "lucide-react";

const BentoAbout = () => {
  const { ref: r1, isVisible: v1 } = useScrollReveal();
  const { ref: r2, isVisible: v2 } = useScrollReveal();
  const { ref: r3, isVisible: v3 } = useScrollReveal();

  return (
    <>
      <div ref={r1} className={`col-span-full scroll-reveal ${v1 ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-1">About Me</h2>
      </div>

      {/* Main about card */}
      <div
        ref={r2}
        className={`bento-card glass-effect hover-lift col-span-full lg:col-span-8 scroll-reveal-left ${v2 ? "visible" : ""}`}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Summary</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          An enthusiastic <span className="text-foreground font-medium">Machine Learning Engineer</span> with a strong foundation in algorithms, data processing, and model development. Skilled in <span className="text-foreground font-medium">Python, TensorFlow, and AWS Cloud</span> services, with hands-on experience building predictive and analytical models through academic projects.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Proficient in data preprocessing and model evaluation, eager to apply these skills to solve real-world challenges in <span className="text-foreground font-medium">AI and cloud environments</span>. Currently pursuing B.Tech in AI & ML at Sri Shakthi Institute, Coimbatore.
        </p>
      </div>

      {/* Quick facts */}
      <div
        ref={r3}
        className={`bento-card glass-effect hover-lift col-span-full lg:col-span-4 scroll-reveal-right ${v3 ? "visible" : ""}`}
      >
        <h3 className="text-lg font-semibold mb-5">Quick Facts</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300">
            <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Focus Area</p>
              <p className="text-xs text-muted-foreground">ML, Deep Learning, NLP & Cloud</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-300">
            <Lightbulb className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Interests</p>
              <p className="text-xs text-muted-foreground">Computer Vision, Generative AI, Cloud Architecture</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Goal</p>
              <p className="text-xs text-muted-foreground">Build AI solutions that solve real-world problems</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoAbout;
