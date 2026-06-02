import Link from "next/link"
import { ArrowDown, Cpu, Layers, HardDrive } from "lucide-react"
import { SemiconductorNav } from "@/components/semiconductor-nav"

export default function WhySramPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        <SemiconductorNav />

        <article>

          {/* 開頭 Hook：用反問句提高吸引力 */}
<h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
  Why Don&apos;t We Use SRAM for Everything?
</h1>

<div className="space-y-4 text-base leading-[1.85] text-slate-600 mb-8">
  <p>
    If SRAM is faster than DRAM, why doesn&apos;t your laptop have 16 GB of SRAM instead of 16 GB of DRAM?
    The answer has nothing to do with speed.
    It comes down to silicon area, manufacturing yield, and cost.
  </p>

{/* 💡 隱形流 Note：無方塊、無背景、無斜體，字體放大更清晰 */}
  <div className="pt-2 select-none text-sm tracking-wide">
    <span className="text-slate-500 font-semibold mr-2">Note:</span>
    <span className="text-slate-500">
      Density refers to how much data can fit into the same silicon area.
    </span>
  </div>
</div>


{/* 🍎 Apple 官網規格流：完美對齊型對比表（已加入表頭） */}
<div className="w-full mb-10 select-none">
  <div className="bg-white border border-slate-200/60 shadow-[0_2px_8px_rgba(15,23,42,0.01)] rounded-2xl p-5 md:p-6 w-full">
    
    {/* 💡 補上的大螢幕表頭：完美對齊下方內文的 160px 1fr 1fr */}
    <div className="hidden md:grid md:grid-cols-[160px_1fr_1fr] md:gap-8 border-b border-slate-100 pb-4 mb-2 text-base font-bold text-slate-950">
      <div className="text-slate-500 font-medium">Features</div>
      <div className="font-sans tracking-wide">SRAM</div>
      <div className="font-sans tracking-wide">DRAM</div>
    </div>

    {/* 表格內容矩陣 */}
    <div className="divide-y divide-slate-100/80 text-base">
      
      {/* 1. Speed */}
      <div className="py-3 flex flex-col gap-2 md:grid md:grid-cols-[160px_1fr_1fr] md:gap-8 md:items-center">
        <span className="font-semibold text-slate-900 md:text-slate-500 md:font-medium text-sm md:text-base uppercase tracking-wider md:normal-case md:tracking-normal">
          Speed
        </span>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[SRAM]</span>
          <span className="text-slate-600 font-medium">Extremely fast.</span>
        </div>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[DRAM]</span>
          <span className="text-slate-600 font-medium">Slower, but fast enough for most workloads.</span>
        </div>
      </div>

      {/* 2. Keeps data */}
      <div className="py-3 flex flex-col gap-2 md:grid md:grid-cols-[160px_1fr_1fr] md:gap-8 md:items-center">
        <span className="font-semibold text-slate-900 md:text-slate-500 md:font-medium text-sm md:text-base uppercase tracking-wider md:normal-case md:tracking-normal">
          Keeps data
        </span>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[SRAM]</span>
          <span className="text-slate-600 font-medium">As long as power is on. No refresh needed.</span>
        </div>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[DRAM]</span>
          <span className="text-slate-600 font-medium">Forgets instantly. Needs constant refreshing.</span>
        </div>
      </div>

      {/* 3. Cost */}
      <div className="py-3 flex flex-col gap-2 md:grid md:grid-cols-[160px_1fr_1fr] md:gap-8 md:items-center">
        <span className="font-semibold text-slate-900 md:text-slate-500 md:font-medium text-sm md:text-base uppercase tracking-wider md:normal-case md:tracking-normal">
          Cost
        </span>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[SRAM]</span>
          <span className="text-slate-600 font-medium">Expensive per bit.</span>
        </div>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[DRAM]</span>
          <span className="text-slate-600 font-medium">Cheap per bit.</span>
        </div>
      </div>

      {/* 4. Capacity */}
      <div className="py-3 flex flex-col gap-2 md:grid md:grid-cols-[160px_1fr_1fr] md:gap-8 md:items-center">
        <span className="font-semibold text-slate-900 md:text-slate-500 md:font-medium text-sm md:text-base uppercase tracking-wider md:normal-case md:tracking-normal">
          Capacity
        </span>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[SRAM]</span>
          <span className="text-slate-600 font-medium">Small. Kilobytes to a few megabytes.</span>
        </div>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[DRAM]</span>
          <span className="text-slate-600 font-medium">Large. Gigabytes to terabytes.</span>
        </div>
      </div>

      {/* 5. Where it lives */}
      <div className="py-4 flex flex-col gap-2 md:grid md:grid-cols-[160px_1fr_1fr] md:gap-8 md:items-center">
        <span className="font-semibold text-slate-900 md:text-slate-500 md:font-medium text-sm md:text-base uppercase tracking-wider md:normal-case md:tracking-normal">
          Where it lives
        </span>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[SRAM]</span>
          <span className="text-slate-600 font-medium">CPU cache (L1, L2, L3)</span>
        </div>
        <div className="md:whitespace-nowrap">
          <span className="inline-block md:hidden text-xs font-bold text-slate-500 mr-1.5">[DRAM]</span>
          <span className="text-slate-600 font-medium">Next to the CPU. Main memory.</span>
        </div>
      </div>

    </div>
  </div>
</div>



<div className="space-y-10 text-base leading-[1.85] text-slate-600">


{/* Why SRAM and DRAM are so different */}
<section className="select-none">
  <div className="border-t border-slate-200 mb-8" />
  
  <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-wide">
    Why SRAM and DRAM are so different
  </h2>

  {/* 前言比喻 */}
  <div className="text-base text-slate-600 leading-relaxed space-y-4 mb-8">
    <p>
      Think of SRAM as a sticky note on your desk—always right in front of you for instant access, but space is limited. DRAM is like a filing cabinet—it stores vastly more, but retrieving it takes a few more steps.
    </p>
    <p>
      This fundamental difference comes down to how each memory cell is engineered under the microscope.
    </p>
  </div>

{/* 🎨 左右對稱極簡對比圖：圖卡幾何 1:1 黃金比例對稱（修正扁塌） */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  
  {/* 💾 SRAM Card */}
  <div className="bg-slate-50/60 border border-slate-200/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[170px]">
    <div className="flex flex-col items-center mb-4">
      {/* 💡 統一使用固定寬高的 3x2 網格，確保方塊是絕對完美的 1:1 正方形 */}
      <div className="grid grid-cols-3 gap-2.5 mb-2">
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
      </div>
      {/* 微型絲印標籤 */}
      <span className="text-[10px] font-medium text-slate-500/80 tracking-wider">
        6 Transistors
      </span>
    </div>
    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-auto">
      SRAM
    </span>
  </div>

  {/* ⚡ DRAM Card */}
  <div className="bg-slate-50/60 border border-slate-200/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[170px]">
    {/* 💡 移除負 margin，利用 items-start 配合標準間距，讓線條自然置中 */}
    <div className="flex items-start gap-4 justify-center mb-4">
      
      {/* 1個開關方塊（寬高與 SRAM 完全一致，也是 h-10 w-10） */}
      <div className="flex flex-col items-center gap-2">
        <div className="border border-slate-900/80 bg-white rounded-md h-10 w-10" />
        <span className="text-[10px] font-medium text-slate-500/80 tracking-wider">Transistor</span>
      </div>
      
      {/* 連接線：高度剛好在 40px 的中心點（h-10 的一半是 20px，扣掉自身半高，剛好 mt-[19px]） */}
      <div className="h-[1px] bg-slate-300 w-6 mt-[19px] shrink-0" />
      
      {/* 1個圓形水桶（同樣設定 h-10 w-10，視覺重量完全對等） */}
      <div className="flex flex-col items-center gap-2">
        <div className="border border-dashed border-slate-500 bg-white rounded-full h-10 w-10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-slate-200" />
          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full relative z-10" />
        </div>
        <span className="text-[10px] font-medium text-slate-500/80 tracking-wider">Capacitor</span>
      </div>

    </div>
    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-auto">
      DRAM
    </span>
  </div>

</div>

  {/* 📖 核心技術描述：移動到圖卡下方，形成一般內文流 */}
  <div className="text-base text-slate-600 leading-relaxed space-y-5 my-8">
    <p>
      <strong className="text-slate-900 font-semibold">SRAM</strong> uses a complex circuit of six transistors to lock each bit of data in a continuous, stable loop. Because these electronic switches hold their state indefinitely as long as power is supplied, SRAM requires no refresh cycles and responds instantly. However, packing six transistors into a single memory cell demands a massive amount of physical silicon area.
    </p>
    
    <p>
      <strong className="text-slate-900 font-semibold">DRAM</strong> takes the opposite approach by simplifying the cell down to just one transistor and one capacitor. The transistor acts as the gateway, while the capacitor works like a tiny electrical bucket to store the data as charge. This micro-size allows developers to cram billions of cells onto a single chip. The catch? Those tiny buckets slowly leak their charge over time, meaning the data must be continuously refreshed thousands of times per second to prevent data loss.
    </p>
  </div>

  {/* 結論總結 */}
    <p className="text-base text-slate-600 font-medium">
      In short, SRAM sacrifices density for speed, while DRAM sacrifices speed for density.
    </p>
</section>



{/* Why SRAM gets expensive so quickly */}
<section>
  <div className="border-t border-slate-200 mb-8" />
  <h2 className="text-xl font-bold text-slate-900 mb-3">
    Why SRAM gets expensive so quickly
  </h2>

  <div className="space-y-3.5">
    <p>
      The downside of SRAM is cost. Because each SRAM cell is much larger,
      storing the same amount of data requires a much larger chip.
    </p>

    <p>
      Larger chips are expensive for two reasons. Fewer chips fit on a
      silicon wafer, which raises the manufacturing cost of each chip.
      At the same time, larger chips are more likely to contain defects.
      Even a tiny defect can ruin an entire chip, reducing
      yield 
      and driving costs even higher.
    </p>
  </div>

  {/* Wafer / Chip Size Comparison */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-2xl mx-auto">
    <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
      <p className="text-[13px] uppercase tracking-wider text-slate-500 font-semibold mb-3">
        Smaller chips
      </p>

      <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-300 mx-auto flex flex-wrap gap-1 p-3 items-center justify-center bg-slate-50/50">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-indigo-600 rounded-sm" />
        ))}
      </div>

      <div className="mt-4 text-sm font-medium text-slate-600">
        More chips per wafer
      </div>

      <p className="text-xs text-slate-500 mt-0.5">
        Higher yield, lower cost
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
      <p className="text-[13px] uppercase tracking-wider text-slate-500 font-semibold mb-3">
        Larger chips
      </p>

      <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-300 mx-auto flex flex-wrap gap-2 p-4 items-center justify-center bg-slate-50/50">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-9 h-9 bg-indigo-900 rounded-sm" />
        ))}
      </div>

      <div className="mt-4 text-sm font-medium text-slate-600">
        Fewer chips per wafer
      </div>

      <p className="text-xs text-slate-500 mt-0.5">
        Lower yield, higher cost
      </p>
    </div>
  </div>

  <p>
    This is why SRAM works well for small CPU caches, but becomes impractical
    for large-capacity memory.
  </p>
</section>


{/* Section 5 */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">Why Modern Systems Use Both</h2>
              <div className="space-y-3.5">
                <p>
                  Modern computers do not choose between SRAM and DRAM. They use both.
                </p>
              </div>

              
              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5 space-y-1">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  • <strong>SRAM</strong> provides speed.
                </p>
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  • <strong>DRAM</strong> provides capacity.
                </p>
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  • <strong>Storage</strong> provides long-term retention.
                </p>
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-normal text-slate-500 mt-1">
                  Each layer solves a different problem.
                </p>
              </div>
            </section>


{/* 結論：保留有力的結尾 */}
            <section>
              <div className="space-y-3.5">
                <p>
                  SRAM is fast but expensive and sparse. DRAM is slower but cheap and dense. 
                  The goal isn&apos;t to build the fastest memory — it&apos;s to build the most useful memory for the price.
                </p>
                <p className="font-medium text-slate-600">
                  That&apos;s why your laptop has megabytes of SRAM cache and gigabytes of DRAM — not the other way around.
                </p>
              </div>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}            