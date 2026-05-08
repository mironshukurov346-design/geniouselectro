'use client'
import React from 'react'

const products = [
  { sku: "123", name: "asds dasdasd", price: "34,00", image: "/prod1.jpg" },
  { sku: "123123", name: "as dassd asda sdasd", price: "123,00", image: "/prod2.jpg" },
  { sku: "SKU-1472-RRZH", name: "Художественный оборот посвятить. Сходить зима о...", price: "132,86", image: "/prod3.jpg" },
  { sku: "SKU-0006-XDOH", name: "Пол ботинок господь ручей чувство человечек. Заплакать...", price: "68,12", image: "/prod4.jpg" },
]

function QuantityControl() {
  const [qty, setQty] = React.useState(1)
  return (
    <div className='flex items-center gap-2 h-[44px] px-3 rounded-[12px] border border-gray-200'>
      <button onClick={() => setQty(q => Math.max(1, q - 1))} className='text-gray-400 hover:text-black transition cursor-pointer text-lg leading-none'>−</button>
      <span className='w-5 text-center text-sm text-[#272727]'>{qty}</span>
      <button onClick={() => setQty(q => q + 1)} className='text-gray-400 hover:text-black transition cursor-pointer text-lg leading-none'>+</button>
    </div>
  )
}

export default function NewArrivals() {
  return (
    <section className='max-w-[1340px] mx-auto px-6 py-16'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-2xl font-semibold text-[#272727]'>Новые поступления</h2>
        <button className='flex items-center gap-2 px-5 py-2.5 rounded-[12px] border border-gray-200 text-sm text-[#272727] hover:bg-gray-50 transition cursor-pointer whitespace-nowrap'>
          Посмотреть все ↗
        </button>
      </div>

      <div className='flex flex-wrap gap-4'>
        {products.map((p) => (
          <div
            key={p.sku}
            className='bg-white rounded-[16px] overflow-hidden flex flex-col transition'
            style={{ boxShadow: '0px 0px 4px 0px #76767626', width: '371px', height: '481px' }}
          >
            {/* Image */}
            <div className='relative w-full h-[240px] bg-gray-100 shrink-0'>
              <img src={p.image} alt={p.name} className='w-full h-full object-cover' />
              <span className='absolute top-3 left-3 px-3 py-1 rounded-[8px] text-xs text-[#272727] bg-gradient-to-br from-[#D8C19A] to-[#C3974C]'>
                Новинка
              </span>
            </div>

            {/* Info */}
            <div className='px-4 pt-4 pb-2 flex-1'>
              <p className='text-xs text-gray-400 mb-1'>{p.sku}</p>
              <p className='text-sm text-[#272727] mb-3 line-clamp-2 leading-snug'>{p.name}</p>
              <p className='text-sm font-medium text-[#C3974C]'>
                {p.price} ₽ <span className='text-gray-400 font-normal'>/ м</span>
              </p>
            </div>

            {/* Controls */}
            <div className='flex items-center gap-2 px-4 pb-4 shrink-0'>
              <QuantityControl />
              <button className='flex-1 h-[44px] rounded-[12px] bg-gray-100 text-sm text-[#272727] hover:bg-gradient-to-br hover:from-[#D8C19A] hover:to-[#C3974C] transition cursor-pointer'>
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}