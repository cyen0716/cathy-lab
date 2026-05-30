"use client"

import { useState } from "react"
import { Volume2 } from "lucide-react"
import { VocabWord } from "@/lib/vocabulary-data"
import { speakKorean } from "@/lib/speech"

interface VocabularyListProps {
  words: VocabWord[]
}

export function VocabularyList({ words }: VocabularyListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500">
        <p>沒有找到相關單字</p>
      </div>
    )
  }

  const handleSpeak = (korean: string, index: number) => {
    setActiveIndex(index)
    speakKorean(korean)
    setTimeout(() => {
      setActiveIndex(null)
    }, 250)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {words.map((word, index) => (
        <div
          key={index}
          onClick={() => handleSpeak(word.korean, index)}
          className={`
            group
            relative
            flex
            items-center
            justify-between
            rounded-xl
            bg-white
            p-5
            border
            cursor-pointer
            transition-all
            duration-200
            
            ${
              activeIndex === index
                ? "border-indigo-600 bg-indigo-50/50 scale-95 shadow"
                : "border-slate-200 hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5"
            }
          `}
        >
          {/* 左側文字區：上下緊湊，靠左對齊釋放水平空間，字級放大 */}
          <div className="flex flex-col items-start select-none pr-8">
            <span className="text-2xl font-bold text-slate-900 tracking-wide leading-none">
              {word.korean}
            </span>
            <span className="text-sm text-slate-500 mt-2 font-medium">
              {word.chinese}
            </span>
          </div>

          {/* 右側喇叭：作為視覺提示，不再孤零零懸空 */}
          <div
            className={`
              absolute
              right-4
              p-1.5
              rounded-lg
              transition-colors
              ${
                activeIndex === index
                  ? "text-indigo-600"
                  : "text-slate-400 group-hover:text-indigo-500"
              }
            `}
          >
            <Volume2 className="w-5 h-5" />
          </div>
        </div>
      ))}
    </div>
  )
}
