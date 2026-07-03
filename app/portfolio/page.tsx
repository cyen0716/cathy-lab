"use client";
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <article className="max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Portfolio</h1>
      
      <section className="space-y-10">
        
    {/* Switch Rack Mounting */}
  <div className="flex flex-col space-y-2">
    <h2 className="text-xl font-bold text-slate-900">
      CX4800-56F Hardware Installation Guide
    </h2>                
      
      
    {/* UG link */} 
    <a 
  href="https://download.zyxel.com/CX4800-56F/user_guide/CX4800-56F-UG.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-zinc-700 hover:text-indigo-500 hover:underline text-sm inline-flex items-center gap-1 group w-fit transition-colors"
>
  Official User Guide 
  <ArrowUpRight 
    size={16} 
    strokeWidth={1.5} 
  />
</a>
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
                 the installation process from engineers, I practiced the rail-kit assembly 
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
      </section>

        {/* PDF Section */}
      <section className="space-y-4">  
        <h4 className="text-sm italic text-zinc-700 mt-10"> Writing Sample - Rack Mounting Instructions </h4>  
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