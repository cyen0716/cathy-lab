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
    const query = searchQuery.toLowerCase()
    return category.words.filter(
      (word) =>
        word.korean.includes(searchQuery) ||
        word.chinese.includes(searchQuery) ||
        word.romanization.toLowerCase().includes(query)
    )
  }, [category.words, searchQuery])

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <header className="flex items-center gap-3 mb-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h1 className="text-lg font-bold text-foreground">{category.name}</h1>
              <p className="text-xs text-muted-foreground">{category.nameKorean} · {category.words.length} 個單字</p>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜尋單字..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl bg-muted/50 border-0 h-11"
          />
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 h-11 rounded-xl bg-muted/50">
            <TabsTrigger value="list" className="rounded-lg gap-1.5 text-sm">
              <List className="h-4 w-4" />
              列表
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="rounded-lg gap-1.5 text-sm">
              <BookOpen className="h-4 w-4" />
              單字卡
            </TabsTrigger>
            <TabsTrigger value="quiz" className="rounded-lg gap-1.5 text-sm">
              <Brain className="h-4 w-4" />
              測驗
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0">
            <VocabularyList words={filteredWords} />
          </TabsContent>

          <TabsContent value="flashcards" className="mt-0">
            <Flashcard words={filteredWords.length > 0 ? filteredWords : category.words} />
          </TabsContent>

          <TabsContent value="quiz" className="mt-0">
            <Quiz words={filteredWords.length > 0 ? filteredWords : category.words} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
