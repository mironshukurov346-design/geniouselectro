import DeliveryPage from '@/components/Dostavka/DeliveryPage'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <DeliveryPage />
        <Footer />
    </div>
  )
}
