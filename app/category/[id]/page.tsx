"use client"

import { useState, use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List, BookOpen, Brain } from "lucide-react"
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
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* Back */}

        <Link
          href="/korean"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-8"
        >
          ← Back to Categories
        </Link>

        {/* Header */}

        <header className="mb-10">

          <div className="flex items-center gap-4 mb-4">

            <div className="text-5xl">
              {category.icon}
            </div>

            <div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {category.name}
              </h1>

              <p className="text-lg text-slate-500 mt-1">
                {category.nameKorean}
              </p>

            </div>

          </div>

          <div>
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              📚 {category.words.length} Words
            </span>
          </div>

        </header>

        {/* Tabs */}

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >

          <TabsList className="inline-flex h-11 rounded-xl bg-slate-100 p-1 mb-8">

            <TabsTrigger
              value="list"
              className="rounded-lg gap-1.5 text-sm px-4"
            >
              <List className="h-4 w-4" />
              List
            </TabsTrigger>

            <TabsTrigger
              value="flashcards"
              className="rounded-lg gap-1.5 text-sm px-4"
            >
              <BookOpen className="h-4 w-4" />
              Flashcards
            </TabsTrigger>

            <TabsTrigger
              value="quiz"
              className="rounded-lg gap-1.5 text-sm px-4"
            >
              <Brain className="h-4 w-4" />
              Quiz
            </TabsTrigger>

          </TabsList>

          <TabsContent value="list" className="mt-0">

            <VocabularyList words={category.words} />

          </TabsContent>

          <TabsContent value="flashcards" className="mt-0">

            <div className="max-w-md mx-auto">

              <Flashcard words={category.words} />

            </div>

          </TabsContent>

          <TabsContent value="quiz" className="mt-0">

            <div className="max-w-md mx-auto">

              <Quiz words={category.words} />

            </div>

          </TabsContent>

        </Tabs>

      </div>

    </main>
  )
}