interface MemberCategory {
  label: string
  count: number
  height: number
  color: string
}

interface MembershipChartProps {
  year: string
  totalMembers: number
  categories: MemberCategory[]
  sectorSize?: string
  sectorValue?: number
}

export default function MembershipChart({ year, totalMembers, categories, sectorSize, sectorValue = 0 }: MembershipChartProps) {
  // Calculate cumulative heights for positioning
  let cumulativeHeight = 0;
  const categoryPositions = categories.map((cat) => {
    const position = cumulativeHeight;
    cumulativeHeight += cat.height;
    return { ...cat, position };
  });

  const totalHeight = cumulativeHeight;
  // Calculate bar width based on sector size (normalized)
  const barWidth = sectorValue ? Math.max(120, Math.min(220, (sectorValue / 250000000) * 200)) : 193;

  return (
    <div className="relative" style={{ width: '300px', minHeight: '550px' }}>
      {/* Total Members - Top */}
      <div className="absolute text-center" style={{ top: '15px', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="font-manrope text-lg font-bold leading-[18px] text-[#9B2683]">{totalMembers}</div>
        <div className="font-manrope text-lg font-normal leading-[18px] text-[#9B2683]">Members</div>
      </div>

      {/* Stacked Bars with Labels */}
      <div className="absolute" style={{ top: '70px', left: '50%', transform: 'translateX(-50%)', width: `${barWidth}px` }}>
        {categoryPositions.map((category, index) => (
          <div
            key={index}
            className="relative w-full flex items-center justify-center font-manrope text-base text-white overflow-hidden"
            style={{ 
              height: `${category.height}px`,
              backgroundColor: category.color
            }}
          >
            {/* Text Label */}
            <div className="text-center z-10">
              {category.label.includes(' ') ? (
                <>
                  <div className="font-bold text-sm">{category.label.split(' ')[0]}</div>
                  <div className="font-normal text-xs">{category.label.split(' ').slice(1).join(' ')}</div>
                </>
              ) : (
                <span className="font-bold text-sm">{category.label}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Year Label - Bottom */}
      <div className="absolute" style={{ bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="font-manrope text-lg font-bold leading-[18px] text-black">{year}</div>
      </div>

      {/* Sector Size - Left or Right Side */}
      {sectorSize && (
        <div className="absolute" style={{ top: totalHeight / 2 + 70, left: '50%', transform: 'translateX(-50%) translateY(-50%)', width: '120px' }}>
          <div className="font-manrope text-sm font-normal leading-[14px] text-[#4C28E5] text-center whitespace-normal">
            <div className="font-bold">{sectorSize}</div>
            <div className="text-xs">In Sector Size</div>
          </div>
        </div>
      )}
    </div>
  )
}
