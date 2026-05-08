import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Abouthero from '@/components/About/Abouthero'
import Compony from '@/components/Home/Compony'
import Compony2 from '@/components/Home/Compony2'
import React from 'react'
import AboutBanner from '@/components/About/Aboutbanner'

export default function page() {
  return (
    <div>
      <Navbar />
      <Abouthero />
      <AboutBanner />
      
      <Footer />
    </div>
  )
}
