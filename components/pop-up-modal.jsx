'use client'

import React from 'react'

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[16px] p-8 max-w-[500px] w-full mx-4 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-semibold text-[#272727]">Оставить заявку</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-2xl leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full h-[48px] px-4 text-base text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-[48px] px-4 text-base text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />

          <input
            type="tel"
            placeholder="Телефон"
            className="w-full h-[48px] px-4 text-base text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition"
          />

          <textarea
            placeholder="Ваше сообщение"
            rows="4"
            className="w-full px-4 py-3 text-base text-[#272727] placeholder:text-gray-400 border border-gray-300 rounded-[12px] focus:outline-none focus:border-[#C3974C] transition resize-none"
          />

          <button
            type="submit"
            className="w-full h-[48px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] text-[#272727] font-medium hover:opacity-90 transition cursor-pointer"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}
