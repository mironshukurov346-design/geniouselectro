import Katalogvse from '@/components/Catalog/Katalogvse'
import NewArrivals from '@/components/Catalog/NewArrivals'
import CatalogePhone from '@/components/Catalog/CatalogePhone'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import CatalogPage from '@/components/Catalog/CatalogPage'

export default function page() {
  return (
    <div>
        <Navbar />
        <Katalogvse />
        <NewArrivals />
        <CatalogePhone />
        <CatalogPage />
        <Footer />
    </div>
  )
}
