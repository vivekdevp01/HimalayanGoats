// TestimonialSection.jsx
import React from "react";

export default function TestimonialSection({
  mainImage = "/src/assets/4.jpg",
  avatars = [
    "/src/assets/1.jpg",
    "/src/assets/2.jpg",
    "/src/assets/3.jpg",
  ],
  name = "Amelia Warner",
  role = "tourist",
  text = `Once the travel bug bites, there is no known antidote, 
and I know that I shall be happily infected until the end of my life. 
A journey is best measured in friends.`,
}) {
  return (
    <section className="relative py-10  bg-white overflow-visible">
      {/* Top small heading */}
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-semibold">
          <span className="text-emerald-800">Our Client</span>{" "}
          <span className="text-amber-500">Says !</span>
        </h3>
        <p className="text-slate-500 text-xs mt-2">
          Destinations worth exploring! Here are a few popular spots
        </p>
      </div>

      {/* Large Gradient Heading + Plane */}
      <div className="relative text-center mb-20">
        <h1 className="text-[54px] md:text-[110px] font-extrabold tracking-wide bg-gradient-to-b from-emerald-800 to-amber-300 bg-clip-text text-transparent">
          TESTIMONIAL
        </h1>

        
      </div>

      {/* Main content two-column */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left image */}
        <div className="relative">
          <div className="w-72 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden shadow-xl mx-auto">
            <img
              src={mainImage}
              alt="client"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Light circle decoration */}
          <div className="absolute -right-16 top-14 w-48 h-48 rounded-full bg-amber-200/40 blur-xl"></div>
        </div>

        {/* Right text area */}
        <div>
          {/* Small overlapping avatars */}
          <div className="flex gap-4 mb-6">
            {avatars.map((av, i) => (
              <img
                key={i}
                src={av}
                className="w-12 h-12 rounded-xl shadow-md object-cover"
                alt="avatar"
              />
            ))}
          </div>

          {/* Name */}
          <h3 className="text-xl md:text-2xl font-bold text-emerald-800">
            {name}
          </h3>

          {/* Role */}
          <p className="text-amber-500 text-sm mb-4">{role}</p>

          {/* Quote + text */}
          <div className="relative">
            {/* Quote icon */}
            <svg
              className="absolute right-0 -top-6 w-8 h-8 text-emerald-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17a4 4 0 004-4V7a4 4 0 00-4-4H5a2 2 0 00-2 2v4h4v4H3v4h4zM19 17a4 4 0 004-4V7a4 4 0 00-4-4h-2a2 2 0 00-2 2v4h4v4h-4v4h4z" />
            </svg>

            <p className="text-slate-600 leading-relaxed">{text}</p>
          </div>

          {/* Star rating */}
          <div className="text-amber-400 text-xl mt-4 flex gap-1">
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Slider arrows */}
          <div className="flex gap-4 mt-8">
            {/* Left btn */}
            <button className="w-10 h-10 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition">
              ←
            </button>

            {/* Right btn */}
            <button className="w-10 h-10 rounded-full bg-white text-amber-400 flex items-center justify-center shadow-md hover:scale-105 transition">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
