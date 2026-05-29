import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BasicsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-4xl mx-auto px-6 py-10">

        <Link
  href="/semiconductor"
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
  "
>
  <ChevronLeft className="w-5 h-5" />
</Link>

        <article className="mt-8">

  <p className="text-sm uppercase tracking-[0.15em] text-slate-400 mb-4">
    Semiconductor Basics
  </p>

  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
    What is a Semiconductor?
  </h1>

  {/* Definition */}

  <section className="mb-12">

    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      Definition
    </h2>

    <p className="text-lg leading-relaxed text-slate-600">
      A semiconductor is a material whose electrical conductivity
      is between a conductor and an insulator.
    </p>

  </section>

  {/* Why It Matters */}

  <section className="mb-12">

    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      Why It Matters
    </h2>

    <div className="space-y-4 text-lg leading-relaxed text-slate-600">

      <p>
        The most common semiconductor material is silicon.
      </p>

      <p>
        It is used to manufacture chips found in smartphones,
        computers, servers, memory devices, and AI accelerators.
      </p>

      <p>
        Modern electronics rely on semiconductors because their
        conductivity can be precisely controlled.
      </p>

      <p>
        Without semiconductors, there would be no CPUs, GPUs,
        memory chips, or modern digital devices.
      </p>

    </div>

  </section>

  {/* From Sand to Chip */}

  <section>

    <h2 className="text-2xl font-bold text-slate-900 mb-6">
      From Sand to Chip
    </h2>

    <div className="bg-white border border-slate-200 rounded-3xl p-8">

      <div className="flex flex-col items-center text-center">

        <span className="text-xl font-semibold text-slate-900">
          Sand
        </span>

        <span className="my-3 text-slate-400">↓</span>

        <span className="text-xl font-semibold text-slate-900">
          Silicon
        </span>

        <span className="my-3 text-slate-400">↓</span>

        <span className="text-xl font-semibold text-slate-900">
          Wafer
        </span>

        <span className="my-3 text-slate-400">↓</span>

        <span className="text-xl font-semibold text-slate-900">
          Chip
        </span>

      </div>

    </div>

  </section>

</article>

      </div>

    </main>
  )
}