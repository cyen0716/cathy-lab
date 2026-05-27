"use client"

import { useState, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react"
import type { VocabWord } from "@/lib/vocabulary-data"

interface QuizProps {
  words: VocabWord[]
}

interface QuizQuestion {
  word: VocabWord
  options: string[]
  correctIndex: number
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function generateQuestions(words: VocabWord[]): QuizQuestion[] {
  return shuffleArray(words).slice(0, Math.min(5, words.length)).map((word) => {
    const otherWords = words.filter((w) => w.korean !== word.korean)
    const wrongAnswers = shuffleArray(otherWords)
      .slice(0, 3)
      .map((w) => w.chinese)
    const options = shuffleArray([word.chinese, ...wrongAnswers])
    return {
      word,
      options,
      correctIndex: options.indexOf(word.chinese),
    }
  })
}

export function Quiz({ words }: QuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const initQuiz = useCallback(() => {
    setQuestions(generateQuestions(words))
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setIsComplete(false)
  }, [words])

  useEffect(() => {
    initQuiz()
  }, [initQuiz])

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)

    if (index === questions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
      } else {
        setIsComplete(true)
      }
    }, 1000)
  }

  if (questions.length === 0) {
    return <div className="text-center text-muted-foreground">載入中...</div>
  }

  if (isComplete) {
    return (
      <div className="flex flex-col items-center gap-6">
        <Card className="w-full p-8 text-center border-0 shadow-lg">
          <div className="text-6xl mb-4">
            {score === questions.length ? "🎉" : score >= questions.length / 2 ? "👏" : "💪"}
          </div>
          <h2 className="text-2xl font-bold mb-2">測驗完成!</h2>
          <p className="text-lg text-muted-foreground mb-4">
            你答對了 <span className="text-primary font-bold">{score}</span> / {questions.length} 題
          </p>
          <Progress value={(score / questions.length) * 100} className="h-3 mb-6" />
          <Button onClick={initQuiz} className="rounded-full px-6">
            <RotateCcw className="h-4 w-4 mr-2" />
            再試一次
          </Button>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <div className="flex items-center gap-4">
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <Card className="p-8 text-center border-0 shadow-lg">
        <p className="text-sm text-muted-foreground mb-2">這個韓文是什麼意思?</p>
        <p className="text-4xl font-bold">{question.word.korean}</p>
      </Card>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isCorrect = index === question.correctIndex
          const showResult = selectedAnswer !== null

          let buttonVariant: "outline" | "default" | "destructive" = "outline"
          let buttonClass = "h-14 text-lg rounded-2xl transition-all"

          if (showResult) {
            if (isCorrect) {
              buttonClass += " bg-green-100 border-green-500 text-green-700"
            } else if (isSelected && !isCorrect) {
              buttonClass += " bg-red-100 border-red-500 text-red-700"
            }
          }

          return (
            <Button
              key={index}
              variant={buttonVariant}
              className={buttonClass}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="flex items-center gap-2">
                {option}
                {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600" />}
              </span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
