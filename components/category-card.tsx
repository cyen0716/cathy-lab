"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { VocabCategory } from "@/lib/vocabulary-data"
import {
  Home,
  Heart,
  Coffee,
  Plane,
  Tv,
  UtensilsCrossed,
} from "lucide-react"

interface CategoryCardProps {
  category: VocabCategory
}

function getCategoryIcon(id: string) {
  switch (id) {
    case "daily-life":
      return <Home className="w-6 h-6 text-[#58CC02]" />
    case "emotions":
      return <Heart className="w-6 h-6 text-[#58CC02]" />
    case "food":
      return <UtensilsCrossed className="w-6 h-6 text-[#58CC02]" />
    case "cafe":
      return <Coffee className="w-6 h-6 text-[#58CC02]" />
    case "travel":
      return <Plane className="w-6 h-6 text-[#58CC02]" />
    case "kdrama":
      return <Tv className="w-6 h-6 text-[#58CC02]" />
    default:
      return <Home className="w-6 h-6 text-[#58CC02]" />
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className="h-[190px] rounded-3xl border-2 border-[#E8F8D9] bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <div className="h-full flex flex-col items-center justify-center text-center px-3">

          <div className="w-14 h-14 rounded-2xl bg-[#F1FCE8] flex items-center justify-center mb-4">
            {getCategoryIcon(category.id)}
          </div>

          <p className="text-lg font-bold text-slate-900 leading-tight">
            {category.name}
          </p>

          <p className="text-lg font-bold text-slate-700 mt-1 leading-tight">
            {category.nameKorean}
          </p>

          <p className="text-xs text-slate-500 mt-3">
            {category.words.length} 個單字
          </p>
        </div>
      </Card>
    </Link>
  )
}