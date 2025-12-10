export default function CoreAttributesSection() {
  return (
    <div className="mb-12 md:mb-16 md:ml-8 lg:ml-12 xl:ml-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-6 md:mb-8 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[46px] text-[#9B2683] max-w-full md:max-w-[802px] whitespace-nowrap">
          Our 3 Core Defining Social Enterprise <span className="font-bold">Attributes</span>
        </h2>
      </div>

      {/* Main Image */}
      <div className="mb-6 md:mb-8">
        <img 
          src="/social/even1.jpg" 
          alt="Open Talk 2024" 
          className="w-full md:max-w-[806px] h-auto rounded-[20px] md:rounded-[33px] object-cover"
        />
        <p className="mt-3 md:mt-4 text-[#A564F7] text-xs md:text-[15px] font-manrope font-medium leading-relaxed md:leading-[20px] max-w-full md:max-w-[777px]">
          Image: Taken at Open Talk 2024 where we shared the enhancements to our membership framework and categories
        </p>
      </div>

      {/* Description Text */}
      <div className="mb-12 md:mb-16">
        <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px] max-w-full md:max-w-[817px]">
          This year at Open Talk 2024, we unveiled our enhanced Impact Framework to over 125 participants consisting of our Key Stakeholders and Social Enterprise Members. <br/><br/>
          The enhanced framework highlights the three key elements that define a Social Enterprise, namely (i) Intentionality, (ii) Additionality and (iii) Proportionality, and is referred to as I-A-P Framework in short. This framework helps Social Enterprises clearly articulate their social impact.
        </p>
      </div>

    {/* Attribute Cards Image */}
    <div className="mb-8 md:mb-12 md:-ml-8 lg:-ml-25">
      <img 
        src="/social/even2.png" 
        alt="I-A-P Framework Attributes" 
        className="w-full md:max-w-[900px] h-auto object-contain"
      />
    </div>
    </div>
  )
}
