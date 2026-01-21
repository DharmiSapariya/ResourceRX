import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Wrench, 
  AlertCircle, 
  CheckCircle2, 
  Filter, 
  ChevronRight,
  ArrowRight,
  History
} from 'lucide-react';

export default function TechServiceOrders() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const orders = [
    { 
      id: "SO-4402", 
      type: "Emergency Repair", 
      asset: "MRI Magnetom #04", 
      location: "North General - Suite B", 
      time: "ASAP", 
      status: "Dispatched",
      priority: "CRITICAL" 
    },
    { 
      id: "SO-3918", 
      type: "Preventative Maint.", 
      asset: "GE Revolution CT", 
      location: "Summit Radiology", 
      time: "14:30 PM", 
      status: "Scheduled",
      priority: "STANDARD" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- WORK QUEUE HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase mb-4 text-primary border border-primary/20">
            <Calendar size={12} className="text-secondary" /> Daily Workload: 06 Orders
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Service Orders</h2>
        </div>
        
        <div className="flex gap-3">
          <button className="glass-panel px-8 py-4 rounded-3xl flex items-center gap-2 text-[10px] font-black uppercase hover:bg-white transition-all text-[#1d3557]">
            <Filter size={16} /> Filter By Asset
          </button>
          <button className="glass-panel px-8 py-4 rounded-3xl flex items-center gap-2 text-[10px] font-black uppercase hover:bg-white transition-all text-[#1d3557]">
            <History size={16} /> Past 24h
          </button>
        </div>
      </div>

      {/* --- ACTIVE ORDER (THE FOCUS) --- */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${glassStyle} bg-[#1d3557] text-white border-none mb-12 shadow-2xl shadow-[#1d3557]/30`}
      >
        <div className="absolute top-0 right-0 p-8">
          <div className="flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full border border-secondary/30">
            <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="text-[10px] font-black uppercase">Active Mission</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Critical Action Required</p>
            <h3 className="text-5xl font-black tracking-tighter italic uppercase">{orders[0].type}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/60">
                <MapPin size={20} className="text-secondary" />
                <span className="text-sm font-bold uppercase">{orders[0].location}</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Wrench size={20} className="text-secondary" />
                <span className="text-sm font-bold uppercase">{orders[0].asset}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <div className="p-6 bg-white/10 rounded-3xl border border-white/10">
              <p className="text-[10px] font-black uppercase opacity-40 mb-2">Issue Description</p>
              <p className="text-xs font-bold leading-relaxed">Liquid Helium levels reported at 92%. Immediate topping and seal inspection required to prevent quench.</p>
            </div>
            <button className="w-full bg-secondary text-[#1d3557] py-6 rounded-3xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              Commence Protocol <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* --- PENDING QUEUE --- */}
      <div className="space-y-6">
        {/* Label changed to Deep Blue */}
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 ml-8 text-[#1d3557]">Upcoming Queue</h4>
        
        {orders.slice(1).map((order, i) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass-panel p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between border-white hover:border-secondary/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary group-hover:bg-secondary transition-colors">
                <Clock size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-black uppercase bg-primary/5 px-2 py-0.5 rounded-full text-[#1d3557]">{order.id}</span>
                  <span className="text-[9px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">{order.time}</span>
                </div>
                {/* Heading changed to Deep Blue */}
                <h4 className="text-xl font-black uppercase tracking-tight italic text-[#1d3557]">{order.type}</h4>
                <p className="text-xs font-bold opacity-40 uppercase text-[#1d3557]">{order.asset}</p>
              </div>
            </div>

            <div className="flex items-center gap-12 mt-6 md:mt-0">
               <div className="text-right hidden md:block text-[#1d3557]">
                  <p className="text-[9px] font-black opacity-30 uppercase mb-1">Zone</p>
                  <p className="text-sm font-black uppercase tracking-tighter">Sector 09-West</p>
               </div>
               <div className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${
                 order.priority === 'CRITICAL' ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-[#1d3557]/60'
               }`}>
                 {order.priority}
               </div>
               <ChevronRight size={24} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#1d3557]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- ROUTE OPTIMIZATION INSIGHT --- */}
      <div className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-6">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
          <CheckCircle2 size={24} />
        </div>
        <div className="text-[#1d3557]">
          <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Route Optimized</h5>
          <p className="text-xs font-bold opacity-50 uppercase">By completing SO-3918 today, you reduce tomorrow's travel time by 45 minutes.</p>
        </div>
      </div>

    </div>
  );
}