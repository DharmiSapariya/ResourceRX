import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Target, 
  LineChart, 
  ShieldCheck, 
  Info,
  ArrowUpRight,
  Flame,
  Globe,
  Settings
} from 'lucide-react';

export default function OwnerYield() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4 flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-[10px] font-black uppercase mb-4 text-secondary border border-secondary/20">
            <Flame size={12} /> Dynamic Market Pulse Active
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Yield Strategy</h2>
        </div>
        <div className="bg-white/40 p-2 rounded-3xl flex gap-1">
          {['Manual', 'AI-Optimized'].map((mode) => (
            <button key={mode} className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${mode === 'AI-Optimized' ? 'bg-primary text-white shadow-lg' : 'opacity-40 hover:opacity-100'}`}>
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* --- STRATEGY CARDS --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* PRICE MULTIPLIER CONTROL */}
        <div className={`${glassStyle} bg-gradient-to-br from-white/40 to-secondary/5`}>
          <div className="flex justify-between items-start mb-12">
            <div className="p-4 bg-white rounded-2xl text-secondary shadow-sm">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black opacity-30 uppercase text-[#1d3557]">Current Multiplier</p>
              <h3 className="text-4xl font-black tracking-tighter text-[#1d3557]">1.45<span className="text-lg text-secondary">x</span></h3>
            </div>
          </div>
          <h4 className="text-xl font-black uppercase tracking-tighter italic mb-4 text-[#1d3557]">Surge Protocol</h4>
          <p className="text-xs font-bold opacity-50 uppercase leading-relaxed mb-8 text-[#1d3557]">
            Automatically increase rates when regional diagnostic capacity drops below 15%.
          </p>
          <div className="relative h-2 bg-primary/5 rounded-full mb-4">
            <div className="absolute left-0 top-0 h-full w-[72.5%] bg-secondary rounded-full" />
            <div className="absolute left-[72.5%] -top-2 w-6 h-6 bg-white border-4 border-secondary rounded-full shadow-xl cursor-pointer" />
          </div>
          <div className="flex justify-between text-[10px] font-black opacity-30 uppercase text-[#1d3557]">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>

        {/* MARKET HEATMAP PREVIEW */}
        <div className={glassStyle}>
          <div className="flex justify-between items-start mb-10">
            <h4 className="text-xl font-black uppercase tracking-tighter italic text-[#1d3557]">Demand Heatmap</h4>
            <Globe size={20} className="opacity-20 text-[#1d3557]" />
          </div>
          <div className="space-y-4">
            {[
              { region: "Northeast Corridor", demand: "High", yield: "+22%" },
              { region: "West Coast / LA", demand: "Critical", yield: "+41%" },
              { region: "Midwest Rural", demand: "Stable", yield: "+5%" },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/40 rounded-[2rem] border border-white flex justify-between items-center group hover:bg-white transition-all">
                <div>
                  <p className="text-[10px] font-black uppercase opacity-30 tracking-widest text-[#1d3557]">{item.region}</p>
                  <p className="text-xs font-bold uppercase text-[#1d3557]">{item.demand} Demand</p>
                </div>
                <div className="text-emerald-500 font-black text-sm flex items-center gap-1">
                   <ArrowUpRight size={14} /> {item.yield}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVENUE PROJECTION */}
        <div className={`${glassStyle} border-primary/20`}>
          <div className="flex justify-between items-start mb-10">
            <h4 className="text-xl font-black uppercase tracking-tighter italic text-[#1d3557]">30D Projection</h4>
            <LineChart size={20} className="text-primary" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className="text-5xl font-black tracking-tighter text-[#1d3557]">$142,800</h3>
            <span className="text-xs font-black text-emerald-500">+12%</span>
          </div>
          <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-10 text-[#1d3557]">Estimated Net Payout</p>
          
          <div className="p-6 bg-primary rounded-[2.5rem] text-white">
            <div className="flex items-center gap-3 mb-3">
              <Target size={16} className="text-secondary" />
              <span className="text-[10px] font-black uppercase">Optimization Goal</span>
            </div>
            <p className="text-xs font-bold leading-relaxed opacity-80 uppercase italic">
              "Prioritize long-term rentals (30+ days) to minimize logistics overhead."
            </p>
          </div>
        </div>

      </div>

      {/* --- ALGORITHMIC SETTINGS --- */}
      <div className={glassStyle}>
        <div className="flex items-center gap-4 mb-10">
          <Settings className="text-secondary" />
          <h3 className="text-2xl font-black tracking-tighter italic uppercase text-[#1d3557]">Strategy Parameters</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Floor Price (Daily)", val: "$1,850", toggle: true },
            { label: "Utilization Ceiling", val: "95%", toggle: true },
            { label: "Minimum Duration", val: "7 Days", toggle: false },
            { label: "Emergency Markup", val: "+50%", toggle: true },
          ].map((param, i) => (
            <div key={i} className="p-8 bg-white/30 rounded-[2.5rem] border border-white relative group">
              <p className="text-[10px] font-black opacity-30 uppercase mb-4 tracking-widest text-[#1d3557]">{param.label}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-black tracking-tighter text-[#1d3557]">{param.val}</span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${param.toggle ? 'bg-secondary' : 'bg-primary/10'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${param.toggle ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MARKET ADVISORY --- */}
      <div className="p-10 rounded-[3.5rem] bg-secondary text-primary flex flex-col md:flex-row items-center gap-10">
        <div className="shrink-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
          <TrendingUp size={40} />
        </div>
        <div className="flex-1 space-y-2">
          <h4 className="text-2xl font-black italic uppercase tracking-tighter text-[#1d3557]">Market Liquidity Alert</h4>
          <p className="text-sm font-bold opacity-70 leading-relaxed uppercase text-[#1d3557]">
            A shortage of **High-Field MRI** units is projected for the Florida region starting next month. Consider relocating **Unit #08** to the Miami node to capture a projected <span className="underline font-black">25% premium</span>.
          </p>
        </div>
        <button className="bg-primary text-white px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all whitespace-nowrap shadow-xl">
          Apply Relocation
        </button>
      </div>

    </div>
  );
}