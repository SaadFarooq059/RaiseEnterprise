'use client'

import Navbar from '@/components/navbar'
import SidebarNav from '@/components/showcasing-trailblazers/SidebarNav'
import MemberOnboardingSection from '@/components/showcasing-trailblazers/MemberOnboardingSection'
import NetworkingNightSection from '@/components/showcasing-trailblazers/NetworkingNightSection'
import PurpoSEAgendaHeader from '@/components/showcasing-trailblazers/PurpoSEAgendaHeader'
import PurpoSEAgendaCard from '@/components/showcasing-trailblazers/PurpoSEAgendaCard'
import PurpoSEAgendaContent from '@/components/showcasing-trailblazers/PurpoSEAgendaContent'

export default function ShowcasingTrailblazersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* First Section with gradient */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #512691 0%, #5C61DB 30%)' }}
      >
        <SidebarNav />
        <MemberOnboardingSection />
        <NetworkingNightSection />
      </section>

      {/* PurpoSE Agenda Section */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #7479ED 0%, #512691 12%)' }}
      >
        <div className="relative px-[120px] pt-[170px]">
          <PurpoSEAgendaHeader />
        </div>
        <PurpoSEAgendaCard />
        <div className="relative px-[120px] pb-[100px]">
          <PurpoSEAgendaContent />
        </div>
      </section>
    
    </div>
  )
}