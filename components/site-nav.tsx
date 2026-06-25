"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FlaskConical } from 'lucide-react'

export function SiteNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/semiconductor", label: "Semiconductor" },
    { href: "/server", label: "Server" },
    { href: "/korean", label: "Korean" },
  ]

  return (
    <div className="flex items-center justify-between w-full py-6">
      
      {/* 1. Logo 區域：確保 shrink-0 不會被擠壓 */}
<Link href="/" className="group inline-flex items-center gap-3 shrink-0">
  <div className="relative">
    <div className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full transition-transform duration-700 ease-out group-hover:-rotate-15">
      <FlaskConical className="w-5 h-5 text-white" strokeWidth={2.3} />
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full" />
    </div>
  </div>
  <span className="hidden md:block text-sm font-bold text-zinc-800 tracking-wider uppercase">
    Cathy Lab
  </span>
</Link>

      {/* 2. Navigation 區域：手機字體更小，間距更緊湊 */}
      <nav className="flex items-center px-8 gap-3 md:gap-10">
        {tabs.map((tab) => {
          const isActive = tab.href === "/" 
            ? pathname === "/" 
            : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                relative transition-colors duration-300 py-1 group shrink-0
                text-xs md:text-base font-semibold
                ${isActive ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"}
              `}
            >
              {tab.label}
              
              {/* 底線動畫 */}
              <span className={`
                absolute left-0 -bottom-[5px] w-full h-[2px] rounded-full transition-transform duration-300
                ${isActive ? "bg-indigo-400" : "bg-zinc-300 scale-x-0 group-hover:scale-x-100"}
              `} />
            </Link>
          )
        })}
      </nav>
    </div>
  )
}