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

          <div className="space-y-10 text-lg leading-relaxed text-slate-600">

            {/* Intro */}

            <section>
              <p>
                A good switch needs two states: ON and OFF.
              </p>

              <p className="mt-4">
                If it is always ON, it is not much of a switch. If it is always OFF, it is not very useful either.
              </p>
            </section>

            {/* 0 and 1 */}

            <section>

              <p>
                Computers work the same way.
              </p>

              <p className="mt-4">
                Computers only understand two states:
              </p>

              <div className="mt-6 bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-10 text-center">

                <p className="text-2xl font-bold text-[#4338CA]">
                  1 = ON
                </p>

                <p className="text-2xl font-bold text-[#4338CA] mt-4">
                  0 = OFF
                </p>

              </div>

              <p className="mt-6">
                To create those 0s and 1s, computers need switches.
              </p>

              <p className="mt-4">
                Imagine putting billions of light switches inside a smartphone.
              </p>

              <p className="mt-4 font-medium text-slate-900">
                That would be impossible.
              </p>

              <p className="mt-4">
                So engineers created tiny electronic switches instead.
              </p>

            </section>

            {/* Divider */}

            <div className="border-t border-slate-200" />

            {/* Semiconductor */}

            <section>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What Makes Those Tiny Switches Possible?
              </h2>

              <p>
                The answer is semiconductors.
              </p>

              <div className="mt-6 bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8">

                <p className="text-2xl font-semibold text-center text-[#3730A3]">
                  A semiconductor is a material that allows us to control electricity.
                </p>

              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">

                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">

                  <p className="text-slate-500 font-medium">
                    Electricity Flows
                  </p>

                  <p className="text-3xl my-3">
                    ↓
                  </p>

                  <p className="text-2xl font-bold text-slate-900">
                    ON
                  </p>

                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">

                  <p className="text-slate-500 font-medium">
                    Electricity Stops
                  </p>

                  <p className="text-3xl my-3">
                    ↓
                  </p>

                  <p className="text-2xl font-bold text-slate-900">
                    OFF
                  </p>

                </div>

              </div>

              <p className="mt-6">
                That ability makes semiconductors the ideal material for electronic switches.
              </p>

            </section>

            {/* Divider */}

            <div className="border-t border-slate-200" />

            {/* Transistor */}

            <section>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                From Transistor to Chip
              </h2>

              <p>
                Using semiconductor materials, engineers can build tiny electronic switches called transistors.
              </p>

              <p className="mt-4">
                One transistor is simple. A modern smartphone chip contains billions of transistors working together.
              </p>

              <div className="my-10">

  <div className="my-12">

  <div className="flex items-center justify-center gap-8 flex-wrap">

    <div className="text-center">

  <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-10 py-4">
    <p className="text-xl font-bold text-[#4338CA]">
      ON
    </p>
  </div>

  <p className="text-lg font-medium text-slate-700 mt-3">
    One Transistor
  </p>

</div>

    <div className="text-center">

      <p className="text-2xl font-medium text-slate-500">
        × Billions
      </p>

    </div>

    <div className="text-center">

      <div className="bg-white border border-slate-200 rounded-xl px-8 py-6">

        <div className="grid grid-cols-4 gap-x-4 gap-y-2 text-sm font-medium text-slate-700">

          <span>ON</span>
          <span>OFF</span>
          <span>ON</span>
          <span>OFF</span>

          <span>OFF</span>
          <span>ON</span>
          <span>OFF</span>
          <span>ON</span>

          <span>ON</span>
          <span>ON</span>
          <span>OFF</span>
          <span>ON</span>

        </div>

      </div>

      <p className="text-lg font-medium text-slate-700 mt-3">
        Chip
      </p>

    </div>

  </div>

</div>
              </div>

              <p>
                A chip is not one switch.
              </p>

              <p className="mt-3 text-xl font-semibold text-slate-900">
                It is billions of tiny switches working together.
              </p>

            </section>

          </div>

        </article>

      </div>
    </main>
  )
}
