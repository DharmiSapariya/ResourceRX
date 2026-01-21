import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  FileText, 
  Star, 
  ChevronRight, 
  Download, 
  ShieldCheck,
  Zap,
} from 'lucide-react';
import "../../App.css";

export default function ClinicCompletion() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* COMPLETION HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 text-[10px] font-black uppercase mb-4 text-amber-600 border border-amber-500/20">
          <Zap size={14} className="fill-current" />
          Protocol Finalized
        </div>
        {/* Deep Blue Heading Applied Here */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)] uppercase italic">Operation Complete</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Session ID: RX-MRI-2024-08</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* SUMMARY & FEEDBACK */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[3.5rem] p-12 text-center relative overflow-hidden bg-white/40 border border-white">
            <div className="w-24 h-24 bg-amber-500/10 rounded-[2rem] flex items-center justify-center text-amber-600 mx-auto mb-6 border border-amber-500/20 shadow-inner">
              <CheckCircle2 size={48} />
            </div>
            {/* Deep Blue Sub-Heading */}
            <h3 className="text-3xl font-black tracking-tight mb-4 text-[var(--primary)] uppercase italic">Successful Release</h3>
            <p className="text-[var(--primary)] opacity-60 font-bold max-w-md mx-auto mb-8 uppercase text-xs leading-relaxed">
              The escrow funds have been released to the provider. Your diagnostic report is ready for export.
            </p>
            
            <div className="flex justify-center gap-4">
              <button className="glass-panel bg-white/60 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-[var(--primary)] hover:text-white transition-all text-[var(--primary)] shadow-sm">
                <FileText size={18} /> View Report
              </button>
              <button className="glass-panel bg-white/60 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-[var(--primary)] hover:text-white transition-all text-[var(--primary)] shadow-sm">
                <Download size={18} /> Invoice PDF
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-[3rem] p-10 bg-white/40 border border-white">
            <h4 className="text-[10px] font-black uppercase opacity-40 mb-8 tracking-[0.3em] text-center text-[var(--primary)]">Rate the Experience</h4>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} className="w-14 h-14 glass-panel bg-white/60 rounded-2xl flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all shadow-sm border border-white/50">
                  <Star size={24} fill={star <= 4 ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL STATS SIDEBAR */}
        <div className="space-y-6">
          <div className="glass-panel bg-[var(--primary)] text-white p-10 rounded-[3rem] space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <ShieldCheck size={120} className="text-amber-500" />
            </div>

            <div>
               <h4 className="text-xs font-black uppercase text-amber-500 tracking-widest mb-6">Usage Analytics</h4>
               <div className="space-y-4">
                  <div className="flex justify-between font-bold text-sm">
                    <span className="opacity-50 uppercase tracking-tighter">Total Time</span>
                    <span className="italic">94 Minutes</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <span className="opacity-50 uppercase tracking-tighter">Power Usage</span>
                    <span className="italic">12.4 kWh</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <span className="opacity-50 uppercase tracking-tighter">Provider</span>
                    <span className="italic">City General</span>
                  </div>
               </div>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10">
               <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Impact Score</p>
                  <p className="text-2xl font-black italic">+14% Efficiency</p>
               </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/search')}
            className="w-full bg-[var(--primary)] text-white p-6 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] shadow-xl hover:bg-[var(--secondary)] transition-all flex items-center justify-center gap-3 group active:scale-95"
          >
            Back to Dashboard
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • Mission Success
      </footer>
    </motion.div>
  );
}