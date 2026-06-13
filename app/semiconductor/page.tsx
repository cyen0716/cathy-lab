"use client"

export default function SemiconductorPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6 py-10">

                   
        <div className="flex gap-8">
  <article className="flex-1 max-w-4xl">

          <h1 className="text-4xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            Major Categories of ICs
          </h1>

          <div className="space-y-14 text-base leading-[1.85] text-slate-700">

          <div className="mb-5">

  <p className="mt-2 text-slate-700">
    Integrated circuits can be broadly grouped into four categories.
  </p>
</div>  



            {/* Intro */}
            {/* Intro - 半導體四大分類入口 */}
<section className="my-14">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

    {/* 1. Memory IC */}
    <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all hover:border-[#C7D2FE]/60 hover:bg-[#EEF2FF]/14 group">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#4338CA] transition-colors">
          Memory IC
        </h2>
        <span className="text-[14px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md bg-slate-140 text-slate-500 group-hover:bg-[#EEF2FF] group-hover:text-[#4338CA] transition-colors">
          Storage
        </span>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-5">
        Stores data for processing and long-term retention.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">SRAM</span>
          <span className="text-[14px] text-slate-500 mt-0.5">靜態隨機記憶體</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">DRAM</span>
          <span className="text-[14px] text-slate-500 mt-0.5">動態隨機記憶體</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">Flash</span>
          <span className="text-[14px] text-slate-500 mt-0.5">快閃記憶體</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">ROM</span>
          <span className="text-[14px] text-slate-500 mt-0.5">唯讀記憶體</span>
        </div>
      </div>
    </div>

    {/* 2. Logic IC */}
    <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all hover:border-[#C7D2FE]/60 hover:bg-[#EEF2FF]/14 group">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#4338CA] transition-colors">
          Logic IC
        </h2>
        <span className="text-[14px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md bg-slate-140 text-slate-500 group-hover:bg-[#EEF2FF] group-hover:text-[#4338CA] transition-colors">
          Compute
        </span>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-5">
        Processes information and performs computations.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">CPU</span>
          <span className="text-[14px] text-slate-500 mt-0.5">中央處理器</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">MCU</span>
          <span className="text-[14px] text-slate-500 mt-0.5">微控制器</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">DSP</span>
          <span className="text-[14px] text-slate-500 mt-0.5">數位訊號處理器</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">ASIC</span>
          <span className="text-[14px] text-slate-500 mt-0.5">特殊應用晶片</span>
        </div>
      </div>
    </div>

    {/* 3. Analog IC */}
    <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all hover:border-[#C7D2FE]/60 hover:bg-[#EEF2FF]/14 group">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#4338CA] transition-colors">
          Analog IC
        </h2>
        <span className="text-[14px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md bg-slate-140 text-slate-500 group-hover:bg-[#EEF2FF] group-hover:text-[#4338CA] transition-colors">
          Signal
        </span>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-5">
        Handles continuous real-world signals and power.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">PMIC</span>
          <span className="text-[14px] text-slate-500 mt-0.5">電源管理晶片</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">Amplifier</span>
          <span className="text-[14px] text-slate-500 mt-0.5">訊號放大器</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">ADC / DAC</span>
          <span className="text-[14px] text-slate-500 mt-0.5">模數/數模轉換器</span>
        </div>
      </div>
    </div>

    {/* 4. Interface & RF */}
    <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all hover:border-[#C7D2FE]/60 hover:bg-[#EEF2FF]/14 group">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#4338CA] transition-colors">
          Interface & RF
        </h2>
        <span className="text-[14px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md bg-slate-140 text-slate-500 group-hover:bg-[#EEF2FF] group-hover:text-[#4338CA] transition-colors">
          Connect
        </span>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-5">
        Connects devices and enables communication.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">USB / PCIe</span>
          <span className="text-[14px] text-slate-500 mt-0.5">高速傳輸介面</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">RF Transceiver</span>
          <span className="text-[14px] text-slate-500 mt-0.5">無線射頻收發器</span>
        </div>
        <div className="flex flex-col border-l-2 border-slate-200/60 pl-2.5 group-hover:border-indigo-200 transition-colors">
          <span className="font-bold text-slate-800">Sensor IC</span>
          <span className="text-[14px] text-slate-500 mt-0.5">環境感測晶片</span>
        </div>
      </div>
    </div>

  </div>
</section>

          </div>
        </article>
      </div>

      </div>
    </main>
  )
}
