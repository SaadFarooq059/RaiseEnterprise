"use client"

import { useState } from "react"

export default function CapabilityDevelopmentContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const galleryImages = [
    "/development/gallery-1.jpg",
    "/development/gallery-2.jpg",
    "/development/gallery-3.jpg",
  ]
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden" id="capability-development">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-[1369px]"
        style={{
          backgroundImage: "url('/development/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: '-26px',
          left: '-1px'
        }}
      />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-52 w-full flex justify-center">
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
            Capability<br/>Development
          </div>
          
          {/* Description */}
          <div 
            className="mt-6 w-full md:w-[625px]"
            style={{
              color: 'white',
              fontSize: 22,
              fontFamily: 'Manrope',
              fontWeight: '500',
              lineHeight: '28.60px',
              wordWrap: 'break-word'
            }}
          >
            raiSE helps social enterprises grow through support in multiple areas. Two key programmes are the SEA Sustainability Accelerator (SSE Supports, or S3), a capacity building programme for social enterprises, and Training and Skills Development (TSD).
          </div>
        </div>
      </div>
      
      {/* S3 and TSD Sections */}
      <div className="relative z-10 mt-20 w-full flex justify-center px-6">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8">
          {/* S3 Section */}
          <div className="flex-1">
            <div 
              style={{
                color: '#FCD290',
                fontSize: 35,
                fontFamily: 'Aleo',
                fontWeight: '600',
                lineHeight: '45.50px',
                wordWrap: 'break-word'
              }}
            >
              S3
            </div>
            <div 
              className="mt-4"
              style={{
                color: 'white',
                fontSize: 22,
                fontFamily: 'Manrope',
                fontWeight: '500',
                lineHeight: '28.60px',
                wordWrap: 'break-word'
              }}
            >
              The SEA Sustainability Accelerator (SSE Supports, or S3) is a unique initiative designed to create lasting change by supporting social enterprises that empower vulnerable communities across Southeast Asia.
            </div>
          </div>
          
          {/* TSD Section */}
          <div className="flex-1">
            <div 
              style={{
                color: '#FCD290',
                fontSize: 35,
                fontFamily: 'Aleo',
                fontWeight: '600',
                lineHeight: '45.50px',
                wordWrap: 'break-word'
              }}
            >
              TSD
            </div>
            <div 
              className="mt-4"
              style={{
                color: 'white',
                fontSize: 22,
                fontFamily: 'Manrope',
                fontWeight: '500',
                lineHeight: '28.60px',
                wordWrap: 'break-word'
              }}
            >
              The Social Enterprise Masterclass Series (SEMS) is an industry-led capacity building programme initiated by raiSE and the National University of Singapore (NUS) to train social entrepreneurs, board members, and senior staff in building and sustaining social enterprises.
            </div>
          </div>
        </div>
      </div>
      
      {/* S3 Content Section - Purple Background */}
      <div className="relative z-10 mt-40 w-full bg-gradient-to-b from-[#512691] to-[#5C61DB] py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          {/* S3 Logo and Title */}
          <div className="flex items-center gap-4 mb-8">
            <img 
              src="/development/s3-logo.png" 
              alt="S3 Logo" 
              className="w-16 h-16"
            />
            <div 
              style={{
                color: 'white',
                fontSize: 45,
                fontFamily: 'Aleo',
                fontWeight: '600',
                lineHeight: '58.50px',
                wordWrap: 'break-word'
              }}
            >
              S3: SEA Sustainability Accelerator
            </div>
          </div>
          
          {/* Description */}
          <div 
            className="mb-12"
            style={{
              color: 'white',
              fontSize: 22,
              fontFamily: 'Manrope',
              fontWeight: '500',
              lineHeight: '28.60px',
              wordWrap: 'break-word'
            }}
          >
            The SEA Sustainability Accelerator (SSE Supports, or S3) is a unique initiative designed to create lasting change by supporting social enterprises that empower vulnerable communities across Southeast Asia. With a strong emphasis on women-led, women-focused initiatives, S3 goes beyond funding to provide tailored capacity-building workshops and consultancy services, equipping social enterprises with the tools they need to scale impact and thrive.
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <div 
                style={{
                  color: '#FCD290',
                  fontSize: 60,
                  fontFamily: 'Aleo',
                  fontWeight: '700',
                  lineHeight: '78px',
                  wordWrap: 'break-word'
                }}
              >
                20
              </div>
              <div 
                className="mt-2"
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                social enterprises supported
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <div 
                style={{
                  color: '#FCD290',
                  fontSize: 60,
                  fontFamily: 'Aleo',
                  fontWeight: '700',
                  lineHeight: '78px',
                  wordWrap: 'break-word'
                }}
              >
                5
              </div>
              <div 
                className="mt-2"
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                countries represented
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <div 
                style={{
                  color: '#FCD290',
                  fontSize: 60,
                  fontFamily: 'Aleo',
                  fontWeight: '700',
                  lineHeight: '78px',
                  wordWrap: 'break-word'
                }}
              >
                90%
              </div>
              <div 
                className="mt-2"
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                women-led or women-focused
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="relative w-full max-w-[800px] mx-auto mb-12">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img 
                src={galleryImages[currentSlide]}
                alt={`Gallery ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gallery Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Quote Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div 
              className="mb-4"
              style={{
                color: '#FCD290',
                fontSize: 28,
                fontFamily: 'Aleo',
                fontWeight: '600',
                lineHeight: '36.40px',
                wordWrap: 'break-word'
              }}
            >
              "S3 has been instrumental in helping us refine our impact measurement framework and scale our operations across the region."
            </div>
            <div 
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'Manrope',
                fontWeight: '500',
                lineHeight: '26px',
                wordWrap: 'break-word'
              }}
            >
              — Participant, S3 Cohort 2024
            </div>
          </div>
        </div>
      </div>
      
      {/* TSD Content Section - Different Purple Gradient */}
      <div className="relative z-10 w-full bg-gradient-to-b from-[#5C61DB] to-[#7479ED] py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          {/* TSD Title */}
          <div 
            className="mb-8"
            style={{
              color: 'white',
              fontSize: 45,
              fontFamily: 'Aleo',
              fontWeight: '600',
              lineHeight: '58.50px',
              wordWrap: 'break-word'
            }}
          >
            Training and Skills Development (TSD)
          </div>
          
          {/* SEMS Section */}
          <div className="mb-12">
            <div 
              className="mb-4"
              style={{
                color: '#FCD290',
                fontSize: 35,
                fontFamily: 'Aleo',
                fontWeight: '600',
                lineHeight: '45.50px',
                wordWrap: 'break-word'
              }}
            >
              Social Enterprise Masterclass Series (SEMS)
            </div>
            <div 
              style={{
                color: 'white',
                fontSize: 22,
                fontFamily: 'Manrope',
                fontWeight: '500',
                lineHeight: '28.60px',
                wordWrap: 'break-word'
              }}
            >
              The Social Enterprise Masterclass Series (SEMS) is an industry-led capacity building programme initiated by raiSE and the National University of Singapore (NUS) to train social entrepreneurs, board members, and senior staff in building and sustaining social enterprises.
            </div>
          </div>
          
          {/* SEMS Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div 
                style={{
                  color: '#FCD290',
                  fontSize: 60,
                  fontFamily: 'Aleo',
                  fontWeight: '700',
                  lineHeight: '78px',
                  wordWrap: 'break-word'
                }}
              >
                150+
              </div>
              <div 
                className="mt-2"
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                participants trained
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div 
                style={{
                  color: '#FCD290',
                  fontSize: 60,
                  fontFamily: 'Aleo',
                  fontWeight: '700',
                  lineHeight: '78px',
                  wordWrap: 'break-word'
                }}
              >
                12
              </div>
              <div 
                className="mt-2"
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  lineHeight: '31.20px',
                  wordWrap: 'break-word'
                }}
              >
                modules offered
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section - Dark Purple */}
      <div className="relative z-10 w-full bg-[#512691] py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="flex-shrink-0">
              <img 
                src="/development/testimonial.png" 
                alt="Testimonial" 
                className="w-64 h-64 rounded-lg object-cover"
              />
            </div>
            
            {/* Right Side - Quote and Details */}
            <div className="flex-1">
              <div 
                className="mb-6"
                style={{
                  color: '#FCD290',
                  fontSize: 'clamp(24px, 3vw, 35px)',
                  fontFamily: 'Aleo',
                  fontWeight: '600',
                  lineHeight: '45.50px',
                  wordWrap: 'break-word'
                }}
              >
                "The SEMS programme has been transformative for our organization. The practical insights and networking opportunities have helped us scale our impact significantly."
              </div>
              
              {/* Name and Title */}
              <div 
                className="mb-2"
                style={{
                  color: 'white',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontFamily: 'Manrope',
                  fontWeight: '700',
                  textTransform: 'capitalize',
                  lineHeight: '36.40px',
                  wordWrap: 'break-word'
                }}
              >
                Ms. Sarah Lim
              </div>
              <div 
                className="mb-4"
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
                Vice-Principal, Genesis School for Special Education Pte Ltd
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
                  Genesis School is a child centered private school that provides specialised programmes and interventions for students with special needs.
                </div>
              </div>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="hidden md:flex w-[73px] h-[72px] items-center justify-center flex-shrink-0">
              <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.1983 39H12.166V33H49.1983L32.165 16.2L36.4993 12L60.8327 36L36.4993 60L32.165 55.8L49.1983 39Z" fill="#FCD290"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
