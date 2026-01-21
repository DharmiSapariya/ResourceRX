import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  ArrowUpRight, 
  Download, 
  ShieldCheck, 
  Clock, 
  Banknote, 
  History,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function OwnerSettlements() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const transactions = [
    { id: "SET-8821", facility: "Mayo Clinic", amount: "+$24,500.00", status: "Available", date: "Jan 12, 2026", type: "Rental Payout" },
    { id: "SET-8819", facility: "Johns Hopkins", amount: "+$18,200.00", status: "In Escrow", date: "Jan 14, 2026", type: "Security Deposit" },
    { id: "SET-8790", facility: "Mercy Health", amount: "+$12,400.00", status: "Processing", date: "Jan 10, 2026", type: "Service Fee Refund" },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-10">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-primary">
            <Lock size={12} className="text-secondary" />
            End-to-End Encrypted Ledger
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Settlement Registry</h2>
        </div>
        <button className="bg-primary text-white px-8 py-5 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-secondary transition-all shadow-xl">
          Withdraw Funds <ArrowUpRight size={16} />
        </button>
      </div>

      {/* --- BALANCE CARDS --- */}
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${glassStyle} bg-primary text-white border-none shadow-2xl`}
        >
          <div className="flex justify-between items-start mb-12">
            <Wallet className="text-secondary" size={32} />
            <p className="text-[10px] font-black opacity-50 uppercase tracking-widest">Available Balance</p>
          </div>
          <h3 className="text-5xl font-black tracking-tighter mb-2">$142,800.50</h3>
          <p className="text-[10px] font-bold opacity-40 uppercase">Ready for immediate liquidation</p>
        </motion.div>

        <div className={glassStyle}>
          <div className="flex justify-between items-start mb-12">
            <Clock className="text-primary/20" size={32} />
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">In Escrow</p>
          </div>
          {/* Values changed to Deep Blue */}
          <h3 className="text-4xl font-black tracking-tighter mb-2 text-[#1d3557]">$48,200.00</h3>
          <p className="text-[10px] font-bold text-secondary uppercase">Awaiting equipment return scan</p>
        </div>

        <div className={glassStyle}>
          <div className="flex justify-between items-start mb-12">
            <Banknote className="text-primary/20" size={32} />
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">YTD Earnings</p>
          </div>
          {/* Values changed to Deep Blue */}
          <h3 className="text-4xl font-black tracking-tighter mb-2 text-[#1d3557]">$892,400.00</h3>
          <p className="text-[10px] font-bold text-emerald-500 uppercase">+22% vs last fiscal year</p>
        </div>
      </div>

      {/* --- TRANSACTION LEDGER --- */}
      <div className={glassStyle}>
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
              <History size={20} className="text-primary" />
            </div>
            {/* Table Title changed to Deep Blue */}
            <h3 className="text-2xl font-black tracking-tighter uppercase italic text-[#1d3557]">Payment Ledger</h3>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase opacity-30 hover:opacity-100 transition-opacity text-[#1d3557]">
            <Download size={14} /> Download Tax Documents (1099-K)
          </button>
        </div>

        <div className="space-y-4">
          {transactions.map((tx, i) => (
            <motion.div 
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between p-8 bg-white/30 rounded-[2.5rem] border border-white hover:bg-white/60 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  tx.status === 'Available' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                }`}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black opacity-30 uppercase mb-1 text-[#1d3557]">{tx.id} • {tx.date}</p>
                  <h4 className="text-lg font-black tracking-tight text-[#1d3557] uppercase">{tx.facility}</h4>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter text-[#1d3557]">{tx.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="text-right">
                  <p className="text-2xl font-black tracking-tighter text-[#1d3557]">{tx.amount}</p>
                  <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${
                    tx.status === 'Available' ? 'border-emerald-500/20 text-emerald-600 bg-emerald-50' : 'border-amber-500/20 text-amber-600 bg-amber-50'
                  }`}>
                    {tx.status}
                  </span>
                </div>
                <ChevronRight className="opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#1d3557]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FINANCIAL ANALYTICS PREVIEW --- */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className={`${glassStyle} bg-secondary/5 border-secondary/20`}>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-40 text-[#1d3557]">Settlement Velocity</h4>
          <div className="flex items-end gap-2 h-20">
            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/10 rounded-t-lg relative group">
                <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <p className="mt-6 text-[10px] font-bold opacity-60 uppercase leading-relaxed text-[#1d3557]">
            Your average payout time has decreased by <span className="text-primary font-black">1.2 days</span> this month due to automated chain-of-custody verification.
          </p>
        </div>

        <div className={glassStyle}>
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-40 text-[#1d3557]">Payout Destination</h4>
           <div className="flex items-center gap-6 p-6 bg-white/50 rounded-[2rem] border border-white">
             <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
               <Banknote size={20} />
             </div>
             <div>
               <p className="text-xs font-black uppercase tracking-tight text-[#1d3557]">Chase Business Operating</p>
               <p className="text-[10px] font-bold opacity-30 text-[#1d3557]">**** **** 8821</p>
             </div>
             <button className="ml-auto text-[9px] font-black text-secondary uppercase border-b border-secondary/20">Edit</button>
           </div>
        </div>
      </div>

    </div>
  );
}