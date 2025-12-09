export default function NetworkingNightSection() {
  return (
    <div className="relative flex justify-end">
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
        <div className="relative pt-8 md:pt-12 lg:pt-[50px] pb-12 md:pb-16 lg:pb-[80px] pl-4 md:pl-6 lg:pl-[25px]">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 md:gap-[13px] pb-4">
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[670px] h-auto md:h-[300px] lg:h-[447px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/networking1.png" 
                alt="Networking night 1"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[670px] h-auto md:h-[300px] lg:h-[447px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/networking2.png" 
                alt="Networking night 2"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[670px] h-auto md:h-[300px] lg:h-[447px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/networking3.png" 
                alt="Networking night 3"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[670px] h-auto md:h-[300px] lg:h-[447px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/networking4.png" 
                alt="Networking night 4"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[670px] h-auto md:h-[300px] lg:h-[447px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/networking5.png" 
                alt="Networking night 5"
              />
              <img 
                className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[670px] h-auto md:h-[300px] lg:h-[447px] rounded-[15px] md:rounded-[20px] object-cover" 
                src="/showcasing-trailblazers/networking6.png" 
                alt="Networking night 6"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative px-4 md:px-6 lg:px-[25px] pb-12 md:pb-16 lg:pb-[80px]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8 lg:gap-[50px]">
            {/* Left - Heading */}
            <div className="flex-shrink-0">
              <div className="text-[#FCD290] text-lg md:text-[20px] font-semibold font-['Manrope'] leading-5 mb-6 md:mb-[37px]">
                MEMBER EVENT
              </div>
              <h3 className="text-white text-2xl md:text-3xl lg:text-[36px] font-normal font-['Aleo'] leading-tight md:leading-[46.8px] max-w-full lg:max-w-[356px]">
                raiSE Member's Networking Night
              </h3>
            </div>
            
            {/* Right - Paragraph */}
            <div className="w-full">
              <p className="text-white text-base md:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]" style={{ wordWrap: 'break-word' }}>
                On 10 December 2024, the raiSE Members' Networking Night brought together 22 raiSE Impact Community members and 51 Social Enterprise members for a light-hearted yet purposeful year-end celebration. <br/><br/>
                Beyond marking the close of the year, the event served as a valuable platform for aspiring Social Entrepreneurs from the raiSE Impact Community to connect with established Social Enterprises that are already creating meaningful impact. <br/><br/>
                Designed to spark connections and foster collaborations, the event facilitated meaningful conversations and encouraged the exchange of upcoming initiatives, ongoing projects, and potential opportunities for cross-sector partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
