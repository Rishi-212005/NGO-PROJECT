import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const projects = [
  { img: images.project1, title: "Shelter for All", category: "Housing", desc: "Building safe homes for 500+ families across rural India." },
  { img: images.project2, title: "Bright Futures", category: "Education", desc: "Providing quality education to 2,000+ children in underserved areas." },
  { img: images.project3, title: "Clean Water Initiative", category: "Healthcare", desc: "Installing water purification systems in 50+ villages." },
];

const ProjectsPreview = () => (
  <section className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-12"
      >
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Featured Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Impact Stories
          </h2>
        </div>
        <Link to="/works" className="mt-4 sm:mt-0 text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">{p.category}</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsPreview;
