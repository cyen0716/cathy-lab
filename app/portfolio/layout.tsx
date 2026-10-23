'use client'

import { useState } from 'react';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50">

      <div className="max-w-[1500px] mx-auto flex gap-0 relative">
        {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

        <article className="flex-1 w-full bg-white px-8 py-6 md:px-16">
          {children}
        </article>
      </div>
    </main>
  )
}