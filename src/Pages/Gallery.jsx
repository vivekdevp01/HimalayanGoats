import BlogGridSection from "../components/BlogGridSection";
import ExploreMapSection from "../components/ExploreMapSection";
import RecommendSection from "../components/RecommendSection";
import PopularDestinations from "../components/PopularDestinations";

import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactMapCard from "../components/ContactMapCard";
import GallerySection2 from "../components/GallerySection2";
import GalleryScroller from "../components/GalleryScroller";
import GalleryHero from "../components/GalleryHero";
import GalleryCTA from "../components/GalleryCTA";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../components/Packages/EnquiryModal";

import { useState } from "react";
import ContactMappCard from "../components/ContactMappCard";

export default function Gallery() {
  const navigate = useNavigate();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <div className="space-y-10">
      <GalleryHero />
      <GallerySection2 />
      {/* <GalleryCTA
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => setIsEnquiryOpen(true)}
      /> */}
      <TestimonialSection />
      <ContactMappCard onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageId={null}
      />
      {/* <GalleryScroller /> */}
    </div>
  );
}
