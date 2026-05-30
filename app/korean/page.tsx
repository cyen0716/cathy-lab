"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function KoreanPage() {
  const totalWords = vocabularyData.reduce(
    (sum, category) => sum + category.words.length,
    0
  )

  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">
      {/* Container: max-w-2xl mx-auto px-6 py-10 */}
      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Back Button */}
        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            w-11 h-11 rounded-full
            bg-[#EEF2FF] text-[#4338CA]
            hover:bg-[#E0E7FF] hover:shadow-md hover:-translate-y-0.5
            transition-all duration-200
            mb-7
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

        {/* Navigation Pills (取代原有的雜亂統計樣式) */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <span className="px-4 py-2 rounded-full bg-[#EEF2FF] text-[#4338CA] text-sm font-medium">
            Vocabulary Overview
          </span>
          <Link
            href="/quiz"
            className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium hover:bg-slate-50 transition"
          >
            Practice Quiz
          </Link>
        </div>

        {/* Header Section */}
        <header>
          {/* Eyebrow / Category Label */}
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Korean Project
          </p>

          {/* H1 — Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
            Korean Vocabulary
          </h1>
        </header>

        {/* Section Layout Flow Wrapper */}
        <div className="space-y-10 text-base leading-[1.85] text-slate-500">
          
          {/* Intro Section */}
          <section className="space-y-3.5">
            <p>
              Mastering a new language requires a structured approach to memory. This platform breaks down complex language patterns into intuitive, bite-sized collections designed for immediate comprehension.
            </p>
            <p className="font-medium text-slate-900">
              Learn systematically through focused flashcards, targeted quiz sessions, and carefully categorized word sets.
            </p>
          </section>

          {/* Visual Anchor: Stats Grid (使用 White Content Card 規範) */}
          <section>
            {/* Two-Column Card Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <p className="text-slate-500 font-medium">Total Vocabulary</p>
                <p className="text-2xl my-3 text-[#4338CA]">↓</p>
                <p className="text-xl font-bold text-slate-900">{totalWords} Words</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <p className="text-slate-500 font-medium">Curated Collections</p>
                <p className="text-2xl my-3 text-[#4338CA]">↓</p>
                <p className="text-xl font-bold text-slate-900">{vocabularyData.length} Categories</p>
              </div>
            </div>
          </section>

          {/* Categories Core Section */}
          <section>
            {/* Section Divider with bottom margin */}
            <div className="border-t border-slate-200 mb-8" />
            
            {/* H2 — Section Heading */}
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Explore Word Sets
            </h2>
            
            <p className="mb-6">
              Select a category below to begin your study session. Each module is self-contained and focuses on a single thematic domain.
            </p>

            {/* Grid Diagram Layout: 在寬螢幕從 5 欄改為符合工程美學的 2 欄，保持窄欄位版型 */}
            <div className="grid md:grid-cols-2 gap-4">
              {vocabularyData.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                />
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
