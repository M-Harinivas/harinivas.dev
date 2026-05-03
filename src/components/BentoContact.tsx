import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { FloatingLabelInput, FloatingLabelTextarea, AnimatedSubmitButton } from "@/components/ui/floating-input";

const BentoContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const { ref: titleRef, isVisible: titleVis } = useScrollReveal();
  const { ref: formRef, isVisible: formVis } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVis } = useScrollReveal();

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
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
            <FloatingLabelInput
              label="Your Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setErrors({ ...errors, name: "" });
              }}
              error={errors.name}
              required
            />
            <FloatingLabelInput
              type="email"
              label="Your Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
              error={errors.email}
              required
            />
          </div>
          <FloatingLabelTextarea
            label="Tell me about your project or idea..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              setErrors({ ...errors, message: "" });
            }}
            error={errors.message}
            required
          />
          <AnimatedSubmitButton
            type="submit"
            isLoading={isSubmitting}
            success={isSuccess}
          >
            Send Message <Send className="w-4 h-4" />
          </AnimatedSubmitButton>
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
