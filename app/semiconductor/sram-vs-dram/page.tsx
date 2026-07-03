"use client"

export default function WhySramPage() {
  return (
    <article className="max-w-6xl">
      {/* 標題*/}
      <h1 className="text-3xl font-bold text-zinc-900 mt-4 mb-4">
        Why Don&apos;t We Use SRAM for Everything?
      </h1>

      {/* Intro block */}
      <div className="space-y-3.5 text-base leading-[1.85] text-zinc-700 mb-8">
        <p>Both Static RAM (SRAM) and Dynamic RAM (DRAM) are volatile types of computer memory. 
          But they are built very differently, 
          so your computer uses them for different jobs.</p>
      </div>

      {/* table */}
  <div className="w-full mb-10 select-none">
             <h2 className="text-sm font-bold text-zinc-700 mb-3">Table: SRAM vs DRAM</h2>
 
<div className="bg-white border border-zinc-200/60 shadow-[0_2px_8px_rgba(15,23,42,0.01)] rounded-2xl pt-4 pb-2 px-4 lg:pt-4 lg:pb-2 lg:px-8 w-full">    <div className="hidden lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 border-b border-zinc-100 pb-3 mb-2 text-sm font-bold text-zinc-700">
      <div></div>
      <div>SRAM (Static)</div>
      <div>DRAM (Dynamic)</div>
    </div>

    <div className="divide-y divide-zinc-100/80 text-sm leading-snug">
      {[
        { title: "Speed", sram: "Extremely fast.", dram: "Slower, due to the time needed for refresh cycles." },
        { title: "Keeps data", sram: "As long as power is on. No refresh needed.", dram: "Forgets instantly. Needs constant refreshing." },
        { title: "Cost", sram: "More expensive, larger per bit.", dram: "Less expensive, smaller per bit." },
        { title: "Capacity", sram: "Small. Kilobytes to a few megabytes.", dram: "Large. Gigabytes to terabytes." },
        { title: "Where it lives", sram: "CPU cache (L1, L2, L3)", dram: "Next to the CPU. Main memory." }
      ].map((item, idx) => (
        <div key={idx} className="py-3 flex flex-col gap-1 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-start">
          <span className="text-zinc-700 font-bold text-sm  ">
          {item.title}
          </span>
          <div className="min-w-0">
            <span className="inline-block lg:hidden text-xs font-bold text-zinc-400 mr-1.5">[SRAM]</span>
            <span className="text-zinc-700">{item.sram}</span>
          </div>
          <div className="min-w-0">
            <span className="inline-block lg:hidden text-xs font-bold text-zinc-400 mr-1.5">[DRAM]</span>
            <span className="text-zinc-700">{item.dram}</span>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* SRAM Is Faster */}
      <div className="border-t border-zinc-200 mb-8" />
      <div className="space-y-10 text-base leading-[1.85] text-zinc-700">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">SRAM Is Faster. Why Not Use It Everywhere?</h2>
          
          <div className="space-y-3.5">
            <p>SRAM is significantly faster than DRAM, 
              but we don't use it everywhere because of three major trade-offs: size, cost, and power. </p>
          </div>          


          {/* Density */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">1. Massive Physical Size (Density)</h3>
        <ul className="list-disc pl-4 ">
            <li>SRAM requires 4 to 6 transistors for every single bit of data.</li>
            <li>DRAM uses a much simpler 1-transistor and 1-capacitor design per bit.</li>
          </ul>
            <p> Because SRAM takes up 4 to 6 times more silicon area, replacing a 16GB stick of 
              standard DRAM with SRAM would make the memory module physically huge and impossible to fit onto 
              standard motherboards.</p>
          </div>

          {/* High Cost */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">2. High Cost</h3>
            <p>
              If each chip is small, more chips can fit on a single wafer. If each chip becomes larger, 
              fewer chips fit on the same wafer. This means the manufacturing cost of each chip increases.
            </p>
                    
          </div>

          {/* Chip graphic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-2xl mx-auto">
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold text-center mb-3">DRAM</p>
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-zinc-300 mx-auto flex items-center justify-center bg-zinc-50/50">
                <div className="grid grid-cols-4 gap-1 p-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-indigo-600 rounded-sm" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Lower cost per unit</p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold text-center mb-3">SRAM</p>
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-zinc-300 mx-auto flex items-center justify-center bg-zinc-50/50">
                <div className="grid grid-cols-2 gap-2 p-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-9 h-9 bg-indigo-600 rounded-xl" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Higher manufacturing cost</p>
            </div>
          </div>

          <div className="space-y-3.5">
            
            <p> Because SRAM is much less dense, it needs much more chip area to store the same amount of data.
              Building large amounts of SRAM would make memory chips much more expensive, making computers too 
              expensive for most people.
            </p> 
          </div>

        {/* Continuous Power Consumption */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">3. Continuous Power Consumption</h3>                   
          <ul className="list-disc pl-4 ">
            <li>SRAM holds onto data as long as the computer has power, without needing to refresh itself. 
              However, keeping this data locked in place requires a constant flow of electricity. 
              This constant electricity uses up a lot of power and creates a lot of heat.</li>
            <li>DRAM stores data in tiny parts that naturally leak electricity. 
              Because of this leak, the computer has to recharge these parts thousands of times every second 
              to keep the data from disappearing. 
              While this constant recharging makes DRAM slower, it uses much less power. 
              This allows us to pack a huge amount of memory into a small space without the computer overheating.</li>
          </ul>
        </div>
        </section>


      {/* Hierarchy */}
      <div className="border-t border-zinc-200 mb-8" />
      <div className="space-y-10 text-base leading-[1.85] text-zinc-700">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">A Balanced Memory Hierarchy</h2>
          <p> Modern computers use both SRAM and DRAM because each type solves a different problem.
          </p> 
          <ul className="list-disc pl-4 ">
            <li>SRAM is used as CPU cache (L1, L2, and L3 cache). 
              Its low latency allows the processor to access frequently used data quickly.</li>
            <li>DRAM is used as system memory. Although it is slower than SRAM, 
              it provides much larger capacity at a lower cost, making it suitable for storing operating systems, 
              applications, and large datasets.</li>
          </ul>
        </section>


      </div>
      </div>
    </article>
  )
}