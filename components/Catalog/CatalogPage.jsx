'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const categories = ['Контрольный кабель', 'Монтажный провод', 'Сетевой кабель', 'Силовой кабель'];

const manufacturers = ['DKC', 'Hyperline', 'IEK', 'Schneider Electric', 'ABB'];

const filterSections = [
  'Сечение кабеля, мм²',
  'Количество жил',
  'Материал проводника',
  'Цвет',
  'Материал изоляции проводника',
  'Материал внешней изоляции',
  'Материал внешней оболочки',
  'Модель/Исполнение',
  'Новые товары',
  'Популярные',
];

const allProducts = [
  { id: 1, sku: 'dsssdasdasdasd', name: 'asds dasdasd', price: 34.0, unit: 'м', image: '/img1.png', imageBg: '#f0f0f0' },
  { id: 2, sku: 'Кабель UTP кат. 6', name: 'Пол ботинок господь ручей чувство человечек. Заплакать...', price: 68.12, unit: 'м', image: null, imageBg: '#6c5ce7' },
  { id: 3, sku: 'Кабель UTP кат. 5E', name: 'Армейский юный лететь подземный палка запретить...', price: 53.29, unit: 'м', image: null, imageBg: '#7cb33a' },
];

const sortOptions = ['Популярное', 'Цена: по возрастанию', 'Цена: по убыванию', 'Новинки'];
const perPageOptions = ['Показать по 12', 'Показать по 24', 'Показать по 48'];

function formatPrice(price) {
  return price.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function CatalogCard({ product }) {
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
    <Link href={`/catalog/${product.id}`} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 w-full cursor-pointer">
      <div className="w-full h-52 flex items-center justify-center" style={{ backgroundColor: product.imageBg }}>
        {product.image && <img src={product.image} alt={product.name} className="w-full h-full object-cover" />}
      </div>

      <div className="flex flex-col flex-1 px-4 pt-4 pb-2 gap-1">
        <p className="text-xs text-gray-400 font-medium">{product.sku}</p>
        <p className="text-sm text-gray-700 leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</p>
        <p className="font-semibold text-base mt-1" style={{ color: '#C3974C' }}>
          {formatPrice(product.price)} ₽
          <span className="text-gray-400 font-normal text-sm"> / {product.unit}</span>
        </p>
      </div>

      <div className="flex items-center gap-2 px-4 pb-4 pt-2">
        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden select-none">
          <button onClick={decrement} className={stepperBtnBase}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C3974C'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}>−</button>
          <span className="w-9 text-center text-sm font-medium text-gray-700">{qty}</span>
          <button onClick={increment} className={stepperBtnBase}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C3974C'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}>+</button>
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

function FilterSection({ label }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl px-4 py-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-sm text-gray-700 font-medium">
        {label}
        <span className="text-gray-400 text-xl leading-none">{open ? '−' : '+'}</span>
      </button>
    </div>
  );
}

function PriceSlider() {
  const [min, setMin] = useState(34);
  const [max, setMax] = useState(779);
  const absMin = 34;
  const absMax = 779;

  const minPct = ((min - absMin) / (absMax - absMin)) * 100;
  const maxPct = ((max - absMin) / (absMax - absMin)) * 100;

  return (
    <div className="border border-gray-200 rounded-xl px-4 py-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-700 font-medium">Цена (₽)</span>
        <span className="text-gray-400 text-xl leading-none">−</span>
      </div>
      {/* Track */}
      <div className="relative h-1.5 mx-2 mb-4">
        <div className="absolute inset-0 bg-gray-200 rounded-full" />
        <div
          className="absolute h-full rounded-full"
          style={{ backgroundColor: '#C3974C', left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />
        <input type="range" min={absMin} max={absMax} value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
        <input type="range" min={absMin} max={absMax} value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
        {/* Thumbs */}
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow"
          style={{ backgroundColor: '#C3974C', left: `calc(${minPct}% - 8px)`, pointerEvents: 'none' }} />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow"
          style={{ backgroundColor: '#C3974C', left: `calc(${maxPct}% - 8px)`, pointerEvents: 'none' }} />
      </div>
      <div className="bg-[#fdf6ec] rounded-xl py-2 text-center text-sm font-medium" style={{ color: '#C3974C' }}>
        {min} ₽ - {max} ₽
      </div>
    </div>
  );
}

export default function CatalogPage() {
  const [selectedSort, setSelectedSort] = useState('Популярное');
  const [selectedPerPage, setSelectedPerPage] = useState('Показать по 12');
  const [search, setSearch] = useState('');
  const [selectedMfrs, setSelectedMfrs] = useState([]);
  const [mfrOpen, setMfrOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [perPageOpen, setPerPageOpen] = useState(false);

  const toggleMfr = (m) =>
    setSelectedMfrs((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Каталог товаров</h1>

      <div className="flex gap-6">
        {/* ── LEFT SIDEBAR ── */}
        <aside className="w-72 shrink-0 flex flex-col gap-3">
          {/* Filters header */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
            <span className="font-semibold text-gray-800">Фильтры</span>
            <button className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Сбросить</button>
          </div>

          {/* Manufacturer */}
          <div className="border border-gray-200 rounded-xl px-4 py-3">
            <button onClick={() => setMfrOpen(!mfrOpen)} className="w-full flex items-center justify-between text-sm text-gray-700 font-medium mb-2">
              Производитель
              <span className="text-gray-400 text-xl leading-none">{mfrOpen ? '−' : '+'}</span>
            </button>
            {mfrOpen && (
              <div className="flex flex-col gap-2 mt-1">
                {manufacturers.map((m) => (
                  <label key={m} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      onClick={() => toggleMfr(m)}
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        selectedMfrs.includes(m) ? 'border-[#C3974C] bg-[#C3974C]' : 'border-gray-300 bg-white'
                      }`}
                    >
                      {selectedMfrs.includes(m) && (
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">{m}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Other filter sections */}
          {filterSections.map((s) => <FilterSection key={s} label={s} />)}

          {/* Price slider */}
          <PriceSlider />

          {/* Promo card */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="h-28 bg-gray-200 w-full" />
            <div className="px-4 py-3">
              <p className="font-semibold text-gray-800 text-sm mb-1">Про оформление заказа:</p>
              <p className="text-xs text-gray-500 leading-snug">
                Перед добавлением товара в корзину, вам нужно зарегистрироваться на нашем сайте, чтобы оформить заказ
              </p>
            </div>
            <div className="px-4 pb-4">
              <button
                className="w-full py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-150 active:scale-95"
                style={{ backgroundColor: '#C3974C' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a87c3a')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C3974C')}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </aside>

        {/* ── RIGHT CONTENT ── */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#C3974C] hover:text-[#C3974C] transition-all duration-150">
                {c}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-3">
            {/* Sort dropdown */}
            <div className="relative">
              <button onClick={() => { setSortOpen(!sortOpen); setPerPageOpen(false); }}
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 hover:border-gray-300 bg-white min-w-[180px] justify-between">
                {selectedSort}
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${sortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {sortOpen && (
                <div className="absolute z-10 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {sortOptions.map((o) => (
                    <button key={o} onClick={() => { setSelectedSort(o); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${selectedSort === o ? 'text-[#C3974C] font-medium' : 'text-gray-700'}`}>
                      {o}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Per page dropdown */}
            <div className="relative">
              <button onClick={() => { setPerPageOpen(!perPageOpen); setSortOpen(false); }}
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 hover:border-gray-300 bg-white min-w-[170px] justify-between">
                {selectedPerPage}
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${perPageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {perPageOpen && (
                <div className="absolute z-10 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {perPageOptions.map((o) => (
                    <button key={o} onClick={() => { setSelectedPerPage(o); setPerPageOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${selectedPerPage === o ? 'text-[#C3974C] font-medium' : 'text-gray-700'}`}>
                      {o}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex-1 flex items-center border rounded-xl overflow-hidden" style={{ borderColor: '#e8d5b7' }}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Найдите все, что вам нужно"
                className="flex-1 px-4 py-2.5 text-sm outline-none bg-white placeholder-gray-400"
                style={{ color: '#C3974C' }}
              />
              <button className="px-4 py-2.5 flex items-center justify-center" style={{ backgroundColor: '#C3974C' }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {allProducts.map((p) => <CatalogCard key={p.id} product={p} />)}
          </div>

          {/* Load more */}
          <div className="flex justify-center mt-2">
            <button
              className="px-16 py-3.5 rounded-2xl text-sm font-medium text-gray-700 transition-all duration-150 active:scale-95"
              style={{ backgroundColor: '#C3974C', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a87c3a')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C3974C')}
            >
              Смотреть больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}