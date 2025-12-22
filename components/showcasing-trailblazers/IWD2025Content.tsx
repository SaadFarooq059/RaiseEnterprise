import { useEffect, useRef } from 'react';

export default function IWD2025Content() {
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
    <div ref={sectionRef} className="w-full pl-4 pr-4 md:pl-6 md:pr-6 lg:pl-0 lg:pr-[25px]">
      {/* First Paragraph */}
      <div className="max-w-full lg:max-w-[806px] mb-8 md:mb-12 lg:mb-[60px]">
        <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
          Our Assistant CEO, Subashini Balakrishnan, joined the main panel to share strategies on overcoming self-doubt, the importance of community, and how Social Enterprises are at the forefront of driving inclusive work for women. <br/><br/>
          A Social Enterprise Breakout Track on "Collaboration over Competition" moderated by our Director of Strategic Initiatives, Wei Shan Koh, attracted 125 participants and featured:
        </p>
      </div>

      {/* Image Above Founders */}
      <div className="mb-8 md:mb-12 lg:mb-[60px]">
        <img 
          className="w-full lg:w-[784px] h-auto lg:h-[357px] rounded-[15px] md:rounded-[20px] object-cover" 
          src="/showcasing-trailblazers/event1.jpg" 
          alt="IWD Event"
        />
      </div>
      <div className="max-w-full lg:max-w-[806px] mb-8 md:mb-12 -mt-10 lg:mb-[60px]">
        <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
          Our Assistant CEO, Subashini Balakrishnan, joined the main panel to share strategies on overcoming self-doubt, the importance of community, and how Social Enterprises are at the forefront of driving inclusive work for women. <br/><br/>
          A Social Enterprise Breakout Track on "Collaboration over Competition" moderated by our Director of Strategic Initiatives, Wei Shan Koh, attracted 125 participants and featured:
        </p>
      </div>


        {/* Featured Founders - Row 1 */}
        <div ref={scrollContainerRef} className="flex flex-col md:flex-row gap-4 md:gap-[19px] mb-4 md:mb-[19px] overflow-x-hidden">
          {/* Founder 1 - Vivian Lee */}
          <div className="flex gap-4 md:gap-[19px] items-start">
            <img 
              className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
              src="/showcasing-trailblazers/T3.png" 
              alt="Vivian Lee"
            />
            <div className="max-w-full md:max-w-[180px]">
              <div className="text-[#FCD290] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px]">
                Vivian Lee
              </div>
              <div className="text-[#FFFBFB] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px]">
                Founder
              </div>
              <div className="text-[#FCD290] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px] mb-2 md:mb-[8px]">
                Go!Mama
              </div>
              <p className="text-white text-xs md:text-[14px] font-medium font-['Manrope'] leading-relaxed md:leading-[18.2px] mt-2">
                Go!Mama is dedicated to supporting breastfeeding mothers through innovative developments and simplifying access to dedicated lactation spaces
              </p>
            </div>
          </div>

          {/* Founder 2 - Huijia Phua */}
          <div className="flex gap-4 md:gap-[19px] items-start">
            <img 
              className="w-[120px] md:w-[179px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
              src="/showcasing-trailblazers/T2.png" 
              alt="Huijia Phua"
            />
            <div className="max-w-full md:max-w-[180px]">
              <div className="text-[#FCD290] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                Huijia Phua
              </div>
              <div className="text-[#FFFBFB] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                Founding Director
              </div>
              <div className="text-[#FCD290] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px] mb-2 md:mb-[8px]">
                Skillseed Singapore
              </div>
              <p className="text-white text-xs md:text-[14px] font-medium font-['Manrope'] leading-relaxed md:leading-[18.2px] mt-2">
                Skillseed works with Social Service Organisations to foster a trust-driven and collaborative society through their experiential learning and capability building programmes
              </p>
            </div>
          </div>
        </div>

        {/* Featured Founders - Row 2 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-[19px] mb-12 md:mb-16 lg:mb-[84px]">
          {/* Founder 3 - Cheryl Ou */}
          <div className="flex gap-4 md:gap-[19px] items-start">
            <img 
              className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
              src="/showcasing-trailblazers/T1.png" 
              alt="Cheryl Ou"
            />
            <div className="max-w-full md:max-w-[180px]">
              <div className="text-[#FCD290] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                Cheryl Ou
              </div>
              <div className="text-[#FFFBFB] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                Co-Founder
              </div>
              <div className="text-[#FCD290] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px] mb-2 md:mb-[8px]">
                The Social Space
              </div>
              <p className="text-white text-xs md:text-[14px] font-medium font-['Manrope'] leading-relaxed md:leading-[18.2px] mt-2">
                The Social Space is a socially conscious multi concept store offering opportunities to differently abled individuals through skill acquisition and dignified employment
              </p>
            </div>
          </div>

          {/* Founder 4 - Jenny Wee */}
          <div className="flex gap-4 md:gap-[19px] items-start">
            <img 
              className="w-[120px] md:w-[179px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
              src="/showcasing-trailblazers/T4.png" 
              alt="Jenny Wee"
            />
            <div className="max-w-full md:max-w-[180px]">
              <div className="text-[#FCD290] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                Jenny Wee
              </div>
              <div className="text-[#FFFBFB] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                Founder
              </div>
              <div className="text-[#FCD290] text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px] mb-2 md:mb-[8px]">
                The Social Equity
              </div>
              <p className="text-white text-xs md:text-[14px] font-medium font-['Manrope'] leading-relaxed md:leading-[18.2px] mt-2">
                The Social Equity champions fair and equal opportunities through their job fairs, targeted resource mobilization and skills programme
              </p>
            </div>
          </div>
        </div>

        {/* Image 1 */}
         <div className="mb-6 md:mb-8 lg:mb-[47px]">
      <img 
        className="w-full max-w-full lg:max-w-[784px] h-auto aspect-[784/357] rounded-[15px] md:rounded-[20px] object-cover" 
        src="/showcasing-trailblazers/event.png" 
        alt="IWD Event 1"
      />
    </div>

        {/* Second Paragraph */}
        <div className="max-w-full lg:max-w-[791px] mb-8 md:mb-12 lg:mb-[67px]">
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
            The evening closed with an after-party at Glass Dome by Playpan, graced by Guest of Honor Tan Kiat How, Senior Minister of State, who delivered a keynote and presented Tokens of Appreciation to partners. 245 attendees celebrated the day, strengthening connections across the ecosystem.
          </p>
        </div>

    </div>
  )
}
