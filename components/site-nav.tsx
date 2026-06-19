"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkle } from "lucide-react"

export function SiteNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/semiconductor", label: "Semiconductor" },
    { href: "/server", label: "Server" },
    { href: "/korean", label: "Korean" },
  ]

  return (
    /* 1. 手機版改為 flex-col（上下排列），sm 以上恢復 flex-row
      2. 調整間距 gap-4 (手機) -> sm:gap-12 (電腦)
    */
    <div className="flex flex-col sm:flex-row sm:items-center justify-start mb-8 sm:mb-12 gap-4 sm:gap-12 select-none w-full">
      
      {/* Logo - 手機版靠左 */}
      <Link href="/" className="inline-flex items-center gap-2 group shrink-0 self-start">
        <Sparkle
          className="w-5 h-5 text-slate-400 transition-all duration-700 ease-out group-hover:rotate-12"
          strokeWidth={1.8}
        />
        <span className="text-lg font-bold text-[#4338CA] tracking-[0.05em]">
          Cathy
          <span className="font-medium text-slate-500 ml-1">Lab</span>
        </span>
      </Link>

      {/* Navigation
        1. overflow-x-auto: 讓手機版超出時可以左右滑動
        2. whitespace-nowrap: 防止文字因為空間不足而自動斷行
        3. pb-3 / -mb-3: 預留底部空間給選中實線（-bottom-[10px]），防止被 overflow-hidden 裁切
        4. scrollbar-none: 隱藏滾動條（選用，需搭配下方提示或 CSS）
      */}
      <nav className="flex items-center gap-6 sm:gap-8 text-[15px] overflow-x-auto whitespace-nowrap w-full sm:w-auto pb-3 -mb-3 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href || pathname.startsWith(tab.href + "/")

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                relative transition-colors duration-300 py-1 group shrink-0
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