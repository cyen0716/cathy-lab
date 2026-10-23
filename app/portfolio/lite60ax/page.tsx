"use client";
import { ArrowUpRight } from 'lucide-react';


export default function PortfolioPage() {
  return (
    <article className="max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Portfolio</h1>
      
      <section className="space-y-10">

        {/* Tailscale CLI */}
          <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            USG LITE 60AX User Guide
          </h2>

    {/* UG link */} 
    <a 
  href="https://download.zyxel.com/USG_LITE_60AX/user_guide/USG%20LITE%2060AX-UG.pdf" 
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
        <div className="space-y-8 text-base leading-[1.85] text-slate-700">
          <p className="text-base text-slate-700">
            The initial version of the user guide was created by me. 
            I adapted existing documentation to the new product, updating the structure and content where needed.
          </p>
        </div>
      </section>

    </article>
  );
}