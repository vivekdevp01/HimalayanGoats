import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function ExplorationGrid({
  items = [
    { src: "/src/assets/1.jpg", label: "", type: "large" },
    { src: "/src/assets/2.jpg", label: "Destinations", type: "small" },
    { src: "/src/assets/3.jpg", label: "Stays", type: "small" },
    {
      src: "/src/assets/2.jpg",
      label: "Activities & Sightseeing",
      type: "small",
    },
    { src: "/src/assets/1.jpg", label: "", type: "small" },
  ],
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 24 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={containerRef}>
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            About This Trip
          </h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl">
            A glimpse of destinations, stays, and experiences included in your
            journey
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[620px] md:h-[560px]"
        >
          {/* Main Large Image */}
          <motion.div
            variants={itemVariants}
            className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group
                       shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            <img
              src={items[0].src}
              alt="Trip overview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Optional Title Overlay */}
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                Trip Highlights
              </span>
            </div>
          </motion.div>

          {/* Small Cards */}
          {items.slice(1, 4).map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden group
                         shadow-[0_14px_35px_rgba(0,0,0,0.12)]"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35" />

              <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}

          {/* View All Images Card */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden group
                       shadow-[0_14px_35px_rgba(0,0,0,0.12)]"
          >
            <img
              src={items[4].src}
              alt="View all images"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* CTA Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="flex items-center gap-2 bg-white/95 text-slate-800
                           px-6 py-3 rounded-full font-semibold text-sm
                           shadow-xl hover:bg-white transition"
              >
                <HiOutlinePhotograph className="text-lg" />
                View All Images
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
