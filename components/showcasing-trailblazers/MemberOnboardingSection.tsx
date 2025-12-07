export default function MemberOnboardingSection() {
  return (
    <div className="relative px-[120px] pt-[172px] pb-[150px]">
      <div className="grid grid-cols-[415px_1fr] gap-[90px]">
        {/* Left Sidebar - Empty space for SidebarNav */}
        <div></div>

        {/* Right Content */}
        <div className="flex gap-[62px]">
          {/* Text Content */}
          <div className="flex-1 max-w-[404px]">
            <div className="text-[#FCD290] text-[20px] font-semibold font-['Manrope'] leading-5 mb-[34px]">
              MEMBER EVENT
            </div>
            <h3 className="text-white text-[36px] font-medium font-['Aleo'] leading-[40px] mb-[43px]">
              Members' Onboarding Sessions
            </h3>
            <p className="text-white text-[18px] font-medium font-['Manrope'] leading-[27px]">
              To ensure a smooth transition to the new framework and portal, we hosted nine onboarding sessions to help our Social Enterprises navigate the enhanced framework and new portal. <br/><br/>
              These sessions provided valuable opportunities for members to understand the rationale behind the new framework, gain a clearer picture of impact reporting, and explore new possibilities aligned with the expanded impact areas.<br/><br/>
              With the introduction of an expanded proportionality metric and aligned beneficiary list, this recognised a wider scope of impact created by our members which allowed members are now better equipped to track, measure, and articulate their social impact more effectively.
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col gap-[18px]">
            <img 
              className="w-[360px] h-[270px] rounded-[33px] object-cover" 
              src="/showcasing-trailblazers/onboarding1.png" 
              alt="Onboarding session 1"
            />
            <img 
              className="w-[358px] h-[269px] rounded-[33px] object-cover" 
              src="/showcasing-trailblazers/onboarding2.png" 
              alt="Onboarding session 2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
