import React, { useState } from "react";

export default function FAQs({
  title = "Kedarkantha Trek FAQs",
  initialCount = 3,
  faqs = [
    {
      q: "What is the best time for Kedarkantha trek?",
      a: `The Kedarkantha trek can be taken throughout the year; however, the optimal time for the trek is from December to April, including the winter season.

During these months, the trail offers a splendid experience with snow-covered landscapes and pleasant weather. This period ensures a smooth journey, making it the ideal time for trekkers.`,
    },
    {
      q: "What is the temperature during Kedarkantha Trek?",
      a: `In summer, temperatures can go up to 20°C, making it pleasant for trekking.

During winters, temperatures drop below zero, transforming the trail into a snow-laden wonderland that offers a thrilling experience.`,
    },
    {
      q: "What is the Kedarkantha trek height?",
      a: `The Kedarkantha trek stands at an elevation of approximately 3,810 metres (12,500 ft). The trail spans about 20 km and passes through alpine forests and snowy meadows.`,
    },
    {
      q: "Is Kedarkantha trek suitable for beginners?",
      a: `Yes, Kedarkantha is considered one of the best beginner-friendly Himalayan treks due to its well-marked trails and gradual ascent.`,
    },
    {
      q: "How difficult is the Kedarkantha trek?",
      a: `The trek is classified as easy to moderate and is ideal for first-time trekkers with basic fitness.`,
    },
  ],
}) {
  const [expanded, setExpanded] = useState(false);

  const visibleFaqs = expanded ? faqs : faqs.slice(0, initialCount);

  return (
    <section className="w-full">
      {/* Outer Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 md:px-10 py-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1 h-6 bg-orange-500 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-12">
          {visibleFaqs.map((item, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Number */}
              <div className="shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-3">
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {faqs.length > initialCount && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                px-8 py-3 rounded-xl
                bg-orange-500 text-white
                font-semibold
                hover:bg-orange-600
                transition
              "
            >
              {expanded ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
