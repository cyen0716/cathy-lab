"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { SemiconductorNav } from "@/components/semiconductor-nav"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* bookmark */}

        <SemiconductorNav />
        <article>
          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            Why Do We Need Semiconductors?
          </h1>

          <div className="space-y-10 text-base leading-[1.85] text-slate-500">

            {/* Intro */}
            <section>
<section>
  <div className="space-y-5 text-base leading-[1.85] text-slate-500">

    <p>
      Computers only understand two states:
    </p>

    <div className="grid grid-cols-2 gap-3">
    <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-2xl p-5">
      <p className="text-xs uppercase tracking-widest text-indigo-400 font-medium mb-3">
        Gate on
      </p>
      <p className="text-sm text-indigo-800 leading-relaxed">
        Voltage applied.<br />Current flows through.
      </p>
      <p className="text-xl font-bold text-[#4338CA] mt-3">1</p>
    </div>
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-3">
        Gate off
      </p>
      <p className="text-sm text-slate-500 leading-relaxed">
        Voltage removed.<br />Current stops.
      </p>
      <p className="text-xl font-bold text-slate-900 mt-3">0</p>
    </div>
  </div>

    <p>
      To create those two states, computers need switches that can turn
      electricity on and off.
    </p>

    <p>
      At first, the solution seems obvious.
      If electricity needs to move through a chip, why not build the chip
      from copper? Copper conducts extremely well. It is already used in
      wires and cables everywhere.
    </p>

    <p>
      But that misses the point. A chip does not just need electricity to
      flow. It needs to control when it flows.
      Copper cannot do that. Copper is always on.
    </p>

    <div className="border-l-[3px] border-[#4338CA] pl-4">
  <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
    Computers do not need electricity to flow.
    They need to control when it flows.
  </p>
</div>


{/* Divider */}
<div className="border-t border-slate-200" />

{/* Why Silicon */}
<section className="space-y-4">
  <h2 className="text-xl font-bold text-slate-900 mb-3">
    Why Silicon?
  </h2>
  <p>
    Silicon is different. Under normal conditions, it resists current.
    Apply a small voltage, and it starts to conduct. Remove that voltage,
    and it stops.
  </p>
  <p>
    This is what{" "}
    <span className="font-medium text-slate-900">semiconductor</span>{" "}
    means: a material that can be controlled. Not always on. Not always
    off. On demand.
  </p>
</section>

{/* Divider */}
<div className="border-t border-slate-200" />



{/* From Transistor to Chip */}
<section className="space-y-4">

<section className="space-y-4">
  <h2 className="text-xl font-bold text-slate-900 mb-3">
    From Transistor to Chip
  </h2>

  <p>
    A single transistor is simple. It can only represent two states:
    ON or OFF.
  </p>

  <p>
    The real breakthrough comes from combining billions of transistors
    together. When transistors are connected in specific patterns, they can perform
    logical operations, store data, and process information. Those
    patterns become the building blocks of a modern chip.
  </p>

  
{/* Transistor × Billions = Chip */}
<div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap my-10">
  
  {/* 左側：單個電晶體 */}
  <div className="text-center">
    <div className="bg-white border border-slate-200 rounded-xl px-10 py-5 shadow-sm">
      <p className="text-xl font-bold text-[#4338CA] tracking-wide">ON</p>
      <div className="h-[1px] bg-slate-100 my-0.5 w-8 mx-auto" />
      <p className="text-xs font-medium text-slate-400">or OFF</p>
    </div>
    <p className="text-sm font-semibold text-slate-500 mt-3">One Transistor</p>
  </div>

  {/* 乘號 */}
  <p className="text-lg uppercase tracking-widest font-bold text-slate-500">
    × Billions
  </p>
  
  {/* 等號 */}
  <p className="text-2xl font-light text-slate-500">=</p>

  {/* 右側：由無數獨立開關拼出的晶片 */}
  <div className="text-center">
    <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-3.5 shadow-sm max-w-[280px]">
      {/* 獨立切開的電晶體網格矩陣 */}
      <div className="grid grid-cols-4 gap-1.5 text-[11px] font-bold">
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
        <span className="bg-white border border-slate-100 text-slate-300 px-2.5 py-2 rounded-md">OFF</span>
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
        <span className="bg-white border border-slate-100 text-slate-300 px-2.5 py-2 rounded-md">OFF</span>
        
        <span className="bg-white border border-slate-100 text-slate-300 px-2.5 py-2 rounded-md">OFF</span>
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
        <span className="bg-white border border-slate-100 text-slate-300 px-2.5 py-2 rounded-md">OFF</span>
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
        
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
        <span className="bg-white border border-slate-100 text-slate-300 px-2.5 py-2 rounded-md">OFF</span>
        <span className="bg-white border border-indigo-100 text-[#4338CA] px-2.5 py-2 rounded-md shadow-sm">ON</span>
      </div>
    </div>
    <p className="text-sm font-semibold text-slate-500 mt-3">Chip Matrix</p>
  </div>

</div>


<p className="text-base leading-[1.85] text-slate-500">
  It is a massive network of billions of transistors working together,
  constantly switching between ON and OFF states.
  Every calculation, image, video, app, and AI model ultimately comes
  from those switching patterns.
</p>

</section>
</section>


  </div>
</section>
            </section>

          </div>
        </article>

      </div>
    </main>
  )
}
