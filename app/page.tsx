"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Header */}
        <header className="mb-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-teal-600 mb-4">
              Personal Learning Platform
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
              Korean Vocabulary
            </h1>

            <p className="text-2xl lg:text-3xl text-slate-500 mt-4">
              韓語單字本
            </p>

            <p className="text-lg text-slate-600 mt-8 leading-relaxed max-w-2xl">
              Build your own organized Korean vocabulary collection with categorized study sets,
              flashcards, pronunciation playback, and quizzes.
            </p>
          </div>
        </header>

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-semibold text-slate-900">
              主題分類
            </h2>

            <span className="text-slate-500 text-sm">
              {vocabularyData.length} 個分類
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {vocabularyData.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}