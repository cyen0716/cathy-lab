"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { VocabCategory } from "@/lib/vocabulary-data"

interface CategoryCardProps {
  category: VocabCategory
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className={`p-4 h-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-0 shadow-sm ${category.color}`}>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="text-3xl">{category.icon}</span>
          <div>
            <p className="font-semibold text-sm">{category.name}</p>
            <p className="text-xs opacity-80">{category.nameKorean}</p>
          </div>
          <p className="text-xs opacity-70">{category.words.length} 單字</p>
        </div>
      </Card>
    </Link>
  )
}
