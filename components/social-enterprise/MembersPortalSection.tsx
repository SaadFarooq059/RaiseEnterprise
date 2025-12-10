'use client'

export default function MembersPortalSection() {
  return (
    <div className="mb-12 md:mb-16 md:ml-16 lg:ml-24 xl:ml-32">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-6 md:mb-8 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[40px] text-[#9B2683] max-w-full md:max-w-[771px]">
          Our New raiSE Members' Portal & Directory
        </h2>
      </div>

      {/* Portal Images */}
      <div className="mb-8 md:mb-12 relative">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          {/* First Image with Icon */}
          <div className="relative flex-shrink-0">
            <img 
              src="/social/portal-screen-1.png" 
              alt="Members Portal Screen 1"
              className="w-full md:w-[273px] h-auto object-contain"
            />
            <div className="absolute top-[12px] left-[10px] w-[35px] md:w-[41px] h-[35px] md:h-[41px] rounded-full border border-[#767676] shadow-md bg-white flex items-center justify-center">
              <img 
                src="/social/portal-icon.png" 
                alt="Portal Icon"
                className="w-[25px] md:w-[30px] h-[25px] md:h-[30px] object-contain"
              />
            </div>
          </div>
          
          {/* Second Image */}
          <img 
            src="/social/portal-screen-2.png" 
            alt="Members Portal Screen 2"
            className="w-full md:w-[257px] h-auto object-contain"
          />
          
          {/* Third Image */}
          <img 
            src="/social/portal-screen-3.png" 
            alt="Members Portal Screen 3"
            className="w-full md:w-[288px] h-auto object-contain"
          />
        </div>
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
