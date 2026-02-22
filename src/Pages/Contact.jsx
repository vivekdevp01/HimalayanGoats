
import BlogGridSection from '../components/BlogGridSection'
import ExploreMapSection from '../components/ExploreMapSection'
import RecommendSection from '../components/RecommendSection'
import PopularDestinations from '../components/PopularDestinations'

import ServicesSection from '../components/ServicesSection'
import TestimonialSection from '../components/TestimonialSection'
import ContactMapCard from '../components/ContactMapCard'
import { Helmet } from 'react-helmet-async';
export default function Contact() {
  return (
    <>
    <Helmet>
  <title>Contact Tripshalla | Plan Your Rishikesh Adventure</title>
  <meta name="description" content="Ready for the mountains? Contact Tripshalla for customized Adventure Sport packages, camping bookings, travel advice for Rishikesh and Uttarakhand." />
  <meta name="keywords" content="contact travel agency Rishikesh, book trekking India, Tripshalla phone number" />
</Helmet>
    <div className="space-y-10">
    
      <ContactMapCard/>
    <TestimonialSection/>
    </div>
    </>
  )
}
