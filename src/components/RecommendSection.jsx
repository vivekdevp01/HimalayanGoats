import React from "react";
import { NavLink } from "react-router-dom";

/*
  Usage:
  <RecommendSection
    person="/src/assets/person.png"
    circle1="/src/assets/circle1.jpg"
    circle2="/src/assets/circle2.jpg"
    circle3="/src/assets/circle3.jpg"
  />
*/

export default function RecommendSection({
  person = "/src/assets/1.png",
  circle1 = "/src/assets/4.jpg",
  circle2 = "/src/assets/2.jpg",
  circle3 = "/src/assets/3.jpg",
}) {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Visual composition */}
        <div className="relative h-[520px] md:h-[640px] flex items-center justify-center">
          {/* soft pale circle behind person */}
          <div className="absolute left-6 top-10 w-72 h-72 rounded-full bg-amber-50/80 blur-[0.5px]" />

          {/* big circular image (bottom) */}
          <div className="absolute left-12 top-28 md:left-16 md:top-36 w-84 h-94 md:w-80 md:h-80 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden ring-8 ring-emerald-50">
            <img src={circle1} alt="circle large" className="w-full h-full object-cover" />
          </div>

          {/* small top circular */}
          <div className="absolute left-66 top-10 w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-sm">
            <img src={circle2} alt="circle small" className="w-full h-full object-cover" />
          </div>

          {/* tiny round above large */}
          <div className="absolute top-16 left-50 top-0 w-24 h-24 rounded-full overflow-hidden border-8 border-white shadow-sm">
            <img src={circle3} alt="circle tiny" className="w-full h-full object-cover" />
          </div>


        </div>

        {/* RIGHT: Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-800 leading-tight">
            <span className="text-amber-400">We Recommend</span>{" "}
            Beautiful <br /> Destinations Every Month
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-md">
            Travlla is a multi-award-winning strategy and content creation agency that
            specializes in travel marketing. They have one of the world’s largest and most
            influential travel communities, helping brands and tourism.
          </p>

          {/* Info cards */}
          <div className="mt-8 space-y-4 max-w-md">
            <div className="flex items-start gap-4 p-4 border rounded-xl shadow-sm bg-white">
              {/* icon */}
              <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-50 text-emerald-600">
                {/* simple guide icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="stroke-emerald-600">
                  <path d="M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Trusted travel guide</h4>
                <p className="text-sm text-slate-500">Provides reliable information to help travelers plan their trips efficiently and safely.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border rounded-xl shadow-sm bg-white">
              <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-50 text-emerald-600">
                {/* mission icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 7 7 .5-5.5 4 2 7L12 17l-6.5 3.5 2-7L2 9.5 9 9l3-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Mission & Vision</h4>
                <p className="text-sm text-slate-500">Aims to connect people to positive experience through travel, helping them see the world differently.</p>
              </div>
            </div>
          </div>

          {/* CTA + avatars + stat */}
          <div className="mt-8 flex items-center gap-6">
            <NavLink to="/discover" className="inline-flex items-center px-6 py-3 bg-emerald-400 text-white rounded-full font-medium shadow hover:scale-105 transition">
              Discover More
            </NavLink>

            <div className="flex items-center gap-3">
              {/* avatars (tiny overlapping) */}
              <div className="flex -space-x-2">
                <img src="/src/assets/avatar1.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/src/assets/avatar2.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/src/assets/avatar3.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <div className="text-sm">
                <div className="text-emerald-600 font-semibold">3.5k</div>
                <div className="text-xs text-slate-400">HAPPY CUSTOMER</div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
