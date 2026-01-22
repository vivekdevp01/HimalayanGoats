import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import EnquiryModal from "./Packages/EnquiryModal";
import { useLocation, useParams } from "react-router-dom";
export default function HeroHeader({
  slides = [
    {
      url: "/src/assets/1.jpg",
      title: "INDIA Tour Packages",
      discount: "40% OFF",
      price: "5,999",
    },
    {
      url: "/src/assets/2.jpg",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "7,499",
    },
    {
      url: "/src/assets/3.jpg",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "7,499",
    },
    {
      url: "/src/assets/4.jpg",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "7,499",
    },
    {
      url: "/src/assets/5.jpg",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "7,499",
    },
  ],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const location = useLocation();
    const pathSegment = location.pathname.split("/").pop();
  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const stats = [
    { label: "TRIP ADVISOR", rating: "4.5/5", icon: "🦉" },
    { label: "SITEJABBER", rating: "4.2/5", icon: "🚀" },
    { label: "GOOGLE", rating: "4.4/5", icon: "G" },
    { label: "REVIEWS.IO", rating: "4.6/5", icon: "★" },
  ];

  return (
    <header className="relative h-screen w-full bg-black">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].url}
            className="h-full w-full object-cover opacity-70"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Central Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-2xl font-medium mb-2"
        >
          Get up to{" "}
          <span className="text-yellow-400 font-bold">
            {slides[currentIndex].discount}
          </span>{" "}
          on
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
        >
          <span className="text-yellow-400">{pathSegment}</span> Tour Packages
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-lg text-gray-200">
            Starting at{" "}
            <span className="line-through opacity-60 mr-2">INR 9,998</span>
            <span className="text-2xl font-bold text-white">
              INR {slides[currentIndex].price}
            </span>{" "}
            /Adult
          </p>

          <button
            onClick={() => setIsEnquiryOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-900/40 transition-all transform hover:scale-105 active:scale-95"
          >
            Connect With An Expert
          </button>
          {/* Logic to show the Modal */}
          <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
            packageId={null}
          />
        </motion.div>

        {/* Dash Indicators */}
        <div className="absolute bottom-32 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-8 transition-all duration-300 ${currentIndex === i ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Ratings Bar */}
      {/* Bottom Ratings Bar with Soft Blur Transition */}
      <div className="absolute bottom-0 w-full px-4 pb-10 pt-20">
        {/* The Gradient Blur Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]"
          style={{
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 60%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group cursor-default"
            >
              {/* Icon with glass effect */}
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xl border border-white/5 group-hover:bg-white/20 transition-all">
                {stat.icon}
              </div>

              <div className="text-left">
                <p className="text-2xl font-bold text-white leading-none tracking-tight">
                  {stat.rating}
                </p>
                <p className="text-[10px] text-gray-400 font-black tracking-[0.2em] mt-1.5 uppercase opacity-80">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
