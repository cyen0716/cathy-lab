"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkle } from "lucide-react" // 💡 改為引入 Sparkle

export function SemiconductorNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/semiconductor", label: "Overview" },
    { href: "/semiconductor/why", label: "Foundation" },
    { href: "/semiconductor/chip", label: "Inside a Chip" },
    { href: "/semiconductor/sram-vs-dram", label: "SRAM vs DRAM" },
  ]

  return (
    <div className="flex items-center gap-6 mb-8 flex-wrap select-none">
      
      {/* 🍎 星光 Logo 返回鍵：告別大圓鈕，融入極簡識別，點擊一樣回首頁 */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 group py-2 shrink-0"
      >
        {/* 星光 Icon：滑鼠移過去會優雅旋轉並變深，點擊時微縮 */}
        <Sparkle 
          className="w-4 h-4 text-slate-400 transition-all duration-700 ease-out group-hover:text-slate-800 group-hover:rotate-12 group-active:scale-90" 
          strokeWidth={1.8} 
        />
        {/* 乾淨一體化的品牌字 */}
        <span className="text-base font-semibold text-slate-900 tracking-[0.12em] font-sans">
          Cathy<span className="font-light text-slate-400 ml-0.5">Lab</span>
        </span>
      </Link>

      {/* 🧭 書籤（Tabs）分段選擇器：字體放大、清晰度全面升級 */}
      <div className="flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                px-4.5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-500 ease-out
                ${
                  isActive
                    ? "bg-white text-slate-900 shadow-[0_2px_8px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.02)] border border-slate-200/60 pointer-events-none"
                    /* ✨ 激活狀態：維持純白立體感，深邃黑字 */
                    : "text-slate-600 hover:text-slate-800 hover:scale-[1.01]"
                    /* ✨ 未激活狀態：從原本太淡的 slate-400 提升到清晰的 slate-500，Hover 時更顯色 */
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