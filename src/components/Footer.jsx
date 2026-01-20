import React from "react";

export default function Footer() {
  const instaThumbs = [
    "/src/assets/insta1.jpg",
    "/src/assets/insta2.jpg",
    "/src/assets/insta3.jpg",
    "/src/assets/insta4.jpg",
    "/src/assets/insta5.jpg",
    "/src/assets/insta6.jpg",
  ];

  return (
    <footer className="w-full mt-10">
      {/* ===== SUBSCRIBE STRIP (SMALLER) ===== */}
      <div className="bg-amber-400">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-900">
              <span className="kaushan">Subscribe</span> Now!
            </h2>
            <p className="text-sm text-emerald-900/80">
              Get weekly travel updates & offers.
            </p>
          </div>

          <form
            className="flex items-center bg-white rounded-full px-3 py-1 w-full md:w-[380px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Email address..."
              className="flex-1 px-4 py-2 rounded-full focus:outline-none text-sm"
              type="email"
            />
            <button className="ml-2 w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center">
              →
            </button>
          </form>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="bg-emerald-900 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* BRAND */}
            <div className="md:col-span-2">
              <img
                src="/src/assets/logo-white.png"
                alt="Travlla"
                className="w-24"
              />
              <p className="mt-3 text-sm text-emerald-100/80 max-w-sm">
                Travlla is a multi-award-winning travel marketing agency.
              </p>

              <div className="flex gap-3 mt-3">
                {["X", "F", "I", "P"].map((s, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-amber-400/70 flex items-center justify-center text-xs"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="md:col-span-2 grid grid-cols-3 gap-6 text-sm">
              <FooterCol
                title="Explore"
                items={["About", "FAQ", "Services", "Team", "News"]}
              />
              <FooterCol
                title="Destinations"
                items={["Tokyo", "France", "Dubai", "Kenya", "Vietnam"]}
              />
              <FooterCol
                title="Legal"
                items={["Terms", "Privacy", "Contact", "Careers", "Help"]}
              />
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Get in Touch</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-amber-300 font-medium">123 654 0214</li>
                <li>travllainfo@gmail.com</li>
                <li>55/11 Ronin Tower, New York</li>
              </ul>
            </div>
          </div>

          {/* INSTAGRAM (COMPACT) */}
          <div className="mt-6">
            <h5 className="text-xs uppercase tracking-wide mb-2">
              Follow Instagram
            </h5>
            <div className="grid grid-cols-6 gap-3 max-w-sm">
              {instaThumbs.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="insta"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ))}
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-6 pt-4 border-t border-emerald-800 text-center text-xs text-emerald-100/70">
            © 2025 <span className="text-amber-300 font-semibold">TRAVLLA</span>{" "}
            — All Rights Reserved
          </div>
        </div>
      </div>

      {/* FONT */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
        .kaushan {
          font-family: "Kaushan Script", cursive;
        }
      `}</style>
    </footer>
  );
}

/* ===== HELPER COMPONENT ===== */
function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-emerald-100/80">
        {items.map((i) => (
          <li key={i} className="hover:text-amber-300 cursor-pointer">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
