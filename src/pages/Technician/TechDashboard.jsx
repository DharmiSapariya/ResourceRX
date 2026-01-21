import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  Navigation,
  Clock,
  Zap
} from 'lucide-react';

export default function TechDashboard() {
  const glassStyle = "glass-panel p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-500";

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-4 px-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-[10px] font-black uppercase mb-4 text-secondary border border-secondary/20">
            <Zap size={14} fill="currentColor" /> Field Status: Active
          </div>
          {/* Main Heading changed to Deep Blue */}
          <h2 className="text-5xl font-black tracking-tighter italic uppercase text-[#1d3557]">Ops Center</h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] text-[#1d3557]">Tech ID</p>
          <p className="text-sm font-bold tracking-widest text-[#1d3557]">RRX-TECH-404</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* NEXT ASSIGNMENT CARD */}
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${glassStyle} bg-primary text-white border-none shadow-2xl`}
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-2">Priority 01: Next Mission</p>
                <h3 className="text-4xl font-black tracking-tighter italic uppercase">Emergency Calibration</h3>
              </div>
              <div className="bg-white/10 p-4 rounded-3xl">
                <Navigation className="text-secondary animate-pulse" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="text-secondary" size={20} />
                  <div>
                    <p className="text-[10px] font-black opacity-40 uppercase">Location</p>
                    <p className="text-sm font-bold uppercase">St. Luke's Oncology Wing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Wrench className="text-secondary" size={20} />
                  <div>
                    <p className="text-[10px] font-black opacity-40 uppercase">Asset</p>
                    <p className="text-sm font-bold uppercase">GE Revolution CT #102</p>
                  </div>
                </div>
              </div>
              <button className="bg-secondary text-primary w-full py-6 rounded-[2rem] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                Initiate Navigation
              </button>
            </div>
          </motion.div>
        </div>

        {/* TECH METRICS */}
        <div className={glassStyle}>
            {/* Heading changed to Deep Blue */}
            <h3 className="text-xl font-black mb-8 italic uppercase text-[#1d3557]">Shift Stats</h3>
            <div className="space-y-6">
                {[
                    { label: "Tasks Completed", val: "04", total: "06" },
                    { label: "Uptime Contribution", val: "99.2%" },
                    { label: "Avg. Service Time", val: "1.2 Hrs" }
                ].map((stat, i) => (
                    <div key={i} className="pb-4 border-b border-primary/5 last:border-0">
                        <p className="text-[10px] font-black opacity-30 uppercase text-[#1d3557]">{stat.label}</p>
                        <p className="text-2xl font-black text-[#1d3557]">{stat.val}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* TASK QUEUE */}
      <div className={glassStyle}>
        <div className="flex justify-between items-center mb-10">
            {/* Heading changed to Deep Blue */}
            <h3 className="text-2xl font-black tracking-tighter italic uppercase text-[#1d3557]">Mission Queue</h3>
            <div className="flex items-center gap-2 text-[10px] font-black opacity-30 uppercase tracking-widest text-[#1d3557]">
                <Clock size={14} /> Update Required
            </div>
        </div>
        <div className="space-y-4">
            {[
                { time: "14:00", task: "Routine Cryogen Check", unit: "Siemens MRI #04", status: "Upcoming" },
                { time: "16:30", task: "Safety Protocol 09", unit: "Mobile X-Ray B", status: "Upcoming" },
                { time: "Done", task: "Software Patch v4.2", unit: "CT-Omega", status: "Completed" }
            ].map((task, i) => (
                <div key={i} className={`p-8 rounded-[2.5rem] border flex justify-between items-center transition-all ${task.status === 'Completed' ? 'bg-emerald-500/5 border-emerald-500/20 opacity-50' : 'bg-white/40 border-white hover:bg-white cursor-pointer'}`}>
                    <div className="flex items-center gap-8">
                        <p className={`text-xs font-black uppercase w-12 ${task.status === 'Completed' ? 'text-emerald-500' : 'text-secondary'}`}>{task.time}</p>
                        <div>
                            <p className="text-sm font-black uppercase tracking-tight text-[#1d3557]">{task.task}</p>
                            <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest text-[#1d3557]">{task.unit}</p>
                        </div>
                    </div>
                    {task.status === 'Completed' ? (
                      <CheckCircle2 className="text-emerald-500" />
                    ) : (
                      <button className="text-[10px] font-black uppercase text-primary hover:text-secondary transition-colors">
                        Details →
                      </button>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}