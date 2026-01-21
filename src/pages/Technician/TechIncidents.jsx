import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertOctagon, 
  ShieldAlert, 
  MessageSquare, 
  PhoneCall, 
  Camera, 
  History,
  Info,
  Zap,
  ChevronRight,
  Flame
} from 'lucide-react';

export default function TechIncidents() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- INCIDENT HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 text-[10px] font-black uppercase mb-4 text-red-500 border border-red-500/20">
            <AlertOctagon size={12} className="animate-pulse" /> Emergency Response Active
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Incident Portal</h2>
        </div>
        
        <button className="bg-red-500 text-white px-10 py-5 rounded-3xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 hover:bg-red-600 transition-all shadow-xl shadow-red-500/20">
          <Flame size={18} /> File Critical Report
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* --- REPORTING CONSOLE --- */}
        <div className={`lg:col-span-2 ${glassStyle} border-red-500/10`}>
          {/* Subheading changed to Deep Blue */}
          <h3 className="text-2xl font-black italic uppercase mb-8 text-[#1d3557]">Asset Breakdown Entry</h3>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase opacity-40 ml-4 tracking-widest text-[#1d3557]">Failure Classification</label>
                <select className="w-full glass-panel px-8 py-5 rounded-3xl font-bold bg-white/50 border-none focus:ring-2 ring-red-500 outline-none appearance-none text-[#1d3557]">
                  <option>Mechanical Failure</option>
                  <option>Cryogen Leak / Quench</option>
                  <option>Software Kernel Panic</option>
                  <option>Safety Breach (Patient)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase opacity-40 ml-4 tracking-widest text-[#1d3557]">Severity Level</label>
                <div className="flex gap-2">
                  {['Low', 'Medium', 'Critical'].map(lvl => (
                    <button key={lvl} className={`flex-1 py-5 rounded-3xl text-[10px] font-black uppercase border transition-all ${lvl === 'Critical' ? 'bg-red-500 text-white border-red-500' : 'bg-white/40 border-primary/5 opacity-50 text-[#1d3557]'}`}>
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-40 ml-4 tracking-widest text-[#1d3557]">Observations</label>
              <textarea 
                placeholder="Describe the failure state in detail..."
                className="w-full glass-panel px-8 py-6 rounded-[2.5rem] font-bold bg-white/50 border-none focus:ring-2 ring-red-500 outline-none h-40 resize-none text-[#1d3557]"
              />
            </div>

            <div className="flex gap-4">
              <button className="flex-1 glass-panel py-6 rounded-3xl flex items-center justify-center gap-3 font-black text-[10px] uppercase hover:bg-white transition-all text-[#1d3557]">
                <Camera size={18} /> Attach Evidence
              </button>
              <button className="flex-1 bg-primary text-white py-6 rounded-3xl flex items-center justify-center gap-3 font-black text-[10px] uppercase hover:bg-secondary transition-all">
                Transmit to HQ
              </button>
            </div>
          </div>
        </div>

        {/* --- DIRECT SUPPORT CHANNELS --- */}
        <div className="space-y-6">
          <div className={`${glassStyle} bg-primary text-white shadow-2xl`}>
            <h3 className="text-xl font-black italic uppercase mb-8">Command Link</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-6 bg-white/10 rounded-3xl hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4">
                  <PhoneCall className="text-secondary" />
                  <span className="text-xs font-black uppercase tracking-widest">Senior Engineer</span>
                </div>
                <ChevronRight size={16} className="opacity-40 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full flex items-center justify-between p-6 bg-white/10 rounded-3xl hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-secondary" />
                  <span className="text-xs font-black uppercase tracking-widest">Live Support Chat</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            </div>
          </div>

          <div className={glassStyle}>
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-secondary" />
              <h4 className="text-xs font-black uppercase tracking-tighter text-[#1d3557]">Site Safety Info</h4>
            </div>
            <p className="text-[10px] font-bold opacity-40 uppercase leading-relaxed text-[#1d3557]">
              In case of a magnet quench, evacuate the MRI suite immediately. Oxygen sensors are located at the North and South exits.
            </p>
          </div>
        </div>
      </div>

      {/* --- INCIDENT HISTORY --- */}
      <div className={glassStyle}>
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3 text-[#1d3557]">
            <History className="text-primary/20" /> Resolution Log
          </h3>
        </div>
        
        <div className="space-y-4">
          {[
            { id: "INC-882", asset: "GE CT #102", issue: "Heater Circuit Fault", status: "Resolved", date: "Jan 12" },
            { id: "INC-741", asset: "Mobile X-Ray", issue: "Grid Calibration Error", status: "Pending Fix", date: "Jan 08" },
          ].map((inc, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white/40 rounded-[2.5rem] border border-white hover:bg-white/80 transition-all">
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl ${inc.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black opacity-30 uppercase text-[#1d3557]">{inc.id} • {inc.date}</p>
                  <h4 className="text-sm font-black uppercase tracking-tight text-[#1d3557]">{inc.issue}</h4>
                  <p className="text-[10px] font-bold opacity-40 uppercase text-[#1d3557]">{inc.asset}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full ${inc.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                  {inc.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}