export default function HeroSectionShowcasing() {
  return (
    <section className="relative w-full min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[800px] bg-[#0E2283] overflow-hidden">
      {/* Background Image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        src="/showcasing-trailblazers/hero.png"
        alt="Background"
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[800px] flex flex-col justify-center lg:justify-start px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-[12%] py-12 sm:py-16 md:py-20 lg:pt-[220px] xl:pt-[260px]">
        {/* Heading */}
        <h1 className="max-w-full sm:max-w-[520px] md:max-w-[588px] text-white text-[24px] xs:text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-medium font-['Aleo'] leading-[1.2] sm:leading-[1.25] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
          Showcasing Social<br/>Enterprise Trailblazers   
        </h1>
        
        {/* Description */}
        <p className="max-w-full sm:max-w-[460px] md:max-w-[520px] lg:max-w-[580px] text-white text-[14px] xs:text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-semibold font-['Manrope'] leading-[1.5] sm:leading-[1.45] md:leading-[1.4]">
          This past year, we provided our Social Enterprises with platforms for growth, enabling them to showcase their impactful work and innovative products and services, as well as to connect and collaborate with their peers, cultivating a vibrant and supportive community and strengthening the bonds that make our collective a force for positive change.
        </p>
      </div>
    </section>
  )
}