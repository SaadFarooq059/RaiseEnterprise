import Link from "next/link"
import Image from "next/image"
import PurpleCard from "@/components/social-enterprise/PurpleCard"
import SidebarNavigation from "@/components/social-enterprise/SidebarNavigation"
import Legend from "@/components/social-enterprise/Legend"

export default function SocialEnterprisePage() {
  return (
    <div className="relative min-h-screen bg-white flex">
      {/* Left Side - Blank/White with Logo and Navigation */}
      <div className="w-1/3 min-h-screen bg-white relative">
        {/* Logo */}
        <div className="absolute left-8 top-6 z-50">
          <img src="/images/raise-1-copy.png" alt="raiSE" className="h-16 w-auto" />
        </div>

        {/* Main Heading */}
        <div className="absolute left-8 top-32 right-8">
          <h1 className="font-manrope text-4xl font-normal leading-[39.6px] text-[#9B2683]">
            Reimagining the Future of Social Enterprise
          </h1>
        </div>

        {/* Sidebar Navigation */}
        <div className="absolute left-8 top-[325px]">
          <SidebarNavigation 
            items={[
              { label: "SE Landscape Overview", isActive: true },
              { label: "Membership Framework", badge: "NEW" },
              { label: "Membership Categories", badge: "NEW" },
              { label: "Impact Areas", badge: "NEW" },
              { label: "Membership Portal", badge: "NEW" },
              { label: "Social Impact Report", badge: "NEXT" },
            ]}
          />
        </div>
      </div>

      {/* Right Side - Report Content */}
      <div className="w-2/3 min-h-screen bg-white">
        {/* Main Content */}
        <div className="max-w-full px-12 pt-32">
          {/* Header Section */}
          <div className="mb-12">
            <div>
              <div className="mb-4 text-xl font-semibold text-[#A374FF]">OVERVIEW</div>
              <h2 className="mb-6 font-aleo text-[36px] font-medium leading-[58px] text-[#9B2683]">The SE Landscape</h2>
              <p className="mb-6 text-lg font-semibold leading-[23.4px] text-black">
                Over the past year, raiSE strengthened the credibility and transparency of the Social Enterprise ecosystem
                by advancing the framework that defines and upholds social impact. This revised framework enables Social
                Enterprises to:
              </p>
            </div>
          </div>

          {/* Three Purple Cards */}
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            <PurpleCard 
              number="01" 
              title="Articulate their purpose with greater clarity"
              iconSrc="/social/1.png"
            />
            <PurpleCard 
              number="02" 
              title="Measure their contributions with rigour"
              iconSrc="/social/2.png"
            />
            <PurpleCard 
              number="03" 
              title="Build trust with stakeholders and the greater public"
              iconSrc="/social/3.png"
            />
          </div>

          <div className="mb-12 h-px bg-[#A564F7]" />

          {/* Growth Section - Two Boxes Side by Side */}
          <div className="mb-16 flex gap-8">
            {/* Left Box - Heading with SECTOR GROWTH behind */}
            <div className="relative p-8" style={{ minWidth: '280px' }}>
              {/* SECTOR GROWTH - 90 degrees behind H3 */}
              <div className="absolute top-8 left-8 text-[#A564F7] text-[20px] font-manrope font-bold leading-[58px] whitespace-nowrap z-0" style={{ transform: 'rotate(90deg)', transformOrigin: 'top left' }}>
                SECTOR GROWTH
              </div>
              
              {/* H3 Heading */}
              <h3 className="relative z-10 text-[#C2158F] text-[32px] font-manrope font-bold leading-[32px]">
                Growth in<br />
                Membership &<br />
                Revenues
              </h3>
            </div>

            {/* Right Box - Paragraphs Only */}
            <div className="flex-1 p-8">
              <p className="text-black text-[16px] font-manrope font-medium leading-[20.8px]">
                The Social Enterprise sector continues to demonstrate steady growth. As it can be seen in the past year, raiSE&apos;s membership has <span className="font-bold">nearly doubled from 357 to 693</span>, reflecting the growing commitment of businesses to prioritise incorporating social impact intentionally and strategically into their enterprise.
                <br />
                <br />
                The collective revenue of raiSE Social Enterprise members rose from $179.5 million to $210.3 million, underscoring their increasing ability to deliver impact while remaining economically sustainable. This upward trajectory, whilst marginal, signals the sector&apos;s expanding contribution to building a more inclusive and equitable future.
              </p>
            </div>
          </div>

          {/* Membership Charts */}
          <div className="mb-16 flex items-center justify-center">
            <Image 
              src="/social/m.jpg" 
              alt="Membership Chart FY 23 to FY 24" 
              width={800}
              height={400}
              className="max-w-full h-auto"
            />
          </div>

          {/* Legend */}
          <div className="mb-16">
            <Legend 
              items={[
                { color: "#F191FA", label: "raiSE Impact Community" },
                { color: "#A564F7", label: "Emerging Social Enterprises" },
                { color: "#512691", label: "Leading Social Enterprises" },
              ]}
            />
          </div>

          {/* Membership Cards */}
          <p className="mb-8 text-xl font-normal leading-[26px] text-[#9B2683]">
            The raiSE membership includes <span className="text-2xl font-bold">693</span> businesses across the different
            stages of their Social Enterprise journey.
          </p>

          {/* Four Cards Section - 2 per row */}
          <div className="mb-16 grid grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative h-[314px] bg-white rounded-[30px] shadow-lg p-4" style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.25)' }}>
              <img src="https://placehold.co/146x74" alt="Card 1" className="w-[146px] h-[74px] object-cover" />
              <div className="absolute bottom-10 left-4 right-4">
                <div className="text-[48px] font-aleo font-bold text-[#8F2576] leading-[58px] mb-3">335</div>
                <p className="text-[15px] font-manrope leading-[19.5px]">
                  <span className="font-bold text-[#8F2576]">raiSE Impact Community Members</span>
                  <span className="text-black font-medium"> that have demonstrated the </span>
                  <span className="font-bold text-[#8F2576]">Intentionality</span>
                  <span className="text-black font-medium"> to Incorporate social impact in their business.</span>
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="relative h-[314px] bg-white rounded-[30px] shadow-lg p-4" style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.25)' }}>
              <img src="https://placehold.co/146x74" alt="Card 2" className="w-[146px] h-[74px] object-cover" />
              <div className="absolute bottom-10 left-4 right-4">
                <div className="text-[48px] font-aleo font-bold text-[#9B2683] leading-[58px] mb-3">247</div>
                <p className="text-[15px] font-manrope leading-[19.5px]">
                  <span className="font-bold text-[#9B2683]">Emerging Social Enterprises</span>
                  <span className="text-black font-medium"> that have demonstrated </span>
                  <span className="font-bold text-[#9B2683]">Intentionality</span>
                  <span className="text-black font-medium"> and </span>
                  <span className="font-bold text-[#9B2683]">Additionality</span>
                  <span className="text-black font-medium"> in their business models.</span>
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="relative h-[314px] bg-white rounded-[30px] shadow-lg p-4" style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.25)' }}>
              <img src="https://placehold.co/146x74" alt="Card 3" className="w-[146px] h-[74px] object-cover" />
              <div className="absolute bottom-10 left-4 right-4">
                <div className="text-[48px] font-aleo font-bold text-[#9B2683] leading-[58px] mb-3">111</div>
                <p className="text-[15px] font-manrope leading-[19.5px]">
                  <span className="font-bold text-[#9B2683]">Leading Social Enterprises</span>
                  <span className="text-black font-medium"> that have demonstrated all 3 pillars of </span>
                  <span className="font-bold text-[#9B2683]">Intentionality</span>
                  <span className="text-black font-medium">, </span>
                  <span className="font-bold text-[#9B2683]">Additionality</span>
                  <span className="text-black font-medium">, and </span>
                  <span className="font-bold text-[#9B2683]">Proportionality</span>
                  <span className="text-black font-medium"> in their business models.</span>
                </p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="relative h-[314px] bg-white rounded-[30px] shadow-lg p-4" style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.25)' }}>
              <img src="https://placehold.co/146x74" alt="Card 4" className="w-[146px] h-[74px] object-cover" />
              <div className="absolute bottom-10 left-4 right-4">
                <p className="text-[15px] font-manrope leading-[19.5px]">
                  <span className="text-black font-medium">At raiSE&apos;s 10th Anniversary Celebration, we will mark a new chapter for the sector as we recognise the inaugural cohort of </span>
                  <span className="font-bold text-[#9B2683]">Verified Social Enterprises</span>
                  <span className="text-black font-medium">, setting a new standard for transparency and recognition within the </span>
                  <span className="font-bold text-[#9B2683]">Social Enterprise</span>
                  <span className="text-black font-medium"> ecosystem.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Impact Areas Section */}
          <div className="mb-12">
            <p className="text-[20px] font-manrope font-normal leading-[26px] text-[#9B2683]">
              Within our three key impact areas, there are multiple pathways through which members can deliver impact, each supported by its own set of measurement metrics. The following section highlights the collective local impact achieved by our
              <span className="text-[24px] font-bold leading-[31.2px]"> 358 Emerging and Leading Social Enterprise members</span>
              {' '}in FY 2024 across these three key areas and their respective pathways.
            </p>
          </div>

          {/* Inclusive Employment Opportunities Section */}
          <div className="mb-16 relative bg-white p-8" style={{ minHeight: '522px' }}>
            {/* Rotated Left Label */}
            <div className="absolute left-0 bottom-0" style={{ transform: 'rotate(-90deg)', transformOrigin: 'bottom left' }}>
              <h3 className="text-[20px] font-manrope font-bold text-[#A564F7] uppercase whitespace-nowrap">
                Inclusive Employment Opportunities
              </h3>
            </div>

            {/* Left Content - Total Value */}
            <div className="absolute left-16 top-32">
              <div className="text-center mb-4">
                <div className="text-[24px] font-manrope font-bold text-[#9B2683] leading-[31.2px]">$5.1 million</div>
                <div className="text-[16px] font-manrope font-normal text-[#9B2683] leading-[20.8px] max-w-[161px]">
                  Total dollar value of income provided to beneficiaries through inclusive employment opportunities
                </div>
              </div>
            </div>

            {/* Center Content - Main Content Area */}
            <div className="ml-32 mr-24">
              {/* Sustained Income Opportunities */}
              <div className="mb-12">
                <div className="text-center mb-6">
                  <h4 className="text-[20px] font-manrope font-bold text-[#A564F7]">Sustained Income Opportunities</h4>
                </div>

                {/* Two buttons stacked */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center text-black text-[18px] font-manrope font-bold">
                      Direct Permanent Employment
                    </div>
                  </div>
                  
                  <div className="px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center text-black text-[18px] font-manrope font-bold">
                      Third-party Placement Opportunities
                    </div>
                  </div>
                </div>

                {/* Helper text for buttons */}
                <div className="text-right text-[12px] font-manrope font-medium text-black leading-[15.6px] max-w-[185px] ml-auto mt-2">
                  Number of beneficiaries offered<br/>permanent employment roles
                </div>
                <div className="text-right text-[12px] font-manrope font-medium text-black leading-[15.6px] max-w-[185px] ml-auto mt-2">
                  Number of successful<br/>beneficiary placements
                </div>
              </div>

              {/* Supplementary Income Opportunities */}
              <div>
                <div className="text-center mb-6">
                  <h4 className="text-[20px] font-manrope font-bold text-[#A564F7]">Supplementary Income Opportunities</h4>
                </div>

                {/* Four buttons in 2x2 grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center text-black text-[18px] font-manrope font-bold">
                      Contract/ Freelance Employment
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center text-black text-[18px] font-manrope font-bold">
                      Work Engagement Via 3rd-party Organisations
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center text-black text-[18px] font-manrope font-bold">
                      Sales Platform For Beneficiary Access to Markets
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white border border-[#9B2683] rounded-[16px] flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center text-black text-[18px] font-manrope font-bold">
                      Sustained Procurement from Beneficiary Suppliers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Number Display */}
            <div className="absolute right-24 top-32 text-center">
              <div className="text-[32px] font-manrope font-bold text-[#A564F7] mb-4">1,296</div>
              <div className="w-4 h-20 border-2 border-[#A564F7]"></div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-block rounded-full bg-[#9B2683] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#7d1f69]"
            >
              ← Back to Report Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
