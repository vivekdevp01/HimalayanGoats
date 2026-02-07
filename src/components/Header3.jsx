import React, { useState } from "react"; // Added useState for local menu toggle
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header3 = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const item = {
    key: "packages",
    label: "Packages",
    hasDropdown: true,
    subLinks: [
      { label: "Camps", to: "/packages/camp" },
      { label: "Treks", to: "/packages/trek" },
      { label: "Rafting", to: "/packages/rafting" },
    ],
  };

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/aboutus" },
    { label: "CONTACT", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-[50] shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side: Logo */}
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">LOGO</span>
            </div>
            <span className="text-2xl font-bold text-orange-500 tracking-tight italic">
              Tripshalla
            </span>
          </NavLink>
        </div>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center mx-auto space-x-8 text-slate-700 font-medium text-sm uppercase tracking-wide">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700"
                  : "hover:text-emerald-600 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Desktop Dropdown */}
          <li
            className="relative flex items-center gap-1 cursor-pointer transition-colors"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span
              className={`${isDropdownOpen ? "text-emerald-700" : "hover:text-emerald-600"}`}
            >
              {item.label}
            </span>
            <FiChevronDown
              className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-emerald-700" : ""}`}
            />

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 w-48 z-50">
                <div className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                  {item.subLinks.map((sub, index) => (
                    <NavLink
                      key={index}
                      to={sub.to}
                      className={({ isActive }) =>
                        `block px-6 py-3 text-[13px] capitalize transition-colors ${
                          isActive
                            ? "bg-emerald-50 text-emerald-700 font-bold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </li>

             <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700"
                  : "hover:text-emerald-600 transition-colors"
              }
            >
              Gallery
            </NavLink>
          </li>

     <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700"
                  : "hover:text-emerald-600 transition-colors"
              }
            >
              About
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/contact"
              className="hover:text-emerald-600 transition-colors"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side: Hamburger Toggle (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 text-2xl p-2 focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-orange-500 italic">
              Tripshalla
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-slate-700"
            >
              <FiX />
            </button>
          </div>

          <ul className="flex flex-col space-y-6 text-slate-700 font-semibold uppercase tracking-wider text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-emerald-700" : "hover:text-emerald-600"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile Packages Section (Simplified) */}
            <li className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 mb-4">OUR PACKAGES</p>
              <div className="flex flex-col space-y-4 pl-2">
                {item.subLinks.map((sub) => (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-emerald-800 hover:text-emerald-600 capitalize"
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header3;
