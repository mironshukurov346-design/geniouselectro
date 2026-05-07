"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-white cursor-pointer border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 h-[107px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logoblack.svg"
            width={120}
            height={50}
            alt="Genius Electro"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/" ? "text-black" : "text-gray-500 hover:text-black"}`}
          >
            Главная
          </Link>
          <Link
            href="/about"
            className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/about" ? "text-black" : "text-gray-500 hover:text-black"}`}
          >
            О нас
          </Link>
          <div className="relative group">
            <button
              className={`font-medium text-sm flex items-center gap-1 whitespace-nowrap transition-colors ${pathname.startsWith("/catalog") ? "text-black" : "text-gray-500 group-hover:text-black"}`}
            >
              Каталог
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
          <Link
            href="/reviews"
            className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/reviews" ? "text-black" : "text-gray-500 hover:text-black"}`}
          >
            Отзывы
          </Link>
          <Link
            href="/delivery"
            className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/delivery" ? "text-black" : "text-gray-500 hover:text-black"}`}
          >
            Доставка и оплата
          </Link>
          <Link
            href="/contact"
            className={`font-medium text-sm whitespace-nowrap transition-colors ${pathname === "/contact" ? "text-black" : "text-gray-500 hover:text-black"}`}
          >
            Контакты
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center justify-center">
          <div className="relative flex items-center w-full max-w-3xl">
            {/* Input Field */}
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
                backgroundImage:
                  "linear-gradient(#FDF9F2, #F5EDE2), linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
              }}
            />

            {/* Search Button */}
            <button
              className="absolute right-1 p-2 rounded-xl transition-transform active:scale-95
                     bg-gradient-to-b from-[#E2C299] to-[#C1925B] shadow-sm hover:opacity-90"
            >
              <svg
                className="w-5 h-5 text-[#8B6F47]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <img src="/heart.png" alt="" />
          <img src="/heart2.png" alt="" />
        <Link href="/login">
          <button className="w-[129px] text-[#272727] h-[47px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] font-normal text-[14px] hover:opacity-90 transition">
            Вход
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
