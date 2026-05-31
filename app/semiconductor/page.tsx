"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Back button */}
        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            w-11 h-11 rounded-full
            bg-white border border-slate-200/60 text-slate-600
            hover:text-[#4338CA] hover:border-indigo-100
            hover:scale-105
            hover:shadow-[0_12px_24px_-8px_rgba(67,56,202,0.15)]
            transition-all duration-500 ease-out
            mb-7
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

        <article>
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Semiconductor Fundamentals
          </p>

          <div className="flex flex-wrap gap-2.5 mb-6">
            
{/* bookmark */}
            <Link
              href="/semiconductor"
              className="
                px-4
                py-2
                rounded-full
                bg-[#EEF2FF]
                text-[#4338CA]
                text-sm
                font-medium
                hover:scale-[1.02]
                hover:shadow-[0_10px_25px_-5px_rgba(67,56,202,0.1)]
                transition-all
                duration-500
                ease-out
              "
            >
              Learning Map
            </Link>

<Link
              href="/semiconductor/why"
              className="
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-slate-200
                text-slate-500
                text-sm
                font-medium
                hover:border-slate-300/60
                hover:scale-[1.02]
                hover:shadow-[0_12px_30px_-10px_rgba(15,23,42,0.06)]
                transition-all
                duration-500
                ease-out
              "
            >
              Why Need Semiconductor?
            </Link>
            
            <Link
              href="/semiconductor/chip"
              className="
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-slate-200
                text-slate-500
                text-sm
                font-medium
                hover:border-slate-300/60
                hover:scale-[1.02]
                hover:shadow-[0_12px_30px_-10px_rgba(15,23,42,0.06)]
                transition-all
                duration-500
                ease-out
              "
            >
              What&apos;s Inside a Chip?
            </Link>

          </div>

          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            Learning Map
          </h1>

          <div className="space-y-10 text-base leading-[1.85] text-slate-500">

            
            {/* Intro */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

  {/* Memory IC */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-4">
      Memory IC
    </h2>

    <p className="text-slate-500 leading-[1.8] mb-5">
      Stores data for processing and long-term retention.
    </p>

    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        SRAM
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        DRAM
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        Flash
      </span>
    </div>
  </div>

  {/* Logic IC */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-4">
      Logic IC
    </h2>

    <p className="text-slate-500 leading-[1.8] mb-5">
      Processes information and performs computations.
    </p>

    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        CPU
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        MCU
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        DSP
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        ASIC
      </span>
    </div>
  </div>

  {/* Analog IC */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-4">
      Analog IC
    </h2>

    <p className="text-slate-500 leading-[1.8] mb-5">
      Works with continuous real-world signals such as power, sound, and voltage.
    </p>

    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        PMIC
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        Amplifier
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        ADC
      </span>
    </div>
  </div>

  {/* Micro Component IC */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-4">
      Micro Component IC
    </h2>

    <p className="text-slate-500 leading-[1.8] mb-5">
      Supports sensing, communication, and device connectivity.
    </p>

    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        Sensor
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        RF
      </span>

      <span className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">
        Interface
      </span>
    </div>
  </div>

</div>
            </section>

          </div>
        </article>

      </div>
    </main>
  )
}
