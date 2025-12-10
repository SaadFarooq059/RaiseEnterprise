"use client"

import Link from "next/link"

interface ReportCardProps {
  number: string
  title: string
  heading: string
  subtext?: string
  imageSrc: string
  defaultBg: string
  hoverBg: string
  defaultTextColor: string
  hoverTextColor: string
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  className?: string
  link?: string
}

export default function ReportCard({
  number,
  title,
  heading,
  subtext,
  imageSrc,
  defaultBg,
  hoverBg,
  defaultTextColor,
  hoverTextColor,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  className = "",
  link,
}: ReportCardProps) {
  const CardContent = (
    <div
      className={`relative w-full h-auto min-h-[450px] lg:h-[650px] rounded-[20px] lg:rounded-[33px] p-4 lg:p-6 shadow-[0px_5px_15px_rgba(0,0,0,0.17)] transition-all duration-300 hover:shadow-2xl flex flex-col ${className}`}
      style={{ background: isHovered ? hoverBg : defaultBg }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mb-3 lg:mb-4 flex items-start justify-between">
        <h3
          className="font-sans text-sm lg:text-lg font-semibold uppercase transition-colors duration-300"
          style={{ color: isHovered ? hoverTextColor : defaultTextColor }}
        >
          {title}
        </h3>
        <span
          className="font-sans text-lg lg:text-2xl font-extrabold transition-colors duration-300"
          style={{ color: isHovered ? hoverTextColor : defaultTextColor }}
        >
          {number}
        </span>
      </div>

      <div className="mb-4 lg:mb-6 w-full h-[200px] lg:h-[320px] rounded-[15px] lg:rounded-[33px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2
        className="mb-3 lg:mb-4 font-serif text-[24px] lg:text-[40px] font-medium capitalize leading-7 lg:leading-10 transition-colors duration-300 whitespace-pre-line"
        style={{ color: isHovered ? hoverTextColor : defaultTextColor }}
      >
        {heading}
      </h2>

      {subtext && (
        <p
          className="font-sans text-[18px] lg:text-[27px] font-medium capitalize leading-[20px] lg:leading-[27px] transition-colors duration-300"
          style={{ color: isHovered ? hoverTextColor : defaultTextColor }}
        >
          {subtext}
        </p>
      )}

      <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6">
        {isHovered ? (
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.2217 35.9844L30.3697 23.9897L18.2217 11.9949"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9948 18.2219L23.9896 30.3699L35.9844 18.2219"
              stroke={defaultTextColor}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link}>
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
