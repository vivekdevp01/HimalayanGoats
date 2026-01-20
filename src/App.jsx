import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import BaseHeader from "./components/BaseHeader";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Tour from "./components/Tour";
import TrekDetails from "./Pages/TrekDetails";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

function RouterContent() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isTour =
    location.pathname === "/tour" || location.pathname.startsWith("/trek/");

  return (
    <>
      {/* ===== HEADER CONTROL ===== */}
      {isHome ? (
        <BaseHeader />
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
        <Route path="/trek/:id" element={<TrekDetails />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default RouterContent;
