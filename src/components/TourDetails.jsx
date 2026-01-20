import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineHome, HiOutlineCake, HiOutlineMap } from "react-icons/hi";

export default function TourDetails() {
  const [selectedDuration, setSelectedDuration] = useState("6 days");
  const [selectedRoute, setSelectedRoute] = useState(3);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const durations = [
    { days: "4 days", price: "₹12,526", img: "/src/assets/1.jpg" },
    { days: "6 days", price: "₹25,372", img: "/src/assets/2.jpg" },
    { days: "7 days", price: "₹25,000", img: "/src/assets/3.jpg" },
    { days: "8 days", price: "₹33,047", img: "/src/assets/2.jpg" },
    { days: "9 days", price: "₹40,000", img: "/src/assets/1.jpg" },
  ];

  const routes = [
    "Gangtok → Darjeeling → Siliguri",
    "Gangtok → Lachung → Gangtok",
    "Gangtok → Lachung → Gangtok → Bagdogra",
    "Gangtok → Lachen → Lachung → Gangtok → Siliguri",
  ];

  return (
    <section ref={containerRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-6">
          Highlights of North Sikkim <br />
          <span className="text-orange-500 text-xl md:text-2xl font-semibold">
            FREE Visit to Bhim Nala Falls
          </span>
        </h1>

        {/* Summary */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-8">
          <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold">
            6D / 5N
          </span>
          <span>
            <b>2</b> Days in Gangtok
          </span>
          <span>
            <b>1</b> Day in Lachen
          </span>
          <span>
            <b>1</b> Day in Lachung
          </span>
        </div>

        <hr className="mb-8 border-slate-100" />

        {/* Amenities */}
        <div className="flex flex-wrap gap-8 mb-10 text-slate-600">
          <div className="flex items-center gap-2">
            <HiOutlineHome className="text-xl" /> Stay Included
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCake className="text-xl" /> Meals Included
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMap className="text-xl" /> Sightseeing Included
          </div>
        </div>

        {/* Duration Selector */}
        <div className="mb-12">
          <h3 className="font-bold text-lg mb-4">Choose Trip Duration</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {durations.map((item) => {
              const isSelected = selectedDuration === item.days;
              return (
                <div
                  key={item.days}
                  onClick={() => setSelectedDuration(item.days)}
                  className="min-w-[140px] cursor-pointer"
                >
                  <div
                    className={`relative h-32 rounded-2xl overflow-hidden border-2 transition
                      ${
                        isSelected
                          ? "border-orange-500 shadow-lg"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                  >
                    <img
                      src={item.img}
                      alt={item.days}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isSelected ? "scale-110" : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <span className="text-white font-bold text-sm">
                        {item.days}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase mt-2">
                    Starting From
                  </p>
                  <p
                    className={`font-bold ${isSelected ? "text-orange-600" : "text-slate-800"}`}
                  >
                    {item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Routes */}
        <div>
          <h3 className="font-bold text-lg mb-4">Destination Routes</h3>
          <div className="space-y-3">
            {routes.map((route, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedRoute(idx)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition
                  ${
                    selectedRoute === idx
                      ? "border-orange-500 bg-orange-50 text-orange-600"
                      : "border-slate-100 hover:border-slate-200 text-slate-600"
                  }`}
              >
                {route}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
