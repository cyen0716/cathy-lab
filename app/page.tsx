"use client"

import Link from "next/link"
import { Cpu, BookOpen, Sparkles, Sparkle } from "lucide-react"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Logo / Nav - 星光微光款（手動下沉完美對齊版） */}
        <nav className="mb-14 pt-2 select-none">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <Sparkle 
              className="w-4 h-4 text-slate-400 transition-all duration-700 ease-out group-hover:text-slate-800 group-hover:rotate-12" 
              strokeWidth={1.8} 
            />
            <span className="text-base font-semibold text-slate-900 tracking-[0.12em] font-sans">
              Cathy<span className="font-light text-slate-400 ml-0.5">Lab</span>
            </span>
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="max-w-5xl mb-20 mt-16">
          {/* 拿掉 tracking-tight，讓 Cathy Yen 的字母自然舒展 */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-950 leading-tight mb-10">
            Cathy Yen
          </h1>

          <div className="mt-8 max-w-3xl space-y-4">
            {/* 第一層核心身份：改為 tracking-normal，回復正常、不緊繃的字距 */}
            <p className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed tracking-normal">
              I&apos;m a Technical Writer who learns by building.
            </p>

            {/* 第二層說明：使用 tracking-normal */}
            <p className="text-base font-normal text-slate-500/90 leading-relaxed tracking-normal">
              From Korean to semiconductors, I turn things I don&apos;t understand into projects I can explore.
            </p>
            
            {/* 第三層說明：使用 tracking-normal */}
            <p className="text-base font-normal text-slate-500/90 leading-relaxed tracking-normal">
              This website is my playground for experiments, learning notes, and curious side projects.
            </p>
          </div>
        </section>

        {/* Selected Projects */}
        <section>
          {/* 專案大標題：同步拿掉 tracking-tight */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-6">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

            {/* Semiconductor 卡片 */}
            <Link 
              href="/semiconductor"
              className="group p-8 min-h-[220px] rounded-3xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-700 ease-out block"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* 圖標 */}
                  <div className="mb-5 text-slate-400 group-hover:text-slate-800 transition-colors duration-500 ease-out">
                    <Cpu strokeWidth={1.2} size={34} />
                  </div>

                  {/* 卡片標題：拿掉 tracking-tight */}
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    Semiconductor Notes
                  </h3>

                  {/* 卡片內文：統一使用 tracking-normal */}
                  <p className="text-base font-normal text-slate-500 leading-relaxed tracking-normal mt-3">
                    Semiconductor basics, technical concepts, and learning notes.
                  </p>
                </div>
              </div>
            </Link>

            {/* Korean 卡片 */}
            <Link 
              href="/korean"
              className="group p-8 min-h-[220px] rounded-3xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-700 ease-out block"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* 圖標 */}
                  <div className="mb-5 text-slate-400 group-hover:text-slate-800 transition-colors duration-500 ease-out">
                    <BookOpen strokeWidth={1.2} size={34} />
                  </div>

                  {/* 卡片標題 */}
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    Korean Vocabulary
                  </h3>

                  {/* 卡片內文 */}
                  <p className="text-base font-normal text-slate-500 leading-relaxed tracking-normal mt-3">
                    Flashcards, quizzes, pronunciation, and categorized Korean vocabulary study sets.
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </section>

      </div>
    </main>
  )
}