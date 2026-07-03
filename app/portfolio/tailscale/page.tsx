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
            Tailscale CLI Reference Guide
          </h2>

          {/* UG link */} 
    <a 
  href="https://www.zyxel.com/global/en/support/download?model=usg-flex-700h" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-zinc-700 hover:text-indigo-500 hover:underline text-sm inline-flex items-center gap-1 group w-fit transition-colors"
>
  Official Documentation 
  <ArrowUpRight 
    size={16} 
    strokeWidth={1.5} 
  />
</a>          
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-base leading-[1.85] text-slate-700">
          <p className="text-base text-slate-700">
            Joined internal 
                feature presentations to understand newly introduced Tailscale feature and collaborated with 
                engineers to produce accurate CLI reference documentation.
          </p>
        </div>
      </section>


        {/* PDF Section */}
      <section className="space-y-4">  
        <h4 className="text-sm italic text-zinc-700 mt-10"> Writing Sample - Tailscale CLI </h4>  
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <iframe
            src="/tailscale.pdf"
            className="w-full h-[600px]"
            title="Tailscale CLI PDF"
          />
        </div>
      </section>
    </article>
  );
}