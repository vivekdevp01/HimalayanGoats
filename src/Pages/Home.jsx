import React from 'react'
import HeroSlider from '../components/HeroSlider'
import GallerySection from '../components/GallerySection'
import ExploreSection from '../components/ExploreSection'
import TrendingSection from '../components/TrendingSection'
import BlogGridSection from '../components/BlogGridSection'
import ExploreMapSection from '../components/ExploreMapSection'
import RecommendSection from '../components/RecommendSection'
import PopularDestinations from '../components/PopularDestinations'
import StepsSection from '../components/StepsSection'
import TopDestination from '../components/TopDestination'
import SeasonCategories from '../components/SeasonCategories'
import { UnderlineIcon } from '@heroicons/react/24/solid'
import UnderwaterStatsSection from '../components/UnderwaterStatsSection'

export default function Home() {
  return (
    <div className="space-y-10">
      <StepsSection/>
      <TopDestination/>
      <SeasonCategories/>
      {/* <TrendingSection /> */}
      <UnderwaterStatsSection/>
 
    </div>
  )
}
