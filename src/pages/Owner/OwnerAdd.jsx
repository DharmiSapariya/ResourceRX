import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusCircle, 
  Stethoscope, 
  ShieldCheck, 
  UploadCloud, 
  Zap, 
  Info,
  ChevronRight,
  Settings2,
  CheckCircle2
} from 'lucide-react';

export default function OwnerAdd() {
  const [step, setStep] = useState(1);
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500 bg-white/40 border border-white/20";

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-5xl mx-auto pb-20">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[var(--primary)] border border-white/20">
          <PlusCircle size={14} className="text-secondary" />
          Asset Commissioning Protocol
        </div>
        {/* Changed to Deep Blue */}
        <h2 className="text-5xl font-black tracking-tighter italic text-[var(--primary)] uppercase">Register Equipment</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em] mt-2">Node Deployment Gateway</p>
      </div>

      {/* --- PROGRESS STEPPER --- */}
      <div className="flex gap-4 mb-10 px-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-[var(--primary)]/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: step >= i ? "100%" : "0%" }}
              className="h-full bg-secondary"
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* --- STEP 1: CATEGORY & IDENTITY --- */}
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className={glassStyle}>
              {/* Internal Heading changed to Deep Blue */}
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 italic uppercase text-[var(--primary)]">
                <Settings2 className="text-secondary" /> 01. Asset Identity
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase opacity-40 ml-4 text-[var(--primary)]">Equipment Category</label>
                  <select className="w-full glass-panel px-8 py-5 rounded-3xl font-bold bg-white/50 border-none focus:ring-2 ring-secondary transition-all outline-none appearance-none text-[var(--primary)]">
                    <option>Magnetic Resonance Imaging (MRI)</option>
                    <option>Computed Tomography (CT)</option>
                    <option>Dialysis Mobile Unit</option>
                    <option>Digital X-Ray System</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase opacity-40 ml-4 text-[var(--primary)]">Manufacturer & Model</label>
                  <input type="text" placeholder="e.g. Siemens Magnetom Sola" className="w-full glass-panel px-8 py-5 rounded-3xl font-bold bg-white/50 border-none focus:ring-2 ring-secondary outline-none text-[var(--primary)]" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase opacity-40 ml-4 text-[var(--primary)]">Serial Number (UID)</label>
                  <input type="text" placeholder="SN-XXXX-XXXX-XXXX" className="w-full glass-panel px-8 py-5 rounded-3xl font-bold bg-white/50 border-none focus:ring-2 ring-secondary outline-none font-mono text-[var(--primary)]" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase opacity-40 ml-4 text-[var(--primary)]">Year of Manufacture</label>
                  <input type="number" placeholder="2024" className="w-full glass-panel px-8 py-5 rounded-3xl font-bold bg-white/50 border-none focus:ring-2 ring-secondary outline-none text-[var(--primary)]" />
                </div>
              </div>
            </div>

            <div className="flex justify-end pr-4">
              <button onClick={nextStep} className="bg-[var(--primary)] text-white px-12 py-5 rounded-3xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-secondary transition-all shadow-xl active:scale-95">
                Technical Specs <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STEP 2: TECHNICAL SPECIFICATIONS --- */}
        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className={glassStyle}>
              {/* Internal Heading changed to Deep Blue */}
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 italic uppercase text-[var(--primary)]">
                <Zap className="text-secondary" /> 02. Performance Metrics
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Magnetic Strength", unit: "Tesla", placeholder: "1.5 or 3.0" },
                  { label: "Bore Diameter", unit: "mm", placeholder: "70" },
                  { label: "Software Version", unit: "OS", placeholder: "v4.2.1" }
                ].map((spec, i) => (
                  <div key={i} className="p-8 bg-white/30 rounded-[2.5rem] border border-white shadow-sm">
                    <p className="text-[10px] font-black uppercase opacity-40 mb-4 text-[var(--primary)]">{spec.label}</p>
                    <div className="flex items-center gap-3">
                      <input type="text" placeholder={spec.placeholder} className="bg-transparent border-none font-black text-2xl w-full outline-none text-[var(--primary)]" />
                      <span className="text-[10px] font-black opacity-20 text-[var(--primary)]">{spec.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-8 bg-secondary/5 rounded-[2.5rem] border border-secondary/10 flex items-start gap-4 shadow-inner">
                <Info className="text-secondary shrink-0" size={20} />
                <p className="text-[10px] font-bold uppercase leading-relaxed text-[var(--primary)] opacity-60">
                  Technical verification required: Your asset will undergo a remote diagnostic ping before the listing is finalized in the registry.
                </p>
              </div>
            </div>

            <div className="flex justify-between px-4">
              <button onClick={prevStep} className="font-black uppercase text-[10px] opacity-40 hover:opacity-100 transition-all text-[var(--primary)]">Go Back</button>
              <button onClick={nextStep} className="bg-[var(--primary)] text-white px-12 py-5 rounded-3xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-secondary transition-all shadow-xl active:scale-95">
                Compliance & Photos <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STEP 3: MEDIA & FINALIZATION --- */}
        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className={glassStyle}>
                <h3 className="text-2xl font-black mb-8 italic uppercase text-[var(--primary)]">03. Documentation</h3>
                <div className="space-y-4">
                  <div className="p-10 border-2 border-dashed border-[var(--primary)]/10 rounded-[3rem] flex flex-col items-center justify-center text-center gap-4 hover:bg-white/40 transition-all cursor-pointer group">
                    <UploadCloud size={40} className="text-secondary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-black text-xs uppercase text-[var(--primary)]">Upload ISO Certifications</p>
                      <p className="text-[10px] font-bold opacity-30 mt-1 uppercase tracking-tighter text-[var(--primary)]">PDF, JPEG (MAX 10MB)</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white/40 rounded-3xl flex items-center justify-between border border-white">
                    <div className="flex items-center gap-3 text-[var(--primary)]">
                      <ShieldCheck className="text-emerald-500" size={18} />
                      <span className="text-xs font-bold uppercase">Maintenance_Log_2025.pdf</span>
                    </div>
                    <button className="text-[10px] font-black text-red-500 uppercase hover:underline">Remove</button>
                  </div>
                </div>
              </div>

              <div className={glassStyle}>
                <h3 className="text-2xl font-black mb-8 italic uppercase text-[var(--primary)]">Pricing Strategy</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase opacity-40 ml-4 text-[var(--primary)]">Daily Base Rate (USD)</label>
                    <input type="number" placeholder="2,500" className="w-full glass-panel px-8 py-5 rounded-3xl font-black text-2xl bg-white/50 border-none text-secondary outline-none" />
                  </div>
                  <div className="flex items-center justify-between p-6 bg-[var(--primary)]/5 rounded-3xl border border-[var(--primary)]/5">
                    <div className="flex items-center gap-3">
                      <Zap className="text-secondary" size={18} />
                      <span className="text-[10px] font-black uppercase text-[var(--primary)]">Enable Dynamic Yield</span>
                    </div>
                    <div className="w-12 h-6 bg-secondary rounded-full relative shadow-inner cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-8 rounded-[3rem] font-black uppercase tracking-[0.3em] shadow-2xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-4 active:scale-[0.98]">
              <CheckCircle2 size={24} /> Finalize Asset Listing
            </button>
            <center>
              <button onClick={prevStep} className="font-black uppercase text-[10px] opacity-20 hover:opacity-100 transition-all text-[var(--primary)] tracking-widest">Review Configuration</button>
            </center>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • Asset Registry Protocol
      </footer>
    </div>
  );
}