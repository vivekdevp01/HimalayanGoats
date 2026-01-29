export default function GroupOfferCard() {
  return (
    <div className="bg-white rounded-2xl border border-orange-200 shadow-sm overflow-hidden">
      <div className="p-4 flex gap-4">
        {/* Image */}
        <img
          src="/src/assets/1.jpg" // replace with your image
          alt="Group travel"
          className="w-16 h-16 rounded-lg object-cover"
        />

        {/* Content */}
        <div>
          <h3 className="font-bold text-orange-600 leading-snug">
            Bigger Group? Get special offers upto 50% off!
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            We create unforgettable adventures, customised for your group.
          </p>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-3 hover:opacity-95 transition">
        Get a Callback
      </button>
    </div>
  );
}
