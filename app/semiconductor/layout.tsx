'use client'

import { useState } from 'react';

export default function SemiconductorLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // 手機版預設收起

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="max-w-[1500px] mx-auto flex gap-0 relative">
        {/* 手機遮罩 (點擊後關閉 sidebar) */}
        {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}


        <article className="flex-1 w-full bg-white px-8 py-6 md:px-16">
          {children}
        </article>
      </div>
    </main>
  )
}