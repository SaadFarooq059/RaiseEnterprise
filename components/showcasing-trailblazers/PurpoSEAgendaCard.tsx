import { useEffect, useRef } from 'react';

export default function PurpoSEAgendaCard() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      const scrollStart = windowHeight;
      const scrollEnd = -sectionHeight;
      const scrollRange = scrollStart - scrollEnd;
      const scrollProgress = (scrollStart - sectionTop) / scrollRange;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = maxScroll * clampedProgress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative flex justify-end mb-8 lg:mb-[47px]">
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
          <div ref={scrollContainerRef} className="overflow-x-hidden scrollbar-hide">
            <div className="flex gap-3 md:gap-[14px] pb-4">
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/purpose-agenda1.jpg" 
                alt="PurpoSE Agenda 1"
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
        <div className="relative px-4 md:px-6 lg:px-[25px] pb-6 md:pb-8 lg:pb-[40px]">
          {/* Badge */}
          <div className="w-[180px] md:w-[204px] h-[40px] md:h-[47px] bg-[#FCD290] rounded-[40px] flex items-center justify-center mb-4 md:mb-6 lg:mb-[24px]">
            <span className="text-[#2A167F] text-sm md:text-[15px] font-semibold font-['Aleo'] leading-[15px]">
              EVENT SNAPSHOT
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-[106px]">
            {/* Left - Description */}
            <div className="max-w-full lg:max-w-[446px]">
              <p className="text-white text-lg md:text-xl lg:text-[22px] font-medium font-['Manrope'] leading-relaxed md:leading-[28.6px]">
           The PurpoSE Agenda provided a 
      high-profile platform for Social Enterprises to connect with investors, stakeholders, and partners, while spotlighting panelists, entrepreneurs, leaders, and students across our channels.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[26px] ml-0 lg:ml-[210px]">
              {/* Stat 1 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[40px] font-normal font-['Aleo'] leading-tight md:leading-[44px]">
                  $50K
                </div>
                <div className="w-full max-w-[172px] text-[#FFFBFB] font-medium font-['Manrope'] capitalize ml-6 lg:ml-12" style={{fontSize: 14, lineHeight: '18.2px', wordWrap: 'break-word'}}>
                  EnergiSE Grants awarded To 10 Companies 
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[40px] font-normal font-['Aleo'] leading-tight md:leading-[44px]">
                  125+
                </div>
                <div className="w-full max-w-[142px] text-[#FFFBFB] font-medium font-['Manrope'] capitalize ml-6 lg:ml-12" style={{fontSize: 14, lineHeight: '18.2px', wordWrap: 'break-word'}}>
          Leaders united to spark bold conversations
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[40px] font-normal font-['Aleo'] leading-tight md:leading-[44px]">
                9 SEs
                </div>
                <div className="w-full max-w-[142px] text-[#FFFBFB] font-medium font-['Manrope'] capitalize ml-6 lg:ml-12" style={{fontSize: 14, lineHeight: '18.2px', wordWrap: 'break-word'}}>
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