'use client'

import { useState } from 'react';
import { SiteNav } from "@/components/site-nav"
import { ServerSidebar } from "@/components/server-sidebar"

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-6 h-16 flex items-center">
          <SiteNav />
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto flex gap-0 relative">
        {/* 手機遮罩 */}
        {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

        {/* 左側邊欄：只放入 ServerSidebar 組件 */}
        <aside className={`
  fixed inset-y-0 left-0 z-50 w-64 bg-zinc-50 border-r border-zinc-200 py-8 shadow-2xl transition-transform duration-300 ease-in-out
  md:relative md:translate-x-0 md:shadow-none md:border-r md:border-zinc-200 md:min-h-screen
  h-full       /* 【重要】確保側邊欄高度佔滿 */
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
`}>
  {/* 只放 Sidebar 元件 */}
  <ServerSidebar 
    isOpen={isOpen} 
    onToggle={() => setIsOpen(!isOpen)} 
    onClose={() => setIsOpen(false)} 
  />
</aside>

        {/* 右側內容區 */}
        <article className="flex-1 w-full bg-white px-8 py-6 md:px-16 min-h-screen">
          {children}
        </article>
      </div>
    </main>
  )
}