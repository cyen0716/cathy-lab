"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10">

        {/* Logo */}

        <nav className="mb-12">

          <p className="text-sm tracking-[0.2em] uppercase text-slate-400 font-medium">
            Cathy Lab
          </p>

        </nav>

        {/* Hero */}

        <section className="max-w-4xl mb-20">

          <h1 className="text-6xl md:text-[72px] leading-[0.92] font-bold text-slate-900">

            Hi,
            <br />

            I’m <span className="text-[#4338CA]">Cathy.</span>

          </h1>

          <p className="text-lg md:text-xl text-slate-500 font-medium mt-6 tracking-wide">
            AI • Semiconductor • Korean
          </p>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mt-10">
            I build things with AI, learn Korean,
            and explore technology one project at a time.
          </p>

        </section>

        {/* Selected Projects */}

        <section>

          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

            {/* Korean */}

            <Link href="/korean">

              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#4338CA] hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div>

                  <div className="text-4xl mb-4">
                    🇰🇷
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Flashcards, quizzes, pronunciation,
                    and categorized Korean vocabulary study sets.
                  </p>

                </div>

              </Card>

            </Link>

            {/* Technology */}

            <Link href="/semiconductor">

              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#4338CA] hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div>

                  <div className="text-4xl mb-4">
                    🖥️
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Technology
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Networking, semiconductor,
                    cybersecurity and AI explorations.
                  </p>

                </div>

              </Card>

            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}

        {/* Logo */}

        <nav className="mb-10">

          <p className="text-sm tracking-[0.2em] uppercase text-slate-400 font-medium">
            Cathy Lab
          </p>

        </nav>

       {/* Hero */}

<section className="mb-12 max-w-4xl">

  <h1 className="text-6xl md:text-[72px] leading-[0.92] font-bold text-slate-900">

    Hi,
    <br />

    I’m <span className="text-[#4F46E5]">Cathy.</span>

  </h1>

  <p className="text-lg md:text-xl text-slate-500 font-medium mt-6 tracking-wide">
    AI • Semiconductor • Korean
  </p>

  <div className="mt-8 max-w-2xl space-y-4">

    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
      I build things with AI, learn Korean,
      and explore technology one project at a time.
    </p>

    <p className="text-base md:text-lg text-slate-400 leading-relaxed">
      This website is my playground for experiments,
      learning notes, and side projects.
    </p>

  </div>

</section>

        {/* Projects */}

        <section>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

            {/* Korean */}

            <Link href="/korean">

              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-[#4F46E5] hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div>

                  <div className="text-4xl mb-4">
                    🇰🇷
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Korean Vocabulary
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Flashcards, quizzes, pronunciation,
                    and categorized Korean vocabulary study sets.
                  </p>

                </div>

              </Card>

            </Link>

            {/* Technology */}

            <Link href="/semiconductor">

              <Card className="p-6 min-h-[170px] rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-[#4F46E5] hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div>

                  <div className="text-4xl mb-4">
                    🖥️
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Technology
                  </h3>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Networking, semiconductor,
                    cybersecurity and AI explorations.
                  </p>

                </div>

              </Card>

            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}