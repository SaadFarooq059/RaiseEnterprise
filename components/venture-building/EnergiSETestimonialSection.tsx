'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: "The support from the raiSE EnergiSE grant programme has been instrumental in our journey. Its milestone-based approach guided us to implement and refine our business and social impact strategies, which has enabled us to achieve sustainable growth.",
    image: "/venture-building/testimonial.png",
    name: "Jesslyn Yim",
    title: "Co-Founder, The Courage Chapter, EnergiSE 2024 Cohort",
    description: "The Courage Chapter helps senior professionals transition to their next chapters through meaningful projects & fractional roles with companies and charities, leveraging their expertise for greater business impact."
  },
  {
    quote: "The raiSE energiSE grant has set myself and my team up for success not just through the provided capital but the network we've gained working with raiSE.\n\nThrough the workshops and networking events we've expanded our knowledge as first time business owners as well as guiding us when it comes to common and uncommon struggles.\n\nBeing able to grow and expand at the rate we are now is something that could not have been done without the energiSE grant and of course the support of all the staff from raiSE.",
    image: "/venture-building/testimonial.png",
    name: "Ilzymanshah Kamarudin",
    title: "Founder, Assistive Technologies, EnergiSE 2024 Cohort",
    description: "Assistive Technologies makes communication accessible for persons with disabilities through the use of technology."
  }
]

export default function EnergiSETestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      setIsTransitioning(false)
    }, 300)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section 
      className="w-full px-4 sm:px-6 md:px-12 lg:px-[60px] py-10 sm:py-12 md:py-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, white 15%, #A374FF 77%, #A374FF 100%)' }}
    >
      <div className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Arrow Left */}
        <button 
          onClick={goToPrevious}
          className="hidden lg:block w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] relative flex-shrink-0 cursor-pointer transform rotate-180 transition-all group hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
          </svg>
        </button>

        <div className={`w-full lg:w-[1080px] flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Quote and Image */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            <p className="flex-1 text-[#2A167F] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal font-['Aleo'] italic leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] whitespace-pre-line">
              {currentTestimonial.quote}
            </p>
            <img 
              className="w-full lg:w-[469px] h-auto lg:h-[313px] rounded-[16px] sm:rounded-[20px] object-cover" 
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
          </div>

          {/* Author Info */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 lg:gap-0">
            <div className="w-full lg:w-[446px] flex flex-col gap-3 sm:gap-4">
              <h3 className="text-[#FCD290] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-semibold font-['Aleo'] capitalize leading-[30px] sm:leading-[36px] lg:leading-[44.2px]">
                {currentTestimonial.name}
              </h3>
              <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium font-['Manrope'] leading-[22px] sm:leading-[24px] lg:leading-[31.2px]">
                {currentTestimonial.title}
              </p>
            </div>

            <div className="w-full lg:w-[446px] flex items-stretch gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="w-px bg-[#FCD290] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-shrink-0"></div>
              <p className="flex-1 text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[22px] font-medium font-['Manrope'] leading-[22px] sm:leading-[24px] lg:leading-[31.2px]">
                {currentTestimonial.description}
              </p>
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex lg:hidden justify-center items-center gap-4 sm:gap-6">
            <button 
              onClick={goToPrevious}
              className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] transform rotate-180 cursor-pointer transition-all group hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg width="56" height="56" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
              </svg>
            </button>
            <button 
              onClick={goToNext} 
              className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] cursor-pointer transition-all group hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg width="56" height="56" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.525 39H12V33H48.525L31.725 16.2L36 12L60 36L36 60L31.725 55.8L48.525 39Z" fill="#FEF7FF" className="group-hover:fill-[#FCD290] transition-colors"/>
              </svg>
            </button>
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
      </div>
    </section>
  )
}