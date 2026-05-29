import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BasicsPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Back */}

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
            Semiconductor Fundamentals
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
            Why Do We Need Semiconductors?
          </h1>

          <div className="space-y-5 text-lg leading-relaxed text-slate-600">

            <p>
              Imagine your smartphone suddenly loses all its chips.
            </p>

            <p>No processor.</p>

            <p>No memory.</p>

            <p>No Wi-Fi.</p>

            <p>No camera sensor.</p>

            <p>No storage.</p>

            <p className="font-medium text-slate-900 pt-2">
              It would become a piece of metal and glass.
            </p>

          </div>

          <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-8">

            <p className="text-lg leading-relaxed text-slate-700">
              Everything that makes a smartphone{" "}
              <span className="font-semibold">
                "smart"
              </span>{" "}
              depends on chips.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mt-4">
              And every chip is built using semiconductor technology.
            </p>

          </div>

          <div className="mt-10 bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8">

            <h2 className="text-xl font-bold text-[#3730A3] mb-3">
              📌 Key Takeaway
            </h2>

            <p className="text-lg leading-relaxed text-[#4338CA]">
              Semiconductors make modern technology possible.
            </p>

          </div>

        </article>

      </div>

    </main>
  )
}
