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

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Why Do We Need Semiconductors?
          </h1>

          {/* Intro */}

          <section className="mb-10">

            <p className="text-lg leading-relaxed text-slate-600">
              Every day, we use devices that process information.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mt-4">
              When you watch YouTube, send a message,
              take a photo, or use ChatGPT, your device
              needs to receive, store, and process data.
            </p>

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
                      Processes instructions and renders graphics
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      DRAM
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Temporarily stores data while apps are running
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      NAND Flash
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Stores apps, photos, videos, and files
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      Wi-Fi / 5G Chip
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Connects to wireless networks
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium">
                      Image Sensor
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Captures light and converts it into digital images
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium">
                      PMIC
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Controls and distributes power throughout the device
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          {/* YouTube Example */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              What Happens When You Open YouTube?
            </h2>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">

              <ol className="space-y-5 text-slate-600">

                <li>
                  <span className="font-semibold text-slate-900">
                    1.
                  </span>{" "}
                  The Wi-Fi chip receives video data from the internet.
                </li>

                <li>
                  <span className="font-semibold text-slate-900">
                    2.
                  </span>{" "}
                  The Application Processor executes instructions.
                </li>

                <li>
                  <span className="font-semibold text-slate-900">
                    3.
                  </span>{" "}
                  DRAM temporarily stores data for quick access.
                </li>

                <li>
                  <span className="font-semibold text-slate-900">
                    4.
                  </span>{" "}
                  The GPU renders the user interface and video frames.
                </li>

                <li>
                  <span className="font-semibold text-slate-900">
                    5.
                  </span>{" "}
                  NAND Flash stores app data and downloaded files.
                </li>

              </ol>

            </div>

          </section>

          {/* Conclusion */}

          <section className="mb-12">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Common Foundation
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Although these chips perform different tasks,
              they share one thing in common:
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mt-4">
              They are all built using semiconductor technology.
            </p>

            <p className="text-lg leading-relaxed text-slate-600 mt-4">
              Without semiconductors, there would be no smartphones,
              computers, cloud services, or AI systems.
            </p>

          </section>

          {/* Key Takeaway */}

          <section className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-3xl p-8">

            <h2 className="text-xl font-bold text-[#3730A3] mb-3">
              📌 Key Takeaway
            </h2>

            <p className="text-lg text-[#4338CA] leading-relaxed">
              Semiconductors make modern computing possible by enabling
              chips to process, store, and transmit information.
            </p>

          </section>

        </article>

      </div>

    </main>
  )
}