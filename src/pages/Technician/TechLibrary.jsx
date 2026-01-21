import React from 'react';
import { motion } from 'framer-motion';
import { 
  Library, 
  FileText, 
  Search, 
  Download, 
  Eye, 
  BookOpen, 
  Cpu, 
  ShieldCheck,
  Zap,
  Bookmark,
  Share2
} from 'lucide-react';

export default function TechLibrary() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const documents = [
    { title: "Siemens Magnetom Service Manual", version: "v8.2", type: "Full Manual", size: "42MB", category: "MRI" },
    { title: "GE Revolution CT Schematics", version: "v12.0", type: "Circuit Map", size: "12MB", category: "CT" },
    { title: "Quench Emergency Protocol", version: "2025 Standard", type: "Safety", size: "2MB", category: "Safety" },
    { title: "Cryogen Refill Guide", version: "v3.1", type: "SOP", size: "8MB", category: "Maintenance" },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- LIBRARY HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase mb-4 text-primary border border-primary/20">
            <Library size={12} className="text-secondary" /> Knowledge Protocol 11-A
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Technical Library</h2>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20 text-[#1d3557]" size={18} />
            <input 
              type="text" 
              placeholder="Search Manuals or Codes..." 
              className="glass-panel pl-14 pr-8 py-4 rounded-3xl font-bold text-xs outline-none w-80 focus:ring-2 ring-secondary/50 transition-all shadow-inner text-[#1d3557]"
            />
          </div>
        </div>
      </div>

      {/* --- QUICK ACCESS CATEGORIES --- */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "MRI Systems", count: "142 Docs", icon: Zap },
          { label: "CT Hardware", count: "88 Docs", icon: Cpu },
          { label: "Safety SOPs", count: "12 Docs", icon: ShieldCheck },
          { label: "Drafts/Notes", count: "05 Docs", icon: Bookmark },
        ].map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="glass-panel p-8 rounded-[2.5rem] text-center border-white/40 cursor-pointer group"
          >
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:text-secondary transition-colors mb-4">
              <cat.icon size={28} />
            </div>
            <p className="text-xs font-black uppercase tracking-tight text-[#1d3557]">{cat.label}</p>
            <p className="text-[9px] font-bold opacity-30 uppercase mt-1 text-[#1d3557]">{cat.count}</p>
          </motion.div>
        ))}
      </div>

      {/* --- DOCUMENT ARCHIVE --- */}
      <div className={glassStyle}>
        <div className="flex justify-between items-center mb-10">
          {/* Subheading changed to Deep Blue */}
          <h3 className="text-2xl font-black tracking-tighter italic uppercase flex items-center gap-3 text-[#1d3557]">
            <BookOpen className="text-secondary" /> OEM Archives
          </h3>
          <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] text-[#1d3557]">Updated: 24h ago</span>
        </div>

        <div className="grid gap-4">
          {documents.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white/40 rounded-[2.5rem] border border-white hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/20 border border-primary/5">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-black text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded-full">{doc.category}</span>
                    <span className="text-[9px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">{doc.version}</span>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight leading-none text-[#1d3557]">{doc.title}</h4>
                  <p className="text-[10px] font-bold opacity-40 uppercase mt-1 text-[#1d3557]">{doc.type} • {doc.size}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6 md:mt-0">
                <button className="p-4 bg-white rounded-2xl shadow-sm text-primary/40 hover:text-secondary hover:scale-110 transition-all">
                  <Eye size={20} />
                </button>
                <button className="p-4 bg-white rounded-2xl shadow-sm text-primary/40 hover:text-secondary hover:scale-110 transition-all">
                  <Download size={20} />
                </button>
                <button className="p-4 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- PRO-TIP / COMMUNITY KNOWLEDGE --- */}
      <div className={`${glassStyle} bg-secondary text-primary border-none shadow-xl`}>
        <div className="flex items-start gap-8">
          <div className="shrink-0 p-5 bg-white/20 rounded-3xl">
            <Zap size={32} />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-black italic uppercase tracking-tighter">Field Intelligence Alert</h4>
            <p className="text-sm font-bold opacity-80 leading-relaxed uppercase">
              Technicians in the Northwest report that **Siemens v8.2 software** may hang during gantry reset if the room temp is above 21°C. 
              <span className="block mt-2 font-black underline">Recommended: Pre-cool suite to 19°C before update.</span>
            </p>
            <button className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 border-b-2 border-primary pb-1">
              Read 12 Community Replies →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}