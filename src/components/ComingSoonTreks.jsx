import React from "react";
import { motion } from "framer-motion";
import { Mountain, MapPin, Bell, ArrowLeft, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ComingSoonTreks() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* 1. Background Image with Gritty Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
      </div>

      {/* 2. Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full px-6 text-center"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          
          {/* Icon Header - Adventure Green with Orange Glow */}
          <motion.div 
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-20 h-20 bg-[#00796B] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-900/40"
          >
            <Mountain className="text-white" size={40} />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
            New Summits <span className="text-[#F7A325]">Awaiting.</span>
          </h1>
          
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
            Our explorers are currently mapping out high-altitude trails and hidden basecamps. 
            From the Garhwal Himalayas to the jagged peaks of Himachal, your ultimate trek starts soon.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#F7A325] hover:text-white transition-all active:scale-95 shadow-xl"
            >
              <ArrowLeft size={16} />
              Back to Base
            </button>
            
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all backdrop-blur-md">
              <Bell size={16} />
              Notify Me
            </button>
          </div>

          {/* Trek Stats/Location Badge */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-[#F7A325] text-xs uppercase tracking-[0.3em] font-black">
              <MapPin size={14} />
              <span>Kedarkantha • Valley of Flowers • Hampta Pass</span>
            </div>
            
            <div className="flex gap-6 text-white/30">
               <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                 <Wind size={12} /> High Altitude
               </div>
               <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                 <Mountain size={12} /> Expert Guides
               </div>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <p className="mt-8 text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
          © 2026 Tripshalla Adventure Co.
        </p>
      </motion.div>

      {/* Atmospheric Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00796B]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#F7A325]/20 rounded-full blur-[120px]" />
    </div>
  );
}