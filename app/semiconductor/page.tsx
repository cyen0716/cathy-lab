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

  {/* Memory */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-2">
      Memory IC
    </h2>

    <p className="text-slate-500 text-base leading-[1.7] mb-5">
      Stores data for processing and long-term retention.
    </p>

    <ul className="space-y-1 text-slate-500">
      <li>• SRAM — 靜態隨機存取記憶體</li>
      <li>• DRAM — 動態隨機存取記憶體</li>
      <li>• Flash — 快閃記憶體</li>
      <li>• ROM — 唯獨記憶體</li>
    </ul>
  </div>

  {/* Logic */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-2">
      Logic IC
    </h2>

    <p className="text-slate-500 text-sm leading-[1.7] mb-5">
      Processes information and performs computations.
    </p>

    <ul className="space-y-1 text-slate-500">
      <li>• CPU — 中央處理器</li>
      <li>• MCU — 微控制器</li>
      <li>• DSP — 數位訊號處理器</li>
      <li>• ASIC — 特定用途晶片</li>
    </ul>
  </div>

  {/* Analog */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-2">
      Analog IC
    </h2>

    <p className="text-slate-500 text-base leading-[1.7] mb-5">
      Handles continuous real-world signals and power.
    </p>

    <ul className="space-y-1 text-slate-500">
      <li>• PMIC — 電源管理晶片</li>
      <li>• Amplifier — 放大器</li>
      <li>• ADC — 類比數位轉換器</li>
    </ul>
  </div>

  {/* Interface & RF */}
  <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-xl font-bold text-slate-900 mb-2">
      Interface & RF
    </h2>

    <p className="text-slate-500 text-base leading-[1.7] mb-5">
      Connects devices and enables communication.
    </p>

    <ul className="space-y-1 text-slate-500">
      <li>• USB — 通用序列匯流排</li>
      <li>• RF — 射頻通訊</li>
      <li>• Sensor — 感測器</li>
    </ul>
  </div>

</div>
            </section>

          </div>
        </article>

      </div>
    </main>
  )
}
