"use client"

import Link from "next/link"
import { FlaskConical } from 'lucide-react'; // 引入燒瓶圖示

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">
<div className="max-w-7xl mx-auto px-6 py-8">

{/* Logo */}
<Link href="/" className="inline-flex items-center gap-3 group shrink-0">
  {/* 圖示容器 */}
  <div className="relative">
    <div className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full transition-transform duration-700 ease-out group-hover:-rotate-15">
      <FlaskConical 
        className="w-5 h-5 text-white" 
        strokeWidth={2.3} 
      />
      {/* 圓內的白色點點 */}
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full" />
    </div>
  </div>

  <span className="text-sm font-bold text-zinc-800 tracking-wider uppercase">
    Cathy Lab
  </span>
</Link>

{/* Hero Section */}
<section className="max-w-7xl mb-15 mt-16 flex flex-col md:flex-row gap-12 items-start">
  
  {/* 左邊：文字區域 */}
  <div className="flex-1">
    <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 leading-tight mb-10">
      Hello, I&apos;m Cathy
    </h1>

    <div className="max-w-3xl">
      <p className="text-lg md:text-lg text-zinc-800 tracking-normal mb-2">
        I'm a Technical Writer with a curiosity for technology.
        AI gave me a new way to learn: instead of only reading about things, I can build them.
      </p>
      <p className="text-lg md:text-lg text-zinc-800 tracking-normal mb-8">
        Cathy Lab started as a small experiment and became a place where I explore servers, 
        semiconductors, Korean, and whatever I'm curious about next.
      </p>
    </div>

    <Link 
      href="https://www.linkedin.com/in/cathyyen/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-5 py-4 rounded-full tracking-wide
      border border-2 border-zinc-700 bg-transparent text-zinc-800 font-medium text-sm 
      hover:scale-[1.05] hover:border-zinc-500 transition-all duration-700 ease-out"
    >
      LinkedIn
    </Link>
  </div>

  {/* 右邊：圖片區域 (4:3 比例，無圓角陰影，限制寬度) */}
  <div className="w-full md:w-64 flex-shrink-0">
    <div className="aspect-[1/1] w-full">
      <img 
        src="/cathy-book.jpeg" 
        alt="Cathy" 
        className="object-cover w-full h-full"
      />
    </div>
  </div>

</section>


 {/* Learning Journey Section */}
<section className="mt-30">
  <div className="flex flex-col gap-7 ">

    <div>
      <h2 className="text-xl md:text-xl font-bold text-zinc-900 leading-tight">
        Learning Journey
      </h2>
    </div>

    <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-6">

<Link 
  href="/portfolio" 
  className="group p-8 rounded-3xl border border-zinc-200 bg-white 
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-zinc-300 
      transition-all duration-300 ease-out block"
>
  <h3 className="text-xl font-bold text-zinc-900">Portfolio</h3>
  <p className="text-sm text-zinc-800 mt-2">Technical writing samples.</p>
</Link>

      
      {/* Server 卡片 */}
      <Link href="/server" 
      className="group p-8 rounded-3xl border border-zinc-200 bg-white 
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-zinc-300 
      transition-all duration-300 ease-out block">
  <h3 className="text-xl font-bold text-zinc-900">Server</h3>
  <p className="text-sm text-zinc-800 mt-2">Learning enterprise infrastructure.</p>
</Link>

      {/* Semiconductor 卡片 */}
      <Link href="/semiconductor" 
      className="group p-8 rounded-3xl border border-zinc-200 bg-white 
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-zinc-300 
      transition-all duration-300 ease-out block">
        <h3 className="text-xl font-bold text-zinc-900">Semiconductor</h3>
        <p className="text-sm text-zinc-800 mt-2">Understanding chip technology.</p>
      </Link>

      {/* Korean 卡片 */}
      <Link href="/korean" 
      className="group p-8 rounded-3xl border border-zinc-200 bg-white
      shadow-[0_2px_12px_rgba(0,0,0,0.01)] 
      hover:scale-[1.02] 
      hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] 
      hover:border-zinc-300
      transition-all duration-300 ease-out block">
        <h3 className="text-xl font-bold text-zinc-900">Korean</h3>
        <p className="text-sm text-zinc-800 mt-2">One word at a time.</p>
      </Link>
    </div>
  </div>
</section>
  
         

      </div>
    </main>
  )
}