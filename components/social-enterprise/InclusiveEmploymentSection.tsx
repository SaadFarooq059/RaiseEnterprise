export default function InclusiveEmploymentSection() {
  return (
    <div className="mb-12 md:mb-16 relative bg-white p-6 md:p-8" style={{ minHeight: '522px' }}>
      {/* Rotated Left Label */}
      <div className="hidden md:block absolute left-0 bottom-0" style={{ transform: 'rotate(-90deg)', transformOrigin: 'bottom left' }}>
        <h3 className="text-base md:text-[20px] font-manrope font-bold text-[#A564F7] uppercase whitespace-nowrap">
          Inclusive Employment Opportunities
        </h3>
      </div>

      {/* Mobile Label */}
      <div className="md:hidden mb-6">
        <h3 className="text-lg font-manrope font-bold text-[#A564F7] uppercase">
          Inclusive Employment Opportunities
        </h3>
      </div>

      {/* Left Content - Total Value */}
      <div className="md:absolute md:left-16 md:top-32 mb-8 md:mb-0">
        <div className="text-center mb-4">
          <div className="text-xl md:text-[24px] font-manrope font-bold text-[#9B2683] leading-tight md:leading-[31.2px]">$5.1 million</div>
          <div className="text-sm md:text-[16px] font-manrope font-normal text-[#9B2683] leading-relaxed md:leading-[20.8px] max-w-full md:max-w-[161px]">
            Total dollar value of income provided to beneficiaries through inclusive employment opportunities
          </div>
        </div>
      </div>

      {/* Center Content - Main Content Area */}
      <div className="md:ml-32 md:mr-24">
        {/* Sustained Income Opportunities */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-4 md:mb-6">
            <h4 className="text-lg md:text-[20px] font-manrope font-bold text-[#A564F7]">Sustained Income Opportunities</h4>
          </div>

          {/* Two buttons stacked */}
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="px-3 md:px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center text-black text-base md:text-[18px] font-manrope font-bold">
                Direct Permanent Employment
              </div>
            </div>
            
            <div className="px-3 md:px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center text-black text-base md:text-[18px] font-manrope font-bold">
                Third-party Placement Opportunities
              </div>
            </div>
          </div>

          {/* Helper text for buttons */}
          <div className="text-right text-xs md:text-[12px] font-manrope font-medium text-black leading-relaxed md:leading-[15.6px] max-w-full md:max-w-[185px] ml-auto mt-2">
            Number of beneficiaries offered<br/>permanent employment roles
          </div>
          <div className="text-right text-xs md:text-[12px] font-manrope font-medium text-black leading-relaxed md:leading-[15.6px] max-w-full md:max-w-[185px] ml-auto mt-2">
            Number of successful<br/>beneficiary placements
          </div>
        </div>

        {/* Supplementary Income Opportunities */}
        <div>
          <div className="text-center mb-4 md:mb-6">
            <h4 className="text-lg md:text-[20px] font-manrope font-bold text-[#A564F7]">Supplementary Income Opportunities</h4>
          </div>

          {/* Four buttons in 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="px-3 md:px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center text-black text-sm md:text-[18px] font-manrope font-bold">
                Contract/ Freelance Employment
              </div>
            </div>
            <div className="px-3 md:px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center text-black text-sm md:text-[18px] font-manrope font-bold">
                Work Engagement Via 3rd-party Organisations
              </div>
            </div>
            <div className="px-3 md:px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center text-black text-sm md:text-[18px] font-manrope font-bold">
                Sales Platform For Beneficiary Access to Markets
              </div>
            </div>
            <div className="px-3 md:px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center text-black text-sm md:text-[18px] font-manrope font-bold">
                Sustained Procurement from Beneficiary Suppliers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Number Display */}
      <div className="md:absolute md:right-24 md:top-32 text-center mt-8 md:mt-0">
        <div className="text-2xl md:text-[32px] font-manrope font-bold text-[#A564F7] mb-4">1,296</div>
        <div className="w-4 h-20 border-2 border-[#A564F7] mx-auto"></div>
      </div>
    </div>
  )
}
