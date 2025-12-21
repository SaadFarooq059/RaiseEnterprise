"use client"
import { useState } from "react";
import {X} from "lucide-react";
export default function LeadingWithImpactSection() {
  const [showStats, setShowStats] = useState(false);
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 lg:py-16">
      {/* Adjusted grid gap and layout for better alignment */}
      <div className="flex flex-col lg:grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-12">
        
        {/* Left Column - Heading and Stats Card */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Main Title */}
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-serif font-medium leading-[44px] sm:leading-[52px] md:leading-[60px] lg:leading-[70.4px] text-center lg:text-left">
            <span className="text-white">Leading with </span>
            <span className="text-[#FCD290]">Impact</span>
          </h2>

          {/* Redefining Text - Increased margin-top to align with the 3rd paragraph ("Over the years...") */}
       <div className="mt-12 lg:mt-[110px] lg:ml-[120px] text-center lg:text-left">
            <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
              Redefining the Future of
            </div>
            {/* HOVER TRIGGER */}
            <div 
              className="cursor-pointer inline-block"
              onMouseEnter={() => setShowStats(true)}
            >
              <span className="text-[#FCD290] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
                Social Enterprise
              </span>
            </div>
          </div>

          {/* Stats Card */}
         {showStats && (
            <div className="w-full max-w-[280px] mt-4 lg:mt-8 lg:ml-[120px] mx-auto lg:mx-0 relative animate-in fade-in zoom-in duration-300">
              {/* Close Mark */}
              <button 
                onClick={() => setShowStats(false)}
                className="absolute -top-2 -right-2 bg-white  text-black rounded-full p-1 z-10 border border-white/20 transition-colors"
                aria-label="Close stats"
              >
                <X size={20} />
              </button>
              
              <img 
                src="/ceo/stats-card.png" 
                alt="Stats Card" 
                className="w-full h-auto rounded-lg "
              />
            </div>
          )}
        </div>

        {/* Right Column - Content */}
        {/* Added max-w-[720px] to prevent text from going too far right and improve readability */}
        <div className="space-y-8 lg:space-y-10 max-w-full lg:max-w-[1080px]">
          
          {/* Opening Messages */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
              In today's world, if your business can't lead with purpose and deliver real value to society, you'll be left behind. At raiSE, we believe that Social Enterprises (SE) are the businesses of the future,{" "}
              <span className="font-bold">leading</span>{" "}the way{" "}<span className="font-bold">with</span>{" "}social{" "}<span className="font-bold">impact</span>{" "}at the core of their business existence, not as an afterthought.
            </p>

            <p className="text-white text-[16px] md:text-lg font-medium font-['Manrope'] leading-[20.8px] md:leading-6">
              As we approach a decade of advocating for Social Entrepreneurship in Singapore, I reflect on the collective social ambition of not just founders, but also other key players in the ecosystem like funders, customers, suppliers, and employees notwithstanding, on charting the course of how businesses can be a vehicle for good. This past year, our work has been a silent testament to that ambition, creating standards for impact measurement and platforms that allow for greater transparency in impact reporting.
            </p>

            {/* Paragraph that "Redefining" now aligns with */}
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
          <div className="mt-6 md:mt-8">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-medium leading-[26px] md:leading-[29.9px] mb-3 md:mb-4">
              Refining Membership Categories
            </h3>
            <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify">
              Starting with the 'raiSE Impact Community' for aspiring startups to 'Emerging Social Enterprise', 'Leading Social Enterprise' for those creating impact and the highest level of recognition, 'Verified Leading Social Enterprise'. Corresponding logos were introduced for each membership category, so customers (both B-C and B-B) could better recognise our members at different stages of their impact journey.
            </p>
          </div>

          {/* Definition of SE Characteristics */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-medium leading-[26px] md:leading-[29.9px] mb-3 md:mb-4">
              Definition of SE Characteristics
            </h3>
            <div className="space-y-4 md:space-y-6">
              <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify">
                By defining the core characteristics of Social Enterprises: Intentionality, Additionality, and Proportionality (the I-A-P framework), raiSE has established a common language for identifying and recognising social enterprises in Singapore. In the absence of a legal registration framework, raiSE membership serves as a trusted benchmark, providing credibility to Social Enterprises and signaling to funders, partners, and customers that these businesses operate with genuine social impact at their core.
              </p>
              <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify">
                raiSE also played a pivotal role in the development of the Sustainable Philanthropy Framework, an initiative led by the National Council of Social Service (NCSS) in partnership with the National Volunteer and Philanthropy Centre (NVPC), the Ministry of Social and Family Development (MSF), and the SG Cares Office. This national framework provides corporates with a structured approach to measure the outcomes of their philanthropic efforts and articulate the 'Social' component of their Environmental, Social, and Governance (ESG) goals. raiSE's Social Enterprise members exemplify the principles of this framework, embedding socially responsible business practices into their operations.
              </p>
            </div>
          </div>

          {/* Social Impact Report */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-medium leading-[26px] md:leading-[29.9px] mb-3 md:mb-4">
              Social Impact Report
            </h3>
            <p className="text-[#FFFBFB] text-[16px] md:text-[18px] font-['Manrope'] font-medium leading-[20.8px] md:leading-[23.4px] text-justify">
              Transparency is key to building trust and credibility with key stakeholders; therefore, we have made our members' impact achievements visible to the public with the introduction of the Social Impact Report on raiSE's <span className="text-[#FCD290] font-bold underline">membership directory</span>. It is our hope that this will significantly boost SE credibility and opens doors to collaborations, funding opportunities, and the building pathways for integration into larger business ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
