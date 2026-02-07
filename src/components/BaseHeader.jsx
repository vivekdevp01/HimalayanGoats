import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { ChevronDown } from "lucide-react"; // Import this for the arrow icon

export default function BaseHeader({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 1. Add state to control the desktop dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    {
      key: "packages",
      label: "PACKAGES",
      hasDropdown: true,
      subLinks: [
        { label: "Camps", to: "/packages/camp" },
        { label: "Treks", to: "/packages/trek" },
        { label: "Rafting", to: "/packages/rafting" },
      ],
    },
  
    { key: "gallery", label: "Gallery", to: "/gallery" },
      { key: "about", label: "About", to: "/aboutus" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  const logoSrc = "/src/assets/Logo3.png";

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 relative">
        {/* LOGO */}
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
  <li 
    key={l.key}
    className="relative group py-4" // 1. Increased vertical padding to bridge the gap
    onMouseEnter={() => l.hasDropdown && setIsDropdownOpen(true)}
    onMouseLeave={() => l.hasDropdown && setIsDropdownOpen(false)}
  >
    {l.hasDropdown ? (
      <div className="flex items-center gap-1 cursor-pointer text-white hover:text-amber-400 transition-all">
        {l.label}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
        />
      </div>
    ) : (
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
    )}

{/* 3. The Dropdown Menu (Desktop) */}
{l.hasDropdown && isDropdownOpen && (
  <div 
    className="absolute top-[85%] left-0 w-52 z-[120]"
    onMouseEnter={() => setIsDropdownOpen(true)} 
  >
    {/* INVISIBLE BRIDGE */}
    <div className="h-5 w-full bg-transparent" />

    {/* FROSTED GLASS EFFECT */}
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white/40 py-2 overflow-hidden">
      {l.subLinks.map((sub) => (
        <NavLink
          key={sub.to}
          to={sub.to}
          className="block px-6 py-3 text-[11px] font-black tracking-widest text-slate-800 hover:bg-amber-500 hover:text-white transition-all duration-200 uppercase"
        >
          {sub.label}
        </NavLink>
      ))}
    </div>
  </div>
)}
  </li>
))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 relative z-[110]">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white hover:text-amber-400 transition p-2 focus:outline-none"
          >
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white text-slate-900 z-[150] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-10">
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-emerald-800 italic text-xl">travlla</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-900 p-2">
              <FiX className="w-8 h-8" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-xl font-black uppercase tracking-widest">
            {navLinks.map((l) => (
              <li key={l.key} className="border-b border-slate-100 pb-4">
                {l.hasDropdown ? (
                  // 4. Mobile Dropdown Layout
                  <div className="flex flex-col gap-4">
                    <span className="text-slate-400 text-xs tracking-[0.2em]">{l.label}</span>
                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-amber-500">
                      {l.subLinks.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-black text-slate-900 hover:text-amber-500"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={l.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition-all ${isActive ? "text-amber-500 translate-x-2" : "text-slate-900 hover:text-amber-500"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}