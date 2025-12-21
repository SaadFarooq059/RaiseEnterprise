"use client"
import { useState } from "react";
import {X} from "lucide-react";
export default function VentureBuildingSection() {
    const [showStats, setShowStats] = useState(false);
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-12">
        {/* Left - Heading and Stats */}
        <div className="mt-12 lg:mt-[5px] lg:ml-[120px] text-center lg:text-left">
            <div onMouseEnter={() => setShowStats(true)} className="text-[#FCD290] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
             Venture Building 
            </div>
            {/* HOVER TRIGGER */}
            <div 
             
           
            >
              <span className="text-[#white] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
               Businesses with <br/> Impact
              </span>
            </div>


               {showStats && (
            <div className="w-full max-w-[280px] mt-4 lg:mt-8 lg:ml-[0px] mx-auto lg:mx-0 relative animate-in fade-in zoom-in duration-300">
              {/* Close Mark */}
              <button 
                onClick={() => setShowStats(false)}
                className="absolute -top-2 -right-2 bg-white  text-black rounded-full p-1 z-10 border border-white/20 transition-colors"
                aria-label="Close stats"
              >
                <X size={20} />
              </button>
              
              <img 
                src="/ceo/venture-stats.png" 
                alt="Stats Card" 
                className="w-full h-auto rounded-lg "
              />
            </div>
          )}
          </div>


        {/* Right - Content */}
        <div className="space-y-8 lg:space-y-10 max-w-full lg:max-w-[1080px]">
             <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify mb-4 md:mb-6">
              Indeed, it takes an entire ecosystem to raiSE Social Entrepreneurs. Even in our Venture Building strategy, we sought to work with Institutes of Higher Learning (IHL) partners because nurturing the next generation of social changemakers is crucial for the future of our ecosystem. Through our funding and accelerator programmes, we provide early-stage support to aspiring Social Entrepreneurs to help them realise their social impact goals.
            </p>
          <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
            raiSE EnergiSE Grant
          </h3>
          <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify mb-4 md:mb-6">
            Our flagship funding initiative, <span className="text-[#FCD290] font-bold underline">raiSE EnergiSE</span> seeks to equip young founders with resources to translate innovative ideas into impactful businesses. The enthusiastic participation from IHLs signals a rising interest in Social Entrepreneurship and it is encouraging that we received 83 applications!
          </p>

          {/* Technology for Sustainable Social Impact Accelerator */}
          <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
            Technology for Sustainable Social Impact Accelerator
          </h3>
          <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
            In collaboration with the National University of Singapore (NUS), raiSE launched the <span className="text-[#FCD290] font-bold underline">Technology for Sustainable Social Impact Accelerator (TS2)</span>, offering selected, bold and tech-based startups with invaluable resources, access to raiSE and NUS Enterprise's extensive networks and a customised development plan to accelerate their social impact trajectory.
          </p>
        </div>
      </div>
    </div>
  )
}
