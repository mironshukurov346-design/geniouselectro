'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Register() {
  const [tab, setTab] = useState('buyer')
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[560px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-black transition cursor-pointer">Главная</Link>
          <span>-</span>
          <span className="text-[#272727]">Регистрация</span>
        </div>

        {/* Title + Tabs */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[28px] font-semibold text-[#272727]">Регистрация</h1>
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setTab('buyer')}
              className={`transition cursor-pointer ${tab === 'buyer' ? 'text-[#272727] font-medium' : 'text-gray-400 hover:text-black'}`}
            >
              Покупатель
            </button>
            <button
              onClick={() => setTab('partner')}
              className={`transition cursor-pointer ${tab === 'partner' ? 'text-[#272727] font-medium' : 'text-gray-400 hover:text-black'}`}
            >
              Партнер (Юр.лицо)
            </button>
          </div>
        </div>

        {/* Row 1: Имя + Фамилия */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="h-[60px] px-5 text-sm text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
          <input
            type="text"
            placeholder="Ваша фамилия"
            className="h-[60px] px-5 text-sm text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
        </div>

        {/* Row 2: Телефон + Email */}
        <div className="grid grid-cols-2 gap-4 mb-1">
          <input
            type="tel"
            placeholder="Номер телефона"
            className="h-[60px] px-5 text-sm text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="h-[60px] px-5 text-sm text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
        </div>
        <p className="text-xs text-gray-400 text-right mb-4">На почту придет код для подтверждения</p>

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Введите пароль"
            className="w-full h-[60px] px-5 pr-14 text-sm text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
          <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-5">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Повторите пароль"
            className="w-full h-[60px] px-5 pr-14 text-sm text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
          <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        {/* Checkbox */}
        <label className="flex items-start gap-3 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[#C3974C] cursor-pointer shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            Входя в аккаунт или создавая новый, вы соглашаетесь с нашими{' '}
            <Link href="/terms" className="text-[#C3974C] hover:opacity-70 transition">Правилами и условиями</Link>
            {' '}и{' '}
            <Link href="/privacy" className="text-[#C3974C] hover:opacity-70 transition">Положением о конфиденциальности</Link>
          </span>
        </label>

        {/* Submit */}
        <button className="w-full h-[60px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] text-[#272727] text-base font-normal hover:opacity-90 transition cursor-pointer">
          Зарегистрироваться
        </button>

      </div>
    </div>
  )
}