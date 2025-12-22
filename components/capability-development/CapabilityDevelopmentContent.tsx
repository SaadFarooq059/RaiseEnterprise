"use client"

import { useState, useRef, useEffect } from "react"

export default function CapabilityDevelopmentContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const galleryImages = [
    "/venture-building/t1.jpg",
    "/venture-building/t2.jpg",
    "/venture-building/t3.jpg",
  ]

  const testimonials = [
    {
      quote: "The workshop provided us with the ability to evaluate and align our goals with opportunities. The service blueprint, with its focus on processes, resources, and and stakeholder perspectives, ensures smoother operations and better outcomes. It has enhanced the desired social impact for our beneficiaries, equipping them with essential skills for independence and a successful transition into adulthood.",
      name: "Ms Angie Tan",
      title: "Vice-Principal, Genesis School for Special Education Pte Ltd",
      description: "Genesis School is a child centered private school that provides specialised programmes and interventions for students with special needs."
    },
    {
      quote: "Attending the Grow Impact Workshop has been immensely valuable. It helped us evaluate and rethink our business model, identify capabilities through the 4 Levers of Change, and map out our next steps for growth. The frameworks shared, such as Business Model Innovation, Service Blueprint, and real-world case studies, opened up new avenues for discovery and opportunity. The post-workshop consultation was especially helpful, offering personalised guidance tailored to our context. We're grateful for the clarity it brought to our business model, resource planning, and capability building. Truly insightful and empowering!",
      name: "Ms Yi Juan Low",
      title: "Executive Director, Architects of Life",
      description: "Architects of Life is a Social Enterprise that specialises in developing the human potential of youth at risks/ex-offenders through outreach, developmental and intervention programmes."
    }
  ]
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll effect for gallery
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }
    }, 3000) // Change slide every 3 seconds
    
    return () => clearInterval(interval)
  }, [isHovered, galleryImages.length])

  return (
    <div ref={sectionRef} className="min-h-screen w-full relative" id="capability-development">
      {/* Hero Section with Background Image */}
      <div className="w-full relative overflow-hidden">
        {/* Background Image - contained to hero section only */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/development/hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 pt-80 pb-[300px] w-full flex justify-center">
          <div className="w-full max-w-[1200px] px-6">
            {/* Main Heading */}
            <div 
              className="w-full md:w-[625px]"
              style={{
          color: 'white',
          fontSize: 45,
          fontFamily: 'Aleo',
          fontWeight: '500',
          lineHeight: '58.50px',
          wordWrap: 'break-word'
              }}
            >
              Capability Development: Upskilling People and Enterprise
            </div>
            
            {/* Description */}
            <div 
              className="mt-8 w-full md:w-[597px]"
              style={{
          color: 'white',
          fontSize: 20,
          fontFamily: 'Manrope',
          fontWeight: '500',
          lineHeight: '26px',
          wordWrap: 'break-word'
              }}
            >
              At raiSE, we are dedicated to nurturing the next generation of changemakers and empowering our existing Social Enterprise members. We educate and equip aspiring individuals with the foundational skills needed to build their own impactful businesses, while offering our members a range of resources and programmes to help them scale their businesses and deepen their impact. This holistic approach ensures a robust and sustainable ecosystem for social change.
            </div>
          </div>
        </div>
      </div>

      {/* Partnering with IHLs Section */}
      <div 
        className="relative w-full"
        style={{ background: 'linear-gradient(180deg, rgba(51, 17, 108, 0.80) 0%, #A564F7 16%)',overflow: 'hidden' }}
      >
        {/* IHLs Content */}
        <div className="w-full flex justify-center py-6 mt-20 md:mt-32">
          <div className="w-full max-w-[1200px] px-6">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left - Title */}
              <div className="md:w-[400px]">
                <div 
                  style={{
                    color: 'white',
                    fontSize: 64,
                    fontFamily: 'Aleo',
                    fontWeight: '400',
                    lineHeight: '70.40px',
                    wordWrap: 'break-word'
                  }}
                >
                  Partnering with IHLs
                </div>
                <div 
                  className="mt-6"
                  style={{
                    color: 'white',
                    fontSize: 35,
                    fontFamily: 'Aleo',
                    fontWeight: '300',
                    textTransform: 'capitalize',
                    lineHeight: '38.50px',
                    wordWrap: 'break-word'
                  }}
                >
                  Building The Next Wave Of Changemakers
                </div>
              </div>
              
              {/* Right - Description */}
              <div 
                className="flex-1"
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  lineHeight: '26px',
                  wordWrap: 'break-word'
                }}
              >
                raiSE strengthened our commitment to cultivating the next generation of Social Entrepreneurs through deeper partnerships with Institutes of Higher Learning, embedding our curriculum into the SUSS Venture Building programme and the SUTD Create4Good programme.<br/><br/>Across the 4 sessions, we reached over 200 participants, covering a comprehensive curriculum. This included an introduction to the Social Enterprise ecosystem, the Social Enterprise Model Canvas, theory of change, and hands-on training in pitch deck development and delivery.
              </div>
            </div>
          </div>
        </div>
        
        {/* IHLs Image */}
        <div className="w-full mt-0">
          <img 
            src="/development/hero2.svg" 
            alt="Partnering with IHLs" 
            style={{width: '100%', height: '100%'}}
          />
        </div>

        {/* Grow Impact Workshop Section */}
        <div className="w-full pt-0 pb-20 flex justify-center">
          <div className="w-full max-w-[1200px] px-6">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left - Title */}
              <div className="md:w-[458px]">
                <div 
                  style={{
                    color: 'white',
                    fontSize: 70,
                    fontFamily: 'Aleo',
                    fontWeight: '400',
                    textTransform: 'capitalize',
                    lineHeight: '77px',
                    wordWrap: 'break-word'
                  }}
                >
                  Grow <br/>Impact Workshop
                </div>
              </div>
              
              {/* Right - Description */}
              <div 
                className="flex-1 opacity-80"
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '26px',
                  wordWrap: 'break-word'
                }}
              >
                We hosted our inaugural Grow Impact Workshop on 28 February and 4 March 2025 to equip Social Enterprises with the skills needed to scale their impact effectively. <br/><br/>The workshop focused on two key themes: <span className="font-bold">&quot;Strengthening the Care Economy: Inclusive Health, Mental & Social Care&quot;</span> and <span className="font-bold">&quot;Enhancing Knowledge Equity: Inclusive Education, Training & Skill Development.&quot;</span><br/><br/>Participants explored their businesses through the 4 Levers of the SE Business Model Innovation Framework, a powerful tool designed to help Social Enterprises evaluate, innovate, and evolve. Through interactive exercises, they:
              </div>
            </div>
            
            {/* Four Pillars */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {/* Pillar 1 */}
              <div 
                className="flex flex-col items-start px-6 py-8"
                style={{ 
                  borderLeft: '1px solid #FCD290'
                }}
              >
                <img src="/development/icon-1.png" alt="Icon 1" style={{width: '100%', height: '100%', maxWidth: '120px', maxHeight: '120px'}} />
                <div 
                  className="mt-12"
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    lineHeight: '23.40px',
                    minHeight: '70px'
                  }}
                >
                  Re-examined their value propositions while balancing impact with profitability
                </div>
              </div>
              
              {/* Pillar 2 */}
              <div 
                className="flex flex-col items-start px-6 py-8"
                style={{ 
                  borderLeft: '1px solid #FCD290'
                }}
              >
                <img src="/development/icon-2.png" alt="Icon 2" style={{width: '100%', height: '100%', maxWidth: '120px', maxHeight: '120px'}} />
                <div 
                  className="mt-12"
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    lineHeight: '23.40px',
                    minHeight: '70px'
                  }}
                >
                  Identified gaps and opportunities for innovation
                </div>
              </div>
              
              {/* Pillar 3 */}
              <div 
                className="flex flex-col items-start px-6 py-8"
                style={{ 
                  borderLeft: '1px solid #FCD290'
                }}
              >
                <img src="/development/icon-3.png" alt="Icon 3" style={{width: '100%', height: '100%', maxWidth: '120px', maxHeight: '120px'}} />
                <div 
                  className="mt-12"
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    lineHeight: '23.40px',
                    minHeight: '70px'
                  }}
                >
                  Developed service blueprints to map processes, resources, and stakeholder interactions
                </div>
              </div>
              
              {/* Pillar 4 */}
              <div 
                className="flex flex-col items-start px-6 py-8"
                style={{ 
                  borderLeft: '1px solid #FCD290'
                }}
              >
                <img src="/development/icon-4.png" alt="Icon 4" style={{width: '100%', height: '100%', maxWidth: '120px', maxHeight: '120px'}} />
                <div 
                  className="mt-12"
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Manrope',
                    fontWeight: '500',
                    lineHeight: '23.40px',
                    minHeight: '70px'
                  }}
                >
                  Crafted actionable strategies to advance both economic sustainability and social outcomes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery/Carousel Section */}
        <div 
          className="w-full py-16"
          style={{ 
            background: 'linear-gradient(180deg, #512691 57%, #A374FF 100%)' 
          }}
        >
          <div 
            className="max-w-[1200px] mx-auto px-6 flex items-center justify-center gap-8 md:gap-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="flex-shrink-0 w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Previous image"
            >
              <svg width="60" height="60" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8007 33H60.833V39H23.8007L40.834 55.8L36.4997 60L12.1663 36L36.4997 12L40.834 16.2L23.8007 33Z" fill="#FEF7FF"/>
              </svg>
            </button>
            
            {/* Center Image */}
            <div className="flex-1 max-w-[600px] flex justify-center">
              <img 
                src={galleryImages[currentSlide]} 
                alt={`Gallery image ${currentSlide + 1}`}
                className="w-full rounded-[20px] shadow-2xl transition-all duration-500"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
            </div>
            
            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="flex-shrink-0 w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Next image"
            >
              <svg width="60" height="60" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.1983 39H12.166V33H49.1983L32.165 16.2L36.4993 12L60.8327 36L36.4993 60L32.165 55.8L49.1983 39Z" fill="#FCD290"/>
              </svg>
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#FCD290] w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Aligning Objectives Section */}
        <div className="w-full py-6 md:py-8 flex justify-center">
          <div className="w-full max-w-[1200px] px-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Left - Title */}
              <div className="md:w-[400px]">
                <div 
                  style={{
                    color: '#FCD290',
                    fontSize: 40,
                    fontFamily: 'Aleo',
                    fontWeight: '400',
                    lineHeight: '46px',
                    wordWrap: 'break-word'
                  }}
                >
                  Aligning objectives with Social Service Agencies
                </div>
              </div>
              
              {/* Right - Description */}
              <div 
                className="flex-1 opacity-80"
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '26px',
                  wordWrap: 'break-word'
                }}
              >
                Participants also gained valuable insights into Singapore&apos;s Social Service Agency (SSA) landscape from Ms. M.N. Fatima, Chief Digital Officer of Thye Hua Kwan Moral Charities. Her strategic overview and practical advice helped Social Enterprises understand SSA operating models and explore pathways for more meaningful collaboration.<br/><br/>Participants also engaged in a discussion on Singapore&apos;s Mental Health Blueprint, uncovering valuable insights and opportunities to strategically position themselves within the care continuum.
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights Section */}
        <div className="w-full py-6 md:py-8 flex justify-center">
          <div className="w-full max-w-[1200px] px-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Left - Title */}
              <div className="md:w-[400px]">
                <div 
                  style={{
                    color: '#FCD290',
                    fontSize: 40,
                    fontFamily: 'Aleo',
                    fontWeight: '400',
                    lineHeight: '46px',
                    wordWrap: 'break-word'
                  }}
                >
                  Key Insights from the workshop
                </div>
              </div>
              
              {/* Right - Description */}
              <div 
                className="flex-1 opacity-80"
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '26px',
                  wordWrap: 'break-word'
                }}
              >
                By leveraging and refining the Four Levers of the SE Business Model Innovation Framework, Social Enterprises can overcome challenges, unlock innovation, and deliver greater impact. Prioritising specific beneficiary needs enables them to optimise resources and refine their Unique Selling Proposition, while insights into Social Service Agencies&apos; operational models help align objectives and foster deeper collaboration.<br/><br/>At the same time, staying attuned to emerging trends in the Mental Care Sector allows Social Enterprises to anticipate shifts in demand and strategically position themselves to address evolving needs. This combination of focus, alignment, and foresight ensures they can create stronger, more sustainable outcomes for both beneficiaries and partners.
              </div>
            </div>
          </div>
        </div>

        {/* Tailored Guidance Section */}
        <div className="w-full py-6 md:py-8 flex justify-center">
          <div className="w-full max-w-[1200px] px-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Left - Title */}
              <div className="md:w-[400px]">
                <div 
                  style={{
                    color: '#FCD290',
                    fontSize: 40,
                    fontFamily: 'Aleo',
                    fontWeight: '500',
                    lineHeight: '46px',
                    wordWrap: 'break-word'
                  }}
                >
                  Tailored Guidance Through 1:1 Consultations
                </div>
              </div>
              
              {/* Right - Description */}
              <div 
                className="flex-1 opacity-80"
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '26px',
                  wordWrap: 'break-word'
                }}
              >
                The workshop concluded with one-on-one consultations where participants received personalised feedback on their &quot;To-Be&quot; SE models. These sessions allowed for deep dives into each enterprise&apos;s unique context; refining strategy and execution plans to drive sustained growth and measurable impact.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Testimonial Section */}
      <div 
        className="w-full px-6 md:px-[60px] py-16 md:py-[80px] flex items-center justify-center gap-6 md:gap-12"
        style={{ background: 'linear-gradient(180deg, white 15%, #A374FF 77%, #A374FF 100%)' }}
      >
        {/* Left Arrow Icon */}
        <button
          onClick={prevTestimonial}
          className="hidden md:flex w-[73px] h-[72px] items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Previous testimonial"
        >
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.8007 33H60.833V39H23.8007L40.834 55.8L36.4997 60L12.1663 36L36.4997 12L40.834 16.2L23.8007 33Z" fill="#FEF7FF"/>
          </svg>
        </button>
        
        {/* Content */}
        <div className="flex-1 max-w-[1080px] flex flex-col gap-12 md:gap-20">
          {/* Testimonial Text */}
          <div 
            style={{
              color: '#2A167F',
              fontSize: 'clamp(16px, 2.5vw, 28px)',
              fontFamily: 'Aleo',
              fontStyle: 'italic',
              fontWeight: '400',
              lineHeight: '1.4',
              wordWrap: 'break-word'
            }}
          >
            {testimonials[currentTestimonial].quote}
          </div>
          
          {/* Author Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Author Name and Title */}
            <div className="flex flex-col gap-4">
              <div 
                style={{
                  color: '#FCD290',
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  fontFamily: 'Aleo',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  lineHeight: '44.20px',
                  wordWrap: 'break-word'
                }}
              >
                {testimonials[currentTestimonial].name}
              </div>
              <div 
                style={{
                  color: 'white',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                {testimonials[currentTestimonial].title}
              </div>
            </div>
            
            {/* Organization Description */}
            <div className="flex items-stretch gap-6 max-w-[446px]">
              {/* Vertical Line */}
              <div 
                className="hidden md:block w-[2px] flex-shrink-0"
                style={{ 
                  background: '#FCD290',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              />
              <div 
                style={{
                  color: 'white',
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                {testimonials[currentTestimonial].description}
              </div>
            </div>
          </div>
        </div>

        
        
        {/* Right Arrow Icon */}
        <button
          onClick={nextTestimonial}
          className="hidden md:flex w-[73px] h-[72px] items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Next testimonial"
        >
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.1983 39H12.166V33H49.1983L32.165 16.2L36.4993 12L60.8327 36L36.4993 60L32.165 55.8L49.1983 39Z" fill="#FCD290"/>
          </svg>
        </button>
      </div>
            
      {/* Footer Image */}
      <img 
        style={{width: '100%', height: '10%'}} 
        src="/venture-building/footer.png" 
        alt="Footer" 
      />
    </div>
    
  )
}
