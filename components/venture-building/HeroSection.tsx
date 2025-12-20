export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-[#0E2283] overflow-hidden">
      {/* Background Image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        src="/venture-building/bg.png"
        alt="Background"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center lg:justify-start px-4 sm:px-6 md:px-12 lg:px-[8%] xl:px-[12%] py-8 md:py-0 lg:pt-[216px]">
        {/* Heading */}
        <h1 className="max-w-full sm:max-w-[588px] text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium font-['Aleo'] capitalize leading-[34px] sm:leading-[38px] md:leading-[48px] lg:leading-[58.5px]">
          Venture Building: <br/>Building Businesses with Impact
        </h1>
        
        {/* Description */}
        <p className="max-w-full sm:max-w-[500px] mt-2 sm:mt-3 md:mt-4 lg:mt-6 text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold font-['Manrope'] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-6">
          We believe that nurturing the next generation of social entrepreneurs is crucial for the future of our ecosystem. Through our funding and accelerator programmes, we provide support to help them realise their vision for social change and build a business with purpose.
        </p>
      </div>
    </section>
  )
}
