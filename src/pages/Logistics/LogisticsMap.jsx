import React from 'react';
import { motion } from 'framer-motion';
import { 
  Navigation, 
  Truck, 
  Zap, 
  Wifi, 
  Layers, 
  Maximize2, 
  MapPin,
  Compass
} from 'lucide-react';

export default function LogisticsMap() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* --- PROTOCOL HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-secondary border border-secondary/20">
            <Wifi size={14} className="animate-pulse" />
            Live Satellite Uplink • Active
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Global Positioning</h2>
        </div>

        {/* --- MAP CONTROLS --- */}
        <div className="glass-panel p-2 rounded-3xl flex gap-1 bg-white/20">
          <button className="px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-[#1d3557] text-white shadow-xl">Terrain</button>
          <button className="px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-all text-[#1d3557]">Satellite</button>
          <button className="px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-all text-[#1d3557]">Traffic</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* --- MAIN INTERACTIVE MAP CONTAINER --- */}
        <div className="lg:col-span-3 glass-panel h-[650px] rounded-[3.5rem] relative overflow-hidden bg-slate-200/50 border-4 border-white shadow-2xl">
          {/* Mock Map Texture (Grid) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1d3557_1px,transparent_1px)] [background-size:32px_32px]" />
          
          {/* Animated Assets (Mock GPS Markers) */}
          <motion.div 
            animate={{ 
              x: [200, 250, 230], 
              y: [100, 150, 120] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute z-10 cursor-pointer group"
          >
            <div className="bg-[#1d3557] text-white p-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
              <Truck size={18} />
              <div className="hidden group-hover:block pr-2">
                <p className="text-[8px] font-black uppercase leading-none">RX-882</p>
                <p className="text-[8px] font-bold opacity-60">54 MPH</p>
              </div>
            </div>
          </motion.div>

          {/* Map Overlay Tools */}
          <div className="absolute top-8 right-8 flex flex-col gap-2">
            <button className="glass-panel p-4 rounded-2xl hover:bg-white/80 transition-all text-[#1d3557]"><Maximize2 size={18} /></button>
            <button className="glass-panel p-4 rounded-2xl hover:bg-white/80 transition-all text-[#1d3557]"><Layers size={18} /></button>
            <button className="glass-panel p-4 rounded-2xl hover:bg-white/80 transition-all text-[#1d3557]"><Compass size={18} /></button>
          </div>

          <div className="absolute bottom-8 left-8 glass-panel px-8 py-6 rounded-[2rem] bg-white/60 backdrop-blur-xl">
            <div className="flex gap-10">
              <div className="text-[#1d3557]">
                <p className="text-[10px] font-black opacity-30 uppercase mb-1">Active Nodes</p>
                <p className="text-2xl font-black">14</p>
              </div>
              <div className="border-l border-[#1d3557]/10 pl-10 text-[#1d3557]">
                <p className="text-[10px] font-black opacity-30 uppercase mb-1">Average Latency</p>
                <p className="text-2xl font-black text-emerald-500">22ms</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SIDEBAR: FLEET LIST --- */}
        <div className="space-y-6">
          <div className={glassStyle}>
            <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-[#1d3557] uppercase italic">
              <Navigation size={20} className="text-secondary" /> Unit List
            </h3>
            <div className="space-y-4">
              {[
                { id: "RX-882", status: "In Transit", loc: "NY", color: "bg-emerald-500" },
                { id: "RX-441", status: "Loading", loc: "CT", color: "bg-amber-500" },
                { id: "RX-112", status: "Standby", loc: "NJ", color: "bg-[#1d3557]" },
                { id: "RX-909", status: "Delayed", loc: "PA", color: "bg-red-500" }
              ].map((unit, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/40 rounded-2xl border border-white hover:bg-white transition-all cursor-pointer">
                  <div className="flex items-center gap-4 text-[#1d3557]">
                    <div className={`w-2 h-2 rounded-full ${unit.color} animate-pulse`} />
                    <div>
                      <p className="font-black text-xs uppercase tracking-tighter">{unit.id}</p>
                      <p className="text-[9px] font-bold opacity-40 uppercase">{unit.loc} • {unit.status}</p>
                    </div>
                  </div>
                  <Zap size={14} className="text-secondary opacity-30" />
                </div>
              ))}
            </div>
          </div>

          <div className={`${glassStyle} bg-[#1d3557] text-white border-none shadow-xl shadow-[#1d3557]/20`}>
            <p className="text-[10px] font-black opacity-40 uppercase mb-4 tracking-widest">Global Coverage</p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <span className="text-2xl font-black tracking-tighter italic">99.8%</span>
                <span className="text-[10px] font-bold opacity-60 uppercase mb-1">Signal</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "99.8%" }}
                  className="h-full bg-secondary shadow-[0_0_10px_rgba(168,218,220,1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}