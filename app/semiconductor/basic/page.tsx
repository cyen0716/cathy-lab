import Link from "next/link"

export default function BasicsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-4xl mx-auto px-6 py-10">

        <Link
          href="/semiconductor"
          className="text-sm text-slate-400 hover:text-slate-700 transition-colors"
        >
          ← Back to Semiconductor Notes
        </Link>

        <article className="mt-8">

          <p className="text-sm uppercase tracking-[0.15em] text-slate-400 mb-4">
            Semiconductor Basics
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            What is a Semiconductor?
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600">

            <p>
              A semiconductor is a material whose electrical conductivity
              is between a conductor and an insulator.
            </p>

            <p>
              The most common semiconductor material is silicon.
              It is used to manufacture chips found in smartphones,
              computers, servers, and AI accelerators.
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

        </article>

      </div>

    </main>
  )
}