export default function InclusiveOpportunities() {
return (
    <div className="mb-12 md:mb-16 flex flex-col gap-6 md:gap-8">
        {/* Left Box - Heading with SECTOR GROWTH behind */}
        <div className="relative p-6 md:p-8">
            {/* SECTOR GROWTH - 90 degrees behind H3 */}
            <div 
                className="absolute top-8 left-8 text-[#A564F7] text-base md:text-[20px] font-manrope font-bold leading-tight md:leading-[58px] whitespace-nowrap z-0" 
                style={{ transform: 'rotate(90deg)', transformOrigin: 'top left' }}
            >
         Products and Services
            </div>
            
            {/* H3 Heading */}
            <h3 className="relative z-10 text-[#C2158F] text-2xl md:text-[32px] font-manrope font-bold leading-tight md:leading-[32px]">
     Inclusive Employment Opportunities
            </h3>
        </div>

        {/* Image */}
        <div className="w-full p-6 md:p-8">
            <img 
                src="/social/p2.jpg" 
                alt="Inclusive Employment Opportunities" 
                className="w-full h-auto rounded-[20px] object-cover"
            />
        </div>

         <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />
           <h3 className="relative z-10 text-[#C2158F] text-2xl md:text-[32px] font-manrope font-bold leading-tight md:leading-[32px]">
     Capacity Building Products and<br/>
Services for Social Organisations
            </h3>

               {/* Image */}
        <div className="w-full p-6 md:p-8">
            <img 
                src="/social/p3.jpg" 
                alt="Inclusive Employment Opportunities" 
                className="w-full h-auto rounded-[20px] object-cover"
            />
        </div>
<div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />

 <div className="relative p-6 md:p-8">
            {/* SECTOR GROWTH - 90 degrees behind H3 */}
            <div 
                className="absolute top-8 left-8 text-[#A564F7] text-base md:text-[20px] font-manrope font-bold leading-tight md:leading-[58px] whitespace-nowrap z-0" 
                style={{ transform: 'rotate(90deg)', transformOrigin: 'top left' }}
            >
         DIVERSE BENEFICIARIES
            </div>
            
            {/* H3 Heading */}
            <h3 className="relative z-10 text-[#C2158F] text-2xl md:text-[32px] font-manrope font-bold leading-tight md:leading-[32px]">
  Top 5 Beneficiary Profiles
            </h3>
            <div className="flex-1 p-6 md:p-8 text-left">
                <p className="text-black text-sm md:text-[16px] font-manrope font-medium leading-relaxed md:leading-[20.8px] max-w-sm">
                    Our Social Enterprise members work with a wide array of beneficiaries not only serving these diverse groups but also filling critical social gaps by providing services and opportunities that might otherwise be inaccessible and unaffordable.
                </p>
            </div>
        </div>
          <div className="w-full p-6 md:p-8">
            <img 
                src="/social/p4.jpg" 
                alt="Inclusive Employment Opportunities" 
                className="w-full h-auto rounded-[20px] object-cover"
            />
        </div>
          <div className="w-full p-6 md:p-8">
            <img 
                src="/social/p5.jpg" 
                alt="Inclusive Employment Opportunities" 
                className="w-full h-auto rounded-[20px] object-cover"
            />
        </div>
 <div className="mb-8 md:mb-12 h-px bg-[#A564F7]" />


  <div className="w-full p-6 md:p-8">
            <img 
                src="/social/p6.jpg" 
                alt="Inclusive Employment Opportunities" 
                className="w-full h-auto rounded-[20px] object-cover"
            />
        </div>
    </div>



)
}
