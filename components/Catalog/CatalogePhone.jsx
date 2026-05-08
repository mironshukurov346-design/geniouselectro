'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ConsultationModal from '@/components/pop-up-modal'

export default function CatalogePhone() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">

        {/* Mobile: rasm ustida */}
        <div className="block md:hidden relative w-full h-52">
          <Image
            src="/cantactimg.png"
            alt="Кабельные барабаны на складе"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(360deg, rgba(39, 39, 39, 0.6) 7.24%, rgba(39, 39, 39, 0.18) 100%)",
            }}
          />
        </div>

        {/* Inner: flex row on desktop, column on mobile */}
        <div className="flex flex-col md:flex-row items-center gap-8 px-5 md:px-[50px] pt-6 pb-8 md:py-10">

          {/* Left: text + button */}
          <div className="flex-1 min-w-0 w-full">
            <h2 className="font-normal text-[24px] md:text-[32px] leading-[100%] tracking-[-0.04em] text-[#272727]">
              Есть вопросы?
              <br />
              Напишите нам!
            </h2>
            <p className="font-normal max-w-[380px] mb-5 text-[14px] md:text-[18px] leading-[130%] tracking-[-0.04em] mt-[14px] md:mt-[18px] text-[#27272799]">
              Узнайте актуальную цену, условия покупки и доставки
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background:
                  "linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
              }}
              className="
                inline-flex items-center justify-center
                active:scale-[0.98]
                transition-all duration-200
                text-gray-800 text-sm font-medium
                px-6 py-3.5 rounded-xl
                shadow-sm w-full md:w-auto
              "
            >
              Оставить заявку на консультацию
            </button>
          </div>

          {/* Right: image — desktop only */}
          <div className="hidden md:block relative flex-shrink-0 w-full md:w-[55%] rounded-4xl overflow-hidden">
            <Image
              src="/cantactimg.png"
              alt="Кабельные барабаны на складе"
              width={720}
              height={360}
              className="w-full h-64 object-cover rounded-4xl"
              priority
            />
            <div
              className="absolute inset-0 rounded-4xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(360deg, rgba(39, 39, 39, 0.6) 7.24%, rgba(39, 39, 39, 0.18) 100%)",
              }}
            />
          </div>

        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>  )
}
