import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  Timer, 
  PackageCheck, 
  AlertTriangle, 
  Camera, 
  ShieldAlert,
  Activity,
  CheckCircle2,
  ScanLine,
  Microscope,
  Zap
} from 'lucide-react';

export default function LogisticsActive() {
  const [activeStage, setActiveStage] = useState('pickup');

  // Exact design specs preserved
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* --- PROTOCOL HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[#1d3557] border border-[#1d3557]/10">
            <ScanLine size={14} className="text-secondary" />
            Active Protocol: RRX-ALPHA-09
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Live Dispatch</h2>
        </div>

        {/* --- PROGRESS TRACKER --- */}
        <div className="glass-panel p-2 rounded-3xl flex gap-1 bg-white/20">
          {['pickup', 'route', 'delivery', 'incident'].map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeStage === stage ? 'bg-[#1d3557] text-white shadow-xl' : 'opacity-30 hover:opacity-100 text-[#1d3557]'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        
        {/* --- STAGE 1: ASSIGNMENT & PICKUP --- */}
        {activeStage === 'pickup' && (
          <motion.div key="p" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 ${glassStyle}`}>
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-1 text-[#1d3557]">Asset Class</p>
                  <h3 className="text-4xl font-black tracking-tighter uppercase italic text-[#1d3557]">Cryo-MRI Scanner</h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black opacity-30 uppercase mb-1 text-[#1d3557]">Assignment Expiry</p>
                  <p className="text-3xl font-black text-red-500 font-mono italic">04:59</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 border-y border-[#1d3557]/5 py-10 mb-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black opacity-30 uppercase mb-2 flex items-center gap-2 text-[#1d3557]"><MapPin size={12} className="text-secondary"/> Origin Site</p>
                    <p className="font-bold text-lg leading-tight uppercase text-[#1d3557]">Bio-Tech Storage Hub<br/><span className="text-xs opacity-50 font-black tracking-widest">Long Island, NY</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black opacity-30 uppercase mb-2 flex items-center gap-2 text-[#1d3557]"><Navigation size={12} className="text-secondary"/> Destination</p>
                    <p className="font-bold text-lg leading-tight uppercase text-[#1d3557]">Central Mercy Clinic<br/><span className="text-xs opacity-50 font-black tracking-widest text-[#1d3557]">Newark, NJ</span></p>
                  </div>
                </div>
                <div className="p-8 bg-[#1d3557]/5 rounded-[2.5rem] border border-white/50">
                  <p className="text-[10px] font-black opacity-40 uppercase mb-4 tracking-tighter text-[#1d3557]">Cargo Requirements</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[10px] font-black uppercase text-[#1d3557]"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/> Nitrogen Levels Critical</li>
                    <li className="flex items-center gap-3 text-[10px] font-black uppercase text-[#1d3557]"><div className="w-1.5 h-1.5 rounded-full bg-secondary"/> Shock Sensors Active</li>
                    <li className="flex items-center gap-3 text-[10px] font-black uppercase text-[#1d3557]"><div className="w-1.5 h-1.5 rounded-full bg-[#1d3557]"/> Level 4 Tech Required</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setActiveStage('route')} className="flex-1 bg-[#1d3557] text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] hover:bg-secondary transition-all shadow-xl shadow-[#1d3557]/20">Accept Dispatch</button>
                <button className="px-10 glass-panel rounded-[2rem] font-black uppercase text-red-500 text-[10px] tracking-widest">Reject</button>
              </div>
            </div>

            <div className={`${glassStyle} h-fit text-center flex flex-col items-center border-white`}>
               <div className="w-20 h-20 bg-white rounded-3xl shadow-inner mb-6 flex items-center justify-center text-[#1d3557]/10">
                  <Microscope size={40} />
               </div>
               <p className="text-[10px] font-black opacity-30 uppercase mb-2 text-[#1d3557]">Technical Lead</p>
               <p className="font-black text-xl tracking-tighter mb-1 uppercase text-[#1d3557]">Sgt. Elias Thorne</p>
               <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">ID: RRX-4492-T</p>
            </div>
          </motion.div>
        )}

        {/* --- STAGE 2: IN-TRANSIT MONITORING --- */}
        {activeStage === 'route' && (
          <motion.div key="r" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 glass-panel h-[600px] rounded-[3.5rem] relative overflow-hidden bg-slate-100 border-4 border-white">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1d3557_1px,transparent_1px)] [background-size:20px_20px]" />
               
               <div className="absolute top-10 left-10 flex gap-4">
                  <div className="glass-panel p-6 rounded-3xl flex flex-col justify-center bg-white/60">
                    <p className="text-[10px] font-black opacity-40 uppercase text-[#1d3557]">Internal Temp</p>
                    <p className="text-2xl font-black text-emerald-500">-196°C</p>
                  </div>
                  <div className="glass-panel p-6 rounded-3xl flex flex-col justify-center bg-white/60">
                    <p className="text-[10px] font-black opacity-40 uppercase text-[#1d3557]">G-Force</p>
                    <p className="text-2xl font-black text-[#1d3557]">0.02G</p>
                  </div>
               </div>

               <div className="absolute bottom-10 left-10 right-10 flex gap-4 items-end">
                 <div className="glass-panel p-10 rounded-[3rem] flex-1 bg-white/80 backdrop-blur-xl">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-2 text-[#1d3557]">Current Milestone</p>
                        <p className="text-3xl font-black tracking-tighter uppercase italic text-[#1d3557]">Lincoln Tunnel Crossing</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black opacity-30 uppercase mb-1 text-[#1d3557]">ETA TO DESTINATION</p>
                        <p className="text-3xl font-black text-[#1d3557] italic">14:02 PM</p>
                      </div>
                    </div>
                    <div className="h-1 bg-[#1d3557]/10 rounded-full mt-6 overflow-hidden">
                       <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        className="h-full bg-secondary shadow-[0_0_15px_rgba(168,218,220,1)]" 
                       />
                    </div>
                 </div>
               </div>
            </div>

            <div className="space-y-6">
              <div className={glassStyle}>
                 <p className="text-[10px] font-black opacity-30 uppercase mb-6 tracking-widest text-[#1d3557]">Asset Stability</p>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Zap size={20} /></div>
                       <div className="text-right"><p className="text-[10px] font-black opacity-40 uppercase text-[#1d3557]">Power Hub</p><p className="font-black text-[#1d3557]">98%</p></div>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary"><Activity size={20} /></div>
                       <div className="text-right"><p className="text-[10px] font-black opacity-40 uppercase text-[#1d3557]">Pulse Sync</p><p className="font-black text-[#1d3557]">LOCKED</p></div>
                    </div>
                 </div>
              </div>
              <button onClick={() => setActiveStage('delivery')} className="w-full bg-[#1d3557] text-white py-8 rounded-[2.5rem] font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-[#1d3557]/20">Report Arrival</button>
            </div>
          </motion.div>
        )}

        {/* --- STAGE 3: DELIVERY & HANDOVER --- */}
        {activeStage === 'delivery' && (
           <motion.div key="d" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto w-full">
            <div className={glassStyle}>
              <h3 className="text-3xl font-black tracking-tighter mb-10 text-center uppercase italic text-[#1d3557]">Delivery Handover Protocol</h3>
              <div className="space-y-4 mb-10">
                {["External Seal Verification", "Magnet Stability Check", "Coolant Pressure Lock", "Inventory Match"].map((item, i) => (
                  <label key={i} className="flex items-center justify-between p-6 bg-white/40 rounded-[2rem] border border-white hover:bg-white/60 transition-all cursor-pointer">
                    <span className="font-black text-xs uppercase tracking-tight text-[#1d3557]/70">{item}</span>
                    <input type="checkbox" className="w-6 h-6 rounded-lg accent-[#1d3557] border-none shadow-inner" />
                  </label>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#1d3557]/10 rounded-3xl hover:bg-white/40 transition-all gap-3 group text-[#1d3557]">
                  <Camera className="text-secondary group-hover:scale-110 transition-all" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Asset Photo Proof</span>
                </button>
                <div className="p-8 bg-white/60 rounded-3xl flex flex-col items-center justify-center border border-white text-center text-[#1d3557]">
                  <p className="text-[10px] font-black opacity-30 uppercase mb-4">Clinic Signature</p>
                  <div className="h-12 w-full border-b border-[#1d3557]/10 mb-2 italic text-[#1d3557] font-serif opacity-40">Awaiting...</div>
                </div>
              </div>

              <button className="w-full bg-emerald-600 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
                <PackageCheck /> Finalize Delivery
              </button>
            </div>
          </motion.div>
        )}

        {/* --- STAGE 4: INCIDENT REPORTING --- */}
        {activeStage === 'incident' && (
           <motion.div key="i" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto w-full">
            <div className={`${glassStyle} border-red-500/20`}>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-red-500 text-white rounded-2xl shadow-lg shadow-red-500/30"><ShieldAlert /></div>
                <h3 className="text-3xl font-black tracking-tighter uppercase italic text-[#1d3557]">Incident Report</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black opacity-30 uppercase mb-4 tracking-widest text-[#1d3557]">Damage Type</p>
                  <div className="grid grid-cols-3 gap-3">
                    {["Electrical", "Impact", "Delay"].map(type => (
                      <button key={type} className="py-4 glass-panel rounded-2xl font-black text-[10px] uppercase hover:bg-red-500 hover:text-white transition-all border-none text-[#1d3557]">{type}</button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                   <textarea 
                    placeholder="Provide precise technical details of the breach..."
                    className="w-full glass-panel p-8 rounded-[2rem] h-48 font-bold outline-none border-[#1d3557]/5 focus:border-red-500/50 transition-all text-[#1d3557]"
                  />
                  <AlertTriangle className="absolute bottom-6 right-6 text-red-500 opacity-20" size={32} />
                </div>

                <div className="p-6 bg-red-500/5 rounded-3xl border border-red-500/10 flex items-start gap-4">
                  <ShieldAlert className="text-red-500 shrink-0" size={20} />
                  <p className="text-[10px] font-black text-red-900/60 leading-relaxed uppercase italic">
                    Critical: Filing this report will trigger an immediate escrow freeze and notify all platform nodes. Protocol 12-B enforced.
                  </p>
                </div>
                
                <button className="w-full bg-red-500 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-red-500/20">Submit Incident Protocol</button>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}