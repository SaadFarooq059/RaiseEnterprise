'use client'

export default function MembersPortalSection() {
  return (
    /* Added negative margins to pull the entire section to the far left */
    <div className="mb-12 md:mb-16 -ml-4 md:-ml-12 lg:-ml-20 xl:-ml-12">
      {/* Section Header */}
      {/* Reduced bottom margin to mb-4 / md:mb-6 */}
      <div className="mb-4 md:mb-6">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-2 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[40px] text-[#9B2683] max-w-full md:max-w-[771px]">
          Our New raiSE Members' Portal & Directory
        </h2>
      </div>

      {/* Portal Images */}
      {/* Adjusted margin between image and description to mb-6 / md:mb-8 */}
      <div className="mb-6 md:mb-8 -ml-4 md:-ml-12 lg:-ml-20 xl:-ml-22">
        <img 
          src="/social/k1.svg" 
          alt="Members Portal Screen"
          className="w-full md:w-[750px] lg:w-[1150px] h-auto object-contain"
        />
      </div>

      {/* Description */}
      <div className="max-w-full md:max-w-[1100px]">
        <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
          Alongside the membership framework enhancement, we also launched a refreshed members' portal to create a more efficient, centralised experience. This platform serves as a hub where members can seamlessly renew their membership applications, update their social impact reports and profiles, and access a suite of member-exclusive resources.<br/><br/>
          We have also launched a redesigned Social Enterprise directory, which provides greater clarity to our external stakeholders on the impact, products, and services offered by Social Enterprises. This increases their exposure to corporate procurement and collaboration opportunities.
        </p>
      </div>
    </div>
  )
}