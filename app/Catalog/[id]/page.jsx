import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

export default async function CatalogDetailsPage({ params }) {
  const { id } = await params

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Product Details</h1>
          <p className="text-lg text-gray-600 mb-8">
            Product ID: <span className="font-semibold text-gray-900">{id}</span>
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <p className="text-gray-600 mb-4">
              Detailed information for this product will be displayed here.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">• Product specifications</p>
              <p className="text-sm text-gray-500">• Price and availability</p>
              <p className="text-sm text-gray-500">• Customer reviews</p>
              <p className="text-sm text-gray-500">• Related products</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}