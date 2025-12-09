export default function MemberOnboardingSection() {
  return (
    <div className="relative px-4 md:px-6 lg:px-12 xl:px-[120px] pt-12 md:pt-24 lg:pt-32 xl:pt-[172px] pb-12 md:pb-20 lg:pb-32 xl:pb-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-[415px_1fr] gap-6 lg:gap-[90px]">
        {/* Left Sidebar - Empty space for SidebarNav */}
        <div className="hidden lg:block"></div>

        {/* Right Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[62px]">
          {/* Text Content */}
          <div className="flex-1 max-w-full lg:max-w-[404px]">
            <div className="text-[#FCD290] text-lg md:text-[20px] font-semibold font-['Manrope'] leading-5 mb-6 md:mb-[34px]">
              MEMBER EVENT
            </div>
            <h3 className="text-white text-2xl md:text-3xl lg:text-[36px] font-medium font-['Aleo'] leading-tight md:leading-[40px] mb-6 md:mb-[43px]">
              Members' Onboarding Sessions
            </h3>
            <p className="text-white text-base md:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[27px]">
              To ensure a smooth transition to the new framework and portal, we hosted nine onboarding sessions to help our Social Enterprises navigate the enhanced framework and new portal. <br/><br/>
              These sessions provided valuable opportunities for members to understand the rationale behind the new framework, gain a clearer picture of impact reporting, and explore new possibilities aligned with the expanded impact areas.<br/><br/>
              With the introduction of an expanded proportionality metric and aligned beneficiary list, this recognised a wider scope of impact created by our members which allowed members are now better equipped to track, measure, and articulate their social impact more effectively.
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col gap-4 md:gap-[18px]">
            <img 
              className="w-full lg:w-[360px] h-auto lg:h-[270px] rounded-[20px] lg:rounded-[33px] object-cover" 
              src="/showcasing-trailblazers/onboarding1.png" 
              alt="Onboarding session 1"
            />
            <img 
              className="w-full lg:w-[358px] h-auto lg:h-[269px] rounded-[20px] lg:rounded-[33px] object-cover" 
              src="/showcasing-trailblazers/onboarding2.png" 
              alt="Onboarding session 2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
