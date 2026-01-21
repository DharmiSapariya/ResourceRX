import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Camera, 
  FileText, 
  Clock, 
  ChevronRight,
  Gavel,
  Scale
} from 'lucide-react';

export default function LogisticsIncidents() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const activeDisputes = [
    { id: "DIS-9902", asset: "CT Scanner Unit", issue: "Seal Breach", status: "Under Review", severity: "High" },
    { id: "DIS-9841", asset: "Dialysis Pump", issue: "Late Delivery", status: "Awaiting Proof", severity: "Medium" }
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-red-600 border border-red-600/10">
          <ShieldAlert size={14} />
          Protocol Enforcement
        </div>
        {/* Main Heading changed to Deep Blue */}
        <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Incident & Damage</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: ACTIVE DISPUTES LIST */}
        <div className="lg:col-span-2 space-y-6">
          <div className={glassStyle}>
            {/* Sub-heading changed to Deep Blue */}
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-[#1d3557] uppercase italic">
              <Scale className="text-secondary" /> Open Arbitration Cases
            </h3>
            
            <div className="space-y-4">
              {activeDisputes.map((dispute) => (
                <div key={dispute.id} className="p-6 bg-white/40 rounded-[2.5rem] border border-white flex items-center justify-between group hover:bg-white/60 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${dispute.severity === 'High' ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'}`}>
                      <AlertTriangle size={20} />
                    </div>
                    <div className="text-[#1d3557]">
                      <p className="font-black text-lg tracking-tight uppercase">{dispute.asset}</p>
                      <p className="text-[10px] font-bold opacity-40 uppercase">{dispute.id} • {dispute.issue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-black uppercase opacity-40 italic text-[#1d3557]">{dispute.status}</span>
                    <button className="p-4 bg-[#1d3557] text-white rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-[#1d3557]/20">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DAMAGE EVIDENCE LOG */}
          <div className={glassStyle}>
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-[#1d3557] uppercase italic">
              <Camera className="text-secondary" /> Media Evidence Wall
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square glass-panel rounded-3xl bg-slate-200/50 flex flex-col items-center justify-center gap-2 border-dashed border-2 border-[#1d3557]/5 hover:border-secondary transition-all cursor-pointer">
                  <FileText size={20} className="opacity-20 text-[#1d3557]" />
                  <span className="text-[8px] font-black opacity-30 uppercase tracking-tighter text-center px-2 text-[#1d3557]">IMG_082{i}.JPG<br/>VERIFIED</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROTOCOL ACTIONS */}
        <div className="space-y-6">
          <div className={`${glassStyle} bg-red-600 text-white border-none shadow-xl shadow-red-600/20`}>
            <Gavel size={32} className="mb-6 opacity-40" />
            <h3 className="text-2xl font-black tracking-tighter mb-4 italic uppercase">Freeze Smart Contract</h3>
            <p className="text-xs font-bold leading-relaxed opacity-80 mb-8 uppercase">
              Immediate suspension of all funds for the active transport. Triggers the 24-hour verification window.
            </p>
            <button className="w-full bg-white text-red-600 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/90 transition-all shadow-lg">
              Initiate Freeze
            </button>
          </div>

          <div className={glassStyle}>
            <p className="text-[10px] font-black opacity-30 uppercase mb-6 tracking-widest text-[#1d3557]">Protocol Timeline</p>
            <div className="space-y-6">
              {[
                { time: "09:12", event: "Incident Flagged by Driver" },
                { time: "10:05", event: "Photo Metadata Verified" },
                { time: "11:30", event: "Owner Notified via Portal" }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-[#1d3557]/5 ml-2 pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#1d3557]" />
                  <div className="text-[#1d3557]">
                    <p className="text-[10px] font-black opacity-30 italic">{step.time}</p>
                    <p className="text-xs font-bold uppercase">{step.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}