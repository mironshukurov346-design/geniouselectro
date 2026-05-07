import Footer from '@/components/Footer'
import Map from '@/components/Home/Map'
import Carousel from '@/components/Home/Carousel'
import Compony from '@/components/Home/Compony'
import Compony2 from '@/components/Home/Compony2'
import Entrance from '@/components/Home/Entrance'
import Hero from '@/components/Home/Hero'
import Products from '@/components/Home/Products'
import Navbar from '@/components/Navbar'
import React from 'react'
import ContactConsultation from '@/components/Home/ContactConsultation'
import ConsultationModal from '@/components/Home/ConsultationModal'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Entrance />
      <Compony />
      <Compony2 />
      <Carousel />
      <Map />
      <ContactConsultation />
      <ConsultationModal />
      <Footer />
    </div>
  )
}
