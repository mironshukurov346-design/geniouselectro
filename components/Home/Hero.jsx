"use client";

import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Search:", query);
    }
  };

  return (
    <div className="w-full mx-auto px-6 py-12 flex items-center justify-center">
      <div
        className="relative max-w-[1340px] h-[761px] overflow-hidden rounded-3xl"
        style={{ aspectRatio: "16/7" }}
      >
        {/* Background image — no conflicting shorthand */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/headerimg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Bottom-up dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(360deg, #272727 0%, rgba(39, 39, 39, 0) 100%)",
          }}
        />

        {/* Subtle overall dark veil */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
          {/* Subtitle */}
          <p
            className="text-white/40 text-sm mb-4 font-light"
            style={{
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.18em",
            }}
          >
            Работаем с 2015 года
          </p>

          {/* Main heading */}
          <h1
            className="text-[#FFFFFF] font-light leading-tight mb-10"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              lineHeight: 1.15,
              maxWidth: "780px",
            }}
          >
            Конструкторское бюро
            <br />
            кабельной продукции
          </h1>

          {/* Search bar */}
       <div className="flex w-full max-w-xl">
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    placeholder="Найдите все, что вам нужно"
    className="flex-1 px-6 py-4 text-white placeholder-white/40 text-sm outline-none"
    style={{
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(210,175,100,0.55)",
      borderRight: "none",
      borderRadius: "8px 0 0 8px",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      fontFamily: "'Georgia', serif",

      textAlign: "left",
      display: "block",
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
    }}
  />
  <button
    onClick={handleSearch}
    className="px-4 flex items-center justify-center transition-opacity hover:opacity-85 active:opacity-60"
    style={{
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(210,175,100,0.55)",
      borderLeft: "none",
      borderRadius: "0 8px 8px 0",
      minWidth: "52px",
      flexShrink: 0,               // Tugma qisqarib ketmasligi uchun
    }}
  >
    <img src="/search.png" alt="Search" />
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
