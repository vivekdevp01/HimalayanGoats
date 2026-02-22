import React from "react";
import HeroSlider from "../components/HeroSlider";
import GallerySection from "../components/GallerySection";
import ExploreSection from "../components/ExploreSection";
import TrendingSection from "../components/TrendingSection";
import BlogGridSection from "../components/BlogGridSection";
import ExploreMapSection from "../components/ExploreMapSection";
import RecommendSection from "../components/RecommendSection";
import PopularDestinations from "../components/PopularDestinations";
import ServiceCard from "../components/ServiceCard";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import ValuesSection from "../components/ValueSection";
import HowWeWork from "../components/HowWeWork";
import { Helmet } from 'react-helmet-async';
export default function Aboutus() {
  return (
    <>
    <Helmet>
  <title>About Tripshalla | Our Story & Rishikesh Mission</title>
  <meta name="description" content="Learn about Tripshalla, your local adventure experts in Rishikesh. We're dedicated to provide best rafting activities,camping packages and Bungy sports and authentic Himalayan experiences." />
  <meta name="keywords" content="about Tripshalla, travel startup Rishikesh, adventure guides Uttarakhand" />
</Helmet>
    <div className="space-y-10">
      <AboutHero />
      <WhoWeAre />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <HowWeWork />
      {/* <HeroSlider /> */}
      {/* <RecommendSection /> */}
      {/* <GallerySection /> */}
      {/* <PopularDestinations /> */}
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <ExploreMapSection/> */}
      {/* <BlogGridSection /> */}
    </div>
    </>
  );
}
