"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    /* 在這裡注入 Apple 官方字體庫，讓整頁所有文字自動同步為 SF Pro 與 萍方體 */
    <main 
      className="min-h-screen bg-[#FCFCFC] antialiased"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "PingFang TC", sans-serif' }}
    >

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">

        {/* Logo / Nav - 完美回歸靠左 */}
        <nav className="mb-10">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium mb-4">
            Cathy Lab
          </p>
        </nav>

        {/* Hero Section - 完美回歸靠左 */}
        <section className="max-w-6xl mb-14">

          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-8">
            Hi, I’m <span className="text-[#4338CA] bg-gradient-to-r from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">Cathy</span>
          </h1>

          {/* 徹底還原最原始的字體與色彩，僅縮小 mt 間距讓畫面不下滑 */}
          <div className="mt-6 max-w-3xl">

            <p className="text-lg leading-[1.7] text-slate-600">
              I&apos;m a Technical Writer. I learn by building.
            </p>

            <p className="mt-2 text-lg leading-[1.2] text-slate-600">
              From tech to korean, I turn things I don&apos;t understand
              into projects I can explore.
            </p>

            <p className="mt-2 text-lg leading-[1.2] text-slate-600">
              This website is my playground for experiments,
              learning notes, and everything I&apos;m curious about.
            </p>

          </div>

        </section>

        {/* Selected Projects */}
        <section>

          {/* H2 — 改用 Style Guide 規範的字級顏色與底邊距 mb-3 */}
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Selected Projects
          </h2>

          {/* 保持您原本的網格與寬度，卡片完整保留 Emoji、陰影、懸停位移與 rounded-3xl 效果 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mt-6">

            {/* Semiconductor */}
            <Link href="/semiconductor">
              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
                <div>

                  {/* 完整保留原本的 Emoji */}
                  <div className="text-4xl mb-3">
                    🖥️
                  </div>

                  {/* 卡片標題：改用符合規範的標題色彩 text-slate-900 */}
                  <h3 className="text-xl font-bold text-slate-900">
                    Semiconductor Notes
                  </h3>

                  {/* 卡片內文：改用符合規範的字級與色彩 */}
                  <p className="text-base leading-[1.85] text-slate-500 mt-2">
                    Semiconductor basics,
                    technical concepts, and learning notes.
                  </p>

                </div>
              </Card>
            </Link>

            {/* Korean */}
            <Link href="/korean">
              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(67,56,202,0.03)] hover:border-indigo-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer">
                <div>

                  {/* 完整保留原本的 Emoji */}
                  <div className="text-4xl mb-3">
                    📓
                  </div>

                  {/* 卡片標題：改用符合規範的標題色彩 text-slate-900 */}
                  <h3 className="text-xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  {/* 卡片內文：改用符合規範的字級
