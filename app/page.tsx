"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">

      <div className="max-w-7xl mx-auto px-10 py-10">

        {/* Navbar */}
        <nav className="flex items-center justify-between mb-12">

          <p className="text-sm tracking-[0.2em] uppercase text-slate-400 font-medium">
            Cathy Lab
          </p>

          <div className="flex items-center gap-10 text-sm text-slate-500 font-medium">

            <a href="#projects" className="hover:text-slate-900 transition-colors">
              Projects
            </a>

            <a href="/korean" className="hover:text-slate-900 transition-colors">
              Korean
            </a>

            <a href="/semiconductor" className="hover:text-slate-900 transition-colors">
              Semiconductor
            </a>

          </div>

        </nav>

        {/* Hero */}
        <section className="mb-16">

          <h1 className="text-[88px] leading-[0.9] font-serif font-bold text-slate-900">

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

        </section>

        {/* Projects */}
        <section id="projects">

          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-8">

            {/* Korean */}
            <Link href="/korean">

              <Card className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[200px]">

                <div className="flex flex-col h-full">

                  <div className="text-5xl mb-4">
                    🇰🇷
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Flashcards, quizzes, pronunciation, and categorized Korean vocabulary study sets.
                  </p>

                </div>

              </Card>

            </Link>

            {/* Semiconductor */}
            <Link href="/semiconductor">

              <Card className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[200px]">

                <div className="flex flex-col h-full">

                  <div className="text-5xl mb-4">
                    🖥️
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    Technology
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Networking, semiconductor and AI explorations.
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
