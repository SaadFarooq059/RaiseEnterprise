export default function PurpoSEAgendaContent1() {
  return (
    <div className="grid grid-cols-[415px_1fr] gap-[90px]">
      {/* Left Sidebar - Empty space for SidebarNav */}
      <div></div>

      {/* Right Content */}
      <div>
        {/* First Paragraph */}
        <div className="max-w-[805px] mb-10">
          <p className="text-white text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
            At Echelon 2024, raiSE brought the message "Social Enterprises: The Future of Business" through a pavilion showcase, highlighting the growing relevance of impact-driven models in today's economy. Together with seven Social Enterprises, we presented powerful examples of social innovation across diverse business sectors—from inclusively designed products and services to platforms for inclusive employment.<br/><br/>
            The showcase not only demonstrated how Social Enterprises can compete and thrive in mainstream markets but also reinforced their role as pioneers shaping the future of business with purpose at the core.
          </p>
        </div>

        {/* Recipients Card */}
        <div className="w-[812px] h-[266px] bg-[#A564F7] rounded-[50px] mb-10 px-[62px] py-[40px]">
          <h3 className="text-[#FCD290] text-[25px] font-semibold font-['Manrope'] leading-[36px] tracking-wide mb-[26px]">
            Featured Social Enterprises
          </h3>
          <div className="flex gap-[50px]">
            <div className="text-white text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
              • Tictag<br/>
              • Foreword Coffee<br/>
              • School of Concepts<br/>
              • Innervate Fitness
            </div>
            <div className="text-white text-[18px] font-medium font-['Manrope'] leading-[23.4px]">
              • Findjobs<br/>
              • Octopus8<br/>
              • Stick 'Em
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}
