export default function MemberOnboardingSection() {
  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-[120px] pt-12 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-36 2xl:pt-[172px] pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-36 2xl:pb-[150px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[415px_1fr] gap-6 lg:gap-16 xl:gap-[90px]">
          {/* Left Sidebar - Empty space for SidebarNav */}
          <div className="hidden lg:block"></div>
          
          {/* Right Content */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-[62px]">
            {/* Text Content */}
            <div className="flex-1 lg:max-w-[404px]">
              <div className="text-[#FCD290] text-base sm:text-lg md:text-[20px] font-semibold font-['Manrope'] leading-5 mb-4 sm:mb-6 md:mb-[34px]">
                MEMBER EVENT
              </div>
              
              <h3 className="text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-medium font-['Aleo'] leading-tight sm:leading-[1.3] md:leading-[40px] mb-4 sm:mb-6 md:mb-[43px]">
                Members' Onboarding Sessions
              </h3>
              
              <div className="text-white text-sm sm:text-base md:text-lg font-medium font-['Manrope'] leading-relaxed space-y-4 md:space-y-5">
                <p>
                  To ensure a smooth transition to the new framework and portal, we hosted nine onboarding sessions to help our Social Enterprises navigate the enhanced framework and new portal.
                </p>
                
                <p>
                  These sessions provided valuable opportunities for members to understand the rationale behind the new framework, gain a clearer picture of impact reporting, and explore new possibilities aligned with the expanded impact areas.
                </p>
                
                <p>
                  With the introduction of an expanded proportionality metric and aligned beneficiary list, this recognised a wider scope of impact created by our members which allowed members are now better equipped to track, measure, and articulate their social impact more effectively.
                </p>
              </div>
            </div>
            
            {/* Images */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-[18px] lg:flex-shrink-0">
              <img 
                className="w-full lg:w-[360px] h-auto aspect-[4/3] rounded-2xl lg:rounded-[33px] object-cover" 
                src="/showcasing-trailblazers/onboarding1.jpg" 
                alt="Onboarding session 1"
              />
              <img 
                className="w-full lg:w-[360px] h-auto aspect-[4/3] rounded-2xl lg:rounded-[33px] object-cover" 
                src="/showcasing-trailblazers/onboarding2.jpg" 
                alt="Onboarding session 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}