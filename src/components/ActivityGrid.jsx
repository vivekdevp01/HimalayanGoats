import React, { useState, useRef, useEffect } from "react";
import { Phone, Star, Zap, Camera, ChevronDown, ChevronUp } from "lucide-react";
import EnquiryModal from "./Packages/EnquiryModal";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import raftingPackage from "../json/raftingPackage.json";

// STATIC BUNGY DATA
// const RAFTING_PACKAGES = [
//   {
//     id: 1,
//     name: "Brahmpuri Club",
//     slug: "raftings/brahmpuri-rafting",
//     tagline: "Perfect for beginners and families. Grade I & II rapids.",
//     distance: "9 Kilometres",
//     price: "600",
//     oldPrice: "1,000",
//     rating: "4.7",
//     image: "/src/assets/21.jpg",
//   },
//   {
//     id: 2,
//     name: "Shivpuri Thrill",
//     slug: "raftings/shivpuri-rafting",
//     tagline: "The most popular stretch. Roller Coaster & Golf Course rapids.",
//     distance: "16 Kilometres",
//     price: "1,000",
//     oldPrice: "1,500",
//     rating: "4.9",
//     image: "/src/assets/22.jpg",
//   },
//   {
//     id: 3,
//     name: "Marine Drive Extreme",
//     slug: "raftings/marine-drive-rafting",
//     tagline: "High adrenaline. Includes the famous 'The Wall' rapid.",
//     distance: "26 Kilometres",
//     price: "1,500",
//     oldPrice: "2,500",
//     rating: "5.0",
//     image: "/src/assets/23.jpg",
//   },
//   {
//     id: 4,
//     name: "Kaudiyala Challenge",
//     slug: "raftings/kaudiyala-rafting",
//     tagline: "Extreme grade IV rapids for experienced thrill-seekers only.",
//     distance: "35 Kilometres",
//     price: "2,500",
//     oldPrice: "3,500",
//     rating: "4.8",
//     image: "/src/assets/22.jpg",
//   }
// ];

// const raftingUIData = raftingPackage.map((pkg) => ({
//   id: pkg.id,
//   name: pkg.name,
//   slug: `raftings/${pkg.slug}`,
//   tagline: `${pkg.route}. ${pkg.grade} rapids.`,
//   height: `${pkg.distance_km} KM`,
//   // price: pkg.price,
//   // oldPrice: pkg.oldPrice,
//   rating: pkg.rating,
//   image: pkg.image,
// }));
const raftingUIData = raftingPackage.map((pkg) => ({
  id: pkg.id,
  name: pkg.name,
  slug: pkg.slug,                 // 🔑 for pricing lookup
  route: `raftings/${pkg.slug}`,  // 🔑 for navigation
  tagline: `${pkg.route}. ${pkg.grade} rapids.`,
  height: `${pkg.distance_km} KM`,
  rating: pkg.rating,
  image: pkg.image,
}));


const BUNGY_PACKAGES = [
  {
    id: 1,
    name: "Splash Bungy",
    slug: "bungy/splash-bungy",
    platform: "splash",
    tagline: "India's highest water-touch jump. Includes free DSLR video.",
    height: "109 Metres",
    price: "3,999",
    oldPrice: "4,999",
    rating: "4.9",
    image: "/src/assets/18.jpg",
  },
  {
    id: 2,
    name: "Rocket Bungy",
    slug: "bungy/splash-bungy",
    platform: "thrillfactory",
    tagline: "Feel the G-force as you are launched into the sky at high speed.",
    height: "85 Metres",
    price: "1,999",
    oldPrice: "2,499",
    rating: "4.8",
    image: "/src/assets/19.jpg",
  },
  {
    id: 3,
    name: "Extreme Combo 6",
    slug: "bungy/splash-bungy",
    platform: "thrillfactory",
    tagline: "Bungy + Zipline + Rocket + Swing + Cycle + Sky Walk.",
    height: "All-in-One",
    price: "5,499",
    oldPrice: "7,999",
    rating: "5.0",
    image: "/src/assets/20.jpg",
  },
  {
    id: 4,
    name: "Extreme Combo 6",
    slug: "bungy/splash-bungy",
    platform: "splash",
    tagline: "Bungy + Zipline + Rocket + Swing + Cycle + Sky Walk.",
    height: "All-in-One",
    price: "5,499",
    oldPrice: "7,999",
    rating: "5.0",
    image: "/src/assets/20.jpg",
  },
  {
    id: 5,
    name: "Extreme Combo 6",
    platform: "thrillfactory",
    slug: "bungy/splash-bungy",
    tagline: "Bungy + Zipline + Rocket + Swing + Cycle + Sky Walk.",
    height: "All-in-One",
    price: "5,499",
    oldPrice: "7,999",
    rating: "5.0",
    image: "/src/assets/20.jpg",
  },
];
import { supabase } from "../lib/supabase";

export default function ActivityGrid() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const gridTopRef = useRef(null);
  const navigate = useNavigate();
  const path = location.pathname.toLowerCase();
  const isRafting = path.includes("rafting");
  const [activePlatform, setActivePlatform] = useState("all");

  const [pricingMap, setPricingMap] = useState({});

  useEffect(() => {
    async function fetchPricing() {
      // 1️⃣ Get all rafting packages
      const { data: packages, error: pkgError } = await supabase
        .from("packages")
        .select("id, slug")
        .eq("type", "rafting")
        .eq("is_active", true);

      if (pkgError || !packages) {
        console.error("Package fetch failed", pkgError);
        return;
      }

      const packageIds = packages.map((p) => p.id);

      // 2️⃣ Get all pricing options
      const { data: pricing, error: priceError } = await supabase
        .from("package_pricing_options")
        .select("*")
        .in("package_id", packageIds);

      if (priceError) {
        console.error("Pricing fetch failed", priceError);
        return;
      }

      // 3️⃣ Build pricing map: slug → best price
      const map = {};

      packages.forEach((pkg) => {
        const options = pricing.filter((p) => p.package_id === pkg.id);

        if (!options.length) return;

        const best = options.sort((a, b) => a.final_price - b.final_price)[0];

        map[pkg.slug] = best;
      });

      setPricingMap(map);
    }

    fetchPricing();
  }, []);

  // const currentPackages = isRafting ? raftingUIData : BUNGY_PACKAGES;
const basePackages = isRafting
    ? raftingUIData.map((pkg) => {
        const pricing = pricingMap[pkg.slug];
        return {
          ...pkg,
          price: pricing?.final_price,
          oldPrice: pricing?.price,
        };
      })
    : BUNGY_PACKAGES;


    const currentPackages = isRafting 
    ? basePackages 
    : activePlatform === "all" 
      ? basePackages 
      : basePackages.filter(pkg => pkg.platform === activePlatform);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <div ref={gridTopRef} />

      {/* ADRENALINE HEADING */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
          CHOOSE YOUR <span className="text-emerald-600">LEAP OF FAITH</span>
        </h2>
        <div className="flex flex-wrap items-center gap-4 mt-4 justify-center md:justify-start">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            SHIVPURI, RISHIKESH
          </p>
          <div className="hidden md:block h-4 w-[1px] bg-slate-200"></div>
          <p className="text-amber-600 font-bold text-sm flex items-center gap-1 uppercase">
            <Camera size={16} /> FREE DSLR VIDEO
          </p>
        </div>
      </div>

      {/* --- ADD THIS FILTER UI SECTION --- */}
      {!isRafting && (
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {["all", "splash", "thrillfactory"].map((plat) => (
            <button
              key={plat}
              onClick={() => {
                setActivePlatform(plat);
                setVisibleCount(3); // Reset view when switching platforms
              }}
              className={`px-8 py-3 rounded-2xl font-black text-xs tracking-widest uppercase transition-all border-2 ${
                activePlatform === plat
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-xl scale-105"
                  : "bg-white border-slate-200 text-slate-500 hover:border-emerald-400"
              }`}
            >
              {plat === "all" ? "All Platforms" : plat}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {currentPackages.slice(0, visibleCount).map((pkg) => (
          <motion.div
            key={pkg.id}
            // onClick={() => navigate(`/${pkg.slug}`)}
            onClick={() => navigate(`/${pkg.route}`)}

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer group h-[520px]"
          >
            {/* Image & Overlays */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:from-emerald-950 transition-colors duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-widest">
                  {/* <Zap size={10} fill="currentColor" /> {pkg.height} */}
                  <Zap size={10} fill="currentColor" /> {pkg.height}
                </div>
                <span className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />{" "}
                  {pkg.rating}
                </span>
              </div>

              <h3 className="text-3xl font-black mb-2 group-hover:text-amber-400 transition-colors uppercase leading-tight">
                {pkg.name}
              </h3>
              <p className="text-sm opacity-80 mb-6 font-medium leading-snug">
                {pkg.tagline}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                {pkg.price ? (
                  <>
                    <span className="text-3xl font-black">₹{pkg.price}</span>
                    {pkg.oldPrice && (
                      <span className="text-sm line-through opacity-50">
                        ₹{pkg.oldPrice}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-sm opacity-60">
                    Pricing coming soon
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "tel:+91XXXXXXXXXX";
                  }}
                  className="p-4 bg-white/10 hover:bg-amber-500 rounded-2xl transition-all border border-white/20"
                >
                  <Phone size={22} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPackageId(pkg.id);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 bg-white text-emerald-950 font-black py-4 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all transform active:scale-95 text-center"
                >
                  BOOK MY JUMP
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER BUTTONS (Show More / Show Less) */}
      <div className="mt-16 flex flex-col items-center gap-4">
        {visibleCount < currentPackages.length ? (
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
          >
            VIEW ALL JUMPS{" "}
            <ChevronDown className="group-hover:translate-y-1 transition-transform" />
          </button>
        ) : (
          visibleCount > 3 && (
            <button
              onClick={() => {
                setVisibleCount(3);
                gridTopRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-bold transition-colors py-4"
            >
              <ChevronUp size={20} /> SHOW LESS
            </button>
          )
        )}
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageId={selectedPackageId}
      />
    </section>
  );
}
