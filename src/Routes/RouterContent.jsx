// RouterContent.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import BaseHeader from "../components/BaseHeader";
import Header from "../components/Header";
import Home from "../Pages/Home";
import Tour from "../components/Tour";
// import TrekDetails from "../Pages/TrekDetails";
import Aboutus from "../Pages/Aboutus";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
// import Header from "./components/Header";
// import BaseHeader from "./components/BaseHeader";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Packages from "../components/Packages";
import Terms from "../components/Terms";
import PrivacyPolicy from "../components/PrivacyPolicy";
import CopyrightPolicy from "../components/CopyrightPolicy";
import Header3 from "../components/Header3";
import { useState } from "react";
// import StickyContactButtons from "../components/StickyContactButtons";
// import { HiGlobeAlt } from "react-icons/hi2";
import ActivityGrid from "../components/ActivityGrid";
import Tour2 from "../components/Tour2";
import Tour3 from "../components/Tour3";
import Guides from "../Pages/Guides";
import ComingSoonHotels from "../components/ComingSoonHotels";
import CreateInvoice from "../Pages/Admin/CreateInvoice";
import ComingSoonTreks from "../components/ComingSoonTreks";
// import Dashboard from "../Pages/Admin/Dashboard";

// import Home from "./Pages/Home";
// import Tour from "./components/Tour";
// import TrekDetails from "./Pages/TrekDetails";
// import Aboutus from "./Pages/Aboutus";
// import Contact from "../Pages/Aboutus";
// import Gallery from "../Pages/Gallery";

export default function RouterContent() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isPackage = location.pathname.startsWith("/packages");
  const isBungeeMain = location.pathname === "/bungee";
  const isRaftingMain = location.pathname === "/raftings";
  const isAbout = location.pathname.startsWith("/aboutus");
  // const isTour = location.pathname.startsWith("/trek/");
  const isTour =
    location.pathname === "/tour" ||
    location.pathname.startsWith("/trek/") ||
    location.pathname.startsWith("/bungy/") ||
    location.pathname.startsWith("/raftings/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const bungySlides = [
    {
      url: "/assets/18.jpg",
      tagline: "CONQUER THE HEIGHT OF", // Replaces "Get up to"
      title: "Splash Bungy Rishikesh",
      discount: "109 METRES", // Highlights height instead of %
      price: "3,999",
    },
    {
      url: "/assets/19.jpg",
      tagline: "RELIVE THE MOMENT WITH",
      title: "Cinematic Memories",
      discount: "FREE DSLR VIDEO", // Highlights the value-add
      price: "3,999",
    },
    {
      url: "/assets/20.jpg",
      tagline: "SAVE BIG ON ADRENALINE",
      title: "Extreme Combo Packs",
      discount: "30% OFF",
      price: "5,000",
    },
  ];

  const link = [
    `1ZVsxIGs1Kg`, // High-quality cinematic Bungee jump
    `9txxodYuZGc`, // Thrilling White Water Rafting footage
    `C1XxeN4moaE`, // General Rishikesh Adventure Guide
  ];

  const raftingSlides = [
    {
      url: "/assets/21.jpg", // Replace with your actual asset
      tagline: "CONQUER THE ROARING RAPIDS OF",
      title: "Ganges River Rafting",
      discount: "GRADE III+ RAPIDS", // Highlights the thrill level
      price: "1,500",
    },
    {
      url: "/assets/22.jpg",
      tagline: "CHALLENGE THE LONGEST STRETCH",
      title: "Marine Drive to Rishikesh",
      discount: "26 KILOMETRES", // Highlights the distance/endurance
      price: "2,500",
    },
    {
      url: "/assets/23.jpg",
      tagline: "SAFETY IS OUR TOP PRIORITY",
      title: "Certified Instructors",
      discount: "US COAST GUARD GEAR", // Highlights the safety equipment
      price: "1,200",
    },
  ];

  return (
    <>
      {/* ===== HEADER CONTROL ===== */}
      {/* {isHome ? (
        <BaseHeader />
      ) : isPackage ? ( // New condition for the cinematic hero
        <HeroHeader />
      ) : isTour || isAbout ? (
        <Header
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          variant={isTour ? "tour" : "default"}
          title={isTour ? "Kedarkantha Trek" : "ABOUT US"}
          subtitle={
            isTour ? "Snow Trek • Beginner Friendly • Uttarakhand" : undefined
          }
          badges={isTour ? ["5 Days", "12,500 ft", "Easy–Moderate"] : []}
          bgImage={isTour ? "/src/assets/1.jpg" : "/src/assets/9.jpg"}
        />
      ) : (
        <Header3
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )} */}
      {isHome ? (
        <BaseHeader />
      ) : isPackage ? (
        <HeroHeader />
      ) : isBungeeMain ? (
        <HeroHeader slides={bungySlides} videoID={link[0]} />
      ) : isRaftingMain ? (
        <HeroHeader slides={raftingSlides} videoID={link[1]} />
      ) : isTour ? null : isAbout ? ( // 🚫 NO HEADER HERE
        <Header title="ABOUT US" />
      ) : (
        <Header3
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}

      {/* ===== ROUTES ===== */}
      <Routes>
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        <Route path="/admin/createInvoice" element={<CreateInvoice />} />

        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:category" element={<Packages />} />
        <Route path="/trek/:slug" element={<Tour />} />
        <Route path="/stays" element={<ComingSoonHotels />} />
         <Route path="/treks" element={<ComingSoonTreks/>} />
        <Route path="/bungee" element={<ActivityGrid />} />
        <Route path="/bungy/:slug" element={<Tour2 />} />
        <Route path="/raftings" element={<ActivityGrid />} />
        <Route path="/raftings/:slug" element={<Tour3 />} />
        <Route path="/guide" element={<Guides />} />
        {/* <Route path="/createbooking" element={<CreateBooking />} /> */}

        {/* <Route path="/trek/:id" element={<TrekDetails />} /> */}
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/copyright" element={<CopyrightPolicy />} />
      </Routes>
      {/* <StickyContactButtons /> */}
      <Footer />
    </>
  );
}
