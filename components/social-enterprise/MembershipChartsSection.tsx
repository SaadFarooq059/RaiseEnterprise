import Image from "next/image"
import Legend from "./Legend"

export default function MembershipChartsSection() {
  return (
    <>
      {/* Membership Charts */}
      <div className="mb-12 md:mb-16 flex items-center justify-start">
        <Image 
          src="/social/m.jpg" 
          alt="Membership Chart FY 23 to FY 24" 
          width={800}
          height={400}
          className="max-w-full h-auto"
        />
      </div>

      {/* Legend */}
      <div className="mb-12 md:mb-16">
        <Legend 
          items={[
            { color: "#F191FA", label: "raiSE Impact Community" },
            { color: "#A564F7", label: "Emerging Social Enterprises" },
            { color: "#512691", label: "Leading Social Enterprises" },
          ]}
        />
      </div>
    </>
  )
}
