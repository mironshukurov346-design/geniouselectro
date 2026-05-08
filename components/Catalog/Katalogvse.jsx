import React from 'react'
import Link from 'next/link'

const categories = [
  { label: "Кабель и провод", href: "/catalog/kabel-i-provod", image: "/kabl.png" },
  { label: "Системы для прокладки кабеля", href: "/catalog/kabelnye-klemmy", image: "/nimadir.png" },
  { label: "Кабельные клемы, наконечники, муфты", href: "/catalog/montazhnye-korobki", image: "/nim.png" },
  { label: "Монтажные коробки", href: "/catalog/svetotekhnika-i-lampy", image: "/nim1.png" },
]

export default function Katalogvse() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className='h-[293px] mt- md:mt-[44px] max-md:h-[212px] max-md:px-4'
        style={{
          backgroundImage: 'linear-gradient(360deg, #272727 0%, rgba(39, 39, 39, 0) 100%), url(/katalog.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='pt-[128px] max-w-[1340px] m-auto max-md:pt-20 px-6'>
          <span className='font-normal flex text-[18px] leading-[120%] tracking-[-0.04em]'>
            <Link href='/' className='text-[#FFFFFF66]'>Главная &nbsp;-</Link>
            <p className='text-[#FFF] font-semibold'>&nbsp;&nbsp;Каталог</p>
          </span>
          <h1 className='font-normal text-[64px] leading-[100%] tracking-[-0.04em] mt-[32px] text-[#FFF] max-md:text-[32px] max-md:mt-6'>
            Каталог
          </h1>
        </div>
      </div>

      {/* Categories Section */}
      <div className='max-w-[1340px] mx-auto px-6 py-16'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-semibold text-[#272727]'>
            Кабельно-проводниковые изделия для любых задач
          </h2>
          <button className='flex items-center gap-2 px-5 py-2.5 rounded-[12px] border border-gray-200 text-sm text-[#272727] hover:bg-gray-50 transition cursor-pointer whitespace-nowrap'>
            Посмотреть все ↗
          </button>
        </div>

        {/* 4 Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className='group cursor-pointer'>
              <div
                className='bg-white rounded-[16px] overflow-hidden transition'
                style={{ boxShadow: '0px 0px 4px 0px #76767626' }}
              >
                {/* Image area */}
                <div className='w-full h-[200px] bg-gray-100'>
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className='w-full h-full object-cover'
                  />
                </div>
                {/* Label */}
                <div className='px-3 py-3'>
                  <p className='text-sm text-[#272727] group-hover:text-[#C3974C] transition leading-snug'>
                    {cat.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}