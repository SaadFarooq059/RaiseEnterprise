"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full relative">
      {/* Image with fade-in */}
      <img 
        src="/home/hero.png" 
        alt="Hero" 
        className={`w-full h-auto object-cover transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Text overlay on left side with fade-in and slide-up */}
      <div className={`absolute top-1/3 left-4 lg:left-60 transform -translate-y-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} max-w-[90%] lg:max-w-none`}>
        <div className="text-[40px] lg:text-[96px] leading-[44px] lg:leading-[105.6px]" style={{ fontFamily: 'Aleo', fontWeight: '500', wordWrap: 'break-word' }}>
          <span style={{ color: 'white' }}>Leading <br/>with </span>
          <span style={{ color: '#FCD290' }}>Impact</span>
        </div>
        
        {/* Subtitle text */}
        <div className="mt-4 lg:mt-6 text-[16px] lg:text-[24px] leading-[19.2px] lg:leading-[28.8px]" style={{ color: 'white', fontFamily: 'Manrope', fontWeight: '500', wordWrap: 'break-word' }}>
          raiSE Annual Report 2024/2025
        </div>
      </div>
    </div>
  )
}
