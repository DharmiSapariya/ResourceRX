import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Star, MapPin, ChevronRight, Activity, Filter, ShieldCheck, ZapOff, Clock, Gauge } from 'lucide-react';
import "../../App.css";

const GLOBAL_INVENTORY = [
  { id: 1, name: "Siemens Magnetom Vida 3T", type: "MRI", location: "Berlin, DE", price: 450, rating: 4.9, specs: ["BioMatrix Tech", "70cm Bore", "Eco-Power Mode"], reliability: "99.2%" },
  { id: 2, name: "GE Revolution CT 512-Slice", type: "CT Scanner", location: "Rochester, US", price: 320, rating: 4.8, specs: ["Spectral Imaging", "0.23mm Spatial Res", "Low Dose"], reliability: "98.5%" },
  { id: 3, name: "Fresenius 5008S CorDiax", type: "Dialysis", location: "London, UK", price: 180, rating: 5.0, specs: ["AutoSub Plus", "VAM Protection", "HDF-Ready"], reliability: "99.9%" },
  { id: 4, name: "Philips Ingenia Elition 3.0T", type: "MRI", location: "Singapore, SG", price: 550, rating: 4.7, specs: ["Compressed SENSE", "Ambient Experience", "3.0T Field"], reliability: "97.8%" },
  { id: 5, name: "Canon Aquilion ONE GENESIS", type: "CT Scanner", location: "Tokyo, JP", price: 290, rating: 4.9, specs: ["AI Reconstruction", "Wide Detector", "Fast Scan"], reliability: "99.0%" },
  { id: 6, name: "Baxter Artis Physio", type: "Dialysis", location: "Toronto, CA", price: 165, rating: 4.6, specs: ["Diascan Tech", "Hemocontrol", "Online HDF"], reliability: "98.2%" },
  { id: 7, name: "Intuitive Da Vinci Xi", type: "Surgical Robot", location: "Paris, FR", price: 850, rating: 4.9, specs: ["4-Arm System", "3D-HD Vision", "Firefly Tech"], reliability: "96.5%" },
  { id: 8, name: "Hitachi Oasis 1.2T Open", type: "MRI", location: "New York, US", price: 400, rating: 4.5, specs: ["High-Field Open", "Patient Comfort", "Vertical Field"], reliability: "97.0%" },
  { id: 9, name: "Siemens Somatom Force", type: "CT Scanner", location: "Munich, DE", price: 380, rating: 4.9, specs: ["Dual Source", "High-Speed", "Kidney Friendly"], reliability: "99.4%" },
  { id: 10, name: "Gambro AK 98", type: "Dialysis", location: "Sydney, AU", price: 155, rating: 4.7, specs: ["Ultra-Pure Water", "User-Friendly", "Compact"], reliability: "98.8%" }
];

export default function ClinicSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = GLOBAL_INVENTORY.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* HEADER & SEARCH SECTION */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[var(--primary)] border border-white/20">
          <Zap size={14} className="text-secondary" />
          Global Asset Registry
        </div>
        {/* Changed to Deep Blue */}
        <h2 className="text-5xl font-black tracking-tighter mb-8 text-[var(--primary)] uppercase italic">Infrastructure Catalog</h2>
        
        <div className="max-w-3xl relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--primary)] opacity-40" />
          <input 
            type="text" 
            placeholder="Search by model (Siemens, MRI, Da Vinci...)"
            className="w-full glass-panel py-6 pl-16 pr-8 rounded-[2rem] font-bold outline-none focus:ring-2 ring-secondary/20 transition-all bg-white/40 text-[var(--primary)] placeholder:text-[var(--primary)] placeholder:opacity-20"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR FILTERS */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="glass-panel p-8 rounded-[2.5rem] sticky top-32 space-y-8 bg-white/40 border border-white shadow-sm">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40 text-[var(--primary)]">Modality</h4>
              <div className="space-y-4 font-bold text-sm text-[var(--primary)]">
                {["All Systems", "Imaging", "Renal", "Robotics"].map(cat => (
                  <p key={cat} className="hover:text-secondary cursor-pointer transition-colors flex items-center justify-between uppercase text-[10px] tracking-widest">
                    {cat} <ChevronRight size={14} />
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-[var(--primary)]/5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40 text-[var(--primary)]">Verification</h4>
              <div className="flex items-center gap-2 text-[9px] font-black text-emerald-600 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                <ShieldCheck size={14} /> HIPAA COMPLIANT ASSETS
              </div>
            </div>
          </div>
        </div>

        {/* MACHINE CARDS */}
        <div className="lg:col-span-3 space-y-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-panel p-10 rounded-[3.5rem] flex flex-col xl:flex-row gap-10 hover:shadow-2xl hover:shadow-secondary/10 transition-all group bg-white/40 border border-white">
              
              {/* VISUAL ASSET */}
              <div className="w-full xl:w-64 h-48 bg-[var(--primary)]/5 rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-[var(--primary)]/5 shadow-inner">
                <Activity className="text-secondary opacity-20 absolute top-4 right-4" size={24} />
                <div className="text-secondary font-black text-[10px] uppercase tracking-widest mb-2">{item.type}</div>
                <Zap size={48} className="text-secondary group-hover:scale-110 transition-transform" />
              </div>
              
              {/* DETAILS */}
              <div className="flex-1 space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] font-black bg-secondary text-white px-3 py-1 rounded-full uppercase tracking-widest">Verified</span>
                    <span className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] flex items-center gap-1 text-[var(--primary)]">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>
                  {/* Card Title Changed to Deep Blue */}
                  <h3 className="text-3xl font-black tracking-tighter text-[var(--primary)] uppercase italic">{item.name}</h3>
                </div>

                {/* TECH SPECS GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {item.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-2 text-[10px] font-bold opacity-40 uppercase text-[var(--primary)]">
                      <div className="w-1 h-1 rounded-full bg-secondary" /> {spec}
                    </div>
                  ))}
                </div>

                {/* PERFORMANCE STATS */}
                <div className="flex gap-6 pt-2">
                  <div className="flex items-center gap-2 text-[10px] font-black text-[var(--primary)] uppercase tracking-tight">
                    <Gauge size={14} className="text-secondary" /> 
                    <span>Reliability: <span className="text-emerald-600 italic">{item.reliability}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-[var(--primary)] uppercase tracking-tight">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span>{item.rating} <span className="opacity-40">(120+ Uses)</span></span>
                  </div>
                </div>
              </div>

              {/* ACTION */}
              <div className="xl:w-48 flex flex-col justify-between items-end border-l border-[var(--primary)]/5 pl-8">
                <div className="text-right">
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest text-[var(--primary)]">Starting at</p>
                  <p className="text-4xl font-black tracking-tighter text-[var(--primary)] italic">${item.price}<span className="text-sm">/hr</span></p>
                </div>
                <button className="w-full bg-[var(--primary)] text-white py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary transition-all active:scale-95 shadow-xl">
                  Quick Book <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • Global Infrastructure Registry
      </footer>
    </motion.div>
  );
}