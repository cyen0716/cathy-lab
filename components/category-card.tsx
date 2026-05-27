"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { VocabCategory } from "@/lib/vocabulary-data"
import { ChevronRight } from "lucide-react"

interface CategoryCardProps {
  category: VocabCategory
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className="h-[140px] px-5 border border-slate-200 bg-white shadow-none hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer">
        <div className="h-full flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
              {category.icon}
            </div>

            <div className="space-y-1">
              <p className="text-lg font-semibold text-slate-900 leading-tight">
                {category.name}
              </p>

              <p className="text-lg font-semibold text-slate-900 leading-tight">
                {category.nameKorean}
              </p>

              <p className="text-sm text-slate-500 pt-1">
                {category.words.length} 個單字
              </p>
            </div>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
      </Card>
    </Link>
  )
}