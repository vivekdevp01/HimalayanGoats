import { Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#7A5C8E] px-6 py-4">
        <h3 className="text-white font-bold text-lg">Why Choose Us</h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5 text-sm text-slate-700">
        <div className="flex gap-3">
          <Check className="text-emerald-500 mt-1" size={18} />
          <div>
            <p className="font-semibold">Verified Reviews</p>
            <p className="text-slate-500">
              25,000+ pictures and reviews on the platform.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-emerald-500 mt-1" size={18} />
          <div>
            <p className="font-semibold">10,000+ Tours and Activities</p>
            <p className="text-slate-500">
              Activities across 17+ countries so you never miss the best
              experiences.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Check className="text-emerald-500 mt-1" size={18} />
          <div>
            <p className="font-semibold">Customer Delight</p>
            <p className="text-slate-500">
              Hassle-free experience with dedicated customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
