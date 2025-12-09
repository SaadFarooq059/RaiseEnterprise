export default function GrowthSection() {
  return (
    <div className="mb-12 md:mb-16 flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Left Box - Heading with SECTOR GROWTH behind */}
      <div className="relative p-6 md:p-8" style={{ minWidth: '280px' }}>
        {/* SECTOR GROWTH - 90 degrees behind H3 */}
        <div 
          className="absolute top-8 left-8 text-[#A564F7] text-base md:text-[20px] font-manrope font-bold leading-tight md:leading-[58px] whitespace-nowrap z-0" 
          style={{ transform: 'rotate(90deg)', transformOrigin: 'top left' }}
        >
          SECTOR GROWTH
        </div>
        
        {/* H3 Heading */}
        <h3 className="relative z-10 text-[#C2158F] text-2xl md:text-[32px] font-manrope font-bold leading-tight md:leading-[32px]">
          Growth in<br />
          Membership &<br />
          Revenues
        </h3>
      </div>

      {/* Right Box - Paragraphs Only */}
      <div className="flex-1 p-6 md:p-8">
        <p className="text-black text-sm md:text-[16px] font-manrope font-medium leading-relaxed md:leading-[20.8px]">
          The Social Enterprise sector continues to demonstrate steady growth. As it can be seen in the past year, raiSE&apos;s membership has <span className="font-bold">nearly doubled from 357 to 693</span>, reflecting the growing commitment of businesses to prioritise incorporating social impact intentionally and strategically into their enterprise.
          <br />
          <br />
          The collective revenue of raiSE Social Enterprise members rose from $179.5 million to $210.3 million, underscoring their increasing ability to deliver impact while remaining economically sustainable. This upward trajectory, whilst marginal, signals the sector&apos;s expanding contribution to building a more inclusive and equitable future.
        </p>
      </div>
    </div>
  )
}
