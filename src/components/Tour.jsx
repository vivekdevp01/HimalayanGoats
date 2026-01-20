import ExplorationGrid from "./ExplorationGrid";
import TourDetails from "./TourDetails";
import TripItinerary from "./TripItinerary";
import PackageSummary from "./PackageSummary";
import PolicyAccordion from "./PolicyAccordion";

import EnquiryCard from "./Packages/EnquiryCard";
import WhyChooseUs from "./Packages/WhyChooseUs";
import GotAQuestionCard from "./Packages/GotQuestionCard";
import GroupOfferCard from "./Packages/GroupOfferCard";
import FAQs from "./Packages/Faqs";
import StickyWhatsApp from "./Packages/StickyWhatsappButton";
import PriceCard from "./Packages/PriceCard";
// import Header from "./Header";

export default function Tour() {
  return (
    <main className="bg-[#FAFAFA]">
      {/* <Header
        variant="tour"
        title="Kedarkantha Trek"
        subtitle="Snow Trek • Beginner Friendly • Uttarakhand"
        badges={["5 Days", "12,500 ft", "Easy–Moderate"]}
        bgImage="/src/assets/1.jpg"
      /> */}
      <ExplorationGrid />

      {/* ================= MAIN CONTENT + STICKY ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-14">
            <TourDetails />

            {/* 🔴 STICKY MUST STOP HERE */}
            <section
              id="itinerary-end"
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm"
            >
              <TripItinerary />
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            {/* 🔑 MUST stretch full height */}
            <div className="h-full flex flex-col">
              {/* Normal cards */}
              <div className="space-y-8 mb-8">
                <PriceCard />
                <GotAQuestionCard />
                <GroupOfferCard />
                <WhyChooseUs />
              </div>

              {/* ✅ ONLY THIS IS STICKY */}
              <div className="sticky top-24 self-start w-full">
                <EnquiryCard />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= BELOW CONTENT ================= */}
      <section className="mt-14">
        <section className="bg-[#FFF7ED] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PackageSummary />
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PolicyAccordion />
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FAQs />
          </div>
        </section>
      </section>

      <StickyWhatsApp />
    </main>
  );
}
