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
      return "bg-blue-100"

    case "emotions":
      return "bg-pink-100"

    case "food":
      return "bg-orange-100"

    case "cafe":
      return "bg-amber-100"

    case "travel":
      return "bg-cyan-100"

    case "kdrama":
      return "bg-violet-100"

    default:
      return "bg-slate-100"
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className="h-[210px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#4338CA] transition-all duration-300 cursor-pointer">

        <div className="h-full flex flex-col items-center justify-center text-center px-4">

          <div
            className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-5 ${getIconBg(category.id)}`}
          >
            <span className="text-4xl">
              {category.icon}
            </span>
          </div>

          <p className="text-lg font-bold text-slate-900">
            {category.name}
          </p>

          <p className="text-base text-slate-500 mt-1">
            {category.nameKorean}
          </p>

          <div className="mt-4">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-medium">
              {category.words.length} words
            </span>
          </div>

          <p className="text-sm text-[#4338CA] font-medium mt-4">
            Start Learning →
          </p>

        </div>

      </Card>
    </Link>
  )
}