"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">

        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-3xl bg-[#58CC02] flex items-center justify-center shadow-sm">
              <span className="text-2xl">📘</span>
            </div>

            <p className="text-sm font-semibold text-[#46A302] uppercase tracking-wide">
              CATHY HANGUL
            </p>
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            韓語單字本
          </h1>

          <p className="text-2xl font-semibold text-slate-700 mt-2">
            Korean Vocabulary
          </p>
        </header>

        {/* Categories */}
        <div className="grid grid-cols-6 gap-4">
          {vocabularyData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </main>
  )
}