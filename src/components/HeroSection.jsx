import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/assets/1.jpg"
        alt="Himalayan Trekking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Explore the <span className="text-amber-400">Himalayas</span>
            <br />
            With Real Adventure
          </h1>

          <p className="mt-6 text-lg text-white/90">
            Handcrafted treks, scenic camps, river rafting & adventure
            experiences across Uttarakhand and Himachal.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            
            <button className="bg-amber-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition">
              Explore Treks
            </button>

            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-900 transition">
              View Packages
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
