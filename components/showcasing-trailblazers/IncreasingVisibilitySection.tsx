export default function IncreasingVisibilitySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[415px_1fr] gap-0 lg:gap-[90px]">
      {/* Left Sidebar - Empty space for SidebarNav */}
      <div className="hidden lg:block"></div>

      {/* Right Content */}
      <div>
        {/* Section Header */}
        <div className="mb-6 md:mb-8 lg:mb-[35px]">
          <div className="text-[#FCD290] text-lg md:text-[20px] font-semibold font-['Manrope'] leading-5 mb-2 lg:mb-[25px]">
            CONNECTING THE ECOSYSTEM
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-[36px] font-medium font-['Aleo'] leading-tight md:leading-[46px] max-w-full lg:max-w-[787px]">
            Increasing Visbility
          </h2>
        </div>

        {/* First Paragraph */}
        <div className="max-w-full lg:max-w-[806px] mb-8 md:mb-12 lg:mb-[60px]">
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px]">
            As an ecosystem developer, we remain closely attuned to the needs and challenges of our members to build a vibrant and supportive community. This past year, we created tailored opportunities for our community to connect, collaborate, and grow through our Member-exclusive events and 4 Flagship events, strengthening the bonds that make our collective impact possible.<br/><br/>
            We believe in celebrating and amplifying the great work of our members. By leveraging our platforms and forging key partnerships, we enhanced the public profile of our Social Enterprises, connected them with a broader audience, and enhanced recognition for their impact. Over the past year, there were 6 PR Features, 100 Unique Social Enterprises profiled and 173 features of our Social Enterprises across all our channels such as our eDMs and social media platforms. This initiative was complemented by media features that highlighted our community's impact through key events and collaborations.
          </p>
        </div>

        {/* Gen.T Section */}
        <div className="mb-8 md:mb-12 lg:mb-[60px]">
          <h3 className="text-[#FCD290] text-xl md:text-2xl lg:text-[32px] font-semibold font-['Manrope'] leading-tight md:leading-[46px] mb-6 md:mb-8 lg:mb-[30px]">
            Celebrating Innovation and Gen.T 2024 Honourees
          </h3>
          
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px] max-w-full lg:max-w-[805px] mb-8 md:mb-12 lg:mb-[60px]">
            The Tatler Gen.T list honours the next generation of trailblazing leaders and entrepreneurs who are shaping the future of Asia. This initiative is just one of the many ways we empower and recognise our Social Enterprises, providing them with a platform to gain the exposure and network needed to attract partnerships, funding, and talent, ultimately allowing them to scale their impact.<br/><br/>
            Recognising the great work and impact of our Social Enterprises is a core part of this effort, whether through a feature story or a prestigious award. In line with this commitment, we proudly nominated a number of our members for Tatler's 2024 Gen.T recognition. Those nominated include:
          </p>

          {/* Honorees Grid - Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[19px] mb-4 md:mb-[19px]">
            {/* Honoree 1 - Sherman Ho */}
            <div className="flex gap-4 md:gap-[19px] items-center">
              <img 
                className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
                src="/showcasing-trailblazers/founder1.png" 
                alt="Sherman Ho"
              />
              <div className="max-w-full md:max-w-[174px]">
                <div className="text-[#FCD290] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Sherman Ho
                </div>
                <div className="text-[#FCD290] text-sm md:text-[16px] font-normal font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Founder
                </div>
                <div className="text-white text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Happiness Initiative
                </div>
              </div>
            </div>

            {/* Honoree 2 - Mint Lim */}
            <div className="flex gap-4 md:gap-[19px] items-center">
              <img 
                className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
                src="/showcasing-trailblazers/founder2.png" 
                alt="Mint Lim"
              />
              <div className="max-w-full md:max-w-[234px]">
                <div className="text-[#FCD290] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Mint Lim
                </div>
                <div className="text-[#FCD290] text-sm md:text-[16px] font-normal font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Founder
                </div>
                <div className="text-white text-sm md:text-[16px] font-normal font-['Manrope'] leading-tight md:leading-[20.8px]">
                  School on Cloud
                </div>
              </div>
            </div>
          </div>

          {/* Honorees Grid - Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[19px] mb-4 md:mb-[19px]">
            {/* Honoree 3 - Beatrice Teo */}
            <div className="flex gap-4 md:gap-[19px] items-center">
              <img 
                className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
                src="/showcasing-trailblazers/founder3.png" 
                alt="Beatrice Teo"
              />
              <div className="max-w-full md:max-w-[145px]">
                <div className="text-[#FCD290] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Beatrice Teo
                </div>
                <div className="text-[#FCD290] text-sm md:text-[16px] font-normal font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Founder
                </div>
                <div className="text-white text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Amazing Speech Therapy
                </div>
              </div>
            </div>

            {/* Honoree 4 - Anders Tan */}
            <div className="flex gap-4 md:gap-[19px] items-center">
              <img 
                className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover flex-shrink-0" 
                src="/showcasing-trailblazers/founder4.png" 
                alt="Anders Tan"
              />
              <div className="max-w-full md:max-w-[145px]">
                <div className="text-[#FCD290] text-sm md:text-[16px] font-semibold font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Anders Tan
                </div>
                <div className="text-[#FCD290] text-sm md:text-[16px] font-normal font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Co-Founder
                </div>
                <div className="text-white text-sm md:text-[16px] font-medium font-['Manrope'] leading-tight md:leading-[20.8px]">
                  Inclus
                </div>
              </div>
            </div>
          </div>

          {/* Photo Credit */}
          <div className="text-[#FCD290] text-sm md:text-[16px] font-light font-['Manrope'] leading-tight md:leading-[20.8px] mb-8 md:mb-12 lg:mb-[45px]">
            Photo credit: TatlerAsia
          </div>
        </div>

        {/* Singapore Steward Leadership Section */}
        <div className="mb-8 md:mb-12 lg:mb-[60px]">
          <h3 className="text-[#FCD290] text-xl md:text-2xl lg:text-[32px] font-semibold font-['Manrope'] leading-tight md:leading-[34px] mb-4 md:mb-6 lg:mb-[20px] max-w-full lg:max-w-[692px]">
            Singapore Steward Leadership (SL25)
          </h3>
          
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px] max-w-full lg:max-w-[815px] mb-6 md:mb-8 lg:mb-[47px]">
            The efforts of our Social Enterprises, The Radiant Spectrum and D2L.sg were recognised at the national level during the Steward Leadership 25 awards, an annual listing of the 25 best projects of steward leadership excellence in the Asia-Pacific region.
          </p>

          {/* Layered Images Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 -mt-16 -mb-16 ml-10">
  
  {/* Image */}
  <img 
    className="w-full md:w-1/2 lg:w-[1007px] h-auto rounded-[20px] md:rounded-[30px] object-cover" 
    src="/showcasing-trailblazers/event6.svg" 
    alt="Singapore Steward Leadership Award Recipients"
  />

  {/* Caption Text (Right side on desktop) */}
  <div className="text-white text-sm md:text-base font-light font-['Inter'] leading-relaxed md:pt-4 mt-20 ">
    <p className="mb-1 -ml-40">
      <span className="font-medium">Left:</span> Dr Wesley Joon-Wie Tann <br/>Cofounder, The Radiant Spectrum
    </p>
    <br></br  >
    <p className="mb-1 -ml-40">
      <span className="font-medium">Right:</span> Ms Lin QingHui <br/> Founder D2L.sg Additional Word Launch
    </p>
  </div>

</div>
      
        </div>

        {/* Sustainable Philanthropy Framework Section */}
        <div className="mb-8 md:mb-12 lg:mb-[60px]">
          <h3 className="text-[#FCD290] text-xl md:text-2xl lg:text-[30px] font-semibold font-['Manrope'] leading-tight md:leading-[34px] mb-4 md:mb-6 lg:mb-[20px] max-w-full lg:max-w-[808px]">
            Launch of the Sustainable Philanthropy Framework
          </h3>
          
          <p className="text-white text-base md:text-lg lg:text-[18px] font-medium font-['Manrope'] leading-relaxed md:leading-[23.4px] max-w-full lg:max-w-[815px] mb-6 md:mb-8 lg:mb-[47px]">
            raiSE played a pivotal role in the launch of the Sustainable Philanthropy Framework, developed in collaboration with NCSS, NVPC, MSF, and SG Cares. This milestone event, launched by Minister Masagos Zulkifli, brought visibility to raiSE's role in shaping the social impact landscape and was covered by media outlets like Business Times.
          </p>

          <img 
            className="w-full lg:w-[1052px] h-auto lg:h-[521px] rounded-[15px] md:rounded-[20px] object-cover" 
            src="/showcasing-trailblazers/event5.png" 
            alt="Sustainable Philanthropy Framework Launch"
          />
        </div>
      </div>
    </div>
  )
}
