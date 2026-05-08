"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-white">

      {/* Top Contact Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr] gap-8 items-start">

          {/* Call Button */}
          <div className="flex items-start pt-1">
            <button className="h-[52px] px-8 bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] text-[#272727] font-normal text-[15px] hover:opacity-90 transition cursor-pointer whitespace-nowrap">
              Заказать звонок
            </button>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-base font-semibold text-[#272727] mb-3">Адрес</h4>
            <p className="text-sm text-gray-500 mb-3">г. Москва, Проспект Мира, дом. 124</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#272727] hover:opacity-70 transition cursor-pointer flex items-center gap-1"
            >
              Перейти на карту <span>↗</span>
            </a>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-base font-semibold text-[#272727] mb-3">Телефон</h4>
            <a
              href="tel:+79454344343"
              className="text-sm text-gray-500 hover:text-black transition cursor-pointer flex items-center gap-1"
            >
              +7 945 434-43-43 <span>↗</span>
            </a>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-base font-semibold text-[#272727] mb-3">Почта поддержки</h4>
            <a
              href="mailto:info@geniuselectro.ru"
              className="text-sm text-gray-500 hover:text-black transition cursor-pointer flex items-center gap-1"
            >
              info@geniuselectro.ru <span>↗</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[180px_1fr_160px_180px] gap-10 items-start">

          {/* Logo */}
          <div>
            <Link href="/">
              <Image src="/logoblack.svg" width={120} height={60} alt="Genius Electro" />
            </Link>
          </div>

          <div>
            <h4 className="text-base font-semibold text-[#272727] mb-5">Продукция</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <Link href="/catalog/kabel-i-provod" className="text-sm text-gray-400 hover:text-black transition cursor-pointer leading-snug">
                Кабель и провод
              </Link>
              <Link href="/catalog/svetotekhnika-i-lampy" className="text-sm text-gray-400 hover:text-black transition cursor-pointer leading-snug">
                Светотехника и лампы
              </Link>
              <Link href="/catalog/kabelnye-klemmy" className="text-sm text-gray-400 hover:text-black transition cursor-pointer leading-snug">
                Кабельные клеммы, наконечники, муфты
              </Link>
              <Link href="/catalog/sistemy-prokladki" className="text-sm text-gray-400 hover:text-black transition cursor-pointer leading-snug">
                Системы для прокладки кабеля
              </Link>
              <Link href="/catalog/montazhnye-korobki" className="text-sm text-gray-400 hover:text-black transition cursor-pointer leading-snug">
                Монтажные коробки
              </Link>
              <Link href="/catalog/elektroust-izdeliya" className="text-sm text-gray-400 hover:text-black transition cursor-pointer leading-snug">
                Электроустановочные изделия
              </Link>
            </div>
          </div>

          {/* Компания */}
          <div>
            <h4 className="text-base font-semibold text-[#272727] mb-5">Компания</h4>
            <div className="flex flex-col gap-4">
              <Link href="/Abouthero" className="text-sm text-gray-500 hover:text-black transition cursor-pointer">О нас</Link>
              <Link href="/reviews" className="text-sm text-gray-500 hover:text-black transition cursor-pointer">Отзывы</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-black transition cursor-pointer">Контакты</Link>
            </div>
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="text-base font-semibold text-[#272727] mb-5">Социальные сети</h4>
            <div className="flex flex-col gap-4">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition cursor-pointer">ВКонтакте</a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition cursor-pointer">WhatsApp*</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition cursor-pointer">Instagram*</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          <p className="text-sm text-gray-400">© 2025 Гениус Электро. Все права защищены.</p>
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-500 hover:text-black transition cursor-pointer flex items-center gap-1"
          >
            ↑ Назад к началу
          </button>
        </div>
      </div>

    </footer>
  );
}