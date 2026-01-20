// HomeHeader.jsx
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * HomeHeader - hero for the homepage (updated)
 * - Logo is absolute and large without expanding the nav/header height
 * - Uses uploaded background at /mnt/data/804f7a36-2cfa-4a58-9d96-446b7ef6d088.png
 */

export default function BaseHeader({ links }) {
  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    { key: "about", label: "About", to: "/aboutus" },
    { key: "pages", label: "Pages", to: "/pages" },
    { key: "destination", label: "Destination", to: "/destination" },
    { key: "tour", label: "Tour", to: "/tour" },
    { key: "gallery", label: "Gallery", to: "/gallery" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  const heroBg = "/mnt/data/804f7a36-2cfa-4a58-9d96-446b7ef6d088.png";
  // using uploaded hero as logo for a quick match; change if you have a separate logo file
  const logoSrc = "/src/assets/Logo3.png";

  return (
    <header className="relative w-full min-h-[84vh] md:min-h-[88vh] overflow-visible">
      {/* font import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');`}</style>

      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(6,78,83,0.85), rgba(6,78,83,0.75)), url(${heroBg})`,
        }}
        aria-hidden="true"
      />

      {/* subtle vignette + texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />

      {/* NAVBAR (centered logo + links) */}
      <nav className="absolute top-6 left-0 right-0 z-40 px-6">
        <div className="max-w-7xl mx-auto relative">
          {/* NAV BAR ROW: fixed small height so logo doesn't push it down */}
          <div className="flex items-center justify-between h-20">
            {/* left placeholder (keeps spacing) */}
            <div className="flex items-center gap-4 flex-shrink-0" />

            {/* middle - links (hidden on small screens) */}
            <ul className="hidden lg:flex items-center gap-6 text-sm text-slate-100">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `px-2 py-1 transition-all duration-200 ${isActive ? "text-amber-400 font-semibold" : "text-slate-100/90 hover:text-amber-400"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* right - icons / menu */}
            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <button className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* BIG LOGO — ABSOLUTE and centered so it doesn't affect nav height */}
          <div className="absolute -left-50  translate-x-1/2 -top-15 z-50">
            <NavLink to="/" aria-label="Home">
              <img
                src={logoSrc}
                alt="Travlla"
                className="h-30 md:h-44 lg:h-50 w-auto object-contain drop-shadow-xl"
              />
            </NavLink>
          </div>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* left column: headline + description + CTA + search pill */}
          <div className="md:col-span-6">
            <div className="max-w-xl text-white">
              <p className="text-sm text-emerald-200/80 mb-4">Discover</p>

              {/* big script headline */}
              <h1 className="mb-4" style={{ fontFamily: "'Kaushan Script', cursive", fontSize: "clamp(48px, 10vw, 120px)", lineHeight: 0.9 }}>
                <span className="block text-white drop-shadow-lg">The</span>
                <span className="block text-amber-300 drop-shadow-lg">World</span>
              </h1>

              <p className="text-slate-200/90 mb-6 max-w-lg">
                The safety of our customers at all stages — curated trips, trusted guides and carefully planned itineraries for every kind of traveler.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-lime-400 text-teal-900 font-semibold px-5 py-2 rounded-full shadow hover:bg-lime-300 transition">
                  Get In Touch
                </button>

                <button className="bg-white/10 text-white px-4 py-2 rounded-full shadow hover:bg-white/20 transition">
                  Explore Tours
                </button>
              </div>

              {/* search pill */}
              <div className="mt-8">
                <div className="flex items-center gap-4 bg-white rounded-full shadow-lg px-3 py-2 w-full max-w-2xl">
                  <select className="bg-transparent text-sm outline-none px-3 py-2 text-slate-700 rounded">
                    <option>Location</option>
                    <option>New Zealand</option>
                    <option>Switzerland</option>
                  </select>

                  <input type="date" className="bg-transparent text-sm outline-none px-3 py-2 flex-1 text-slate-700" />

                  <div className="flex items-center gap-2">
                    <input type="number" defaultValue={2} min={1} className="w-16 bg-transparent text-sm outline-none px-2 py-2 text-slate-700" />
                    <button className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-emerald-500 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right column: hero artwork / figure and promo */}
          <div className="md:col-span-6 relative flex items-center justify-end pr-6">
            {/* accent ribbon */}
            <div className="absolute -left-16 top-10 w-48 h-48 rounded-full bg-amber-300/20 blur-[20px] pointer-events-none" />

            {/* flyer/figure image container */}
            <div className="w-[360px] h-[520px] md:w-[420px] md:h-[580px] rounded-3xl overflow-visible relative">
              {/* main figure (replace with your cutout png) */}
              <img src="/src/assets/.jpg" alt="traveller" className="absolute right-0 bottom-0 h-[95%] object-contain z-20" />

              {/* subtle flying path & dots (decorative) */}
              <svg className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                <path d="M60 420 C160 220, 380 220, 520 80" stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" strokeDasharray="6 8" />
                <circle cx="520" cy="80" r="6" fill="rgba(255,255,255,0.2)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* bottom curved notch (like in your design) */}
      <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-48 h-16 bg-white rounded-t-full  pointer-events-none" />

      {/* small styles for smoothness */}
      <style>{`
        /* reduce text selection jump for large script */
        h1 { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>
    </header>
  );
}
