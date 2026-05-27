"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import type { VocabCategory } from "@/lib/vocabulary-data"

interface CategoryCardProps {
  category: VocabCategory
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className="h-full cursor-pointer border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-teal-300 active:scale-[0.99] rounded-2xl">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
              {category.icon}
            </div>

            <div>
              <p className="text-lg font-semibold text-slate-900">
                {category.name}
              </p>

              <p className="text-sm text-slate-500 mt-1">
                {category.nameKorean}
              </p>

              <p className="text-sm text-slate-400 mt-2">
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