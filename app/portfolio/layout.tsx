"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { PortfolioTabs } from "@/components/portfolio-tab"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Portfolio 的分類邏輯
  const getCategory = () => {
    return "Zyxel Networks"
  }

  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <SiteNav />
        
        {/* ... (略：手機版按鈕結構同上) ... */}

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="hidden md:block w-64 shrink-0">
            <PortfolioTabs />
          </div>

          {/* 自動渲染分類小字 */}
          <div className="flex-1 min-w-0 w-full">
            <div className="mb-2">
              <span className="text-sm font-semibold text-[#4338CA] tracking-wider uppercase">
                {getCategory()}
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}