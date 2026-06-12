"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkle } from "lucide-react"

export function SiteNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/semiconductor", label: "Semiconductor" },
    { href: "/server", label: "Server & Storage" },
    { href: "/korean", label: "Korean" },
  ]

  return (
    <div className="flex items-center justify-start mb-12 gap-12 select-none">
      {/* Logo */}
      <Link href="/" className="inline-flex items-center gap-2 group shrink-0">
        <Sparkle
          className="w-5 h-5 text-slate-400 transition-all duration-700 ease-out group-hover:rotate-12"
          strokeWidth={1.8}
        />
        <span className="text-lg font-bold text-[#4338CA] tracking-[0.05em]">
          Cathy
          <span className="font-medium text-slate-500 ml-1">Lab</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-[15px]">
  {tabs.map((tab) => {
    const isActive =
      pathname === tab.href || pathname.startsWith(tab.href + "/")

    return (
      <Link
        key={tab.href}
        href={tab.href}
        className={`
          relative transition-colors duration-300 py-1 group
          ${
            isActive
              ? "text-slate-950 font-semibold" 
              : "text-slate-600 hover:text-slate-950" 
          }
        `}
      >
        {tab.label}
        
        {/* 選中時顯示的紫色實線 */}
        {isActive && (
          <span className="absolute left-0 -bottom-[10px] w-full h-[2px] bg-[#4338CA] rounded-full" />
        )}

        {/* 懸停時顯示的淺灰色線 (非選中狀態下) */}
        {!isActive && (
          <span className="absolute left-0 -bottom-[10px] w-full h-[2px] bg-slate-200 rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        )}
      </Link>
    )
  })}
</nav>
   
    </div>
  )
}