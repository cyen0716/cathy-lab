"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F172A] antialiased">

      {/* 將 pt-20 改大，照片和文字就會往下移動 */}
      <div className="w-full bg-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">

          {/* Hero Section */}
          <section className="flex flex-col items-center text-center">
            
            {/* 圓形照片頭貼 */}
            <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden shadow-md ring-2 ring-slate-700">
              <Image
                src="/cathy-book.jpeg"
                alt="Cathy"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 標題 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Hello, I&apos;m Cathy
            </h1>

            <div className="max-w-2xl mx-auto">
              <p className="text-base text-slate-200 tracking-normal mb-3 leading-relaxed">
                I'm a Technical Support Engineer with a background in English and technical writing.
              </p>
              <p className="text-base text-slate-200 tracking-normal mb-8 leading-relaxed">
                I'm drawn to understanding how things work, especially when they lead me somewhere unexpected. 
                Cathy Lab is a collection of things I've explored, learned, and wanted to share.
              </p>
            </div>

            {/* Follow me 區塊 */}
            <div className="flex items-center justify-center gap-3 text-sm text-slate-300 font-medium">
              <span>Follow me</span>
              <Link 
                href="https://www.linkedin.com/in/cathyyen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </Link>
            </div>

          </section>

        </div>
      </div>
    </main>
  )
}