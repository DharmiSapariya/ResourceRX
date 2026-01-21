import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Clock, 
  CreditCard, 
  Package, 
  TrendingUp, 
  Calendar, 
  ChevronRight,
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import "../../App.css";

export default function ClinicDashboard() {
  const stats = [
    { label: "Active Bookings", value: "12", icon: Calendar, color: "text-blue-500" },
    { label: "Hours Logged", value: "128h", icon: Activity, color: "text-emerald-500" },
    { label: "Total Spend", value: "$14.2k", icon: CreditCard, color: "text-amber-500" },
    { label: "XP Points", value: "2,400", icon: Zap, color: "text-purple-500" },
  ];

  const recentActivity = [
    { id: 1, machine: "Siemens 3T MRI", status: "In Transit", time: "14 mins away", type: "logistic" },
    { id: 2, machine: "GE CT Scanner", status: "Completed", time: "2 hours ago", type: "success" },
    { id: 3, machine: "Dialysis Unit X2", status: "Payment Pending", time: "5 hours ago", type: "warning" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-40 pb-20 px-6 max-w-7xl mx-auto"
    >
      {/* WELCOME HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[var(--primary)] border border-white/20">
          <TrendingUp size={14} className="text-secondary" />
          Network Performance: Optimal
        </div>
        {/* Deep Blue Heading Applied Here */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)] uppercase italic">Welcome, City General</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Infrastructure Command Center</p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-between h-48 bg-white/40 shadow-sm border border-white/50">
            <div className={`w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center ${stat.color} shadow-inner`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black opacity-40 uppercase tracking-widest text-[var(--primary)]">{stat.label}</p>
              <p className="text-3xl font-black text-[var(--primary)]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* LIVE FEED / RECENT ACTIVITY */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[3rem] p-10 bg-white/40 border border-white shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black tracking-tighter text-[var(--primary)] uppercase italic">Live Resource Feed</h3>
              <button className="text-[10px] font-black uppercase text-secondary hover:underline tracking-widest">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((act) => (
                <div key={act.id} className="flex items-center gap-6 p-6 rounded-[2rem] hover:bg-white/60 transition-all border border-transparent hover:border-white shadow-sm group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-inner ${
                    act.type === 'logistic' ? 'bg-blue-500/10 text-blue-600' :
                    act.type === 'success' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {act.type === 'logistic' ? <Clock size={20} /> : 
                     act.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-lg tracking-tight text-[var(--primary)] uppercase italic group-hover:text-secondary transition-colors">{act.machine}</p>
                    <p className="text-[10px] font-bold opacity-40 uppercase text-[var(--primary)]">{act.time}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-white/80 text-[var(--primary)] border border-white rounded-full shadow-sm">{act.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS SIDEBAR */}
        <div className="space-y-6">
          <div className="glass-panel bg-[var(--primary)] text-white p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl border-none">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
               <Package size={160} />
            </div>
            <h4 className="text-xs font-black uppercase text-secondary tracking-widest mb-6">Inventory Quick-Link</h4>
            <p className="text-xl font-bold mb-8 relative z-10 leading-tight italic">Need a specific modality for a patient tomorrow?</p>
            <button className="w-full bg-white text-[var(--primary)] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all shadow-lg active:scale-95">
              Search Registry <ChevronRight size={16} />
            </button>
          </div>

          <div className="glass-panel p-10 rounded-[3rem] bg-white/40 border border-white shadow-sm">
            <h4 className="text-[10px] font-black uppercase opacity-40 tracking-widest mb-6 text-center text-[var(--primary)]">System Health</h4>
            <div className="flex justify-around items-center">
               <div className="text-center">
                  <p className="text-2xl font-black text-emerald-500">99%</p>
                  <p className="text-[8px] font-black uppercase opacity-40 text-[var(--primary)]">Uptime</p>
               </div>
               <div className="w-[1px] h-10 bg-[var(--primary)]/10" />
               <div className="text-center">
                  <p className="text-2xl font-black text-blue-500">2ms</p>
                  <p className="text-[8px] font-black uppercase opacity-40 text-[var(--primary)]">Latency</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • Infrastructure Control Node
      </footer>
    </motion.div>
  );
}