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
    }, 250) // 縮短動畫延時，讓反饋更俐落
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
            py-3
            px-4
            border
            cursor-pointer
            transition-all
            duration-200
            ease-out
            
            ${
              activeIndex === index
                ? "border-indigo-600 bg-indigo-50/30 scale-[0.98] shadow-sm"
                : "border-slate-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:border-indigo-200 hover:shadow-[0_10px_20px_-5px_rgba(67,56,202,0.08)] hover:-translate-y-0.5"
            }
          `}
        >
          {/* 左側：單字與翻譯（水平排列或緊湊垂直） */}
          <div className="flex flex-col items-start gap-0.5 select-none pr-6">
            <span className="text-lg font-semibold text-slate-800 tracking-wide font-sans">
              {word.korean}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {word.chinese}
            </span>
          </div>

          {/* 右側：發音按鈕（融入卡片設計，不再突兀） */}
          <div 
            className={`
              absolute
              right-3
              p-1.5
              rounded-lg
              transition-colors
              duration-150
              ${
                activeIndex === index 
                  ? "text-indigo-600 bg-indigo-100/60" 
                  : "text-slate-400 group-hover:text-indigo-500 group-hover:bg-slate-50"
              }
            `}
          >
            <Volume2 className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  )
}
