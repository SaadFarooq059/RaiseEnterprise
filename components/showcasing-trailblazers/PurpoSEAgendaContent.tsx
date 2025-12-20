export default function PurpoSEAgendaContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[415px_1fr] gap-0 lg:gap-[90px]">
      {/* Left Sidebar - Empty space for SidebarNav */}
      <div className="hidden lg:block"></div>

      {/* Right Content */}
      <div>
        {/* First Paragraph */}
        <div className="max-w-full lg:max-w-[805px] mb-6 md:mb-8 lg:mb-10">
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
            On 3 December 2024, we held the second edition of our flagship event, The PurpoSE Agenda, to spark bold conversations on collaborative financing models. The event brought together ecosystem partners, corporate stakeholders, venture capitalists, impact investors, and Social Enterprises who are leading the way in converging profit and purpose.<br/><br/>
            The morning opened with a closed-door session for funders and ecosystem partners, featuring a panel on "The Ecosystem Effect: Driving Catalytic Growth" and the announcement of the raiSE EnergiSE Grant recipients, each awarded $50,000 to scale their impact:
          </p>
        </div>

        {/* Recipients Card */}
         <div className="w-full lg:w-[812px] h-auto lg:h-[266px] bg-[#A564F7] rounded-[25px] md:rounded-[40px] lg:rounded-[50px] mb-6 md:mb-8 lg:mb-10 px-6 md:px-12 lg:px-[62px] py-6 md:py-8 lg:py-[40px]">
      <h3 className="text-[#FCD290] text-xl md:text-2xl lg:text-[25px] font-semibold font-['Manrope'] leading-relaxed md:leading-[36px] tracking-wide mb-4 md:mb-6 lg:mb-[26px]">
        raiSE EnergiSE Grant Recipients
      </h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-[140px]">
        <div className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
          • Assistive Technologies<br/>
          • Blind Mice Media<br/>
          • ShareRight<br/>
          • Digi-Up! Studio<br/>
          • Speedback
        </div>
        <div className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
          • HeartBid<br/>
          • HomePal<br/>
          • Little Changemakers<br/>
          • Omnilabs Research<br/>
          • The Courage Chapter
        </div>
      </div>
    </div>
        {/* Second Paragraph */}
        <div className="max-w-full lg:max-w-[809px]">
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
            The afternoon brought the wider community together with a fireside chat exploring whether "social" and "enterprise" are complementary or contradictory, followed by Ask-Me-Anything (AMA) circles led by nine Social Entrepreneurs. These intimate conversations gave guests direct insight into the realities of running a Social Enterprise while fostering peer learning and connection across the community.<br/><br/>
            With its vibrant networking atmosphere and the energy from the ecosystem fueling catalytic growth, The PurpoSE Agenda stood as more than a conference. It was a strategic convergence of purpose-driven capital, Social Enterprises, and ecosystem leaders accelerating the growth of Social Enterprises in Singapore while reinforcing raiSE's commitment and leadership in shaping the future of impact investing and social entrepreneurship.
          </p>
        </div>
      </div>
    </div>
  )
}
