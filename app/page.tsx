"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-12">

        {/* Logo / Nav - 縮減底邊距讓整體往上提 */}
        <nav className="mb-6 md:mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section */}
        <section className="max-w-4xl mb-8 md:mb-10">

          {/* 完美的單行漸層 Cathy 標題，大幅節省垂直空間 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-5">
            Hi, I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          {/* 精細美化後的自我介紹區塊，高度緊湊，一屏看完不用下滑 */}
          <div className="max-w-2xl text-[15px] md:text-base leading-relaxed text-slate-500 space-y-3.5 tracking-wide">
            
            <p className="text-slate-900 font-semibold text-base md:text-lg flex items-center gap-2">
              I&apos;m a <span className="underline decoration-indigo-200 decoration-2 underline-offset-4">Technical Writer</span>.
            </p>
            
            <p className="text-[#4338CA] font-bold tracking-wide text-sm md:text-[15px] uppercase bg-indigo-50/60 px-2.5 py-1 rounded-md w-fit select-none">
              I learn by building.
            </p>
            
            <p className="text-slate-600 font-medium">
              From tech to Korean, I turn things I don&apos;t understand into projects I can explore.
            </p>
            
            <p className="text-slate-400 text-sm md:text-[15px] font-normal">
              This website is my playground for experiments, learning notes, and everything I&apos;m curious about.
            </p>

          </div>

        </section>

        {/* Selected Projects */}
        <section>

          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Selected Projects
          </h2>

          {/* 保持您原本的網格與寬度，卡片完整保留所有自訂外觀與動畫 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">

            {/* Semiconductor */}
            <Link href="/semiconductor">
              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#4338CA] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div>

                  <div className="text-4xl mb-3">
                    🖥️
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Semiconductor Notes
                  </h3>

                  <p className="text-base leading-[1.85] text-slate-500 mt-2">
                    Semiconductor basics,
                    technical concepts, and learning notes.
                  </p>

                </div>
              </Card>
            </Link>

            {/* Korean */}
            <Link href="/korean">
              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#4338CA] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div>

                  <div className="text-4xl mb-3">
                    📓
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-base leading-[1.85] text-slate-500 mt-2">
                    Flashcards, quizzes, pronunciation,
                    and categorized Korean vocabulary study sets.
                  </p>

                </div>
              </Card>
            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}
