'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { vocabularyData } from '@/lib/vocabulary-data'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export function AppSidebar({ isOpen, onToggle, onClose }: SidebarProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')

  // 判斷選中狀態
  const isActive = (path: string, categoryId?: string) => {
    if (pathname === '/korean') {
      const activeCat = currentCategory || vocabularyData[0]?.id
      return activeCat === categoryId
    }
    return pathname === path
  }

  const getLinkClass = (path: string, categoryId?: string) =>
    `block text-[13.5px] py-1.5 pl-6 pr-6 transition-colors 
    ${
      isActive(path, categoryId)
        ? "text-zinc-100 font-semibold bg-zinc-800"
        : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100"
    }`

  const renderSidebarContent = () => {
    if (pathname.startsWith('/portfolio')) {
      return (
        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5 px-6">
              Zyxel Networks
            </p>
            <div className="space-y-0.5">
              <Link href="/portfolio" className={getLinkClass("/portfolio")} onClick={onClose}>
                CX4800-56F Rack Mounting
              </Link>
              <Link href="/portfolio/vpn" className={getLinkClass("/portfolio/vpn")} onClick={onClose}>
                Remote Access VPN
              </Link>
              <Link href="/portfolio/tailscale" className={getLinkClass("/portfolio/tailscale")} onClick={onClose}>
                Tailscale CLI
              </Link>
              <Link href="/portfolio/zyxel-one-app" className={getLinkClass("/portfolio/zyxel-one-app")} onClick={onClose}>
                Zyxel One App
              </Link>
              <Link href="/portfolio/lite60ax" className={getLinkClass("/portfolio/lite60ax")} onClick={onClose}>
                USG LITE 60AX
              </Link>
            </div>
          </div>
        </div>
      )
    }

    if (pathname.startsWith('/semiconductor')) {
      return (
        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5 px-6">
              Basics
            </p>
            <div className="space-y-0.5">
              <Link href="/semiconductor" className={getLinkClass("/semiconductor")} onClick={onClose}>
                IC Categories
              </Link>
              <Link href="/semiconductor/why" className={getLinkClass("/semiconductor/why")} onClick={onClose}>
                Semiconductor Basics
              </Link>
              <Link href="/semiconductor/chip" className={getLinkClass("/semiconductor/chip")} onClick={onClose}>
                Chip Organization
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5 px-6">
              Memory
            </p>
            <div className="space-y-0.5">
              <Link href="/semiconductor/sram-vs-dram" className={getLinkClass("/semiconductor/sram-vs-dram")} onClick={onClose}>
                SRAM vs DRAM
              </Link>
            </div>
          </div>
        </div>
      )
    }

    if (pathname.startsWith('/server')) {
      return (
        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5 px-6">
              Basics
            </p>
            <div className="space-y-0.5">
              <Link href="/server" className={getLinkClass("/server")} onClick={onClose}>
                Server Basics
              </Link>
              <Link href="/server/ai-server" className={getLinkClass("/server/ai-server")} onClick={onClose}>
                AI Server Basics
              </Link>
            </div>
          </div>
        </div>
      )
    }

    if (pathname.startsWith('/korean')) {
      return (
        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5 px-6">
              Categories
            </p>
            <div className="space-y-0.5">
              {vocabularyData.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/korean?category=${cat.id}`}
                  className={getLinkClass("/korean", cat.id)}
                  onClick={onClose}
                >
                  {cat.nameKorean} ({cat.name})
                </Link>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <aside className="w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto pb-10 relative" onClick={onClose}>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="md:hidden absolute -right-6 top-1/2 -translate-y-1/2 px-2 py-10 bg-zinc-800 border-r border-y border-zinc-200 rounded-r-lg 
        shadow-[2px_0_8px_rgba(0,0,0,0.2)] text-white hover:bg-zinc-700 transition-all duration-300 z-[60] flex items-center justify-center text-xl font-bold"
      >
        {isOpen ? '‹' : '›'}
      </button>

      <div className="pt-4">
        {renderSidebarContent()}
      </div>
    </aside>
  )
}