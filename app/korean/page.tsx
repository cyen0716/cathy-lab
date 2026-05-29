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
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">

        {/* Back */}

        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            w-11
            h-11
            rounded-full
            bg-[#EEF2FF]
            text-[#4338CA]
            hover:bg-[#E0E7FF]
            hover:shadow-md
            hover:-translate-y-0.5
            transition-all
            duration-200
            mb-8
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

        {/* Header */}

        <header className="mb-12">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400 mb-4">
            Korean Project
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Korean Vocabulary
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mt-4 leading-relaxed max-w-2xl">
            Learn Korean through flashcards,
            quizzes, and categorized word sets.
          </p>

          {/* Stats */}

          <div className="flex flex-wrap gap-3 mt-8">

            <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              📚 {totalWords} Words
            </div>

            <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              📂 {vocabularyData.length} Categories
            </div>

            <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              🧠 Flashcards & Quiz
            </div>

          </div>

        </header>

        {/* Categories */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">

          {vocabularyData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </main>
  )
}