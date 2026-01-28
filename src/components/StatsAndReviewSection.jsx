import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";

/**
 * StatsAndReviewsSection
 * - Clean trust-building section
 * - Animated stats
 * - Real-looking reviews
 * - Strong CTA
 */

export default function StatsAndReviewsSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#0D6773] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Trusted by Thousands of Adventurers
          </h2>
          <p className="text-teal-100 mt-4">
            From Himalayan treks to river rafting in Rishikesh, travelers across
            Uttarakhand trust us for safe and unforgettable experiences.
          </p>
        </div>

        {/* ---------- STATS ---------- */}
        <StatsGrid />

        {/* ---------- REVIEWS ---------- */}
        <ReviewsGrid />

        {/* ---------- CTA ---------- */}
        <div className="text-center">
  <button 
   onClick={onOpenEnquiry} // This triggers the modal
    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-teal-900 font-bold hover:bg-amber-300 transition-all hover:-translate-y-1 shadow-lg active:scale-95"
  >
    Talk to a Local Expert
  </button>
</div>
      </div>
    </section>
  );
}

/* ======================================================
   STATS GRID
====================================================== */

function StatsGrid() {
  const stats = [
    { label: "Happy Travelers", value: 12000, suffix: "+" },
    { label: "Treks & Trips Completed", value: 3500, suffix: "+" },
    { label: "Years of Local Experience", value: 10, suffix: "+" },
    { label: "Average Rating", value: 4.8, suffix: "/5" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const stepTime = 16;
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] =
            stat.value % 1 === 0
              ? Math.min(Math.round(start), end)
              : Math.min(start.toFixed(1), end);
          return updated;
        });

        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {stats.map((s, i) => (
        <div key={i}>
          <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
            {counts[i]}
            <span className="text-xl ml-1">{s.suffix}</span>
          </div>
          <div className="text-sm mt-2 text-teal-100">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ======================================================
   REVIEWS GRID
====================================================== */

function ReviewsGrid() {
  const reviews = [
    {
      name: "Aman Sharma",
      location: "Delhi",
      rating: 5,
      text: "Kuari Pass trek was perfectly managed. Great guides, amazing camps, and complete safety throughout the journey.",
    },
    {
      name: "Neha Verma",
      location: "Bangalore",
      rating: 5,
      text: "River rafting in Rishikesh was thrilling! The team was super professional and friendly.",
    },
    {
      name: "Rohit Mehta",
      location: "Mumbai",
      rating: 4,
      text: "Booked a camp stay with bike rental. Everything was smooth and well coordinated.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="bg-white text-slate-800 rounded-2xl p-6 shadow-lg relative"
        >
          <Quote className="absolute top-4 right-4 text-slate-200" />

          <div className="flex items-center gap-2 mb-3">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <p className="text-sm leading-relaxed mb-4">“{r.text}”</p>

          <div className="text-sm font-semibold">
            {r.name}
            <span className="text-slate-400 font-normal"> • {r.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
