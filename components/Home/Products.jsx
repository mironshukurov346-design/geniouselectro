"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    description: "Кабели для энергетических систем и промышленного оборудования с высокой надёжностью и износостойкостью.",
    bgColor: "#8B5F7F",
  },
  {
    id: 2,
    description: "Коричневый указанный напутствует девка табак остановить. Армейский пламя фонарик триста.",
    bgColor: "#4444FF",
  },
  {
    id: 3,
    description: "Сутки горячий холодно ответить корничневый райком июнь выраженный.",
    bgColor: "#DD00FF",
  },
  {
    id: 4,
    description: "Попевой госпожа зеленый горький.",
    bgColor: "#D4A562",
  },
  {
    id: 5,
    description: "Выраженный господь руководитель разволить конференция иной поставить. Задрать наслаждение господь сомнительный.",
    bgColor: "#4DB8A8",
  },
  {
    id: 6,
    description: "Zasutь господь при припичный отражение желание вашло. Спешить класс цель достоинство сынок.",
    bgColor: "#00BB00",
  },
];

export default function Products() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full px-6 py-16 bg-[#] font-['Georgia',serif]">
      <div className="max-w-[1340px] mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-12">
          <div className="md:w-48 flex-shrink-0">
            <span className="text-sm text-[#27272799] tracking-[0.04em]">Продукция</span>
          </div>
         <h2 className="font-[Inter] max-w-[517px] font-normal text-[32px] leading-[42px] tracking-[-0.04em] text-[#272727]">
  Кабельно-проводниковые изделия для любых задач
</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col w-full transition-shadow duration-[250ms] ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div
                className="w-full h-[220px] overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: product.bgColor }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-[350ms] ease-in-out ${hoveredId === product.id ? "scale-[1.04]" : "scale-100"}`}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 p-8 gap-4">
                <h3 className="text-xl font-light text-[#272727]">{product.title}</h3>
                <p className="text-sm leading-relaxed flex-1 text-[#272727]">{product.description}</p>
                <div className="mt-6">
                  <button className="w-[367px] py-4 rounded-lg text-sm font-['Georgia',serif] cursor-pointer bg-[#DDDDDD] text-[#7a7060] border-none outline-none transition-[background,color] duration-200 hover:bg-gradient-to-r hover:from-[#D8C19A] hover:to-[#C3974C] hover:text-[#2a1a08]">
                    Перейти в каталог
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}