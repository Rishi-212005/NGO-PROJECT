import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower underprivileged communities through education, healthcare, and sustainable livelihood programs.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where every individual has access to basic necessities and opportunities to thrive.",
  },
  {
    icon: Users,
    title: "Our Approach",
    desc: "Community-driven, transparent, and impactful—partnering with locals to create lasting change.",
  },
];

const MissionPreview = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
          Creating Impact That <span className="text-gradient">Matters</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group p-8 rounded-2xl bg-card border border-border hover-lift cursor-default"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionPreview;
