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
import { Helmet } from 'react-helmet-async';
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
<>
    <Helmet>
        <title>Tripshalla | Best Rishikesh Camping , Himalayan Treks and Adventure Sports</title>
        <meta name="description" content="Explore the best of Rishikesh with Tripshalla. Book riverside camping, Himalayan trekking,Adventure sports like bungy jumping and reliable scooty rentals for your next adventure." />
        <meta name="keywords" content="Rishikesh camping, trekking in Uttarakhand, scooty rental Rishikesh, Tripshalla adventure,Bungy Jumping" />
        
        {/* Open Graph (For when you share on WhatsApp/Facebook) */}
        <meta property="og:title" content="Tripshalla - Adventure Beyond Ordinary" />
        <meta property="og:description" content="Handcrafted treks and camping experiences in the heart of the Himalayas." />
        <meta property="og:image" content="https://www.tripshalla.com/assets/og-preview.jpg" />
        <meta property="og:url" content="https://www.tripshalla.in" />
      </Helmet>

    <div className="space-y-10">
      <HeroSection />
       <ExploreUttarakhand />
      <HowItWorksMini />
      <FeaturedExperiences />
      <ExploreActivities />
      <LocalAdvantageSection />
      {/* <ActivityCategories /> */}
      {/* <WhyChooseUsSection /> */}
      <StatsAndReviewsSection onOpenEnquiry={() => setShowEnquiry(true)} />
        <div className="relative -mb-px"> {/* -mb-px prevents a tiny 1px line gap */}
  <svg 
    viewBox="0 0 1440 120" 
    className="fill-[#064E3B] w-full h-auto transform rotate-180"
  >
    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
  </svg>
</div>
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
    </>
  );
}
