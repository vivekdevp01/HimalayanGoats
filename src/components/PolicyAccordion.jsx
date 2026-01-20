import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function PolicyAccordion({
  policies = [
    {
      id: "confirmation",
      title: "Confirmation Policy",
      points: [
        "The customer receives a confirmation voucher via email within 24 hours of successful booking.",
        "If preferred slots are unavailable, an alternate schedule will be arranged.",
        "Customers may cancel before confirmation for a full refund.",
      ],
    },
    {
      id: "refund",
      title: "Refund Policy",
      points: [
        "Refunds are processed within 10 business days.",
        "Refunds are credited to the Thrillophilia wallet as Thrillcash.",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation Policy",
      points: [
        "30+ days before travel: 25% cancellation fee.",
        "15–30 days before travel: 50% cancellation fee.",
        "0–15 days before travel: 100% cancellation fee.",
        "No cash refunds for cancellations due to unforeseen circumstances.",
      ],
    },
    {
      id: "payment",
      title: "Payment Policy",
      points: ["100% of the tour cost must be paid at the time of booking."],
    },
  ],
}) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!policies?.length) return null;

  return (
    <section className="w-full">
      {/* OUTER CARD */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 md:px-10 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Policies
          </h2>
          <p className="text-slate-500 mt-1">
            Please read the following policies carefully before booking.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-slate-200">
          {policies.map((policy, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={policy.id} className="py-2">
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <h3
                    className={`text-lg font-semibold transition-colors ${
                      isOpen
                        ? "text-orange-600"
                        : "text-slate-800 group-hover:text-orange-500"
                    }`}
                  >
                    {policy.title}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-orange-500" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-6">
                        <ul className="space-y-4">
                          {policy.points.map((point, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                              <p className="text-[15px] leading-relaxed text-slate-600">
                                {point}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
