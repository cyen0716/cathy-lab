'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SemiconductorSidebar({ 
  onClose, 
  isOpen, 
  onToggle 
}: { 
  onClose?: () => void, 
  isOpen: boolean, 
  onToggle: () => void 
}) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const getLinkClass = (path: string) => 
    `block text-[15px] py-2 pl-6 pr-6 transition-colors 
    ${isActive(path) 
      ? "text-zinc-100 font-semibold bg-indigo-500 " 
      : "text-zinc-800 hover:text-zinc-800 hover:bg-indigo-50" 
    }`;

  return (
    <aside className="w-64 shrink-0 h-full relative" onClick={onClose}> 
      {/* 調整後的瘦高按鈕：垂直居中 */}
      <button 
  onClick={(e) => { e.stopPropagation(); onToggle(); }}
  className="md:hidden absolute -right-6 top-1/2 -translate-y-1/2 px-2 py-10 bg-indigo-500 border-r border-y border-zinc-200 rounded-r-lg 
  shadow-[2px_0_8px_rgba(0,0,0,0.2)] text-white hover:bg-indigo-700 transition-all duration-300 z-[60] flex items-center justify-center text-xl font-bold"
>
  {isOpen ? '‹' : '›'}
</button>

      <div className="sticky top-24">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3 px-6">Basics</p>
            <div className="space-y-0.5">
              <Link href="/semiconductor" className={getLinkClass("/semiconductor")}>IC Categories</Link>
              <Link href="/semiconductor/why" className={getLinkClass("/semiconductor/why")}>Why Need Semiconductors?</Link>
              <Link href="/semiconductor/chip" className={getLinkClass("/semiconductor/chip")}>Inside a Chip</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3 px-6">Memory</p>
            <div className="space-y-0.5">
              <Link href="/semiconductor/sram-vs-dram" className={getLinkClass("/semiconductor/sram-vs-dram")}>SRAM vs DRAM</Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}