import Link from "next/link"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* Back */}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-8"
        >
          ← Back to Home
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

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">

            <div className="text-3xl mb-4">📘</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Semiconductor Basics
            </h2>

            <p className="text-slate-500">
              What is a semiconductor, wafer, chip,
              fab, foundry, and Moore’s Law.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">

            <div className="text-3xl mb-4">⚙️</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Process Technology
            </h2>

            <p className="text-slate-500">
              FinFET, GAA, EUV lithography,
              and process node evolution.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">

            <div className="text-3xl mb-4">💾</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Memory & Logic
            </h2>

            <p className="text-slate-500">
              DRAM, NAND Flash, CPU,
              GPU, and AI chips.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">

            <div className="text-3xl mb-4">📦</div>

            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Packaging
            </h2>

            <p className="text-slate-500">
              Chiplets, CoWoS,
              advanced packaging and integration.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}