'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    sku: 'LC1-C5E04-157',
    name: 'ITK Витая пара U/UTP 5E 4х2х0,52 нг(А)-FRLSоранж. (305м)',
    price: 34.0,
    unit: 'м',
    image: '/img1.png',
    imageBg: '#f0f0f0',
    isNew: true,
  },
  {
    id: 2,
    sku: 'LC1-C5E04-121',
    name: 'IEK ITK Кабель связи витая пара U/UTP, кат.5E 4x2х24AWG solid, LSZH, 305м, серый',
    price: 123.0,
    unit: 'м',
    image: '/img2.png',
    imageBg: '#f0f0f0',
    isNew: true,
  },
  {
    id: 3,
    sku: 'LC1-C5E04-111-100',
    name: 'IEK ITK Каб. в. п. U/UTP кат. 5E 4х2х24AWG solid PVC серый 100м',
    price: 132.86,
    unit: 'м',
    image: '/img3.png',
    imageBg: '#4a5240',
    isNew: true,
  },
  {
    id: 4,
    sku: 'LC1-C5E04-113',
    name: 'IEK ITK Витая пара U/UTP категории 5E 4х2х24AWG PVC синий (305м)',
    price: 68.12,
    unit: 'м',
    image: '/img3.png',
    imageBg: '#6c5ce7',
    isNew: true,
  },
];

function formatPrice(price) {
  return price.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const decrement = (e) => { e.preventDefault(); e.stopPropagation(); setQty((q) => Math.max(1, q - 1)); };
  const increment = (e) => { e.preventDefault(); e.stopPropagation(); setQty((q) => q + 1); };
  const handleAddToCart = (e) => {
    e.preventDefault(); e.stopPropagation();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const stepperBtnBase = 'w-10 h-10 flex items-center justify-center text-gray-500 text-lg font-light transition-all duration-150';

  return (
    <Link
      href={`/catalog/${product.id}`}
      className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 mx-auto w-full cursor-pointer"
    >
      <div className="relative">
        <div className="w-full h-60 flex items-center justify-center" style={{ backgroundColor: product.imageBg }}>
          {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover" />}
        </div>
        <img src="/heart1.png" alt="" className="absolute top-3 right-3" />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#f5ede0] text-[#b07d4a] text-xs font-medium px-3 py-1 rounded-full border border-[#e8d5b7]">
            Новинка
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 px-5 pt-5 pb-2 gap-1.5">
        <p className="text-xs text-gray-400 font-medium tracking-wide">{product.sku}</p>
        <p className="text-sm text-gray-700 leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</p>
        <p className="font-semibold text-base mt-2" style={{ color: '#C3974C' }}>
          {formatPrice(product.price)} ₽
          <span className="text-gray-400 font-normal text-sm"> / {product.unit}</span>
        </p>
      </div>

      <div className="flex items-center gap-2 px-5 pb-5 pt-3">
        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden select-none">
          <button onClick={decrement} className={stepperBtnBase}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C3974C'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
            aria-label="Уменьшить">−</button>
          <span className="w-9 text-center text-sm font-medium text-gray-700">{qty}</span>
          <button onClick={increment} className={stepperBtnBase}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C3974C'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
            aria-label="Увеличить">+</button>
        </div>

        <button onClick={handleAddToCart}
          className={`flex-1 h-10 rounded-xl text-sm font-medium transition-all duration-150 active:scale-95 ${
            addedToCart ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-500 border border-gray-200'
          }`}
          onMouseEnter={(e) => { if (!addedToCart) { e.currentTarget.style.backgroundColor = '#C3974C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#C3974C'; }}}
          onMouseLeave={(e) => { if (!addedToCart) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}}>
          {addedToCart ? '✓ Добавлено' : 'В корзину'}
        </button>
      </div>
    </Link>
  );
}

export default function NewArrivals() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Новые поступления</h2>
        <Link href="/CatalogPage" className="flex items-center gap-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-50 hover:border-gray-400 transition-all duration-150 active:scale-95">
          Посмотреть все
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    </section>
  );
}