import { useEffect, useRef } from 'react';

export default function PurpoSEAgendaContent1() {
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
      container.scrollLeft = maxScroll * (1 - clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="w-full pl-4 pr-4 md:pl-6 md:pr-6 lg:pl-0 lg:pr-[25px]">
      {/* First Paragraph */}
      <div className="max-w-[805px] mb-4">
        <p className="text-white text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
          At Echelon 2024, raiSE brought the message "Social Enterprises: The Future of Business" through a pavilion showcase, highlighting the growing relevance of impact-driven models in today's economy. Together with seven Social Enterprises, we presented powerful examples of social innovation across diverse business sectors—from inclusively designed products and services to platforms for inclusive employment.<br/><br/>
          The showcase not only demonstrated how Social Enterprises can compete and thrive in mainstream markets but also reinforced their role as pioneers shaping the future of business with purpose at the core.
        </p>
      </div>

      {/* Recipients Card */}
      <div
        ref={scrollContainerRef}
        className="w-full max-w-[635px] h-[266px] bg-[#A564F7] rounded-[50px] mb-4 mt-10 px-6 md:px-10 lg:px-[62px] py-[40px] overflow-x-hidden"
      >
        <h3 className="text-[#FCD290] text-[25px] font-semibold font-['Manrope'] leading-[36px] tracking-wide mb-[26px]">
          Featured Social Enterprises
        </h3>
        <div className="flex gap-10 md:gap-16 lg:gap-[120px]">
          <div className="text-white text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
            • Tictag<br/>
            • Foreword Coffee<br/>
            • School of Concepts<br/>
            • Innervate Fitness
          </div>
          <div className="text-white text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
            • Findjobs<br/>
            • Octopus8<br/>
            • Stick 'Em
          </div>
        </div>
      </div>
    </div>
  )
}
