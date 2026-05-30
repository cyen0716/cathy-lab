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
    }, 200) // 動態微調至 200ms，卡片下壓反饋更俐落敏捷
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
            rounded-2xl
            bg-white
            py-4.5
            pl-5
            pr-14
            border
            cursor-pointer
            transition-all
            duration-200
            ease-out
            
            ${
              activeIndex === index
                ? "border-indigo-600 bg-indigo-50/40 scale-[0.97] shadow-sm"
                : "border-slate-100/80 shadow-[0_4px_12px_-4px_rgba(15,23,42,0.03)] hover:border-indigo-200/80 hover:bg-gradient-to-tr hover:from-white hover:to-indigo-50/10 hover:shadow-[0_12px_24px_-8px_rgba(67,56,202,0.08)] hover:-translate-y-0.5"
            }
          `}
        >
          {/* 左側：中韓文字級層級微調，拉開對比 */}
          <div className="flex flex-col items-start gap-1 select-none">
            <span className="text-2xl font-bold text-slate-800 tracking-wide leading-none font-sans">
              {word.korean}
            </span>
            <span className="text-[13px] font-medium text-slate-400 mt-1 transition-colors group-hover:text-slate-500">
              {word.chinese}
            </span>
          </div>

          {/* 右側：發音按鈕改為「聯動式」淡入淡出，質感極佳 */}
          <div 
            className={`
              absolute
              right-4
              p-2
              rounded-xl
              transition-all
              duration-200
              ${
                activeIndex === index 
                  ? "text-indigo-600 bg-indigo-100/80 scale-90" 
                  : "text-slate-300 opacity-60 group-hover:opacity-100 group-hover:text-indigo-500 group-hover:bg-indigo-50/50 group-hover:scale-105"
              }
            `}
          >
            <Volume2 className="w-4.5 h-4.5" style={{ width: '18px', height: '18px' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
