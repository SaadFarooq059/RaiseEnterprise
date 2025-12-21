import PurpleCard from "./PurpleCard"

export default function PurpleCardsSection() {
  return (
    <div className="mb-8 md:mb-12 flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
      <PurpleCard 
  
        title="Articulate their purpose with greater clarity"
        iconSrc="/social/1.png"
      />
      <PurpleCard 
    
        title="Measure their contributions with rigour"
        iconSrc="/social/2.png"
      />
      <PurpleCard 
       
        title="Build trust with stakeholders and the greater public"
        iconSrc="/social/3.png"
      />
    </div>
  )
}
