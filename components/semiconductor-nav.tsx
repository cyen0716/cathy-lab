"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SemiconductorNav() {
  const pathname = usePathname()

  const tabs = [
    {
      href: "/semiconductor",
      label: "Learning Map",
    },
    {
      href: "/semiconductor/why",
      label: "Why Need Semiconductors?",
    },
    {
      href: "/semiconductor/chip",
      label: "What's Inside a Chip?",
    },
    {
      href: "/semiconductor/sram-vs-dram",
      label: "Why Don't We Use SRAM for Everything?",
    },
  ]

  return (
    <div className="flex flex-wrap gap-2.5 mb-3">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              transition-all
              duration-500
              ease-out

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
  )
}
