"use client"

import Navbar from "@/components/navbar"
import { useState } from "react"

export default function RaisePodcast() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Array of gallery images - add your images here
  const galleryImages = [
    "/podcast/gallery-1.jpg",
    "/podcast/gallery-2.jpg",
    
  ]
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #A374FF 0%, #6745BF 5%, #2A167F 20%)' }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-44 px-6 w-full max-w-[1448px] mx-auto">
        <div className="max-w-[1192px] mx-auto">
          {/* Main Heading */}
          <div 
            className="w-full md:w-[428px]"
            style={{
              color: 'white',
              fontSize: 45,
              fontFamily: 'Aleo',
              fontWeight: '500',
              lineHeight: '58.50px',
              wordWrap: 'break-word'
            }}
          >
            raiSE Podcast:<br/>Featuring Future Leaders of Impact
          </div>
          
          {/* Coming Soon Text */}
          <div 
            className="mt-8 md:mt-12 w-full md:w-[681px]"
            style={{
              opacity: 0.80,
              color: 'white',
              fontSize: 20,
              fontFamily: 'Manrope',
              fontWeight: '500',
              lineHeight: '26px',
              wordWrap: 'break-word'
            }}
          >
            Coming Soon
          </div>
        </div>
      </div>
      
      {/* Podcast Image */}
      <div className="mt-16 md:mt-24 px-6 pb-20 flex justify-center">
        <img 
          src="/podcast/podcast-hero.jpg" 
          alt="raiSE Podcast" 
          className="w-full max-w-[1192px] rounded-[33px]"
          style={{
            aspectRatio: '1192/658'
          }}
        />
      </div>
      
      {/* Image Gallery/Carousel Section */}
      <div 
        className="w-full py-20"
        style={{ 
          opacity: 0.80, 
          background: 'linear-gradient(180deg, #512691 57%, #A374FF 100%)' 
        }}
      >
        <div className="max-w-[1448px] mx-auto px-6 flex items-center justify-center gap-8 md:gap-16">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="flex-shrink-0 w-[50px] h-[50px] md:w-[73px] md:h-[72px] flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Previous image"
          >
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8007 33H60.833V39H23.8007L40.834 55.8L36.4997 60L12.1663 36L36.4997 12L40.834 16.2L23.8007 33Z" fill="#FEF7FF"/>
            </svg>
          </button>
          
          {/* Center Image */}
          <div className="flex-1 max-w-[700px] flex justify-center">
            <img 
              src={galleryImages[currentSlide]} 
              alt={`Gallery image ${currentSlide + 1}`}
              className="w-full max-w-[500px] md:max-w-[600px] rounded-[20px] shadow-2xl transition-all duration-500"
              style={{
                aspectRatio: '4/3'
              }}
            />
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="flex-shrink-0 w-[50px] h-[50px] md:w-[73px] md:h-[72px] flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Next image"
          >
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      
      {/* Testimonial Section */}
      <div 
        className="w-full px-6 md:px-[60px] py-16 md:py-[80px] flex items-center justify-center gap-6 md:gap-12"
        style={{ background: 'linear-gradient(180deg, white 15%, #A374FF 77%, #A374FF 100%)' }}
      >
        {/* Left Arrow Icon */}
        <div className="hidden md:flex w-[73px] h-[72px] items-center justify-center flex-shrink-0">
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.8007 33H60.833V39H23.8007L40.834 55.8L36.4997 60L12.1663 36L36.4997 12L40.834 16.2L23.8007 33Z" fill="#FEF7FF"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="flex-1 max-w-[1080px] flex flex-col gap-12 md:gap-20">
          {/* Testimonial Text */}
          <div 
            style={{
              color: '#2A167F',
              fontSize: 'clamp(20px, 3vw, 34px)',
              fontFamily: 'Aleo',
              fontStyle: 'italic',
              fontWeight: '400',
              lineHeight: '1.4',
              wordWrap: 'break-word'
            }}
          >
            Attending the Grow Impact Workshop has been immensely valuable. It helped us evaluate and rethink our business model, identify capabilities through the 4 Levers of Change, and map out our next steps for growth.<br/><br/>The frameworks shared, such as Business Model Innovation, Service Blueprint, and real-world case studies, opened up new avenues for discovery and opportunity. The post-workshop consultation was especially helpful, offering personalised guidance tailored to our context.<br/><br/>We&apos;re grateful for the clarity it brought to our business model, resource planning, and capability building. Truly insightful and empowering!
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
                Ms Yi Juan Low
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
                Executive Director, Architects of Life
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
                Architects of Life is a Social Enterprise that specialises in developing the human potential of youth at risks/ex-offenders through outreach, developmental and intervention programmes.
              </div>
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
  )
}
