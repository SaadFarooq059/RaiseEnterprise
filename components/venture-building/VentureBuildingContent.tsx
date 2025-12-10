'use client'

import { useEffect, useState, useRef } from 'react'
import HeroSection from '@/components/venture-building/HeroSection'
import EnergiSEStatsSection from '@/components/venture-building/EnergiSEStatsSection'
import EnergiSETestimonialSection from '@/components/venture-building/EnergiSETestimonialSection'
import TS2StatsSection from '@/components/venture-building/TS2StatsSection'
import TS2TestimonialSection from '@/components/venture-building/TS2TestimonialSection'

export default function VentureBuildingContent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`min-h-screen bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="venture-building">
      <HeroSection />
      <EnergiSEStatsSection />
      <EnergiSETestimonialSection />
      <TS2StatsSection />
      <TS2TestimonialSection />
      
      {/* Footer Image */}
      <img 
        style={{width: '100%', height: '10%'}} 
        src="/venture-building/footer.png" 
        alt="Footer" 
      />
    </div>
  )
}
