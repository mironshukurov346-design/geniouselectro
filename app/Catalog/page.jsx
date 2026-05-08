import Katalogvse from '@/components/Catalog/Katalogvse'
import NewArrivals from '@/components/Catalog/NewArrivals'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <Katalogvse />
        <NewArrivals />
        <Footer />
    </div>
  )
}
