"use client"

import { useState } from "react"
import { SearchBar } from "@/components/search-bar"
import { CategoryCard } from "@/components/category-card"
import { Card } from "@/components/ui/card"
import { vocabularyData, type VocabWord } from "@/lib/vocabulary-data"

export default function HomePage() {
  const [searchResults, setSearchResults] = useState<VocabWord[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">韓語單字本</h1>
          <p className="text-sm text-muted-foreground mt-1">Korean Vocabulary</p>
        </header>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <SearchBar onSearchResults={setSearchResults} onSearchQuery={setSearchQuery} />
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-muted-foreground mb-4">
              搜尋結果 ({searchResults.length})
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {searchResults.slice(0, 20).map((word, index) => (
                  <Card key={index} className="p-4 border-0 shadow-sm flex flex-col items-center justify-center min-h-[88px]">
                    <span className="font-semibold text-lg text-center">{word.korean}</span>
                    <span className="text-sm text-muted-foreground mt-1 text-center">{word.chinese}</span>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-6 text-center border-0 shadow-sm">
                <p className="text-muted-foreground">找不到相關單字</p>
              </Card>
            )}
          </div>
        )}

        {/* Categories */}
        {!searchQuery && (
          <>
            <h2 className="text-sm font-medium text-muted-foreground mb-4">主題分類</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {vocabularyData.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
