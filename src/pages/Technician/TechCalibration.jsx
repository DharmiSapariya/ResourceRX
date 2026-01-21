import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  Thermometer, 
  Cpu, 
  ChevronRight, 
  AlertCircle,
  FileCheck, 
  RotateCcw
} from 'lucide-react';

export default function TechCalibration() {
  const [activeStep, setActiveStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const runDiagnostic = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 space-y-8">
      
      {/* --- PROTOCOL HEADER --- */}
      <div className="mb-12 ml-4 flex justify-between items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase mb-4 text-primary border border-primary/20">
            <ShieldCheck size={12} className="text-secondary" />
            ISO-9001 Compliance Protocol
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Asset Calibration</h2>
          <p className="text-xs font-bold opacity-40 uppercase mt-2 text-[#1d3557]">Unit: Siemens Magnetom Sola • ID: RX-990</p>
        </div>
        <div className="text-right">
          <div className="text-[32px] font-black tracking-tighter leading-none text-[#1d3557]">0{activeStep}</div>
          <div className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">of 03</div>
        </div>
      </div>

      {/* --- PROGRESS HUD --- */}
      <div className="flex gap-4 px-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex-1 h-2 rounded-full transition-all duration-700 ${activeStep >= i ? 'bg-secondary shadow-[0_0_15px_rgba(168,218,220,0.4)]' : 'bg-primary/5'}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* --- STEP 1: ENVIRONMENTAL STABILITY --- */}
        {activeStep === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className={glassStyle}>
              {/* Step Title changed to Deep Blue */}
              <h3 className="text-2xl font-black mb-10 italic uppercase flex items-center gap-3 text-[#1d3557]">
                <Thermometer className="text-secondary" /> 01. Environmental Sync
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { label: "Cryogen Level (He)", target: "> 95%", current: "98.2%", status: "Pass" },
                  { label: "Room Temperature", target: "18-22°C", current: "20.1°C", status: "Pass" },
                  { label: "Humidity Index", target: "40-60%", current: "44%", status: "Pass" },
                  { label: "Magnetic Shielding", target: "Nominal", current: "Stable", status: "Pass" }
                ].map((sensor, i) => (
                  <div key={i} className="p-8 bg-white/40 rounded-[2.5rem] border border-white flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black opacity-30 uppercase mb-1 text-[#1d3557]">{sensor.label}</p>
                      <p className="text-xl font-black text-[#1d3557]">{sensor.current}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black opacity-30 uppercase text-[#1d3557]">Target: {sensor.target}</p>
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end pr-4">
              <button onClick={() => setActiveStep(2)} className="bg-primary text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-secondary transition-all shadow-xl">
                Technical Calibration <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STEP 2: MECHANICAL DIAGNOSTICS --- */}
        {activeStep === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className={glassStyle}>
              <div className="flex justify-between items-start mb-10">
                {/* Step Title changed to Deep Blue */}
                <h3 className="text-2xl font-black italic uppercase flex items-center gap-3 text-[#1d3557]">
                  <Cpu className="text-secondary" /> 02. Hardware Pulse
                </h3>
                <button 
                  onClick={runDiagnostic}
                  className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${isSimulating ? 'bg-secondary text-primary animate-pulse' : 'bg-primary text-white'}`}
                >
                  {isSimulating ? 'Analyzing...' : 'Run Diagnostics'}
                </button>
              </div>

              <div className="space-y-6">
                <div className="h-48 bg-primary/5 rounded-[2.5rem] border border-white/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 flex items-center">
                    {[...Array(20)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [20, 80, 20] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        className="flex-1 bg-primary mx-1"
                      />
                    ))}
                  </div>
                  <p className="relative font-black text-xs uppercase opacity-40 text-[#1d3557]">System Frequency: 63.8 MHz</p>
                </div>

                <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] flex items-start gap-4">
                  <AlertCircle className="text-amber-500 shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-black uppercase text-amber-600">Minor Variance Detected</p>
                    <p className="text-[10px] font-bold opacity-60 uppercase leading-relaxed text-[#1d3557]">Gradient Coil B showing 0.02% deviation. Automatic shimming recommended before deployment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-4">
              <button onClick={() => setActiveStep(1)} className="font-black uppercase text-[10px] opacity-40 hover:opacity-100 flex items-center gap-2 text-[#1d3557]">
                <RotateCcw size={14} /> Back
              </button>
              <button onClick={() => setActiveStep(3)} className="bg-primary text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-secondary transition-all shadow-xl">
                Final Safety Sign-off <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STEP 3: FINAL CERTIFICATION --- */}
        {activeStep === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className={glassStyle}>
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20">
                  <FileCheck className="text-emerald-500" size={40} />
                </div>
                {/* Certification Title changed to Deep Blue */}
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-[#1d3557]">Readiness Verified</h3>
                <p className="max-w-md text-xs font-bold opacity-40 uppercase leading-relaxed text-[#1d3557]">
                  All system parameters are within clinical tolerance. By finalizing, you certify that this asset is safe for human diagnostic use.
                </p>
              </div>

              <div className="space-y-4 border-t border-primary/5 pt-10">
                <div className="flex justify-between items-center p-6 bg-white/40 rounded-3xl">
                   <div className="flex items-center gap-3">
                     <Activity size={18} className="text-primary/40" />
                     <span className="text-[10px] font-black uppercase text-[#1d3557]">Final Quality Score</span>
                   </div>
                   <span className="text-lg font-black italic text-emerald-600">99.8%</span>
                </div>
                
                <div className="p-8 bg-primary/5 rounded-[2.5rem] space-y-4">
                  <p className="text-[9px] font-black opacity-30 uppercase tracking-[0.2em] text-[#1d3557]">Technician Signature (Digital)</p>
                  <div className="h-20 border-2 border-dashed border-primary/10 rounded-2xl flex items-center justify-center">
                    <span className="text-xs font-bold opacity-20 uppercase text-[#1d3557]">Scan ID Card to Sign</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-8 rounded-[3rem] font-black uppercase tracking-[0.4em] shadow-2xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-4">
              Commit to Registry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}