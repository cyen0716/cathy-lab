"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List, BookOpen, Brain } from "lucide-react"
import { vocabularyData } from "@/lib/vocabulary-data"
import { VocabularyList } from "@/components/vocabulary-list"
import { Flashcard } from "@/components/flashcard"
import { Quiz } from "@/components/quiz"
import { SiteNav } from "@/components/site-nav"

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
    <main className="min-h-screen bg-zinc-50 antialiased">
      {/* 導覽列：與其他頁面完全同步 */}
      <header className="bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-6 h-16 flex items-center">
          <SiteNav />
        </div>
      </header>

      {/* 主要內容區 */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Header 區塊：與首頁風格一致的排版 */}
        <header className="mb-14 max-w-4xl">
          <h1 className="text-3xl font-bold text-zinc-950 leading-tight mb-2">
            {category.nameKorean}
          </h1>
          <p className="text-base font-normal text-zinc-600">
            {category.name}
          </p>
        </header>

        {/* Tabs 區域：採用 Apple 極簡風格 */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="inline-flex h-12 rounded-xl bg-white border border-zinc-100 p-1 mb-10 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
            <TabsTrigger
              value="list"
              className="rounded-lg gap-2 text-sm px-5 py-2 font-medium transition-all text-zinc-600 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-950"
            >
              <List className="h-4 w-4" />
              Words
            </TabsTrigger>
            <TabsTrigger
              value="flashcards"
              className="rounded-lg gap-2 text-sm px-5 py-2 font-medium transition-all text-zinc-600 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-950"
            >
              <BookOpen className="h-4 w-4" />
              Flashcards
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="rounded-lg gap-2 text-sm px-5 py-2 font-medium transition-all text-zinc-600 data-[state=active]:bg-zinc-100 data-[state=active]:text-zinc-950"
            >
              <Brain className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0 focus-visible:outline-none">
            <VocabularyList words={category.words} />
          </TabsContent>

          <TabsContent value="flashcards" className="mt-0 focus-visible:outline-none">
            <div className="max-w-xl mx-auto">
              <Flashcard words={category.words} />
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="mt-0 focus-visible:outline-none">
            <div className="max-w-xl mx-auto">
              <Quiz words={category.words} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}