// import { Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import BaseHeader from "./components/BaseHeader";
// import Footer from "./components/Footer";

// import Home from "./Pages/Home";
// import Tour from "./components/Tour";
// import TrekDetails from "./Pages/TrekDetails";
// import Aboutus from "./Pages/Aboutus";
// import Contact from "./Pages/Contact";
// import Gallery from "./Pages/Gallery";

// function RouterContent() {
//   const location = useLocation();

//   const isHome = location.pathname === "/";
//   const isTour =
//     location.pathname === "/tour" || location.pathname.startsWith("/trek/");

//   return (
//     <>
//       {/* ===== HEADER CONTROL ===== */}
//       {isHome ? (
//         <BaseHeader />
//       ) : (
//         <Header
//           variant={isTour ? "tour" : "default"}
//           title={isTour ? "Kedarkantha Trek" : "ABOUT US"}
//           subtitle={
//             isTour ? "Snow Trek • Beginner Friendly • Uttarakhand" : undefined
//           }
//           badges={isTour ? ["5 Days", "12,500 ft", "Easy–Moderate"] : []}
//           bgImage={isTour ? "/src/assets/1.jpg" : "/src/assets/9.jpg"}
//         />
//       )}

//       {/* ===== ROUTES ===== */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tour" element={<Tour />} />
//         <Route path="/trek/:id" element={<TrekDetails />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default RouterContent;

// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterContent from "./Routes/RouterContent";
import ScrollToTop from "./components/ScrollToTop";
import StickyWhatsApp from "./components/Packages/StickyWhatsappButton";
import AdventureLoader from "./components/AdventureLoader";

export default function App() {
  // SEO optimization: If it's a bot, don't show the loader
  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
  const [isLoading, setIsLoading] = useState(!isBot); 

  useEffect(() => {
    if (isBot) return; // Don't run timers for Google

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isBot]);

  return (
    <BrowserRouter>
      {/* Show loader only for humans */}
      {isLoading && <AdventureLoader />}

      {/* For Google: Content is always visible (isLoading is false).
        For Humans: Content stays hidden/invisible for 2s then fades in.
      */}
      <div 
        style={{ 
          visibility: isLoading ? 'hidden' : 'visible', 
          opacity: isLoading ? 0 : 1 
        }} 
        className="transition-opacity duration-700"
      >
        <ScrollToTop />
        <StickyWhatsApp />
        <RouterContent />
      </div>
    </BrowserRouter>
  );
}