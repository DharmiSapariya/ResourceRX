import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Activity, 
  Truck, 
  Zap,
  PackageCheck
} from 'lucide-react';
import '../../App.css';

export default function ClinicTracking() {
  const navigate = useNavigate();

  const milestones = [
    { status: "Asset Dispatched", time: "12:05 PM", active: false },
    { status: "In Transit", time: "12:18 PM", active: true },
    { status: "Site Calibration", time: "ETA 12:45 PM", active: false },
    { status: "Operation Start", time: "ETA 01:00 PM", active: false }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* TRACKING HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-[10px] font-black uppercase mb-4 text-indigo-600 border border-indigo-500/20">
          <Activity size={14} className="animate-pulse" />
          Live Infrastructure Feed
        </div>
        {/* Changed to Deep Blue */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)]">Live Tracking</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Tesla MRI 3.0T • Deployment in Progress</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* VIRTUAL MAP AREA */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[3.5rem] p-4 h-[400px] relative overflow-hidden bg-slate-200">
             {/* Map Placeholder Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="relative">
                   <div className="absolute inset-0 bg-indigo-500/20 blur-3xl animate-pulse rounded-full" />
                   <Navigation size={64} className="text-indigo-600 relative rotate-45" />
                </div>
             </div>
             
             {/* Floating Map UI */}
             <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="glass-panel bg-white/90 p-6 rounded-3xl shadow-2xl border border-white">
                   <p className="text-[10px] font-black uppercase opacity-40 text-[var(--primary)]">Current Velocity</p>
                   <p className="text-2xl font-black text-[var(--primary)]">42 <span className="text-sm">km/h</span></p>
                </div>
                <div className="bg-primary text-white p-6 rounded-3xl shadow-2xl">
                   <p className="text-[10px] font-black uppercase opacity-40 text-indigo-300">ETA to Clinic</p>
                   <p className="text-2xl font-black">14 <span className="text-sm opacity-50">mins</span></p>
                </div>
             </div>
          </div>

          <div className="glass-panel rounded-[3rem] p-10 bg-white/40 border border-white">
             <h4 className="text-[10px] font-black uppercase opacity-40 mb-8 tracking-[0.3em] text-[var(--primary)]">Protocol Milestones</h4>
             <div className="space-y-6">
                {milestones.map((m, i) => (
                   <div key={i} className={`flex items-center gap-6 ${m.active ? "opacity-100" : "opacity-30"}`}>
                      <div className={`w-3 h-3 rounded-full ${m.active ? "bg-indigo-600 ring-8 ring-indigo-500/20" : "bg-[var(--primary)]"}`} />
                      <div className="flex-1 border-b border-[var(--primary)]/5 pb-4 flex justify-between items-center">
                         <p className="font-black tracking-tight text-lg text-[var(--primary)] uppercase italic">{m.status}</p>
                         <p className="text-sm font-bold text-[var(--primary)]">{m.time}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* LOGISTICS SIDEBAR */}
        <div className="space-y-6">
          <div className="glass-panel bg-primary text-white p-10 rounded-[3rem] space-y-8 shadow-2xl border-none">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 shadow-inner">
               <Truck size={32} />
            </div>
            
            <div>
               <h4 className="text-[10px] font-black uppercase text-indigo-400 tracking-widest mb-4">Unit Details</h4>
               <div className="space-y-4">
                  <div className="flex justify-between font-bold text-xs uppercase tracking-tight">
                    <span className="opacity-50">Operator</span>
                    <span>John Doe (Certified)</span>
                  </div>
                  <div className="flex justify-between font-bold text-xs uppercase tracking-tight">
                    <span className="opacity-50">Unit ID</span>
                    <span>RX-MRI-88</span>
                  </div>
                  <div className="flex justify-between font-bold text-xs uppercase tracking-tight">
                    <span className="opacity-50">Payload</span>
                    <span>3.0T MRI Module</span>
                  </div>
               </div>
            </div>

            <div className="pt-6 border-t border-white/10">
               <div className="flex items-center gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                  <PackageCheck size={16} /> Asset Fully Insured
               </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/completion')}
            className="w-full glass-panel border border-indigo-500/20 bg-white/40 p-6 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] text-[var(--primary)] hover:bg-indigo-500 hover:text-white transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-xl"
          >
            Acknowledge Arrival
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • Live Deployment Node
      </footer>
    </motion.div>
  );
}