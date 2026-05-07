"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const slides = [
  { id: 1, src: "/icon.png", alt: "Slide 1" },
  { id: 2, src: "/icon2.png", alt: "Slide 2" },
  { id: 3, src: "/icon3.png", alt: "Slide 3" },
  { id: 4, src: "/telegroup.png", alt: "Slide 4" },
  { id: 5, src: "/stefano-ricci.png", alt: "Slide 5" },
  { id: 6, src: "/images/slide-6.jpg", alt: "Slide 6" },
];

const arrowDefault = "#b8975a";
const arrowHover = "#d4a843";

export default function Carousel() {
  const trackRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-[1300px] pt-20 mx-auto flex items-center w-full px-4 py-8 select-none">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setLeftHovered(false)}
        aria-label="Scroll left"
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 mr-3 cursor-pointer"
        style={{
          backgroundColor: leftHovered ? arrowHover : arrowDefault,
          boxShadow: leftHovered
            ? "0 4px 16px rgba(212,168,67,0.5)"
            : "0 2px 8px rgba(184,151,90,0.3)",
          transform: leftHovered ? "scale(1.1)" : "scale(1)",
          transition: "background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Scrollable Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {slides.map((slide) => {
          const isHovered = hoveredCard === slide.id;
          return (
            <div
              key={slide.id}
              onMouseEnter={() => setHoveredCard(slide.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="flex-shrink-0 rounded-2xl cursor-pointer flex items-center justify-center"
              style={{
                width: "220px",
                height: "148px",
                padding: "16px",
                background: isHovered
                  ? "linear-gradient(135deg, #d4a843 0%, #b8975a 60%, #e8c97a 100%)"
                  : "#efefef",
                border: "2px solid transparent",
                boxShadow: isHovered
                  ? "0 8px 28px rgba(212,168,67,0.4)"
                  : "0 2px 8px rgba(0,0,0,0.06)",
                transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                transition: "background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  style={{
                    filter: isHovered
                      ? "brightness(0)"
                      : "grayscale(100%) opacity(0.45)",
                    transition: "filter 0.25s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        onMouseEnter={() => setRightHovered(true)}
        onMouseLeave={() => setRightHovered(false)}
        aria-label="Scroll right"
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 ml-3 cursor-pointer"
        style={{
          backgroundColor: rightHovered ? arrowHover : arrowDefault,
          boxShadow: rightHovered
            ? "0 4px 16px rgba(212,168,67,0.5)"
            : "0 2px 8px rgba(184,151,90,0.3)",
          transform: rightHovered ? "scale(1.1)" : "scale(1)",
          transition: "background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}