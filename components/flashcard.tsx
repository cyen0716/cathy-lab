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
      <div className="text-sm text-muted-foreground">
        {currentIndex + 1} / {words.length}
      </div>

      {/* Flashcard */}
      <div className="w-full perspective-1000">
        <Card
          onClick={handleFlip}
          className="relative w-full aspect-[3/2] cursor-pointer transition-transform duration-500 border-0 shadow-lg"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Korean */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-card rounded-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-4xl font-bold text-foreground mb-2">{currentWord.korean}</span>
            <span className="text-sm text-muted-foreground">點擊翻轉</span>
          </div>

          {/* Back - Chinese + Romanization */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-primary rounded-xl"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="text-4xl font-bold text-primary-foreground mb-1">{currentWord.chinese}</span>
            <span className="text-base text-primary-foreground/80 mb-2">{currentWord.romanization}</span>
            <span className="text-sm text-primary-foreground/70">點擊翻轉</span>
          </div>
        </Card>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          className="h-12 w-12 rounded-full"
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
          className="h-10 w-10 rounded-full"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="h-12 w-12 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
