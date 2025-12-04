"use client"

import Navbar from "@/components/navbar"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { useRef } from "react"

export default function FinancialHighlights() {
  const reportRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return

    try {
      // Clone the element to modify styles for PDF
      const element = reportRef.current
      const clone = element.cloneNode(true) as HTMLElement
      
      // Create a container for the clone
      const container = document.createElement('div')
      container.style.position = 'absolute'
      container.style.left = '-9999px'
      container.style.top = '0'
      container.style.width = '1440px'
      container.appendChild(clone)
      document.body.appendChild(container)
      
      // Replace any lab() or oklch() colors with fallbacks in the clone
      const allElements = clone.querySelectorAll('*')
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement
        const computed = window.getComputedStyle(htmlEl)
        // Set explicit background colors to avoid lab() parsing
        if (computed.backgroundColor.includes('lab') || computed.backgroundColor.includes('oklch')) {
          htmlEl.style.backgroundColor = '#ffffff'
        }
      })
      
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 1440,
        onclone: (clonedDoc) => {
          // Additional cleanup of problematic colors
          const styles = clonedDoc.querySelectorAll('style')
          styles.forEach(style => {
            if (style.textContent) {
              style.textContent = style.textContent.replace(/lab\([^)]+\)/g, '#ffffff')
              style.textContent = style.textContent.replace(/oklch\([^)]+\)/g, '#ffffff')
            }
          })
        }
      })
      
      // Remove the clone
      document.body.removeChild(container)

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      
      // Calculate dimensions to fit width
      const imgRatio = imgWidth / imgHeight
      const pdfImgWidth = pdfWidth - 20 // 10mm margin on each side
      const pdfImgHeight = pdfImgWidth / imgRatio
      
      // Calculate how many pages we need
      const pageContentHeight = pdfHeight - 20 // 10mm margin top and bottom
      const totalPages = Math.ceil(pdfImgHeight / pageContentHeight)
      
      for (let page = 0; page < totalPages; page++) {
        if (page > 0) {
          pdf.addPage()
        }
        
        const srcY = (page * pageContentHeight / pdfImgHeight) * imgHeight
        const srcHeight = Math.min((pageContentHeight / pdfImgHeight) * imgHeight, imgHeight - srcY)
        
        // Create a canvas for this page section
        const pageCanvas = document.createElement('canvas')
        pageCanvas.width = imgWidth
        pageCanvas.height = srcHeight
        const ctx = pageCanvas.getContext('2d')
        
        if (ctx) {
          const img = new Image()
          img.src = imgData
          await new Promise((resolve) => {
            img.onload = resolve
          })
          ctx.drawImage(img, 0, srcY, imgWidth, srcHeight, 0, 0, imgWidth, srcHeight)
          
          const pageImgData = pageCanvas.toDataURL('image/png')
          const destHeight = (srcHeight / imgHeight) * pdfImgHeight
          pdf.addImage(pageImgData, 'PNG', 10, 10, pdfImgWidth, destHeight)
        }
      }

      pdf.save('Financial-Highlights-Report.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Gradient Header Behind Navbar */}
      <div 
        className="fixed top-0 left-0 right-0 h-24 z-30"
        style={{ background: "linear-gradient(180deg, rgba(108, 7, 99, 0.8) 0%, rgba(108, 7, 99, 0.3) 70%, transparent 100%)" }}
      />
      
      <Navbar />
      
      {/* Report Content - wrapped for PDF generation */}
      <div ref={reportRef} className="bg-white">
        {/* Hero Section */}
        <div className="pt-40 pb-16 px-6 md:px-24">
          <div 
            style={{
              width: '100%', 
              color: '#8E2475', 
              fontSize: 36, 
              fontFamily: 'Aleo', 
              fontWeight: '500', 
              lineHeight: '46.80px', 
              wordWrap: 'break-word'
            }}
          >
            Financial Highlights
          </div>
        </div>

        {/* Financial Tables Container */}
        <div className="px-6 md:px-24 pb-24 flex flex-col gap-20">
        
        {/* ==================== TABLE 1: STATEMENT OF COMPREHENSIVE INCOME ==================== */}
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[800px] text-white text-[20px] font-['Manrope'] font-bold">STATEMENT OF COMPREHENSIVE INCOME</div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">FY24</div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">FY23</div>
            </div>
          </div>

          {/* INCOME Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold">INCOME</div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Operating Grants </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,702,100 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,747,450 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Capital Grants </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">2,232,983 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">2,335,763 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Investment Income </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">90,353 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">65,483 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Membership Fees </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">5,412 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">36,250 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Other Income Sources </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">75,352 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">111,662 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold"> Total Income </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">6,106,200 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">6,296,608 </div>
              </div>
            </div>
          </div>

          {/* OPERATING COSTS Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold"> OPERATING COSTS </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Manpower Costs </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">2,692,162 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">2,439,663 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> General and Administrative Costs </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">480,845 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">491,779 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold"> Total Operating Costs </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,173,007 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">2,931,442 </div>
              </div>
            </div>
          </div>

          {/* PROGRAMME COSTS Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold"> PROGRAMME COSTS </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Programmes and Services </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">299,619 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">396,605 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Public Education &amp; Publicity </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">113,924 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">236,264 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold">Total Programme Costs</div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">413,543 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">632,869 </div>
              </div>
            </div>
          </div>

          {/* GRANTS TO SOCIAL ENTERPRISES Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold">GRANTS TO SOCIAL ENTERPRISES </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Grants to Social Enterprises </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,992,801</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']"> 2,219,460</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold"> Grants to Social Enterprises </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,992,801 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']"> 2,219,460 </div>
              </div>
            </div>
          </div>

          {/* OTHER LOSSES Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold">OTHER LOSSES </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Share of losses from associated companies </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Write-off of investment in associated company </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Allowance for impairments </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Other Losses </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">61,330 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Total Other Losses </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">61,330 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold"> Total Expenditure </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">5,579,351 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">5,845,101 </div>
              </div>
            </div>
          </div>

          {/* OTHER GAINS Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold">OTHER GAINS </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Share of profit from associated company </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,260 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,030 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Net (Deficit)/Surplus before Tax Expenses </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">528,109 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">452,537 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Tax Expense </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">(111,421)</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">(60,641)</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold">Net Surplus after Tax Expenses</div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">416,688 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">391,896 </div>
              </div>
            </div>
          </div>

          {/* OTHER COMPREHENSIVE INCOME Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold">OTHER COMPREHENSIVE INCOME </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold">Fair value changes on financial assets at FVTOCI</div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
              </div>
            </div>
          </div>

          {/* TOTAL COMPREHENSIVE Footer */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[800px] text-white text-[20px] font-['Manrope'] font-bold">TOTAL COMPREHENSIVE (LOSSES)/INCOME FOR THE YEAR </div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">416,688 </div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">391,896 </div>
            </div>
          </div>
        </div>

        {/* ==================== TABLE 2: STATEMENT OF FINANCIAL POSITION ==================== */}
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[800px] text-white text-[20px] font-['Manrope'] font-bold">STATEMENT OF FINANCIAL POSITION</div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">FY24</div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">FY23</div>
            </div>
          </div>

          {/* ASSETS Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold"> ASSETS </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Non-current Assets </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,887,878 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,881,139 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Current Assets </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">10,058,264 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">9,870,881 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold"> Total Assets </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">11,946,142 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">11,752,020 </div>
              </div>
            </div>
          </div>

          {/* LIABILITIES Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold"> LIABILITIES </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Non-current Liabilities </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">2,890,160 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,264,451 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Current Liabilities </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">716,419 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">564,694 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope'] font-bold"> Total Liabilities </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,606,579 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,829,145 </div>
              </div>
            </div>
          </div>

          {/* NET ASSETS */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[800px] text-white text-[20px] font-['Manrope'] font-bold"> NET ASSETS </div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">8,339,563 </div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">7,922,875 </div>
            </div>
          </div>

          {/* FUNDS Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2">
              <div className="w-[800px] text-white text-[14px] font-['Manrope'] font-bold">FUNDS </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Unrestricted Fund </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">4,440,796 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">4,141,253 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[800px] text-black text-[14px] font-['Manrope']"> Restricted Fund </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,898,767 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,781,622 </div>
              </div>
            </div>
          </div>

          {/* TOTAL FUNDS */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[800px] text-white text-[20px] font-['Manrope'] font-bold"> TOTAL FUNDS</div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">8,339,563 </div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">7,922,875 </div>
            </div>
          </div>
        </div>

        {/* ==================== TABLE 3: STATEMENT OF COMPREHENSIVE INCOME BY SEGMENT ==================== */}
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[600px] text-white text-[20px] font-['Manrope'] font-bold">STATEMENT OF COMPREHENSIVE INCOME</div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[16px] font-['Manrope'] font-bold">TOTAL</div>
              <div className="flex-1 text-white text-[16px] font-['Manrope'] font-bold">SECTOR DEVELOPMENT</div>
              <div className="flex-1 text-white text-[16px] font-['Manrope'] font-bold">GRANT ADMINISTRATION</div>
              <div className="flex-1 text-white text-[16px] font-['Manrope'] font-bold">INVESTMENT</div>
            </div>
          </div>

          {/* TOTAL INCOME Row */}
          <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
            <div className="w-[600px] text-black text-[14px] font-['Manrope'] font-bold"> TOTAL INCOME </div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-black text-[14px] font-['Manrope']">6,106,200 </div>
              <div className="flex-1 text-black text-[14px] font-['Manrope']">3,873,217 </div>
              <div className="flex-1 text-black text-[14px] font-['Manrope']">2,232,983 </div>
              <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
            </div>
          </div>

          {/* EXPENDITURES Header */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[600px] text-white text-[20px] font-['Manrope'] font-bold"> EXPENDITURES </div>
          </div>

          {/* EXPENDITURES Section */}
          <div className="flex flex-col">
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> General, Admin and Manpower Costs </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,173,007 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,173,007 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Programme Costs </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">413,543 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">413,543 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Grants to Social Enterprises </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,992,801 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,887,801 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">105,000 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Other Losses </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope'] font-bold"> TOTAL EXPENDITURE </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">5,579,351 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,586,550 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,887,801 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">105,000 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Share of Profit from associated company </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,260 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">1,260 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope'] font-bold"> Net (Deficit)/Surplus before Tax Expenses </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">528,109 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">286,667 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">345,182 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">(103,740)</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Income Tax Expense </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">(111,421)</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">(111,421)</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Fair value changes on financial assets at FVTOCI </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">- </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center">
              <div className="w-[600px] text-white text-[14px] font-['Manrope'] font-bold">TOTAL COMPREHENSIVE (LOSSES)/INCOME FOR THE YEAR </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-white text-[14px] font-['Manrope']">416,688 </div>
                <div className="flex-1 text-white text-[14px] font-['Manrope']">175,246 </div>
                <div className="flex-1 text-white text-[14px] font-['Manrope']">345,182 </div>
                <div className="flex-1 text-white text-[14px] font-['Manrope']">(103,740)</div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center">
              <div className="w-[600px] text-black text-[14px] font-['Manrope']"> Balance at 1 April 2024 </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[14px] font-['Manrope']">7,922,875 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">4,232,006 </div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">-</div>
                <div className="flex-1 text-black text-[14px] font-['Manrope']">3,690,869 </div>
              </div>
            </div>
          </div>

          {/* Balance at 31 March 2025 Footer */}
          <div className="w-full p-2 bg-[#8E2475] flex items-center">
            <div className="w-[600px] text-white text-[20px] font-['Manrope'] font-bold"> Balance at 31 March 2025 </div>
            <div className="flex-1 flex items-center">
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">8,339,563 </div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">4,407,252 </div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">345,182 </div>
              <div className="flex-1 text-white text-[20px] font-['Manrope'] font-bold">3,587,129 </div>
            </div>
          </div>
        </div>

        </div>
      </div>
      {/* End of Report Content */}

      {/* Footer Section */}
      <footer className="relative w-full min-h-[500px] md:h-[500px] mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/home/footer-bg.png')" }}
        />
        
        {/* Footer Content */}
        <div className="relative z-10 h-full flex items-end pb-10 md:pb-20">
          <div className="w-full px-6 md:px-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0">
            {/* Left Side - Logo, then Social Icons with Download below them */}
            <div className="flex items-center md:items-end gap-8 md:gap-12">
              {/* Logo */}
              <img src="/logo.png" alt="raiSE Logo" className="h-[80px] md:h-[101px] w-auto" />
              
              {/* Social Icons and Download Column */}
              <div className="flex flex-col items-center md:items-start gap-4">
                {/* Social Icons */}
                <div className="flex items-center gap-4 md:gap-5">
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Download Report - Below social icons only */}
                <button 
                onClick={handleDownloadPDF}
                className="flex items-center gap-3 cursor-pointer hover:opacity-100 transition-all opacity-80"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-white text-[16px] md:text-[20px] font-['Manrope'] font-medium leading-[26px]">DOWNLOAD FULL REPORT</span>
                </button>
              </div>
            </div>

            {/* Right Side - Get In Touch */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              <h3 className="text-white text-[24px] md:text-[32px] font-['Aleo'] font-normal capitalize leading-[32px] text-center md:text-right">Get In Touch!</h3>
              <div className="flex items-center w-full md:w-auto justify-center md:justify-end">
                <div className="relative flex items-center">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-[260px] md:w-[320px] h-[50px] md:h-[56px] pl-5 pr-[120px] md:pr-[130px] rounded-full bg-[#EDEDED] text-[#22282B] text-[14px] md:text-[16px] font-['Inter'] font-normal placeholder:text-[#22282B]/60 outline-none"
                    style={{ borderRadius: '88px' }}
                  />
                  <button 
                    className="absolute right-1 h-[40px] md:h-[46px] px-5 md:px-7 rounded-full bg-[#A564F7] text-white text-[14px] md:text-[16px] font-['Inter'] font-medium leading-[17.6px] hover:bg-[#9454e6] transition-all"
                    style={{ borderRadius: '88px' }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
