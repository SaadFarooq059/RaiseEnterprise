"use client"
import { useState } from "react";
import { X } from "lucide-react";

export default function ShowcasingSection() {
  const [showStats, setShowStats] = useState(false);
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="py-6 md:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[450px_1fr] gap-4 lg:gap-6">
          {/* Left - Heading */}
          <div className="mt-12 lg:mt-[5px] lg:ml-[120px] text-center lg:text-left">
            <div
              onMouseEnter={() => setShowStats(true)}
              className="text-[#FCD290] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]"
            >
              Showcasing
            </div>
            <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['Aleo'] font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">Social Enterprise Trailblazers</div>
          </div>
          {/* Right - Content */}
          <div className="space-y-4 md:space-y-6 lg:max-w-[1080px]">
            <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
              As part of our effort to advocate for Social Enterprises, raising awareness has always been an integral part of our work. Admittedly, the journey of advocating for our trailblazers has been a shared one, many partners have come forward to work hand-in-hand to uplift our Social Enterprise members through various programmes.
            </p>

            {/* The PurpoSE Agenda 2024 */}
            <div className="mt-4 md:mt-6">
              <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
                The PurpoSE Agenda 2024
              </h3>
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
                On 3 December 2024, we held the second edition of our flagship event, The PurpoSE Agenda, to spark bold conversations on collaborative financing models. The event brought together ecosystem partners, corporate stakeholders, venture capitalists, impact investors, and Social Enterprises who are leading the way in converging profit and purpose.
              </p>
            </div>

            {/* Strategic Partnerships */}
            <div className="mt-4 md:mt-6">
              <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
                Strategic Partnerships
              </h3>
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
                On 15 and 16 May 2024, raiSE hosted a &apos;Social Enterprise: The Future of Business&apos; themed pavilion featuring seven of our Social Enterprises at tech business conference, Echelon, as part of our collaboration with e27 to highlight the growing relevance of impact driven business models and the need to start early.
              </p>
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify mt-3 md:mt-4">
                On 28 March 2025, in partnership with ACE.SG, we co-organised the International Women&apos;s Day Accelerate Action Conference, which included a Social Enterprise breakout track on Collaboration over Competition, drawing 275 attendees to celebrate the impact of Women Social Entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-12 lg:py-16 ">
        <div className="flex flex-col lg:grid lg:grid-cols-[450px_1fr] gap-4 lg:gap-6">
          {/* Left - Stats */}
          <div className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
            {showStats && (
              <div className="w-full max-w-[280px] mt-4 lg:mt-8 lg:ml-[120px] mx-auto lg:mx-0 relative animate-in fade-in zoom-in duration-300">
                <button
                  onClick={() => setShowStats(false)}
                  className="absolute -top-2 -right-2 bg-white text-black rounded-full p-1 z-10 border border-white/20 transition-colors"
                  aria-label="Close stats"
                >
                  <X size={20} />
                </button>
                <img
                  src="/ceo/showcasing-stats.png"
                  alt="Showcasing Stats"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Right - Content */}
          <div className="space-y-4 md:space-y-6 lg:max-w-[1080px]">
            {/* Increasing Visibility */}
            <div className="mt-4 md:mt-6">
              <h3 className="text-[#FCD290] text-[20px] md:text-[23px] font-['Aleo'] font-normal leading-[26px] md:leading-[29.9px] mb-2 md:mb-3">
                Increasing Visibility
              </h3>
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
                We believe in celebrating and <span className="text-[#FCD290] font-bold underline">amplifying the impactful work of our members.</span> By leveraging our platforms and forging key partnerships, we enhanced the public profile of our Social Enterprises, connected them with a broader audience, and enhanced recognition for their impact. We congratulate our members featured in the Gen.T list by Singapore Tatler and SL25 by the Stewardship Asia Centre, to name a few.
              </p>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
                I want to extend my sincere thanks to our valued ecosystem partners who have acknowledged raiSE&apos;s frameworks, recognised the impact created by our Social Enterprise members and increased the visibility of our SE members.
              </p>
            </div>

            {/* Closing Message */}
            <div className="mt-6 md:mt-8">
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] text-justify">
                In closing, I am grateful to those that have supported raiSE and uplifted the SE ecosystem and share that we are excited about the journey ahead as raiSE celebrates its 10th Anniversary. We owe our gratitude to the Ministry of Social and Family Development (MSF) and the National Council of Social Service (NCSS) for their steadfast support and to our Chairperson and Board members for their invaluable counsel and dedicated contributions, over the years. I would also like to extend my heartfelt thanks to the raiSE team, both past and present, whose passion, resilience, and unwavering commitment have been the driving force behind all that we have achieved together.
              </p>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
                Last but not least, I thank our Social Enterprise members for trusting us to journey with you. Your vision, courage, and determination inspire us every day and remind us why we do what we do. With hard-earned lessons and deeper insights, my team and I are ready to forge ahead with renewed purpose for the next decade, <span className="text-[#FCD290]">leading</span> our SE members <span className="text-[#FCD290]">with</span> vision, resilience, and <span className="text-[#FCD290]">impact</span>.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-6 md:mt-8">
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px]">
                Sincerely,
              </p>
              <p className="text-white text-[16px] md:text-[18px] font-['Manrope'] font-normal leading-[20.8px] md:leading-[23.4px] mt-3 md:mt-4">
                Alfie Othman<br/>
                CEO, raiSE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
