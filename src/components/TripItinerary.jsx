import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Car, Hotel, ExternalLink, Moon } from "lucide-react";

export default function PackageItinerary({
  days = [
    {
      day: 1,
      title: "Arrival in Siliguri | Transfer to Gangtok",
      description:
        "Welcome to Siliguri! Upon arrival at NJP Railway Station, board your transfer for a scenic journey to Gangtok. Post check-in, relax and explore MG Marg.",
      transfer: {
        vehicle: "Transfer in SUV",
        from: "New Jalpaiguri Railway Station / Bagdogra Airport",
        to: "Standard Hotel in Gangtok",
      },
      stay: {
        hotelName: "Standard Hotel",
        checkIn: "12:00 PM",
        checkOut: "11:00 AM",
        nights: "2N",
      },
    },
    {
      day: 2,
      title: "Tsomgo Lake & Baba Mandir Excursion",
      description:
        "After breakfast, head towards Tsomgo Lake, a high-altitude glacial lake. Later visit the Baba Harbhajan Singh Memorial.",
      transfer: {
        vehicle: "Non-AC Scorpio / Bolero",
        from: "Gangtok Hotel",
        to: "Tsomgo Lake Excursion",
      },
      stay: {
        hotelName: "Standard Hotel",
        checkIn: "06:00 PM",
        checkOut: "11:00 AM",
        nights: "1N",
      },
    },
  ],
}) {
  const [openDay, setOpenDay] = useState(0);

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-14 font-sans">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800">
          Day-wise Itinerary
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Detailed schedule for your trip
        </p>
      </div>

      <div className="space-y-6">
        {days.map((item, idx) => {
          const isOpen = openDay === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpenDay(isOpen ? null : idx)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-slate-50 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 bg-orange-500 text-white text-[11px] font-black px-3 py-1.5 rounded-full tracking-widest">
                    DAY {item.day}
                  </span>

                  <div>
                    <h3 className="font-bold text-slate-800 text-base md:text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Click to view details
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`mt-1 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-slate-100"
                  >
                    <div className="p-6 md:p-8 space-y-10">
                      {/* Description */}
                      <p className="text-[15px] leading-relaxed text-slate-600">
                        {item.description}
                      </p>

                      {/* Transfer Section */}
                      {item.transfer && (
                        <div className="space-y-5">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Car size={18} />
                            <span className="font-semibold">
                              Transfer Included
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-800">
                            {item.transfer.vehicle}
                          </h4>

                          <div className="relative pl-10 space-y-6">
                            <div className="absolute left-[17px] top-1 bottom-1 border-l-2 border-dotted border-slate-300" />

                            {/* From */}
                            <div className="relative">
                              <span className="absolute -left-[29px] top-4 w-4 h-4 rounded-full border-2 border-orange-400 bg-white" />
                              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                                <div>
                                  <p className="text-[10px] uppercase font-bold text-orange-500 tracking-wider">
                                    From
                                  </p>
                                  <p className="text-sm font-semibold text-slate-700">
                                    {item.transfer.from}
                                  </p>
                                </div>
                                <ExternalLink
                                  size={14}
                                  className="text-slate-300"
                                />
                              </div>
                            </div>

                            {/* To */}
                            <div className="relative">
                              <span className="absolute -left-[29px] top-4 w-4 h-4 rounded-full border-2 border-orange-400 bg-white" />
                              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2">
                                <Hotel size={16} className="text-slate-400" />
                                <div>
                                  <p className="text-[10px] uppercase font-bold text-orange-500 tracking-wider">
                                    To
                                  </p>
                                  <p className="text-sm font-semibold text-slate-700">
                                    {item.transfer.to}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Stay Section */}
                      {item.stay && (
                        <div className="space-y-5">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Hotel size={18} />
                            <span className="font-semibold">Stay Included</span>
                          </div>

                          <h4 className="font-bold text-slate-800">
                            Check-in at {item.stay.hotelName}
                          </h4>

                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between text-center">
                            <div className="flex-1">
                              <p className="text-[10px] uppercase font-bold text-blue-600">
                                Check In
                              </p>
                              <p className="font-bold text-slate-800 mt-1">
                                {item.stay.checkIn}
                              </p>
                            </div>

                            <div className="flex-[2] px-4">
                              <div className="relative border-b border-dashed border-slate-300">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-50 px-3 text-[11px] font-bold text-slate-500 flex items-center gap-1">
                                  {item.stay.nights}
                                  <Moon size={12} />
                                </span>
                              </div>
                            </div>

                            <div className="flex-1">
                              <p className="text-[10px] uppercase font-bold text-orange-600">
                                Check Out
                              </p>
                              <p className="font-bold text-slate-800 mt-1">
                                {item.stay.checkOut}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
