import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Sparkles, 
  Truck, 
  PackageCheck, 
  Lock, 
  Camera, 
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function TechPrep() {
  const [completedSteps, setCompletedSteps] = useState([]);
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const toggleStep = (id) => {
    setCompletedSteps(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const protocols = [
    { id: 1, task: "Sterilization Protocol", desc: "Surface sanitization with medical-grade isopropyl.", icon: Sparkles },
    { id: 2, task: "Mechanical Locking", desc: "Secure gantry and table for high-G transit.", icon: Lock },
    { id: 3, task: "Auxiliary Inventory", desc: "Verify coils, phantoms, and patient pads are loaded.", icon: PackageCheck },
    { id: 4, task: "Visual Inspection", desc: "Capture 360° departure images for insurance.", icon: Camera },
  ];

  const allDone = completedSteps.length === protocols.length;

  return (
    <div className="max-w-5xl mx-auto pb-20 space-y-10">
      
      {/* --- PREP HEADER --- */}
      <div className="mb-12 ml-4 flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-[10px] font-black uppercase mb-4 text-secondary border border-secondary/20">
            <ClipboardCheck size={14} /> Protocol: Ready-For-Service (RFS)
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Deployment Prep</h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] text-[#1d3557]">Target Site</p>
          <p className="text-sm font-bold text-[#1d3557] italic">Boston General • 18:00 DEP</p>
        </div>
      </div>

      {/* --- ASSET PREVIEW --- */}
      <div className={`${glassStyle} bg-[#1d3557] text-white border-none mb-8 shadow-2xl`}>
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center">
              <Zap size={32} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter uppercase italic">GE Revolution CT</h3>
              <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Serial: #RX-2022-88</p>
            </div>
          </div>
          <div className="flex gap-4">
             <div className="text-center px-6 border-r border-white/10">
                <p className="text-[10px] font-black opacity-40 uppercase">Health Score</p>
                <p className="text-xl font-black">99%</p>
             </div>
             <div className="text-center px-6">
                <p className="text-[10px] font-black opacity-40 uppercase">Clean Status</p>
                <p className="text-xl font-black text-emerald-400">CERTIFIED</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- CHECKLIST SECTION --- */}
      <div className="space-y-4">
        {protocols.map((step, i) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => toggleStep(step.id)}
            className={`p-8 rounded-[2.5rem] border cursor-pointer transition-all flex items-center justify-between ${
              completedSteps.includes(step.id) 
                ? 'bg-emerald-500/5 border-emerald-500/20 shadow-inner' 
                : 'bg-white/40 border-white hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-2xl transition-colors ${
                completedSteps.includes(step.id) ? 'bg-emerald-500 text-white' : 'bg-primary/5 text-primary'
              }`}>
                <step.icon size={24} />
              </div>
              <div className="text-[#1d3557]">
                <h4 className={`text-lg font-black uppercase tracking-tight ${
                  completedSteps.includes(step.id) ? 'line-through opacity-30' : ''
                }`}>{step.task}</h4>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{step.desc}</p>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
              completedSteps.includes(step.id) ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-primary/10'
            }`}>
              {completedSteps.includes(step.id) && <CheckCircle2 size={24} />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- FINAL RELEASE --- */}
      <div className={`${glassStyle} ${allDone ? 'border-emerald-500/30' : 'border-amber-500/20'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            {allDone ? (
              <ShieldCheck className="text-emerald-500 shrink-0" size={32} />
            ) : (
              <AlertCircle className="text-amber-500 shrink-0" size={32} />
            )}
            <div className="text-[#1d3557]">
              <h4 className="text-xl font-black uppercase tracking-tighter italic">
                {allDone ? "Clear for Departure" : "Pending Preparation"}
              </h4>
              <p className="text-[10px] font-bold opacity-40 uppercase max-w-sm">
                {allDone 
                  ? "All Ready-For-Service protocols met. System is locked and sanitized for transit."
                  : "Please complete all mandatory checklist items before authorizing carrier pickup."}
              </p>
            </div>
          </div>
          <button 
            disabled={!allDone}
            className={`px-12 py-6 rounded-3xl font-black uppercase tracking-[0.3em] flex items-center gap-3 transition-all ${
              allDone 
                ? 'bg-[#1d3557] text-white hover:bg-secondary shadow-xl shadow-[#1d3557]/20' 
                : 'bg-primary/5 text-primary/20 cursor-not-allowed border border-[#1d3557]/5'
            }`}
          >
            Release to Carrier <Truck size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}