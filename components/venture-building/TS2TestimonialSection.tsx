'use client'

import { useState } from 'react'

export default function TS2TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote: "The TS2 Accelerator has been incredible. The coaching, mentorship, and guidance have truly helped me grow as a leader and prepared me to expand my business and impact both regionally and globally.",
      name: "Mint Lim",
      role: "Co-Founder of School on Cloud",
      alumni: "TS2 2024 Alumni",
      orgDescription: "School on Cloud makes education accessible through a vast digital library while championing inclusive employment."
    },
    {
      quote: "TS2 connected us with mentors who truly understood and supported our vision, and with ecosystem players rich in real-world experience in building sustainable businesses.",
      name: "Sulfya Lim",
      role: "Co-Founder of GoTechUp",
      alumni: "TS2 2024 Alumni",
      orgDescription: "GoTechUp drives social impact by delivering engaging STEM education in a virtual environment, preparing learners for the future job market."
    },
    {
      quote: "TS2 is a great platform for us to connect with like-minded founders and other ecosystem players, and we can work together to figure out similar challenges in the startup journey.",
      name: "Gong He",
      role: "Co-Founder of FingerDance",
      alumni: "TS2 2024 Alumni",
      orgDescription: "FingerDance transcends communication barriers for the deaf and hearing through low cost, convenient AI sign language translation services."
    }
  ]

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      )
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
      setIsTransitioning(false)
    }, 300)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section 
      className="w-full px-6 md:px-12 lg:px-[60px] py-16 md:py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, white 15%, #A374FF 77%, #A374FF 100%)' }}
    >
      <div className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
        {/* Arrow Left */}
        <button 
          onClick={goToPrevious}
          className="hidden lg:block w-[72px] h-[72px] relative flex-shrink-0 cursor-pointer transform rotate-180 transition-all group hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
          </svg>
        </button>

        <div className={`w-full lg:w-[1080px] flex flex-col gap-12 md:gap-16 lg:gap-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Quote */}
          <div className="w-full">
            <p className="text-[#2A167F] text-[16px] md:text-[20px] lg:text-[28px] font-normal font-['Aleo'] italic leading-[24px] md:leading-[32px] lg:leading-[40px]">
              {currentTestimonial.quote}
            </p>
          </div>

          {/* Author Info */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[446px] flex flex-col gap-4">
              <h3 className="text-[#FCD290] text-[28px] md:text-[30px] lg:text-[34px] font-semibold font-['Aleo'] capitalize leading-[36px] lg:leading-[44.2px]">
                {currentTestimonial.name}
              </h3>
              <p className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium font-['Manrope'] leading-[24px] lg:leading-[31.2px]">
                <span className="font-medium">{currentTestimonial.role}</span>
                <br />
                <span className="font-medium">{currentTestimonial.alumni}</span>
              </p>
            </div>

            <div className="w-full lg:w-[446px] flex items-stretch gap-4 md:gap-5 lg:gap-6">
              <div className="w-px bg-[#FCD290] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-shrink-0"></div>
              <p className="flex-1 text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium font-['Manrope'] leading-[24px] lg:leading-[31.2px]">
                {currentTestimonial.orgDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Right */}
        <button 
          onClick={goToNext}
          className="hidden lg:block w-[72px] h-[72px] relative flex-shrink-0 cursor-pointer transition-all group hover:scale-110"
          aria-label="Next testimonial"
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden gap-4 justify-center w-full">
          <button 
            onClick={goToPrevious}
            className="w-[72px] h-[72px] relative flex-shrink-0 cursor-pointer transform rotate-180 transition-all group hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="w-[72px] h-[72px] relative flex-shrink-0 cursor-pointer transition-all group hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}