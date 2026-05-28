export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-8 py-16">

      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.2em] text-slate-400 font-medium mb-5">
          Semiconductor & AI
        </p>

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Semiconductor Learning
        </h1>

        <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
          Notes, learning records, AI trends, networking technologies,
          cybersecurity, and semiconductor exploration projects.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              AI & Networking
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Zyxel, networking technology, AI trends,
              cybersecurity, and infrastructure research.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Semiconductor Notes
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Semiconductor basics, IC industry learning,
              and technical study notes.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}