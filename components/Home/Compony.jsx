import Link from 'next/link'
import React from 'react'

export default function Compony() {
  return (
    <div className='max-w-[1340px] mx-auto mt-[120px] max-md:mt-[80px] max-sm:mt-[48px] px-4 sm:px-6 lg:px-10 flex justify-between max-sm:flex-col'>
      <Link href='/about'>
        <h1 className='text-[#27272799] font-normal text-[18px] leading-[100%] tracking-[-0.04em] max-sm:text-[16px] max-md:mb-6'>О компании</h1>
      </Link>
      <div className='w-[664px] max-sm:w-full'>
        <h2 className='font-normal mb-[16px] text-[#272727] text-[32px] max-sm:text-[24px] leading-[32px] max-md:leading-[30px] tracking-[-0.04em] max-md:mb-4'>
          Genius Electro - ваш надёжный партнёр в сфере кабельной продукции
        </h2>
        <p className='text-[#27272799] font-normal text-[18px] max-sm:text-[14px] leading-[140%] max-md:leading-[130%] tracking-[-0.04em]'>
          Наша компания специализируется на производстве высококачественной кабельно-проводниковой продукции для промышленных предприятий России и стран СНГ. Мы предлагаем полный цикл услуг - от проектирования до поставки готовой продукции.
        </p>
      </div>
      <div></div>
    </div>
  )
}