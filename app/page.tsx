"use client"

import Link from "next/link"
import { Cpu, BookOpen, Sparkles, Sparkle } from "lucide-react"
import { SiteNav } from "@/components/site-nav"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">
      <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Logo */}
      <Link href="/" className="inline-flex items-center gap-2 group shrink-0">
        <Sparkle
          className="w-5 h-5 text-slate-400 transition-all duration-700 ease-out group-hover:rotate-12"
          strokeWidth={1.8}
        />
        {/* Cathy 改為藍紫色，Lab 維持原有配色 */}
        <span className="text-lg font-bold text-[#4338CA] tracking-[0.05em]">
          Cathy
          <span className="font-medium text-slate-500 ml-1">Lab</span>
        </span>
      </Link>

        {/* Hero Section */}
        <section className="max-w-7xl mb-15 mt-16">
          {/* 拿掉 tracking-tight，讓 Cathy Yen 的字母自然舒展 */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-950 leading-tight mb-10">
            Hello, I&apos;m Cathy
          </h1>

         <div className="mt-8 max-w-7xl">
  <p className="text-lg md:text-xl text-slate-800 tracking-normal leading-tight">
    An English major turned technical writer, driven by a curiosity about technology. <br />
    Here is my playground for documenting what I learn.
  </p>
</div>
        </section>

<Link 
  href="/portfolio" 
  className="inline-flex items-center justify-center px-6 py-4 rounded-full 
  bg-[#4338CA] text-white font-medium text-base tracking-wide
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
  hover:scale-[1.02]
  active:scale-[0.98]
  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
>
  Portfolio
</Link>
 


 {/* Learning Lab Section */}
<section className="mt-30">
  <div className="flex flex-col gap-8 ">

    <div>
      <h2 className="text-2xl md:text-2xl font-bold text-slate-900 leading-tight">
        Learning Lab
      </h2>
    </div>

    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
      
      
      {/* Server & Storage 卡片 */}
      <Link href="/server-storage" 
      className="group p-8 rounded-3xl border border-slate-200 bg-white 
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-slate-300 
      transition-all duration-700 ease-out block">
  <h3 className="text-xl font-bold text-slate-900">Server & Storage</h3>
  <p className="text-base text-slate-800 mt-2">Learning enterprise infrastructure.</p>
</Link>

      {/* Semiconductor 卡片 */}
      <Link href="/semiconductor" 
      className="group p-8 rounded-3xl border border-slate-200 bg-white 
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-slate-300 
      transition-all duration-700 ease-out block">
        <h3 className="text-xl font-bold text-slate-900">Semiconductor</h3>
        <p className="text-base text-slate-800 mt-2">Understanding chip technology.</p>
      </Link>

      {/* Korean 卡片 */}
      <Link href="/korean" 
      className="group p-8 rounded-3xl border border-slate-200 bg-white 
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-slate-300 
      transition-all duration-700 ease-out block">
        <h3 className="text-xl font-bold text-slate-900">Korean</h3>
        <p className="text-base text-slate-800 mt-2">One word at a time.</p>
      </Link>
    </div>
  </div>
</section>
  
         

      </div>
    </main>
  )
}