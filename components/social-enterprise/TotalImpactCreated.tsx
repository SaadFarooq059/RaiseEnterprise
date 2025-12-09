export default function ImpactCreated() {
  return (
    <div className="mb-12 md:mb-16">
      {/* Heading Section */}
      <div className="relative p-6 md:p-8 mb-6" style={{ minWidth: '280px' }}>
        {/* Impact Outcome Areas - 90 degrees behind H3 */}
        <div 
          className="absolute top-8 left-8 text-[#A564F7] text-base md:text-[20px] font-manrope font-bold leading-tight md:leading-[58px] whitespace-nowrap z-0" 
          style={{ transform: 'rotate(90deg)', transformOrigin: 'top left' }}
        >
         Impact Outcome Areas
        </div>
        
        {/* H3 Heading */}
        <h3 className="relative z-10 text-[#C2158F] text-2xl md:text-[32px] font-manrope font-bold leading-tight md:leading-[32px]">
         Total Impact Created
        </h3>
      </div>

      {/* Paragraph Below Heading */}
      <div className="px-6 md:px-8">
        <p className="text-black text-sm md:text-[16px] font-manrope font-medium leading-relaxed md:leading-[20.8px]">
          Within our three key impact areas, there are multiple pathways through which members can deliver impact, each supported by its own set of measurement metrics. The following section highlights the collective local impact achieved by our 358 Emerging and Leading Social Enterprise members in FY 2024 across these three key areas and their respective pathways.
        </p>
      </div>
    </div>
  )
}
