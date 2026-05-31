"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { SemiconductorNav } from "@/components/semiconductor-nav"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">

        

        <article>
          

          <div className="flex flex-wrap gap-2.5 mb-5">
            
{/* bookmark */}
          <SemiconductorNav />

          </div>

          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
            Learning Map
          </h1>

          <div className="space-y-10 text-base leading-[1.85] text-slate-500">

            
            {/* Intro */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

  {/* Memory */}
  <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-lg font-bold text-slate-900 mb-2">
      Memory IC
    </h2>

    <p className="text-slate-500 text-sm leading-[1.7] mb-3">
      Stores data for processing and long-term retention.
    </p>

    <ul className="space-y-0 text-slate-500">
      <li>• SRAM — 靜態隨機存取記憶體</li>
      <li>• DRAM — 動態隨機存取記憶體</li>
      <li>• Flash — 快閃記憶體</li>
      <li>• ROM — 唯獨記憶體</li>
    </ul>
  </div>

  {/* Logic */}
  <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-lg font-bold text-slate-900 mb-2">
      Logic IC
    </h2>

    <p className="text-slate-500 text-sm leading-[1.7] mb-3">
      Processes information and performs computations.
    </p>

    <ul className="space-y-0 text-slate-500">
      <li>• CPU — 中央處理器</li>
      <li>• MCU — 微控制器</li>
      <li>• DSP — 數位訊號處理器</li>
      <li>• ASIC — 特殊應用積體電路</li>
    </ul>
  </div>

  {/* Analog */}
  <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-lg font-bold text-slate-900 mb-2">
      Analog IC
    </h2>

    <p className="text-slate-500 text-sm leading-[1.7] mb-3">
      Handles continuous real-world signals and power.
    </p>

    <ul className="space-y-0 text-slate-500">
      <li>• PMIC — 電源管理 IC</li>
      <li>• Amplifier — 放大器</li>
      <li>• ADC — 類比數位轉換器</li>
    </ul>
  </div>

  {/* Interface & RF */}
  <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
    <h2 className="text-lg font-bold text-slate-900 mb-2">
      Interface & RF
    </h2>

    <p className="text-slate-500 text-sm leading-[1.7] mb-3">
      Connects devices and enables communication.
    </p>

    <ul className="space-y-0 text-slate-500">
      <li>• USB — 通用序列匯流排</li>
      <li>• RF — 射頻</li>
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
