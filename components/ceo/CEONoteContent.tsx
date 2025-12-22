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
      <div className="flex flex-col md:grid md:grid-cols-2 md:min-h-screen">
        {/* Left - CEO Image */}
        <div className="relative w-full h-[50vh] xs:h-[55vh] sm:h-[65vh] md:h-auto md:min-h-screen">
          <img 
            src="/ceo/hero.png" 
            alt="CEO" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right - Yellow Quote Section */}
        <div className="bg-[#FCD290] px-5 py-10 xs:px-6 xs:py-12 sm:px-8 sm:py-14 md:px-6 md:py-8 lg:px-10 lg:py-12 xl:px-16 xl:py-16 2xl:px-20 2xl:py-20 flex items-center overflow-y-auto">
          <div className="w-full max-w-full">
            {/* Heading */}
            <h1 className="text-[#8F2576] text-[28px] xs:text-[32px] sm:text-[38px] md:text-[32px] lg:text-[42px] xl:text-[52px] 2xl:text-[68px] font-['Aleo'] font-normal leading-[1.15] sm:leading-[1.2] mb-4 sm:mb-5 md:mb-4 lg:mb-6 xl:mb-8">
              A Message<br/>from our CEO
            </h1>

            {/* Quote */}
            <p className="text-[#8F2576] text-[15px] xs:text-[16px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] font-['Aleo'] leading-[1.5] sm:leading-[1.55] mb-4 sm:mb-5 md:mb-4 lg:mb-6 xl:mb-8 pr-2">
              "As we enter the impact decade, only those who deliver meaningful social change alongside business excellence will shape the future."
            </p>

            {/* Name */}
            <h3 className="text-[#A564F7] text-base xs:text-[17px] sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-3xl font-serif font-medium">
              Mr. Alfie Othman
            </h3>
          </div>
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
