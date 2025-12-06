export default function EnergiSESection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#C084FC] to-[#DDD6FE] overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Top Content */}
      <div className="px-6 md:px-12 lg:px-[120px]">
        {/* Heading and Description Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-20">
          {/* Heading */}
          <h2 className="text-[#A78BFA] text-[40px] md:text-[52px] lg:text-[60px] font-medium font-['Aleo'] leading-[48px] md:leading-[60px] lg:leading-[70.4px]">
            raiSE<br/>EnergiSE <br/>2024
          </h2>
          
          {/* Description */}
          <div className="opacity-80 text-[#27272A] text-[16px] md:text-[18px] lg:text-[20px] font-medium font-['Manrope'] leading-[22px] md:leading-[24px] lg:leading-6">
            <p className="mb-6">
              The raiSE EnergiSE grant programme plays a pivotal role in nurturing early-stage Social Enterprises by equipping them with the resources to translate innovative ideas into impactful ventures. With 84 applications and 10 teams selected for a total commitment of $500,000, the programme demonstrates both strong demand and tangible support for emerging changemakers.
            </p>
            <p>
              The enthusiastic participation from Institutes of Higher Learning signals a rising interest in social entrepreneurship among students, while the diversity of funded industries— from healthcare to digital literacy—highlights the breadth of innovation shaping the next generation of Social Enterprises.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#A78BFA] my-8 lg:my-10"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
          {/* Stat 1 */}
          <div className="flex flex-col gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div>
              <span className="text-[#A78BFA] text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[60.5px]">10 </span>
              <span className="text-[#A78BFA] text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Manrope'] leading-9">Teams</span>
            </div>
            <p className="text-[#27272A] text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-6">
              Awarded funding
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="text-[#A78BFA] text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[60.5px]">
              $500,000
            </div>
            <p className="text-[#27272A] text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-6">
              Grant funding committed in total
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div>
              <span className="text-[#A78BFA] text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[60.5px]">84 </span>
              <span className="text-[#A78BFA] text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Manrope'] leading-9">Applications</span>
            </div>
            <p className="text-black text-[16px] md:text-[18px] font-normal font-['Manrope'] leading-6">
              Received for the raiSE energiSE Grant Programme
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-6 lg:gap-8 border-l-2 border-[#FCD290] pl-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div>
              <span className="text-[#A78BFA] text-[48px] md:text-[56px] lg:text-[60px] font-semibold font-['Manrope'] leading-[60.5px]">6 </span>
              <span className="text-[#A78BFA] text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Manrope'] leading-9">Industries</span>
            </div>
            <p className="text-[#27272A] text-[16px] md:text-[18px] font-medium font-['Manrope'] capitalize leading-6">
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

      {/* Testimonial Section */}
      <div className="mt-16 md:mt-20 lg:mt-24 px-6 md:px-12 lg:px-14 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-[#A78BFA] to-[#A78BFA]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Quote Icon Left */}
          <div className="hidden lg:block w-16 h-16 relative transform rotate-180">
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <rect x="12" y="12" width="40" height="40" fill="white" />
            </svg>
          </div>

          <div className="flex-1 flex flex-col gap-12 lg:gap-20">
            {/* Quote and Image */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <p className="flex-1 text-[#312E81] text-[20px] md:text-[26px] lg:text-[30px] font-normal font-['Aleo'] leading-[28px] md:leading-[36px] lg:leading-10">
                The raiSE energiSE grant has set myself and my team up for success not just through the provided capital but the network we've gained working with raiSE.
                <br/><br/>
                Through the workshops and networking events we've expanded our knowledge as first time business owners as well as guiding us when it comes to common and uncommon struggles.
                <br/><br/>
                Being able to grow and expand at the rate we are now is something that could not have been done without the energiSE grant and of course the support of all the staff from raiSE.
              </p>
              <img 
                className="w-full lg:w-[469px] h-auto lg:h-80 rounded-[20px] object-cover" 
                src="/venture-building/testimonial.jpg" 
                alt="Ilzymanshah Kamarudin"
              />
            </div>

            {/* Author Info */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
              <div className="flex flex-col gap-4 max-w-[384px]">
                <h3 className="text-[#FCD290] text-[28px] md:text-[32px] lg:text-[36px] font-semibold font-['Aleo'] capitalize leading-10">
                  Ilzymanshah Kamarudin
                </h3>
                <p className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium font-['Manrope'] leading-7 lg:leading-8">
                  Founder, Assistive Technologies, EnergiSE 2024 Cohort
                </p>
              </div>

              <div className="flex items-center gap-6 max-w-[384px]">
                <div className="w-px h-32 bg-[#FCD290] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
                <p className="flex-1 text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium font-['Manrope'] leading-7 lg:leading-8">
                  Assistive Technologies makes communication accessible for persons with disabilities through the use of technology.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Icon Right */}
          <div className="hidden lg:block w-16 h-16 relative">
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <rect x="12" y="12" width="40" height="40" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
