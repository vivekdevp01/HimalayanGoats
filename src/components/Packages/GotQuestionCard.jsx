import { Phone } from "lucide-react";

export default function GotAQuestionCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg text-slate-800 mb-2">
        Got a Question?
      </h3>

      <p className="text-sm text-slate-600 mb-4">
        Our destination expert will be happy to help you resolve your queries
        for this tour.
      </p>

      <div className="flex items-start gap-3">
        <Phone className="text-orange-500 mt-1" size={18} />
        <div>
          <p className="font-semibold text-slate-800">+91 7454875874</p>
          <p className="text-xs text-slate-500">
            10:30 AM – 8:00 PM (Mon to Sat)
          </p>
        </div>
      </div>
    </div>
  );
}
