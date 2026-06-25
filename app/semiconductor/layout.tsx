'use client'

import { useState } from 'react';
import { SiteNav } from "@/components/site-nav"
import { SemiconductorSidebar } from "@/components/semiconductor-sidebar"

export default function SemiconductorLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // 手機版預設收起

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-6 h-16 flex items-center">
          <SiteNav />
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto flex gap-0 relative">
        {/* 手機遮罩 (點擊後關閉 sidebar) */}
        {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

        {/* 側邊欄 */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-zinc-50 border-r border-zinc-200 py-8 shadow-2xl transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <SemiconductorSidebar 
            isOpen={isOpen} 
            onToggle={() => setIsOpen(!isOpen)} 
            onClose={() => setIsOpen(false)} 
          />
        </aside>

        <article className="flex-1 w-full bg-white px-8 py-6 md:px-16">
          {children}
        </article>
      </div>
    </main>
  )
}