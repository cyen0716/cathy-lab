'use client' // 如果是 Next.js App Router 記得加上這行

import { useState } from "react"
import { SiteNav } from "@/components/site-nav"
import { SemiconductorSidebar } from "@/components/semiconductor-sidebar"

export default function SemiconductorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 控制手機版抽屜開關的狀態
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <SiteNav />

        {/* 1. 手機版專用的「開啟選單」按鈕：電腦版 (md:) 隱藏 */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            {/* 簡單的漢堡選單圖標 */}
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* 2. 電腦版側邊欄容器：手機版 (hidden)，電腦版才顯示 (md:block) */}
          <div className="hidden md:block w-64 shrink-0">
            <SemiconductorSidebar />
          </div>

          {/* 3. 手機版抽屜式側邊欄 (Drawer) */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
              {/* 背景遮罩 (Backdrop) - 點擊可以關閉選單 */}
              <div 
                className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* 抽屜主體 - 從左側滑出 */}
              <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white p-6 shadow-xl flex flex-col overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  {/* 關閉按鈕 */}
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* 複用你原本的側邊欄組件 */}
                <SemiconductorSidebar />
              </div>
            </div>
          )}

          {/* 主要內容區：無論手機或電腦都維持滿寬/自適應 */}
          <div className="flex-1 min-w-0 w-full">
            {children}
          </div>

        </div>
      </div>
    </main>
  )
}