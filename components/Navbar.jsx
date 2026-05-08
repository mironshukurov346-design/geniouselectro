"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white cursor-pointer border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 h-[107px] flex items-center justify-between gap-8">
          
          <Link href="/" className="shrink-0">
            <Image src="/logoblack.svg" width={120} height={50} alt="Genius Electro" priority />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/" ? "text-black" : "text-gray-500 hover:text-black"}`}>
              Главная
            </Link>
            <Link href="/About" className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/About" ? "text-black" : "text-gray-500 hover:text-black"}`}>
              О нас
            </Link>
            <div className="relative group">
              <button className={`font-medium text-sm flex items-center gap-1 whitespace-nowrap transition-colors ${pathname.startsWith("/catalog") ? "text-black" : "text-gray-500 group-hover:text-black"}`}>
                Каталог
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
            <Link href="/Reviews" className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/Reviews" ? "text-black" : "text-gray-500 hover:text-black"}`}>
              Отзывы
            </Link>
            <Link href="/delivery" className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/delivery" ? "text-black" : "text-gray-500 hover:text-black"}`}>
              Доставка и оплата
            </Link>
            <Link href="/Contact" className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/Contact" ? "text-black" : "text-gray-500 hover:text-black"}`}>
              Контакты
            </Link>
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative flex items-center w-full max-w-3xl">
              <input
                type="text"
                placeholder="Найдите все, что вам нужно"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[328px] h-[47px] pl-[18px] pr-12 text-base placeholder:text-[#B89B72] bg-gradient-to-br from-[#FDF9F2] to-[#F5EDE2] rounded-[12px] focus:outline-none"
                style={{
                  border: "1px solid transparent",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  backgroundImage: "linear-gradient(#FDF9F2, #F5EDE2), linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
                }}
              />
              <button className="absolute right-1 p-2 rounded-xl transition-transform active:scale-95 bg-gradient-to-b from-[#E2C299] to-[#C1925B] shadow-sm hover:opacity-90">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <img src="/heart.png" alt="" className="cursor-pointer hover:opacity-80 transition" />
            <img src="/heart2.png" alt="" className="cursor-pointer hover:opacity-80 transition" />
            <Link href="/login">
              <button className="w-[129px] text-[#272727] h-[47px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] font-normal text-[14px] hover:opacity-90 transition cursor-pointer">
                Вход
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(true)} className="flex md:hidden flex-col gap-[5px] p-2 cursor-pointer" aria-label="Open menu">
            <span className="block w-6 h-[2px] bg-gray-700 rounded" />
            <span className="block w-6 h-[2px] bg-gray-700 rounded" />
            <span className="block w-6 h-[2px] bg-gray-700 rounded" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[360px] bg-white z-50 flex flex-col transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/logoblack.svg" width={80} height={34} alt="Genius Electro" priority />
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black text-2xl leading-none cursor-pointer">✕</button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 px-5 pb-4">
          <button className="w-[47px] h-[47px] flex items-center justify-center rounded-[12px] border border-gray-200 cursor-pointer hover:opacity-80 transition">
            <img src="/heart.png" alt="" className="w-5 h-5" />
          </button>
          <button className="w-[47px] h-[47px] flex items-center justify-center rounded-[12px] border border-gray-200 cursor-pointer hover:opacity-80 transition">
            <img src="/heart2.png" alt="" className="w-5 h-5" />
          </button>
          <Link href="/login" className="flex-1" onClick={() => setIsOpen(false)}>
            <button className="w-full h-[47px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] font-normal text-[14px] text-[#272727] hover:opacity-90 transition cursor-pointer">
              Вход
            </button>
          </Link>
        </div>

        {/* Search */}
        <div className="px-5 pb-5">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Найдите все, что вам нужно"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-[47px] pl-[18px] pr-12 text-sm placeholder:text-[#B89B72] rounded-[12px] focus:outline-none"
              style={{
                border: "1px solid transparent",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                backgroundImage: "linear-gradient(#FDF9F2, #F5EDE2), linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
              }}
            />
            <button className="absolute right-1 p-2 rounded-xl transition-transform active:scale-95 bg-gradient-to-b from-[#E2C299] to-[#C1925B] shadow-sm hover:opacity-90 cursor-pointer">
              <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5">

          {/* Продукция */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#272727] mb-3">Продукция</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {["Силовые кабели", "Кабели для энергетики", "Контрольные кабели", "Транспортные кабели", "Специализированные кабели", "Строительные кабели"].map((item) => (
                <Link key={item} href={`/catalog/${item.toLowerCase().replace(/ /g, "-")}`} onClick={() => setIsOpen(false)} className="text-sm text-gray-500 hover:text-black transition-colors leading-snug">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Компания + Соцсети */}
          <div className="grid grid-cols-2 gap-x-4 mb-6">
            <div>
              <h3 className="text-base font-semibold text-[#272727] mb-3">Компания</h3>
              <div className="flex flex-col gap-2">
                {[{ label: "О нас", href: "/About" }, { label: "Отзывы", href: "/Reviews" }, { label: "Контакты", href: "/Contact" }].map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setIsOpen(false)} className={`text-sm transition-colors ${pathname === href ? "text-black font-medium" : "text-gray-500 hover:text-black"}`}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#272727] mb-3">Социальные сети</h3>
              <div className="flex flex-col gap-2">
                {[{ label: "ВКонтакте", href: "https://vk.com" }, { label: "WhatsApp*", href: "https://wa.me" }, { label: "Instagram*", href: "https://instagram.com" }].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-2 gap-x-4 pt-5 border-t border-gray-100 pb-4">
            <div>
              <h3 className="text-base font-semibold text-[#272727] mb-2">Телефон</h3>
              <a href="tel:+79454344343" className="text-sm text-gray-500 hover:text-black transition-colors">+7 945 434-43-43</a>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#272727] mb-2">Почта поддержки:</h3>
              <a href="mailto:info@geniuselectro.ru" className="text-sm text-gray-500 hover:text-black transition-colors break-all">info@geniuselectro.ru</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">© 2025 Гениус Электро. Все права защищены.</p>
        </div>
      </div>
    </>
  );
}