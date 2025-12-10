import SidebarNavigation from "./SidebarNavigation"

export default function LeftSidebar() {
  return (
    <div className="hidden md:block md:w-1/3 h-screen sticky top-0">
     

      {/* Main Heading */}
      <div className="absolute left-4 md:left-8 top-24 md:top-32 right-4 md:right-8">
        <h1 className="font-manrope text-2xl md:text-4xl font-normal leading-tight md:leading-[39.6px] text-[#9B2683]">
          Reimagining the Future of Social Enterprise
        </h1>
      </div>

      {/* Sidebar Navigation */}
      <div className="absolute left-4 md:left-8 top-64 md:top-[325px]">
        <SidebarNavigation 
          items={[
            { label: "SE Landscape Overview", isActive: true, link: "#se-landscape" },
            { label: "Membership Framework", badge: "NEW", link: "#membership-framework" },
            { label: "Membership Categories", badge: "NEW", link: "#membership-categories" },
            { label: "Impact Areas", badge: "NEW", link: "#impact-areas" },
            { label: "Membership Portal", badge: "NEW", link: "#membership-portal" },
            { label: "Social Impact Report", badge: "NEXT", link: "#social-impact-report" },
          ]}
        />
      </div>
    </div>
  )
}
