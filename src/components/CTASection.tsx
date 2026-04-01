import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-primary rounded-3xl p-10 sm:p-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Be the Change You Wish to See
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
          Join thousands of volunteers making a real difference in communities across India.
        </p>
        <Link
          to="/volunteer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:brightness-110 transition-all shadow-lg"
        >
          Register as Volunteer <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
