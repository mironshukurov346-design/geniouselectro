import React from "react";
import Carousel from "../Home/Carousel";

export default function AboutBanner() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="relative w-full rounded-[24px] overflow-hidden h-[420px]">
        {/* Image */}
        <img
          src="/banner.png"
          alt="Worker with cable"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay — stronger on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/70" />

        {/* Text — bottom right */}
        <div className="absolute bottom-10 right-10 max-w-[380px]">
          <p className="text-white text-[15px] leading-relaxed">
            Мы работаем с ведущими промышленными предприятиями, энергетическими
            компаниями и строительными организациями, обеспечивая стабильные
            поставки и профессиональную техническую поддержку.
          </p>
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-6 py-5 pl-65 pt-[64px] px-[203px] grid grid-cols-3 gap-8">
        <div>
          <p className="text-6xl font-light text-[#272727] mb-3">2015</p>
          <p className="text-sm text-gray-400">Год создания компании</p>
        </div>
        <div>
          <p className="text-6xl font-light text-[#272727] mb-3">14 600+</p>
          <p className="text-sm text-gray-400">Километров кабеля создано</p>
        </div>
        <div>
          <p className="text-6xl font-light text-[#272727] mb-3">500+</p>
          <p className="text-sm text-gray-400">Клиенты</p>
        </div>
      </section>

      <Carousel />
    </div>
  );
}
