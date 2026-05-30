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

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>返回</span>
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {category.title}
            </h1>
            <p className="text-slate-500">
              {category.subtitle}
            </p>
          </div>
          <span className="text-sm font-medium px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
            {category.words.length} 個單字
          </span>
        </div>

        <Tabs defaultValue="list" className="w-full" onValueChange={setActiveTab}>
          
          {/* 僅將 mb-8 改為 mb-6（往上移一點） */}
          <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
            
            {/* 僅加上 cursor-pointer */}
            <TabsTrigger value="list" className="flex items-center gap-2 cursor-pointer">
              <List className="w-4 h-4" />
              <span>單字列表</span>
            </TabsTrigger>
            
            {/* 僅加上 cursor-pointer */}
            <TabsTrigger value="flashcards" className="flex items-center gap-2 cursor-pointer">
              <BookOpen className="w-4 h-4" />
              <span>閃卡練習</span>
            </TabsTrigger>
            
            {/* 僅加上 cursor-pointer */}
            <TabsTrigger value="quiz" className="flex items-center gap-2 cursor-pointer">
              <Brain className="w-4 h-4" />
              <span>測驗挑戰</span>
            </TabsTrigger>
            
          </TabsList>

          <TabsContent value="list" className="mt-0">
            <VocabularyList words={category.words} />
          </TabsContent>

          <TabsContent value="flashcards" className="mt-0">
            <Flashcard words={category.words} />
          </TabsContent>

          <TabsContent value="quiz" className="mt-0">
            <Quiz words={category.words} />
          </TabsContent>
        </Tabs>
        
      </div>
    </main>
  )
}
