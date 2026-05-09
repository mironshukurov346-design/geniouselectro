import Image from 'next/image'
import React from 'react'

export default function Compony2() {
  return (
    <div className='max-w-[1340px] mx-auto mt-[120px] max-md:mt-[80px] max-sm:mt-[48px] px-4 sm:px-6 lg:px-10'>
      <div className="relative bg-[url('/sec10.png')] bg-cover bg-center h-[500px] max-md:h-[360px] rounded-[32px] max-sm:rounded-[24px] overflow-hidden">
        <Image
          src="/sec3.png"
          alt="overlay"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className='absolute bottom-[48px] max-md:bottom-6 md:right-[48px] flex max-sm:flex-col gap-[24px] max-md:gap-4 max-md:px-6 max-sm:text-center'>
          <p className='font-normal w-[393px] max-sm:w-full text-[18px] max-sm:text-[14px] leading-[135%] max-md:leading-[130%] max-md:text-justify tracking-[-0.04em] text-white'></p>
          <p className='font-normal w-[393px] max-sm:w-full text-[18px] max-sm:text-[14px] leading-[135%] max-md:leading-[130%] max-md:text-justify tracking-[-0.04em] text-white'>
            Мы работаем с ведущими промышленными предприятиями, энергетическими компаниями и строительными организациями, обеспечивая стабильные поставки и профессиональную техническую поддержку.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:flex sm:justify-center sm:gap-[100px] gap-[13px] mt-[32px] sm:mt-[64px]'>
        <div>
          <h2 className="font-inter font-normal text-[40px] sm:text-[82px] md:leading-[82px] tracking-[0] text-[#27272799]">2015</h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-none tracking-[-0.04em] text-[#27272799] mt-[6px] sm:mt-[24px]">Год создания <br className='md:hidden' /> компании</p>
        </div>
        <div>
          <h2 className="font-inter font-normal text-[40px] sm:text-[82px] md:leading-[82px] tracking-[0] text-[#27272799]">14 600+</h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-none tracking-[-0.04em] text-[#27272799] mt-[6px] sm:mt-[24px]">Километров кабеля <br className='md:hidden' /> создано</p>
        </div>
        <div>
          <h2 className="font-inter font-normal text-[40px] sm:text-[82px] md:leading-[82px] tracking-[0] text-[#27272799]">500+</h2>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-none tracking-[-0.04em] text-[#27272799] mt-[6px] sm:mt-[24px]">Клиенты</p>
        </div>
      </div>
    </div>
  )
}