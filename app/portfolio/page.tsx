"use client";

export default function PortfolioPage() {
  return (
    <article className="max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Portfolio</h1>
      
      <section className="space-y-10">
        {/* Switch Rack Mounting */}
        <div>
          {/* 讓 CX4800 獨立並置頂 */}
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            CX4800-56F Hardware Installation Guide
          </h2>                
        </div>

        {/* Body Content */}
        <div className="space-y-4 text-base text-slate-700">
          <p>
            As part of the launch of the new CX4800-56F 100G aggregation switch,
            I authored the product overview, rack-mount installation, and fan module replacement procedures.       
          </p>

          <ul className="list-disc list-outside ml-5 space-y-4">
            <li>
              <p>
                <strong className="text-slate-900 font-semibold">Hand-on Hardware Experience:</strong> After learning
                 the installation process from AE, I practiced the rail-kit assembly 
                myself to better understand the procedure before documenting it.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-slate-900 font-semibold">Deciding What to Illustrate:</strong> Identified 
                installation actions that could not be communicated clearly through text alone 
                and defined how they should be represented visually, 
                then worked with an industrial designer to translate those requirements into illustrations.
              </p>
            </li>
          </ul>
        </div>

        {/* PDF Section */}
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <iframe
            src="/switch-rack-mounting.pdf"
            className="w-full h-[600px]"
            title="CX4800-56F Rack Mounting PDF"
          />
        </div>
      </section>
    </article>
  );
}