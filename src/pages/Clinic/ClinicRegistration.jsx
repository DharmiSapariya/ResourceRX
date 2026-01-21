import React from 'react';
import { motion } from 'framer-motion';
import { Upload, ShieldCheck, Info, ChevronRight, FileText } from 'lucide-react';
import '../../App.css';

export default function ClinicRegister() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* HEADER SECTION */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[var(--primary)] border border-white/20">
          <ShieldCheck size={14} className="text-secondary" />
          Trust & Verification
        </div>
        {/* Changed to Deep Blue */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)]">Clinic Onboarding</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Step 1: Identity & Compliance Verification</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* FORM SECTION */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[3rem] p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase ml-4 opacity-40 text-[var(--primary)]">Clinic Entity</label>
                <input 
                  type="text" 
                  placeholder="Official Clinic Name" 
                  className="w-full glass-panel bg-white/40 p-5 rounded-2xl outline-none border-2 border-transparent focus:border-secondary/30 transition-all font-bold text-[var(--primary)]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase ml-4 opacity-40 text-[var(--primary)]">License ID</label>
                <input 
                  type="text" 
                  placeholder="Medical License Number" 
                  className="w-full glass-panel bg-white/40 p-5 rounded-2xl outline-none border-2 border-transparent focus:border-secondary/30 transition-all font-bold text-[var(--primary)]" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase ml-4 opacity-40 text-[var(--primary)]">Documentation</label>
              <div className="border-4 border-dashed border-white/50 rounded-[2.5rem] p-12 text-center hover:bg-white/40 cursor-pointer group transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-4 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  <Upload size={28} />
                </div>
                <p className="text-lg font-black tracking-tight text-[var(--primary)]">Upload Hospital Registration</p>
                <p className="text-sm text-gray-400 font-bold uppercase text-[10px]">Supported formats: PDF, JPEG (Max 10MB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* INFO SIDEBAR */}
        <div className="space-y-6">
          <div className="glass-panel bg-primary text-white p-10 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={160} />
            </div>
            
            <ShieldCheck className="mb-6 text-secondary" size={40} />
            <h4 className="text-2xl font-black mb-4 tracking-tight">Why Verify?</h4>
            <p className="text-sm opacity-70 leading-relaxed font-medium mb-8">
              We maintain a closed loop of certified medical professionals to ensure equipment safety and legal compliance. Your data is encrypted and used only for validation.
            </p>
            
            <div className="space-y-3">
              {["Bank-grade Security", "Manual Review", "24h Turnaround"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-primary text-white p-6 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:bg-secondary transition-all flex items-center justify-center gap-3 group active:scale-95">
            Submit for Review
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Verification Gateway
      </footer>
    </motion.div>
  );
}