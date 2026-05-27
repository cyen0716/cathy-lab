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
      <Card className="relative h-[220px] p-6 border border-slate-200 bg-white shadow-none hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer rounded-2xl">
        
        {/* arrow */}
        <ChevronRight className="absolute top-5 right-5 h-5 w-5 text-slate-400" />

        <div className="h-full flex flex