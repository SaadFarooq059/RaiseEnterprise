'use client'

// import { useEffect, useState, useRef } from 'react'
import MemberOnboardingSection from '@/components/showcasing-trailblazers/MemberOnboardingSection'
import NetworkingNightSection from '@/components/showcasing-trailblazers/NetworkingNightSection'
import PurpoSEAgendaHeader from '@/components/showcasing-trailblazers/PurpoSEAgendaHeader'
import PurpoSEAgendaCard from '@/components/showcasing-trailblazers/PurpoSEAgendaCard'
import PurpoSEAgendaContent from '@/components/showcasing-trailblazers/PurpoSEAgendaContent'
import IWD2025Header from '@/components/showcasing-trailblazers/IWD2025Header'
import IWD2025Card from '@/components/showcasing-trailblazers/IWD2025Card'
import IWD2025Content from '@/components/showcasing-trailblazers/IWD2025Content'
import IncreasingVisibilitySection from '@/components/showcasing-trailblazers/IncreasingVisibilitySection'
import PurpoSEAgendaHeader1 from './PurposeAgendaHeader1'
import PurpoSEAgendaCard1 from './PurposeAgendaCard1'
import PurpoSEAgendaContent1 from './PurposeAgendaContent1'
import LeftSidebar1 from './leftsidebarshwocasing'
import HeroSectionShowcasing from './heroshowcasing'


  // Animation removed as per request
export default function ShowcasingTrailblazersContent() {
  return (

   
    <div className="min-h-screen bg-white" id="showcasing-trailblazers">
      {/* First Section - Increasing Visibility */}
       <HeroSectionShowcasing />

      {/* Second Section - Member Events */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #512691 0%, #5C61DB 30%)' }}
      >
        <MemberOnboardingSection />
        <NetworkingNightSection />
      </section>

      {/* PurpoSE Agenda Section */}
      <section 
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #7479ED 0%, #512691 12%)' }}
    >
      <div className="relative flex justify-end pt-12 md:pt-24 lg:pt-32 xl:pt-[150px] pb-6 md:pb-8 lg:pb-10">
        <div className="w-full max-w-[1140px]">
          <PurpoSEAgendaHeader />
        </div>
      </div>
      <PurpoSEAgendaCard />
      <div className="relative flex justify-end pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
        <div className="w-full max-w-[1140px]">
          <PurpoSEAgendaContent />
        </div>
      </div>
    </section>

{/* PurpoSE Agenda Section */}

           <section 
      className="relative w-full overflow-hidden -mt-30"
      style={{ background: 'linear-gradient(180deg,  #512691 12%)' }}
    >
      <div className="relative flex justify-end pt-12 -mt-5 md:pt-24 lg:pt-32 xl:pt-[150px] pb-6 md:pb-8 lg:pb-10">
        <div className="w-full max-w-[1140px]">
          <PurpoSEAgendaHeader1 />
        </div>
      </div>
      <PurpoSEAgendaCard1 />
      <div className="relative flex justify-end pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
        <div className="w-full max-w-[1140px]">
          <PurpoSEAgendaContent1 />
        </div>
      </div>
    </section>

      {/* IWD 2025 Section */}
        <section 
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #512691 12%)' }}
    >
      <div className="relative flex justify-end pt-12 md:pt-24 lg:pt-32 xl:pt-[150px] pb-6 md:pb-8 -mt-25 lg:pb-10">
        <div className="w-full max-w-[1140px]">
          <IWD2025Header />
        </div>
      </div>
      <IWD2025Card />
      <div className="relative flex justify-end pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
        <div className="w-full max-w-[1140px]">
          <IWD2025Content />
        </div>
      </div>
    </section>


      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #512691 0%, #5C61DB 8%)' }}
      >
        <div className="relative flex justify-end pt-12 md:pt-24 lg:pt-32 xl:pt-[170px] -mt-40 pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
          <div className="w-full max-w-[1140px]">
            <IncreasingVisibilitySection />
          </div>
        </div>
      </section>
    </div>
  )
}
