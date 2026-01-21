import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  ChevronRight, 
  Building2, 
  CheckCircle2,
  Wallet,
  ArrowUpRight
} from 'lucide-react';
import '../../App.css';

export default function ClinicPayment() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* PAYMENT HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-[10px] font-black uppercase mb-4 text-emerald-600 border border-emerald-500/20">
          <Lock size={14} />
          Encrypted Escrow Terminal
        </div>
        {/* Deep Blue Heading Applied Here */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)] uppercase italic">Secure Payment</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Transaction ID: RX-992-0012</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* PAYMENT METHODS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[3rem] p-10 space-y-8 bg-white/40 border border-white">
            <h4 className="text-[10px] font-black uppercase opacity-40 tracking-[0.3em] text-[var(--primary)]">Select Funding Method</h4>
            
            <div className="grid gap-4">
              {[
                { name: "Institutional Credit Line", icon: Building2, desc: "Direct hospital billing" },
                { name: "Digital Wallet / Stripe", icon: Wallet, desc: "Instant authorization" },
                { name: "Direct Wire Transfer", icon: ArrowUpRight, desc: "Standard 24h clearing" }
              ].map((method, i) => (
                <div key={i} className="glass-panel bg-white/60 p-6 rounded-[2rem] flex items-center justify-between hover:border-emerald-500/30 cursor-pointer transition-all group border border-white/50 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-inner">
                      <method.icon size={24} />
                    </div>
                    <div>
                      <p className="font-black text-lg tracking-tight text-[var(--primary)] uppercase italic">{method.name}</p>
                      <p className="text-[10px] font-bold text-[var(--primary)] opacity-40 uppercase">{method.desc}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-[var(--primary)]/10 group-hover:border-emerald-500 transition-colors shadow-inner" />
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--primary)]/5">
              <div className="glass-panel bg-emerald-500/5 p-6 rounded-2xl flex items-center gap-4 border border-emerald-500/10 shadow-inner">
                <CheckCircle2 className="text-emerald-600 shrink-0" />
                <p className="text-[10px] font-bold text-emerald-900/60 leading-tight uppercase tracking-tight">
                  Funds are held in <span className="text-emerald-600 font-black">Secure Escrow</span> and only released to the equipment owner upon successful operation completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="space-y-6">
          <div className="glass-panel bg-[var(--primary)] text-white p-10 rounded-[3rem] space-y-8 shadow-2xl border-none relative overflow-hidden">
            <h4 className="text-[10px] font-black uppercase text-emerald-400 tracking-[0.3em]">Billing Summary</h4>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between font-bold opacity-60 text-xs uppercase tracking-tighter">
                <span>Infrastructure Access</span>
                <span className="italic">$450.00</span>
              </div>
              <div className="flex justify-between font-bold opacity-60 text-xs uppercase tracking-tighter">
                <span>Dispatch & Logistics</span>
                <span className="italic">$25.00</span>
              </div>
              <div className="flex justify-between font-bold opacity-60 text-xs uppercase tracking-tighter">
                <span>Platform Fee (Escrow)</span>
                <span className="italic">$12.50</span>
              </div>
              <div className="h-px bg-white/10 w-full my-4" />
              <div className="flex justify-between text-3xl font-black">
                <span className="tracking-tighter uppercase italic">Total Due</span>
                <span className="text-emerald-400 italic font-black">$487.50</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl flex items-start gap-3 border border-white/5">
              <ShieldCheck className="text-emerald-400 shrink-0" size={18} />
              <p className="text-[9px] font-bold leading-relaxed opacity-60 uppercase tracking-tight">
                SSL Secured • PCI DSS Compliant • HiPAA Protected Data
              </p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/tracking')}
            className="w-full bg-emerald-600 text-white p-6 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 active:scale-95 group"
          >
            Authorize Payment
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>

      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Financial • Encrypted Gateway Node
      </footer>
    </motion.div>
  );
}