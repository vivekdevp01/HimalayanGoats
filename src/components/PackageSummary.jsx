import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function PackageSummary({
  data = {
    inclusions: [
      "3 nights stay in Gangtok with breakfast",
      "Half-Day Gangtok Sightseeing Tour on a Shared basis",
      "1 night stay in Lachen with breakfast, lunch, and dinner",
      "North Sikkim Sightseeing Tour on a Shared basis",
      "1 night stay in Lachung with breakfast, lunch, and dinner",
      "Visit to Yumthang Valley",
      "All required permits",
      "Daily Breakfast",
    ],
    exclusions: [
      "Expenses of a personal nature",
      "Meals not mentioned in the itinerary",
      "Entrance fees at sightseeing locations",
    ],
  },
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6">
      {/* End Of Trip Heading */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px flex-1 bg-slate-200" />
        <h2
          className="text-3xl md:text-4xl text-amber-500"
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          End Of Trip
        </h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          bg-white
          rounded-3xl
          border border-slate-200
          shadow-[0_20px_50px_rgba(0,0,0,0.06)]
          px-8 py-8 md:px-10 md:py-9
        "
      >
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
          What’s inside the package?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100" />

          {/* Inclusions */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-4">
              Inclusions
            </h4>
            <ul className="space-y-3">
              {data.inclusions.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-0.5" size={18} />
                  <span className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-4">
              Exclusions
            </h4>
            <ul className="space-y-3">
              {data.exclusions.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <XCircle className="text-red-500 mt-0.5" size={18} />
                  <span className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
