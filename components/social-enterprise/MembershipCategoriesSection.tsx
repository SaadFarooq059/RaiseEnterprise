'use client'

export default function MembershipCategoriesSection() {
  return (
    <div className="mb-12 md:mb-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12 -ml-0 md:-ml-0">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-6 md:mb-8 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[44px] text-[#9B2683]">
          <span className="font-normal">Augmented </span>
          <span className="font-normal">Membership Categories</span>
        </h2>
      </div>

      {/* Description */}
      <div className="mb-12 md:mb-16 max-w-full md:max-w-[806px] -ml-0 md:-ml-0">
        <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
          Our enhanced framework augmented our membership categories, allowing raiSE to provide more targeted support according to the members' growth stages. These new categories creates a clear pathway for Social Enterprises at every stage: from a promising idea to a verified leader in social impact.<br/><br/>
          In the past year, we launched a new suite of membership logos. These designs are a visual representation of Social Enterprises at various stages of their journey. They were created to symbolise our belief that Social Enterprises are the future of business and to reflect the progress and growth of the sector.<br/><br/>
          As members advance, the logos progress in boldness and colour. This visual journey is crafted to grant the highest prominence and credibility to our most established members. The Verified Leading logo, for instance, includes a tick, which is a powerful symbol that their impact has been officially verified by raiSE.
        </p>
      </div>

      {/* Membership Categories */}
      <div className="space-y-8 md:space-y-0">
        {/* raiSE Impact Community */}
        <div className="mb-8 md:mb-12">
          <div className="border-t border-[#9B2683] mb-6 md:mb-8 max-w-[90%]" />
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 -ml-8 md:-ml-16">
            <div className="flex-shrink-0 flex items-start -mt-22">
              <img 
                src="/social/logo1.png" 
                alt="raiSE Impact Community Logo"
                className="w-[200px] md:w-[250px] h-auto object-contain"
              />
            </div>
            <div className="flex-1 max-w-full md:max-w-[596px] flex flex-col justify-start">
              <h3 className="text-[#9B2683] text-xl md:text-[24px] font-manrope font-bold leading-tight md:leading-[24px] mb-1">
                raiSE Impact Community
              </h3>
              <div className="mb-4 md:mb-6">
                <p className="text-[#A564F7] text-lg md:text-[20px] font-manrope font-bold leading-tight md:leading-[26px] mb-3">
                  Signalling of Intentionality
                </p>
                <p className="text-black text-base md:text-[18px] font-manrope font-bold leading-tight md:leading-[23.4px] mb-2">
                  Criteria
                </p>
                <ul className="list-disc pl-5 text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px] mb-2 space-y-1">
                  <li>ACRA-registered company</li>
                  <li>Reflecting intentionality to integrate social impact strategically into business model</li>
                </ul>
              </div>
              <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
                We nurture early ventures to embed social impact at their core, building a strong pipeline of future Social Enterprises. Members get foundational, hands-on guidance, quarterly networking and learning journeys introducing our frameworks, community, and the Social Enterprise model canvas.
              </p>
            </div>
          </div>
        </div>

        {/* Emerging Social Enterprises */}
        <div className="mb-8 md:mb-12">
          <div className="border-t border-[#9B2683] mb-6 md:mb-8 max-w-[90%]" />
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 -ml-8 md:-ml-16">
            <div className="flex-shrink-0 flex items-start -mt-22">
              <img 
                src="/social/logo2.png" 
                alt="Emerging Social Enterprises Logo"
                className="w-[200px] md:w-[250px] h-auto object-contain"
              />
            </div>
            <div className="flex-1 max-w-full md:max-w-[603px] flex flex-col justify-start">
              <h3 className="text-[#9B2683] text-xl md:text-[24px] font-manrope font-bold leading-tight md:leading-[24px] mb-1">
                Emerging Social Enterprises
              </h3>
              <div className="mb-4 md:mb-6">
                <p className="text-[#A564F7] text-lg md:text-[20px] font-manrope font-bold leading-tight md:leading-[26px] mb-3">
                  Committing to Additionality
                </p>
                <p className="text-black text-base md:text-[18px] font-manrope font-bold leading-tight md:leading-[23.4px] mb-2">
                  Criteria
                </p>
                <ul className="list-disc pl-5 text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px] mb-2 space-y-1">
                  <li>&gt; 3 months of social impact creating and measuring</li>
                  <li>Revenue generating business</li>
                  <li>Incorporated sustained efforts to address identified social gaps and impact areas</li>
                </ul>
              </div>
              <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
                Members benefit from impact-focused capacity-building, peer learning, and mentorship programmes designed to solidify their foundation for next-stage growth.
              </p>
            </div>
          </div>
        </div>

        {/* Leading Social Enterprises */}
        <div className="mb-8 md:mb-12">
          <div className="border-t border-[#9B2683] mb-6 md:mb-8 max-w-[90%]" />
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 -ml-8 md:-ml-16">
            <div className="flex-shrink-0 flex items-start -mt-22">
              <img 
                src="/social/logo3.png" 
                alt="Leading Social Enterprises Logo"
                className="w-[200px] md:w-[250px] h-auto object-contain"
              />
            </div>
            <div className="flex-1 max-w-full md:max-w-[624px] flex flex-col justify-start">
              <h3 className="text-[#9B2683] text-xl md:text-[24px] font-manrope font-bold leading-tight md:leading-[24px] mb-1">
                Leading Social Enterprises
              </h3>
              <div className="mb-4 md:mb-6">
                <p className="text-[#A564F7] text-lg md:text-[20px] font-manrope font-bold leading-tight md:leading-[26px] mb-3">
                  Achieving of Proportionality
                </p>
                <p className="text-black text-base md:text-[18px] font-manrope font-bold leading-tight md:leading-[23.4px] mb-2">
                  Criteria
                </p>
                <ul className="list-disc pl-5 text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px] mb-2 space-y-1">
                  <li>&gt; 1 year of creating and measuring social impact</li>
                  <li>20% proportionality of social impact relative to size of business</li>
                  <li>Minimally $250,000 annual revenue</li>
                  <li>Achieved &gt;50% trading revenue</li>
                </ul>
              </div>
              <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
                This category reflects Social Enterprises that have demonstrated a deep integration of all three principles of our framework—<span className="font-bold">Intentionality</span>, <span className="font-bold">Additionality</span>, and <span className="font-bold">Proportionality</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Leading Social Enterprises */}
        <div className="mb-8 md:mb-12 -ml-8 md:-ml-16">
          <div className="bg-white rounded-[20px] md:rounded-[33px] p-6 md:p-8" style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.25)' }}>
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5">
              <div className="flex-shrink-0 flex items-start -mt-22">
                <img 
                  src="/social/logo4.png" 
                  alt="Verified Leading Social Enterprises Logo"
                  className="w-[200px] md:w-[250px] h-auto object-contain"
                />
              </div>
              <div className="flex-1 max-w-full md:max-w-[562px] flex flex-col justify-start">
                <h3 className="text-[#9B2683] text-xl md:text-[24px] font-manrope font-bold leading-tight md:leading-[24px] mb-1">
                  Verified Leading Social Enterprises
                </h3>
                <div className="mb-4 md:mb-6">
                  <p className="text-[#A564FF] text-lg md:text-[20px] font-manrope font-bold leading-tight md:leading-[26px] mb-3">
                    Verifying of Impact
                  </p>
                  <p className="text-black text-base md:text-[18px] font-manrope font-bold leading-tight md:leading-[23.4px] mb-2">
                    Criteria
                  </p>
                  <ul className="list-disc pl-5 text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px] mb-2 space-y-1">
                    <li>Leading Social Enterprise for &gt; 1 year</li>
                    <li>Successfully completed raiSE verification process to validate Social Impact and Financial Sustainability</li>
                  </ul>
                </div>
                <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
                  The Verified Leading Social Enterprise category champions established Social Enterprises with validated impact and financial sustainability. This recognition is built on credibility, sustainability, and sector leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}