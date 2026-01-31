import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { HiOutlineVideoCamera, HiOutlineShieldCheck, HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineHeight } from "react-icons/md";

// Components
import Header from "./Header";
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

export default function Tour2() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
const isRafting = pathname.includes("rafting");
  // STATIC DATA - Replacing Supabase Logic
  // Determine amenities based on activity type


  const BUNGY_DATA = {
    "splash-bungy": {
      id: 1,
      name: "Splash Bungy Jumping",
      location: "Shivpuri, Rishikesh",
      height: "109 Metres",
      jumpType: "Water Touch",
      price: "3,999",
      oldPrice: "4,999",
      tagline: "India's highest water-touch bungy jump experience.",
      media: [
        { media_url: "/src/assets/18.jpg", media_role: "hero_banner" },
        { media_url: "/src/assets/19.jpg", media_role: "gallery" },
        { media_url: "/src/assets/20.jpg", media_role: "gallery" },
      ],
      inclusions: ["Safety Gear", "DSLR Video", "Jump Certificate", "Professional Briefing"],
      exclusions: ["Personal Expenses", "Transport to Site", "Insurance"],
      faqs: [
        { q: "Is it safe?", a: "We use international standard equipment and certified jump masters." },
        { q: "What is the weight limit?", a: "Minimum 35kg and Maximum 120kg." }
      ],
      policies: [
        { id: 1, title: "Cancellation Policy", points: ["Non-refundable within 24 hours.", "100% credit note for weather cancellations."] }
      ]
    }
  };

  const RAFTING_DATA = {
  "brahmpuri-rafting": {
    id: 101,
    name: "Brahmpuri Club Rafting",
    location: "Brahmpuri to Rishikesh",
    distance: "9 Kilometres",
    grade: "Grade I & II",
    price: "600",
    oldPrice: "1,000",
    tagline: "The perfect introduction to white water rafting for families.",
    media: [
      { media_url: "/src/assets/21.jpg", media_role: "hero_banner" },
      { media_url: "/src/assets/22.jpg", media_role: "gallery" },
    ],
    inclusions: ["Life Jackets", "Helmets", "Paddle", "Expert Guide"],
    exclusions: ["Video/Photos", "Pick-up/Drop", "Insurance"],
    faqs: [{ q: "Do I need to know swimming?", a: "No, life jackets are mandatory and keep you afloat." }],
    policies: [{ id: 1, title: "Weather Policy", points: ["Full refund if river levels are unsafe."] }]
  },
  // Add other rafting slugs here...
};

  const dataSource = isRafting ? RAFTING_DATA : BUNGY_DATA;

  const pkg = dataSource[slug] || (isRafting ? RAFTING_DATA["brahmpuri-rafting"] : BUNGY_DATA["splash-bungy"]); // Fallback for dev
const dynamicAmenities = isRafting 
  ? [
      { icon: <MdOutlineHeight className="rotate-90" />, label: pkg.distance }, // Rotated height icon for distance
      { icon: <HiOutlineShieldCheck />, label: pkg.grade },
      { icon: <HiOutlineVideoCamera />, label: "GoPro Available" },
      { icon: <HiOutlinePhotograph />, label: "Action Photos" },
    ]
  : [
      { icon: <MdOutlineHeight />, label: pkg.height },
      { icon: <HiOutlineVideoCamera />, label: "Free DSLR Video" },
      { icon: <HiOutlineShieldCheck />, label: "International Safety" },
      { icon: <HiOutlinePhotograph />, label: "Photos Included" },
    ];
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 800); // Simulate light loading
  }, [slug]);

  if (loading) return <div className="h-screen flex items-center justify-center text-emerald-600 font-bold">Loading Adrenaline...</div>;

  return (
    <main className="bg-[#FAFAFA]">
      {/* 1. HEADER - Bungy Style */}
      <Header
        variant="tour"
        title={pkg.name}
        subtitle={`📍 ${pkg.location}`}
        badges={[
    pkg.height || pkg.distance, // Works for both!
    pkg.jumpType || pkg.grade,  // Works for both!
    "Certified Safety",
  ]}
        bgImage={pkg.media[0].media_url}
      />

      {/* 2. MEDIA GALLERY */}
      <ExplorationGrid media={pkg.media} />

      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-14">
            <TourDetails
              title={pkg.name}
              highlight={pkg.tagline}
              summary={[pkg.height, pkg.jumpType, "Age: 12-60"]}
              amenities={dynamicAmenities}
              // Passing simplified pricing for static view
              durations={[{
                id: pkg.id,
                title: "Standard Jump Slot",
                final_price: pkg.price,
                image: pkg.media[1].media_url
              }]}
            />

            {/* ITINERARY (Adjusted for "Jump Process") */}
            <section id="itinerary-end" className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Your Jump Experience</h3>
              <TripItinerary days={isRafting ? [
  { day: 1, title: "Preparation", description: "Gear fitting and safety drill at the starting point." },
  { day: 2, title: "The River", description: "Navigate the rapids with your professional guide." },
  { day: 3, title: "Finish", description: "Changing clothes and departure from the ending point." }
] : [
  { day: 1, title: "Briefing", description: "Safety instructions and gear check." },
  { day: 2, title: "The Leap", description: "Take the leap of faith from 109m." },
  { day: 3, title: "Recovery", description: "Lowering to drop zone and certificate collection." }
]} />
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="h-full flex flex-col">
              <div className="space-y-8 mb-8">
                <PriceCard pricing={{ final_price: pkg.price, discount_price: pkg.oldPrice }} />
                <GotAQuestionCard />
                <GroupOfferCard />
                <WhyChooseUs />
              </div>
              <div className="sticky top-24 self-start w-full">
                <EnquiryCard />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. FOOTER SECTIONS */}
      <section className="mt-14">
        <section className="bg-[#FFF7ED] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PackageSummary inclusions={pkg.inclusions} exclusions={pkg.exclusions} />
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PolicyAccordion policies={pkg.policies} />
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FAQs title={pkg.name} type="Bungy" faqs={pkg.faqs} />
          </div>
        </section>
      </section>

      <StickyWhatsApp />
    </main>
  );
}