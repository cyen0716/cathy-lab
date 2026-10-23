"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FlaskConical } from 'lucide-react'

export function SiteNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/semiconductor", label: "SEMICONDUCTOR" },
    { href: "/server", label: "SERVER" },
    { href: "/korean", label: "KOREAN" },
  ]

  return (
    <div className="flex items-center justify-between w-full py-6">
      
      {/* 1. 保留原本你喜歡的燒瓶 Logo */}
      <Link href="/" className="group inline-flex items-center gap-3 shrink-0">
        <div className="relative">
          <div className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full transition-transform duration-700 ease-out group-hover:-rotate-15">
            <FlaskConical className="w-5 h-5 text-white" strokeWidth={2.3} />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
        <span className="text-xs font-bold text-zinc-700 tracking-wider uppercase">
          Cathy Lab
        </span>
      </Link>

      {/* 2. 質感升級的導覽列：全大寫、寬字距、簡約俐落 */}
      <nav className="hidden md:flex items-center gap-8">
        {tabs.map((tab) => {
          const isActive = tab.href === "/" 
            ? pathname === "/" 
            : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                relative transition-all duration-300 py-1 group shrink-0
                text-xs font-bold tracking-widest uppercase
                ${isActive ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-950"}
              `}
            >
              {tab.label}
              
              {/* 精緻的微底線特效 */}
              <span className={`
                absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-all duration-300
                ${isActive ? "bg-zinc-900 scale-x-100" : "bg-zinc-200 scale-x-0 group-hover:scale-x-100"}
              `} />
            </Link>
          )
        })}
      </nav>

      {/* 3. 右側預留平衡空間 */}
      <div className="w-24 hidden md:block" />

    </div>
  )
}