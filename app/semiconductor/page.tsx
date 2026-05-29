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
                A good switch needs two states:
              </p>

              <p className="mt-4">
                ON
              </p>

              <p>
                OFF
              </p>

              <p className="mt-4">
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

              <p className="mt-4">
                1 = ON
              </p>

              <p>
                0 = OFF
              </p>

              <p className="mt-4">
                To create those 0s and 1s, computers need switches.
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

              <p className="mt-4">
                Electricity flows → ON
              </p>

              <p>
                Electricity stops → OFF
              </p>

            </div>

            <div>

              <p>
                Using semiconductor materials, engineers can build tiny electronic switches called transistors.
              </p>

              <p>
                One transistor is simple.
              </p>

              <p>
                A modern smartphone chip contains billions of transistors working together.
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

              <p>
                It is billions of switches working together.
              </p>

            </div>

          </div>

        </article>

      </div>

    </main>
  )
}
