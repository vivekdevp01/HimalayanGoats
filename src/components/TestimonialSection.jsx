import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amelia Warner",
    role: "Tourist",
    image: "/assets/4.jpg",
    avatars: ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg"],
    text: `Once the travel bug bites, there is no known antidote. 
    A journey is best measured in friends rather than miles.`,
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "Adventure Lover",
    image: "/assets/5.jpg",
    avatars: ["/assets/2.jpg", "/assets/3.jpg", "/assets/1.jpg"],
    text: `Everything was perfectly planned. From hotels to experiences,
    it felt effortless and memorable.`,
    rating: 5,
  },
  {
    name: "Sophia Lee",
    role: "Solo Traveller",
    image: "/assets/6.jpg",
    avatars: ["/assets/3.jpg", "/assets/1.jpg", "/assets/2.jpg"],
    text: `I felt safe, excited, and inspired throughout my journey.
    Highly recommended for solo travelers!`,
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [previewImage, setPreviewImage] = useState(null);

  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-2xl font-semibold">
          <span className="text-emerald-800">Our Clients</span>{" "}
          <span className="text-amber-500">Love Us</span>
        </h3>
        <p className="text-slate-500 text-sm mt-2">
          Real stories from travelers across the world
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mx-auto order-1 md:order-none"
          >
            <motion.div
              className=" w-64 h-[320px]
    sm:w-72 sm:h-[380px]
    md:w-80 md:h-[460px]
    rounded-3xl overflow-hidden shadow-xl cursor-zoom-in"
              whileHover={{ scale: 1.02 }}
              onClick={() => setPreviewImage(t.image)}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="order-2 md:order-none "
          >
            {/* Avatars */}
            <div className="flex gap-3 mb-6">
              {t.avatars.map((av, i) => (
                <motion.img
                  key={i}
                  src={av}
                  alt=""
                  onClick={() => setPreviewImage(av)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl shadow-md object-cover cursor-zoom-in
           hover:ring-2 hover:ring-amber-400 transition"
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold text-emerald-800">{t.name}</h3>
            <p className="text-amber-500 text-sm mb-4">{t.role}</p>

            <p className="text-slate-600 leading-relaxed mb-6">{t.text}</p>

            {/* Rating */}
            <div className="flex gap-1 text-amber-400 text-xl mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-amber-400 text-white shadow hover:scale-105 transition"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-white text-amber-400 shadow hover:scale-105 transition"
              >
                →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            <motion.img
              src={previewImage}
              alt="Preview"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close button */}
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
