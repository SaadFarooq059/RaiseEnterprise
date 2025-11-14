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

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="grid grid-cols-[871px_1fr] h-[684px]">
          {/* Left - CEO Image */}
          <div className="relative">
            <img src="/images/ceo.png" alt="CEO" className="w-full h-full object-cover" />
          </div>

          {/* Right - Yellow Quote Section */}
          <div className="bg-[#FCD290] px-12 py-16 flex flex-col justify-center">
            <p className="text-[#8F2576] text-2xl font-serif leading-relaxed mb-8">
              "As we enter the impact decade, only those who deliver meaningful social change alongside business
              excellence will shape the future."
            </p>
            <h3 className="text-[#A564F7] text-3xl font-serif font-medium capitalize">Mr. Alfie Othman</h3>
          </div>
        </div>
      </div>

      {/* Leading with Impact Section */}
      <div className="px-24 py-16">
        <h2 className="text-[64px] font-serif font-medium leading-[70.4px] mb-12">
          <span className="text-white">Leading with</span>
          <br />
          <span className="text-[#FCD290]">Impact</span>
        </h2>
        <div className="flex gap-16">
          {/* Stats Card */}
          <div className="flex-shrink-0">
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

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-lg font-sans font-medium leading-relaxed mb-6">
              In today's world, if your business can't lead with purpose and deliver real value to society, you'll be
              left behind. At raiSE, we believe that Social Enterprises (SE) are the businesses of the future, leading
              the way with social impact at the core of their business existence, not as an afterthought.
            </p>
            <p className="text-lg font-sans font-medium leading-relaxed mb-6">
              As we approach a decade of advocating for Social Entrepreneurship in Singapore, I reflect on the
              collective social ambition of not just founders, but also other key players in the ecosystem like funders,
              customers, suppliers, and employees notwithstanding, on charting the course of how businesses can be a
              vehicle for good. This past year, our work has been a silent testament to that ambition, creating
              standards for impact measurement and platforms that allow for greater transparency in impact reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Redefining the Future Section */}
      <div className="px-24 py-16">
        <div className="flex gap-16">
          <div className="w-[333px] flex-shrink-0 text-right pt-2">
            <h2 className="text-[35px] font-serif leading-[40px]">
              Redefining the Future of <span className="text-[#FCD290]">Social Enterprise</span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg font-sans leading-relaxed">
              Content about redefining the future of social enterprise will go here...
            </p>
          </div>
        </div>
      </div>

      {/* Venture Building Section */}
      <div className="px-24 py-16">
        <div className="flex gap-16">
          <div className="w-[333px] flex-shrink-0 text-right pt-2">
            <h2 className="text-[35px] font-serif leading-[40px]">
              <span className="text-[#FCD290]">Venture Building</span> Businesses with Impact
            </h2>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg font-sans leading-relaxed">
              Indeed, it takes an entire ecosystem to raiSE Social Entrepreneurs. Even in our Venture Building strategy,
              we sought to work with Institutes of Higher Learning (IHL) partners because nurturing the next generation
              of social changemakers is crucial for the future of our ecosystem. Through our funding and accelerator
              programmes, we provide early-stage support to aspiring Social Entrepreneurs to help them realise their
              social impact goals.
            </p>
            <h3 className="text-[#FCD290] text-[23px] font-serif">raiSE EnergiSE Grant</h3>
            <p className="text-lg font-sans leading-relaxed">
              Our flagship funding initiative,{" "}
              <span className="text-[#FCD290] font-bold underline">raiSE EnergiSE</span> seeks to equip young founders
              with resources to translate innovative ideas into impactful businesses. The enthusiastic participation
              from IHLs signals a rising interest in Social Entrepreneurship and it is encouraging that we received 83
              applications!
            </p>
          </div>
        </div>

        {/* Funding Stats Card */}
        <div className="mt-12 ml-24">
          <div className="w-[222px] h-[222px] bg-[#FCD290E6] rounded-[33px] border border-white p-6">
            <div className="text-center mb-4">
              <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">$500,000</div>
              <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">
                Committed in Total
              </div>
            </div>
            <div className="flex items-start gap-4 mt-8">
              <div className="flex-1 text-right">
                <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">10</div>
                <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">
                  Teams
                  <br />
                  Funded
                </div>
              </div>
              <div className="w-[1px] h-[60px] bg-[#9B2683]" />
              <div className="flex-1">
                <div className="text-[#9B2683] text-[29px] font-serif font-bold leading-tight">84</div>
                <div className="text-[#9B2683] text-[10px] font-sans font-bold leading-tight mt-1">Applications</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capacity Building Section */}
      <div className="px-24 py-16">
        <div className="flex gap-16">
          <div className="w-[333px] flex-shrink-0 text-right pt-2">
            <h2 className="text-[35px] font-serif leading-[40px]">
              <span className="text-[#FCD290]">Capacity Building:</span> Upskilling People & Enterprise
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg font-sans leading-relaxed mb-6">
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
        <div className="flex gap-16">
          <div className="w-[333px] flex-shrink-0 text-right pt-2">
            <h2 className="text-[35px] font-serif leading-[40px]">
              <span className="text-[#FCD290]">Showcasing</span> Social Enterprise Trailblazers
            </h2>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg font-sans leading-relaxed">
              As part of our effort to advocate for Social Enterprises, raising awareness has always been an integral
              part of our work. Admittedly, the journey of advocating for our trailblazers has been a shared one, many
              partners have come forward to work hand-in-hand to uplift our Social Enterprise members through various
              programmes.
            </p>
            <h3 className="text-[#FCD290] text-[23px] font-serif">The PurpoSE Agenda 2024</h3>
            <p className="text-lg font-sans leading-relaxed">
              On 3 December 2024, we held the second edition of our flagship event, The PurpoSE Agenda, to spark bold
              conversations on collaborative financing models. The event brought together ecosystem partners, corporate
              stakeholders, venture capitalists, impact investors, and Social Enterprises who are leading the way in
              converging profit and purpose.
            </p>
            <h3 className="text-[#FCD290] text-[23px] font-serif">Strategic Partnerships</h3>
            <p className="text-lg font-sans leading-relaxed">
              On 15 and 16 May 2024, raiSE hosted a 'Social Enterprise: The Future of Business' themed pavilion
              featuring seven of our Social Enterprises at tech business conference, Echelon, as part of our
              collaboration with e27 to highlight the growing relevance of impact driven business models and the need to
              start early.
            </p>
          </div>
        </div>

        {/* Events Stats Card */}
        <div className="mt-12 ml-24">
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
