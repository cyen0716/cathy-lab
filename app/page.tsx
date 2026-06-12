"use client"

import Link from "next/link"
import { Cpu, BookOpen, Sparkles, Sparkle } from "lucide-react"


export default function HomePage() {
  return (
  <main className="min-h-screen bg-[#FCFCFC] antialiased">
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Logo */}
      <nav className="mb-14 pt-2 select-none">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <Sparkle
            className="w-4 h-4 text-slate-400 transition-all duration-700 ease-out group-hover:text-slate-800 group-hover:rotate-12"
            strokeWidth={1.8}
          />
          <span className="text-base font-semibold text-slate-900 tracking-[0.12em]">
            Cathy
            <span className="font-light text-slate-400 ml-0.5">
              Lab
            </span>
          </span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mb-20 mt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-950 leading-tight mb-10">
          Cathy Yen
        </h1>

        <div className="mt-8 max-w-3xl space-y-4">
          <p className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed">
            I&apos;m a Technical Writer who learns by building.
          </p>

          <p className="text-base text-slate-500 leading-relaxed">
            From Korean to semiconductors, I turn things I don&apos;t understand into projects I can explore.
          </p>

          <p className="text-base text-slate-500 leading-relaxed">
            This website is my playground for experiments, learning notes, and curious side projects.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Featured Work
        </h2>

        <div className="max-w-4xl">
          <Link
            href="/portfolio"
            className="group p-8 min-h-[220px] rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-500 block"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Technical Writing Portfolio
            </h3>

            <p className="text-base text-slate-500 leading-relaxed mt-3">
              Writing samples, documentation projects, and case studies.
            </p>
          </Link>
        </div>
      </section>

      {/* Learning Lab */}
      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Learning Lab
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

          <Link
            href="/semiconductor"
            className="group p-8 min-h-[180px] rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-500 block"
          >
            <h3 className="text-xl font-bold text-slate-900">
              Semiconductor
            </h3>

            <p className="text-base text-slate-500 leading-relaxed mt-3">
              Exploring how modern chips work.
            </p>
          </Link>

          <Link
            href="/korean"
            className="group p-8 min-h-[180px] rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-500 block"
          >
            <h3 className="text-xl font-bold text-slate-900">
              Korean
            </h3>

            <p className="text-base text-slate-500 leading-relaxed mt-3">
              Learning Korean, one word at a time.
            </p>
          </Link>

        </div>
      </section>

    </div>
  </main>
)}