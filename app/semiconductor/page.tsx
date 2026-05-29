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

          {/* Big Picture */}

          <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8 mb-12">

            <h2 className="text-lg font-bold text-[#3730A3] mb-6">
              The Big Picture
            </h2>

            <div className="space-y-3 text-[#4338CA] text-lg">

              <p>Computer needs 0 and 1</p>

              <p>↓</p>

              <p>0 and 1 need switches</p>

              <p>↓</p>

              <p>Switch = Transistor</p>

              <p>↓</p>

              <p>Transistors are made from semiconductors</p>

              <p>↓</p>

              <p>Billions of transistors = Chip</p>

              <p>↓</p>

              <p>Chips power smartphones</p>

            </div>

          </div>

          {/* Intro */}

          <p className="text-xl text-slate-700 mb-10">
            Let's break it down.
          </p>

          {/* Step 1 */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 1: Computers Need 0 and 1
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Computers only understand two numbers:
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center">

              <p className="text-6xl font-bold text-slate-900 tracking-widest">
                0 1
              </p>

            </div>

          </section>

          {/* Step 2 */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 2: 0 and 1 Need Switches
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              You can think of them as:
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 mt-6">

              <p className="font-medium text-slate-900">
                1 = ON
              </p>

              <p className="font-medium text-slate-900 mt-3">
                0 = OFF
              </p>

            </div>

            <p className="text-lg text-slate-600 leading-relaxed mt-6">
              If computers only understand ON and OFF,
              they need a way to create billions of ONs and OFFs every second.
            </p>

          </section>

          {/* Step 3 */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 3: Switch = Transistor
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Engineers created tiny electronic switches.
            </p>

            <p className="text-lg text-slate-900 font-medium mt-4">
              These switches are called transistors.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 mt-6">

              <p>
                Electricity passes → 1
              </p>

              <p className="mt-3">
                Electricity stops → 0
              </p>

            </div>

          </section>

          {/* Step 4 */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 4: Semiconductors Make Transistors Possible
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Transistors are built using semiconductor materials.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              Without semiconductors, we would not be able to create
              these tiny electronic switches.
            </p>

          </section>

          {/* Step 5 */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 5: Billions of Transistors Become a Chip
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              A transistor is just one switch.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              That doesn't sound very impressive.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              But a modern smartphone chip contains billions of transistors.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 mt-6 text-center">

              <p>
                1 Transistor
                <br />
                ↓
                <br />
                1 Switch
              </p>

              <p className="mt-6">
                Billions of Transistors
                <br />
                ↓
                <br />
                1 Chip
              </p>

            </div>

          </section>

          {/* Step 6 */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Step 6: Chips Power Smartphones
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Modern smartphones contain multiple chips.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              Those chips process information, store data,
              connect to the internet, and run apps.
            </p>

            <p className="text-lg text-slate-900 font-medium mt-6">
              Without chips, your smartphone would stop being smart.
            </p>

          </section>

          {/* Key Takeaway */}

          <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8">

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