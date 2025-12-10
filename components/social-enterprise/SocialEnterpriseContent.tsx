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

export default function SocialEnterpriseContent() {
  return (
    <div className="relative min-h-screen bg-white" id="social-enterprise">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Blank/White with Logo and Navigation */}
        <LeftSidebar />

        {/* Right Side - Report Content */}
        <div className="w-full md:w-2/3 min-h-screen bg-white overflow-hidden ml-0 md:ml-auto">
          {/* Main Content */}
          <div className="max-w-full px-6 md:px-12 pt-24 md:pt-32">
            <HeaderSection />
            
            <PurpleCardsSection />

            <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />

            <GrowthSection />

            <MembershipChartsSection />

            <MembershipCardsSection />
            
            <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />

            <CoreAttributesSection />

            <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />

            <MembershipCategoriesSection />

            <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />

            <ImpactAreasSection />

            <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />

            <MembersPortalSection />

            <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />
          </div>

          {/* Footer Section - Outside padding container */}
          <SocialImpactReportSection />
        </div>
      </div>
    </div>
  )
}
