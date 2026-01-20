// GalleryDoubleRowScroller.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/*
Props:
 - images: array of { src, alt }
 - columnWidth: px width of each column (default 300)
 - gap: px gap between columns (default 20)
Usage:
 <GalleryDoubleRowScroller images={[...]} columnWidth={300} gap={20} />
*/

export default function GalleryDoubleRowScroller({
  images = [
    { src: "/src/assets/1.jpg", alt: "img1" },
    { src: "/src/assets/2.jpg", alt: "img2" },
    { src: "/src/assets/3.jpg", alt: "img3" },
    { src: "/src/assets/4.jpg", alt: "img4" },
    { src: "/src/assets/5.jpg", alt: "img5" },
    { src: "/src/assets/6.jpg", alt: "img6" },
    { src: "/src/assets/7.jpg", alt: "img7" },
    { src: "/src/assets/8.jpg", alt: "img8" },
      { src: "/src/assets/3.jpg", alt: "img3" },
    { src: "/src/assets/4.jpg", alt: "img4" },
    { src: "/src/assets/5.jpg", alt: "img5" },
    { src: "/src/assets/6.jpg", alt: "img6" },
    { src: "/src/assets/7.jpg", alt: "img7" },
    { src: "/src/assets/8.jpg", alt: "img8" },
    // add as many as you want
  ],
  columnWidth = 300,
  gap = 20,
}) {
  // group images into columns of 2 images each
  const cols = [];
  for (let i = 0; i < images.length; i += 2) {
    cols.push([images[i], images[i + 1] || null]);
  }

  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    const onResize = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const raf = requestAnimationFrame(updateArrows);
    const t = setTimeout(updateArrows, 200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [images.length]);

  // convert vertical wheel to horizontal scrolling when over scroller
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      // only intercept when horizontal overflow exists
      if (el.scrollWidth > el.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if ((e.deltaY > 0 && el.scrollLeft + el.clientWidth < el.scrollWidth) ||
            (e.deltaY < 0 && el.scrollLeft > 0)) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY, behavior: "auto" });
        }
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollBy = (dir = "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const single = columnWidth + gap;
    const offset = dir === "right" ? single : -single;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  // framer variants
  const itemVariant = (i) => ({
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" } },
  });

  return (
    <div className="relative">
      {/* left arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy("left")}
        disabled={!canLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition ${
          canLeft ? "bg-white hover:scale-105" : "bg-white/60 cursor-not-allowed"
        }`}
      >
        <svg className={`w-5 h-5 ${canLeft ? "text-amber-400" : "text-amber-200"}`} viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* scroller - use flex but ensure columns don't shrink (flex-none) */}
      <div
        ref={scrollerRef}
        className="flex items-start gap-5 overflow-x-auto no-scrollbar py-4 px-6"
        style={{
          // prevent children from wrapping and ensure horizontal overflow
          whiteSpace: "nowrap",
        }}
      >
        {cols.map((pair, idx) => (
          <motion.div
            key={idx}
            className="flex-none inline-block"            // <-- flex-none prevents shrinking
            style={{
              width: columnWidth,
              marginRight: idx === cols.length - 1 ? 0 : gap,
              verticalAlign: "top",
              scrollSnapAlign: "center",
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariant(idx)}
          >
            <div className="flex flex-col gap-5">
              {/* top image */}
              {pair[0] ? (
                <div className="rounded-2xl overflow-hidden shadow-md h-[160px] md:h-[180px] lg:h-[200px]">
                  <img src={pair[0].src} alt={pair[0].alt || ""} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="rounded-2xl bg-slate-100 h-[160px] md:h-[180px] lg:h-[200px]" />
              )}

              {/* bottom image */}
              {pair[1] ? (
                <div className="rounded-2xl overflow-hidden shadow-md h-[160px] md:h-[180px] lg:h-[200px]">
                  <img src={pair[1].src} alt={pair[1].alt || ""} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="rounded-2xl bg-slate-100 h-[160px] md:h-[180px] lg:h-[200px]" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* right arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy("right")}
        disabled={!canRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition ${
          canRight ? "bg-white hover:scale-105" : "bg-white/60 cursor-not-allowed"
        }`}
      >
        <svg className={`w-5 h-5 ${canRight ? "text-amber-400" : "text-amber-200"}`} viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <style>{`
        /* hide default scrollbar */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
