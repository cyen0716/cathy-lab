import Link from "next/link"
import { ArrowDown, Cpu, Layers, HardDrive } from "lucide-react"
import { SemiconductorNav } from "@/components/semiconductor-nav"

export default function WhySramPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        <SemiconductorNav />



        <article>

          {/* Header */}
          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            Why Don&apos;t We Use SRAM for Everything?
          </h1>



          {/* Intro block */}
          <div className="space-y-3.5 text-base leading-[1.85] text-slate-500 mb-8">
          
            <p>
              Modern computers use different types of memory. 
              Two of the most common are SRAM and DRAM.
            </p>
          </div>



{/* 🍎 完美主義 RWD 進化版：改用 lg: 讓平板也絕對清爽 */}
<div className="w-full mb-10 select-none">
  <div className="bg-white border border-slate-200/60 shadow-[0_2px_8px_rgba(15,23,42,0.01)] rounded-2xl p-6 lg:p-8 w-full">
    
    {/* 💡 md: 改為 lg: */}
    <div className="hidden lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 border-b border-slate-100 pb-4 mb-2 text-base font-bold text-slate-950">
      <div className="text-slate-400 font-medium">Features</div>
      <div className="font-sans tracking-wide">SRAM</div>
      <div className="font-sans tracking-wide">DRAM</div>
    </div>

    <div className="divide-y divide-slate-100/80 text-base">
      
      {/* 1. Speed */}
      {/* 💡 md: 改為 lg: */}
      <div className="py-4 flex flex-col gap-2 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-center">
        <span className="font-semibold text-slate-900 lg:text-slate-400 lg:font-medium text-sm lg:text-base uppercase tracking-wider lg:normal-case lg:tracking-normal">
          Speed
        </span>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[SRAM]</span>
          <span className="text-slate-800 font-medium">Extremely fast.</span>
        </div>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[DRAM]</span>
          <span className="text-slate-800 font-medium">Slower, but fast enough for most workloads.</span>
        </div>
      </div>

      {/* 2. Keeps data */}
      {/* 💡 md: 改為 lg: */}
      <div className="py-4 flex flex-col gap-2 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-center">
        <span className="font-semibold text-slate-900 lg:text-slate-400 lg:font-medium text-sm lg:text-base uppercase tracking-wider lg:normal-case lg:tracking-normal">
          Keeps data
        </span>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[SRAM]</span>
          <span className="text-slate-800 font-medium">As long as power is on. No refresh needed.</span>
        </div>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[DRAM]</span>
          <span className="text-slate-800 font-medium">Forgets instantly. Needs constant refreshing.</span>
        </div>
      </div>

      {/* 3. Cost */}
      {/* 💡 md: 改為 lg: */}
      <div className="py-4 flex flex-col gap-2 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-center">
        <span className="font-semibold text-slate-900 lg:text-slate-400 lg:font-medium text-sm lg:text-base uppercase tracking-wider lg:normal-case lg:tracking-normal">
          Cost
        </span>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[SRAM]</span>
          <span className="text-slate-800 font-medium">Expensive per bit.</span>
        </div>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[DRAM]</span>
          <span className="text-slate-800 font-medium">Cheap per bit.</span>
        </div>
      </div>

      {/* 4. Capacity */}
      {/* 💡 md: 改為 lg: */}
      <div className="py-4 flex flex-col gap-2 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-center">
        <span className="font-semibold text-slate-900 lg:text-slate-400 lg:font-medium text-sm lg:text-base uppercase tracking-wider lg:normal-case lg:tracking-normal">
          Capacity
        </span>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[SRAM]</span>
          <span className="text-slate-800 font-medium">Small. Kilobytes to a few megabytes.</span>
        </div>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[DRAM]</span>
          <span className="text-slate-800 font-medium">Large. Gigabytes to terabytes.</span>
        </div>
      </div>

      {/* 5. Where it lives */}
      {/* 💡 md: 改為 lg: */}
      <div className="py-4 flex flex-col gap-2 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-center">
        <span className="font-semibold text-slate-900 lg:text-slate-400 lg:font-medium text-sm lg:text-base uppercase tracking-wider lg:normal-case lg:tracking-normal">
          Where it lives
        </span>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[SRAM]</span>
          <span className="text-slate-800 font-medium">CPU cache (L1, L2, L3)</span>
        </div>
        <div className="lg:whitespace-nowrap">
          <span className="inline-block lg:hidden text-xs font-bold text-slate-400 mr-1.5">[DRAM]</span>
          <span className="text-slate-800 font-medium">Next to the CPU. Main memory.</span>
        </div>
      </div>
  </div>
</div>




</div>

          <div className="space-y-10 text-base leading-[1.85] text-slate-500">




            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">SRAM Is Faster. Why Not Use It Everywhere?</h2>
              
              
              {/* Section 1 */}
              <div className="space-y-3.5">
                <p>
                  SRAM Is Fast, but it takes more space.
                </p>
              </div>

              <div className="space-y-3.5">
                <p>
                  SRAM achieves its speed by using a more complex circuit to store data. As a result, each memory cell occupies more silicon area. 
                  One memory cell is tiny, but modern systems contain billions of them.
                </p>
                <p>
                  As SRAM capacity increases, the amount of silicon required grows quickly.
                </p>
              </div>

              {/* Silicon Area Flowchart Diagram */}
              <div className="max-w-md mx-auto my-8 bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-full bg-indigo-50 border border-indigo-100 rounded-lg py-2.5 text-center text-sm font-semibold text-indigo-800">
                    More SRAM
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="w-full bg-indigo-50 border border-indigo-100 rounded-lg py-2.5 text-center text-sm font-semibold text-indigo-800">
                    More Silicon Area
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="w-full bg-indigo-900 rounded-lg py-2.5 text-center text-sm font-semibold text-white shadow-sm">
                    Larger Chip Cost
                  </div>
                </div>
              </div>

              <p className="mt-4">This is where cost becomes important.</p>
            </section>

            {/* Section 3 */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">Larger Chips Cost More</h2>
              <div className="space-y-3.5">
                <p>
                  Chips are manufactured on circular silicon wafers. After fabrication, the wafer is cut into individual chips.
                </p>
              </div>

              {/* Wafer / Chip Size Comparison Visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                  <p className="text-[13px] uppercase tracking-wider text-slate-400 font-semibold mb-3">Small Chips Layout</p>
                  <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-300 mx-auto flex flex-wrap gap-1 p-3 items-center justify-center bg-slate-50/50">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-indigo-600 rounded-sm" />
                    ))}
                  </div>
                  <div className="mt-4 text-sm font-medium text-slate-700">More Chips Per Wafer</div>
                  <p className="text-xs text-slate-400 mt-0.5">Lower cost per unit</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                  <p className="text-[13px] uppercase tracking-wider text-slate-400 font-semibold mb-3">Large Chips Layout</p>
                  <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-300 mx-auto flex flex-wrap gap-2 p-4 items-center justify-center bg-slate-50/50">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-9 h-9 bg-indigo-900 rounded-sm" />
                    ))}
                  </div>
                  <div className="mt-4 text-sm font-medium text-slate-700">Fewer Chips Per Wafer</div>
                  <p className="text-xs text-slate-400 mt-0.5">Higher manufacturing cost</p>
                </div>
              </div>

              <div className="space-y-3.5">
                <p>
                  If each chip is small, more chips can fit on a single wafer. If each chip becomes larger, fewer chips fit on the same wafer. 
                  This means the manufacturing cost of each chip increases.
                </p>
                <p>
                  Larger chips are also more likely to contain manufacturing defects, which further reduces yield and increases cost.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">DRAM Takes a Different Approach</h2>
              <div className="space-y-3.5">
                <p>
                  Instead of prioritizing speed, DRAM focuses on density. Its memory cells are much smaller, allowing engineers to fit far more memory into the same area. 
                  This makes DRAM ideal for storing large amounts of data.
                </p>
                <p>
                  The trade-off is that DRAM must constantly refresh its contents, making it slower than SRAM. 
                  However, the lower cost and higher capacity make DRAM practical for everyday systems.
                </p>
              </div>
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

            {/* Conclusion */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <div className="space-y-3.5">
                <p>
                  When I first learned about memory, I assumed faster automatically meant better. 
                  SRAM showed me that engineering is often about trade-offs.
                </p>
                <p>
                  Using SRAM everywhere would increase chip area, reduce the number of chips produced from each wafer, and significantly increase cost. 
                  That is why modern systems use a small amount of SRAM where speed matters most and rely on DRAM for the bulk of their memory.
                </p>
                <p className="font-medium text-slate-800">
                  The goal is not to build the fastest memory possible. The goal is to find the right balance between speed, capacity, and cost.
                </p>
              </div>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}
