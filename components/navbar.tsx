"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Top")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navItems = [
    { name: "Top", link: "#top" },
    { name: "Report Overview", link: "#report" },
    { name: "CEO Note", link: "#ceo" },
    { name: "Redefining Social Enterprise", link: "#social" },
    { name: "Venture Building", link: "#venture" },
    { name: "Capability Development", link: "#capability" },
    { name: "Showcasing Trailblazers", link: "#showcasing" },
    { name: "raiSE Podcast", link: "#podcast" },
    { name: "Financial Highlights", link: "#financial" },
  ]

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav
        className={`fixed top-6 z-40 hidden lg:flex items-center justify-center w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ backgroundColor: "transparent" }}
      >
        {/* Logo - Left side - using calc to position relative to navbar */}
        <div className="absolute" style={{ left: 'calc(50% - 600px)' }}>
          <img src="/logo.png" alt="raiSE Logo" className="h-10 w-auto" />
        </div>

        {/* Navbar Items - Center */}
        <div
          className="flex items-center gap-4 rounded-full px-6 py-1 max-w-[1071px]"
          style={{ backgroundColor: "#A374FFB2" }}
        >
          {navItems.map((item, idx) => {
            const words = item.name.split(" ")
            const isSelected = activeItem === item.name

            return (
              <a
                key={idx}
                href={item.link}
                onClick={() => setActiveItem(item.name)}
                className={`px-4 py-1 rounded-full text-[14px] whitespace-normal text-left leading-[14px] transition-all ${
                  isSelected
                    ? "bg-white text-[#9B2683] !font-bold"
                    : "text-white font-medium hover:bg-white hover:text-[#A374FF]"
                }`}
                style={
                  isSelected
                    ? { border: "1px solid rgba(255, 255, 255, 0.08)" }
                    : undefined
                }
              >
                {words.length === 1 ? (
                  item.name
                ) : words.length === 2 ? (
                  <>
                    {words[0]}
                    <br />
                    {words[1]}
                  </>
                ) : words.length === 3 ? (
                  <>
                    {words[0]} {words[1]}
                    <br />
                    {words[2]}
                  </>
                ) : (
                  <>
                    {words[0]}
                    <br />
                    {words.slice(1).join(" ")}
                  </>
                )}
              </a>
            )
          })}
        </div>
      </nav>

      {/* Mobile Navbar - Shown only on mobile */}
      <nav className={`fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Hamburger Menu Button - Left */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Logo - Right */}
          <img src="/logo.png" alt="raiSE Logo" className="h-8 w-auto" />
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 mx-4 rounded-3xl p-4 shadow-lg"
            style={{ backgroundColor: "#A374FFB2" }}
          >
            {navItems.map((item, idx) => {
              const isSelected = activeItem === item.name

              return (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => {
                    setActiveItem(item.name)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block px-4 py-3 rounded-full text-[16px] font-medium transition-all mb-2 ${
                    isSelected
                      ? "bg-white text-[#9B2683] !font-bold"
                      : "text-white hover:bg-white hover:text-[#A374FF]"
                  }`}
                  style={
                    isSelected
                      ? { border: "1px solid rgba(255, 255, 255, 0.08)" }
                      : undefined
                  }
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        )}
      </nav>
    </>
  )
}
