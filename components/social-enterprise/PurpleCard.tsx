interface PurpleCardProps {

  title: string
  iconSrc?: string
}

export default function PurpleCard({  title, iconSrc = "https://placehold.co/110x110" }: PurpleCardProps) {
  return (
    <div className="relative h-[295px] w-[245px]">
      <div className="absolute left-0 top-0 h-[295px] w-[245px] rounded-[33px] bg-[#9B2683]" />
      <div className="absolute left-5 top-[170px] w-[194px] font-manrope text-lg font-semibold leading-[18px] text-white">
     
        <br />
        <br />
        {title}
        <br />
      </div>
      <img
        className="absolute left-0 top-[5px] h-[110px] w-[110px]"
        src={iconSrc}
     
      />
    </div>
  )
}
