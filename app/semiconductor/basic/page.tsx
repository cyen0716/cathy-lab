import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BasicsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Back */}

        <Link
          href="/semiconductor"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#EEF2FF] text-[#4338CA] hover:bg-[#E0E7FF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>

        <article className="mt-8">

          <p className="text-sm uppercase tracking-[0.15em] text-slate-400 mb-4">
            Semiconductor Fundamentals
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
            Why Do We Need Semiconductors?
          </h1>

          {/* Intro */}

          <section className="mb-12">

            <div className="space-y-4 text-lg leading-relaxed text-slate-600">

              <p>
                Imagine your smartphone suddenly loses all its chips.
              </p>

              <p>No processor.</p>

              <p>No memory.</p>

              <p>No Wi-Fi.</p>

              <p>No camera sensor.</p>

              <p>No storage.</p>

              <p className="pt-2 font-medium text-slate-900">
                It would become a piece of metal and glass.
              </p>

            </div>

          </section>

          {/* Transition */}

          <section className="mb-12">

            <div className="bg-white border border-slate-200 rounded-3xl p-8">

              <p className="text-lg leading-relaxed text-slate-700">
                Everything that makes a smartphone{" "}
                <span className="font-semibold">
                  "smart"
                </span>{" "}
                depends on chips.
              </p>

              <p className="text-lg leading-relaxed text-slate-700 mt-4">
                And every chip is built using semiconductor technology.
              </p>

            </div>

          </section>

          {/* Smartphone Example */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Take a Smartphone as an Example
            </h2>

            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">

              <table className="w-full">

                <thead className="bg-slate-50 border-b border-slate-200">

                  <tr>

                    <th className="text-left px-6 py-4 font-semibold text-slate-900">
                      Chip
                    </th>

                    <th className="text-left px-6 py-4 font-semibold text-slate-900">
                      What It Does
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      Application Processor
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Runs apps and processes instructions
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      DRAM
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Temporarily stores data
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      NAND Flash
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Stores photos, videos, and apps
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      Wi-Fi / 5G Chip
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Connects to the internet
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      Image Sensor
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Captures photos
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium">
                      PMIC
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Manages power
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          {/* Key Takeaway */}

          <section className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8">

            <h2 className="text-xl font-bold text-[#3730A3] mb-3">
              📌 Key Takeaway
            </h2>

            <p className="text-lg text-[#4338CA] leading-relaxed">
              Semiconductors make modern technology possible by enabling chips
              to process, store, and transmit information.
            </p>

          </section>

        </article>

      </div>

    </main>
  )
}