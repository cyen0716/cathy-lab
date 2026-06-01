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
    }, 200) // 保持妳最愛的 200ms 俐落反饋
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
            py-6
            pl-6
            pr-14
            border
            cursor-pointer
            transition-all
            ease-out
            
            ${
              activeIndex === index
                ? "border-slate-300 bg-slate-50 scale-[0.96] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] duration-100" 
                /* ✨ 點擊時：徹底拔除紫色！換成極低調的微醺暖灰，伴隨優雅的輕微內陰影，呈現高級下壓感 */
                : "border-slate-100/80 shadow-[0_4px_12px_-4px_rgba(15,23,42,0.03)] hover:border-slate-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.04)] duration-500"
                /* ✨ 平常與 Hover：也同步把亮紫色 Hover 邊框，換成內斂的 Apple 原生灰（slate-300）*/
            }
          `}
        >
          {/* 文字區塊：將間距與字體完美對比 */}
          <div className="flex flex-col items-start gap-1.5 select-none">
            {/* ✨ 韓文：巨大、醒目、深夜黑，極具蘋果官網風格 */}
            <span className="text-xl font-bold text-slate-900 tracking-wide leading-none font-sans">
              {word.korean}
            </span>
            {/* ✨ 中文：精緻小巧、輕盈淡雅的輔助字 */}
            <span className="text-base font-medium text-slate-400/90 transition-colors group-hover:text-slate-500">
              {word.chinese}
            </span>
          </div>

          {/* 右側喇叭按鈕：去色優雅化，沉澱為極簡黑白灰 */}
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
                  ? "text-slate-800 bg-slate-100 scale-[0.92]" /* ✨ 點擊時：溫和的低調煙燻灰，不刺眼 */
                  : "text-slate-300 opacity-50 group-hover:opacity-100 group-hover:text-slate-700 group-hover:bg-slate-50 group-hover:scale-102" /* ✨ 平常與 Hover：維持極致內斂 */
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
