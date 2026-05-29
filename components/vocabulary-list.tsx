"use client"

import { Volume2 } from "lucide-react"
import { VocabWord } from "@/lib/vocabulary-data"
import { speakKorean } from "@/lib/speech"

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

  const handleSpeak = (korean: string) => {
    speakKorean(korean)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">

      {words.map((word, index) => (

        <div
          key={index}
          onClick={() => handleSpeak(word.korean)}
          className="
            group
            relative
            flex
            flex-col
            items-center
            justify-center
            rounded-xl
            bg-card
            p-4
            shadow-sm
            border
            border-border/50
            transition-all
            hover:shadow-md
            hover:border-primary/30
            hover:-translate-y-0.5
            min-h-[88px]
            cursor-pointer
          "
        >

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleSpeak(word.korean)
            }}
            className="
              absolute
              top-2
              right-2
              p-1
              rounded-full
              text-muted-foreground/40
              hover:text-primary
              hover:bg-primary/10
              active:scale-95
              transition-all
            "
            aria-label={`播放 ${word.korean} 發音`}
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>

          <span className="text-lg font-semibold text-foreground text-center leading-tight">
            {word.korean}
          </span>

          <span className="text-sm text-muted-foreground mt-1 text-center">
            {word.chinese}
          </span>

        </div>

      ))}

    </div>
  )
}