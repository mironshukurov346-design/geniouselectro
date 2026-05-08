'use client'

import React, { useState } from 'react'

const reviews = [
  {
    id: 1,
    image: '/frame.png',
    text1: 'Покупал кабели в магазине Genius Electro — остался полностью доволен. Качество сразу чувствуется: плотная изоляция, аккуратные разъёмы, ничего не люфтит и не выглядит «дешёво».',
    text2: 'Отдельно отмечу сборку — видно, что кабели сделаны с расчётом на долгую эксплуатацию, а не «на один раз».',
    name: 'Антон Антонов',
    role: 'CEO, XYZ Group',
    avatar: '/frame.png',
  },
  {
    id: 2,
    image: '/frame.png',
    text1: 'Заказывали партию оборудования для офиса. Все пришло вовремя и в идеальном состоянии. Сервис на высшем уровне, консультанты помогли подобрать именно то, что нужно.',
    text2: 'Рекомендую Genius Electro как надежного партнера для бизнеса. Будем заказывать еще!',
    name: 'Мария Иванова',
    role: 'Project Manager, ABC Tech',
    avatar: '/frame.png',
  },
  {
    id: 3,
    image: '/frame.png',
    text1: 'Сотрудничаем с Genius Electro уже несколько лет. Всегда стабильное качество продукции и оперативная доставка. Ни разу не подвели по срокам.',
    text2: 'Очень ценим профессиональный подход команды — всегда готовы помочь с техническими вопросами.',
    name: 'Сергей Петров',
    role: 'Технический директор, IndustryCo',
    avatar: '/frame.png',
  },
]

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  const review = reviews[current]

  return (
    <section className='max-w-[1400px] mx-auto px-6 py-12'>
      <p className='text-sm text-gray-400 mb-8'>Последние отзывы</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>

        {/* Left: Image */}
        <div className='w-full h-[480px] rounded-[20px] overflow-hidden'>
          <img
            src={review.image}
            alt='Review'
            className='w-full h-full object-cover transition-opacity duration-300'
          />
        </div>

        {/* Right: Text + Author + Nav */}
        <div className='flex flex-col justify-between h-full min-h-[480px]'>
          <div>
            <p className='text-[18px] text-[#272727] leading-relaxed mb-6'>{review.text1}</p>
            <p className='text-[18px] text-[#272727] leading-relaxed'>{review.text2}</p>
          </div>

          {/* Author + Nav */}
          <div className='flex items-center justify-between mt-10'>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full overflow-hidden bg-[#D8C19A] shrink-0'>
                <img src={review.avatar} alt={review.name} className='w-full h-full object-cover' />
              </div>
              <div>
                <p className='text-base font-semibold text-[#272727]'>{review.name}</p>
                <p className='text-sm text-gray-400'>{review.role}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className='flex items-center gap-3'>
              <button
                onClick={prev}
                className='w-[52px] h-[52px] rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 transition cursor-pointer'
              >
                ←
              </button>
              <button
                onClick={next}
                className='w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#D8C19A] to-[#C3974C] flex items-center justify-center text-white hover:opacity-90 transition cursor-pointer'
              >
                →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}