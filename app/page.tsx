"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7FFF2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-14 h-14 rounded-3xl bg-[#58CC02] flex items-center justify-center shadow-sm">
              <span className="text-2xl">📘</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#46A302] uppercase tracking-wide">
                Cathy Hangul
              </p>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            韓語單字本
          </h1>

          <p className="text-2xl lg:text-3xl font-semibold text-slate-700 mt-3">
            Korean Vocabulary
          </p>

          <p className="text-lg text-slate-500 mt-5">
            今天想學什麼？
          </p>
        </header>

        {/* Categories */}
        <div className="grid grid-cols-3 gap-6">
          {vocabularyData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  )
}