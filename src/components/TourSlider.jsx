// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight, Phone, Star } from "lucide-react";

// export default function TourSlider() {
//   const scrollRef = useRef(null);

//   const packages = [
//     {
//       id: 1,
//       title: "Spiti Valley From Delhi | FREE Lahaul Excursion",
//       duration: "7 days & 6 nights",
//       rating: "4.4 (1.5K)",
//       price: "19,876",
//       oldPrice: "25,276",
//       save: "5,400",
//       image:
//         "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1000&auto=format&fit=crop",
//       tags: ["1D Delhi", "1D Manali", "4D Spiti Valley", "+1"],
//       overlayColor: "from-amber-900/90 via-amber-900/40 to-transparent",
//     },
//     {
//       id: 2,
//       title: "Kashmir Wonders | Shikara Rides & Glacial Trails",
//       duration: "6 days & 5 nights",
//       rating: "4.8 (862)",
//       price: "15,971",
//       oldPrice: "21,980",
//       save: "6,009",
//       image: "/src/assets/1.jpg",
//       tags: ["3D Srinagar", "1D Pahalgam", "2D Srinagar", "+1"],
//       overlayColor: "from-slate-900/90 via-slate-900/40 to-transparent",
//     },
//     {
//       id: 3,
//       title: "Mesmerising Meghalaya | Group Tour Package",
//       duration: "6 days & 5 nights",
//       rating: "4.8 (862)",
//       price: "19,276",
//       oldPrice: "23,300",
//       save: "4,024",
//       image: "/src/assets/3.jpg",
//       tags: ["1D Shillong", "2D Cherrapunji", "1D Dowki", "+2"],
//       overlayColor: "from-emerald-900/90 via-emerald-900/40 to-transparent",
//     },
//     {
//       id: 4,
//       title: "Mesmerising Meghalaya | Group Tour Package",
//       duration: "6 days & 5 nights",
//       rating: "4.8 (862)",
//       price: "19,276",
//       oldPrice: "23,300",
//       save: "4,024",
//       image: "/src/assets/3.jpg",
//       tags: ["1D Shillong", "2D Cherrapunji", "1D Dowki", "+2"],
//       overlayColor: "from-emerald-900/90 via-emerald-900/40 to-transparent",
//     },
//   ];

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth * 0.8;
//       const scrollTo =
//         direction === "left"
//           ? scrollLeft - scrollAmount
//           : scrollLeft + scrollAmount;
//       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12 font-sans overflow-visible">
//       {/* Heading */}
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
//           <span className="text-orange-500">India</span> Packages of the Week
//           <span className="text-2xl">✨</span>
//         </h2>
//         <p className="text-gray-400 text-sm mt-1 font-medium">
//           Price updated as of 21st Jan
//         </p>
//       </div>

//       {/* Slider Container with Absolute Navigation */}
//       <div className="relative group">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Scrollable Area */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory touch-pan-x"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="min-w-[300px] md:min-w-[380px]  h-[520px] relative rounded-2xl overflow-hidden snap-start shadow-lg group/card"
//             >
//               {/* Actual Visible Image */}
//               <img
//                 src={pkg.image}
//                 alt={pkg.title}
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//               />

//               {/* Gradient Overlay (Fade from bottom to middle) */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-t ${pkg.overlayColor} z-10`}
//               />

//               {/* Text Content */}
//               <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-[11px] font-bold bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
//                     {pkg.duration}
//                   </span>
//                   <div className="flex items-center gap-1 text-xs font-bold bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
//                     <Star
//                       size={14}
//                       className="fill-yellow-400 text-yellow-400"
//                     />{" "}
//                     {pkg.rating}
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold leading-tight mb-3 group-hover/card:text-orange-400 transition-colors">
//                   {pkg.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {pkg.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="text-[10px] font-medium bg-white/10 px-2 py-1 rounded backdrop-blur-sm border border-white/10"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-end gap-2">
//                     <span className="text-2xl font-black italic">
//                       INR {pkg.price}
//                     </span>
//                     <span className="text-xs line-through opacity-60 mb-1">
//                       INR {pkg.oldPrice}
//                     </span>
//                     <div className="relative mb-1">
//                       <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-sm font-black">
//                         SAVE INR {pkg.save}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button className="p-3 bg-white/10 hover:bg-orange-500 rounded-2xl border border-white/20 transition-all flex items-center justify-center">
//                       <Phone size={20} />
//                     </button>
//                     <button className="flex-1 bg-white text-slate-900 font-bold py-3.5 rounded-2xl hover:bg-orange-600 hover:text-white transition-all shadow-lg active:scale-95">
//                       Request Callback
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, Star } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useParams } from "react-router-dom";
const overlayByCategory = {
  overlayColor: "from-amber-900/90 via-amber-900/40 to-transparent",
};

export default function TourSlider() {
  const { category } = useParams();
  const resolvedCategory = category || "trek";

  const scrollRef = useRef(null);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, [resolvedCategory]);

  async function fetchPackages() {
    console.log("📦 Fetching packages for:", resolvedCategory);

    const { data: packagesData, error } = await supabase
      .from("packages")
      .select(
        `
        id,
        name,
        tagline,
        duration_days,
        starting_price,
        old_price,
        rating,
        review_count
      `,
      )
      .eq("category", resolvedCategory)
      .eq("is_active", true);

    if (error) {
      console.error(error);
      return;
    }

    const ids = packagesData.map((p) => p.id);

    const { data: mediaData } = await supabase
      .from("media")
      .select("entity_id, media_url")
      .eq("entity_type", "package")
      .eq("media_role", "cover")
      .in("entity_id", ids);

    const merged = packagesData.map((pkg) => ({
      ...pkg,
      image:
        mediaData?.find((m) => m.entity_id === pkg.id)?.media_url ||
        "/fallback.jpg",
    }));

    setPackages(merged);
  }

  // const scroll = (direction) => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   const scrollAmount = el.clientWidth * 0.8;
  //   el.scrollTo({
  //     left:
  //       direction === "left"
  //         ? el.scrollLeft - scrollAmount
  //         : el.scrollLeft + scrollAmount,
  //     behavior: "smooth",
  //   });
  // };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans overflow-visible">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
          <span className="text-orange-500">
            {resolvedCategory.toUpperCase()}
          </span>{" "}
          Packages of the Week
          <span className="text-2xl">✨</span>
        </h2>
        <p className="text-gray-400 text-sm mt-1 font-medium">
          Price updated as of 21st Jan
        </p>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {packages.map((pkg) => {
            const image = pkg.media?.[0]?.media_url;

            return (
              <div
                key={pkg.id}
                className="min-w-[300px] md:min-w-[380px]  h-[520px] relative rounded-2xl overflow-hidden snap-start shadow-lg group/card"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Gradient Overlay (Fade from bottom to middle) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${overlayByCategory.overlayColor} z-10`}
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {pkg.duration_days} Days & {pkg.duration_days - 1} Nights
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />{" "}
                      {pkg.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-tight mb-3 group-hover/card:text-orange-400 transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] font-medium bg-white/10 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                      {pkg.tagline}
                    </span>
                  </div>
                  <div className="my-[0.5px] h-[2px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  <div className="space-y-4">
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-black italic">
                        INR {pkg.starting_price}
                      </span>
                      <span className="text-xs line-through opacity-60 mb-1">
                        INR {pkg.old_price}
                      </span>
                      <div className="relative mb-1">
                        <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-sm font-black">
                          SAVE INR SAVE INR {pkg.old_price - pkg.starting_price}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {" "}
                      <button className="p-3 bg-white/10 hover:bg-orange-500 rounded-xl border border-white/20 transition-all flex items-center justify-center">
                        <Phone size={20} />{" "}
                      </button>{" "}
                      <button className="flex-1 bg-white text-slate-900 font-bold py-3.5 rounded-xl hover:bg-orange-600 hover:text-white transition-all shadow-lg active:scale-95">
                        Request Callback{" "}
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <button onClick={() => scroll("right")} className="slider-btn right">
          <ChevronRight />
        </button> */}
      </div>
      {/* </div> */}
    </section>
  );
}
