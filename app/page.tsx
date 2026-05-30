"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* Logo / Nav */}
        <nav className="mb-10">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mb-14">

          {/* 【放大】Hi, I'm Cathy 升級至 7xl 巨幕大標 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8">
            Hi, I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          {/* 徹底還原最原始的字體與色彩，僅縮小 mt 間距讓畫面不下滑 */}
          <div className="mt-6 max-w-3xl">

            <p className="text-lg leading-[1.7] text-slate-600">
              I&apos;m a Technical Writer. I learn by building.
            </p>

            <p className="mt-2 text-lg leading-[1.2] text-slate-600">
              From tech to korean, I turn things I don&apos;t understand
              into projects I can explore.
            </p>

            <p className="mt-2 text-lg leading-[1.2] text-slate-600">
              This website is my playground for experiments,
              learning notes, and everything I&apos;m curious about.
            </p>

          </div>

        </section>

        {/* Selected Projects */}
        <section>

          {/* 【放大】Selected Projects 標題放大至 2xl/3xl */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
            Selected Projects
          </h2>

          {/* 網格區塊 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mt-6">

            {/* Semiconductor */}
            <Link href="/semiconductor">
              {/* 【放大】卡片高度調高至 min-h-[200px] */}
              <Card className="p-8 min-h-[200px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
                <div>

                  {/* 完整保留原本的 Emoji */}
                  <div className="text-4xl mb-4">
                    🖥️
                  </div>

                  {/* 【放大】卡片標題放大至 text-2xl */}
                  <h3 className="text-2xl font-bold text-slate-900">
                    Semiconductor Notes
                  </h3>

                  {/* 【放大】卡片內文放大至 text-lg */}
                  <p className="text-lg leading-[1.7] text-slate-500 mt-2">
                    Semiconductor basics,
                    technical concepts, and learning notes.
                  </p>

                </div>
              </Card>
            </Link>

            {/* Korean */}
            <Link href="/korean">
              {/* 【放大】卡片高度調高至 min-h-[200px] */}
              <Card className="p-8 min-h-[200px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
                <div>

                  {/* 完整保留原本的 Emoji */}
                  <div className="text-4xl mb-4">
                    📓
                  </div>

                  {/* 【放大】卡片標題放大至 text-2xl */}
                  <h3 className="text-2xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  {/* 【放大】卡片內文放大至 text-lg */}
                  <p className="text-lg leading-[1.7] text-slate-500 mt-2">
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
