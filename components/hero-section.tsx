"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image with fade-in */}
      <img
        src="/home/hero.png"
        alt="Hero"
        className={`block w-full h-[520px] sm:h-[620px] lg:h-[760px] object-cover transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Soft overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />

      {/* Text overlay with fade-in and slide-up */}
      <div className="absolute inset-0 flex items-center">
        <div
          className={`px-4 sm:px-8 lg:px-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="text-[clamp(36px,8vw,96px)] leading-tight text-center sm:text-left"
            style={{ fontFamily: "Aleo", fontWeight: "500" }}
          >
            <span className="text-white">
              Leading <br className="hidden sm:block" />
              with{" "}
            </span>
            <span style={{ color: "#FCD290" }}>Impact</span>
          </div>

          {/* Subtitle text */}
          <div
            className="mt-4 sm:mt-6 text-[clamp(14px,3.2vw,24px)] leading-snug text-center sm:text-left"
            style={{ color: "white", fontFamily: "Manrope", fontWeight: "500" }}
          >
            raiSE Annual Report 2024/2025
          </div>
        </div>
      </div>
    </section>
  )
}
