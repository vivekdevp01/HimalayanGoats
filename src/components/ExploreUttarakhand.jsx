import { motion } from "framer-motion";
import { Mountain, Tent, Waves, Hotel, Bike, Kayak } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Treks",
    icon: Mountain,
    slug: "/packages/treks",
    desc: "Himalayan treks & guided trails",
  },
  {
    title: "Camping",
    icon: Tent,
    slug: "/packages/camping",
    desc: "Riverside & alpine camps",
  },
  {
    title: "Rafting",
    icon: Waves,
    slug: "/packages/rafting",
    desc: "White water rafting in Rishikesh",
  },
  {
    title: "Adventure",
    icon: Kayak,
    slug: "/adventure",
    desc: "Bungee, zipline & more",
  },
  {
    title: "Hotels & Hostels",
    icon: Hotel,
    slug: "/stays",
    desc: "Budget to premium stays",
  },
  {
    title: "Bike & Scooty Rentals",
    icon: Bike,
    slug: "/rentals",
    desc: "Easy local transport",
  },
];

export default function ExploreUttarakhand() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Explore <span className="text-orange-500">Uttarakhand</span> With Us
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            From treks and camps to stays and rentals — everything you need for
            your Uttarakhand adventure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => navigate(cat.slug)}
                className="group cursor-pointer rounded-3xl border border-slate-200 p-8 hover:border-orange-400 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
