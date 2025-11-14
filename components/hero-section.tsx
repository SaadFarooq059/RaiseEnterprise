export default function HeroSection() {
  return (
    <div className="w-full relative">
      {/* Image */}
      <img 
        src="/home/hero.png" 
        alt="Hero" 
        className="w-full h-auto object-cover"
      />
      
      {/* Text overlay on left side */}
      <div className="absolute top-1/2 left-20 lg:left-60 transform -translate-y-1/2">
        <div style={{ fontSize: 96, fontFamily: 'Aleo', fontWeight: '500', lineHeight: '105.6px', wordWrap: 'break-word' }}>
          <span style={{ color: 'white' }}>Leading <br/>with </span>
          <span style={{ color: '#FCD290' }}>Impact</span>
        </div>
        
        {/* Subtitle text */}
        <div className="mt-6" style={{ color: 'white', fontSize: 24, fontFamily: 'Manrope', fontWeight: '500', lineHeight: '28.80px', wordWrap: 'break-word' }}>
          raiSE Annual Report 2024/2025
        </div>
      </div>
    </div>
  )
}
