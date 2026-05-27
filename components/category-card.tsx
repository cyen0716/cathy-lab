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
      <Card className="h-[220px] rounded-3xl border-2 border-[#E8F8D9] bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <div className="h-full flex flex-col items-center justify-center text-center px-4">
          
          <div className="w-16 h-16 rounded-3xl bg-[#E8F8D9] flex items-center justify-center text-3xl mb-5">
            {category.icon}
          </div>

          <p className="text-xl font-bold text-slate-900">
            {category.name}
          </p>

          <p className="text-lg font-semibold text-slate-700 mt-2">
            {category.nameKorean}
          </p>

          <p className="text-sm text-slate-500 mt-4">
            {category.words.length} 個單字
          </p>
        </div>
      </Card>
    </Link>
  )
}