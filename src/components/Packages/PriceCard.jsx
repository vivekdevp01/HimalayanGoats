import React from "react";
import { Tag, Sparkles, Clock } from "lucide-react";

export default function PriceCard({ pricing }) {
  if (!pricing) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center">
        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
          <Clock className="text-slate-300" size={24} />
        </div>
        <p className="text-slate-500 font-medium">Pricing will be updated soon.</p>
      </div>
    );
  }

  const { title, price, final_price, discount_percent, duration } = pricing;

  return (
    <div className="relative overflow-hidden bg-white rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-10 -mt-10 blur-2xl" />

      <div className="relative z-10 space-y-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
              Best Value Rate
            </h3>
            <p className="text-lg font-bold text-slate-800 leading-tight">
              {title || "Standard Package"}
            </p>
          </div>
          {discount_percent > 0 && (
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-tighter flex items-center gap-1 shadow-lg shadow-emerald-500/20">
              <Sparkles size={10} />
              SAVE {discount_percent}%
            </div>
          )}
        </div>

        <hr className="border-slate-50" />

        {/* Pricing Section */}
        <div className="space-y-1">
          {discount_percent > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 line-through">
                INR {price.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                You save INR {(price - final_price).toLocaleString()}
              </span>
            </div>
          )}

          <div className="flex items-end gap-1.5">
            <span className="text-4xl font-black text-slate-900 tracking-tighter">
              ₹{final_price.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
              / Person
            </span>
          </div>
        </div>

        {/* Duration & Availability */}
        <div className="flex items-center gap-4 py-2">
           <div className="flex items-center gap-1.5 text-slate-600">
             <Clock size={14} className="text-orange-500" />
             <span className="text-xs font-bold uppercase tracking-wide">{duration || "Flexible"}</span>
           </div>
           <div className="h-4 w-[1px] bg-slate-100" />
           <div className="flex items-center gap-1.5 text-slate-600">
             <Tag size={14} className="text-orange-500" />
             <span className="text-xs font-bold uppercase tracking-wide">Instant Booking</span>
           </div>
        </div>

        {/* Action Badges */}
        {discount_percent > 0 && (
          <div className="pt-2">
            <div className="bg-orange-500 rounded-2xl p-3 flex items-center justify-between text-white shadow-xl shadow-orange-500/20">
              <span className="text-[10px] font-black uppercase tracking-widest pl-2">
                Limited Time Offer
              </span>
              <div className="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-bold backdrop-blur-sm">
                Active Now
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}