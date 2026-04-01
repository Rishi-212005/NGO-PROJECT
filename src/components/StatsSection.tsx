import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderOpen, HandHeart, MapPin } from "lucide-react";

const stats = [
  { number: 50000, suffix: "+", label: "Lives Impacted", icon: Users },
  { number: 120, suffix: "+", label: "Projects Completed", icon: FolderOpen },
  { number: 3000, suffix: "+", label: "Active Volunteers", icon: HandHeart },
  { number: 15, suffix: "", label: "States Covered", icon: MapPin },
];

function formatNumber(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 0) + "K";
  return n.toString();
}

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const display = target >= 1000 ? formatNumber(count) : count.toString();
  return <span ref={ref}>{display}{suffix}</span>;
};

const StatsSection = () => (
  <section className="py-16 sm:py-20 bg-primary">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-accent" />
            </div>
            <div className="font-display text-3xl sm:text-5xl font-bold text-accent">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
            </div>
            <div className="text-sm sm:text-base text-primary-foreground/80 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
