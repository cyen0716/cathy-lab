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
      <Card className="min-h-[100px] rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
        
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
