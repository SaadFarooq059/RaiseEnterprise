'use client'

export default function SocialImpactReportSection() {
  return (
   /* Added negative margins to pull the entire section to the far left */
    <div className="mb-12 md:mb-16 -ml-4 md:-ml-12 lg:-ml-20 xl:-ml-0">
      {/* Section Header */}
      {/* Reduced bottom margin to mb-4 / md:mb-6 */}
      <div className="mb-4 md:mb-6 -ml-10">
        <div className="mb-4 text-lg md:text-[20px] font-semibold text-[#A374FF]">NEW</div>
        <h2 className="mb-2 font-aleo text-2xl md:text-[36px] font-medium leading-tight md:leading-[40px] text-[#9B2683] max-w-full md:max-w-[771px]">
        Social Impact Report
        </h2>
      </div>

      {/* Portal Images */}
      {/* Adjusted margin between image and description to mb-6 / md:mb-8 */}
      
      {/* Description */}
      <div className="max-w-full md:max-w-[1100px] -ml-10">
        <p className="text-black text-base md:text-[18px] font-manrope font-medium leading-relaxed md:leading-[23.4px]">
          Within the next year, we will introduce a public Social Impact Report for our members on the raiSE directory. This report aims to provide a greater credibility and enhance transparency for our Social Enterprise members by allowing them to publicly disclose their impact outputs and outcomes, which were previously reported to raiSE and not made public. It would also allow for external partners to easily identify potential collaborators who align with their goals.
        </p>
      </div>


    </div>
    
  )
}
