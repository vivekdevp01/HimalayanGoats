export default function PriceCard({ pricing }) {
  if (!pricing) {
    return (
      <div className="bg-white rounded-2xl p-5 shadow text-slate-500">
        Pricing will be updated soon.
      </div>
    );
  }

  const { title, price, final_price, discount_percent, duration } = pricing;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_16px_50px_rgba(0,0,0,0.08)] space-y-3">
      {/* Title */}
      <h3 className="text-sm font-semibold text-slate-700">
        {title || "Per Adult"}
      </h3>

      {/* Original price */}
      {discount_percent > 0 && (
        <p className="text-sm text-slate-500">
          Starting from{" "}
          <span className="line-through text-slate-400">INR {price}</span>
        </p>
      )}

      {/* Final price */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-orange-500">
          INR {final_price}
        </span>
        <span className="text-sm text-orange-500 font-medium">per Adult</span>
      </div>

      {/* Duration */}
      {duration && <p className="text-xs text-slate-500">{duration}</p>}

      {/* Badges */}
      {discount_percent > 0 && (
        <div className="flex items-center gap-2 pt-2">
          <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-orange-100 text-orange-600">
            {discount_percent}% OFF
          </span>

          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-orange-500 text-white">
            LIMITED OFFER
          </span>
        </div>
      )}
    </div>
  );
}
