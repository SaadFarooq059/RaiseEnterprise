import { useEffect, useRef } from 'react';

export default function TS2StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: ReturnType<typeof setInterval>;
    const scrollSpeed = 2; // pixels per frame
    const pauseDuration = 2000; // pause at end in milliseconds

    const autoScroll = () => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft <= 0) {
        // Pause at the start, then jump to the end
        setTimeout(() => {
          scrollContainer.scrollTo({ left: maxScroll, behavior: 'smooth' });
        }, pauseDuration);
      } else {
        scrollContainer.scrollLeft -= scrollSpeed;
      }
    };

    scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    scrollInterval = setInterval(autoScroll, 20);

    // Pause scrolling on hover
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => {
      scrollInterval = setInterval(autoScroll, 20);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #A374FF 0%, #EFE2FF 12%)' }}
    >
      {/* Stats Content */}
      <div className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-32">
        {/* Heading and Description Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-20">
          {/* Left Side - Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#A374FF] text-[48px] md:text-[56px] lg:text-[64px] font-medium font-['Aleo'] capitalize leading-[56px] lg:leading-[70.4px]">
              TS2 2024
            </h2>
            <h3 className="text-[#2A167F] text-[24px] md:text-[28px] lg:text-[35px] font-light font-['Aleo'] capitalize leading-[30px] lg:leading-[38.5px]">
              Technology for Sustainable Social Impact Accelerator
            </h3>
          </div>
          
          {/* Right Side - Description */}
          <div className="text-[#22282B] text-[16px] md:text-[18px] lg:text-[20px] font-medium font-['Manrope'] leading-[26px] md:leading-[28px] lg:leading-[30px] opacity-80">
            <p className="mb-6">
              In collaboration with the National University of Singapore (NUS), raiSE launched the Technology for Sustainable Social Impact Accelerator (TS2), a highly customised programme designed to empower bold, tech based startups to incorporate human-centered social impact into their business.
            </p>
            <p className="mb-6">
              The inaugural TS2 programme offered selected startups invaluable resources, including access to raiSE and NUS Enterprise's extensive networks and a customised development plan for each venture. The selected teams represented a diverse range of industries such as Healthcare, Mental Health, B2B SaaS, and Education.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#A374FF] my-8 lg:my-10"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
          {/* Stat 1 */}
          <div className="flex flex-col gap-8 border-l-2 border-[#FCD290] pl-8">
            <div className="flex flex-col gap-0">
              <p className="text-[#22282B] text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
                Up to
              </p>
              <span className="text-[#A374FF] text-[48px] md:text-[52px] lg:text-[55px] font-semibold font-['Manrope'] leading-[60.5px]">
                <span>$95,</span>
                <span className="block xl:inline">000</span>
              </span>
            </div>
            <p className="text-[#22282B] text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
              Grant funding per team
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col pt-[23px] gap-8 border-l-2 border-[#FCD290] pl-8">
            <div className="flex items-baseline gap-2">
              <span className="text-[#A374FF] text-[48px] md:text-[52px] lg:text-[55px] font-semibold font-['Manrope'] leading-[60.5px]">
                7
              </span>
              <span className="text-[#A374FF] text-[28px] md:text-[30px] lg:text-[32px] font-semibold font-['Manrope'] leading-[35.2px]">
                Teams
              </span>
            </div>
            <p className="text-[#22282B] text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
              Funded through raiSE-NUS collaboration
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col pt-[23px] gap-8 border-l-2 border-[#FCD290] pl-8">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-[#A374FF] text-[48px] md:text-[52px] lg:text-[55px] font-semibold font-['Manrope'] leading-[60.5px]">
                39
              </span>
              <span className="text-[#A374FF] text-[28px] md:text-[30px] lg:text-[32px] font-semibold font-['Manrope'] leading-[35.2px]">
                Applicants
              </span>
            </div>
            <p className="text-[#22282B] text-[16px] md:text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
              Applied to the inaugural TS2 programme
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col pt-[23px] gap-8 border-l-2 border-[#FCD290] pl-8">
            <div className="text-[#A374FF] text-[48px] md:text-[52px] lg:text-[55px] font-semibold font-['Manrope'] leading-[60.5px]">
              $665,000
            </div>
            <p className="text-[#22282B] text-[16px] md:text-[18px] font-medium font-['Manrope'] capitalize leading-[23.4px]">
              Grant Funding Commited In total
            </p>
          </div>
        </div>
      </div>

      {/* Coverage Section - Continues from stats */}
      <div className="relative px-6 md:px-12 lg:px-0 pb-12 md:pb-16 lg:pb-20 flex justify-end">
        {/* Background Images */}
        {/* <img 
          className="absolute left-[-47px] top-0 w-[1535px] h-[768px] object-cover opacity-20 hidden xl:block" 
          src="/venture-building/ts2-bg.png" 
          alt="Background"
        />
         */}
        <div className="relative z-10 w-full lg:max-w-[1400px]">
          {/* Coverage Card */}
          <div 
            className="w-full p-6 md:p-8 lg:p-10"
            style={{ 
              opacity: 0.80, 
              background: 'linear-gradient(180deg, #A374FF 21%)', 
              borderTopLeftRadius: 46, 
              borderBottomLeftRadius: 46 
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-[600px] flex flex-col gap-4 lg:gap-5">
                <h3 className="text-white text-[36px] md:text-[42px] lg:text-[48px] font-medium font-['Aleo'] capitalize leading-[44px] lg:leading-[52.8px]">
                  Coverage & Features
                </h3>
                <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Manrope'] leading-[24px] md:leading-[26px] lg:leading-[30px]">
                  NUS and raiSE commit S$3.5M to support tech-based Social Enterprises, with the TS2 Accelerator featured in media like The Straits Times and NUS News for showcasing innovative, tech-driven solutions.
                </p>
              </div>
              
              {/* Right Images - Auto-Scrollable */}
              <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 lg:gap-6 pb-2">
                  <img 
                    className="flex-shrink-0 w-[300px] lg:w-[550px] h-auto lg:h-[569px] rounded-[20px] object-cover" 
                    src="/venture-building/coverage1.png" 
                    alt="Coverage 1"
                  />
                  <img 
                    className="flex-shrink-0 w-[300px] lg:w-[611px] h-auto lg:h-[569px] rounded-[20px] object-cover" 
                    src="/venture-building/coverage2.png" 
                    alt="Coverage 2"
                  />
                  <img 
                    className="flex-shrink-0 w-[300px] lg:w-[550px] h-auto lg:h-[569px] rounded-[20px] object-cover" 
                    src="/venture-building/coverage1.png" 
                    alt="Coverage 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
