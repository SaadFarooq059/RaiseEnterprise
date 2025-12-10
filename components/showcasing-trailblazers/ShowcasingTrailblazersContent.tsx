'use client'

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
export default function ShowcasingTrailblazersContent() {
  return (
    <div className="min-h-screen bg-white" id="showcasing-trailblazers">
      {/* First Section - Increasing Visibility */}
      

      {/* Second Section - Member Events */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #5C61DB 0%, #512691 30%)' }}
      >
        <MemberOnboardingSection />
        <NetworkingNightSection />
      </section>

      {/* PurpoSE Agenda Section */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #7479ED 0%, #512691 12%)' }}
      >
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pt-12 md:pt-24 lg:pt-32 xl:pt-[170px]">
          <PurpoSEAgendaHeader />
        </div>
        <PurpoSEAgendaCard />
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
          <PurpoSEAgendaContent />
        </div>
      </section>


{/* PurpoSE Agenda Section */}

       <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #7479ED 0%, #512691 12%)' }}
      >
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pt-12 md:pt-24 lg:pt-32 xl:pt-[170px]">
          <PurpoSEAgendaHeader1 />
        </div>
        <PurpoSEAgendaCard1 />
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
          <PurpoSEAgendaContent1 />
        </div>
      </section>

      {/* IWD 2025 Section */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #512691 12%)' }}
      >
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pt-12 md:pt-24 lg:pt-32 xl:pt-[170px]">
          <IWD2025Header />
        </div>
        <IWD2025Card />
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
          <IWD2025Content />
        </div>
      </section>


      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #512691 0%, #5C61DB 8%)' }}
      >
        <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pt-12 md:pt-24 lg:pt-32 xl:pt-[170px] pb-12 md:pb-16 lg:pb-20 xl:pb-[100px]">
          <IncreasingVisibilitySection />
        </div>
      </section>
    </div>
  )
}
