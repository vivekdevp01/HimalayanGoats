import React, { useState } from "react";
import IndiaPackagesDescription from "./IndiaPackagesDescription";
import TourSlider from "./TourSlider";
import GroupOfferBanner from "./GroupOfferBanner";
import EnquiryModal from "./Packages/EnquiryModal";
import WhyChooseHimalayan from "./WhyChooseHimalayan";
import PopularActivitiesCardGrid from "./PopularActivitiesCardGrid";

export default function Packages() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="w-full">
      {/* INTRO SECTION */}
      <section className="pt-16">
        <IndiaPackagesDescription />
      </section>
      {/* PACKAGES SLIDER */}
      <section className="pb-2">
        <TourSlider />
      </section>
      {/* SOFT DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      {/* GROUP CTA BANNER */}
      <GroupOfferBanner onClick={() => setIsEnquiryOpen(true)} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    <PopularActivitiesCardGrid/>
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      <WhyChooseHimalayan />
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      {/* MODAL */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageId={null}
      />
    </div>
  );
}
