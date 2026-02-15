import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BentoContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="col-span-full"
        id="contact"
      >
        <h2 className="text-3xl font-bold mb-1">Get in Touch</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// let's connect</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95 }}
        className="bento-card col-span-full lg:col-span-8"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary border-0 h-12 rounded-xl"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary border-0 h-12 rounded-xl"
              required
            />
          </div>
          <Textarea
            placeholder="Your Message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-secondary border-0 rounded-xl min-h-[120px] resize-none"
            required
          />
          <Button type="submit" className="w-full h-12 rounded-xl text-base gap-2">
            Send Message <Send className="w-4 h-4" />
          </Button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bento-card col-span-full lg:col-span-4 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">harinivas@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-center">
          <p className="text-sm font-medium">Open to internships & collaborations</p>
          <p className="text-xs text-muted-foreground mt-1">Let's build something awesome together!</p>
        </div>
      </motion.div>
    </>
  );
};

export default BentoContact;
