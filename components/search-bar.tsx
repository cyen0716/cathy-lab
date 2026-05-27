"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { searchVocabulary, type VocabWord } from "@/lib/vocabulary-data"

interface SearchBarProps {
  onSearchResults: (results: VocabWord[]) => void
  onSearchQuery: (query: string) => void
}

export function SearchBar({ onSearchResults, onSearchQuery }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearchQuery(value)
    const results = searchVocabulary(value)
    onSearchResults(results)
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="搜尋韓文或中文..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 h-12 rounded-2xl bg-card border-border text-base"
      />
    </div>
  )
}
