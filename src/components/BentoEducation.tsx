import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Your University Name",
    period: "2022 – 2026",
    gpa: "8.5 / 10",
  },
  {
    degree: "Higher Secondary (XII)",
    school: "Your School Name",
    period: "2020 – 2022",
    gpa: "92%",
  },
];

const certifications = [
  "AWS Cloud Practitioner",
  "Google Data Analytics",
  "Python for Data Science – Coursera",
  "Full Stack Web Development",
];

const BentoEducation = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="col-span-full"
      >
        <h2 className="text-3xl font-bold mb-1">Education & Certs</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// academic journey</p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="bento-card col-span-full lg:col-span-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Education</h3>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-secondary/50">
              <div>
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              <div className="mt-2 sm:mt-0 sm:text-right">
                <span className="text-sm font-mono text-primary">{edu.period}</span>
                <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bento-card col-span-full lg:col-span-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent/10">
            <Award className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Certifications</h3>
        </div>

        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <div key={cert} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
              <span className="text-xs font-mono text-accent mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BentoEducation;
