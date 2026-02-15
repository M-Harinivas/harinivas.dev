import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BentoContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { ref: titleRef, isVisible: titleVis } = useScrollReveal();
  const { ref: formRef, isVisible: formVis } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVis } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div ref={titleRef} className={`col-span-full scroll-reveal ${titleVis ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Let's Connect</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">// get in touch</p>
      </div>

      <div
        ref={formRef}
        className={`bento-card col-span-full lg:col-span-8 scroll-reveal-left ${formVis ? "visible" : ""}`}
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
            placeholder="Tell me about your project or idea..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-secondary border-0 rounded-xl min-h-[140px] resize-none"
            required
          />
          <Button type="submit" className="w-full h-12 rounded-xl text-base gap-2">
            Send Message <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>

      <div
        ref={infoRef}
        className={`bento-card col-span-full lg:col-span-4 flex flex-col justify-between scroll-reveal-right ${infoVis ? "visible" : ""}`}
      >
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
          <div className="space-y-4">
            <a href="mailto:harinivas987@gmail.com" className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                harinivas987@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent/10">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">+91 6369792085</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Dharmapuri, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/harinivas-m-504ab7250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default BentoContact;
