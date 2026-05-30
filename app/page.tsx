"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-12">

        {/* Logo / Nav - 縮減底邊距 */}
        <nav className="mb-6 md:mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section - 縮減底邊距，讓內容更緊湊 */}
        <section className="max-w-4xl mb-8 md:mb-10">

          {/* 拿掉 <br /> 改為單行排列，大幅減少垂直高度，保留您愛的漸層字體 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Hi, I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          {/* 整合內文段落，改用緊湊而流暢的間距 */}
          <div className="max-w-3xl text-base leading-[1.6] text-slate-500 space-y-2.5">
            <p className="text-slate-900 font-medium">
              I&apos;m a Technical Writer. <span className="text-[#4338CA] font-semibold ml-1">I learn by building.</span>
            </p>
            <p>
              From tech to korean, I turn things I don&apos;t understand into projects I can explore.
            </p>
            <p>
              This website is my playground for experiments, learning notes, and everything I&apos;m curious about.
            </p>
          </div>

        </section>

        {/* Selected Projects */}
        <section>

          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Selected Projects
          </h2>

          {/* 保持您原本的網格與寬度，卡片完整保留所有自訂效果 */}
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
                    Semiconductor basics, technical concepts, and learning notes.
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
