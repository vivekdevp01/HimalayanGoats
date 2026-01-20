export default function PriceCard({
  originalPrice = "7,315",
  price = "5,500",
  discount = "24% Off",
  badge = "REPUBLIC DAY SALE",
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
      {/* Starting price */}
      <p className="text-sm text-slate-500 mb-1">
        Starting from{" "}
        <span className="line-through text-slate-400">INR {originalPrice}</span>
      </p>

      {/* Main price */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-orange-500">
          INR {price}
        </span>
        <span className="text-sm text-orange-500 font-medium">per Adult</span>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-3">
        <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-orange-100 text-orange-600">
          {discount}
        </span>

        <span className="px-3 py-1 rounded-lg text-xs font-bold bg-orange-500 text-white">
          {badge}
        </span>
      </div>
    </div>
  );
}
