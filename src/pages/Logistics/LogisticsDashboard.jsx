import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Zap, 
  Globe, 
  Users, 
  ArrowUpRight, 
  Activity, 
  ShieldCheck, 
  Clock,
  BarChart3
} from 'lucide-react';

export default function LogisticsDashboard() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const stats = [
    { label: "Active Fleet", value: "24", sub: "8 in Transit", icon: Truck, color: "text-primary" },
    { label: "Avg. Velocity", value: "42m", sub: "-12% vs last week", icon: Zap, color: "text-secondary" },
    { label: "System Health", value: "98.2%", sub: "Nodes Optimal", icon: ShieldCheck, color: "text-emerald-500" },
    { label: "Active Techs", value: "18", sub: "4 On Standby", icon: Users, color: "text-primary" },
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4 flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[#1d3557] border border-[#1d3557]/10">
            <BarChart3 size={14} className="text-secondary" />
            Operational Intelligence
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter uppercase italic text-[#1d3557]">Fleet Command</h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">Network Status</p>
          <p className="text-sm font-bold flex items-center gap-2 text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>

      {/* --- TOP STATS GRID --- */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 rounded-[2.5rem] h-48 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-default"
          >
            <stat.icon className={stat.color} size={24} />
            <div className="text-[#1d3557]">
              <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">{stat.label}</p>
              <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
              <p className="text-[10px] font-bold opacity-60 mt-1 uppercase">{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- MIDDLE SECTION: NETWORK & RECENT ACTIVITY --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* GLOBAL CONNECTIVITY CARD */}
        <div className={`lg:col-span-2 ${glassStyle} bg-[#1d3557] text-white border-none shadow-2xl shadow-[#1d3557]/20`}>
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[350px]">
            <div>
              <h3 className="text-3xl font-black tracking-tighter mb-4 italic text-secondary">Starlink Mesh Nodes</h3>
              <p className="text-sm font-bold opacity-60 max-w-sm leading-relaxed">
                Real-time satellite tracking active for all Class-7 medical transport vehicles across the Eastern Seaboard.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-white text-[#1d3557] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-secondary hover:text-white transition-all shadow-lg">
                Access Live Node Map <ArrowUpRight size={16} />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-white/10">
                Signal Report
              </button>
            </div>
          </div>
          <Globe className="absolute -right-20 -bottom-20 opacity-10 text-white" size={450} />
        </div>

        {/* LOGISTICS FEED */}
        <div className={glassStyle}>
          <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-[#1d3557] uppercase italic">
            <Clock className="text-secondary" /> Dispatch Feed
          </h3>
          <div className="space-y-6">
            {[
              { time: "2m ago", event: "RRX-882 Arrived", loc: "Summit Health" },
              { time: "14m ago", event: "Pickup Confirmed", loc: "Northwell NY" },
              { time: "28m ago", event: "Route Recalculated", loc: "I-95 North" },
              { time: "1h ago", event: "New Assignment", loc: "Boston Med" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-[#1d3557]/5 last:border-0">
                <div className="w-2 h-2 rounded-full bg-secondary mt-1" />
                <div className="text-[#1d3557]">
                  <p className="text-[10px] font-black opacity-30 uppercase">{item.time} • {item.loc}</p>
                  <p className="text-xs font-bold uppercase tracking-tight">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- LOWER SECTION: FLEET UTILIZATION --- */}
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className={glassStyle}>
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black tracking-tighter uppercase italic text-[#1d3557]">Asset Distribution</h3>
            <Activity className="text-secondary" />
          </div>
          <div className="space-y-6">
            {["MRI Units", "CT Scanners", "Dialysis Kits"].map((label, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] font-black mb-2 uppercase opacity-40 text-[#1d3557]">
                  <span>{label}</span>
                  <span>{85 - (i * 15)}% Capacity</span>
                </div>
                <div className="h-2 bg-[#1d3557]/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${85 - (i * 15)}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-[#1d3557]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${glassStyle} flex flex-col items-center justify-center text-center group cursor-pointer`}>
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
            <Truck size={32} />
          </div>
          <h4 className="text-2xl font-black tracking-tighter uppercase text-[#1d3557]">Expand Fleet Operations</h4>
          <p className="text-xs font-bold opacity-40 mt-2 max-w-[200px] uppercase text-[#1d3557]">Review pending carrier applications for Q1 expansion.</p>
        </div>
      </div>
    </div>
  );
}