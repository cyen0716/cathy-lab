"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        
        {/* Logo / Nav */}
        <nav className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold select-none">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section */}
        <section className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
            Hi,
            <br />
            I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          <div className="mt-6 max-w-2xl space-y-4 text-[15px] md:text-base leading-relaxed text-slate-600">
            <p className="text-slate-900 font-medium text-base md:text-lg flex items-center gap-2">
              I&apos;m a Technical Writer.
            </p>
            <p className="text-[#4338CA] font-semibold tracking-wide">
              I learn by building.
            </p>
            <p>
              From tech to Korean, I turn things I don&apos;t understand into projects I can explore.
            </p>
            <p>
              This website is my playground for experiments, learning notes, and everything I&apos;m curious about.
            </p>
          </div>
        </section>

        {/* Selected Projects */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-slate-400 mb-6 select-none">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
            
            {/* Semiconductor */}
            <Link href="/semiconductor" className="group">
              <Card className="p-6 h-full min-h-[180px] rounded-3xl border border-slate-100 bg-white shadow-[0_4px_12px_-4px_rgba(15,23,42,0.02)] group-hover:shadow-[0_20px_40px_-15px_rgba(67,56,202,0.08)] group-hover:border-indigo-200 group-hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
                    🖥️
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#4338CA]">
                    Semiconductor Notes
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-slate-500 mt-2">
                    Semiconductor basics, technical concepts, and learning notes.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Korean */}
            <Link href="/korean" className="group">
              <Card className="p-6 h-full min-h-[180px] rounded-3xl border border-slate-100 bg-white shadow-[0_4px_12px_-4px_rgba(15,23,42,0.02)] group-hover:shadow-[0_20px_40px_-15px_rgba(67,56,202,0.08)] group-hover:border-indigo-200 group-hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
                    📓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#4338CA]">
                    Korean Vocabulary
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-slate-500 mt-2">
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
