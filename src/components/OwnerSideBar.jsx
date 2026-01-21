import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  CalendarClock, 
  ShieldCheck, 
  TrendingUp, 
  BarChart3,
  Truck,
  Wallet,
  LogOut,
  Zap
} from 'lucide-react';

export default function OwnerSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Control Center', icon: LayoutDashboard, path: '/owner/dashboard' },
    { name: 'Add Equipment', icon: PlusCircle, path: '/owner/add' },
    { name: 'Booking Requests', icon: CalendarClock, path: '/owner/requests' },
    { name: 'Certification Vault', icon: ShieldCheck, path: '/owner/vault' },
    { name: 'Yield Strategy', icon: TrendingUp, path: '/owner/yield' },
    { name: 'Asset Intelligence', icon: BarChart3, path: '/owner/analytics' },
    { name: 'Deployment Logs', icon: Truck, path: '/owner/dispatch' },
    { name: 'Settlement Registry', icon: Wallet, path: '/owner/settlements' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 p-6 z-[60] hidden lg:block">
      <div className="glass-panel h-full w-full rounded-[3.5rem] flex flex-col overflow-hidden border-r border-white/10">
        
        {/* BRANDING HEADER - Exact Match to Landing Page/Clinic Sidebar */}
        <div className="p-10 pt-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1d3557]/5 text-[8px] font-black uppercase text-[#1d3557]/60 border border-[#1d3557]/10 tracking-widest mb-4">
            <Zap size={10} fill="currentColor" className="text-secondary" />
            Partner Portal
          </div>
          
          <h1 
            className="text-3xl font-black tracking-tighter italic cursor-pointer flex items-center justify-center"
            onClick={() => navigate('/owner/dashboard')}
          >
            <span className="text-[#1d3557]">RESOURCE</span>
            <span className="text-secondary">RX</span>
          </h1>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 mt-2 space-y-1 overflow-y-auto custom-scrollbar">
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
                <item.icon size={18} className={`${isActive ? "text-secondary" : "group-hover:text-secondary"} transition-colors`} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* OWNER PROFILE CARD */}
        <div className="p-6">
          <div className="glass-panel bg-[#1d3557] text-white p-6 rounded-[2.5rem] space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary font-black border border-white/10">
                OP
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-black truncate uppercase tracking-tighter italic">Nexus Medical</p>
                <p className="text-[9px] font-bold opacity-40 uppercase tracking-widest">Fleet Owner</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3.5 rounded-2xl bg-white/10 hover:bg-red-500/20 hover:text-red-400 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest border border-white/5"
            >
              <LogOut size={14} /> Terminate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}