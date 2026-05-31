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
        <section className="max-w-5xl mb-14">

          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-10">
            Hi, I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          <div className="mt-6 max-w-3xl">

  <p className="text-lg font-bold leading-[1.6] text-slate-700">
    I&apos;m a Technical Writer who learns by building.
  </p>

  <p className="mt-2 text-base leading-[1.6] text-slate-500">
    From Korean to semiconductors,
    I turn things I don&apos;t understand into projects I can explore.
  </p>

  <p className="mt-2 text-base leading-[1.6] text-slate-500">
    This website is my playground for experiments,
    learning notes, and curious side projects.
  </p>

</div>

        </section>

        {/* Selected Projects */}
        <section>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mt-6">

            {/* Semiconductor */}
            <Link href="/semiconductor">
              <Card className="p-8 min-h-[200px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
                <div>

                  <div className="text-4xl mb-4">
                    🖥️
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Semiconductor Notes
                  </h3>

                  <p className="text-base leading-[1.7] text-slate-500 mt-2">
                    Semiconductor basics,
                    technical concepts, and learning notes.
                  </p>

                </div>
              </Card>
            </Link>

            {/* Korean */}
            <Link href="/korean">
              <Card className="p-8 min-h-[200px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
                <div>

                  <div className="text-4xl mb-4">
                    📓
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-base leading-[1.7] text-slate-500 mt-2">
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
