"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    /* 這裡注入了 Apple 官方專屬的字體庫：優先調用 SF Pro 與 萍方體 */
    <main className="min-h-screen bg-[#FCFCFC] antialiased selection:bg-indigo-100" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "PingFang TC", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-14">

        {/* Logo / Nav */}
        <nav className="mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold select-none">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section */}
        <section className="max-w-4xl mb-12">

          {/* 蘋果官網經典：單行、極粗、緊湊字距的巨幕大標 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-6">
            Hi, I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          {/* 蘋果官網內文美學：極其緊湊的 space-y-1 與流暢的 leading-snug */}
          <div className="max-w-2xl text-[15px] md:text-base leading-snug tracking-tight space-y-1">
            <p className="text-slate-950 font-bold text-base md:text-lg">
              I&apos;m a Technical Writer.
            </p>
            <p className="text-[#4338CA] font-bold text-base md:text-lg">
              I learn by building.
            </p>
            <p className="text-slate-500 font-medium pt-1">
              From tech to korean, I turn things I don&apos;t understand into projects I can explore.
            </p>
            <p className="text-slate-400 font-normal">
              This website is my playground for experiments, learning notes, and everything I&apos;m curious about.
            </p>
          </div>

        </section>

        {/* Selected Projects */}
        <section>

          <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mb-4 select-none">
            Selected Projects
          </h2>

          {/* 保持您原本的網格，加入 group 類別以觸發細緻的蘋果級 Hover 聯動 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">

            {/* Semiconductor */}
            <Link href="/semiconductor" className="group">
              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div>

                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-105 origin-left">
                    🖥️
                  </div>

                  {/* 蘋果級 Hover：滑鼠移入時標題會優雅變色 */}
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#4338CA]">
                    Semiconductor Notes
                  </h3>

                  <p className="text-base leading-[1.7] text-slate-500 mt-2">
                    Semiconductor basics, technical concepts, and learning notes.
                  </p>

                </div>
              </Card>
            </Link>

            {/* Korean */}
            <Link href="/korean" className="group">
              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div>

                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-105 origin-left">
                    📓
                  </div>

                  {/* 蘋果級 Hover：滑鼠移入時標題會優雅變色 */}
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#4338CA]">
                    Korean Vocabulary
                  </h3>

                  <p className="text-base leading-[1.7] text-slate-500 mt-2">
                    Flashcards, quizzes, pronunciation, and categorized Korean vocabulary study sets.
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
