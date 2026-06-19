"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { ServerSidebar } from "@/components/server-sidebar"

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // 1. 分類標籤判斷邏輯（與半導體系列一致）
  const getCategory = () => {
    return "Basics"
  }

  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <SiteNav />

        {/* 2. 手機版抽屜觸發按鈕 */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* 3. 電腦版 Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <ServerSidebar />
          </div>

          {/* 4. 手機版抽屜邏輯 */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
              <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white p-6 shadow-xl flex flex-col overflow-y-auto">
                <ServerSidebar onClose={() => setIsMobileMenuOpen(false)} />
              </div>
            </div>
          )}

          {/* 5. 內容區：包含分類標籤渲染 */}
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