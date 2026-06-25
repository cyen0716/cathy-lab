"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FlaskConical } from 'lucide-react'; // 引入燒瓶圖示

export function SiteNav() {
  const pathname = usePathname()

  const tabs = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/semiconductor", label: "Semiconductor" },
    { href: "/server", label: "Server" },
    { href: "/korean", label: "Korean" },
  ]

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center w-full py-6">


{/* Logo */}
<Link href="/" className="inline-flex items-center gap-3 group shrink-0">
  {/* 圖示容器 */}
  <div className="relative">
    <div className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full transition-transform duration-700 ease-out group-hover:-rotate-12">
      <FlaskConical 
        className="w-5 h-5 text-white" 
        strokeWidth={2.3} 
      />
      {/* 圓內的白色點點 */}
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full" />
    </div>
  </div>

  <span className="text-sm font-bold text-zinc-800 tracking-wider uppercase">
    Cathy Lab
  </span>
</Link>


      {/* 2. 中間：Navigation (真正的絕對置中) */}
      <nav className="flex items-center justify-center gap-10">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href || pathname.startsWith(tab.href + "/")

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                relative transition-colors duration-300 py-1 group shrink-0
                ${
                  isActive
                    ? "text-zinc-900 font-semibold" 
                    : "text-zinc-800 font-semibold " 
                }
              `}
            >
              {tab.label}
              
              {isActive && (
                <span className="absolute left-0 -bottom-[5px] w-full h-[2px] bg-indigo-400 rounded-full" />
              )}

              {!isActive && (
                <span className="absolute left-0 -bottom-[5px] w-full h-[2px] bg-zinc-300 rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* 3. 右側：隱形佔位符 (平衡 Logo 的空間，確保中間絕對置中) */}
      <div className="w-[100px]" /> 
    </div>
  )
}