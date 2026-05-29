import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-4xl mx-auto px-6 py-10">

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
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

        <article className="mt-8">

          <p className="text-sm uppercase tracking-[0.15em] text-slate-400 mb-4">
            Semiconductor Fundamentals
          </p>

          {/* Navigation */}

          <div className="flex flex-wrap gap-2 mb-8">

            <span className="px-4 py-2 rounded-full bg-[#4338CA] text-white text-sm font-medium">
              Why Need?
            </span>

            <Link
              href="/semiconductor/what-is"
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#4338CA] hover:text-[#4338CA] transition-colors"
            >
              What Is?
            </Link>

            <Link
              href="/semiconductor/why-silicon"
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#4338CA] hover:text-[#4338CA] transition-colors"
            >
              Why Silicon?
            </Link>

            <Link
              href="/semiconductor/transistor"
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#4338CA] hover:text-[#4338CA] transition-colors"
            >
              Transistor
            </Link>

            <Link
              href="/semiconductor/wafer-vs-chip"
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#4338CA] hover:text-[#4338CA] transition-colors"
            >
              Wafer vs Chip
            </Link>

          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">
            Why Do We Need Semiconductors?
          </h1>

          {/* Content */}

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-600">

            <p>
              Computers only understand two numbers:
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center">

              <p className="text-6xl font-bold tracking-widest text-slate-900">
                0 1
              </p>

            </div>

            <p>
              You can think of them as:
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">

              <p className="text-lg font-medium text-slate-900">
                1 = ON
              </p>

              <p className="text-lg font-medium text-slate-900 mt-3">
                0 = OFF
              </p>

            </div>

            <p>
              If computers only understand ON and OFF,
              they need a way to create billions of ONs and OFFs every second.
            </p>

            <p>
              So what do computers really need?
            </p>

            <p className="text-slate-900 font-semibold">
              They need billions of tiny switches.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center">

              <p className="text-2xl font-medium text-slate-700">
                ON → OFF → ON → OFF → ON → OFF
              </p>

            </div>

            <p>
              Of course, we cannot put billions of physical switches inside a smartphone.
            </p>

            <p>
              So engineers created tiny electronic switches instead.
            </p>

            <p className="font-semibold text-slate-900">
              These switches are called transistors.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">

              <p>
                Electricity passes → 1
              </p>

              <p className="mt-3">
                Electricity stops → 0
              </p>

            </div>

            <p>
              Now imagine billions of them working together.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center">

              <p className="text-slate-700">
                Transistor
                <br />
                ↓
                <br />
                Switch
              </p>

              <p className="mt-6 text-slate-700">
                Billions of Switches
                <br />
                ↓
                <br />
                Chip
              </p>

              <p className="mt-6 text-slate-700">
                Billions of Chips
                <br />
                ↓
                <br />
                Modern Technology
              </p>

            </div>

            <p>
              This is where semiconductors come in.
            </p>

            <p>
              Semiconductors make it possible to build these tiny electronic switches.
            </p>

            <p>
              Without semiconductors, there would be no transistors.
            </p>

            <p>
              Without transistors, there would be no chips.
            </p>

            <p className="font-medium text-slate-900">
              Without chips, your smartphone would stop being smart.
            </p>

          </div>

          {/* Key Takeaway */}

          <div className="mt-12 bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8">

            <h2 className="text-lg font-bold text-[#3730A3] mb-4">
              Key Takeaway
            </h2>

            <p className="text-lg text-[#4338CA] leading-relaxed">
              Computers need billions of tiny ON/OFF switches to create 0s and 1s.
            </p>

            <p className="text-lg text-[#4338CA] leading-relaxed mt-3">
              Semiconductors make those switches possible.
            </p>

          </div>

        </article>

      </div>

    </main>
  )
}