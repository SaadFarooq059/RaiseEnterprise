'use client'

export default function ImpactAreasSection() {
  return (
    <div className="mb-12 md:mb-16 md:ml-16 lg:ml-24 xl:ml-32">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-6 md:mb-8 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[40px] text-[#9B2683] max-w-full md:max-w-[654px]">
          Our Impact Areas
        </h2>
      </div>

      {/* Description */}
      <div className="mb-12 md:mb-16 max-w-full md:max-w-[806px]">
        <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
          The revised membership framework reframes the impact outcome areas consolidating the previous eight impact outcome areas into three key areas which reflects the diverse ways Social Enterprises create impact. They are now better aligned to the impact indicators used to measure the diverse impact by our Social Enterprise Members consolidating the previous eight impact outcome areas into three key areas which reflects the diverse ways. The new impact outcome areas also allows us to better recognise the efforts by our Social Enterprises in supporting specific beneficiary needs and addressing market gaps. <br/><br/>
          As part of our revised framework, we have also streamlined how we categorise members' Impact Outcome Areas, providing greater clarity based on feedback we have received. This new approach more accurately reflects the diverse ways our members create change.
        </p>
      </div>

      {/* Impact Cards Image */}
    <div className="mb-8 md:mb-12 -ml-4 md:-ml-25">
      <img 
        src="/social/cards.png" 
        alt="Three Impact Areas Cards" 
        className="w-full md:max-w-[810px] h-auto object-contain"
      />
    </div>
    </div>
  )
}
