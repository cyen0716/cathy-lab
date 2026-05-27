"use client"

import { useState, use, useMemo } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, List, BookOpen, Brain, Search } from "lucide-react"
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
  const [searchQuery, setSearchQuery] = useState("")

  if (!category) {
    notFound()
  }

  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) return category.words
    return category.words.filter(
      (word) =>
        word.korean.includes(searchQuery) ||
        word.chinese.includes(searchQuery)
    )
  }, [category.words, searchQuery])

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        {/* Header */}
        <header className="mb-10">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 rounded-xl px-4 text-slate-600 hover:bg-slate-100"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              返回首頁
            </Button>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-3xl">
                {category.icon}
              </div>

              <div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                  {category.name}
                </h1>

                <p className="text-lg text-slate-500 mt-2">
                  {category.nameKorean}
                </p>

                <p className="text-sm text-slate-400 mt-4">
                  {category.words.length} 個單字
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="搜尋單字..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 rounded-2xl border-slate-200 bg-white shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm p-1">
            <TabsTrigger
              value="list"
              className="rounded-xl px-5 gap-2 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              <List className="h-4 w-4" />
              列表
            </TabsTrigger>

            <TabsTrigger
              value="flashcards"
              className="rounded-xl px-5 gap-2 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              <BookOpen className="h-4 w-4" />
              單字卡
            </TabsTrigger>

            <TabsTrigger
              value="quiz"
              className="rounded-xl px-5 gap-2 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              <Brain className="h-4 w-4" />
              測驗
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <VocabularyList words={filteredWords} />
          </TabsContent>

          <TabsContent value="flashcards">
            <div className="max-w-xl mx-auto">
              <Flashcard
                words={filteredWords.length > 0 ? filteredWords : category.words}
              />
            </div>
          </TabsContent>

          <TabsContent value="quiz">
            <div className="max-w-xl mx-auto">
              <Quiz
                words={filteredWords.length > 0 ? filteredWords : category.words}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}