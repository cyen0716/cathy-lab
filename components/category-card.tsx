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
      {/* 1. 把 min-h-[130px] 改小（例如改為 min-h-[100px]） */}
      <Card className="min-h-[100px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#4338CA] transition-all duration-300 cursor-pointer">
        
        {/* 2. 把 pt-6 pb-6 改小（例如改為 pt-4 pb-4，或者直接縮寫成 py-4） */}
        <div className="h-full flex flex-col items-center text-center px-4 py-4">
          
          <div className="w-10 h-10 flex items-center justify-center mb-2">
            <span className="text-2xl">
              {category.icon}
            </span>
          </div>

          <p className="text-xl font-bold text-slate-900">
            {category.nameKorean}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            {category.name}
          </p>

        </div>
      </Card>
    </Link>
  )
}
  )
