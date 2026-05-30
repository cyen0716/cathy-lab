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
      <Card className="min-h-[100px] rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#4338CA] transition-all duration-300 cursor-pointer">
        
        <div className="h-full flex flex-col items-center text-center px-2 py-1">
          
          <div className="w-8 h-8 flex items-center justify-center mb-1">
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
