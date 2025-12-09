export default function PurpoSEAgendaHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[415px_1fr] gap-6 lg:gap-[90px] mb-4 lg:mb-[20px]">
      {/* Left Sidebar - Empty space for SidebarNav */}
      <div className="hidden lg:block"></div>

      {/* Header */}
      <div>
        <div className="text-[#FCD290] text-lg md:text-[20px] font-semibold font-['Manrope'] leading-5 mb-2 md:mb-[8px]">
          CONNECTING THE ECOSYSTEM
        </div>
        <h2 className="text-white text-2xl md:text-3xl lg:text-[36px] font-medium font-['Aleo'] leading-tight md:leading-[46px]">
          The PurpoSE Agenda 2024
        </h2>
      </div>
    </div>
  )
}
