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
      <div className="flex flex-col items-center justify-center py-12 text-slate-500">
        <p>沒有找到相關單字</p>
      </div>
    )
  }

  const handleSpeak = (korean: string) => {
    speakKorean(korean)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

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
            rounded-2xl
            bg-white
            p-5
            min-h-[120px]
            border
            border-slate-200
            shadow-sm
            cursor-pointer
            transition-all
            duration-200
            hover:shadow-lg
            hover:border-[#4338CA]
            hover:-translate-y-1
          "
        >

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleSpeak(word.korean)
            }}
            className="
              absolute
              top-3
              right-3
              p-1.5
              rounded-full
              text-slate-400
              hover:text-[#4338CA]
              hover:bg-slate-100
              active:scale-95
              transition-all
            "
            aria-label={`播放 ${word.korean} 發音`}
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <span className="text-2xl font-bold text-slate-900 text-center leading-tight">
            {word.korean}
          </span>

          <span className="text-base text-slate-500 mt-2 text-center">
            {word.chinese}
          </span>

        </div>

      ))}

    </div>
  )
}