export default function EnergiSEStatsSection() {
  return (
    <section 
      className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #F191FA 0%, #EFE2FF 25%)' }}
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-[120px]">
        {/* Heading and Description Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-6 sm:gap-8 lg:gap-20">
          {/* Heading */}
          <h2 className="text-[#A374FF] text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-medium font-['Aleo'] leading-[38px] sm:leading-[48px] md:leading-[60px] lg:leading-[70.4px]">
            raiSE<br/>EnergiSE <br/>2024
          </h2>
          
          {/* Description */}
          <div className="opacity-80 text-[#27272A] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium font-['Manrope'] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-5">
          {/* Stat 1 */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-4 sm:pl-5">
            <div>
              <span className="text-[#A78BFA] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[48px] sm:leading-[56px] md:leading-[60.5px]">10 </span>
              <span className="text-[#A78BFA] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Manrope'] leading-7 sm:leading-9">Teams</span>
            </div>
            <p className="text-[#27272A] text-[14px] sm:text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-5 sm:leading-6">
              Awarded funding
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-4 sm:pl-5">
            <div className="text-[#A78BFA] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[48px] sm:leading-[56px] md:leading-[60.5px]">
              $500,000
            </div>
            <p className="text-[#27272A] text-[14px] sm:text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-5 sm:leading-6">
              Grant funding committed in total
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-4 sm:pl-5">
            <div>
              <span className="text-[#A78BFA] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[48px] sm:leading-[56px] md:leading-[60.5px]">84 </span>
              <span className="text-[#A78BFA] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Manrope'] leading-7 sm:leading-9">Applications</span>
            </div>
            <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] leading-5 sm:leading-6">
              Received for the raiSE energiSE Grant Programme
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-4 sm:pl-5">
            <div>
              <span className="text-[#A78BFA] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[48px] sm:leading-[56px] md:leading-[60.5px]">6 </span>
              <span className="text-[#A78BFA] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Manrope'] leading-7 sm:leading-9">Industries</span>
            </div>
            <p className="text-[#27272A] text-[14px] sm:text-[16px] md:text-[18px] font-medium font-['Manrope'] capitalize leading-5 sm:leading-6">
              covered by funded projects:<br/>
              Healthcare<br/>
              Media <br/>
              Fractional Consulting<br/>
              Wellness<br/>
              Communication Tools<br/>
              Digital Literacy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
