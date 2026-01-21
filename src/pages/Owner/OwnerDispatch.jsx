import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  Search,
  Filter,
  ExternalLink,
  Activity
} from 'lucide-react';

export default function OwnerDispatch() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const activeDeployments = [
    { 
      id: "DEP-992", 
      asset: "Siemens Magnetom Sola", 
      status: "In Transit", 
      destination: "Central Mercy Clinic", 
      eta: "14:02 PM", 
      progress: 65,
      severity: "High" 
    },
    { 
      id: "DEP-884", 
      asset: "GE Revolution CT", 
      status: "On Site", 
      destination: "Northwell Health NY", 
      eta: "ARRIVED", 
      progress: 100,
      severity: "Standard" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-8">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-primary">
            <Truck size={14} className="text-secondary" />
            Live Asset Tracking • Protocol 09-D
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic text-[#1d3557] uppercase">Deployment Logs</h2>
        </div>

        {/* --- GLOBAL SEARCH --- */}
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20" size={18} />
            <input 
              type="text" 
              placeholder="Track Asset ID or Site..." 
              className="glass-panel pl-14 pr-8 py-4 rounded-3xl font-bold text-xs outline-none w-80 focus:border-secondary/50 transition-all shadow-inner text-[#1d3557]"
            />
          </div>
          <button className="glass-panel px-6 rounded-3xl hover:bg-white/50 transition-all border-none">
            <Filter size={18} className="text-primary opacity-60" />
          </button>
        </div>
      </div>

      {/* --- LIVE DEPLOYMENT CARDS --- */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6 px-2">
          <h3 className="text-xl font-black ml-4 uppercase tracking-widest opacity-30 flex items-center gap-2 text-[#1d3557]">
            <Activity size={16} /> Active Movements
          </h3>
          
          {activeDeployments.map((deployment, i) => (
            <motion.div 
              key={deployment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${glassStyle} group hover:border-secondary/30`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary border border-white/50 shadow-inner">
                    <Navigation size={28} className={deployment.status === "In Transit" ? "animate-pulse text-secondary" : "text-[#1d3557]"} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-1 text-[#1d3557]">{deployment.id}</p>
                    {/* Item Heading changed to Deep Blue */}
                    <h4 className="text-2xl font-black tracking-tighter uppercase italic text-[#1d3557]">{deployment.asset}</h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                    deployment.status === "In Transit" ? "bg-secondary/10 text-secondary" : "bg-emerald-500/10 text-emerald-600"
                  }`}>
                    {deployment.status}
                  </span>
                  <p className="text-xl font-black mt-2 text-[#1d3557]">{deployment.eta}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end text-[10px] font-black uppercase opacity-40 text-[#1d3557]">
                  <span>Transit Path: New Jersey Corridor</span>
                  <span>{deployment.progress}% Complete</span>
                </div>
                <div className="h-2 bg-primary/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${deployment.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                <div className="flex items-center gap-8 pt-4 border-t border-primary/5">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-secondary" />
                    <span className="text-xs font-bold uppercase text-[#1d3557]">{deployment.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-black opacity-40 uppercase tracking-tighter text-[#1d3557]">Chain of Custody Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SIDEBAR: DISPATCH SUMMARY --- */}
        <div className="space-y-6 px-2">
          <div className={glassStyle}>
            {/* Sidebar Heading changed to Deep Blue */}
            <h3 className="text-lg font-black mb-8 uppercase italic tracking-tighter text-[#1d3557]">System Audit</h3>
            <div className="space-y-6">
              {[
                { label: "Total Deployments", val: "1,240" },
                { label: "Avg. Transit Time", val: "4.2 Hrs" },
                { label: "Incidents (Q1)", val: "0.02%" },
                { label: "Partner Carriers", val: "18" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-primary/5 last:border-0">
                  <span className="text-[10px] font-black opacity-30 uppercase text-[#1d3557]">{stat.label}</span>
                  <span className="font-black text-sm text-[#1d3557]">{stat.val}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 bg-primary text-white py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all">
              View All Historical Logs
            </button>
          </div>

          <div className={`${glassStyle} bg-secondary/10 border-secondary/20 flex flex-col items-center text-center`}>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm">
              <Clock size={24} />
            </div>
            {/* Sidebar Box Heading changed to Deep Blue */}
            <h4 className="text-lg font-black uppercase tracking-tighter text-[#1d3557]">Schedule Next Move</h4>
            <p className="text-[10px] font-bold opacity-50 uppercase mt-2 mb-6 leading-relaxed text-[#1d3557]">
              Pre-book specialized transit for assets ending their current rental period.
            </p>
            <button className="text-[10px] font-black uppercase text-primary hover:text-secondary transition-colors">
              Open Scheduler →
            </button>
          </div>
        </div>
      </div>

      {/* --- RECENT COMPLETED TRANSITS TABLE --- */}
      <div className={`${glassStyle} mx-2`}>
        <div className="flex justify-between items-center mb-10">
          {/* Table Heading changed to Deep Blue */}
          <h3 className="text-2xl font-black tracking-tighter uppercase italic text-[#1d3557]">Transit History</h3>
          <button className="text-[10px] font-black opacity-30 uppercase hover:opacity-100 transition-opacity text-[#1d3557]">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] text-[#1d3557]">
                <th className="px-6 pb-4">Asset ID</th>
                <th className="px-6 pb-4">Logistics Partner</th>
                <th className="px-6 pb-4">Completion Date</th>
                <th className="px-6 pb-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row} className="bg-white/40 rounded-3xl overflow-hidden group hover:bg-white/60 transition-all">
                  <td className="px-6 py-6 font-bold text-xs rounded-l-3xl text-[#1d3557]">RX-ALPHA-0{row}</td>
                  <td className="px-6 py-6 text-xs font-black uppercase text-[#1d3557]">Starlink Logistics <span className="opacity-20 ml-2">#4491</span></td>
                  <td className="px-6 py-6 text-xs opacity-50 text-[#1d3557]">Jan {12 - row}, 2026</td>
                  <td className="px-6 py-6 text-right rounded-r-3xl">
                    <button className="p-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <ExternalLink size={16} className="opacity-20 text-[#1d3557]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}