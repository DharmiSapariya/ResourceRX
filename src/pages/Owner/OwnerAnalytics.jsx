import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Target,
  Clock,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';
import '../../App.css';

export default function OwnerAnalytics() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500 bg-white/40 border border-white/20";

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-8">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4 flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[var(--primary)] border border-white/20">
            <BrainCircuit size={14} className="text-secondary" />
            AI-Driven Predictive Insights
          </div>
          {/* Changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic text-[var(--primary)] uppercase">Asset Intelligence</h2>
        </div>
        <div className="flex gap-3">
          {['7D', '1M', '1Y', 'ALL'].map((range) => (
            <button key={range} className="px-5 py-2 glass-panel rounded-2xl text-[10px] font-black hover:bg-[var(--primary)] hover:text-white transition-all bg-white/40 text-[var(--primary)] border border-white/20">
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* --- TOP ROW: CORE PERFORMANCE METRICS --- */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "Net Yield", val: "$42,800", change: "+12.4%", up: true, icon: TrendingUp },
          { label: "Uptime Rate", val: "99.4%", change: "+0.2%", up: true, icon: Activity },
          { label: "Market Demand", val: "High", change: "Tier-1", up: true, icon: Target },
          { label: "Maint. Index", val: "82/100", change: "-4%", up: false, icon: ShieldCheck },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 rounded-[2.5rem] relative bg-white/40 border border-white shadow-sm"
          >
            <stat.icon className="text-secondary mb-6" size={24} />
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[var(--primary)]">{stat.label}</p>
            <div className="flex items-end gap-3 mt-1">
              <h3 className="text-3xl font-black tracking-tighter text-[var(--primary)]">{stat.val}</h3>
              <span className={`text-[10px] font-bold mb-1 flex items-center ${stat.up ? 'text-emerald-500' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- SECOND ROW: VISUAL DATA & TELEMETRY --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* REVENUE VS UTILIZATION CHART AREA */}
        <div className={`lg:col-span-2 ${glassStyle}`}>
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-2xl font-black tracking-tighter italic uppercase text-[var(--primary)]">Performance Matrix</h3>
              <p className="text-xs font-bold opacity-40 uppercase text-[var(--primary)]">Revenue correlated with machine hours</p>
            </div>
            <BarChart3 className="text-[var(--primary)] opacity-20" size={32} />
          </div>
          
          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {[60, 80, 45, 90, 100, 70, 85, 65, 95, 50, 75, 88].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-[var(--primary)] to-secondary/40 rounded-t-xl relative group"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-[8px] font-black py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  ${h}k
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-4 text-[10px] font-black opacity-20 uppercase tracking-widest text-[var(--primary)]">
            <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
          </div>
        </div>

        {/* MECHANICAL HEALTH / TELEMETRY */}
        <div className={glassStyle}>
          <h3 className="text-xl font-black mb-10 flex items-center gap-3 italic uppercase text-[var(--primary)]">
            <Zap className="text-secondary" /> Live Telemetry
          </h3>
          <div className="space-y-8">
            {[
              { label: "Magnet Cooling (He)", status: "Optimal", val: "98%", color: "bg-emerald-500" },
              { label: "Tube Load (CT)", status: "Heavy", val: "74%", color: "bg-amber-500" },
              { label: "Power Stability", status: "Steady", val: "100%", color: "bg-emerald-500" },
              { label: "Software Latency", status: "Nominal", val: "12ms", color: "bg-emerald-500" }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tight text-[var(--primary)]">{item.label}</p>
                    <p className="text-[9px] font-bold opacity-30 uppercase text-[var(--primary)]">{item.status}</p>
                  </div>
                  <p className="font-black text-sm text-[var(--primary)]">{item.val}</p>
                </div>
                <div className="h-1 bg-[var(--primary)]/5 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: item.val.includes('%') ? item.val : '80%' }} />
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-12 py-5 bg-[var(--primary)]/5 rounded-3xl border border-[var(--primary)]/10 text-[10px] font-black uppercase tracking-widest text-[var(--primary)] hover:bg-white transition-all shadow-sm">
            Export Full Diagnostic Report
          </button>
        </div>
      </div>

      {/* --- LOWER ROW: WEAR-AND-TEAR & PREDICTIVE MAINTENANCE --- */}
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className={`${glassStyle} bg-secondary/5 border-secondary/20 shadow-lg shadow-secondary/5`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-black tracking-tighter uppercase italic text-[var(--primary)]">Predictive Maintenance</h3>
          </div>
          <p className="text-xs font-bold leading-relaxed text-[var(--primary)] opacity-60 mb-8 uppercase">
            Based on current cycle load, <span className="text-[var(--primary)] font-black">Siemens MRI #04</span> will require a gradient coil calibration in approximately <span className="text-secondary font-black">14 days</span>.
          </p>
          <div className="p-6 bg-white/40 rounded-[2rem] border border-white flex justify-between items-center shadow-inner">
            <span className="text-[10px] font-black uppercase text-[var(--primary)]">Schedule Pre-emptive Service</span>
            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-md">
              Book Tech
            </button>
          </div>
        </div>

        <div className={glassStyle}>
          <h3 className="text-xl font-black mb-8 flex items-center gap-3 italic uppercase text-[var(--primary)]">
            Asset Value vs. Depreciation
          </h3>
          <div className="relative h-32 w-full">
            <svg className="w-full h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M0,100 L100,60 L200,80 L300,30 L400,50 L500,10" 
                fill="none" stroke="var(--primary)" strokeWidth="4" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M0,10 L150,40 L300,70 L500,120" 
                fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="8 4" opacity="0.2"
              />
            </svg>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2 text-[var(--primary)]">
              <div className="w-3 h-3 bg-[var(--primary)] rounded-full" />
              <span className="text-[9px] font-black uppercase opacity-40">Revenue Gen</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--primary)]">
              <div className="w-3 h-3 border-2 border-secondary rounded-full" />
              <span className="text-[9px] font-black uppercase opacity-40">Asset Depr.</span>
            </div>
          </div>
        </div>

      </div>

      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • AI Predictive Node
      </footer>
    </div>
  );
}