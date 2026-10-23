'use client'

import { useState } from 'react';

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50">
      

      <div className="max-w-[1500px] mx-auto flex gap-0 relative">
        {/* 手機遮罩 */}
        {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

        {/* 右側內容區 */}
        <article className="flex-1 w-full bg-white px-8 py-6 md:px-16 min-h-screen">
          {children}
        </article>
      </div>
    </main>
  )
}