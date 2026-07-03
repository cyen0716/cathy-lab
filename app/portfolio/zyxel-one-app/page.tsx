"use client";
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <article className="max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Portfolio</h1>
      
      <section className="space-y-10">
          <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Zyxel One App User Guide
          </h2>

          {/* UG link */} 
    <a 
  href="https://service-provider.zyxel.com/app-help/ZyxelOne/FLA/LAN/#page/ZyxelOneApp_FLA/h_Overview.html" 
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
            Created the user guide for the pre-release Zyxel One App.
          </p>

          <ul className="list-disc list-outside ml-5 space-y-4">
            <li>
              <p>
                <strong className="text-slate-900 font-semibold">User Experience Optimization: </strong> 
                Collaborated with PMs and the UI team to refine interface text and improve the app's setup 
                flow through hands-on testing before launch.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-slate-900 font-semibold">Documentation Structure:</strong> Organized the 
                user guide into task-based sections, 
                making information easier for users to navigate.
              </p>
            </li>
          </ul>
        </div>
      </section>


        {/* PDF Section */}
      <section className="space-y-4">  
        <h4 className="text-sm italic text-zinc-700 mt-10"> Writing Sample - Zyxel One App User Guide </h4>  
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <iframe
            src="/zyxel-one-app.pdf"
            className="w-full h-[600px]"
            title="Zyxel One App PDF"
          />
        </div>
      </section>
    </article>
  );
}