'use client'

import { useState } from 'react';
import Link from 'next/link';

export function PortfolioTabs() {
  // 1. 用 state 來記錄當前點擊的書籤，預設讓第一個亮起
  const [activeTab, setActiveTab] = useState("#vpn");

  // 2. 移除 usePathname，直接比對當前點擊的 anchor
  const getLinkClass = (hash: string) => 
    `block text-[15px] px-4 py-2 rounded-[8px] transition-all duration-300 ease-in-out
    ${activeTab === hash 
      ? "text-[#4338CA] font-semibold bg-[#EEF2FF]" // 選中時的藍字淡藍底
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
    }`;

  return (
    // 改為合適的寬度 w-64，並維持 sticky 效果
    <aside className="w-64 shrink-0"> 
      <div className="sticky top-24">
        <div className="space-y-8">
          
          {/* 區塊 */}
          <div>
            <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3 px-4">
              Zyxel Networks
            </p>
            <div className="space-y-0.5">
              <Link 
                href="/portfolio" 
                className={getLinkClass("#cx4800")}
                onClick={() => setActiveTab("#cx4800")}
              >
                CX4800-56F Rack Mounting
              </Link>
              
              <Link 
                href="/portfolio/vpn" 
                className={getLinkClass("#vpn")}
                onClick={() => setActiveTab("#vpn")}
              >
                Remote Access VPN
              </Link>

              
            </div>
          </div>

        </div>
      </div>
    </aside>
  )
}