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
    return <div className="text-center text-slate-400 py-12">載入中...</div>
  }

  if (isComplete) {
    return (
      <div className="flex flex-col items-center gap-6">
        <Card className="w-full p-8 text-center border-0 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
          <div className="text-6xl mb-4">
            {score === questions.length ? "🎉" : score >= questions.length / 2 ? "👏" : "💪"}
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">測驗完成!</h2>
          <p className="text-lg text-slate-500 mb-6">
            你答對了 <span className="text-[#4338CA] font-bold">{score}</span> / {questions.length} 題
          </p>
          
          {/* 進度條改為 Indigo 藍色系 */}
          <Progress value={(score / questions.length) * 100} className="h-3 mb-8 bg-slate-100 [&>div]:bg-[#4338CA]" />
          
          <Button 
            onClick={initQuiz} 
            className="rounded-full px-6 bg-[#4338CA] hover:bg-[#3730A3] text-white transition-colors cursor-pointer shadow-sm shadow-indigo-200"
          >
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
        {/* 上方進度條改為 Indigo 藍色系 */}
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2 bg-slate-100 [&>div]:bg-[#4338CA]" />
        <span className="text-sm font-medium text-slate-400 whitespace-nowrap select-none">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <Card className="p-8 text-center border border-slate-100 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.04)] rounded-2xl bg-white">
        <p className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full w-fit mx-auto mb-4">這個韓文是什麼意思?</p>
        <p className="text-4xl md:text-5xl font-bold text-slate-800 tracking-wide font-sans">{question.word.korean}</p>
      </Card>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isCorrect = index === question.correctIndex
          const showResult = selectedAnswer !== null

          let buttonClass = "h-14 text-base font-medium rounded-xl transition-all cursor-pointer w-full border-slate-200 bg-white text-slate-700"

          if (!showResult) {
            // 未選擇時的 hover 效果，與主色調同步
            buttonClass += " hover:border-indigo-200 hover:bg-indigo-50/30 hover:text-[#4338CA]"
          } else {
            // 答對的亮綠色
            if (isCorrect) {
              buttonClass += " bg-emerald-50/80 border-emerald-500 text-emerald-700 font-semibold"
            } 
            // 答錯的亮紅色
            else if (isSelected && !isCorrect) {
              buttonClass += " bg-rose-50/80 border-rose-500 text-rose-700 font-semibold"
            } 
            // 其他沒被選中的選項變半透明不干擾視覺
            else {
              buttonClass += " opacity-40 border-slate-100"
            }
          }

          return (
            <Button
              key={index}
              variant="outline"
              className={buttonClass}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="flex items-center justify-center gap-2 w-full relative">
                <span>{option}</span>
                {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-600 absolute right-1" />}
                {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-600 absolute right-1" />}
              </span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
