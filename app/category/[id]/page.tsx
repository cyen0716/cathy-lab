"use client"

import { useState, use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, BookOpen, Brain } from "lucide-react"
import { vocabularyData } from "@/lib/vocabulary-data"
import { Flashcard } from "@/components/flashcard"
import { Quiz } from "@/components/quiz"

interface CategoryPageProps {
  params: Promise<{ id: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = use(params)
  const category = vocabularyData.find((c) => c.id === id)
  const [activeTab, setActiveTab] = useState("flashcards")

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <header className="flex items-center gap-3 mb-6">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category.icon}</span>
            <div>
              <h1 className="text-lg font-bold text-foreground">{category.name}</h1>
              <p className="text-xs text-muted-foreground">{category.nameKorean}</p>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 h-12 rounded-2xl">
            <TabsTrigger value="flashcards" className="rounded-xl gap-2">
              <BookOpen className="h-4 w-4" />
              單字卡
            </TabsTrigger>
            <TabsTrigger value="quiz" className="rounded-xl gap-2">
              <Brain className="h-4 w-4" />
              測驗
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flashcards">
            <Flashcard words={category.words} />
          </TabsContent>

          <TabsContent value="quiz">
            <Quiz words={category.words} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
