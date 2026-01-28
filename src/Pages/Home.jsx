import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import GallerySection from "../components/GallerySection";
import ExploreSection from "../components/ExploreSection";
import TrendingSection from "../components/TrendingSection";
import BlogGridSection from "../components/BlogGridSection";
import ExploreMapSection from "../components/ExploreMapSection";
import RecommendSection from "../components/RecommendSection";
import PopularDestinations from "../components/PopularDestinations";
import StepsSection from "../components/StepsSection";
import TopDestination from "../components/TopDestination";
import SeasonCategories from "../components/SeasonCategories";
import { UnderlineIcon } from "@heroicons/react/24/solid";
import UnderwaterStatsSection from "../components/UnderwaterStatsSection";
import HeroSection from "../components/HeroSection";
import ExploreActivities from "../components/ExploreActivities";
import FeaturedExperiences from "../components/FeaturedExperiences";
import ActivityCategories from "../components/ActivityCategories";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ExploreUttarakhand from "../components/ExploreUttarakhand";
import StatsAndReviewsSection from "../components/StatsAndReviewSection";
import ContactCTASection from "../components/ContactCtaSection";
import EnquiryModal from "../components/Packages/EnquiryModal";
import HowItWorksMini from "../components/HowItWorksMini";
import LocalAdvantageSection from "../components/LocalAdvantageSection";

export default function Home() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("enquiryShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowEnquiry(true);
        sessionStorage.setItem("enquiryShown", "true");
      }, 6000); // ⏱ 6 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div className="space-y-10">
      <HeroSection />
      <ExploreActivities />
      <HowItWorksMini />
      <FeaturedExperiences />
      <ExploreUttarakhand />
      <LocalAdvantageSection />
      {/* <ActivityCategories /> */}
      {/* <WhyChooseUsSection /> */}
      <StatsAndReviewsSection onOpenEnquiry={() => setShowEnquiry(true)} />
      <ContactCTASection />
      {/* <StepsSection />
      <TopDestination />
      <SeasonCategories />
      {/* <TrendingSection /> */}
      {/* <UnderwaterStatsSection /> } */}
      {/* AUTO ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
      />
    </div>
  );
}
