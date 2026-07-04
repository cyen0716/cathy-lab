'use client'

import { useState } from 'react';
import Link from 'next/link';

export function PortfolioTabs({ 
  onClose, 
  isOpen, 
  onToggle 
}: { 
  onClose?: () => void, 
  isOpen: boolean, 
  onToggle: () => void 
}) {
  const [activeTab, setActiveTab] = useState("#cx4800");

  const getLinkClass = (hash: string) => 
    `block text-[15px] py-2 pl-6 pr-6 transition-colors 
    ${activeTab === hash 
      ? "text-zinc-100 font-semibold bg-indigo-500 " 
      : "text-zinc-800 hover:text-zinc-800 hover:bg-indigo-50" 
    }`;

  return (
    <aside className="w-64 shrink-0 h-full relative" onClick={onClose}> 
      
      <button 
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className="md:hidden absolute -right-6 top-1/2 -translate-y-1/2 px-2 py-10 bg-indigo-500 border-r border-y border-zinc-200 rounded-r-lg 
        shadow-[2px_0_8px_rgba(0,0,0,0.2)] text-white hover:bg-indigo-700 transition-all duration-300 z-[60] flex items-center justify-center text-xl font-bold"
      >
        {isOpen ? '‹' : '›'}
      </button>

      {/* 導覽內容區 */}
      <div className="sticky top-24">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3 px-6">
              Zyxel Networks
            </p>
            <div className="space-y-0.5">
              <Link 
                href="/portfolio" 
                className={getLinkClass("#cx4800")}
                onClick={() => {
                  setActiveTab("#cx4800");
                  if (onClose) onClose();
                }}
              >
                CX4800-56F Rack Mounting
              </Link>
              
              <Link 
                href="/portfolio/vpn" 
                className={getLinkClass("#vpn")}
                onClick={() => {
                  setActiveTab("#vpn");
                  if (onClose) onClose();
                }}
              >
                Remote Access VPN
              </Link>

               <Link 
                href="/portfolio/tailscale" 
                className={getLinkClass("#tailscale")}
                onClick={() => {
                  setActiveTab("#tailscale");
                  if (onClose) onClose();
                }}
              >
                Tailscale CLI
              </Link>
            <Link 
                href="/portfolio/zyxel-one-app" 
                className={getLinkClass("#zyxel-one-app")}
                onClick={() => {
                  setActiveTab("#zyxel-one-app");
                  if (onClose) onClose();
                }}
              >
                Zyxel One App 
              </Link>
              <Link 
                href="/portfolio/lite60ax" 
                className={getLinkClass("#lite60ax")}
                onClick={() => {
                  setActiveTab("#lite60ax");
                  if (onClose) onClose();
                }}
              >
                USG LITE 60AX
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}