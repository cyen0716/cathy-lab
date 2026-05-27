"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { VocabCategory } from "@/lib/vocabulary-data"

interface CategoryCardProps {
  category: VocabCategory
}

function getIconBg(id: string) {
  switch (id) {
    case "daily-life":
      return "bg-blue-50"
    case "emotions":
      return "bg-pink-50"
    case "food":
      return "bg-orange-50"
    case "cafe":
      return "bg-amber-50"
    case "travel":
      return "bg-cyan-50"
    case "kdrama":
      return "bg-violet-50"
    default:
      return "bg-slate-100"
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className="h-[190px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <div className="h-full flex flex-col items-center justify-center text-center px-3">

          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${getIconBg(category.id)}`}
          >
            <span className="text-3xl">
              {category.icon}
            </span>
          </div>

          <p className="text-lg font-bold text-slate-900 leading-tight">
            {category.name}
          </p>

          <p className="text-lg font-semibold text-slate-600 mt-1 leading-tight">
            {category.nameKorean}
          </p>

          <p className="text-xs text-slate-400 mt-3">
            {category.words.length} 個單字
          </p>

        </div>
      </Card>
    </Link>
  )
}