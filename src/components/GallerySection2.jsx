// GallerySection.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function GallerySection2({
  images = [
    { src: "/src/assets/1.jpg", alt: "coast rocks" },
    { src: "/src/assets/2.jpg", alt: "hiking couple" },
    { src: "/src/assets/3.jpg", alt: "portrait photographer" },
    { src: "/src/assets/4.jpg", alt: "woman yellow dress" },
    { src: "/src/assets/5.jpg", alt: "wide bay" },
    { src: "/src/assets/6.jpg", alt: "island rock" },
    { src: "/src/assets/7.jpg", alt: "resort" },
  ],
}) {
  const imgs = images.concat(
    Array(Math.max(0, 7 - images.length)).fill(images[0] || { src: "", alt: "" })
  );

  // refs + inView
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const controls = useAnimation();

  // ensure animations trigger (fallback for dev)
  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      // fallback: if not triggered by viewport after short delay, play anyway (dev only)
      const t = setTimeout(() => controls.start("show"), 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, controls]);

  // Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.99 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <section className="py-16 bg-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@300;400;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-end gap-3">
            <span className="text-amber-400 font-semibold" style={{ fontFamily: "'Kaushan Script', cursive", fontSize: 22 }}>Best</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Memorable <span className="text-emerald-700">Gallery</span>
            </h3>
          </div>
          <p className="text-sm text-slate-500 mt-2">Destinations worth exploring! Here are a few popular spots</p>
        </div>

        {/* Animated Grid Container */}
        <motion.div
          className="grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "minmax(120px, auto)",
            gridTemplateAreas:
              `"left1 left1 left1 left1 center center center center right right right right"
               "left2 left2 left2 left2 center center center center right right right right"
               "wide wide wide wide wide wide wide wide rightb rightb rightc rightc"`,
          }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div style={{ gridArea: "left1" }} className="rounded-2xl overflow-hidden shadow-md" variants={itemVariants}>
            <img src={imgs[0].src} alt={imgs[0].alt} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ gridArea: "center" }} className="rounded-2xl overflow-hidden shadow-md row-span-2" variants={itemVariants}>
            <img src={imgs[1].src} alt={imgs[1].alt} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ gridArea: "right" }} className="rounded-2xl overflow-hidden shadow-md" variants={itemVariants}>
            <img src={imgs[2].src} alt={imgs[2].alt} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ gridArea: "left2" }} className="rounded-2xl overflow-hidden shadow-md" variants={itemVariants}>
            <img src={imgs[3].src} alt={imgs[3].alt} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ gridArea: "wide" }} className="rounded-2xl overflow-hidden shadow-md col-span-full" variants={itemVariants}>
            <img src={imgs[4].src} alt={imgs[4].alt} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ gridArea: "rightb" }} className="rounded-2xl overflow-hidden shadow-md" variants={itemVariants}>
            <img src={imgs[5].src} alt={imgs[5].alt} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ gridArea: "rightc" }} className="rounded-2xl overflow-hidden shadow-md" variants={itemVariants}>
            <img src={imgs[6].src} alt={imgs[6].alt} className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* CTA big text (animated) */}
        <motion.div className="mt-12 text-center" variants={ctaVariants} initial="hidden" animate={controls}>
          <p className="text-sm text-emerald-700 mb-2">Explore the Most Beautiful</p>
          <h2 className="font-extrabold text-4xl md:text-6xl text-amber-400 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "1px" }}>
            PLACE IN THE WORLD
          </h2>
        </motion.div>
      </div>

      {/* responsive tweaks */}
      <style>{`
        @media (max-width: 900px) {
          .grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            grid-template-areas:
              "left1"
              "left2"
              "center"
              "right"
              "wide"
              "rightb"
              "rightc";
          }
          .grid img { height: auto; }
        }
        .col-span-full { grid-column: 1 / -1; }
      `}</style>
    </section>
  );
}
