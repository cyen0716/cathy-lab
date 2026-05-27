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
      <div className="max-w-md mx-auto px-4 py-6 pb-20">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">韓語單字本</h1>
          <p className="text-sm text-muted-foreground">Korean Vocabulary</p>
        </header>

        {/* Search */}
        <div className="mb-6">
          <SearchBar onSearchResults={setSearchResults} onSearchQuery={setSearchQuery} />
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-sm font-medium text-muted-foreground mb-3">
              搜尋結果 ({searchResults.length})
            </h2>
            {searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.slice(0, 10).map((word, index) => (
                  <Card key={index} className="p-3 border-0 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{word.korean}</span>
                      <span className="text-muted-foreground">{word.chinese}</span>
                    </div>
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
            <h2 className="text-sm font-medium text-muted-foreground mb-3">主題分類</h2>
            <div className="grid grid-cols-2 gap-3">
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
