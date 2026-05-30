"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    /* 注入 Apple 官方字體庫，優先調用優雅細緻的 SF Pro 與 萍方體 */
    <main className="min-h-screen bg-[#FCFCFC] antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "PingFang TC", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* Logo / Nav */}
        <nav className="mb-10">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section */}
        <section className="max-w-4xl mb-14">

          {/* 蘋果官網經典：輕量、優雅、留白感十足的單行大標 */}
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-8">
            Hi, I’m <span className="font-semibold text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          {/* 舒適放鬆的行距與留白，拿掉所有沉重粗體，字體變細後畫面立刻有了空氣感 */}
          <div className="mt-6 max-w-3xl text-base leading-[1.75] text-slate-500 font-normal">
            <p>I&apos;m a Technical Writer.</p>
            <p className="text-[#4338CA] font-medium mt-3">I learn by building.</p>
            <p className="mt-3">From tech to korean, I turn things I don&apos;t understand into projects I can explore.</p>
            <p className="mt-3">This website is my playground for experiments, learning notes, and everything I&apos;m curious about.</p>
          </div>

        </section>

        {/* Selected Projects */}
        <section>

          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mt-6">

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
