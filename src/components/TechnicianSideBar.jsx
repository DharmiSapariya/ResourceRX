import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Wrench, 
  ClipboardCheck, 
  Package, 
  Radio, 
  AlertOctagon, 
  BookOpen,
  LogOut,
} from 'lucide-react';

export default function TechSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Ops Center', icon: LayoutDashboard, path: '/tech/dashboard' },
    { name: 'Diagnostic Hub', icon: Activity, path: '/tech/diagnostics' },
    { name: 'Service Orders', icon: Wrench, path: '/tech/orders' },
    { name: 'Calibration Log', icon: ClipboardCheck, path: '/tech/calibration' },
    { name: 'Tactical Inventory', icon: Package, path: '/tech/inventory' },
    { name: 'Deployment Prep', icon: Radio, path: '/tech/prep' },
    { name: 'Incident Portal', icon: AlertOctagon, path: '/tech/incidents' },
    { name: 'Tech Library', icon: BookOpen, path: '/tech/library' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 p-6 z-[60] hidden lg:block">
      <div className="glass-panel h-full w-full rounded-[3rem] flex flex-col overflow-hidden border-r border-white/10">
        
        {/* LOGO SPACE - Centered Alignment */}
        <div className="px-6 pt-16 pb-10 flex flex-col items-center text-center">
          {/* ResourceRX Brand */}
          <div className="mb-4 cursor-pointer" onClick={() => navigate('/tech/dashboard')}>
            <h1 className="text-3xl font-black tracking-tighter italic text-[#1d3557]">
              RESOURCE<span className="text-secondary">RX</span>
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-[8px] font-black uppercase text-secondary tracking-widest border border-secondary/20">
            <Activity size={10} className="animate-pulse" />
            Field Protocol
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-wider transition-all duration-300 group ${
                  isActive 
                  ? "bg-[#1d3557] text-white shadow-xl shadow-[#1d3557]/20 scale-[1.02]" 
                  : "text-[#1d3557]/40 hover:text-[#1d3557] hover:bg-white/40"
                }`}
              >
                <item.icon size={18} className={`${isActive ? "text-secondary" : "group-hover:text-secondary"} transition-colors group-hover:rotate-12 duration-500`} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* TECH PROFILE CARD */}
        <div className="p-6">
          <div className="glass-panel bg-[#1d3557] text-white p-6 rounded-[2rem] space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary font-black">
                T1
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-black truncate">Senior Tech</p>
                <p className="text-[10px] font-bold opacity-40 uppercase">ID: RRX-442</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-red-500/20 hover:text-red-500 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"
            >
              <LogOut size={14} /> Off-Duty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}