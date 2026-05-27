"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
            Personal Learning Platform
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Korean Vocabulary
          </h1>

          <p className="text-lg text-slate-500 mt-2">
            韓語單字本
          </p>
        </header>

        {/* Categories */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-slate-900">
            主題分類
          </h2>

          <span className="text-sm text-slate-400">
            {vocabularyData.length} 個分類
          </span>
        </div>

        <div className="grid grid-cols-6 gap-5">
          {vocabularyData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  )
}