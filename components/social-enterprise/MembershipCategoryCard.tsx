import { ReactNode } from "react"

interface MembershipCategoryCardProps {
  color: string
  colorHeight?: number
  colorWidth?: number
  count?: number
  children: ReactNode
}

export default function MembershipCategoryCard({ 
  color, 
  colorHeight = 74, 
  colorWidth = 146, 
  count,
  children 
}: MembershipCategoryCardProps) {
  return (
    <div className="rounded-[30px] bg-white p-8 shadow-lg">
      <div 
        className="mb-4 rounded" 
        style={{ 
          height: `${colorHeight}px`, 
          width: `${colorWidth}px`,
          backgroundColor: color 
        }}
      />
      {count && (
        <div className="mb-4 font-aleo text-5xl font-semibold text-[#8F2576]">{count}</div>
      )}
      <div className="text-[15px] leading-[19.5px]">
        {children}
      </div>
    </div>
  )
}
