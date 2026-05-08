import React from 'react'
import Link from 'next/link'

export default function Abouthero() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[320px] overflow-hidden">
        <img
          src="/bgabout.png"
          alt="Cables"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Breadcrumb + Title */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Link href="/" className="hover:text-white transition cursor-pointer">Главная</Link>
            <span>-</span>
            <span className="text-white">О нас</span>
          </div>
          <h1 className="text-white text-5xl font-semibold">О нас</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        <div>
          <p className="text-sm text-gray-400">О компании</p>
        </div>
        <div>
         <h2 className='font-normal mb-[16px] text-[#272727] w-[602px] max-sm:text-[24px] text-[32px] leading-[32px] tracking-[-0.04em] max-md:leading-[30px] max-md:mb-4'>Genius Electro - ваш надёжный партнёр
          в сфере кабельной продукции</h2>
        <p className='text-[#27272799] max-sm:text-[14px] w-[664px]  font-normal text-[18px] leading-[140%] tracking-[-0.04em] max-md:leading-[130%]'>Наша компания специализируется на производстве высококачественной кабельно-проводниковой продукции для промышленных предприятий России и стран СНГ. Мы предлагаем полный цикл услуг - от проектирования до поставки готовой продукции.</p>
        </div>
      </div>
    </div>
  )
}