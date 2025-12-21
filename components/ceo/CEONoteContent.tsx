"use client"

// import { useEffect, useState, useRef } from "react"
import LeadingWithImpactSection from "@/components/ceo/LeadingWithImpactSection"
import VentureBuildingSection from "@/components/ceo/VentureBuildingSection"
import CapacityBuildingSection from "@/components/ceo/CapacityBuildingSection"
import ShowcasingSection from "@/components/ceo/ShowcasingSection"

// Animation removed as per request

export default function CEONoteContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9B2683] to-[#512691] text-white font-sans" id="ceo-note">
      {/* Hero Section - Full height, no top padding */}
    <div className="relative overflow-hidden">
  <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] xl:grid-cols-[1000px_1fr] md:h-screen">
    {/* Left - CEO Image */}
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-full">
      <img src="/ceo/hero.png" alt="CEO" className="w-full h-full object-cover object-top" />
    </div>
    
    {/* Right - Yellow Quote Section */}
    <div className="bg-[#FCD290] px-6 py-8 sm:px-8 sm:py-10 md:px-6 md:py-8 lg:px-10 xl:px-16 flex flex-col justify-center min-h-[50vh] md:min-h-0">
      {/* Heading */}
      <h1 className="text-[#8F2576] text-[32px] sm:text-[36px] md:text-[38px] lg:text-[48px] xl:text-[68px] font-['Aleo'] font-normal leading-[36px] sm:leading-[40px] md:leading-[42px] lg:leading-[52px] xl:leading-[72px] mb-3 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-8">
        A Message<br/>from our CEO
      </h1>
      
      {/* Quote */}
      <p className="text-[#8F2576] text-[16px] sm:text-[17px] md:text-[16px] lg:text-[20px] xl:text-[28px] font-['Aleo'] leading-[24px] sm:leading-[26px] md:leading-[24px] lg:leading-[30px] xl:leading-[42px] mb-3 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-8 max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[480px]">
        "As we enter the impact decade, only those who deliver meaningful social change alongside business excellence will shape the future."
      </p>
      
      {/* Name */}
      <h3 className="text-[#A564F7] text-base sm:text-lg md:text-lg lg:text-xl xl:text-3xl font-serif font-medium capitalize">Mr. Alfie Othman</h3>
    </div>
  </div>
</div>
      {/* Leading with Impact Section */}
      <LeadingWithImpactSection />

      {/* Venture Building Section */}
      <VentureBuildingSection />
 
      {/* Capacity Building Section */}
      <CapacityBuildingSection />

      {/* Showcasing Section */}
      <ShowcasingSection />
    </div>
  )
}
