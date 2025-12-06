"use client"

export default function AdvocacyPartnershipsSection() {
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
        {/* Left - Heading */}
        <div className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
      
          <div className="w-full max-w-[280px] lg:ml-[120px] mx-auto lg:mx-0">
            <img 
              src="/ceo/showcasing-stats.png" 
              alt="Showcasing Stats" 
              className="w-full h-auto"
            />
          </div>
        </div>
        

        {/* Right - Content */}
        <div className="space-y-4 md:space-y-6">
          {/* Increasing Visibility */}
          <div className="mt-4 md:mt-6">
            <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
              Increasing Visibility
            </h3>
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
              We believe in celebrating and <span className="text-[#FCD290] font-bold underline">amplifying the impactful work of our members.</span> By leveraging our platforms and forging key partnerships, we enhanced the public profile of our Social Enterprises, connected them with a broader audience, and enhanced recognition for their impact. We congratulate our members featured in the Gen.T list by Singapore Tatler and SL25 by the Stewardship Asia Centre, to name a few.
            </p>
            <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
              I want to extend my sincere thanks to our valued ecosystem partners who have acknowledged raiSE&apos;s frameworks, recognised the impact created by our Social Enterprise members and increased the visibility of our SE members.
            </p>
          </div>

          {/* Closing Message */}
          <div className="mt-6 md:mt-8">
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
              In closing, I am grateful to those that have supported raiSE and uplifted the SE ecosystem and share that we are excited about the journey ahead as raiSE celebrates its 10th Anniversary. We owe our gratitude to the Ministry of Social and Family Development (MSF) and the National Council of Social Service (NCSS) for their steadfast support and to our Chairperson and Board members for their invaluable counsel and dedicated contributions, over the years. I would also like to extend my heartfelt thanks to the raiSE team, both past and present, whose passion, resilience, and unwavering commitment have been the driving force behind all that we have achieved together.
            </p>
            <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
              Last but not least, I thank our Social Enterprise members for trusting us to journey with you. Your vision, courage, and determination inspire us every day and remind us why we do what we do. With hard-earned lessons and deeper insights, my team and I are ready to forge ahead with renewed purpose for the next decade, <span className="text-[#FCD290]">leading</span> our SE members <span className="text-[#FCD290]">with</span> vision, resilience, and <span className="text-[#FCD290]">impact</span>.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6 md:mt-8">
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px]">
              Sincerely,
            </p>
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] mt-3 md:mt-4">
              Alfie Othman<br/>
              CEO, raiSE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
