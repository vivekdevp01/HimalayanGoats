// RouterContent.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import BaseHeader from "../components/BaseHeader";
import Header from "../components/Header";
import Home from "../Pages/Home";
import Tour from "../components/Tour";
import TrekDetails from "../Pages/TrekDetails";
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

// import Home from "./Pages/Home";
// import Tour from "./components/Tour";
// import TrekDetails from "./Pages/TrekDetails";
// import Aboutus from "./Pages/Aboutus";
// import Contact from "../Pages/Aboutus";
// import Gallery from "../Pages/Gallery";

export default function RouterContent() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isPackage = location.pathname.startsWith("/packages") ;
  // const isTour = location.pathname.startsWith("/trek/");

  const isTour =
    location.pathname === "/tour" || location.pathname.startsWith("/trek/");

  return (
    <>
      {/* ===== HEADER CONTROL ===== */}
      {isHome ? (
        <BaseHeader />
      ) : isPackage ? ( // New condition for the cinematic hero
        <HeroHeader />
      ) : (
        <Header
          variant={isTour ? "tour" : "default"}
          title={isTour ? "Kedarkantha Trek" : "ABOUT US"}
          subtitle={
            isTour ? "Snow Trek • Beginner Friendly • Uttarakhand" : undefined
          }
          badges={isTour ? ["5 Days", "12,500 ft", "Easy–Moderate"] : []}
          bgImage={isTour ? "/src/assets/1.jpg" : "/src/assets/9.jpg"}
        />
      )}

      {/* ===== ROUTES ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:category" element={<Packages />} />

        <Route path="/trek/:id" element={<TrekDetails />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/terms" element={<Terms/>} />
         <Route path="/privacy" element={<PrivacyPolicy/>} />
      </Routes>

      <Footer />
    </>
  );
}
