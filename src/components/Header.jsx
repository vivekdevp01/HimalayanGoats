// TravllaHeader.jsx
// React + Tailwind component for a full-stack React app.
// - Uses react-router-dom's NavLink for client-side routing
// - Adds hover animations on nav links (hover -> amber-500)
// - Hero image now covers the entire upper viewport (nav is overlaid on top)
// - Lightweight floating animation for plane/balloons using component-scoped CSS

// props.links should be an array of { key, label, to } items. If not provided, defaults are used.
// export default function Header({ links }) {
//   const navLinks = links || [
//     { key: "home", label: "Home", to: "/" },
//     { key: "about", label: "About", to: "/aboutus" },
//     { key: "pages", label: "Pages", to: "/pages" },
//     { key: "destination", label: "Destination", to: "/destination" },
//     { key: "tour", label: "Tour", to: "/tour" },
//     { key: "blog", label: "Gallery", to: "/gallery" },
//     { key: "contact", label: "Contact", to: "/contact" },
//   ];

//   // Replace these with your real image imports or URLs
//   const mountainBg = "/src/assets/9.jpg"; // hero background

//   return (
//     <header className="relative w-full  h-[70vh] overflow-hidden">
//       {/* background image covers the whole area */}
//       <div
//         className="absolute inset-0 bg-cover bg-center "
//         style={{ backgroundImage: `url(${mountainBg})` }}
//         aria-hidden="true"
//       />

//       {/* semi-transparent overlay to make text readable */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/30" />

//       {/* Top navbar - positioned absolutely over the hero so the hero fills the full viewport */}
//       <nav className="absolute top-6 left-0 right-0 z-40 px-6">
//         <div className="max-w-7xl mx-auto bg-white backdrop-blur rounded-2xl shadow-md px-6 py-3 flex items-center justify-between">
//           {/* left nav links */}
//           <ul className="hidden md:flex gap-6 items-center text-sm">
//             {navLinks.map((item) => (
//               <li key={item.key}>
//                 <NavLink
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `group px-1 py-1 transition-transform transform inline-block ${
//                       isActive
//                         ? "text-amber-500 font-semibold"
//                         : "text-slate-700"
//                     } hover:text-amber-500 hover:-translate-y-1 hover:scale-105`
//                   }
//                 >
//                   <span className="relative">
//                     {item.label}
//                     {/* animated underline on hover (uses group hover) */}
//                     <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-amber-400 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
//                   </span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Curved logo */}
//           <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-50">
//             <div className="bg-white rounded-b-[70%]  flex items-center justify-center w-40 h-20">
//               <NavLink to="/">
//                 <img
//                   src="/src/assets/Logo.png"
//                   alt="Travlla Logo"
//                   className="h-18 w-auto object-contain"
//                 />
//               </NavLink>
//             </div>
//           </div>

//           {/* social icons & controls (right) */}
//           <div className="flex items-center gap-4 text-slate-700">
//             {/* Instagram */}
//             <NavLink
//               to="/social/instagram"
//               className="p-2 rounded-full hover:bg-slate-100 transition hover:text-amber-500"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <rect
//                   x="2"
//                   y="2"
//                   width="20"
//                   height="20"
//                   rx="5"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <circle
//                   cx="12"
//                   cy="12"
//                   r="3.2"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
//               </svg>
//             </NavLink>

//             {/* Twitter */}
//             <NavLink
//               to="/social/twitter"
//               className="p-2 rounded-full hover:bg-slate-100 transition hover:text-amber-500"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22 5.92c-.62.28-1.28.47-1.98.55a3.47 3.47 0 001.52-1.92 6.93 6.93 0 01-2.2.84 3.45 3.45 0 00-5.88 3.14A9.79 9.79 0 013 4.87a3.45 3.45 0 001.07 4.6c-.5-.02-.98-.15-1.4-.38v.04a3.45 3.45 0 002.76 3.38c-.48.13-.99.13-1.48.05a3.46 3.46 0 003.22 2.4A6.92 6.92 0 012 18.58a9.76 9.76 0 005.29 1.55c6.34 0 9.81-5.25 9.81-9.8v-.45c.67-.49 1.26-1.1 1.72-1.79-.62.28-1.29.47-1.98.55z" />
//               </svg>
//             </NavLink>

//             {/* LinkedIn */}
//             <NavLink
//               to="/social/linkedin"
//               className="p-2 rounded-full hover:bg-slate-100 transition hover:text-amber-500"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="22"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <rect
//                   x="2"
//                   y="2"
//                   width="20"
//                   height="20"
//                   rx="2"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 />
//                 <path
//                   d="M7.5 10.5V18M7.5 7.5v.01M12 18V12.75c0-1.75 2.25-1.89 2.25 0V18M12 10.5h0"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </NavLink>

//             {/* hamburger for mobile (you can wire this to open a menu) */}
//             <button
//               className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
//               aria-label="menu"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M3 6h18M3 12h18M3 18h18" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* central title positioned vertically centered in the viewport */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-emerald-700 tracking-wide drop-shadow-sm">
//           ABOUT US
//         </h1>
//       </div>

//       {/* Component-scoped CSS for subtle animations */}
//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }

//         @keyframes floatSlow {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-float--slow { animation: floatSlow 8s ease-in-out infinite; }
//       `}</style>
//     </header>
//   );
// }
// import React from "react";
// import { NavLink } from "react-router-dom";
import React, { useState } from "react"; // 1. Added useState
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
export default function Header({
  isDropdownOpen,
  setIsDropdownOpen,
  links,
  variant = "default", // "default" | "tour"
  title = "ABOUT US",
  subtitle,
  badges = [],
  bgImage = "/src/assets/9.jpg",
}) {
 
  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    { key: "about", label: "About", to: "/aboutus" },
    {
      key: "packages",
      label: "Packages",
      // Removed 'to' so it doesn't navigate on click
      hasDropdown: true,
      subLinks: [
        { label: "Camps", to: "/packages/camp" },
        { label: "Treks", to: "/packages/trek" },
        { label: "Rafting", to: "/packages/rafting" },
      ],
    },
    { key: "destination", label: "Destination", to: "/destination" },
    { key: "tour", label: "Tour", to: "/tour" },
    { key: "blog", label: "Gallery", to: "/gallery" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <header className="relative w-full h-[70vh]  overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <nav className="absolute top-6 left-0 right-0 z-40 px-6">
        <div className="max-w-7xl mx-auto bg-white backdrop-blur-md rounded-2xl shadow-md px-6 py-3 flex items-center justify-between">
          <ul className="hidden md:flex gap-6 items-center text-sm h-12">
            {" "}
            {/* Fixed height for alignment */}
            {navLinks.map((item) => (
              <li
                key={item.key}
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() =>
                  item.hasDropdown && setIsDropdownOpen(false)
                }
              >
                {item.hasDropdown ? (
                  /* Renders as a trigger that matches the style of other links */
                  <div className="flex items-center gap-1 text-slate-700 cursor-pointer text-sm font-medium transition-colors group-hover:text-amber-500">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                ) : (
                  /* Standard links */
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm transition-all ${
                        isActive
                          ? "text-amber-500 font-semibold"
                          : "text-slate-700 font-medium"
                      } hover:text-amber-500`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
                {/* DROPDOWN MENU */}
                {item.hasDropdown && isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-2xl py-2 z-[60]"
                    // This ensures the menu stays open when mouse is over it
                    onMouseEnter={() => setIsDropdownOpen(true)}
                  >
                    {item.subLinks.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        // This closes the menu after clicking a link
                        onClick={() => setIsDropdownOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-xs font-bold uppercase transition-colors ${
                            isActive
                              ? "text-amber-600 bg-amber-50"
                              : "text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}

                {/* Underline decoration */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-400 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
              </li>
            ))}
          </ul>

          {/* Curved logo */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-50">
            <div className="bg-white rounded-b-[70%]  flex items-center justify-center w-40 h-20">
              <NavLink to="/">
                <img
                  src="/src/assets/Logo.png"
                  alt="Travlla Logo"
                  className="h-18 w-auto object-contain"
                />
              </NavLink>
            </div>
          </div>

          {/* social icons & controls (right) */}
          <div className="flex items-center gap-4 text-slate-700">
            {/* Instagram */}
            <NavLink
              to="/social/instagram"
              className="p-2 rounded-full hover:bg-slate-100 transition hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
              </svg>
            </NavLink>

            {/* Twitter */}
            <NavLink
              to="/social/twitter"
              className="p-2 rounded-full hover:bg-slate-100 transition hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.92c-.62.28-1.28.47-1.98.55a3.47 3.47 0 001.52-1.92 6.93 6.93 0 01-2.2.84 3.45 3.45 0 00-5.88 3.14A9.79 9.79 0 013 4.87a3.45 3.45 0 001.07 4.6c-.5-.02-.98-.15-1.4-.38v.04a3.45 3.45 0 002.76 3.38c-.48.13-.99.13-1.48.05a3.46 3.46 0 003.22 2.4A6.92 6.92 0 012 18.58a9.76 9.76 0 005.29 1.55c6.34 0 9.81-5.25 9.81-9.8v-.45c.67-.49 1.26-1.1 1.72-1.79-.62.28-1.29.47-1.98.55z" />
              </svg>
            </NavLink>

            {/* LinkedIn */}
            <NavLink
              to="/social/linkedin"
              className="p-2 rounded-full hover:bg-slate-100 transition hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.5 10.5V18M7.5 7.5v.01M12 18V12.75c0-1.75 2.25-1.89 2.25 0V18M12 10.5h0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>

            {/* hamburger for mobile (you can wire this to open a menu) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
              aria-label="menu"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          {/* TOUR HERO */}
          {variant === "tour" ? (
            <>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="mt-3 text-lg md:text-xl text-white/90 max-w-2xl">
                  {subtitle}
                </p>
              )}

              {badges.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {badges.map((badge, i) => (
                    <span
                      key={i}
                      className="bg-white/90 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* DEFAULT HERO */
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-sm text-emerald-700">
              {title}
            </h1>
          )}
        </div>
      </div>
    </header>
  );
}
