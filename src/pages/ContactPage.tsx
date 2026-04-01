import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, title: "Address", detail: "123 Hope Street, Connaught Place, New Delhi - 110001" },
  { icon: Phone, title: "Phone", detail: "+91 98765 43210" },
  { icon: Mail, title: "Email", detail: "info@ngofoundation.org" },
  { icon: Clock, title: "Working Hours", detail: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent successfully! ✉️" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
              Contact <span className="text-gradient">Us</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{info.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{info.detail}</p>
                  </div>
                </motion.div>
              ))}

              <div className="rounded-xl overflow-hidden border border-border h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6743!2d77.2167!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzUzLjQiTiA3N8KwMTMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Location map"
                />
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 sm:p-10 space-y-5"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
