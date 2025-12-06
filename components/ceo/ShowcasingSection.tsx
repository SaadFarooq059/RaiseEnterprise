"use client"

export default function ShowcasingSection() {
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-6 md:py-8">
      <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
        {/* Left - Heading and Stats */}
           <div className="lg:ml-[120px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-[#FCD290] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Showcasing</div>
            <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Social Enterprise Trailblazers</div>
          </div>
        {/* Right - Content */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
            As part of our effort to advocate for Social Enterprises, raising awareness has always been an integral part of our work. Admittedly, the journey of advocating for our trailblazers has been a shared one, many partners have come forward to work hand-in-hand to uplift our Social Enterprise members through various programmes.
          </p>

          {/* The PurpoSE Agenda 2024 */}
          <div className="mt-4 md:mt-6">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
              The PurpoSE Agenda 2024
            </h3>
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
              On 3 December 2024, we held the second edition of our flagship event, The PurpoSE Agenda, to spark bold conversations on collaborative financing models. The event brought together ecosystem partners, corporate stakeholders, venture capitalists, impact investors, and Social Enterprises who are leading the way in converging profit and purpose.
            </p>
          </div>

          {/* Strategic Partnerships */}
          <div className="mt-4 md:mt-6">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
              Strategic Partnerships
            </h3>
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
              On 15 and 16 May 2024, raiSE hosted a &apos;Social Enterprise: The Future of Business&apos; themed pavilion featuring seven of our Social Enterprises at tech business conference, Echelon, as part of our collaboration with e27 to highlight the growing relevance of impact driven business models and the need to start early.
            </p>
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify mt-3 md:mt-4">
              On 28 March 2025, in partnership with ACE.SG, we co-organised the International Women&apos;s Day Accelerate Action Conference, which included a Social Enterprise breakout track on Collaboration over Competition, drawing 275 attendees to celebrate the impact of Women Social Entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
