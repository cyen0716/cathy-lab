"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400 mb-3">
            Cathy Hangul
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            韓語單字本
          </h1>

          <p className="text-2xl font-semibold text-slate-600 mt-2">
            Korean Vocabulary
          </p>
        </header>

        {/* Categories */}
        <div className="grid grid-cols-5 gap-5">
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