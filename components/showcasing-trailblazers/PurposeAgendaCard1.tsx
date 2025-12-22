"use client"
import { useEffect, useRef, useState } from 'react';

export default function PurpoSEAgendaCard1() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const images = [
    { src: "/showcasing-trailblazers/network1.png ", alt: "PurpoSE Agenda 1" },
    { src: "/showcasing-trailblazers/network2.png", alt: "PurpoSE Agenda 2" },
    { src: "/showcasing-trailblazers/network3.png", alt: "PurpoSE Agenda 3" },
    { src: "/showcasing-trailblazers/network4.png", alt: "PurpoSE Agenda 4" },
    { src: "/showcasing-trailblazers/network5.png", alt: "PurpoSE Agenda 5" },
    { src: "/showcasing-trailblazers/network6.png", alt: "PurpoSE Agenda 6" },
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
    <div ref={sectionRef} className="relative flex justify-end mb-[47px]">
      {/* Content Container - Attached to right */}
      <div className="relative w-full" style={{ maxWidth: '1140px' }}>
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
              className="flex w-max gap-[14px] pb-4 agenda-marquee"
              style={{ animationPlayState: isActive ? "running" : "paused" }}
            >
              {images.map((image) => (
                <img 
                  key={image.src}
                  className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[570px] h-auto md:h-[300px] lg:h-[380px] rounded-[15px] md:rounded-[20px] object-cover" 
                  src={image.src}
                  alt={image.alt}
                />
              ))}
              {images.map((image) => (
                <img 
                  key={`${image.src}-duplicate`}
                  className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[570px] h-auto md:h-[300px] lg:h-[380px] rounded-[15px] md:rounded-[20px] object-cover" 
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
          <div className="flex gap-[90px]">
            {/* Left - Description */}
            <div className="max-w-[380px]">
              <p
              style={{
                color: 'white',
                fontSize: 22,
                fontFamily: 'Manrope',
                fontWeight: 500,
                lineHeight: '28.6px',
                wordWrap: 'break-word',
              }}
              >
              At Echelon 2024, a tech business conference held on 15-16 May 2024, raiSE hosted a dedicated pavilion<br/>featuring seven of our Social Enterprises.<br/><br/>
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-[26px] ml-[180px]">
              {/* Stat 1 */}
              <div className="flex items-start gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-[40px] font-normal font-['Aleo'] leading-[44px]">
                  7 SEs
                </div>
                <div className="w-full max-w-[172px] text-[#FFFBFB] font-medium font-['Manrope'] capitalize ml-12" style={{fontSize: 14, lineHeight: '18.2px', wordWrap: 'break-word'}}>
                Showcased at raiSE’s Pavilion
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-[20px]">
                <div className="text-right text-[#FFFBFB] text-[40px] font-normal font-['Aleo'] leading-[44px]">
            2-day 
                </div>
                <div className="w-full max-w-[142px] text-[#FFFBFB] font-medium font-['Manrope'] capitalize ml-12" style={{fontSize: 14, lineHeight: '18.2px', wordWrap: 'break-word'}}>
                Tech conference Spotlight social innovation
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-[20px]">
                <div className="text-right text-[#FFFBFB] -ml-20 text-[40px] font-normal font-['Aleo'] leading-[44px]">
                  1 Message
                </div>
                <div className="w-full max-w-[142px] text-[#FFFBFB] font-medium font-['Manrope'] capitalize ml-12" style={{fontSize: 14, lineHeight: '18.2px', wordWrap: 'break-word'}}>
           Social Enterprise are the Future of business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .agenda-marquee {
          animation: agendaMarquee 48s linear infinite;
          will-change: transform;
        }

        @keyframes agendaMarquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
