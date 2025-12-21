export default function HeroSectionSocial() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-[#0E2283] overflow-hidden">
      
      {/* Background Image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        src="/social/hero.png"
        alt="Background"
      />

      {/* Content */}
      <div className="
        relative z-10 h-full 
        flex flex-col 
        justify-center lg:justify-start
        px-4 sm:px-6 md:px-12 lg:px-[8%] xl:px-[12%]
        py-8 md:py-0 
        lg:pt-[160px]        /* ⬅ reduced */
        -translate-y-6       /* ⬅ move text UP */
      ">
        
        {/* Heading */}
        <h1 className="max-w-full sm:max-w-[588px] text-white
          text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]
          font-medium font-['Aleo'] capitalize
          leading-[34px] sm:leading-[38px] md:leading-[48px] lg:leading-[58.5px]
        ">
          Redefining the Future of Social Enterprise
        </h1>

        {/* Description */}
        <p className="max-w-full sm:max-w-[500px]
          mt-2 sm:mt-3 md:mt-4 lg:mt-6
          text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
          font-semibold font-['Manrope']
          leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-6
        ">
          As an ecosystem developer, raiSE is redefining Singapore's Social Enterprise landscape through the development of new frameworks, enhancing the credibility of our members.
          <br /><br />
          This ensures that every organisation, from new start-ups to established leaders, receives the necessary support and resources to continue scaling and growing on their social impact journey.
        </p>

      </div>
    </section>
  )
}
