export default function SidebarNav() {
  return (
    <div className="hidden lg:block absolute left-[90px] top-[160px] z-20">
      <h2 className="text-white text-[36px] font-normal font-['Manrope'] capitalize leading-[46.8px] mb-[45px] max-w-[245px]">
        Social Enterprise Trailblazers
      </h2>
      
      {/* Navigation Links */}
      <div className="flex flex-col gap-[21px]">
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-px bg-[#FCD290]"></div>
          <span className="text-white text-[13px] font-medium font-['Manrope'] leading-[13px]">
            Member Engagement & Events
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-px bg-[#FCD290]"></div>
          <span className="text-white text-[13px] font-medium font-['Manrope'] leading-[13px]">
            The PurpoSE Agenda 2024
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-px bg-[#FCD290]"></div>
          <span className="text-white text-[13px] font-medium font-['Manrope'] leading-[13px]">
            Echelon 2024
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-px bg-[#FCD290]"></div>
          <span className="text-white text-[13px] font-medium font-['Manrope'] leading-[13px]">
            IWD 2025 Accelerate Action Conference
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-px bg-[#FCD290]"></div>
          <span className="text-white text-[13px] font-medium font-['Manrope'] leading-[13px]">
            Increasing Visibility
          </span>
        </div>
      </div>
    </div>
  )
}
