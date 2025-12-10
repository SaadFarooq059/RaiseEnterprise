"use client"

export default function FinancialHighlightsContent() {
  // Add responsive styles for tables
  const responsiveTableStyles = `
    @media (max-width: 640px) {
      .table-row { font-size: 11px !important; }
      .table-header { font-size: 12px !important; }
      .table-label { width: 60% !important; }
    }
    @media (min-width: 641px) and (max-width: 768px) {
      .table-row { font-size: 12px !important; }
      .table-header { font-size: 13px !important; }
      .table-label { width: 60% !important; }
    }
  `

  return (
    <div className="min-h-screen bg-white" id="financial-highlights">
      <style dangerouslySetInnerHTML={{ __html: responsiveTableStyles }} />
      
      {/* Report Content */}
      <div className="bg-white">
        {/* Hero Section */}
        <div className="pt-32 sm:pt-40 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="text-[#8E2475] text-[28px] sm:text-[32px] md:text-[36px] font-['Aleo'] font-medium leading-[36px] sm:leading-[40px] md:leading-[46.8px]">
            Financial Highlights
          </h1>
        </div>

        {/* Financial Tables Container */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 pb-12 sm:pb-16 md:pb-24 flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        
        {/* ==================== TABLE 1: STATEMENT OF COMPREHENSIVE INCOME ==================== */}
        <div className="w-full overflow-x-auto">
        <div className="flex flex-col gap-6 min-w-[600px]">
          {/* Header */}
          <div className="w-full p-2 sm:p-3 md:p-4 bg-[#8E2475] flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
            <div className="w-full sm:w-[60%] md:w-[800px] text-white text-[16px] sm:text-[18px] md:text-[20px] font-['Manrope'] font-bold">STATEMENT OF COMPREHENSIVE INCOME</div>
            <div className="flex-1 flex items-center w-full sm:w-auto">
              <div className="flex-1 text-white text-[14px] sm:text-[16px] md:text-[20px] font-['Manrope'] font-bold">FY24</div>
              <div className="flex-1 text-white text-[14px] sm:text-[16px] md:text-[20px] font-['Manrope'] font-bold">FY23</div>
            </div>
          </div>

          {/* INCOME Section */}
          <div className="flex flex-col overflow-x-auto">
            <div className="w-full px-2 py-1 bg-[#B2678C] flex items-center gap-2 min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-white text-[12px] sm:text-[13px] md:text-[14px] font-['Manrope'] font-bold">INCOME</div>
            </div>
            <div className="w-full px-2 py-1 flex items-center min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']"> Operating Grants </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">3,702,100 </div>
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">3,747,450 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']"> Capital Grants </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">2,232,983 </div>
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">2,335,763 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']"> Investment Income </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">90,353 </div>
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">65,483 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']"> Membership Fees </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">5,412 </div>
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">36,250 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 flex items-center min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']"> Other Income Sources </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">75,352 </div>
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">111,662 </div>
              </div>
            </div>
            <div className="w-full px-2 py-1 bg-[#E8D3E3] flex items-center min-w-[320px]">
              <div className="w-full sm:w-[60%] md:w-[800px] text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope'] font-bold"> Total Income </div>
              <div className="flex-1 flex items-center">
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">6,106,200 </div>
                <div className="flex-1 text-black text-[11px] sm:text-[12px] md:text-[14px] font-['Manrope']">6,296,608 </div>
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
        </div>

        {/* ==================== TABLE 2: STATEMENT OF FINANCIAL POSITION ==================== */}
        <div className="w-full overflow-x-auto">
        <div className="flex flex-col gap-6 min-w-[600px]">
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
        </div>

        {/* ==================== TABLE 3: STATEMENT OF COMPREHENSIVE INCOME BY SEGMENT ==================== */}
        <div className="w-full overflow-x-auto">
        <div className="flex flex-col gap-6 min-w-[600px]">
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
      </div>
      {/* End of Report Content */}

      {/* Footer Section */}
      <footer className="relative w-full h-auto md:min-h-[500px] mt-12 md:mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/home/footer-bg.png')" }}
        />
        
        {/* Footer Content */}
        <div className="relative z-10 h-full flex items-end py-8 md:py-12 lg:pb-20">
          <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-12">
            {/* Left Side - Logo and Social Icons with Download */}
            <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
              {/* Logo */}
              <img src="/logo.png" alt="raiSE Logo" className="h-[70px] md:h-[90px] lg:h-[101px] w-auto" />
              
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
            </div>

            {/* Right Side - Get In Touch */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              <h3 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-['Aleo'] font-normal capitalize text-center md:text-right">Get In Touch!</h3>
              <div className="flex items-center w-full md:w-auto justify-center md:justify-end">
                <div className="relative flex items-center w-full max-w-[360px] md:max-w-none">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full md:w-[320px] h-[50px] md:h-[56px] pl-5 pr-[130px] rounded-full bg-[#EDEDED] text-[#22282B] text-[14px] md:text-[16px] font-['Inter'] font-normal placeholder:text-[#22282B]/60 outline-none"
                    style={{ borderRadius: '88px' }}
                  />
                  <button 
                    className="absolute right-1 h-[42px] md:h-[46px] px-5 md:px-7 rounded-full bg-[#A564F7] text-white text-[13px] md:text-[16px] font-['Inter'] font-medium hover:bg-[#9454e6] transition-all"
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
