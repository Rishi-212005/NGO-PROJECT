import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={images.hero} alt="Volunteers helping community" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
          🌱 Making a Difference Since 2010
        </span>

        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-background leading-tight mb-6">
          Empowering Lives,
          <br />
          <span className="text-accent">Building Hope</span>
        </h1>

        <p className="text-background/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We work with communities to create lasting change through education, healthcare, and sustainable development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/volunteer"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Join as Volunteer <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/works"
            className="px-8 py-4 bg-background/10 text-background border border-background/30 rounded-xl font-semibold text-lg hover:bg-background/20 transition-all backdrop-blur-sm"
          >
            Our Projects
          </Link>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
