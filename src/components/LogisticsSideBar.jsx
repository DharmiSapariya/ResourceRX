import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Truck, 
  Map, 
  ClipboardCheck, 
  AlertTriangle, 
  LogOut,
  Settings
} from 'lucide-react';

export default function LogisticsSideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/logistics/dashboard' },
    { name: 'Active Dispatches', icon: Truck, path: '/logistics/active' },
    { name: 'Live Route Map', icon: Map, path: '/logistics/map' },
    { name: 'Handover Logs', icon: ClipboardCheck, path: '/logistics/logs' },
    { name: 'Incident Reports', icon: AlertTriangle, path: '/logistics/incident' },
  ];

  return (
    <div className="fixed left-6 top-32 bottom-8 w-72 glass-panel rounded-[3rem] p-8 flex flex-col z-50 border-r border-white/10">
      
      {/* LOGO SPACE */}
      <div className="mb-10 px-4 flex flex-col items-start">
        <div className="mb-2 cursor-pointer" onClick={() => navigate('/logistics/dashboard')}>
          <h1 className="text-2xl font-black tracking-tighter italic text-[#1d3557]">
            RESOURCE<span className="text-secondary">RX</span>
          </h1>
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 text-[#1d3557]">
          Transport Command
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-wider transition-all duration-300 ${
                isActive 
                ? 'bg-[#1d3557] text-white shadow-xl shadow-[#1d3557]/20 scale-[1.02]' 
                : 'text-[#1d3557]/40 hover:text-[#1d3557] hover:bg-white/50'
              }`}
            >
              <Icon size={18} className={isActive ? "text-secondary" : ""} />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* FOOTER ACTIONS */}
      <div className="pt-6 border-t border-[#1d3557]/5 space-y-2">
        <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-wider text-[#1d3557]/40 hover:text-[#1d3557] hover:bg-white/50 transition-all">
          <Settings size={18} /> Settings
        </button>
        <button 
          onClick={() => navigate('/')} 
          className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-wider text-red-500 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={18} /> Exit Portal
        </button>
      </div>
    </div>
  );
}