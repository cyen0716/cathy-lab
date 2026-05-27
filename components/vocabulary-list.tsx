"use client"

import { VocabWord } from "@/lib/vocabulary-data"

interface VocabularyListProps {
  words: VocabWord[]
}

export function VocabularyList({ words }: VocabularyListProps) {
  if (words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <p>沒有找到相關單字</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {words.map((word, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border/50 transition-all hover:shadow-md active:scale-[0.98]"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-semibold text-foreground">{word.korean}</span>
            <span className="text-sm text-muted-foreground">{word.romanization}</span>
          </div>
          <span className="text-base text-foreground/80">{word.chinese}</span>
        </div>
      ))}
    </div>
  )
}
