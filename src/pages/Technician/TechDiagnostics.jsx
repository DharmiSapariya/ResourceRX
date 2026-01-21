import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Cpu, 
  Wifi, 
  ShieldAlert, 
  Search, 
  RefreshCw,
  HardDrive,
  BarChart,
  Radio
} from 'lucide-react';

export default function TechDiagnostics() {
  const [isScanning, setIsScanning] = useState(false);
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const runSystemScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- DIAGNOSTIC HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-[10px] font-black uppercase mb-4 text-secondary border border-secondary/20">
            <Radio size={12} className="animate-pulse" /> Asset Remote Link: Encrypted
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Diagnostic Hub</h2>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={runSystemScan}
            className={`bg-primary text-white px-10 py-5 rounded-3xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl ${isScanning ? 'opacity-50' : 'hover:bg-secondary'}`}
          >
            {isScanning ? <RefreshCw className="animate-spin" size={18} /> : <Zap size={18} />}
            {isScanning ? "Scanning Bitstream..." : "Initiate Full Ping"}
          </button>
        </div>
      </div>

      {/* --- TELEMETRY GRID --- */}
      <div className="grid lg:grid-cols-4 gap-6">
        {[
          { label: "Signal Strength", val: "-42 dBm", status: "Stable", icon: Wifi },
          { label: "CPU Temp", val: "44°C", status: "Nominal", icon: Cpu },
          { label: "Data Latency", val: "14ms", status: "Optimal", icon: Activity },
          { label: "Storage Integrity", val: "99.9%", status: "Verified", icon: HardDrive },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2.5rem] border-white/40 group hover:border-secondary transition-all">
            <stat.icon className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={24} />
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1 tracking-tighter text-[#1d3557]">{stat.val}</h3>
            <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{stat.status}</span>
          </div>
        ))}
      </div>

      {/* --- CORE DIAGNOSTIC VIEW --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LIVE WAVEFORM / PULSE */}
        <div className={`lg:col-span-2 ${glassStyle}`}>
          <div className="flex justify-between items-center mb-10">
            {/* Heading changed to Deep Blue */}
            <h3 className="text-xl font-black italic uppercase tracking-tighter text-[#1d3557]">Real-Time Telemetry</h3>
            <div className="flex gap-2 text-[#1d3557]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black opacity-40 uppercase">Live Stream</span>
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center relative bg-primary/5 rounded-[2.5rem] border border-white/50 overflow-hidden">
             {/* Mock Diagnostic Grid */}
             <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.1)_100%),linear-gradient(0deg,transparent_95%,rgba(0,0,0,0.1)_100%)] [background-size:20px_20px]" />
             
             <svg className="w-full h-full px-10">
                <motion.path 
                  d="M0 80 Q 50 10, 100 80 T 200 80 T 300 80 T 400 80 T 500 80 T 600 80" 
                  fill="none" stroke="#1d3557" strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
             </svg>
             
             <div className="absolute bottom-6 right-8 flex gap-4 text-[#1d3557]">
                <div className="text-right">
                   <p className="text-[8px] font-black opacity-30 uppercase">Sample Rate</p>
                   <p className="text-xs font-black">1.2 GHz</p>
                </div>
                <div className="text-right">
                   <p className="text-[8px] font-black opacity-30 uppercase">Errors</p>
                   <p className="text-xs font-black text-red-500">00</p>
                </div>
             </div>
          </div>
        </div>

        {/* ERROR LOG / EVENT STACK */}
        <div className={glassStyle}>
          {/* Heading changed to Deep Blue */}
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 text-[#1d3557]">Event Stack</h3>
          <div className="space-y-4">
            {[
              { time: "15:04:22", event: "Gantry Position Sync", code: "OK" },
              { time: "14:59:10", event: "Power Surge Detected", code: "WARN" },
              { time: "14:30:00", event: "Auto-Calibration", code: "OK" },
              { time: "12:12:45", event: "Bitstream Reset", code: "OK" },
            ].map((log, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white/40 rounded-2xl border border-white">
                <div>
                  <p className="text-[9px] font-black opacity-30 uppercase text-[#1d3557]">{log.time}</p>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-[#1d3557]">{log.event}</p>
                </div>
                <span className={`text-[9px] font-black px-2 py-1 rounded ${log.code === 'WARN' ? 'bg-amber-500/10 text-amber-600' : 'bg-emerald-500/10 text-emerald-600'}`}>
                  {log.code}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 glass-panel text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all text-[#1d3557]">
            Download Debug File
          </button>
        </div>
      </div>

      {/* --- HARDWARE SUBSYSTEMS --- */}
      <div className={glassStyle}>
        {/* Heading changed to Deep Blue */}
        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-10 text-[#1d3557]">Subsystem Health</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "MRI Magnet Assembly", health: 98, parts: ["Coil A", "Coil B"] },
            { name: "Control Computer", health: 100, parts: ["NPU", "RAM"] },
            { name: "Imaging Processing", health: 94, parts: ["GPU Array", "Bus"] },
          ].map((sys, i) => (
            <div key={i} className="space-y-4 p-6 bg-primary/5 rounded-[2.5rem] border border-primary/5">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-tight text-[#1d3557]">{sys.name}</span>
                <span className="text-xs font-black text-[#1d3557]">{sys.health}%</span>
              </div>
              <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${sys.health}%` }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex gap-2 mt-2">
                {sys.parts.map(p => (
                  <span key={p} className="text-[8px] font-black uppercase px-2 py-0.5 bg-white/50 rounded-full opacity-40 italic text-[#1d3557]">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}