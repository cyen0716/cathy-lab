"use client"

import { BookOpen, FolderOpen } from "lucide-react"
import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"
import { SiteNav } from "@/components/site-nav"

export default function KoreanPage() {
  const totalWords = vocabularyData.reduce(
    (sum, category) => sum + category.words.length,
    0
  )

  return (
    <main className="min-h-screen bg-zinc-50 antialiased">
      {/* 導覽列：與其他 Layout 完全同步 */}
      <header className="bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-6 h-16 flex items-center">
          <SiteNav />
        </div>
      </header>

      {/* 主要內容區 */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header 區塊：調整對齊與寬度以匹配 Layout */}
        <header className="mb-14 max-w-4xl">
          <h1 className="text-3xl font-bold text-zinc-950 leading-tight mb-6">
            Korean Vocabulary
          </h1>
          <p className="text-base font-normal text-zinc-700 leading-relaxed tracking-normal">
            A growing collection of Korean words I&apos;m learning and exploring.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 select-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-100 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <BookOpen strokeWidth={1.4} size={15} className="text-zinc-400" />
              <span className="text-sm font-medium text-zinc-700">{totalWords} Words</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-100 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <FolderOpen strokeWidth={1.4} size={15} className="text-zinc-400" />
              <span className="text-sm font-medium text-zinc-700">{vocabularyData.length} Categories</span>
            </div>
          </div>
        </header>

        {/* Grid 區塊 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
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