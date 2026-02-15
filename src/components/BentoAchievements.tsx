import { motion } from "framer-motion";
import { Trophy, Star, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Hackathon Winner", description: "1st place at National Level Hackathon 2024" },
  { icon: Star, title: "Dean's List", description: "Consistent top performer in academics" },
  { icon: Zap, title: "500+ DSA Problems", description: "Solved on LeetCode & GeeksForGeeks" },
];

const BentoAchievements = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="col-span-full"
      >
        <h2 className="text-3xl font-bold mb-1">Achievements</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// milestones unlocked</p>
      </motion.div>

      {achievements.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 + index * 0.1 }}
          className="bento-card col-span-full sm:col-span-6 lg:col-span-4 text-center"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <item.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </>
  );
};

export default BentoAchievements;
