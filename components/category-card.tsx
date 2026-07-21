"use client"

import Link from "next/link"
import { VocabCategory } from "@/lib/vocabulary-data"

interface CategoryCardProps {
  category: VocabCategory
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = category.icon

  return (
    <Link
      href={`/korean/${category.id}`}
      className="
        group p-6 rounded-2xl border border-slate-200/80 bg-white
        shadow-[0_2px_8px_rgba(0,0,0,0.01)]
        hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)]
        hover:border-slate-300
        transition-all duration-700 ease-out
        block h-full
      "
    >
        
        <div className="flex flex-col items-start">
        {/* 圖標區塊 */}
        <div className="mb-4 text-slate-400 group-hover:text-slate-800 transition-colors duration-500 ease-out">
          <IconComponent strokeWidth={1.3} size={26} />
        </div>

        {/* 韓文標題（上面：粗體、放大、深色） */}
        <h4 className="text-xl font-bold text-slate-900 tracking-wide leading-tight">
          {category.nameKorean}
        </h4>

        <span className="text-base font-medium text-slate-500 block mt-1">
          {category.name}
        </span>

      </div>
    </Link>
  )
}
