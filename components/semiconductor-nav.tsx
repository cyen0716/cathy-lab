"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft } from "lucide-react" // 記得引入圖標

export function SemiconductorNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/semiconductor", label: "Learning Map" },
    { href: "/semiconductor/why", label: "Why Need Semiconductors?" },
    { href: "/semiconductor/chip", label: "What's Inside a Chip?" },
    { href: "/semiconductor/sram-vs-dram", label: "Why Don't We Use SRAM for Everything?" },
  ]

  return (
    <div className="flex items-center gap-4 mb-7 flex-wrap">
      
      {/* 整合進來的返回鍵 */}
      <Link
        href="/"
        className="
          inline-flex items-center justify-center
          w-11 h-11 rounded-full shrink-0
          bg-white border border-slate-200/60 text-slate-600
          hover:text-[#4338CA] hover:border-indigo-100
          hover:scale-105
          hover:shadow-[0_12px_24px_-8px_rgba(67,56,202,0.15)]
          transition-all duration-500 ease-out
        "
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      {/* 書籤們 */}
      <div className="flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out
                ${
                  isActive
                    ? "bg-[#EEF2FF] text-[#4338CA] pointer-events-none"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300/80 hover:scale-[1.01] hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.04)]"
                }
              `}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

    </div>
  )
}
