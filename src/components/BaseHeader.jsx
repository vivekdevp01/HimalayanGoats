import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

export default function BaseHeader({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    { key: "about", label: "About", to: "/aboutus" },
    { key: "destination", label: "Destination", to: "/destination" },
    { key: "tour", label: "Tour", to: "/tour" },
    { key: "gallery", label: "Gallery", to: "/gallery" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  const logoSrc = "/src/assets/Logo3.png";

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 relative">
        
        {/* BIG LOGO */}
        <div className="flex-shrink-0 relative z-[110]">
          <NavLink to="/">
            <img
              src={logoSrc}
              alt="Travlla"
              className="h-24 md:h-40 w-auto object-contain drop-shadow-2xl"
            />
          </NavLink>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((l) => (
            <li key={l.key}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition-all duration-200 ${
                    isActive ? "text-amber-400" : "text-white hover:text-amber-400"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION: Search & Hamburger */}
        <div className="flex items-center gap-4 relative z-[110]">
          <button className="text-white hover:text-amber-400 transition p-2">
            <FiSearch className="w-6 h-6" />
          </button>

          {/* Mobile Toggle Button - Forced to Right */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white hover:text-amber-400 transition p-2 focus:outline-none"
          >
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY (Click to Close) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE DRAWER (SLIDING FROM RIGHT) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[300px] bg-white text-slate-900 z-[150] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-10">
          {/* Close Button Inside Drawer */}
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-emerald-800 italic text-xl">travlla</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-900 p-2">
              <FiX className="w-8 h-8" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col gap-6 text-xl font-black uppercase tracking-widest">
            {navLinks.map((l) => (
              <li key={l.key} className="border-b border-slate-100 pb-4">
                <NavLink
                  to={l.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block transition-all ${isActive ? "text-amber-500 translate-x-2" : "text-slate-900 hover:text-amber-500"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </nav>
  );
}