'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SemiconductorSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  
  const getLinkClass = (path: string) => 
    `block text-[15px] px-4 py-2 rounded-[8px] transition-all duration-300 ease-in-out
    ${isActive(path) 
      ? "text-[#4338CA] font-semibold bg-[#EEF2FF]" 
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
    }`;

  return (
    <aside className="w-64 shrink-0"> 
      <div className="sticky top-24">
        

        <div className="space-y-8">
          {/* 第 1 區塊 */}
          <div>
            <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3 px-4">
              Basics
            </p>
            <div className="space-y-0.5">
              <Link href="/semiconductor" className={getLinkClass("/semiconductor")}>
                IC Categories
              </Link>
            </div>

            <Link href="/semiconductor/why" className={getLinkClass("/semiconductor/why")}>
                Why Need Semiconductors?
              </Link>

            <div className="space-y-0.5">
              <Link href="/semiconductor/chip" className={getLinkClass("/semiconductor/chip")}>
                Inside a Chip 
              </Link>
            </div>
          </div>

          {/* 第 2 區塊 */}
          <div>
            <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3 px-4">
              Memory
            </p>
            <div className="space-y-0.5">
              <Link href="/semiconductor/sram-vs-dram" className={getLinkClass("/semiconductor/sram-vs-dram")}>
                SRAM vs DRAM
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}