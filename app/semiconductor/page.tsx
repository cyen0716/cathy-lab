"use client";

export default function SemiconductorPage() {
  return (
    <article className="max-w-6xl">
      {/* 標題與 PortfolioPage 典範一致的間距與層級 */}
      <h1 className="text-3xl font-bold text-zinc-900 mt-4 mb-4">
        Major Categories of ICs
      </h1>
      
      <section className="space-y-10">
        {/* Intro */}
        <div className="text-base text-zinc-700">
          <p>Integrated circuits can be broadly grouped into four categories.</p>
        </div>

        {/* Categories Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
  
  {/* 1. Memory IC */}
  <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
    <div className="flex flex-col gap-2 mb-4">
      <span className="self-start px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold uppercase tracking-wider">
        Storage
      </span>
      <h2 className="text-xl font-bold text-zinc-900">Memory IC</h2>
    </div>
    <p className="text-zinc-600 text-[14px] leading-relaxed mb-6">
      Stores data for processing and long-term retention.
    </p>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">SRAM</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">靜態隨機記憶體</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">DRAM</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">動態隨機記憶體</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">Flash</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">快閃記憶體</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">ROM</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">唯讀記憶體</span>
      </div>
    </div>
  </div>

  {/* 2. Logic IC */}
  <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
    <div className="flex flex-col gap-2 mb-4">
      <span className="self-start px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold uppercase tracking-wider">
        Compute
      </span>
      <h2 className="text-xl font-bold text-zinc-900">Logic IC</h2>
    </div>
    <p className="text-zinc-600 text-[14px] leading-relaxed mb-6">
      Processes information and performs computations.
    </p>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">CPU</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">中央處理器</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">MCU</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">微控制器</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">DSP</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">數位訊號處理器</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">ASIC</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">特殊應用晶片</span>
      </div>
    </div>
  </div>

  {/* 3. Analog IC */}
  <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
    <div className="flex flex-col gap-2 mb-4">
      <span className="self-start px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold uppercase tracking-wider">
        Signal
      </span>
      <h2 className="text-xl font-bold text-zinc-900">Analog IC</h2>
    </div>
    <p className="text-zinc-600 text-[14px] leading-relaxed mb-6">
      Handles continuous real-world signals and power.
    </p>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">PMIC</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">電源管理晶片</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">Amplifier</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">訊號放大器</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">ADC / DAC</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">模數/數模轉換器</span>
      </div>
    </div>
  </div>

  {/* 4. Interface & RF */}
  <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
    <div className="flex flex-col gap-2 mb-4">
      <span className="self-start px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold uppercase tracking-wider">
        Connect
      </span>
      <h2 className="text-xl font-bold text-zinc-900">Interface & RF</h2>
    </div>
    <p className="text-zinc-600 text-[14px] leading-relaxed mb-6">
      Connects devices and enables communication.
    </p>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">USB / PCIe</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">高速傳輸介面</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">RF Transceiver</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">無線射頻收發器</span>
      </div>
      <div className="flex flex-col border-l border-indigo-100 pl-3">
        <span className="font-semibold text-zinc-800 text-[14px]">Sensor IC</span>
        <span className="text-[12px] text-zinc-400 mt-0.5">環境感測晶片</span>
      </div>
    </div>
  </div>
          
        </div>
      </section>
    </article>
  );
}