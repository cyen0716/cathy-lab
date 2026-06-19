'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 加入一個 onClick 參數，讓 Layout 可以傳入關閉功能
export function ServerSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const getLinkClass = (path: string) => 
    `block text-[15px] px-4 py-2 rounded-[8px] transition-all duration-300 ease-in-out
    ${isActive(path) 
      ? "text-[#4338CA] font-semibold bg-[#EEF2FF]" 
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
    }`;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3 px-4">
          Basics
        </p>
        <div className="space-y-0.5" onClick={onClose}>
          <Link href="/server" className={getLinkClass("/server")}>
            What is a Server?
          </Link>
        </div>
      </div>
    </div>
  )
}