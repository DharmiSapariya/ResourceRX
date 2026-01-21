import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  ShieldCheck, 
  ExternalLink,
  Calendar,
  Package,
  Clock
} from 'lucide-react';

export default function LogisticsLogs() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const logEntries = [
    { id: "LOG-RX-882", asset: "Siemens Magnetom Sola", clinic: "Summit Health NJ", date: "JAN 12, 2026", status: "VERIFIED", type: "Heavy Transit" },
    { id: "LOG-RX-774", asset: "GE Revolution CT", clinic: "Northwell Health NY", date: "JAN 10, 2026", status: "VERIFIED", type: "Emergency" },
    { id: "LOG-RX-441", asset: "Dialysis System V4", clinic: "City General", date: "JAN 08, 2026", status: "ARCHIVED", type: "Standard" },
    { id: "LOG-RX-112", asset: "Mobile X-Ray Unit", clinic: "Mercy Hospital", date: "JAN 05, 2026", status: "VERIFIED", type: "Heavy Transit" },
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* --- PROTOCOL HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[#1d3557] border border-[#1d3557]/10">
            <ShieldCheck size={14} className="text-emerald-500" />
            Immutable Audit Trail • Protocol 10-C
          </div>
          {/* Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Handover Registry</h2>
        </div>

        {/* --- SEARCH & FILTER BAR --- */}
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 text-[#1d3557]" size={18} />
            <input 
              type="text" 
              placeholder="Search Asset ID or Clinic..." 
              className="glass-panel pl-14 pr-8 py-4 rounded-3xl font-bold text-xs outline-none w-80 focus:border-secondary/50 transition-all text-[#1d3557]"
            />
          </div>
          <button className="glass-panel px-6 rounded-3xl hover:bg-white/50 transition-all text-[#1d3557]">
            <Filter size={18} className="opacity-60" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* --- SIDEBAR: STATISTICS --- */}
        <div className="space-y-6">
          <div className={glassStyle}>
            <p className="text-[10px] font-black opacity-30 uppercase mb-6 tracking-widest text-[#1d3557]">Monthly Summary</p>
            <div className="space-y-6 text-[#1d3557]">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold opacity-60">TOTAL LOGS</span>
                <span className="font-black text-xl tracking-tighter">1,284</span>
              </div>
              <div className="flex justify-between items-center text-emerald-500">
                <span className="text-xs font-bold">VERIFIED</span>
                <span className="font-black text-xl tracking-tighter">100%</span>
              </div>
            </div>
          </div>
          
          <div className={`${glassStyle} bg-secondary/10 border-secondary/20`}>
             <Package className="text-secondary mb-4" />
             <h4 className="text-lg font-black tracking-tighter uppercase mb-2 text-[#1d3557]">Export Data</h4>
             <p className="text-[10px] font-bold opacity-50 uppercase leading-relaxed mb-6 text-[#1d3557]">Download full encrypted registry for insurance compliance.</p>
             <button className="w-full bg-[#1d3557] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-lg">
               <Download size={14} /> Full Export (CSV)
             </button>
          </div>
        </div>

        {/* --- MAIN LOGS TABLE --- */}
        <div className="lg:col-span-3 space-y-4">
          {logEntries.map((log, i) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-6 rounded-[2.5rem] flex items-center justify-between group hover:border-secondary/30 transition-all cursor-pointer bg-white/30"
            >
              <div className="flex items-center gap-8">
                {/* Visual Type Indicator */}
                <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-[#1d3557]/5 flex items-center justify-center text-[#1d3557]/20 group-hover:text-secondary transition-colors">
                  <FileText size={24} />
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-black text-xl tracking-tighter uppercase text-[#1d3557]">{log.asset}</p>
                    <span className="text-[8px] font-black px-2 py-0.5 rounded-full bg-[#1d3557]/5 opacity-40 uppercase tracking-widest text-[#1d3557]">{log.type}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest flex items-center gap-1 text-[#1d3557]">
                      <Calendar size={10} /> {log.date}
                    </p>
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest flex items-center gap-1 text-[#1d3557]">
                      <Clock size={10} /> 14:02 PM
                    </p>
                    <p className="text-[10px] font-black text-[#1d3557] italic">{log.id}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-[10px] font-black opacity-30 uppercase mb-1 text-[#1d3557]">Clinic Partner</p>
                  <p className="font-bold text-sm text-[#1d3557] uppercase">{log.clinic}</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-4 rounded-2xl bg-white border border-[#1d3557]/5 text-[#1d3557] opacity-40 hover:opacity-100 hover:text-secondary transition-all">
                    <ExternalLink size={18} />
                  </button>
                  <button className="p-4 rounded-2xl bg-[#1d3557] text-white shadow-lg shadow-[#1d3557]/20 hover:scale-110 transition-transform">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* LOAD MORE BUTTON */}
          <button className="w-full py-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-20 hover:opacity-100 transition-opacity text-[#1d3557]">
            Load Historical Archives
          </button>
        </div>
      </div>
    </div>
  );
}