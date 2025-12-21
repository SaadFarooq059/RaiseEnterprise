interface NavigationItem {
  label: string
  badge?: "NEW" | "NEXT"
  isActive?: boolean
  link?: string
}

interface SidebarNavigationProps {
  items: NavigationItem[]
}

export default function SidebarNavigation({ items }: SidebarNavigationProps) {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="h-px w-[42px] bg-[#A374FF]" />
            <div className={`text-[13px] ${item.isActive ? 'font-bold underline' : 'font-medium'} text-[#9B2683]`}>
              {item.badge && (
                <span className="text-[#A374FF]">{item.badge} </span>
              )}
              {item.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
