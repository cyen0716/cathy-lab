"use client"

import { useState, use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  List,
  BookOpen,
  Brain,
  Sparkle, // 💡 修改：將 ChevronLeft 換成 Sparkle
} from "lucide-react"
import { vocabularyData } from "@/lib/vocabulary-data"
import { VocabularyList } from "@/components/vocabulary-list"
import { Flashcard } from "@/components/flashcard"
import { Quiz } from "@/components/quiz"

interface CategoryPageProps {
  params: Promise<{ id: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = use(params)

  const category = vocabularyData.find((c) => c.id === id)

  const [activeTab, setActiveTab] = useState("list")

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#FCFCFC] antialiased">
      {/* 💡 調整外層容器：px-6 md:px-6 py-10，與首頁、韓文主頁完全同步 */}
      <div className="max-w-6xl mx-auto px-6 md:px-6 py-10">

        {/* 🍎 Logo 位置完美複製首頁：使用 mb-14 與 pt-2，切換時絕對重合、原地無縫融合 */}
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

        {/* Header - 已刪除 Icon、xx Words，並將中韓文標題對調 */}
        <header className="mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-wide font-sans">
              {category.nameKorean}
            </h1>
            <p className="text-base font-medium text-slate-400 mt-1.5">
              {category.name}
            </p>
          </div>
        </header>

        {/* Tabs - 沒收化學紫，升級為 Apple 極簡灰階立體質感 */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="inline-flex h-11 rounded-xl bg-slate-100/80 backdrop-blur-sm p-1 mb-5 border border-slate-200/20 shadow-sm">
            <TabsTrigger
              value="list"
              className="rounded-lg gap-1.5 text-sm px-4 font-semibold transition-all cursor-pointer select-none text-slate-400 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_8px_rgba(15,23,42,0.05)]"
            >
              <List className="h-4 w-4" />
              Words
            </TabsTrigger>

            <TabsTrigger
              value="flashcards"
              className="rounded-lg gap-1.5 text-sm px-4 font-semibold transition-all cursor-pointer select-none text-slate-400 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_8px_rgba(15,23,42,0.05)]"
            >
              <BookOpen className="h-4 w-4" />
              Flashcards
            </TabsTrigger>

            <TabsTrigger
              value="quiz"
              className="rounded-lg gap-1.5 text-sm px-4 font-semibold transition-all cursor-pointer select-none text-slate-400 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-[0_2px_8px_rgba(15,23,42,0.05)]"
            >
              <Brain className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0 focus-visible:outline-none">
            <VocabularyList words={category.words} />
          </TabsContent>

          <TabsContent value="flashcards" className="mt-0 focus-visible:outline-none">
            <div className="max-w-md mx-auto">
              <Flashcard words={category.words} />
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="mt-0 focus-visible:outline-none">
            <div className="max-w-md mx-auto">
              <Quiz words={category.words} />
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </main>
  )
}