export default function TS2CoverageSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[120px] py-12 md:py-16 lg:py-20">
      {/* Background Images */}
      <img 
        className="absolute left-[-47px] top-[200px] w-[1535px] h-[768px] object-cover opacity-20 hidden xl:block" 
        src="/venture-building/ts2-bg.png" 
        alt="Background"
      />
      
      <div className="relative z-10">
        {/* Coverage Card */}
        <div 
          className="w-full lg:max-w-[1328px] rounded-l-[46px] p-8 md:p-12 lg:p-16 opacity-80"
          style={{ background: 'linear-gradient(180deg, #A374FF 21%, #A374FF 100%)' }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-8 lg:gap-12">
              <h3 className="text-white text-[36px] md:text-[42px] lg:text-[48px] font-medium font-['Aleo'] capitalize leading-[44px] lg:leading-[52.8px]">
                Coverage & Features
              </h3>
              <p className="text-black text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Manrope'] leading-[24px] md:leading-[26px] lg:leading-[28px]">
                NUS and raiSE commit S$3.5M to support tech-based Social Enterprises, with the TS2 Accelerator featured in media like The Straits Times and NUS News for showcasing innovative, tech-driven solutions.
              </p>
            </div>
            
            {/* Right Images */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <img 
                className="w-full lg:w-[550px] h-auto lg:h-[569px] rounded-[20px] object-cover" 
                src="/venture-building/coverage1.png" 
                alt="Coverage 1"
              />
              <img 
                className="w-full lg:w-[611px] h-auto lg:h-[569px] rounded-[20px] object-cover hidden xl:block" 
                src="/venture-building/coverage2.png" 
                alt="Coverage 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
