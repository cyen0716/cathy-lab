import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* Back */}

        <Link
  href="/"
  className="
    inline-flex
    items-center
    justify-center
    w-11
    h-11
    rounded-full
    bg-[#EEF2FF]
    text-[#4338CA]
    hover:bg-[#E0E7FF]
    hover:shadow-md
    hover:-translate-y-0.5
    transition-all
    duration-200
    mb-8
  "
>
  <ChevronLeft className="w-5 h-5" />
</Link>
        {/* Header */}

        <header className="mb-12">

          <p className="text-sm uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Semiconductor Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Semiconductor Notes
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mt-4 max-w-2xl leading-relaxed">
            Learning semiconductor concepts through
            visual notes, industry research, and technical exploration.
          </p>

        </header>

        {/* Topics */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Basics */}

          <Link href="/semiconductor/basic">

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#4338CA] transition-all duration-300 cursor-pointer">

              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">
                Basics
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Semiconductor Basics
              </h2>

              <p className="text-slate-500 leading-relaxed">
                What is a semiconductor, wafer, chip,
                fab, foundry, and Moore's Law.
              </p>

            </div>

          </Link>

          {/* Process */}

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#4338CA] transition-all duration-300">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">
              Process
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Process Technology
            </h2>

            <p className="text-slate-500 leading-relaxed">
              FinFET, GAA, EUV lithography,
              and process node evolution.
            </p>

          </div>

          {/* Memory */}

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#4338CA] transition-all duration-300">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">
              Memory
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Memory & Logic
            </h2>

            <p className="text-slate-500 leading-relaxed">
              DRAM, NAND Flash, CPU,
              GPU, and AI chips.
            </p>

          </div>

          {/* Packaging */}

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#4338CA] transition-all duration-300">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">
              Packaging
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Advanced Packaging
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Chiplets, CoWoS,
              advanced packaging and integration.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}