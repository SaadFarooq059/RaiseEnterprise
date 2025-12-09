export default function PurpoSEAgendaCard() {
  return (
    <div className="relative flex justify-end mb-8 lg:mb-[47px]">
      {/* Content Container - Attached to right */}
      <div className="relative w-full" style={{ maxWidth: '1340px' }}>
        {/* Purple Card Background */}
        <div 
          className="absolute inset-0"
          style={{ 
            opacity: 0.80, 
            background: 'linear-gradient(180deg, #2A167F 0%, #4C28E5 100%)', 
            borderTopLeftRadius: 20, 
            borderBottomLeftRadius: 20 
          }}
        ></div>

        {/* Images Section - Scrollable */}
        <div className="relative pt-4 md:pt-6 lg:pt-[23px] pb-12 md:pb-16 lg:pb-[85px] pl-4 md:pl-6 lg:pl-[25px]">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 md:gap-[14px] pb-4">
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda1.jpg" 
                alt="PurpoSE Agenda 1"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda2.png" 
                alt="PurpoSE Agenda 2"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda3.png" 
                alt="PurpoSE Agenda 3"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda4.png" 
                alt="PurpoSE Agenda 4"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda5.png" 
                alt="PurpoSE Agenda 5"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda6.png" 
                alt="PurpoSE Agenda 6"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda7.png" 
                alt="PurpoSE Agenda 7"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda8.png" 
                alt="PurpoSE Agenda 8"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda9.png" 
                alt="PurpoSE Agenda 9"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda10.png" 
                alt="PurpoSE Agenda 10"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda11.png" 
                alt="PurpoSE Agenda 11"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda12.png" 
                alt="PurpoSE Agenda 12"
              />
            </div>
          </div>
        </div>

        {/* Event Snapshot Badge and Stats */}
        <div className="relative px-4 md:px-6 lg:px-[25px] pb-12 md:pb-16 lg:pb-[80px]">
          {/* Badge */}
          <div className="w-[180px] md:w-[204px] h-[40px] md:h-[47px] bg-[#FCD290] rounded-[40px] flex items-center justify-center mb-8 md:mb-12 lg:mb-[71px]">
            <span className="text-[#2A167F] text-sm md:text-[15px] font-semibold font-['Aleo'] leading-[15px]">
              EVENT SNAPSHOT
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-[106px]">
            {/* Left - Description */}
            <div className="max-w-full lg:max-w-[446px]">
              <p className="text-white text-lg md:text-xl lg:text-[22px] font-medium font-['Manrope'] leading-relaxed md:leading-[28.6px]">
              At Echelon 2024, a tech business conference held on 15-16 May 2024, raiSE hosted a dedicated pavilion featuring seven of our Social Enterprises.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[26px] ml-0 lg:ml-[210px]">
              {/* Stat 1 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[40px] font-normal font-['Aleo'] leading-tight md:leading-[44px]">
                  7 SEs
                </div>
                <div className="max-w-full md:max-w-[172px] text-[#FFFBFB] text-sm md:text-base lg:text-[16px] font-medium font-['Manrope'] capitalize leading-tight md:leading-[20px]">
                  Showcased at raiSE's Pavilion
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[40px] font-normal font-['Aleo'] leading-tight md:leading-[44px]">
                  2-day
                </div>
                <div className="max-w-full md:max-w-[142px] text-[#FFFBFB] text-sm md:text-base lg:text-[16px] font-medium font-['Manrope'] capitalize leading-tight md:leading-[20px]">
                 Tech conference Spotlight social innovation
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[40px] font-normal font-['Aleo'] leading-tight md:leading-[44px]">
                 1 Message
                </div>
                <div className="max-w-full md:max-w-[142px] text-[#FFFBFB] text-sm md:text-base lg:text-[16px] font-medium font-['Manrope'] capitalize leading-tight md:leading-[20px]">
        Social Enterprise are the Future of business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
