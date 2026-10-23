'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteNav } from "@/components/site-nav"
import { AppSidebar } from "@/components/app-sidebar"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // 判斷是不是首頁
  const isHomePage = pathname === '/'

  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-zinc-50 min-h-screen">
        
        {/* 🧭 1. 全站固定頂部導覽列 */}
        <header className="sticky top-0 z-50 bg-[#FCFCFC]/90 backdrop-blur-md border-b border-zinc-200">
          <div className="max-w-[1500px] mx-auto px-6">
            <SiteNav />
          </div>
        </header>

        {/* 2. 首頁與非首頁的排版分流 */}
        {isHomePage ? (
          /* 🏠 首頁：維持全寬，不顯示 Sidebar */
          <main>{children}</main>
        ) : (
          /* 📂 非首頁：左側固定 Sidebar + 右側文章內容 */
          <div className="max-w-[1500px] mx-auto flex gap-0 relative pt-6">
            
            {/* 手機版背景遮罩 */}
            {isOpen && (
              <div 
                className="fixed inset-0 bg-black/20 z-40 md:hidden" 
                onClick={() => setIsOpen(false)} 
              />
            )}

            {/* 📌 左側固定的 Sidebar (桌面版 sticky 黏在頂部下方) */}
            <aside className={`
              fixed inset-y-0 left-0 z-50 w-64 bg-zinc-50 border-r border-zinc-200 transition-transform duration-300 ease-in-out
              md:sticky md:top-24 md:translate-x-0 md:shadow-none md:h-[calc(100vh-7rem)] md:overflow-y-auto shrink-0
              ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              <AppSidebar 
                isOpen={isOpen} 
                onToggle={() => setIsOpen(!isOpen)} 
                onClose={() => setIsOpen(false)} 
              />
            </aside>

            {/* 📄 右側文章內容區塊 */}
            <article className="flex-1 w-full bg-white px-8 py-6 md:px-16 rounded-2xl border border-zinc-200/60 shadow-sm mb-12 min-w-0">
              {children}
            </article>

          </div>
        )}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}