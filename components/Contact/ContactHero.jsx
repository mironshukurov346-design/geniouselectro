import Link from 'next/link'
import React from 'react'

export default function ContactHero() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className='h-[293px] md:mt-[44px] max-md:h-[212px] max-md:px-4'
        style={{
          backgroundImage: 'linear-gradient(360deg, #272727 0%, rgba(39, 39, 39, 0) 100%), url(/cable.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='pt-[128px] max-w-[1340px] m-auto max-md:pt-20'>
          <span className='font-normal flex text-[18px] leading-[120%] tracking-[-0.04em]'>
            <Link href={'/'} className='text-[#FFFFFF66]'>Главная &nbsp;-</Link>
            <p className='text-[#FFF]'>&nbsp;&nbsp;Контакты</p>
          </span>
          <h1 className='font-normal text-[64px] leading-[100%] tracking-[-0.04em] mt-[32px] text-[#FFF] max-md:text-[32px] max-md:mt-6 max-md:leading-[100%]'>
            Контакты и расположение офиса
          </h1>
        </div>
      </div>

      {/* Contact + Map Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Info */}
          <div>
            <h2 className="text-4xl font-semibold text-[#272727] mb-8">Офис</h2>

            <p className="text-sm text-gray-400 mb-2">Находится по адрес</p>
            <p className="text-base text-[#272727] mb-8">
              068013, г. ст. Нижний Новгород, ул. наб.<br />
              Иркутская, д. 127, оф. 29
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-400 mb-2">Телефон</p>
                <a href="tel:83982023464" className="text-base text-[#272727] hover:opacity-70 transition cursor-pointer">
                  8 (398) 202-34-64
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">E-mail</p>
                <a href="mailto:ljudmila43@mms.edu" className="text-base text-[#272727] hover:opacity-70 transition cursor-pointer">
                  ljudmila43@mms.edu
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 items-end">
              <div>
                <p className="text-sm text-gray-400 mb-2">Режим работы</p>
                <p className="text-base text-[#272727]">Пн - Пт: 9.00 - 18.00</p>
                <p className="text-base text-[#272727]">Сб - Вс: выходные</p>
              </div>
              <div>
                <button className="w-full h-[52px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] text-[#272727] font-normal text-[15px] hover:opacity-90 transition cursor-pointer">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="w-full h-[420px] rounded-[20px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11985.522124157878!2d69.2400732!3d41.2994958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </>
  )
}