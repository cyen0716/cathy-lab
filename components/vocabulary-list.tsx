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
      <div className="flex flex-col items-center justify-center py-16 text-slate-400">
        <p className="text-sm tracking-wide">沒有找到相關單字</p>
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-1">
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
            py-4
            pl-5
            pr-12
            border
            cursor-pointer
            transition-all
            duration-200
            ease-out
            
            ${
              activeIndex === index
                ? "border-indigo-600 bg-indigo-50/30 scale-[0.98] shadow-sm"
                : "border-slate-100 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] hover:border-indigo-200 hover:shadow-[0_12px_24px_-6px_rgba(67,56,202,0.08)] hover:-translate-y-0.5"
            }
          `}
        >
          {/* 左側：大字級單字區，靠左對齊更好閱讀 */}
          <div className="flex flex-col items-start gap-1 select-none">
            <span className="text-2xl font-bold text-slate-800 tracking-wide leading-none">
              {word.korean}
            </span>
            <span className="text-sm font-medium text-slate-500 mt-0.5">
              {word.chinese}
            </span>
          </div>

          {/* 右側：精緻的發音圖示 */}
          <div 
            className={`
              absolute
              right-4
              p-1.5
              rounded-lg
              transition-all
              duration-150
              ${
                activeIndex === index 
                  ? "text-indigo-600 bg-indigo-100/60 scale-95" 
                  : "text-slate-400 group-hover:text-indigo-500 group-hover:bg-slate-50"
              }
            `}
          >
            <Volume2 className="w-4.5 h-4.5" />
          </div>
        </div>
      ))}
    </div>
  )
}
