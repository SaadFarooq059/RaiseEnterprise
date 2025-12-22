export default function EnergiSEStatsSection() {
  return (
    <section 
      className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #F191FA 0%, #EFE2FF 25%)' }}
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-[120px]">
        <div className="mx-auto max-w-[1200px]">
          {/* Heading and Description Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-[260px_1fr] xl:grid-cols-[320px_1fr] gap-6 sm:gap-8 lg:gap-14">
            {/* Heading */}
            <h2 className="text-[#A374FF] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-medium font-['Aleo'] leading-tight">
              raiSE<br/>EnergiSE <br/>2024
            </h2>
            
            {/* Description */}
            <div className="opacity-80 text-[#27272A] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium font-['Manrope'] leading-relaxed">
              <p className="mb-4 sm:mb-6">
                The raiSE EnergiSE grant programme plays a pivotal role in nurturing early-stage Social Enterprises by equipping them with the resources to translate innovative ideas into impactful ventures. With 84 applications and 10 teams selected for a total commitment of $500,000, the programme demonstrates both strong demand and tangible support for emerging changemakers.
              </p>
              <p>
                The enthusiastic participation from Institutes of Higher Learning signals a rising interest in social entrepreneurship among students, while the diversity of funded industries— from healthcare to digital literacy—highlights the breadth of innovation shaping the next generation of Social Enterprises.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-[#A78BFA] my-6 sm:my-8 lg:my-10"></div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {/* Stat 1 */}
            <div className="flex flex-col gap-3 sm:gap-4 border-t border-[#FCD290] pt-4 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-5 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-[#A78BFA] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold font-['Manrope'] leading-tight">10</span>
                <span className="text-[#A78BFA] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-['Manrope'] leading-tight">Teams</span>
              </div>
              <p className="text-[#27272A] text-[13px] sm:text-[15px] md:text-[17px] font-medium font-['Manrope'] leading-relaxed">
                Awarded funding
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-3 sm:gap-4 border-t border-[#FCD290] pt-4 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-5">
              <div className="text-[#A78BFA] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold font-['Manrope'] leading-tight">
                <span>$500,</span>
                <span className="block xl:inline">000</span>
              </div>
              <p className="text-[#27272A] text-[13px] sm:text-[15px] md:text-[17px] font-medium font-['Manrope'] leading-relaxed">
                Grant funding committed in total
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-3 sm:gap-4 border-t border-[#FCD290] pt-4 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-[#A78BFA] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold font-['Manrope'] leading-tight">84</span>
                <span className="text-[#A78BFA] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-['Manrope'] leading-tight">Applications</span>
              </div>
              <p className="text-black text-[13px] sm:text-[15px] md:text-[17px] font-normal font-['Manrope'] leading-relaxed">
                Received for the raiSE energiSE Grant Programme
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-3 sm:gap-4 border-t border-[#FCD290] pt-4 sm:border-t-0 sm:border-l-2 sm:pt-0 sm:pl-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-[#A78BFA] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold font-['Manrope'] leading-tight">6</span>
                <span className="text-[#A78BFA] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-['Manrope'] leading-tight">Industries</span>
              </div>
              <p className="text-[#27272A] text-[13px] sm:text-[15px] md:text-[17px] font-medium font-['Manrope'] capitalize leading-relaxed">
                covered by funded projects:<br/>
                Healthcare<br/>
                Media<br/>
                Fractional Consulting<br/>
                Wellness<br/>
                Communication Tools<br/>
                Digital Literacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
