import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, 
  Zap, 
  Navigation, 
  PhoneCall, 
  ChevronRight,
  Activity,
  AlertCircle
} from 'lucide-react';
import "../../App.css";

export default function ClinicEmergency() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* EMERGENCY HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 text-[10px] font-black uppercase mb-4 text-red-600 animate-pulse border border-red-500/20">
          <ShieldAlert size={14} />
          Priority 1 Protocol
        </div>
        {/* Deep Blue Heading Applied Here */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)] uppercase italic">Emergency Override</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Rapid Deployment of Critical Infrastructure</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* EMERGENCY SELECTION */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel border-red-500/20 rounded-[3rem] p-10 relative overflow-hidden bg-white/40">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <AlertCircle size={120} className="text-red-600" />
             </div>
             
             <h4 className="text-[10px] font-black uppercase opacity-40 mb-8 tracking-[0.3em] text-[var(--primary)]">Select Critical Need</h4>
             
             <div className="grid gap-4">
                {[
                  { type: "Immediate Trauma Surgery", eta: "12 mins", color: "text-red-600" },
                  { type: "Critical Dialysis Failure", eta: "18 mins", color: "text-orange-600" },
                  { type: "Neonatal ICU Support", eta: "15 mins", color: "text-[var(--secondary)]" }
                ].map((item, i) => (
                  <div key={i} className="glass-panel bg-white/60 p-6 rounded-[2rem] flex items-center justify-between hover:border-red-500/30 cursor-pointer transition-all group border border-white/50 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-inner ${item.color}`}>
                        <Zap size={24} fill="currentColor" />
                      </div>
                      <div>
                        <p className="font-black text-lg tracking-tight text-[var(--primary)] uppercase italic">{item.type}</p>
                        <p className="text-[10px] font-bold text-[var(--primary)] opacity-40 uppercase">Estimated Deployment: {item.eta}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-[var(--primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
             </div>
          </div>

          <div className="glass-panel rounded-[3rem] p-10 bg-white/40 border border-white shadow-sm">
             <h4 className="text-[10px] font-black uppercase opacity-40 mb-6 tracking-[0.3em] text-[var(--primary)]">Direct Dispatch Line</h4>
             <div className="flex items-center gap-6 p-6 bg-[var(--primary)] rounded-3xl text-white shadow-2xl">
                <div className="w-16 h-16 bg-[var(--secondary)]/20 rounded-2xl flex items-center justify-center text-[var(--secondary)] shadow-inner">
                  <PhoneCall size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-50 tracking-widest">Authorized Personnel Only</p>
                  <p className="text-3xl font-black italic">+1 (800) RX-EMERG</p>
                </div>
             </div>
          </div>
        </div>

        {/* LOGISTICS STATUS */}
        <div className="space-y-6">
          <div className="glass-panel bg-[var(--primary)] text-white p-10 rounded-[3rem] space-y-8 shadow-2xl border-none relative overflow-hidden">
            <h4 className="text-[10px] font-black uppercase text-[var(--secondary)] tracking-[0.3em]">Dispatch Status</h4>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[var(--secondary)] shrink-0 shadow-inner">
                  <Navigation size={20} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Scanning Nearby Assets</p>
                  <p className="text-[10px] font-bold opacity-50 uppercase">Radius: 15km</p>
                </div>
              </div>
              <div className="flex gap-4 opacity-40">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Pre-Clearing Route</p>
                  <p className="text-[10px] font-bold uppercase">Awaiting Selection</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
               <p className="text-[9px] font-bold opacity-40 uppercase leading-relaxed">
                 Emergency bookings bypass standard escrow delays for verified clinical partners.
               </p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/payment')}
            className="w-full bg-red-600 text-white p-6 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl shadow-red-600/30 hover:bg-red-700 transition-all flex items-center justify-center gap-3 active:scale-95 group"
          >
            Authorize Dispatch
            <Zap size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Emergency Core • Rapid Response Node
      </footer>
    </motion.div>
  );
}