import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";

const categories = ["All", "Education", "Healthcare", "Environment", "Community"];
const galleryImages = [
  { src: images.gallery1, category: "Community", title: "Women Empowerment Workshop" },
  { src: images.gallery2, category: "Environment", title: "Tree Planting Drive" },
  { src: images.gallery3, category: "Community", title: "Food Distribution" },
  { src: images.project1, category: "Community", title: "House Building" },
  { src: images.gallery5, category: "Education", title: "School Program" },
  { src: images.gallery7, category: "Healthcare", title: "Medical Camp" },
  { src: images.gallery4, category: "Healthcare", title: "Charity Work" },
  { src: images.gallery8, category: "Community", title: "Team Photo" },
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
              Moments of <span className="text-gradient">Impact</span>
            </h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                >
                  <img src={img.src} alt={img.title} loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors flex items-end p-4">
                    <span className="text-background font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      {img.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
