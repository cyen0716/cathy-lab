
"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { vocabularyData } from "@/lib/vocabulary-data"
import { Volume2 } from "lucide-react"

function KoreanContent() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category")

  const selectedCategory = currentCategory
    ? vocabularyData.find((cat) => cat.id === currentCategory) || vocabularyData[0]
    : vocabularyData[0]

  const playKoreanPronunciation = (text: string) => {
    if (!("speechSynthesis" in window)) {
      alert("您的瀏覽器不支援語音播放")
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "ko-KR"
    utterance.rate = 0.85

    window.speechSynthesis.speak(utterance)
  }

  const IconComponent = selectedCategory.icon

  return (
    <main className="min-h-screen bg-zinc-50/50 antialiased py-8 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-200">
          {IconComponent && (
            <IconComponent className="w-6 h-6 text-zinc-700" />
          )}

          <h2 className="text-2xl font-bold text-zinc-900">
            {selectedCategory.nameKorean}{" "}
            <span className="text-lg font-normal text-zinc-500">
              ({selectedCategory.name})
            </span>
          </h2>

          <span className="ml-auto text-xs font-semibold px-2.5 py-1 bg-zinc-200/60 text-zinc-600 rounded-full">
            {selectedCategory.words.length} Words
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {selectedCategory.words.map((word, idx) => (
            <button
              key={idx}
              onClick={() => playKoreanPronunciation(word.korean)}
              className="p-3.5 bg-white rounded-xl border border-zinc-200/80 flex items-center justify-between text-left hover:bg-zinc-100/80 hover:border-zinc-300 hover:shadow-md active:scale-[0.98] transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Volume2 className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800 transition-colors" />

                <span className="text-base font-semibold text-zinc-900">
                  {word.korean}
                </span>
              </div>

              <span className="text-sm font-medium text-zinc-500">
                {word.chinese}
              </span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function KoreanPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-zinc-50/50 py-8 px-6 md:px-12" />
      }
    >
      <KoreanContent />
    </Suspense>
  )
}
