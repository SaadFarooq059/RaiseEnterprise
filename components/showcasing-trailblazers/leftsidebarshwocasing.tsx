import SidebarNavigation from "./SidebarNavigation"

export default function LeftSidebar1() {
  return (
    <div className="hidden md:block md:w-1/3 h-screen sticky top-0">
     

      {/* Main Heading */}
      <div className="absolute left-4 md:left-8 top-24 md:top-32 right-4 md:right-8">
        <h1 className="font-manrope text-2xl md:text-4xl font-normal leading-tight md:leading-[39.6px] text-[#9B2683]">
          From Trailblazers<br />to Community<br/>Builders
        </h1>
      </div>

      {/* Sidebar Navigation */}
      <div className="absolute left-4 md:left-8 top-64 md:top-[300px]">
        <SidebarNavigation 
          items={[
            { label: "Member Events", isActive: true, link: "#member-events" },
            { label: "The PurpoSE Agenda", badge: "NEW", link: "#purpose-agenda" },
            { label: "Echelon 2024", badge: "NEW", link: "#echelon-2024" },
            { label: "IWD 2025", badge: "NEW", link: "#iwd-2025" },
            { label: "Increasing Visibility", badge: "NEXT", link: "#increasing-visibility" },
          ]}
        />
      </div>
    </div>
  )
}
