import { SiteNav } from "@/components/site-nav"
import { SemiconductorSidebar } from "@/components/semiconductor-sidebar"

export default function SemiconductorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">

      <div className="max-w-7xl mx-auto px-6 py-10">
              <SiteNav />

        <div className="flex gap-8">

          <SemiconductorSidebar />

          <div className="flex-1">
            {children}
          </div>

        </div>
      </div>
    </main>
  )
}