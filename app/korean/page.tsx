"use client"

import Link from "next/link"
import { Sparkle, BookOpen, FolderOpen } from "lucide-react"
import { CategoryCard } from "@/components/category-card"
import { vocabularyData } from "@/lib/vocabulary-data"

export default function KoreanPage() {
  const totalWords = vocabularyData.reduce(
    (sum, category) => sum + category.words.length,
    0
  )

  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">
      {/* 💡 這裡的外層容器 px 與 py 設定，已經全部調整成跟首頁完全一致的 md:px-6 py-10 */}
      <div className="max-w-6xl mx-auto px-6 md:px-6 py-10">

        {/* 🍎 Logo 位置完美複製首頁：使用 mb-14 與 pt-2，確保絕對重合不抖動 */}
        <nav className="mb-14 pt-2 select-none">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <Sparkle 
              className="w-4 h-4 text-slate-400 transition-all duration-700 ease-out group-hover:text-slate-800 group-hover:rotate-12 group-active:scale-90" 
              strokeWidth={1.8} 
            />
            <span className="text-base font-semibold text-slate-900 tracking-[0.12em] font-sans">
              Cathy<span className="font-light text-slate-400 ml-0.5">Lab</span>
            </span>
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-14">

          {/* H1 — Page Title */}
          <h1 className="text-4xl font-bold text-slate-950 leading-tight mb-6">
            Korean Vocabulary
          </h1>

          {/* Body Text */}
          <p className="text-base font-normal text-slate-500/90 leading-relaxed tracking-normal max-w-2xl">
            A growing collection of Korean words I&apos;m learning and exploring.
          </p>

          {/* 統計標籤區塊 */}
          <div className="flex flex-wrap gap-3 mt-8 select-none">

            {/* Words 標籤 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100/80 text-slate-600 text-sm font-medium shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <BookOpen strokeWidth={1.4} size={15} className="text-slate-400" />
              <span className="text-slate-700">{totalWords} Words</span>
            </div>

            {/* Categories 標籤 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100/80 text-slate-600 text-sm font-medium shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
              <FolderOpen strokeWidth={1.4} size={15} className="text-slate-400" />
              <span className="text-slate-700">{vocabularyData.length} Categories</span>
            </div>

          </div>

        </header>

        {/* Grid 區塊 */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
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