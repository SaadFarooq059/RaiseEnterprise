'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/venture-building/HeroSection'
import EnergiSEStatsSection from '@/components/venture-building/EnergiSEStatsSection'
import EnergiSETestimonialSection from '@/components/venture-building/EnergiSETestimonialSection'
import TS2StatsSection from '@/components/venture-building/TS2StatsSection'
import TS2TestimonialSection from '@/components/venture-building/TS2TestimonialSection'

export default function VentureBuildingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
