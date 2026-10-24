"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FlaskConical, Menu, X, ChevronDown } from 'lucide-react'
import { vocabularyData } from "@/lib/vocabulary-data"

export function SiteNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  // 紀錄手機版哪個分類處於展開狀態
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (label: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenSection(openSection === label ? null : label)
  }

  const tabs = [
    { href: "/", label: "HOME" },
    { 
      href: "/portfolio", 
      label: "PORTFOLIO",
      subItems: [
        { href: "/portfolio", label: "CX4800-56F Rack Mounting" },
        { href: "/portfolio/vpn", label: "Remote Access VPN" },
        { href: "/portfolio/tailscale", label: "Tailscale CLI" },
        { href: "/portfolio/zyxel-one-app", label: "Zyxel One App" },
        { href: "/portfolio/lite60ax", label: "USG LITE 60AX" },
      ]
    },
    { 
      href: "/semiconductor", 
      label: "SEMICONDUCTOR",
      subItems: [
        { href: "/semiconductor", label: "IC Categories" },
        { href: "/semiconductor/why", label: "Semiconductor Basics" },
        { href: "/semiconductor/chip", label: "Chip Organization" },
        { href: "/semiconductor/sram-vs-dram", label: "SRAM vs DRAM" },
      ]
    },
    { 
      href: "/server", 
      label: "SERVER",
      subItems: [
        { href: "/server", label: "Server Basics" },
        { href: "/server/ai-server", label: "AI Server Basics" },
      ]
    },
    { 
      href: "/korean", 
      label: "KOREAN",
      // 動態對應 vocabularyData 分類
      subItems: vocabularyData.map((cat) => ({
        href: `/korean?category=${cat.id}`,
        label: `${cat.nameKorean} (${cat.name})`,
      }))
    },
  ]

  return (
    <header className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full py-4 px-6 max-w-7xl mx-auto">
        
        {/* 1. 保留原本喜歡的燒瓶 Logo */}
        <Link href="/" className="group inline-flex items-center gap-3 shrink-0">
          <div className="relative">
            <div className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full transition-transform duration-700 ease-out group-hover:-rotate-12">
              <FlaskConical className="w-5 h-5 text-white" strokeWidth={2.3} />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
          <span className="text-xs font-bold text-zinc-800 tracking-wider uppercase">
            Cathy Lab
          </span>
        </Link>

        {/* 2. 電腦版導覽列 (md 以上顯示，完全維持你原本的視覺與動畫) */}
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
                
                {/* 底線特效 */}
                <span className={`
                  absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-all duration-300
                  ${isActive ? "bg-zinc-900 scale-x-100" : "bg-zinc-200 scale-x-0 group-hover:scale-x-100"}
                `} />
              </Link>
            )
          })}
        </nav>

        {/* 右側預留空間 (電腦版平衡用) */}
        <div className="w-24 hidden md:block" />

        {/* 3. ✨ 手機版漢堡選單按鈕 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-800 hover:text-zinc-950 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 4. ✨ 手機版下拉選單 (支援雙層折疊，純白實底，字體清晰) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 px-6 py-4 space-y-2 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          {tabs.map((tab) => {
            const isActive = tab.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(tab.href);
            
            const hasSubItems = tab.subItems && tab.subItems.length > 0;
            const isExpanded = openSection === tab.label;

            return (
              <div key={tab.href} className="space-y-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={tab.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex-1 py-2.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors
                      ${
                        isActive
                          ? "bg-zinc-900 text-white"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                      }
                    `}
                  >
                    {tab.label}
                  </Link>

                  {/* 若有子項目，顯示展開箭頭 */}
                  {hasSubItems && (
                    <button
                      onClick={(e) => toggleSection(tab.label, e)}
                      className="p-2 text-zinc-500 hover:text-zinc-900 cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* 第二層子選單區塊 */}
                {hasSubItems && isExpanded && (
                  <div className="ml-4 pl-3 border-l-2 border-zinc-200 space-y-1 py-1">
                    {tab.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-3 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </header>
  )
}