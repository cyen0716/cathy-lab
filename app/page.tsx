"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">

      <div className="max-w-7xl mx-auto px-10 py-14">

        {/* Navbar */}
        <nav className="flex items-center justify-between mb-20">

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
        <section className="grid grid-cols-2 gap-12 items-center mb-24">

          {/* Left */}
          <div>

            <h1 className="text-[96px] leading-[0.9] font-serif font-bold text-slate-900">

              Hi,
              <br />

              I’m <span className="text-[#E86C5D]">Cathy.</span>

            </h1>

            <p className="text-xl text-slate-500 font-medium mt-8 tracking-wide">
              Frontend • AI • Korean • Semiconductor
            </p>

            <p className="text-lg text-slate-400 mt-8 leading-relaxed max-w-xl">
              Exploring technology, design, AI, networking,
              and language learning.
            </p>

            <Link href="#projects">

              <button className="mt-10 bg-[#E86C5D] hover:bg-[#db5c4c] transition-colors text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-sm">

                Explore My Projects →

              </button>

            </Link>

          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            <div className="w-[520px] h-[520px] rounded-full bg-[#EFE8DF] absolute top-0" />

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="profile"
              className="relative z-10 w-[430px] object-cover rounded-3xl"
            />

          </div>

        </section>

        {/* Projects */}
        <section id="projects">

          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-10">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-8">

            {/* Korean */}
            <Link href="/korean">

              <Card className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[220px]">

                <div className="flex flex-col h-full">

                  <div className="text-5xl mb-5">
                    🐰
                  </div>

                  <h3 className="text-3xl font-serif font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-slate-500 mt-4 leading-relaxed">
                    Korean vocabulary learning app with flashcards,
                    quizzes, pronunciation, and categorized study sets.
                  </p>

                  <div className="flex gap-3 mt-auto pt-6 text-sm text-slate-400">

                    <span>Next.js</span>
                    <span>Tailwind</span>
                    <span>Vercel</span>

                  </div>

                </div>

              </Card>

            </Link>

            {/* Semiconductor */}
            <Link href="/semiconductor">

              <Card className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-[220px]">

                <div className="flex flex-col h-full">

                  <div className="text-5xl mb-5">
                    ⚡
                  </div>

                  <h3 className="text-3xl font-serif font-bold text-slate-900">
                    Semiconductor & AI
                  </h3>

                  <p className="text-slate-500 mt-4 leading-relaxed">
                    Notes and explorations about semiconductor,
                    networking technology, AI trends, and cybersecurity.
                  </p>

                  <div className="flex gap-3 mt-auto pt-6 text-sm text-slate-400">

                    <span>AI</span>
                    <span>Networking</span>
                    <span>Semiconductor</span>

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