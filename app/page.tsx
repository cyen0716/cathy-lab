"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-10 py-10">

        {/* Navbar */}
        <nav className="mb-12">

          <p className="text-sm tracking-[0.2em] uppercase text-slate-400 font-medium">
            Cathy Lab
          </p>

        </nav>

        {/* Hero */}
        <section className="mb-14 max-w-4xl">

          <h1 className="text-[72px] leading-[0.92] font-bold text-slate-900">

            Hi,
            <br />

            I’m <span className="text-[#E86C5D]">Cathy.</span>

          </h1>

          <p className="text-xl text-slate-500 font-medium mt-6 tracking-wide">
            AI • Semiconductor • Korean
          </p>

          <p className="text-lg text-slate-400 mt-6 leading-relaxed max-w-2xl">
            Exploring technology, AI, networking,
            and language learning.
          </p>

          <p className="text-sm text-slate-400 mt-5">
            🐰 learning korean everyday
          </p>

        </section>

        {/* Projects */}
        <section id="projects">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-8">

            {/* Korean */}
            <Link href="/korean">

              <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-[#E86C5D] hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[180px]">

                <div className="flex flex-col h-full">

                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:translate-x-1">
                    🇰🇷
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Flashcards, quizzes, pronunciation,
                    and categorized Korean vocabulary study sets.
                  </p>

                </div>

              </Card>

            </Link>

            {/* Technology */}
            <Link href="/semiconductor">

              <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-[#E86C5D] hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[180px]">

                <div className="flex flex-col h-full">

                  <div className="text-4xl mb-3">
                    ⚡
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Technology
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Networking, semiconductor,
                    cybersecurity and AI explorations.
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