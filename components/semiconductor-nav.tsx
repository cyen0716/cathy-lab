import Link from "next/link"

export function SemiconductorNav() {
  return (
    <div className="flex flex-wrap gap-2.5 mb-6">

      <Link
        href="/semiconductor"
        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:border-slate-300 transition-all"
      >
        Learning Map
      </Link>

      <Link
        href="/semiconductor/why"
        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:border-slate-300 transition-all"
      >
        Why Need Semiconductors?
      </Link>

      <Link
        href="/semiconductor/chip"
        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:border-slate-300 transition-all"
      >
        What's Inside a Chip?
      </Link>

      <Link
        href="/semiconductor/sram-vs-dram"
        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:border-slate-300 transition-all"
      >
        Why Don't We Use SRAM for Everything?
      </Link>

    </div>
  )
}
