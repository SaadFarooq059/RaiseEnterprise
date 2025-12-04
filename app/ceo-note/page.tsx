"use client"

import Link from "next/link"

export default function CEONotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9B2683] to-[#512691] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed left-1/2 top-4 z-50 w-[90vw] max-w-[1200px] -translate-x-1/2">
        <div
          className="flex items-center justify-start gap-4 rounded-full px-4 py-2"
          style={{ background: "#A374FFB2" }}
        >
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-2 text-sm font-bold text-[#9B2683] transition-all hover:opacity-90"
          >
            Top
          </Link>
          <Link href="/" className="text-sm font-medium text-white transition-all hover:opacity-80">
            Report Overview
          </Link>
          <span className="text-sm font-semibold text-white">CEO Note</span>
          <span className="text-sm font-normal text-white">Redefining Social Enterprise</span>
          <span className="text-sm font-medium text-white">Venture Building</span>
          <span className="text-sm font-normal text-white">Capability Development</span>
          <span className="text-sm font-normal text-white">Showcasing Trailblazers</span>
          <span className="text-sm font-normal text-white">raiSE Podcast</span>
          <span className="text-sm font-normal text-white">Financial Highlights</span>
        </div>
      </nav>

      {/* Hero Section - Full height, no top padding */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-[871px_1fr] h-screen">
          {/* Left - CEO Image */}
          <div className="relative">
            <img src="/ceo/hero.png" alt="CEO" className="w-full h-full object-cover" />
          </div>

          {/* Right - Yellow Quote Section */}
          <div className="bg-[#FCD290] px-12 py-16 flex flex-col justify-center">
            {/* Heading */}
            <h1 className="text-[#8F2576] text-[68px] font-['Aleo'] font-normal leading-[72px] mb-8">
              A Message<br/>from our CEO
            </h1>
            
            {/* Quote */}
            <p className="text-[#8F2576] text-[28px] font-['Aleo'] font-bold leading-[42px] mb-8">
              "As we enter the impact decade, only<br/>
              those who deliver meaningful social<br/>
              change alongside business excellence<br/>
              will shape the future."
            </p>
            
            {/* Name */}
            <h3 className="text-[#A564F7] text-3xl font-serif font-medium capitalize">Mr. Alfie Othman</h3>
          </div>
        </div>
      </div>

      {/* Leading with Impact Section */}
      <div className="px-24 py-16">
        <div className="grid grid-cols-[400px_1fr] gap-12">
          {/* Left - Heading and Stats Card */}
          <div className="space-y-8">
            <h2 className="text-[64px] font-serif font-medium leading-[70.4px]">
              <span className="text-white">Leading</span>
              <br />
              <span className="text-white">with </span>
              <span className="text-[#FCD290]">Impact</span>
            </h2>

            {/* Stats Card */}
            <div className="w-[222px] h-[222px] bg-[#FCD290E6] rounded-[33px] border border-white p-6 relative">
              {/* Top stats */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1 text-right">
                  <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">693</div>
                  <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">
                    Members in our Community
                  </div>
                </div>
                <div className="w-[1px] h-[80px] bg-[#9B2683]" />
                <div className="flex-1">
                  <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">335</div>
                  <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">RIC Members</div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="flex items-start gap-4 mt-8">
                <div className="flex-1 text-right">
                  <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">247</div>
                  <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">
                    Emerging Social Enterprises
                  </div>
                </div>
                <div className="w-[1px] h-[80px] bg-[#9B2683]" />
                <div className="flex-1">
                  <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">111</div>
                  <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">
                    Leading Social Enterprises
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Stacked */}
          <div className="space-y-4">
            <p className="text-base font-sans leading-relaxed text-justify">
              In today's world, if your business can't lead with purpose and deliver real value to society, you'll be left behind. At raiSE, we believe that Social Enterprises (SE) are the businesses of the future, leading the way with social impact at the core of their business existence, not as an afterthought.
            </p>
            
            <p className="text-base font-sans leading-relaxed text-justify">
              As we approach a decade of advocating for Social Entrepreneurship in Singapore, I reflect on the collective social ambition of not just founders, but also other key players in the ecosystem like funders, customers, suppliers, and employees notwithstanding, on charting the course of how businesses can be a vehicle for good. This past year, our work has been a silent testament to that ambition, creating standards for impact measurement and platforms that allow for greater transparency in impact reporting.
            </p>
            
            <p className="text-base font-sans leading-relaxed text-justify">
              Over the years, we have witnessed firsthand how small ideas have blossomed into impactful ventures. We've grown the Social Enterprise sector from a fledgling community of 300+ entities into a significant pillar within the broader business landscape, actively contributing to nation building. Because the needs of our Social Enterprise members have evolved, we endeavour to meet the progressive needs of our diverse and maturing membership.
            </p>
            
            <p className="text-base font-sans leading-relaxed text-justify">
              As SMEs and Corporates increasingly looked to raiSE's membership as a sign of credibility, we embarked on thoughtful changes to our membership support structures; ensuring our membership assessment reflected the richness of our members' impact outcomes and that it embodies the granularity that decision makers needed. After two years and close to 300 instances of consultations with our members, we arrived at a more reflective way of measuring and articulating impact.
            </p>
            
            <p className="text-base font-sans leading-relaxed text-justify">
              During Open Talk 2024 held on 28th August 2024, my colleagues and I shared our plans to enhance our support:
            </p>

            {/* Refining Membership Categories */}
            <div className="mt-6">
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-medium leading-[29.9px] mb-3">
                Refining Membership Categories
              </h3>
              <p className="text-[#FFFBFB] text-[18px] font-['Manrope'] font-medium leading-[23.4px] text-justify">
                Starting with the 'raiSE Impact Community' for aspiring startups to 'Emerging Social Enterprise', 'Leading Social Enterprise' for those creating impact and the highest level of recognition, 'Verified Leading Social Enterprise'. Corresponding logos were introduced for each membership category, so customers (both B-C and B-B) could better recognise our members at different stages of their impact journey.
              </p>
            </div>

            {/* Definition of SE Characteristics */}
            <div className="mt-6">
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-medium leading-[29.9px] mb-3">
                Definition of SE Characteristics
              </h3>
              <p className="text-[#FFFBFB] text-[18px] font-['Manrope'] font-medium leading-[23.4px] text-justify mb-4">
                By defining the core characteristics of Social Enterprises: Intentionality, Additionality, and Proportionality (the I-A-P framework), raiSE has established a common language for identifying and recognising social enterprises in Singapore. In the absence of a legal registration framework, raiSE membership serves as a trusted benchmark, providing credibility to Social Enterprises and signaling to funders, partners, and customers that these businesses operate with genuine social impact at their core.
              </p>
              <p className="text-[#FFFBFB] text-[18px] font-['Manrope'] font-medium leading-[23.4px] text-justify">
                raiSE also played a pivotal role in the development of the Sustainable Philanthropy Framework, an initiative led by the National Council of Social Service (NCSS) in partnership with the National Volunteer and Philanthropy Centre (NVPC), the Ministry of Social and Family Development (MSF), and the SG Cares Office. This national framework provides corporates with a structured approach to measure the outcomes of their philanthropic efforts and articulate the 'Social' component of their Environmental, Social, and Governance (ESG) goals. raiSE's Social Enterprise members exemplify the principles of this framework, embedding socially responsible business practices into their operations.
              </p>
            </div>

            {/* Social Impact Report */}
            <div className="mt-6">
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-medium leading-[29.9px] mb-3">
                Social Impact Report
              </h3>
              <p className="text-[#FFFBFB] text-[18px] font-['Manrope'] font-medium leading-[23.4px] text-justify">
                Transparency is key to building trust and credibility with key stakeholders; therefore, we have made our members' impact achievements visible to the public with the introduction of the Social Impact Report on raiSE's <span className="text-[#FCD290] font-bold underline">membership directory</span>. It is our hope that this will significantly boost SE credibility and opens doors to collaborations, funding opportunities, and the building pathways for integration into larger business ecosystems.
              </p>
            </div>

            {/* Venture Building Introduction - New Section */}
            <div className="mt-8">
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mb-6">
                Indeed, it takes an entire ecosystem to raiSE Social Entrepreneurs. Even in our Venture Building strategy, we sought to work with Institutes of Higher Learning (IHL) partners because nurturing the next generation of social changemakers is crucial for the future of our ecosystem. Through our funding and accelerator programmes, we provide early-stage support to aspiring Social Entrepreneurs to help them realise their social impact goals.
              </p>

              {/* raiSE EnergiSE Grant */}
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-normal leading-[29.9px] mb-3">
                raiSE EnergiSE Grant
              </h3>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mb-6">
                Our flagship funding initiative, <span className="text-[#FCD290] font-bold underline">raiSE EnergiSE</span> seeks to equip young founders with resources to translate innovative ideas into impactful businesses. The enthusiastic participation from IHLs signals a rising interest in Social Entrepreneurship and it is encouraging that we received 83 applications!
              </p>

              {/* Technology for Sustainable Social Impact Accelerator */}
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-normal leading-[29.9px] mb-3">
                Technology for Sustainable Social Impact Accelerator
              </h3>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify">
                In collaboration with the National University of Singapore (NUS), raiSE launched the <span className="text-[#FCD290] font-bold underline">Technology for Sustainable Social Impact Accelerator (TS2)</span>, offering selected, bold and tech-based startups with invaluable resources, access to raiSE and NUS Enterprise's extensive networks and a customised development plan to accelerate their social impact trajectory.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capacity Building Section */}
      <div className="px-24 py-16">
        <div className="grid grid-cols-[400px_1fr] gap-12">
          {/* Left - Heading */}
          <div>
            <h2 className="text-[35px] font-serif leading-[40px]">
              <span className="text-[#FCD290]">Capacity Building:</span> Upskilling People & Enterprise
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg font-sans leading-relaxed">
              Our focus on early-stage funding and capacity building stems from our firm belief that Social Enterprises
              must start their journey with a clear social mission from the outset. Beginning with a clear social
              mission anchors the business model. When it is explicit and well-communicated, it builds trust and
              credibility. It has been our experience that Social Enterprises who start with a social mission sustain
              greater stakeholder support (customers, employees, partners, investors) over time.
            </p>
            <p className="text-lg font-sans leading-relaxed">
              Because we believe a business's social mission is its <span className="font-bold">raison d'être</span>, we
              remain steadfast in our commitment to cultivating the next generation of social entrepreneurs. Through
              deeper partnerships with IHLs, we embedded our <span className="font-bold">'Grow Impact'</span> curriculum
              into the education system.
            </p>
          </div>
        </div>
      </div>

      {/* Showcasing Trailblazers Section */}
      <div className="px-24 py-16">
        <div className="grid grid-cols-[400px_1fr] gap-12">
          {/* Left - Heading and Stats Card */}
          <div className="space-y-8">
            <h2 className="text-[35px] font-serif leading-[40px]">
              <span className="text-[#FCD290]">Showcasing</span> Social Enterprise Trailblazers
            </h2>

            {/* Events Stats Card */}
            <div className="w-[222px] h-[222px] bg-[#FCD290E6] rounded-[33px] border border-white p-6">
              <div className="text-center mb-4">
                <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">100</div>
                <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">
                  Social Enterprises profiled
                </div>
              </div>
              <div className="flex items-start gap-4 mt-8">
                <div className="flex-1 text-right">
                  <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">4</div>
                  <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">Key Events</div>
                </div>
                <div className="w-[1px] h-[60px] bg-[#9B2683]" />
                <div className="flex-1">
                  <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">6</div>
                  <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">PR Features</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Advocacy and Partnerships Section */}
      <div className="px-24 py-16">
        <div className="grid grid-cols-[400px_1fr] gap-12">
          {/* Left - Heading */}
          <div>
            <h2 className="text-[35px] font-serif leading-[40px]">
              Advocacy and <span className="text-[#FCD290]">Partnerships</span>
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify">
              As part of our effort to advocate for Social Enterprises, raising awareness has always been an integral part of our work. Admittedly, the journey of advocating for our trailblazers has been a shared one, many partners have come forward to work hand-in-hand to uplift our Social Enterprise members through various programmes.
            </p>

            {/* The PurpoSE Agenda 2024 */}
            <div className="mt-6">
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-normal leading-[29.9px] mb-3">
                The PurpoSE Agenda 2024
              </h3>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify">
                On 3 December 2024, we held the second edition of our flagship event, The PurpoSE Agenda, to spark bold conversations on collaborative financing models. The event brought together ecosystem partners, corporate stakeholders, venture capitalists, impact investors, and Social Enterprises who are leading the way in converging profit and purpose.
              </p>
            </div>

            {/* Strategic Partnerships */}
            <div className="mt-6">
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-normal leading-[29.9px] mb-3">
                Strategic Partnerships
              </h3>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify">
                On 15 and 16 May 2024, raiSE hosted a &apos;Social Enterprise: The Future of Business&apos; themed pavilion featuring seven of our Social Enterprises at tech business conference, Echelon, as part of our collaboration with e27 to highlight the growing relevance of impact driven business models and the need to start early.
              </p>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
                On 28 March 2025, in partnership with ACE.SG, we co-organised the International Women&apos;s Day Accelerate Action Conference, which included a Social Enterprise breakout track on Collaboration over Competition, drawing 275 attendees to celebrate the impact of Women Social Entrepreneurs.
              </p>
            </div>

            {/* Increasing Visibility */}
            <div className="mt-6">
              <h3 className="text-[#FCD290] text-[23px] font-['Aleo'] font-normal leading-[29.9px] mb-3">
                Increasing Visibility
              </h3>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify">
                We believe in celebrating and <span className="text-[#FCD290] font-bold underline">amplifying the impactful work of our members.</span> By leveraging our platforms and forging key partnerships, we enhanced the public profile of our Social Enterprises, connected them with a broader audience, and enhanced recognition for their impact. We congratulate our members featured in the Gen.T list by Singapore Tatler and SL25 by the Stewardship Asia Centre, to name a few.
              </p>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
                I want to extend my sincere thanks to our valued ecosystem partners who have acknowledged raiSE&apos;s frameworks, recognised the impact created by our Social Enterprise members and increased the visibility of our SE members.
              </p>
            </div>

            {/* Closing Message */}
            <div className="mt-8">
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify">
                In closing, I am grateful to those that have supported raiSE and uplifted the SE ecosystem and share that we are excited about the journey ahead as raiSE celebrates its 10th Anniversary. We owe our gratitude to the Ministry of Social and Family Development (MSF) and the National Council of Social Service (NCSS) for their steadfast support and to our Chairperson and Board members for their invaluable counsel and dedicated contributions, over the years. I would also like to extend my heartfelt thanks to the raiSE team, both past and present, whose passion, resilience, and unwavering commitment have been the driving force behind all that we have achieved together.
              </p>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] text-justify mt-4">
                Last but not least, I thank our Social Enterprise members for trusting us to journey with you. Your vision, courage, and determination inspire us every day and remind us why we do what we do. With hard-earned lessons and deeper insights, my team and I are ready to forge ahead with renewed purpose for the next decade, <span className="text-[#FCD290]">leading</span> our SE members <span className="text-[#FCD290]">with</span> vision, resilience, and <span className="text-[#FCD290]">impact</span>.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px]">
                Sincerely,
              </p>
              <p className="text-white text-[18px] font-['Manrope'] font-normal leading-[23.4px] mt-4">
                Alfie Othman<br/>
                CEO, raiSE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-24 py-12">
        <Link
          href="/"
          className="inline-block rounded-full bg-[#FCD290] px-8 py-3 text-[#9B2683] font-bold transition-all hover:opacity-90"
        >
          Back to Report Overview
        </Link>
      </div>
    </div>
  )
}
