import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryCard() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔗 Later: Supabase insert here
    setShowSuccess(true);
  };

  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-lg font-bold text-slate-800">Get a Callback</h3>
          <p className="text-sm text-slate-500 mt-1">
            Get exclusive offers & expert assistance
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Phone */}
          <div className="flex gap-3">
            <input
              value="+91"
              disabled
              className="w-[70px] px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-center"
            />
            <input
              required
              placeholder="Phone Number"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="number"
            min="1"
            placeholder="Traveller Count"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <textarea
            rows="2.5"
            placeholder="Message (Optional)"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Privacy */}
          {/* Privacy – compact single line */}
          {/* <div className="flex items-start gap-2 text-sm text-slate-600 mt-2">
            <CheckCircle2
              size={16}
              className="text-emerald-500 mt-0.5 shrink-0"
            />
            <span>
              Your contact details are secure and will only be used to contact
              you.
            </span>
          </div> */}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-bold"
          >
            Send Enquiry
          </button>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
              >
                <X />
              </button>

              <CheckCircle2
                size={48}
                className="text-emerald-500 mx-auto mb-4"
              />

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Thank you!
              </h3>

              <p className="text-sm text-slate-600 mb-6">
                Your enquiry has been received successfully.
                <br />
                Our destination expert will reach out to you shortly.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg font-semibold"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
