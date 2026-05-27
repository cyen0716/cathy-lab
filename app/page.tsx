"use client"

import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg">
              🇰🇷
            </div>
            <div>
              <p className="text-slate-400 text-sm tracking-wide uppercase">
                Personal Language Learning
              </p>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Korean Vocabulary
          </h1>

          <p className="text-xl lg:text-2xl text-slate-300 mt-4">
            韓語單字本
          </p>

          <p className="text-slate-500 mt-6 max-w-2xl text-lg leading-relaxed">
            Build your personal Korean vocabulary collection with categorized
            flashcards, vocabulary lists, and quizzes.
          </p>
        </header>

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              主題分類
            </h2>

            <span className="text-slate-400 text-sm">
              {vocabularyData.length} categories
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