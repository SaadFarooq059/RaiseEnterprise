"use client"

import { useState, useEffect, useRef } from "react"

export default function RaisePodcastContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen w-full relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
          className="w-full max-w-[1192px] rounded-[33px]"
          style={{
            aspectRatio: '1192/658'
          }}
        />
      </div>
    </div>
  )
}
