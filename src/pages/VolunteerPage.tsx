import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const VolunteerPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", age: "", city: "", interest: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Registration submitted successfully! 🎉" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 section-padding flex items-center justify-center min-h-[80vh]">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Thank You!</h2>
            <p className="text-muted-foreground">Your volunteer registration has been submitted. We'll get in touch with you soon.</p>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Join Us</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
              Become a <span className="text-gradient">Volunteer</span>
            </h1>
            <p className="text-muted-foreground mt-4">Fill in your details and be part of the change.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card border border-border rounded-2xl p-6 sm:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Age</label>
                <input name="age" type="number" value={form.age} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" placeholder="25" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" placeholder="New Delhi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Area of Interest</label>
                <select name="interest" value={form.interest} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition">
                  <option value="">Select...</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="environment">Environment</option>
                  <option value="community">Community Development</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to volunteer?</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition resize-none" placeholder="Tell us about yourself..." />
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg">
              Submit Registration
            </button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerPage;
