import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech, Artificial Intelligence & Machine Learning",
    school: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    period: "2022 – 2026",
    score: "CGPA: 7.81 / 10",
  },
  {
    degree: "Higher Secondary Certificate (XII)",
    school: "Jayam Vidhayala Matric Higher Secondary School, Dharmapuri",
    period: "2021 – 2022",
    score: "83%",
  },
  {
    degree: "Secondary School Leaving Certificate (X)",
    school: "Indian Matric Higher Secondary School, Dharmapuri",
    period: "2019 – 2020",
    score: "94%",
  },
];

const certifications = [
  "Generative AI",
  "Large Language Model",
  "SQL Advanced Level",
  "Introduction to IAM",
];

const badges = [
  "AWS Cloud Quest Practitioner",
  "AWS Educate – Compute",
  "AWS Educate – Storage",
  "AWS Educate – Cloud 101",
  "AWS Educate – Generative AI",
];

const publications = [
  "Landmark Detection Using Machine Learning",
  "ETL Based Crop Recommendation System",
];

const BentoEducation = () => {
  const { ref: titleRef, isVisible: titleVis } = useScrollReveal();
  const { ref: eduRef, isVisible: eduVis } = useScrollReveal();
  const { ref: certRef, isVisible: certVis } = useScrollReveal();
  const { ref: pubRef, isVisible: pubVis } = useScrollReveal();

  return (
    <>
      <div ref={titleRef} className={`col-span-full scroll-reveal ${titleVis ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Education & Credentials</h2>
      </div>

      {/* Education */}
      <div
        ref={eduRef}
        className={`bento-card glass-effect hover-lift col-span-full lg:col-span-7 scroll-reveal-left ${eduVis ? "visible" : ""}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Education</h3>
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{edu.school}</p>
                </div>
                <div className="flex items-center gap-3 sm:text-right shrink-0">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono text-accent font-semibold">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certs & Badges */}
      <div
        ref={certRef}
        className={`bento-card glass-effect hover-lift col-span-full lg:col-span-5 scroll-reveal-right ${certVis ? "visible" : ""}`}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
            <Award className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Certifications & Badges</h3>
        </div>

        <p className="text-xs font-mono text-muted-foreground mb-3">Certifications</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {certifications.map((cert) => (
            <span key={cert} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 cursor-default">
              {cert}
            </span>
          ))}
        </div>

        <p className="text-xs font-mono text-muted-foreground mb-3">AWS Badges</p>
        <div className="space-y-2">
          {badges.map((badge, i) => (
            <div key={badge} className="flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-r from-secondary/50 to-secondary/30 hover:from-accent/10 hover:to-accent/5 transition-all duration-300 hover:scale-[1.02]">
              <span className="text-xs font-mono text-accent w-5 font-semibold">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xs font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div
        ref={pubRef}
        className={`bento-card glass-effect hover-lift col-span-full scroll-reveal-scale ${pubVis ? "visible" : ""}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Publications</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {publications.map((pub) => (
            <div key={pub} className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <p className="text-sm font-medium">{pub}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BentoEducation;
