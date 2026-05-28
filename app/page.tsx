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

            <div className="w