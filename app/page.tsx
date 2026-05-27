"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <header className="mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
              <span className="text-2xl">📘</span>
            </div>

            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">
              CATHY HANGUL
            </p>
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            韓語單字本
          </h1>

          <p className="text-2xl font-semibold text-slate-600 mt-2">
            Korean Vocabulary
          </p>
        </header>

        <div className="grid grid-cols-6 gap-5">
          {vocabularyData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </main>
  )
}