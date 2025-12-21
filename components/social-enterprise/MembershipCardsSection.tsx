interface MembershipCardProps {
  imageSrc: string
  number: string
  title: string
  description: string
  highlightColor: string
}

function MembershipCard({
  imageSrc,
  number,
  title,
  description,
  highlightColor,
}: MembershipCardProps) {
  return (
    // Minimal horizontal padding per card so columns can sit very close
    <div className="px-1 md:px-2">
      <div
        className="relative h-[280px] md:h-[314px]
                   w-full max-w-[440px]
                   bg-white rounded-[20px] md:rounded-[30px]
                   p-4 md:p-5"
        style={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.25)' }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-[180px] md:w-[220px] h-[90px] md:h-[110px] object-cover"
        />

        <div className="absolute bottom-8 md:bottom-10 left-4 right-4">
          <div
            className="text-3xl md:text-[48px] font-aleo font-bold leading-tight md:leading-[58px] mb-2 md:mb-3"
            style={{ color: highlightColor }}
          >
            {number}
          </div>

          <div
            className="text-xs md:text-[15px] font-manrope leading-relaxed md:leading-[19.5px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  )
}

export default function MembershipCardsSection() {
  return (
    <>
      <p className="mb-6 md:mb-8 text-lg md:text-xl font-normal leading-relaxed md:leading-[26px] text-[#9B2683]">
        The raiSE membership includes{' '}
        <span className="text-xl md:text-2xl font-bold">693</span> businesses across the
        different stages of their Social Enterprise journey.
      </p>

      {/* Four Cards Section - 2 per row (tight columns) */}
      <div
        className="mb-12 md:mb-16
                   grid grid-cols-1 md:grid-cols-2
                   gap-y-6 md:gap-y-8
                   -mx-6 md:-mx-0"
      >
        <MembershipCard
          imageSrc="/social/logo1.png"
          number="335"
          title="raiSE Impact Community Members"
          description='<span class="font-bold text-[#8F2576]">raiSE Impact Community Members</span><span class="text-black font-medium"> that have demonstrated the </span><span class="font-bold text-[#8F2576]">Intentionality</span><span class="text-black font-medium"> to Incorporate social impact in their business.</span>'
          highlightColor="#8F2576"
        />

        <MembershipCard
          imageSrc="/social/logo2.png"
          number="247"
          title="Emerging Social Enterprises"
          description='<span class="font-bold text-[#9B2683]">Emerging Social Enterprises</span><span class="text-black font-medium"> that have demonstrated </span><span class="font-bold text-[#9B2683]">Intentionality</span><span class="text-black font-medium"> and </span><span class="font-bold text-[#9B2683]">Additionality</span><span class="text-black font-medium"> in their business models.</span>'
          highlightColor="#9B2683"
        />

        <MembershipCard
          imageSrc="/social/logo3.png"
          number="111"
          title="Leading Social Enterprises"
          description='<span class="font-bold text-[#9B2683]">Leading Social Enterprises</span><span class="text-black font-medium"> that have demonstrated all 3 pillars of </span><span class="font-bold text-[#9B2683]">Intentionality</span><span class="text-black font-medium">, </span><span class="font-bold text-[#9B2683]">Additionality</span><span class="text-black font-medium">, and </span><span class="font-bold text-[#9B2683]">Proportionality</span><span class="text-black font-medium"> in their business models.</span>'
          highlightColor="#9B2683"
        />

        <MembershipCard
          imageSrc="/social/logo4.png"
          number=""
          title="Verified Social Enterprises"
          description='<span class="text-black font-medium">At raiSE&apos;s 10th Anniversary Celebration, we will mark a new chapter for the sector as we recognise the inaugural cohort of </span><span class="font-bold text-[#9B2683]">Verified Social Enterprises</span><span class="text-black font-medium">, setting a new standard for transparency and recognition within the </span><span class="font-bold text-[#9B2683]">Social Enterprise</span><span class="text-black font-medium"> ecosystem.</span>'
          highlightColor="#9B2683"
        />
      </div>
    </>
  )
}
