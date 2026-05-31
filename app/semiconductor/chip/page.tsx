import Link from "next/link"
import { ChevronLeft, ArrowRight } from "lucide-react"

export default function ChipPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Back button */}
        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            w-11 h-11 rounded-full
            bg-[#EEF2FF] text-[#4338CA]
            hover:bg-[#E0E7FF]
            transition-colors duration-200
            mb-7
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

<p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Semiconductor Fundamentals
          </p>
        
        {/* Pill navigation */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <Link
            href="/semiconductor"
            className="
              px-4 py-2 rounded-full
              bg-white border border-slate-200
              text-slate-500 text-sm font-medium
              hover:bg-slate-50 transition-colors
            "
          >
            Why need semiconductors?
          </Link>
          <span
            className="
              px-4 py-2 rounded-full
              bg-[#EEF2FF] text-[#4338CA]
              text-sm font-medium
            "
          >
            What&apos;s inside a chip?
          </span>
        </div>

        <article>

          {/* Header */}
          
          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            What is Inside a Chip?
          </h1>

          {/* Intro */}
          <div className="space-y-3.5 text-base leading-[1.85] text-slate-500 mb-8">
            <p>
              A chip is made of billions of transistors. But engineers do not think
              in billions of individual transistors.
            </p>
            <p>
              Instead, they organize transistors into functional blocks. Each block
              performs a specific job. Together, these blocks form a complete chip.
            </p>
          </div>

          {/* Chip Diagram */}
<div className="max-w-2xl mx-auto mb-10">
          <div className="bg-white border-2 border-[#C7D2FE] rounded-2xl p-6 mb-10">
            <p className="text-[13px] uppercase tracking-[0.12em] text-indigo-500 font-semibold text-center mb-4">
              A Simplified Chip
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
                <p className="text-base font-bold text-indigo-800">CPU</p>
                <p className="text-[13px] text-indigo-500 font-medium mt-0.5">Processor core</p>
              </div>
              <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
                <p className="text-base font-bold text-indigo-800">SRAM</p>
                <p className="text-[13px] text-indigo-500 font-medium mt-0.5">Fast memory</p>
              </div>
              <div className="col-span-2 bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
                <p className="text-base font-bold text-indigo-800">Memory Controller</p>
                <p className="text-[13px] text-indigo-500 font-medium mt-0.5">Data routing</p>
              </div>
              <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
  <p className="text-base font-bold text-indigo-800">USB</p>
  <p className="text-[13px] text-indigo-500 font-medium mt-0.5">
    Connectivity
  </p>
</div>

<div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3.5 text-center">
  <p className="text-base font-bold text-indigo-800">Security</p>
  <p className="text-[13px] text-indigo-500 font-medium mt-0.5">
    Data Protection
  </p>
</div>
            </div>
          </div>
</div>

          <div className="space-y-10 text-base leading-[1.85] text-slate-500">

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
                  internal data format and the USB protocol — converting signals so
                  that external devices can understand them, and vice versa.
                </p>
              </div>
              <div className="border-l-[3px] border-[#4338CA] pl-4 mt-5">
                <p className="text-[14.5px] leading-[1.75] text-indigo-800 font-medium">
                  USB allows the chip to communicate with external devices — including
                  keyboards, mice, storage drives, and smartphones.
                </p>
              </div>
            </section>

            {/* Closing */}
            <section>
              <div className="border-t border-slate-200 mb-8" />
              <div className="space-y-3.5">
                <p>
                  CPU, memory, and interfaces all have different jobs. A modern chip combines these functions into a single system.
                </p>
              </div>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}
