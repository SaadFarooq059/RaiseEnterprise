interface NavigationItem {
  label: string
  badge?: "NEW" | "NEXT"
  isActive?: boolean
}

interface SidebarNavigationProps {
  items: NavigationItem[]
}

export default function SidebarNavigation({ items }: SidebarNavigationProps) {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="h-px w-[42px] bg-[#A374FF]" />
            <div className={`text-[13px] ${item.isActive ? 'font-bold underline' : 'font-medium'} text-[#9B2683]`}>
              {item.badge && (
                <span className="text-[#A374FF]">{item.badge} </span>
              )}
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
