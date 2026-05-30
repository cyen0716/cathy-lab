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
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 md:py-8">
        
        {/* 原本的返回鍵樣式 */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>返回</span>
        </Link>

        {/* 標題區塊：移除了單字數量，並微調 mb 讓 Tabs 往上提 */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {category.title}
          </h1>
          <p className="text-slate-500">
            {category.subtitle}
          </p>
        </div>

        {/* Tabs 切換區塊 */}
        <Tabs defaultValue="list" className="w-full" onValueChange={setActiveTab}>
          
          {/* TabsList：加上 cursor-pointer 與精緻化調整 */}
          <TabsList className="inline-flex items-center justify-start p-1 bg-slate-100 rounded-xl mb-6 w-full sm:w-auto">
            
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
