"use client"

import { useState } from "react"

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Top")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        className="fixed top-6 z-40 hidden lg:flex items-center w-full px-8"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Logo - Left side */}
        <div className="mr-4">
          <img src="/logo.png" alt="raiSE Logo" className="h-12 w-auto" />
        </div>

        {/* Navbar Items - Center */}
        <div className="flex-1 flex items-center justify-center">
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
        </div>
      </nav>

      {/* Mobile Navbar - Shown only on mobile */}
      <nav className="fixed top-0 left-0 right-0 z-40 lg:hidden">
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
          <div className="text-white font-bold text-xl">raiSE</div>
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
