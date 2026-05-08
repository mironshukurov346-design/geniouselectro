'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[560px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-black transition cursor-pointer">Главная</Link>
          <span>-</span>
          <span className="text-[#272727]">Вход</span>
        </div>

        <h1 className="text-[32px] font-semibold text-[#272727] mb-8">Вход</h1>

        {/* Email */}
        <input
          type="text"
          placeholder="Email или телефон"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[64px] px-5 mb-4 text-base text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[64px] px-5 pr-14 text-base text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            {showPassword ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Забыли пароль?</span>
          <Link href="/forgot-password" className="text-sm text-[#C3974C] hover:opacity-70 transition cursor-pointer">
            Восстановить
          </Link>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm text-gray-500">У вас еще нет аккаунта?</span>
          <Link href="/register" className="text-sm text-[#C3974C] hover:opacity-70 transition cursor-pointer">
            Зарегистрироваться
          </Link>
        </div>

        {/* Submit */}
        <button
          className="w-full h-[64px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] text-[#272727] text-base font-normal hover:opacity-90 transition cursor-pointer"
        >
          Войти
        </button>

      </div>
    </div>
  )
}