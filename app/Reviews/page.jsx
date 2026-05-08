import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RecentReviews from '@/components/Reviews/RecentReviews'
import ReviewsSlider from '@/components/Reviews/Reviewsslider'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <RecentReviews />
        <ReviewsSlider />
        <Footer />
    </div>
  )
}
