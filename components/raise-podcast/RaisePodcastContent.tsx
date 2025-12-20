"use client"

import { useState, useRef } from "react"
export default function RaisePodcastContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  
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

  // Animation removed as per request

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #A374FF 0%, #6745BF 5%, #2A167F 20%)' }}
      id="raise-podcast"
    >
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
            className="w-full max-w-[1192px] h-auto rounded-[33px] object-cover"
          />
      </div>
    </div>
  )
}
