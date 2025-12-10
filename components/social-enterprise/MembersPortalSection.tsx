'use client'

export default function MembersPortalSection() {
  return (
    <div className="mb-12 md:mb-16 md:ml-16 lg:ml-24 xl:ml-32">
      {/* Section Header */}
      <div className="mb-2">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-2 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[40px] text-[#9B2683] max-w-full md:max-w-[771px]">
          Our New raiSE Members' Portal & Directory
        </h2>
      </div>

      {/* Portal Images */}
      <div className="mb-2">
        <img 
          src="/social/k1.jpg" 
          alt="Members Portal Screen"
          className="w-full md:w-[750px] lg:w-[900px] h-auto object-contain"
        />
      </div>

      {/* Description */}
      <div className="max-w-full md:max-w-[806px]">
        <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
          Alongside the membership framework enhancement, we also launched a refreshed members' portal to create a more efficient, centralised experience. This platform serves as a hub where members can seamlessly renew their membership applications, update their social impact reports and profiles, and access a suite of member-exclusive resources.<br/><br/>
          We have also launched a redesigned Social Enterprise directory, which provides greater clarity to our external stakeholders on the impact, products, and services offered by Social Enterprises. This increases their exposure to corporate procurement and collaboration opportunities.
        </p>
      </div>
    </div>
  )
}
