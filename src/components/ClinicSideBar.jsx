import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  LogOut,
  Zap,
  CreditCard,
  AlertTriangle,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import '../App.css';

export default function ClinicSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Onboarding', icon: ShieldCheck, path: '/register' },
    { name: 'Find Equipment', icon: Search, path: '/search' },
    { name: 'Booking', icon: Calendar, path: '/booking' },
    { name: 'Payments', icon: CreditCard, path: '/payment' },
    { name: 'Live Tracking', icon: Activity, path: '/tracking' },
    { name: 'Completion', icon: CheckCircle2, path: '/completion' },
    { name: 'Service Review', icon: MessageSquare, path: '/feedback' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 p-6 z-[60] hidden lg:block">
      <div className="glass-panel h-full w-full rounded-[3rem] flex flex-col overflow-hidden border-r border-white/10">
        
        {/* CENTERED BRANDING SECTION */}
        <div className="pt-16 pb-10 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-[8px] font-black uppercase text-secondary tracking-widest mb-4">
            <Zap size={10} fill="currentColor" />
            Partner Portal
          </div>
          <h1 className="text-3xl font-[1000] italic tracking-tighter text-[var(--primary)] leading-none">
            RESOURCE<span className="text-secondary">RX</span>
          </h1>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-4 px-6 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 group ${
                  isActive 
                  ? "bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]" 
                  : "text-primary/40 hover:text-primary hover:bg-white/40"
                }`}
              >
                <item.icon size={18} className={`${isActive ? "text-secondary" : "group-hover:text-secondary"} transition-colors`} />
                {item.name}
              </button>
            );
          })}

          {/* EMERGENCY SECTION */}
          <div className="pt-4 px-2">
             <button 
              onClick={() => navigate('/emergency')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border border-red-500/20 ${
                location.pathname === '/emergency' 
                ? "bg-red-500 text-white" 
                : "bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white"
              }`}
             >
                <AlertTriangle size={18} className={location.pathname === '/emergency' ? "" : "animate-pulse"} />
                Emergency
             </button>
          </div>
        </nav>

        {/* USER PROFILE CARD */}
        <div className="p-6">
          <div className="glass-panel bg-primary text-white p-6 rounded-[2rem] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary font-black">
                C1
              </div>
              <div className="overflow-hidden text-left">
                <p className="text-[10px] font-black uppercase truncate">City General</p>
                <p className="text-[8px] font-bold opacity-40 uppercase tracking-widest text-secondary">Elite Partner</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-red-500/20 hover:text-red-500 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"
            >
              <LogOut size={14} /> Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}