import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarClock, 
  MapPin, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Clock,
  ShieldAlert,
  Zap
} from 'lucide-react';

export default function OwnerRequests() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  const requests = [
    {
      id: "REQ-2025-091",
      facility: "Saint Jude Medical Center",
      location: "Los Angeles, CA",
      asset: "Siemens Magnetom Sola (MRI)",
      period: "Jan 20 - Feb 28",
      valuation: "$74,500",
      urgency: "CRITICAL",
      credibility: 98
    },
    {
      id: "REQ-2025-094",
      facility: "Summit Children's Hospital",
      location: "Denver, CO",
      asset: "GE Revolution CT",
      period: "Feb 05 - Mar 05",
      valuation: "$42,000",
      urgency: "STANDARD",
      credibility: 100
    }
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-12">
      
      {/* --- HEADER --- */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-primary">
          <CalendarClock size={14} className="text-secondary" />
          Queue Management • Secure Handshake
        </div>
        <div className="flex justify-between items-end">
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Inbound Requests</h2>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">Pending Volume</p>
              <p className="text-2xl font-black text-secondary">08 Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- REQUEST FEED --- */}
      <div className="grid gap-8">
        {requests.map((req, i) => (
          <motion.div 
            key={req.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`${glassStyle} group hover:border-secondary/30 transition-all cursor-default`}
          >
            {/* Background Accent for Urgency */}
            {req.urgency === "CRITICAL" && (
              <div className="absolute top-0 right-0 px-10 py-2 bg-secondary text-primary text-[10px] font-black uppercase tracking-widest rounded-bl-[2rem]">
                High Priority Deployment
              </div>
            )}

            <div className="grid lg:grid-cols-4 gap-12 items-center">
              
              {/* FACILITY INFO */}
              <div className="lg:col-span-1 border-r border-primary/5 pr-8">
                <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-4 text-[#1d3557]">{req.id}</p>
                {/* Facility Title changed to Deep Blue */}
                <h3 className="text-2xl font-black tracking-tighter italic leading-tight mb-3 uppercase text-[#1d3557]">{req.facility}</h3>
                <div className="flex items-center gap-2 text-primary/60">
                  <MapPin size={14} className="text-secondary" />
                  <span className="text-[10px] font-bold uppercase text-[#1d3557]">{req.location}</span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-tighter text-[#1d3557]">Verified Provider</span>
                </div>
              </div>

              {/* ASSET & DURATION */}
              <div className="lg:col-span-1">
                <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-4 text-[#1d3557]">Requesting Asset</p>
                <h4 className="text-lg font-black uppercase tracking-tight text-[#1d3557] mb-2">{req.asset}</h4>
                <div className="flex items-center gap-2 bg-primary/5 p-3 rounded-2xl w-fit">
                  <Clock size={14} className="text-primary/40" />
                  <span className="text-xs font-black italic text-[#1d3557]">{req.period}</span>
                </div>
              </div>

              {/* SETTLEMENT PREVIEW */}
              <div className="lg:col-span-1">
                <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-4 text-[#1d3557]">Projected Yield</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black tracking-tighter text-[#1d3557]">{req.valuation}</span>
                  <span className="text-[10px] font-black opacity-30 text-[#1d3557]">USD</span>
                </div>
                <div className="mt-4 flex flex-col gap-1">
                   <div className="flex justify-between text-[8px] font-black uppercase opacity-40 text-[#1d3557]">
                     <span>Facility Trust Index</span>
                     <span>{req.credibility}%</span>
                   </div>
                   <div className="h-1 bg-primary/5 rounded-full overflow-hidden">
                     <div className="h-full bg-secondary" style={{ width: `${req.credibility}%` }} />
                   </div>
                </div>
              </div>

              {/* ACTION COMMANDS */}
              <div className="lg:col-span-1 flex flex-col gap-4">
                <button className="w-full bg-primary text-white py-5 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl group/btn">
                  Authorize <CheckCircle2 size={18} />
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-4 glass-panel rounded-2xl text-[10px] font-black uppercase opacity-60 hover:opacity-100 hover:bg-red-50/50 hover:text-red-500 transition-all flex items-center justify-center gap-2 text-[#1d3557]">
                    <XCircle size={14} /> Decline
                  </button>
                  <button className="py-4 glass-panel rounded-2xl text-[10px] font-black uppercase opacity-60 hover:opacity-100 transition-all flex items-center justify-center gap-2 text-[#1d3557]">
                     Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LOWER INSIGHT: COMPLIANCE ADVISORY --- */}
      <div className={`${glassStyle} border-amber-500/20 bg-amber-500/5`}>
        <div className="flex items-start gap-6">
          <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-600">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h4 className="text-lg font-black uppercase tracking-tighter italic text-[#1d3557]">Risk Intelligence Advisory</h4>
            <p className="text-[10px] font-bold opacity-60 uppercase mt-2 leading-relaxed text-[#1d3557]">
              Accepting "Saint Jude Medical Center" for the MRI request will put your West Coast fleet at <span className="text-primary font-black underline">100% utilization</span>. 
              No backup assets will be available in the Los Angeles sector for the next 40 days.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}