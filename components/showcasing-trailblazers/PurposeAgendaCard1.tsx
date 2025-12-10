export default function PurpoSEAgendaCard1() {
  return (
    <div className="relative flex justify-end mb-[47px]">
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
        <div className="relative pt-[23px] pb-[85px] pl-[25px]">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-[14px] pb-4">
              <img 
                className="flex-shrink-0 w-[675px] h-[450px] rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/network1.png "
                alt="PurpoSE Agenda 1"
              />
              <img 
                className="flex-shrink-0 w-[675px] h-[450px] rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/network2.png" 
                alt="PurpoSE Agenda 2"
              />
              <img 
                className="flex-shrink-0 w-[675px] h-[450px] rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/network3.png" 
                alt="PurpoSE Agenda 3"
              />
              <img 
                className="flex-shrink-0 w-[675px] h-[450px] rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/network4.png" 
                alt="PurpoSE Agenda 4"
              />
              <img 
                className="flex-shrink-0 w-[675px] h-[450px] rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/network5.png" 
                alt="PurpoSE Agenda 5"
              />
              <img 
                className="flex-shrink-0 w-[675px] h-[450px] rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/network6.png" 
                alt="PurpoSE Agenda 6"
              />
              
            </div>
          </div>
        </div>

        {/* Event Snapshot Badge and Stats */}
        <div className="relative px-[25px] pb-[80px]">
          {/* Badge */}
          <div className="w-[204px] h-[47px] bg-[#FCD290] rounded-[40px] flex items-center justify-center mb-[71px]">
            <span className="text-[#2A167F] text-[15px] font-semibold font-['Aleo'] leading-[15px]">
              EVENT SNAPSHOT
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="flex gap-[106px]">
            {/* Left - Description */}
            <div className="max-w-[446px]">
              <p className="text-white text-[22px] font-medium font-['Manrope'] leading-[28.6px]">
                The PurpoSE Agenda provided a high-profile platform for Social Enterprises to connect with investors, stakeholders, and partners, while spotlighting panelists, entrepreneurs, leaders, and students across our channels.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-[26px] ml-[210px]">
              {/* Stat 1 */}
              <div className="flex items-start gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-[40px] font-normal font-['Aleo'] leading-[44px]">
                  $50K
                </div>
                <div className="max-w-[172px] text-[#FFFBFB] text-[16px] font-medium font-['Manrope'] capitalize leading-[20px]">
                  EnergiSE Grants awarded To 10 Companies
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-[40px] font-normal font-['Aleo'] leading-[44px]">
                  125+
                </div>
                <div className="max-w-[142px] text-[#FFFBFB] text-[16px] font-medium font-['Manrope'] capitalize leading-[20px]">
                  Leaders united to spark bold conversations
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-[40px] font-normal font-['Aleo'] leading-[44px]">
                  9 SEs
                </div>
                <div className="max-w-[142px] text-[#FFFBFB] text-[16px] font-medium font-['Manrope'] capitalize leading-[20px]">
                  Led fireside chats & aMA circles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
