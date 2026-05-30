"use client"

import { useState, use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  List,
  BookOpen,
  Brain,
  ChevronLeft,
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
    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
        
        {/* 頂部導航與標題區塊：優化結構，緊湊排版 */}
        <div className="flex flex-col gap-3 mb-6">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors w-fit cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>返回首頁</span>
          </Link>
          
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              {category.title}
            </h1>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full">
              {category.words.length} 個單字
            </span>
          </div>
        </div>

        {/* Tabs 切換區塊 */}
        <Tabs defaultValue="list" className="w-full" onValueChange={setActiveTab}>
          {/* TabsList：加上緊湊外觀與精緻背景 */}
          <TabsList className="inline-flex items-center justify-start p-1 bg-slate-100/80 backdrop-blur-sm rounded-xl border border-slate-200/40 mb-6 w-full sm:w-auto">
            
            <TabsTrigger
              value="list"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 rounded-lg transition-all cursor-pointer select-none data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm"
            >
              <List className="w-4 h-4" />
              <span>單字列表</span>
            </TabsTrigger>

            <TabsTrigger
              value="flashcards"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 rounded-lg transition-all cursor-pointer select-none data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>閃卡練習</span>
            </TabsTrigger>

            <TabsTrigger
              value="quiz"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 rounded-lg transition-all cursor-pointer select-none data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm"
            >
              <Brain className="w-4 h-4" />
              <span>測驗挑戰</span>
            </TabsTrigger>
            
          </TabsList>

          {/* 內容區塊 */}
          <TabsContent value="list" className="mt-0 focus-visible:outline-none">
            <VocabularyList words={category.words} />
          </TabsContent>

          <TabsContent value="flashcards" className="mt-0 focus-visible:outline-none">
            <Flashcard words={category.words} />
          </TabsContent>

          <TabsContent value="quiz" className="mt-0 focus-visible:outline-none">
            <Quiz words={category.words} />
          </TabsContent>
        </Tabs>
        
      </div>
    </main>
  )
}
