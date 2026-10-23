// @/components/logo.tsx
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group select-none">
      <div className="flex items-baseline tracking-[0.18em]">
        <span className="text-base font-bold text-slate-950 font-sans">
          CATHY
        </span>
        <span className="text-sm font-medium text-slate-400 ml-1.5 transition-colors group-hover:text-slate-600">
          LAB
        </span>
      </div>
    </Link>
  )
}