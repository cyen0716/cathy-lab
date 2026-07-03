"use client"

export default function ServerPage() {
  return (
    <article className="max-w-6xl">
      <h1 className="text-3xl font-bold text-zinc-900 mt-4 mb-4">
        What is an AI Server?
      </h1>

      <div className="space-y-10 text-base leading-[1.85] text-zinc-700">
        
        {/* Intro Section */}
        <section className="space-y-5">
          <p> AI servers are designed to train and run AI models. 
            Compared with traditional servers, they use specialized hardware to provide significantly 
            higher computing performance.
          </p>          
        </section>

      {/* AI server vs traditional server table */}
  <div className="w-full mb-10 select-none">
  <table className="text-sm font-bold text-zinc-700 mb-3">Table: AI Server vs Traditional Server</table>
  <div className="bg-white border border-zinc-200/60 shadow-[0_2px_8px_rgba(15,23,42,0.01)] rounded-2xl pt-4 pb-2 px-4 lg:pt-4 lg:pb-2 lg:px-8 w-full">    <div className="hidden lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 border-b border-zinc-100 pb-3 mb-2 text-sm font-bold text-zinc-700">
      <div>Feature</div>
      <div>AI Server</div>
      <div>Traditional Server</div>
    </div>

    <div className="divide-y divide-zinc-100/80 text-sm leading-snug">
      {[
        { title: "Primary Use", ai: "AI training and inference", traditional: "Web services, databases, enterprise applications" },
        { title: "Core Chip", ai: "CPU + Multiple GPUs", traditional: "CPU" },
        { title: "Memory", ai: "DDR + HBM", traditional: "DDR4 / DDR5" },
        { title: "Interconnect", ai: "PCIe + NVLink", traditional: "PCIe" },
        { title: "Computing Method", ai: "Parallel computing (Processes thousands of tasks simultaneously)", traditional: "Sequential computing (Processes tasks one by one)" },
        { title: "Power & Heat", ai: "Extremely high power, advanced cooling", traditional: "Low power consumption, cooled by standard fans" }
      ].map((item, idx) => (
        <div key={idx} className="py-3 flex flex-col gap-1 lg:grid lg:grid-cols-[160px_1fr_1fr] lg:gap-8 lg:items-start">
          <span className=" text-zinc-700 font-bold text-sm  ">
          {item.title}
          </span>
          <div className="min-w-0">
            <span className="inline-block lg:hidden text-xs font-bold text-zinc-400 mr-1.5">[AI Server]</span>
            <span className="text-zinc-700">{item.ai}</span>
          </div>
          <div className="min-w-0">
            <span className="inline-block lg:hidden text-xs font-bold text-zinc-400 mr-1.5">[Traditional Server]</span>
            <span className="text-zinc-700">{item.traditional}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>  

{/* AI server components */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Core Components of an AI Server</h2>
          <p> The following sections introduce the key hardware components that power an AI server.</p>

{/* Core Computing Chips */}
        <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">Core Computing Chips</h3>
        <ul className="list-disc pl-4 ">
            <li> GPU (Graphics Processing Units): Executes highly parallel computations, making it essential for AI model training.</li>
            <li> CPU (Central Processing Unit): The system's "brain" that manages tasks, processes data, and sends it to the GPU.</li>
            <li> ASIC (Application-Specific Integrated Circuit): Designed for specific AI tasks, delivering maximum performance and efficiency.</li>
          </ul>
          </div> 

{/* Memory */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">Memory</h3>
        <ul className="list-disc pl-4 ">
            <li> HBM (High Bandwidth Memory): Ultra-fast memory integrated with GPUs, reducing data bottlenecks during AI training.</li>
            <li> DDR5 RAM: General-purpose memory used by the CPU for system operations.</li>
          </ul>
          </div>  

{/* Interconnects*/}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">Interconnect</h3>
        <ul className="list-disc pl-4 ">
            <li> PCle: A high-speed interface that connects the CPU with GPUs, SSDs, network cards, and other server components.</li>
            <li> NVLink: NVIDIA's high-speed GPU-to-GPU interconnect, designed for faster data transfer than PCIe.</li>
            <li> InfiniBand: A high-speed networking standard for AI clusters, enabling high-bandwidth, low-latency communication between AI servers.</li>
          </ul>
          </div>  

{/* Storage */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">Storage</h3>
        <ul className="list-disc pl-4 ">
            <li> NVMe (Non-Volatile Memory Express) SSD: Uses the high-speed PCIe interface to bypass SATA bottlenecks, delivering faster data transfer and lower latency.</li>
          </ul>
          </div>

{/* Cooling */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">Cooling</h3>
        <ul className="list-disc pl-4 ">
            <li> Liquid Cooling: Uses cold plates and liquid to remove heat from AI chips more efficiently than air cooling.</li>
            <li> Air Cooling: Uses high-pressure fans, heat sinks, and heat pipes to remove heat from server components.</li>
          </ul>
          </div> 

{/* Power */}
          <div className="space-y-3.5">
          <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">Power</h3>
        <ul className="list-disc pl-4 ">
            <li> High-Wattage PSU: Delivers stable, high-power electricity to AI server components.</li>
          </ul>
          </div> 

        </section>
      </div>


    </article>
  )
}