interface LegendItem {
  color: string
  label: string
}

interface LegendProps {
  items: LegendItem[]
}

export default function Legend({ items }: LegendProps) {
  return (
    <div className="flex justify-center gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="h-[25px] w-[25px] rounded" 
            style={{ backgroundColor: item.color }}
          />
          <div className="text-sm font-medium text-black">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
