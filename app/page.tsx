"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Hero */}
        <section className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 font-medium mb-5">
            Cathy Lab
          </p>

          <h1 className="text-6xl font-bold text-slate-900 leading-tight">
            Cathy Yen
          </h1>

          <p className="text-2xl text-slate-600 font-semibold mt-4">
            Frontend • AI • Semiconductor • Korean Learning
          </p>

          <p className="text-lg text-slate-400 mt-8 max-w-2xl leading-relaxed">
            Building projects between technology, language, and design.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-6">

            {/* Korean */}
            <Link href="/korean">
              <Card className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[260px]">
                <div className="flex flex-col h-full">

                  <div className="text-5xl mb-6">
                    🐰
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Korean Vocabulary App
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    A Korean vocabulary learning platform with flashcards,
                    quizzes, pronunciation playback, and categorized study sets.
                  </p>

                  <div className="mt-auto pt-6 text-sm text-slate-400">
                    Next.js • Tailwind • Vercel
                  </div>

                </div>
              </Card>
            </Link>

            {/* Semiconductor */}
            <Link href="/semiconductor">
              <Card className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[260px]">
                <div className="flex flex-col h-full">

                  <div className="text-5xl mb-6">
                    ⚡
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Semiconductor & AI
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Research notes, AI trends, semiconductor learning,
                    networking technology, and technical explorations.
                  </p>

                  <div className="mt-auto pt-6 text-sm text-slate-400">
                    AI • Networking • Semiconductor
                  </div>

                </div>
              </Card>
            </Link>

          </div>
        </section>

      </div>
    </main>
  )
}