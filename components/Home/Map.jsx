import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Map() {
  return (
    <div className='max-w-[1340px] mx-auto mt-[120px] max-md:mt-[80px] max-sm:mt-[48px] px-4 sm:px-6 lg:px-10'>
      <div className='flex max-sm:flex-col justify-between'>
        <Link href='/dastavca'>
          <h1 className='text-[#27272799] font-normal text-[18px] leading-[100%] tracking-[-0.04em] max-sm:text-[16px]'>
            Доставляем
          </h1>
        </Link>
        <div className='w-[470px] max-md:w-full'>
          <h2 className='font-normal mb-[16px] max-md:mb-4 text-[#272727] text-[32px] max-sm:text-[24px] leading-[32px] max-md:leading-[30px] tracking-[-0.04em] max-sm:mt-6'>
            Поставки кабельной продукции по всей России
          </h2>
          <p className='text-[#27272799] font-normal text-[18px] max-sm:text-[14px] leading-[140%] tracking-[-0.04em] max-md:text-justify'>
            Благодаря многолетнему опыту и развитой транспортной логистике ваш товар будет доставлен в оптимальный срок и с наименьшими затратами.
          </p>
        </div>
        <div></div>
      </div>

      <div>
        <Image
          src="/mainmap.svg"
          width={2400}
          height={1200}
          alt="Map Image"
          className="w-full h-[560px] max-md:h-auto mt-[-30px] max-md:mt-0"
        />
      </div>
    </div>
  )
}