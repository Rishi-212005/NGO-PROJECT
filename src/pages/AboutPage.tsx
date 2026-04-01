import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";

const values = [
  { icon: Heart, title: "Compassion", desc: "We lead with empathy and care for every individual we serve." },
  { icon: Target, title: "Transparency", desc: "Every rupee is accounted for with complete financial transparency." },
  { icon: Users, title: "Community", desc: "Local ownership and participation drive all our programs." },
  { icon: Eye, title: "Innovation", desc: "Creative solutions to complex social challenges." },
];

const team = [
  { name: "Priya Sharma", role: "Founder & Director" },
  { name: "Rajesh Kumar", role: "Head of Operations" },
  { name: "Anita Desai", role: "Education Lead" },
  { name: "Vikram Singh", role: "Healthcare Programs" },
];

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About NGO Foundation</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
                Transforming Lives <span className="text-gradient">Since 2010</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NGO Foundation was born from a simple belief: every person deserves access to education, healthcare, and the opportunity to build a dignified life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 15 years, we've grown from a small group of passionate volunteers to a nationwide movement, touching lives across 15 states in India.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <img src={images.team} alt="Our Team" loading="lazy" width={800} height={600} className="rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Our Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary">{t.name[0]}</span>
                </div>
                <h3 className="font-display font-bold text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
