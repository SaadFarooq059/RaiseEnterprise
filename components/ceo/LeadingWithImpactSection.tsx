"use client"

export default function LeadingWithImpactSection() {
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
        {/* Left - Heading and Stats Card */}
        <div className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-serif font-medium leading-[44px] sm:leading-[52px] md:leading-[60px] lg:leading-[70.4px] text-center lg:text-left">
            <span className="text-white">Leading with </span>
            <span className="text-[#FCD290]">Impact</span>
          </h2>

          {/* Redefining Text */}
          <div className="mt-6 lg:mt-12 lg:ml-[120px] text-center lg:text-left">
            <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Redefining the Future of</div>
            <div>
              <span className="text-[#FCD290] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Social Enterprise</span>
            </div>
          </div>

          {/* Stats Card */}
          <div className="w-full max-w-[280px] mt-6 lg:mt-8 lg:ml-[120px] mx-auto lg:mx-0">
            <img 
              src="/ceo/stats-card.png" 
              alt="Stats Card" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right - Content Stacked */}
        <div className="space-y-4 lg:space-y-4">
          {/* Opening Message */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
            In today's world, if your business can't lead with purpose and deliver real value to society, you'll be left behind. At raiSE, we believe that Social Enterprises (SE) are the businesses of the future,{" "}
            <span className="font-bold">leading</span>
            {" "}the way{" "}
            <span className="font-bold">with</span>
            {" "}social{" "}
            <span className="font-bold">impact</span>
            {" "}at the core of their business existence, not as an afterthought.
            </p>

            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
            As we approach a decade of advocating for Social Entrepreneurship in Singapore, I reflect on the collective social ambition of not just founders, but also other key players in the ecosystem like funders, customers, suppliers, and employees notwithstanding, on charting the course of how businesses can be a vehicle for good. This past year, our work has been a silent testament to that ambition, creating standards for impact measurement and platforms that allow for greater transparency in impact reporting.
            </p>
            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
            Over the years, we have witnessed firsthand how small ideas have blossomed into impactful ventures. We've grown the <span className="text-[#FCD290] font-bold underline">Social Enterprise sector</span> from a fledgling community of 300+ entities into a significant pillar within the broader business landscape, actively contributing to nation building. Because the needs of our Social Enterprise members have evolved, we endeavour to meet the progressive needs of our diverse and maturing membership.
            </p>

            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
            As SMEs and Corporates increasingly looked to raiSE's membership as a sign of credibility, we embarked on thoughtful changes to our membership support structures; ensuring our membership assessment reflected the richness of our members' impact outcomes and that it embodies the granularity that decision makers needed. After two years and close to 300 instances of consultations with our members, we arrived at a more reflective way of measuring and articulating impact.
            </p>

            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
            During Open Talk 2024 held on 28th August 2024, my colleagues and I shared our plans to enhance our support:
            </p>
          </div>

          {/* Refining Membership Categories */}
          <div className="mt-4 md:mt-6">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-medium leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
              Refining Membership Categories
            </h3>
            <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify">
              Starting with the 'raiSE Impact Community' for aspiring startups to 'Emerging Social Enterprise', 'Leading Social Enterprise' for those creating impact and the highest level of recognition, 'Verified Leading Social Enterprise'. Corresponding logos were introduced for each membership category, so customers (both B-C and B-B) could better recognise our members at different stages of their impact journey.
            </p>
          </div>

          {/* Definition of SE Characteristics */}
          <div className="mt-4 md:mt-6">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-medium leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
              Definition of SE Characteristics
            </h3>
            <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify mb-3 md:mb-4">
              By defining the core characteristics of Social Enterprises: Intentionality, Additionality, and Proportionality (the I-A-P framework), raiSE has established a common language for identifying and recognising social enterprises in Singapore. In the absence of a legal registration framework, raiSE membership serves as a trusted benchmark, providing credibility to Social Enterprises and signaling to funders, partners, and customers that these businesses operate with genuine social impact at their core.
            </p>
            <p className="text-[#FFFBFB] text-[18px] font-['Manrope'] font-medium leading-[23.4px] text-justify">
              raiSE also played a pivotal role in the development of the Sustainable Philanthropy Framework, an initiative led by the National Council of Social Service (NCSS) in partnership with the National Volunteer and Philanthropy Centre (NVPC), the Ministry of Social and Family Development (MSF), and the SG Cares Office. This national framework provides corporates with a structured approach to measure the outcomes of their philanthropic efforts and articulate the 'Social' component of their Environmental, Social, and Governance (ESG) goals. raiSE's Social Enterprise members exemplify the principles of this framework, embedding socially responsible business practices into their operations.
            </p>
          </div>

          {/* Social Impact Report */}
          <div className="mt-4 md:mt-6">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-medium leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
              Social Impact Report
            </h3>
            <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify">
              Transparency is key to building trust and credibility with key stakeholders; therefore, we have made our members' impact achievements visible to the public with the introduction of the Social Impact Report on raiSE's <span className="text-[#FCD290] font-bold underline">membership directory</span>. It is our hope that this will significantly boost SE credibility and opens doors to collaborations, funding opportunities, and the building pathways for integration into larger business ecosystems.
            </p>
          </div>
          {/* Venture Building Introduction - New Section */}
          <div className="mt-8">
           

      
           
          </div>
        </div>
      </div>
    </div>
  )
}
