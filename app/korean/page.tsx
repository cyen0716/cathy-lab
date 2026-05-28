"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function KoreanPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* Header */}
        <header className="mb-14">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400 mb-4">
            Korean Project
          </p>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            韓語單字本
          </h1>

          <p className="text-xl font-semibold text-slate-500 mt-3">
            Korean Vocabulary
          </p>

          <p className="text-base text-slate-400 mt-6">
            오늘은 어떤 단어를 배울까? ✨
          </p>

        </header>

        {/* Categories */}
        <div className="grid grid-cols-5 gap-6">

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