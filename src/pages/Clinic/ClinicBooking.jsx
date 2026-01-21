import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Activity, 
  Zap, 
  AlertCircle,
  FileText,
  User
} from 'lucide-react';
import "../../App.css";

const CURRENT_BOOKINGS = [
  {
    id: "RRX-9920",
    asset: "Siemens Magnetom Vida 3T",
    status: "ACTIVE SESSION",
    timeSlot: "09:00 AM - 05:00 PM",
    operator: "Dr. Aris Thorne",
    location: "Bay 4 - Radiology",
    progress: 65
  },
  {
    id: "RRX-9924",
    asset: "GE Revolution CT Scanner",
    status: "IN TRANSIT",
    timeSlot: "Tomorrow, 08:00 AM",
    operator: "Staff Assigned",
    location: "En Route from Central Hub",
    progress: 0
  },
  {
    id: "RRX-9881",
    asset: "Fresenius 5008S Dialysis x2",
    status: "PENDING SETUP",
    timeSlot: "Jan 15, 10:00 AM",
    operator: "Tech Support Req.",
    location: "Storage Wing A",
    progress: 0
  }
];

export default function ClinicBookings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-40 pb-20 px-6 max-w-7xl mx-auto"
    >
      {/* HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/40 text-[10px] font-black uppercase mb-4 text-[var(--primary)] border border-white/20">
          <Calendar size={14} className="text-secondary" />
          Active Infrastructure Schedule
        </div>
        {/* Deep Blue Heading Applied Here */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)] uppercase italic">My Bookings</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Manage Scheduled & Live Assets</p>
      </div>

      <div className="space-y-6">
        {CURRENT_BOOKINGS.map((booking) => (
          <div key={booking.id} className="glass-panel p-8 rounded-[3rem] group hover:border-secondary/30 transition-all">
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              
              {/* STATUS INDICATOR */}
              <div className="w-full xl:w-64 space-y-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black ${
                  booking.status === "ACTIVE SESSION" ? "bg-emerald-500/10 text-emerald-600" : 
                  booking.status === "IN TRANSIT" ? "bg-blue-500/10 text-blue-600" : "bg-amber-500/10 text-amber-600"
                }`}>
                  <Zap size={10} fill="currentColor" /> {booking.status}
                </div>
                <h3 className="text-2xl font-black tracking-tighter leading-tight text-[var(--primary)] uppercase italic">{booking.asset}</h3>
                <p className="text-xs font-bold opacity-40 text-[var(--primary)]">REF: {booking.id}</p>
              </div>

              {/* DETAILS GRID */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="space-y-1">
                  <p className="text-[10px] font-black opacity-30 uppercase tracking-widest flex items-center gap-2 text-[var(--primary)]">
                    <Clock size={12}/> Time Window
                  </p>
                  <p className="font-bold text-sm text-[var(--primary)]">{booking.timeSlot}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black opacity-30 uppercase tracking-widest flex items-center gap-2 text-[var(--primary)]">
                    <User size={12}/> Assigned Operator
                  </p>
                  <p className="font-bold text-sm text-[var(--primary)]">{booking.operator}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black opacity-30 uppercase tracking-widest flex items-center gap-2 text-[var(--primary)]">
                    <MapPin size={12}/> Logistics
                  </p>
                  <p className="font-bold text-sm text-[var(--primary)]">{booking.location}</p>
                </div>
              </div>

              {/* ACTION AREA */}
              <div className="w-full xl:w-48 flex flex-col gap-3">
                {booking.status === "ACTIVE SESSION" && (
                  <div className="w-full bg-[var(--primary)]/5 h-2 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${booking.progress}%` }}
                      className="h-full bg-secondary"
                    />
                  </div>
                )}
                <button className="w-full py-4 glass-panel rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-all flex items-center justify-center gap-2 text-[var(--primary)]">
                  <FileText size={14} /> View Details
                </button>
                <button className="w-full py-4 bg-white/50 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-500 hover:bg-red-500 hover:text-white transition-all">
                  Cancel Slot
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALL TO ACTION */}
      <div className="mt-12 glass-panel p-10 rounded-[3rem] bg-[var(--primary)] text-white flex flex-col md:flex-row justify-between items-center border-none overflow-hidden relative shadow-xl">
        <div className="relative z-10">
          <h4 className="text-2xl font-black tracking-tighter italic uppercase">Need more capacity?</h4>
          <p className="opacity-60 font-bold text-sm">Emergency asset overrides are available for Elite Tier partners.</p>
        </div>
        <button className="relative z-10 mt-6 md:mt-0 bg-secondary px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform flex items-center gap-2 text-[var(--primary)]">
          Request Emergency Asset <AlertCircle size={18} />
        </button>
        <Activity className="absolute -right-10 opacity-10 text-white" size={240} />
      </div>

    </motion.div>
  );
}