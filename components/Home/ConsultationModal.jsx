"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ConsultationModal({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const [agreed, setAgreed] = useState(false);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-overlay-in"
    >
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-modal-in">

        {/* Left: image — desktop only */}
        <div className="hidden md:block relative w-1/2 flex-shrink-0 min-h-[640px]">
          <Image
            src="/popupimg.png"
            alt="Кабели"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: form */}
        <div className="w-full md:w-1/2 flex-shrink-0 px-8 py-8 overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-7 animate-item-in [animation-delay:80ms]">
            <h2 className="text-2xl font-semibold text-[#272727]">
              Оставить заявку
            </h2>
            <button
              onClick={onClose}
              aria-label="Закрыть"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Имя *"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition bg-[#fafafa] animate-item-in [animation-delay:140ms]"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__ *"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition bg-[#fafafa] animate-item-in [animation-delay:190ms]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition bg-[#fafafa] animate-item-in [animation-delay:240ms]"
            />
            <input
              type="text"
              placeholder="Комментарий"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition bg-[#fafafa] animate-item-in [animation-delay:290ms]"
            />
          </div>

          {/* File upload hint */}
          <p className="text-xs text-gray-500 mt-5 mb-3 leading-relaxed animate-item-in [animation-delay:340ms]">
            Если у вас есть документы для подбора кабеля и расчёта стоимости, прикрепите файл к заявке
          </p>

          {/* File attach button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition bg-[#fafafa] animate-item-in [animation-delay:380ms]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828A4 4 0 0012.343 4.17L5.757 10.757a6 6 0 008.486 8.486L20 13.485" />
            </svg>
            {fileName ? (
              <span className="text-[#c9a84c] truncate max-w-[180px]">{fileName}</span>
            ) : (
              "Прикрепить файл"
            )}
          </button>
          <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />

          {/* Checkbox */}
          <label className="flex items-center gap-2.5 mt-5 cursor-pointer group animate-item-in [animation-delay:420ms]">
            <div
              onClick={() => setAgreed(!agreed)}
              className={`w-4 h-4 flex-shrink-0 rounded border transition-all ${
                agreed ? "bg-[#c9a84c] border-[#c9a84c]" : "border-gray-300 bg-white group-hover:border-[#c9a84c]"
              } flex items-center justify-center`}
            >
              {agreed && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-xs text-gray-600">
              Согласен с{" "}
              <span className="text-[#c9a84c] underline underline-offset-2 cursor-pointer hover:text-[#b8963e]">
                политикой конфиденциальности
              </span>
            </span>
          </label>

          {/* Submit */}
          <button
            type="button"
            style={{ background: "linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)" }}
            className="w-full mt-6 py-4 rounded-xl text-sm font-medium text-gray-800 active:scale-[0.98] transition-all animate-item-in [animation-delay:460ms]"
          >
            Оставить заявку
          </button>
        </div>

        {/* Bottom: image — mobile only */}
        <div className="block md:hidden relative w-full h-52 flex-shrink-0">
          <Image
            src="/popupimg.png"
            alt="Кабели"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}