import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";

const projects = [
  { img: images.project1, title: "Shelter for All", category: "Housing", desc: "Building safe, sustainable homes for 500+ families in rural India through community-driven construction projects.", impact: "500+ homes built" },
  { img: images.project2, title: "Bright Futures", category: "Education", desc: "Providing quality education, school supplies, and teacher training to underserved communities.", impact: "2,000+ children enrolled" },
  { img: images.project3, title: "Clean Water Initiative", category: "Healthcare", desc: "Installing water purification systems and training local technicians for maintenance.", impact: "50+ villages served" },
  { img: images.project4, title: "Mobile Health Camps", category: "Healthcare", desc: "Organizing medical camps in remote areas with free check-ups, medicines, and health education.", impact: "10,000+ patients treated" },
];

const WorksPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            Making a <span className="text-gradient">Real Difference</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every project tells a story of hope, resilience, and community transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">{p.category}</span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {p.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default WorksPage;
