"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import type { VocabWord } from "@/lib/vocabulary-data"

interface FlashcardProps {
  words: VocabWord[]
}

export function Flashcard({ words }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentWord = words[currentIndex]

  const handlePrevious = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev === 0 ? words.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1))
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress indicator */}
      <div className="text-sm font-medium text-slate-400 select-none">
        {currentIndex + 1} / {words.length}
      </div>

      {/* Flashcard */}
      <div className="w-full perspective-1000">
        <Card
          onClick={handleFlip}
          className="relative w-full aspect-[3/2] cursor-pointer transition-transform duration-500 border-0 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)]"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Korean (正面：乾淨白底，與單字列表呼應) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-4xl md:text-5xl font-bold text-slate-800 mb-3 tracking-wide font-sans">
              {currentWord.korean}
            </span>
            <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
              點擊翻轉
            </span>
          </div>

          {/* Back - Chinese (背面：改為精緻的靛藍藍色系漸層) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#4338CA] to-[#6366F1] rounded-2xl"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
              {currentWord.chinese}
            </span>
            <span className="text-xs font-medium text-indigo-200/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              點擊翻轉
            </span>
          </div>
        </Card>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          className="h-12 w-12 rounded-full cursor-pointer border-slate-200 text-slate-600 hover:text-[#4338CA] hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setIsFlipped(false)
            setCurrentIndex(0)
          }}
          className="h-10 w-10 rounded-full cursor-pointer border-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="h-12 w-12 rounded-full cursor-pointer border-slate-200 text-slate-600 hover:text-[#4338CA] hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
