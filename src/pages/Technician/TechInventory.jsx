import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Box, 
  Truck, 
  RotateCcw, 
  AlertCircle, 
  Plus, 
  QrCode, 
  ClipboardList,
  Search,
  Zap
} from 'lucide-react';

export default function TechInventory() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const inventory = [
    { id: "PRT-901", name: "Cryo-Compressor Seal", category: "MRI Parts", qty: 2, status: "In Stock" },
    { id: "PRT-442", name: "High-Voltage Cable Set", category: "CT Hardware", qty: 1, status: "Low Stock" },
    { id: "PRT-118", name: "Helium Refill Valve", category: "Consumables", qty: 5, status: "In Stock" },
    { id: "PRT-009", name: "Digital X-Ray Grid", category: "Imaging", qty: 0, status: "Out of Stock" },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- INVENTORY HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase mb-4 text-primary border border-primary/20">
            <Truck size={12} className="text-secondary" /> Unit Van: RRX-MOBILE-04
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Tactical Inventory</h2>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-white/60 p-5 rounded-3xl border border-white hover:bg-white transition-all shadow-sm">
            <QrCode size={24} className="text-primary" />
          </button>
          <button className="bg-primary text-white px-10 py-5 rounded-3xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 hover:bg-secondary transition-all shadow-xl">
            <Plus size={18} /> Request Part
          </button>
        </div>
      </div>

      {/* --- QUICK SCAN STATS --- */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Van Capacity", val: "84%", sub: "420kg / 500kg", icon: Package, color: "text-primary" },
          { label: "Critical Shortage", val: "01", sub: "Gantry Brushes", icon: AlertCircle, color: "text-red-500" },
          { label: "Pending Returns", val: "03", sub: "Defective Modules", icon: RotateCcw, color: "text-secondary" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2.5rem] flex items-center gap-6 border-white/40">
            <div className={`p-5 rounded-2xl bg-white/50 ${stat.color} shadow-inner`}>
              <stat.icon size={28} />
            </div>
            <div className="text-[#1d3557]">
              <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black tracking-tighter">{stat.val}</h3>
              <p className="text-[9px] font-bold opacity-50 uppercase tracking-tighter">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- SEARCH & FILTERS --- */}
      <div className="flex gap-4 px-4">
        <div className="flex-1 relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 text-[#1d3557]" size={18} />
          <input 
            type="text" 
            placeholder="Search Serial, Part #, or Category..." 
            className="w-full glass-panel pl-14 pr-8 py-5 rounded-[2rem] font-bold text-xs bg-white/40 border-none outline-none focus:ring-2 ring-secondary/30 transition-all text-[#1d3557]"
          />
        </div>
        <button className="glass-panel px-8 rounded-[2rem] text-[10px] font-black uppercase opacity-60 hover:opacity-100 hover:bg-white transition-all text-[#1d3557]">
          Filter
        </button>
      </div>

      {/* --- PARTS REGISTRY --- */}
      <div className={glassStyle}>
        <div className="flex justify-between items-center mb-10">
          {/* Subheading changed to Deep Blue */}
          <h3 className="text-2xl font-black tracking-tighter italic uppercase flex items-center gap-3 text-[#1d3557]">
            <Box className="text-secondary" /> Parts Registry
          </h3>
          <div className="flex items-center gap-2 text-[10px] font-black opacity-30 uppercase text-[#1d3557]">
             <ClipboardList size={14} /> Last Cycle Count: Today 08:00
          </div>
        </div>

        <div className="grid gap-4">
          {inventory.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white/40 rounded-[2.5rem] border border-white hover:bg-white/80 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/30 font-black text-[10px]">
                  {item.category.substring(0, 3).toUpperCase()}
                </div>
                <div className="text-[#1d3557]">
                  <p className="text-[9px] font-black opacity-30 uppercase tracking-widest">{item.id}</p>
                  <h4 className="text-sm font-black uppercase tracking-tight">{item.name}</h4>
                  <p className="text-[10px] font-bold opacity-40 uppercase">{item.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-12 mt-6 md:mt-0 text-[#1d3557]">
                <div className="text-center">
                  <p className="text-[9px] font-black opacity-30 uppercase mb-1">Quantity</p>
                  <p className="text-xl font-black">{item.qty}</p>
                </div>
                <div className="w-32 text-right">
                  <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${
                    item.status === 'In Stock' ? 'bg-emerald-500/10 text-emerald-600' : 
                    item.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-600' : 
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <button className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary">
                  <Plus size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- AUTOMATED LOGISTICS LINK --- */}
      <div className="p-10 rounded-[3.5rem] bg-[#1d3557] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl">
        <div className="shrink-0 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
          <Zap size={32} className="text-secondary" fill="currentColor" />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h4 className="text-2xl font-black italic uppercase tracking-tighter">Smart Restock Active</h4>
          <p className="text-xs font-bold opacity-60 leading-relaxed uppercase max-w-2xl">
            Based on your next 3 missions at **Mercy Hospital**, the system has pre-ordered **02 Magnetic Shims** and **01 Cooling Fan** for delivery to your next site.
          </p>
        </div>
        <button className="bg-secondary text-primary px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all whitespace-nowrap">
          View Shipment
        </button>
      </div>

    </div>
  );
}