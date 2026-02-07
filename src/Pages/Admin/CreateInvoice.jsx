import { Plus, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";

/* ---------- MASTER DATA ---------- */

const LOCATIONS = ["Rishikesh", "Shivpuri", "Kaudiyala", "Auli"];

const ACTIVITY_TYPES = [
  "River Rafting",
  "Camping",
  "Bungee Jumping",
  "Trekking",
  "Hotel Stay",
  "Scooty Rental",
  "Bike Rental",
  "Combo Package",
];

const ACTIVITY_VARIANTS = {
  "River Rafting": ["16 KM", "24 KM"],
  Camping: ["Swiss Tent", "Alpine Tent"],
  "Bungee Jumping": ["Standard Jump"],
  Trekking: ["Easy", "Moderate", "Difficult"],
  "Hotel Stay": ["Standard Room", "Deluxe Room"],
  "Scooty Rental": ["Activa", "Access"],
  "Bike Rental": ["Royal Enfield", "Pulsar"],
  "Combo Package": ["Rafting + Camping", "Rafting + Camping + Bungee"],
};

const PRICING_UNITS = ["Per Person", "Per Night", "Per Day", "Fixed Package"];
const PAYMENT_MODES = ["Cash", "UPI", "Card", "Bank Transfer"];

/* ---------- COMPONENT ---------- */

export default function CreateInvoice() {
  const [services, setServices] = useState([
    {
      type: "",
      variant: "",
      pricingUnit: "Per Person",
      qty: 1,
      rate: 0,
      description: "",
    },
  ]);

  const [trip, setTrip] = useState({
    location: "",
    startDate: "",
    endDate: "",
  });
  const [payment, setPayment] = useState({
    discountType: "amount", // "amount" | "percent"
    discountValue: 0,
    paid: 0,
    mode: "Cash",
    reference: "",
  });

  //   const [payment, setPayment] = useState({
  //     discount: 0,
  //     paid: 0,
  //     mode: "Cash",
  //     reference: "",
  //   });

  /* ---------- CALCULATIONS ---------- */

  const requiresStay = useMemo(
    () =>
      services.some((s) =>
        ["Camping", "Hotel Stay", "Combo Package"].includes(s.type),
      ),
    [services],
  );

  const subtotal = useMemo(
    () => services.reduce((sum, s) => sum + s.qty * s.rate, 0),
    [services],
  );
  const discountAmount =
    payment.discountType === "percent"
      ? Math.round((subtotal * payment.discountValue) / 100)
      : payment.discountValue;

  const total = Math.max(subtotal - discountAmount, 0);
  const balance = Math.max(total - payment.paid, 0);
  //   const total = Math.max(subtotal - discountAmount, 0);
  //   const balance = Math.max(total - Number(payment.paid || 0), 0);

  /* ---------- HELPERS ---------- */

  const updateService = (i, key, value) => {
    const copy = [...services];
    copy[i][key] = value;
    setServices(copy);
  };

  const addService = () =>
    setServices([
      ...services,
      {
        type: "",
        variant: "",
        pricingUnit: "Per Person",
        qty: 1,
        rate: 0,
        description: "",
      },
    ]);

  const removeService = (i) =>
    setServices(services.filter((_, idx) => idx !== i));

  const qtyLabel = (unit) => {
    if (unit === "Per Person") return "Persons";
    if (unit === "Per Night") return "Nights";
    if (unit === "Per Day") return "Days";
    return "Qty";
  };

  /* ---------- UI ---------- */

  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg border space-y-12">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-black">Tripshalla Invoice</h2>
        <p className="text-slate-500">Customer → Trip → Activities → Payment</p>
      </div>

      {/* TRIP CONTEXT */}
      <section>
        <h3 className="section-title">Trip Context</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <select
            className="input"
            value={trip.location}
            onChange={(e) => setTrip({ ...trip, location: e.target.value })}
          >
            <option value="">Select Location</option>
            {LOCATIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>

          <input
            type="date"
            className="input"
            value={trip.startDate}
            onChange={(e) => setTrip({ ...trip, startDate: e.target.value })}
          />

          {requiresStay && (
            <input
              type="date"
              className="input"
              value={trip.endDate}
              onChange={(e) => setTrip({ ...trip, endDate: e.target.value })}
            />
          )}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-black tracking-tight">
              🧗 Activities & Services
            </h3>
            <p className="text-sm text-slate-500">
              Add all activities included in this booking
            </p>
          </div>

          <button
            onClick={addService}
            className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            <Plus size={18} />
            Add Activity
          </button>
        </div>

        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5"
          >
            {/* ROW HEADER */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-slate-700">Activity #{i + 1}</p>
              <button
                onClick={() => removeService(i)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>

            {/* MAIN GRID */}
            <div className="grid md:grid-cols-6 gap-4">
              {/* ACTIVITY */}
              <div>
                <label className="field-label">Activity</label>
                <select
                  className="input"
                  value={s.type}
                  onChange={(e) => updateService(i, "type", e.target.value)}
                >
                  <option value="">Select Activity</option>
                  {ACTIVITY_TYPES.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* VARIANT */}
              <div>
                <label className="field-label">Variant</label>
                <select
                  className="input"
                  value={s.variant}
                  onChange={(e) => updateService(i, "variant", e.target.value)}
                >
                  <option value="">Select Variant</option>
                  {(ACTIVITY_VARIANTS[s.type] || []).map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* PRICING */}
              <div>
                <label className="field-label">Pricing Unit</label>
                <select
                  className="input"
                  value={s.pricingUnit}
                  onChange={(e) =>
                    updateService(i, "pricingUnit", e.target.value)
                  }
                >
                  {PRICING_UNITS.map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </select>
              </div>

              {/* QTY */}
              <div>
                <label className="field-label">{qtyLabel(s.pricingUnit)}</label>
                <input
                  type="number"
                  min="1"
                  className="input text-center"
                  value={s.qty}
                  onChange={(e) => updateService(i, "qty", +e.target.value)}
                />
              </div>

              {/* RATE */}
              <div>
                <label className="field-label">Rate (₹)</label>
                <input
                  type="number"
                  className="input text-right font-semibold"
                  value={s.rate}
                  onChange={(e) => updateService(i, "rate", +e.target.value)}
                />
              </div>

              {/* TOTAL */}
              <div className="flex flex-col justify-end">
                <label className="field-label">Total</label>
                <div className="text-xl font-black text-emerald-700">
                  ₹{s.qty * s.rate}
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="field-label">Description</label>
              <textarea
                rows={1}
                className="input"
                placeholder="Auto-filled for combo packages"
                value={s.description}
                onChange={(e) =>
                  updateService(i, "description", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </section>

      {/* PAYMENT */}
      <section className="bg-white border rounded-3xl p-8">
        {/* <h3 className="section-title mb-6">Payment Summary</h3> */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black tracking-tight">
            💳 Payment Summary
          </h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Final Step
          </span>
        </div>

        {/* INPUT CARD */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8">
          <p className="text-sm font-semibold text-slate-600 mb-4">
            Payment Controls
          </p>

          <div className="grid md:grid-cols-5 gap-5">
            {/* DISCOUNT TYPE */}
            <div>
              <label className="field-label">Discount Type</label>
              <select
                className="input focus:ring-emerald-500"
                value={payment.discountType}
                onChange={(e) =>
                  setPayment({ ...payment, discountType: e.target.value })
                }
              >
                <option value="amount">₹ Flat</option>
                <option value="percent">% Percentage</option>
              </select>
            </div>

            {/* DISCOUNT VALUE */}
            <div>
              <label className="field-label">
                {payment.discountType === "percent"
                  ? "Discount (%)"
                  : "Discount Amount (₹)"}
              </label>
              <input
                type="number"
                className="input text-right font-semibold"
                value={payment.discountValue}
                onChange={(e) =>
                  setPayment({
                    ...payment,
                    discountValue: +e.target.value,
                  })
                }
              />
            </div>

            {/* PAID */}
            <div>
              <label className="field-label">Paid Amount (₹)</label>
              <input
                type="number"
                className="input text-right font-semibold"
                value={payment.paid}
                onChange={(e) =>
                  setPayment({ ...payment, paid: +e.target.value })
                }
              />
            </div>

            {/* MODE */}
            <div>
              <label className="field-label">Payment Mode</label>
              <select
                className="input"
                value={payment.mode}
                onChange={(e) =>
                  setPayment({ ...payment, mode: e.target.value })
                }
              >
                {PAYMENT_MODES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* REF */}
            <div>
              <label className="field-label">UTR / Reference</label>
              <input
                className="input"
                placeholder="Optional"
                value={payment.reference}
                onChange={(e) =>
                  setPayment({ ...payment, reference: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* TOTALS CARD */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-3">
          <div className="flex justify-between text-slate-600 font-semibold">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {discountAmount > 0 && (
            <div className="flex justify-between text-slate-600 font-semibold">
              <span>
                Discount{" "}
                {payment.discountType === "percent"
                  ? `(${payment.discountValue}%)`
                  : ""}
              </span>
              <span>- ₹{discountAmount}</span>
            </div>
          )}

          <div className="border-t border-emerald-200 my-2" />

          <div className="flex justify-between text-2xl font-black text-emerald-700">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* BALANCE */}
        <div className="mt-6 flex justify-between items-center bg-red-50 border border-red-200 rounded-2xl p-5">
          <span className="font-black text-red-600 text-lg">Balance Due</span>
          <span className="font-black text-2xl text-red-700">₹{balance}</span>
        </div>
      </section>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4">
        <button className="btn-outline">Preview Invoice</button>
        <button className="btn-primary">Generate PDF</button>
      </div>
    </div>
  );
}
