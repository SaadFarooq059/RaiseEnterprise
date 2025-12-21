"use client"
import { useState } from "react";
import { X } from "lucide-react";

export default function CapacityBuildingSection() {
  const [showStats, setShowStats] = useState(false);
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-12">
        {/* Left - Heading */}
        <div className="mt-12 lg:mt-[5px] lg:ml-[120px] text-center lg:text-left">
          <div
            onMouseEnter={() => setShowStats(true)}
            className="text-[#FCD290] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]"
          >
            Capacity Building:
          </div>
          <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Upskilling People &</div>
          <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Enterprise</div>
          {showStats && (
            <div className="w-full max-w-[280px] mt-4 lg:mt-8 lg:ml-[0px] mx-auto lg:mx-0 relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setShowStats(false)}
                className="absolute -top-2 -right-2 bg-white text-black rounded-full p-1 z-10 border border-white/20 transition-colors"
                aria-label="Close stats"
              >
                <X size={20} />
              </button>
              <img
                src="/ceo/capacity-stats.png"
                alt="Stats Card"
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Right - Content */}
        <div>
          <p className="text-white text-[16px] md:text-lg font-normal font-['Manrope'] leading-[20.8px] lg:max-w-[1080px] md:leading-6 text-justify">
            Our focus on early-stage funding and capacity building stems from our firm belief that Social Enterprises must start their journey with a clear social mission from the outset. Beginning with a clear social mission anchors the business model. When it is explicit and well-communicated, it builds trust and credibility. It has been our experience that Social Enterprises who start with a social mission sustain greater stakeholder support (customers, employees, partners, investors) over time.
          </p>
          <p className="text-white text-[16px] md:text-lg font-normal font-['Manrope'] leading-[20.8px] lg:max-w-[1080px] md:leading-6 text-justify mt-3 md:mt-4">
            Because we believe a business's social mission is its <span className="font-bold">raison d'être</span>, we remain steadfast in our commitment to cultivating the next generation of social entrepreneurs. Through deeper partnerships with IHLs, we embedded our <span className="font-bold">'Grow Impact'</span> curriculum into the <span className="text-amber-200 font-bold underline">SUSS Venture Building programme and the SUTD Create4Good programme</span>, making it our mission to nurture the next wave of social change makers.
          </p>
        </div>
      </div>
    </div>
  )
}
