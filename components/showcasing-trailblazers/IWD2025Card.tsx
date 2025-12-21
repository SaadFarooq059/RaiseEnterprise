"use client"
import { useEffect, useRef, useState } from 'react';

export default function IWD2025Card() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const images = [
    { src: "/showcasing-trailblazers/j1.jpg", alt: "IWD 2025 1" },
    { src: "/showcasing-trailblazers/j2.jpg", alt: "IWD 2025 2" },
    { src: "/showcasing-trailblazers/j3.jpg", alt: "IWD 2025 3" },
    { src: "/showcasing-trailblazers/j4.jpg", alt: "IWD 2025 4" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
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
          <div className="overflow-x-hidden scrollbar-hide">
            <div
              className="flex w-max gap-3 md:gap-[14px] pb-4 iwd-marquee"
              style={{ animationPlayState: isActive ? "running" : "paused" }}
            >
              {images.map((image) => (
                <img 
                  key={image.src}
                  className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                  src={image.src}
                  alt={image.alt}
                />
              ))}
              {images.map((image) => (
                <img 
                  key={`${image.src}-duplicate`}
                  className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[675px] h-auto md:h-[300px] lg:h-[450px] rounded-[15px] md:rounded-[20px] object-cover" 
                  src={image.src}
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Event Snapshot Badge and Stats */}
        <div className="relative px-4 md:px-6 lg:px-[25px] pb-12 md:pb-16 lg:pb-[80px]">
          {/* Badge */}
         <div className="w-[180px] md:w-[204px] h-[40px] md:h-[47px] bg-[#FCD290] rounded-[40px] flex items-center justify-center mb-4 md:mb-6 lg:mb-[24px]">
            <span className="text-[#2A167F] text-sm md:text-[15px] font-semibold font-['Aleo'] leading-[15px]">
              EVENT SNAPSHOT
            </span>
          </div>


          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-[106px]">
            {/* Left - Description */}
            <div className="max-w-full lg:max-w-[407px]">
              <p className="text-white text-lg md:text-xl lg:text-[22px] font-medium font-['Manrope'] leading-relaxed md:leading-[28.6px]">
                On 28 March 2025, raiSE and ACE.SG co-organised the International Women's Day <span className="font-normal">Accelerate Action</span> Conference, drawing 275 attendees to celebrate the impact of Women Social Entrepreneurs.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-[26px] ml-[210px]">
              {/* Stat 1 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[32px] font-normal font-['Aleo'] leading-tight md:leading-[35.2px]">
                  275
                </div>
                <div className="max-w-full md:max-w-[142px] text-[#FFFBFB] text-sm md:text-[14px] font-medium font-['Manrope'] leading-tight md:leading-[18.2px]">
                  Attendees Celebrated women social entrepreneurs
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[32px] font-normal font-['Aleo'] leading-tight md:leading-[35.2px]">
                  125
                </div>
                <div className="max-w-full md:max-w-[163px] text-[#FFFBFB] text-sm md:text-[14px] font-medium font-['Manrope'] leading-tight md:leading-[18.2px]">
                  Joined breakout on Collaboration over Competition
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-4 md:gap-5 lg:gap-[20px ml-8">
                <div className="text-right text-[#FFFBFB] text-2xl md:text-3xl lg:text-[32px] font-normal font-['Aleo'] leading-tight md:leading-[35.2px]">
                  4
                </div>
                <div className="max-w-full md:max-w-[142px] text-[#FFFBFB] text-sm md:text-[14px] font-medium font-['Manrope'] capitalize leading-tight md:leading-[18.2px]">
                  SE Female Founders shared impact stories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .iwd-marquee {
          animation: iwdMarquee 44s linear infinite;
          will-change: transform;
        }

        @keyframes iwdMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
