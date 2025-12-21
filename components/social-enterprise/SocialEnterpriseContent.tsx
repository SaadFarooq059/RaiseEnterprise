"use client"

import LeftSidebar from "@/components/social-enterprise/LeftSidebar"
import HeaderSection from "@/components/social-enterprise/HeaderSection"
import PurpleCardsSection from "@/components/social-enterprise/PurpleCardsSection"
import GrowthSection from "@/components/social-enterprise/GrowthSection"
import MembershipChartsSection from "@/components/social-enterprise/MembershipChartsSection"
import MembershipCardsSection from "@/components/social-enterprise/MembershipCardsSection"
import ImpactAreasIntro from "@/components/social-enterprise/ImpactAreasIntro"
import InclusiveEmploymentSection from "@/components/social-enterprise/InclusiveEmploymentSection"
import ImpactCreated from "@/components/social-enterprise/TotalImpactCreated"
import InclusiveOpportunities from "@/components/social-enterprise/InclusiveOpportunities"
import CoreAttributesSection from "@/components/social-enterprise/CoreAttributesSection"
import MembershipCategoriesSection from "@/components/social-enterprise/MembershipCategoriesSection"
import ImpactAreasSection from "@/components/social-enterprise/ImpactAreasSection"
import MembersPortalSection from "@/components/social-enterprise/MembersPortalSection"
import SocialImpactReportSection from "@/components/social-enterprise/SocialImpactReportSection"
import HeroSectionSocial from "./herosectionsocial"

export default function SocialEnterpriseContent() {
  return (
    <>
       <HeroSectionSocial />
    <div className="relative min-h-screen bg-white" id="social-enterprise">
   
      
      {/* Gradient Header */}
      <div 
        className="absolute top-0 left-0 right-0 h-64 z-0"
        style={{ background: "linear-gradient(180deg, rgba(108, 7, 99, 0.8) 0%, rgba(108, 7, 99, 0.3) 70%, transparent 100%)" }}
      />
      
      <div className="flex flex-col md:flex-row relative z-10">
        {/* Left Side - Blank/White with Logo and Navigation */}
        <LeftSidebar />
        
        {/* Right Side - Report Content */}
        <div className="w-full md:w-2/3 min-h-screen overflow-hidden ml-0 md:ml-auto">
          {/* Main Content */}
          <div className="max-w-full pl-8 pr-6 md:pl-16 md:pr-12 lg:pl-20 lg:pr-16 pt-24 md:pt-32">
            <div id="se-landscape">
              <HeaderSection />
            </div>
            
            <PurpleCardsSection />
            
            <div className="my-6 md:my-8 h-px bg-[#A564F7]" />
            
            <GrowthSection />
            
            <MembershipChartsSection />
            
            <MembershipCardsSection />
            
            <div className="my-6 md:my-8 h-px bg-[#A564F7]" />
            
            <div id="membership-framework">
              <CoreAttributesSection />
            </div>
            
            
            
            <div id="membership-categories">
              <MembershipCategoriesSection />
            </div>
            
          
            
            <div id="impact-areas">
              <ImpactAreasSection />
            </div>
       
            <div id="membership-portal">
              <MembersPortalSection />
            </div>
            
               {/* Footer Section - Outside padding container */}
          <div id="social-impact-report">
            <SocialImpactReportSection />
          </div>
          </div>
          
       
        </div>
      </div>

  <div className="w-full -mt-60 md:-mt-72 lg:-mt-80 xl:-mt-56">
          <img 
            src="/social/herosocial.png" 
            alt="raiSE Social Enterprise Members Portal"
            className="w-full h-auto block" 
          />
        </div>
    </div>
    </>
  )
}