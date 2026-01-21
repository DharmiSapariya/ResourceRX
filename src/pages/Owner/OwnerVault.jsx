import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Download, 
  AlertTriangle, 
  History, 
  Plus, 
  Eye,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function OwnerVault() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const vaultItems = [
    { name: "ISO 13485:2016", type: "Quality Mgmt", expiry: "Dec 2026", status: "Active", asset: "Global Fleet" },
    { name: "Radiology Safety Cert", type: "Compliance", expiry: "Aug 2026", status: "Active", asset: "Siemens MRI #04" },
    { name: "Liability Insurance Rider", type: "Legal", expiry: "Feb 2026", status: "Expiring Soon", asset: "All Mobile Units" },
    { name: "FDA 510(k) Clearance", type: "Regulatory", expiry: "N/A", status: "Permanent", asset: "GE CT Scanner" },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-[10px] font-black uppercase mb-4 text-emerald-600 border border-emerald-500/20">
            <Lock size={12} /> End-to-End Encrypted Storage
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Certification Vault</h2>
        </div>
        <button className="bg-primary text-white px-10 py-5 rounded-3xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-secondary transition-all shadow-xl">
          <Plus size={18} /> Upload New Document
        </button>
      </div>

      {/* --- QUICK STATS / OVERVIEW --- */}
      <div className="grid md:grid-cols-3 gap-6 px-2">
        {[
          { label: "Vault Integrity", val: "100%", sub: "All Nodes Synced", icon: ShieldCheck, color: "text-emerald-500" },
          { label: "Active Certs", val: "24", sub: "Verified by ResourceRX", icon: FileText, color: "text-[#1d3557]" },
          { label: "Action Required", val: "01", sub: "Expiring in 30 Days", icon: AlertTriangle, color: "text-amber-500" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2.5rem] flex items-center gap-6 border-white/40">
            <div className={`p-5 rounded-2xl bg-white/50 ${stat.color} shadow-inner`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">{stat.label}</p>
              <h3 className="text-3xl font-black tracking-tighter text-[#1d3557]">{stat.val}</h3>
              <p className="text-[9px] font-bold opacity-50 uppercase tracking-tighter text-[#1d3557]">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- MAIN VAULT REGISTRY --- */}
      <div className={`${glassStyle} mx-2`}>
        <div className="flex justify-between items-center mb-10">
          {/* Table Heading changed to Deep Blue */}
          <h3 className="text-2xl font-black tracking-tighter italic uppercase text-[#1d3557]">Document Registry</h3>
          <div className="flex items-center gap-2 text-[10px] font-black opacity-30 uppercase text-[#1d3557]">
            <History size={14} /> Last Audit: 2 Hours Ago
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] text-[#1d3557]">
                <th className="px-8 pb-4">Classification</th>
                <th className="px-8 pb-4">Document Name</th>
                <th className="px-8 pb-4">Linked Asset</th>
                <th className="px-8 pb-4">Expiration</th>
                <th className="px-8 pb-4 text-right">Vault Action</th>
              </tr>
            </thead>
            <tbody>
              {vaultItems.map((item, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/40 rounded-3xl group hover:bg-white/70 transition-all border border-transparent hover:border-white"
                >
                  <td className="px-8 py-6 rounded-l-3xl">
                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-primary/5 rounded-full border border-primary/10 text-[#1d3557]">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-tight text-[#1d3557]">{item.name}</span>
                      <span className="text-[8px] font-bold opacity-30 uppercase text-[#1d3557]">SHA-256 Verified</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs font-bold text-[#1d3557]/60 uppercase">{item.asset}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className={item.status === "Expiring Soon" ? "text-amber-500" : "text-[#1d3557]/20"} />
                      <span className={`text-xs font-black ${item.status === "Expiring Soon" ? "text-amber-500" : "text-[#1d3557]"}`}>
                        {item.expiry}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right rounded-r-3xl">
                    <div className="flex justify-end gap-2">
                      <button className="p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform text-[#1d3557]/40 hover:text-[#1d3557]">
                        <Eye size={16} />
                      </button>
                      <button className="p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform text-[#1d3557]/40 hover:text-[#1d3557]">
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- COMPLIANCE TIMELINE / UPCOMING RENEWALS --- */}
      <div className="grid lg:grid-cols-2 gap-8 px-2">
        <div className={`${glassStyle} bg-primary text-white`}>
          <h3 className="text-xl font-black mb-6 flex items-center gap-3 italic uppercase">
            <CheckCircle className="text-secondary" /> Automated Compliance
          </h3>
          <p className="text-xs font-bold opacity-60 leading-relaxed uppercase mb-8">
            The ResourceRX protocol automatically syncs with state health departments to pre-verify your equipment. 
            No manual filing required for 80% of regional deployments.
          </p>
          <div className="space-y-4">
            {["State Regulatory Link", "Health Board API", "Insurance Oracle"].map((link, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white/10 rounded-2xl border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-widest">{link}</span>
                <span className="text-[8px] font-black text-secondary uppercase px-2 py-0.5 bg-secondary/10 rounded-full">Connected</span>
              </div>
            ))}
          </div>
        </div>

        <div className={glassStyle}>
          {/* Section Heading changed to Deep Blue */}
          <h3 className="text-xl font-black mb-8 italic uppercase text-[#1d3557]">Security Log</h3>
          <div className="space-y-6">
            {[
              { action: "Doc Downloaded", user: "Admin (You)", time: "10m ago" },
              { action: "Vault Synced", user: "System", time: "2h ago" },
              { action: "New ISO Upload", user: "Admin (You)", time: "2d ago" },
            ].map((log, i) => (
              <div key={i} className="flex justify-between items-center pb-4 border-b border-primary/5 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-tighter text-[#1d3557]">{log.action}</p>
                    <p className="text-[9px] font-bold opacity-30 uppercase text-[#1d3557]">{log.user}</p>
                  </div>
                </div>
                <span className="text-[9px] font-black opacity-30 uppercase text-[#1d3557]">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}