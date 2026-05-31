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

        {/* Back */}

        <Link
          href="/korean"
          className="
            inline-flex items-center justify-center
            w-11 h-11 rounded-full
            bg-white border border-slate-200/60 text-slate-600
            hover:text-[#4338CA] hover:border-indigo-100
            hover:scale-105
            hover:shadow-[0_12px_24px_-8px_rgba(67,56,202,0.15)]
            transition-all duration-500 ease-out
            mb-7
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

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

        {/* Tabs - 書籤美感升級、往上移、加上手手 */}

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >

          <TabsList className="inline-flex h-11 rounded-xl bg-slate-100/80 backdrop-blur-sm p-1 mb-5 border border-slate-200/20 shadow-sm">

            <TabsTrigger
              value="list"
              className="rounded-lg gap-1.5 text-sm px-4 font-medium transition-all cursor-pointer select-none text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#4338CA] data-[state=active]:shadow-sm"
            >
              <List className="h-4 w-4" />
              List
            </TabsTrigger>

            <TabsTrigger
              value="flashcards"
              className="rounded-lg gap-1.5 text-sm px-4 font-medium transition-all cursor-pointer select-none text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#4338CA] data-[state=active]:shadow-sm"
            >
              <BookOpen className="h-4 w-4" />
              Flashcards
            </TabsTrigger>

            <TabsTrigger
              value="quiz"
              className="rounded-lg gap-1.5 text-sm px-4 font-medium transition-all cursor-pointer select-none text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#4338CA] data-[state=active]:shadow-sm"
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
