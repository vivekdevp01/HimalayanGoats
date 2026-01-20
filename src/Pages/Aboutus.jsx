import React from 'react'
import HeroSlider from '../components/HeroSlider'
import GallerySection from '../components/GallerySection'
import ExploreSection from '../components/ExploreSection'
import TrendingSection from '../components/TrendingSection'
import BlogGridSection from '../components/BlogGridSection'
import ExploreMapSection from '../components/ExploreMapSection'
import RecommendSection from '../components/RecommendSection'
import PopularDestinations from '../components/PopularDestinations'
import ServiceCard from '../components/ServiceCard'
import ServicesSection from '../components/ServicesSection'
import TestimonialSection from '../components/TestimonialSection'

export default function Aboutus() {
  return (
    <div className="space-y-10">
      {/* <HeroSlider /> */}
      <RecommendSection/>
      {/* <GallerySection /> */}
      <PopularDestinations/>
      <ServicesSection/>
      <TestimonialSection/>
 {/* <ExploreMapSection/> */}
      {/* <BlogGridSection /> */}
    </div>
  )
}
