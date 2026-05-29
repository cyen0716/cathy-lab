import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">

      <div className="max-w-4xl mx-auto px-6 py-10">

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

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            What Is a Semiconductor?
          </h1>

          <div className="mt-10 space-y-8 text-lg md:text-xl leading-relaxed text-slate-600">

            <div>

              <p>
                A good switch needs two states:
              </p>

              <div className="mt-6 space-y-3 text-slate-900 font-medium">

                <p>ON</p>

                <p>OFF</p>

              </div>

              <p className="mt-6">
                If it is always ON, it is not much of a switch.
              </p>

              <p>
                If it is always OFF, it is not very useful either.
              </p>

            </div>

            <div>

              <p>
                Computers work the same way.
              </p>

              <p>
                Computers only understand two states:
              </p>

              <div className="mt-6 bg-white border border-slate-200 rounded-3xl p-8 text-center">

                <p className="text-4xl font-bold text-slate-900">
                  1 = ON
                </p>

                <p className="text-4xl font-bold text-slate-900 mt-4">
                  0 = OFF
                </p>

              </div>

              <p className="mt-6">
                To create those 0s and 1s, computers need switches.
              </p>

              <p>
                Modern chips contain billions of them.
              </p>

              <p>
                Imagine putting billions of light switches inside a smartphone.
              </p>

              <p className="font-medium text-slate-900">
                That would be impossible.
              </p>

              <p>
                So engineers created tiny electronic switches instead.
              </p>

            </div>

            <div>

              <p>
                So how do engineers build these tiny electronic switches?
              </p>

              <p className="font-medium text-slate-900">
                The answer is semiconductors.
              </p>

              <p>
                A semiconductor is a material that allows us to control electricity.
              </p>

              <div className="mt-6 bg-white border border-slate-200 rounded-3xl p-8">

                <p>
                  Electricity flows → ON
                </p>

                <p className="mt-4">
                  Electricity stops → OFF
                </p>

              </div>

              <p className="mt-6">
                That ability makes semiconductors the ideal material for electronic switches.
              </p>

            </div>

            <div>

              <p>
                Using semiconductor materials, engineers can build transistors.
              </p>

              <p>
                A transistor is the tiny electronic switch used inside modern chips.
              </p>

              <p>
                One transistor is simple.
              </p>

              <p>
                A modern smartphone chip contains billions of transistors working together.
              </p>

              <p className="font-medium text-slate-900">
                Together, they create the 0s and 1s used by computers.
              </p>

            </div>

            {/* Flow Chart */}

            <div className="pt-8">

              <div className="flex flex-wrap items-center justify-center gap-3">

                <div className="px-5 py-3 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE]">
                  <p className="font-medium text-[#4338CA]">
                    Semiconductor
                  </p>
                </div>

                <span className="text-slate-400 text-xl">→</span>

                <div className="px-5 py-3 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE]">
                  <p className="font-medium text-[#4338CA]">
                    Transistor
                  </p>
                </div>

                <span className="text-slate-400 text-xl">→</span>

                <div className="px-5 py-3 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE]">
                  <p className="font-medium text-[#4338CA]">
                    Chip
                  </p>
                </div>

                <span className="text-slate-400 text-xl">→</span>

                <div className="px-5 py-3 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE]">
                  <p className="font-medium text-[#4338CA]">
                    Smartphone
                  </p>
                </div>

              </div>

            </div>

          </div>

        </article>

      </div>

    </main>
  )
}