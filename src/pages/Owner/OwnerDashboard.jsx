import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Activity, 
  DollarSign, 
  AlertCircle, 
  ArrowUpRight, 
  ChevronRight,
  Zap
} from 'lucide-react';

export default function OwnerDashboard() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const mainStats = [
    { label: "Fleet Valuation", value: "$4.2M", sub: "12 Active Assets", icon: Zap, color: "text-secondary" },
    { label: "Monthly Revenue", value: "$128.4k", sub: "+14.2% Growth", icon: DollarSign, color: "text-emerald-500" },
    { label: "Avg. Utilization", value: "92%", sub: "Critical Demand", icon: Activity, color: "text-primary" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-primary">
            <Activity size={14} className="text-secondary" />
            System Status: 100% Operational
          </div>
          {/* Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic text-[#1d3557]">Control Center</h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em]">Owner ID</p>
          <p className="text-sm font-bold tracking-widest text-primary">RRX-OWN-88102</p>
        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-3 gap-8">
        {mainStats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={glassStyle}
          >
            <stat.icon className={`${stat.color} mb-8`} size={32} />
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-2">{stat.label}</p>
            {/* Value changed to Deep Blue */}
            <h3 className="text-4xl font-black tracking-tighter mb-2 text-[#1d3557]">{stat.value}</h3>
            <p className="text-[11px] font-bold text-primary/60">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* MIDDLE SECTION: LIVE MONITORING & ALERTS */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LIVE DEPLOYMENT MAP PREVIEW */}
        <div className={`lg:col-span-2 ${glassStyle} min-h-[400px] flex flex-col justify-between`}>
          <div className="flex justify-between items-start">
            <div>
              {/* Heading changed to Deep Blue */}
              <h3 className="text-2xl font-black tracking-tighter italic uppercase text-[#1d3557]">Fleet Pulse</h3>
              <p className="text-xs font-bold opacity-40 uppercase">Real-time GPS distribution</p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              Launch Global Map <ArrowUpRight size={14} />
            </button>
          </div>
          
          {/* Mock Map Visual */}
          <div className="flex-1 my-8 bg-primary/5 rounded-[2.5rem] border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1d3557_2px,transparent_2px)] [background-size:30px_30px]" />
            <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-secondary rounded-full animate-ping" />
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-secondary rounded-full animate-ping" />
          </div>
        </div>

        {/* RECENT ALERTS */}
        <div className={glassStyle}>
          {/* Heading changed to Deep Blue */}
          <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-[#1d3557]">
            <AlertCircle className="text-red-500" /> Notifications
          </h3>
          <div className="space-y-6">
            {[
              { type: 'Booking', msg: 'New MRI Request: Mercy Clinic', time: '2m ago' },
              { type: 'Maintenance', msg: 'CT Scanner #04 Sensor Alert', time: '14m ago' },
              { type: 'Finance', msg: 'Settlement $12,400 Processed', time: '1h ago' }
            ].map((alert, i) => (
              <div key={i} className="p-6 bg-white/40 rounded-3xl border border-white group cursor-pointer hover:bg-white/60 transition-all">
                <p className="text-[9px] font-black opacity-30 uppercase mb-1">{alert.time} • {alert.type}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold uppercase tracking-tight text-[#1d3557]">{alert.msg}</p>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOWER SECTION: ASSET PERFORMANCE PREVIEW */}
      <div className={glassStyle}>
        <div className="flex justify-between items-center mb-10">
          {/* Heading changed to Deep Blue */}
          <h3 className="text-2xl font-black tracking-tighter italic uppercase text-[#1d3557]">Asset Yield Index</h3>
          <TrendingUp className="text-secondary" />
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {["Siemens MRI", "GE CT Scanner", "Dialysis V3", "Mobile X-Ray"].map((asset, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-[10px] font-black uppercase opacity-40">{asset}</p>
                <p className="text-xs font-black text-[#1d3557]">{88 - (i * 12)}%</p>
              </div>
              <div className="h-1.5 bg-primary/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${88 - (i * 12)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}