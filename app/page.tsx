"use client"

import Navbar from "@/components/navbar"
import ReportCard from "@/components/report-card"
import HeroSection from "@/components/hero-section"
import { useState, useEffect } from "react"

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const cards = [
    {
      number: "00",
      title: "CEO NOTE",
      heading: "A Message\nfrom our CEO",
      subtext: "Mr. Alfie Othman",
      imageSrc: "/home/ceo.png",
      imageHeight: "h-[317px]",
      defaultBg: "#9B2683",
      hoverBg: "#FCD290",
      defaultTextColor: "#FCD290",
      hoverTextColor: "#9B2683",
      className: "",
    },
    {
      number: "01",
      title: "SOCIAL ENTERPRISE LANDSCAPE",
      heading: "Redefining the\nFuture of Social\nEnterprise",
      imageSrc: "/home/2.png",
      imageHeight: "h-[331px]",
      defaultBg: "#9B2683",
      hoverBg: "#FFFFFF",
      defaultTextColor: "#FFFFFF",
      hoverTextColor: "#9B2683",
      className: "lg:mt-8",
    },
    {
      number: "02",
      title: "VENTURE BUILDING",
      heading: "Building\nBusinesses with\nImpact",
      imageSrc: "/home/3.png",
      imageHeight: "h-[345px]",
      defaultBg: "#FFFFFF",
      hoverBg: "#9B2683",
      defaultTextColor: "#9B2683",
      hoverTextColor: "#FFFFFF",
      className: "",
    },
    {
      number: "03",
      title: "CAPABILITY DEVELOPMENT",
      heading: "Upskilling\nPeople &\nEnterprise",
      imageSrc: "/home/4.png",
      imageHeight: "h-[335px]",
      defaultBg: "#FFFFFF",
      hoverBg: "#A564F7",
      defaultTextColor: "#A564F7",
      hoverTextColor: "#FFFFFF",
      className: "lg:mt-8",
    },
    {
      number: "04",
      title: "EVENTS & FEATURES",
      heading: "From Trailblazers\nto Community\nBuilders",
      imageSrc: "/home/5.png",
      imageHeight: "h-[337px]",
      defaultBg: "#FFFFFF",
      hoverBg: "#7479ED",
      defaultTextColor: "#7479ED",
      hoverTextColor: "#FFFFFF",
      className: "",
    },
    {
      number: "05",
      title: "PODCAST - COMING SOON",
      heading: "Featuring the\nLeaders of Social\nImpact",
      imageSrc: "/home/6.png",
      imageHeight: "h-[278px]",
      defaultBg: "#FFFFFF",
      hoverBg: "#2A167F",
      defaultTextColor: "#2A167F",
      hoverTextColor: "#FFFFFF",
      className: "lg:mt-8",
    },
  ]

  return (
    <main
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #4A2281 0%, #681968 12%, #7A56C4 100%)" }}
    >
      {/* Logo - Separate from navbar, on the left */}
      <div className="fixed left-8 top-6 z-50"></div>

      {/* Navbar - Simple and accessible */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Report Overview Title */}
      <div className="px-4 pt-8 lg:pt-40 pb-6 lg:pb-12">
        <h1 className={`ml-4 lg:ml-[370px] font-serif text-3xl lg:text-4xl capitalize text-white transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          report Overview
        </h1>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pb-20 lg:pl-20">
        {/* Mobile: All cards in order */}
        <div className="flex flex-col gap-y-6 lg:hidden">
          {cards.map((card, index) => (
            <div key={index} className={`transition-all duration-1000 delay-[${900 + index * 100}ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={card.number}
                title={card.title}
                heading={card.heading}
                subtext={card.subtext}
                imageSrc={card.imageSrc}
                defaultBg={card.defaultBg}
                hoverBg={card.hoverBg}
                defaultTextColor={card.defaultTextColor}
                hoverTextColor={card.hoverTextColor}
                isHovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
          ))}
        </div>

        {/* Desktop: Two column layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-x-8">
          {/* Left Column - Cards 00, 02, 04 */}
          <div className="flex flex-col gap-y-8 lg:w-1/2">
            <div className={`transition-all duration-1000 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={cards[0].number}
                title={cards[0].title}
                heading={cards[0].heading}
                subtext={cards[0].subtext}
                imageSrc={cards[0].imageSrc}
                defaultBg={cards[0].defaultBg}
                hoverBg={cards[0].hoverBg}
                defaultTextColor={cards[0].defaultTextColor}
                hoverTextColor={cards[0].hoverTextColor}
                isHovered={hoveredCard === 0}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
            <div className={`transition-all duration-1000 delay-[1100ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={cards[2].number}
                title={cards[2].title}
                heading={cards[2].heading}
                subtext={cards[2].subtext}
                imageSrc={cards[2].imageSrc}
                defaultBg={cards[2].defaultBg}
                hoverBg={cards[2].hoverBg}
                defaultTextColor={cards[2].defaultTextColor}
                hoverTextColor={cards[2].hoverTextColor}
                isHovered={hoveredCard === 2}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
            <div className={`transition-all duration-1000 delay-[1300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={cards[4].number}
                title={cards[4].title}
                heading={cards[4].heading}
                subtext={cards[4].subtext}
                imageSrc={cards[4].imageSrc}
                defaultBg={cards[4].defaultBg}
                hoverBg={cards[4].hoverBg}
                defaultTextColor={cards[4].defaultTextColor}
                hoverTextColor={cards[4].hoverTextColor}
                isHovered={hoveredCard === 4}
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
          </div>

          {/* Right Column - Cards 01, 03, 05 */}
          <div className="flex flex-col gap-y-8 lg:w-1/2 lg:pt-32">
            <div className={`transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={cards[1].number}
                title={cards[1].title}
                heading={cards[1].heading}
                subtext={cards[1].subtext}
                imageSrc={cards[1].imageSrc}
                defaultBg={cards[1].defaultBg}
                hoverBg={cards[1].hoverBg}
                defaultTextColor={cards[1].defaultTextColor}
                hoverTextColor={cards[1].hoverTextColor}
                isHovered={hoveredCard === 1}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
            <div className={`transition-all duration-1000 delay-[1200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={cards[3].number}
                title={cards[3].title}
                heading={cards[3].heading}
                subtext={cards[3].subtext}
                imageSrc={cards[3].imageSrc}
                defaultBg={cards[3].defaultBg}
                hoverBg={cards[3].hoverBg}
                defaultTextColor={cards[3].defaultTextColor}
                hoverTextColor={cards[3].hoverTextColor}
                isHovered={hoveredCard === 3}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
            <div className={`transition-all duration-1000 delay-[1400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ReportCard
                number={cards[5].number}
                title={cards[5].title}
                heading={cards[5].heading}
                subtext={cards[5].subtext}
                imageSrc={cards[5].imageSrc}
                defaultBg={cards[5].defaultBg}
                hoverBg={cards[5].hoverBg}
                defaultTextColor={cards[5].defaultTextColor}
                hoverTextColor={cards[5].hoverTextColor}
                isHovered={hoveredCard === 5}
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
