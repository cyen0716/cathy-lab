import Link from "next/link"
import { ChevronLeft, ArrowRight } from "lucide-react"
import { SemiconductorNav } from "@/components/semiconductor-nav"

export default function ChipPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">

{/* bookmark */}          
          <SemiconductorNav />

        <article>

          {/* Header */}
          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            What is Inside a Chip?
          </h1>

          {/* Intro */}
          <div className="space-y-3.5 text-base leading-[1.85] text-slate-600 mb-8">
            <p>
             A chip is not a random collection of circuits.</p>
            <p>
             Every function occupies silicon area and competes for limited resources such as space, power, and performance.
             Because of these constraints, engineers divide a chip into specialized functional blocks,
            each responsible for a different task.</p>
            <p>Designing a chip is not only about what to include.
            It is also about deciding what deserves precious silicon area.
            </p>
          </div>

          {/* Chip Diagram */}
          <div className="max-w-2xl mx-auto mb-10">
  {/* 外層容器：邊框顏色使用溫和的 slate-200，維持大器陰影 */}
  <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
    
    {/* 小標題：使用與前一張圖一致的 text-slate-600，拉大字距 */}
    <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-bold text-center mb-6">
      A Simplified Chip
    </p>
    
    {/* 區塊矩陣：加大格開間距，邊界更分明 */}
    <div className="grid grid-cols-2 gap-3.5">
      
      {/* CPU */}
      <div className="bg-[#EEF2FF]/60 border border-[#C7D2FE]/70 rounded-xl px-5 py-5 text-center transition-all hover:bg-[#EEF2FF]">
        <p className="text-lg font-bold text-[#4338CA] tracking-tight">CPU</p>
        <p className="text-sm text-indigo-600/80 font-medium mt-1">Processor core</p>
      </div>
      
      {/* SRAM */}
      <div className="bg-[#EEF2FF]/60 border border-[#C7D2FE]/70 rounded-xl px-5 py-5 text-center transition-all hover:bg-[#EEF2FF]">
        <p className="text-lg font-bold text-[#4338CA] tracking-tight">SRAM</p>
        <p className="text-sm text-indigo-600/80 font-medium mt-1">Fast memory</p>
      </div>
      
      {/* Memory Controller */}
      <div className="col-span-2 bg-[#EEF2FF]/60 border border-[#C7D2FE]/70 rounded-xl px-5 py-5 text-center transition-all hover:bg-[#EEF2FF]">
        <p className="text-lg font-bold text-[#4338CA] tracking-tight">Memory Controller</p>
        <p className="text-sm text-indigo-600/80 font-medium mt-1">Data routing</p>
      </div>
      
      {/* USB */}
      <div className="bg-[#EEF2FF]/60 border border-[#C7D2FE]/70 rounded-xl px-5 py-5 text-center transition-all hover:bg-[#EEF2FF]">
        <p className="text-lg font-bold text-[#4338CA] tracking-tight">USB</p>
        <p className="text-sm text-indigo-600/80 font-medium mt-1">Connectivity</p>
      </div>

      {/* Security */}
      <div className="bg-[#EEF2FF]/60 border border-[#C7D2FE]/70 rounded-xl px-5 py-5 text-center transition-all hover:bg-[#EEF2FF]">
        <p className="text-lg font-bold text-[#4338CA] tracking-tight">Security</p>
        <p className="text-sm text-indigo-600/80 font-medium mt-1">Data Protection</p>
      </div>

    </div>
  </div>
</div>

          <div className="space-y-10 text-base leading-[1.85] text-slate-600">

            {/* CPU */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">CPU</h2>
              <div className="space-y-3.5">
                <p>
                  The CPU, or Central Processing Unit, is the primary computational
                  engine of a chip. It executes instructions, performs arithmetic and
                  logic operations, and coordinates the activity of other blocks.
                </p>
                <p>
                  In most chip designs, the CPU does not work alone. 
                  It depends on fast access to data. 
                  This is where memory blocks like SRAM become essential.
                </p>
              </div>
              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  The CPU is the brain of the chip. It performs calculations, makes
                  decisions, and runs programs.
                </p>
              </div>
            </section>

            {/* SRAM */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">SRAM</h2>
              <div className="space-y-3.5">
                <p>
                  SRAM stands for Static Random-Access Memory. Unlike the storage in
                  your phone or laptop, SRAM is designed for speed rather than
                  capacity. It sits close to the CPU and can be accessed in a single
                  clock cycle.
                </p>
                <p>
                  Because it is fast but expensive to manufacture, SRAM is used sparingly
                  and stores only the data the CPU needs right now. 
                  Larger amounts of data are stored elsewhere and fetched as needed.
                </p>
              </div>
              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  SRAM is a very fast type of memory. It temporarily stores data that
                  the CPU needs immediately.
                </p>
              </div>
            </section>

            {/* Memory Controller */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">Memory Controller</h2>
              <div className="space-y-3.5">
                <p>
                  A chip does not just use SRAM. It also communicates with external
                  memory — larger and slower storage that sits outside the chip itself.
                  The Memory Controller manages this communication.
                </p>
                <p>
                  It handles the timing, sequencing, and routing of data transfers
                  between the CPU and memory. Without it, the CPU would stall waiting
                  for data that has not yet arrived.
                </p>
              </div>
              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  The Memory Controller manages communication between the CPU and
                  memory. It helps data move efficiently throughout the system.
                </p>
              </div>
            </section>

            {/* USB */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">USB</h2>
              <div className="space-y-3.5">
                <p>
                  USB, or Universal Serial Bus, is an interface standard that allows a
                  chip to communicate with devices outside the system. It handles the
                  physical signaling, protocol, and power delivery needed to connect
                  external hardware.
                </p>
                <p>
                  Inside the chip, the USB block translates between the chip&apos;s
                  internal data format and the USB protocol, converting signals so
                  that external devices can understand them, and vice versa.
                </p>
              </div>
              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  USB allows the chip to communicate with external devices, such as
                  keyboards, mice, storage drives, and smartphones.
                </p>
              </div>
            </section>

            {/* Security */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <h2 className="text-xl font-bold text-slate-900 mb-3">Security</h2>

              <div className="space-y-3.5">
                <p>
                  A Security block is dedicated hardware that performs security-related
                  functions inside a chip. It is responsible for tasks such as encryption,
                  authentication, secure key storage, and access control. Keeping these functions in
                  dedicated hardware improves security and helps protect critical data from
                  unauthorized access.
                </p>
              </div>

              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  Security blocks perform specialized security functions such as
                  encryption, authentication, and secure key management.
                </p>
              </div>
            </section>

            {/* Closing */}
            <section>
              <div className="border-t border-slate-200 mb-8" />

              <div className="space-y-3.5">
                <p>
                  Each block performs a specific function. The CPU processes instructions,
                  SRAM stores frequently used data, the Memory Controller manages data
                  transfers, USB enables external communication, and Security protects
                  sensitive operations.
                </p>

                <p>
                  Together, these blocks form a complete system that allows a chip to
                  compute, store, communicate, and operate securely.
                </p>
              </div>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}
