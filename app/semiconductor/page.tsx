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

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
            Why Do We Need Semiconductors?
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-slate-600">

            <div>
              <p>
                A good switch needs two states: ON and OFF.
              </p>

              <p className="mt-4">
                If it is always ON, it is not much of a switch. If it is always OFF, it is not very useful either.
              </p>
            </div>

            <div>
              <p>
                Computers work the same way.
              </p>

              <p className="mt-4">
                Computers only understand two states: 1 = ON and 0 = OFF. To create those 0s and 1s, computers need switches.
              </p>

              <p className="mt-4">
                Imagine putting billions of light switches inside a smartphone. That would be impossible.
              </p>

              <p className="mt-4">
                So engineers created tiny electronic switches instead.
              </p>
            </div>

            <div>
              <p>
                So how do engineers build these tiny electronic switches?
              </p>

              <p className="mt-4 font-medium text-slate-900">
                The answer is semiconductors.
              </p>

              <p className="mt-4">
                A semiconductor is a material that allows us to control electricity.
              </p>

              <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
                <p>
                  When electricity flows, the switch is ON.
                </p>

                <p className="mt-2">
                  When electricity stops, the switch is OFF.
                </p>
              </div>

              <p className="mt-4">
                That ability makes semiconductors the ideal material for electronic switches.
              </p>
            </div>

            <div>
              <p>
                Using semiconductor materials, engineers can build tiny electronic switches called transistors.
              </p>

              <p className="mt-4">
                One transistor is simple. A modern smartphone chip contains billions of transistors working together.
              </p>
            </div>

            <div className="my-12">
              <img
                src="/transistor-chip.png"
                alt="Relationship between transistor and chip"
                className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-200"
              />
            </div>

            <div>
              <p>
                A chip is not one switch.
              </p>

              <p className="mt-2">
                It is billions of tiny switches working together.
              </p>
            </div>

          </div>

        </article>

      </div>
    </main>
  )
}