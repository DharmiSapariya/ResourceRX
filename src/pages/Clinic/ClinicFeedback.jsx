import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  ChevronRight, 
  Award,
  Heart,
  Zap
} from 'lucide-react';
import '../../App.css';

export default function ClinicFeedback() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
    >
      {/* FEEDBACK HEADER */}
      <div className="mb-12 ml-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-violet-500/10 text-[10px] font-black uppercase mb-4 text-violet-600">
          <MessageSquare size={14} />
          Quality Assurance Loop
        </div>
        {/* Changed to Deep Blue */}
        <h2 className="text-5xl font-black tracking-tighter mb-2 text-[var(--primary)]">Service Review</h2>
        <p className="text-[var(--primary)] opacity-40 font-bold tracking-tight uppercase text-xs tracking-[0.2em]">Provider: City General Imaging • Asset: MRI-3.0T</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* RATING & COMMENT AREA */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[3.5rem] p-12 text-center">
            <h4 className="text-xs font-black uppercase opacity-40 mb-10 tracking-widest text-[var(--primary)]">Rate Asset Performance</h4>
            
            <div className="flex justify-center gap-6 mb-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                  className="transition-all duration-300 transform hover:scale-125"
                >
                  <Star 
                    size={48} 
                    className={`${(hover || rating) >= star ? 'text-violet-500 fill-violet-500' : 'text-gray-200'} transition-colors`}
                  />
                </button>
              ))}
            </div>

            <textarea 
              placeholder="Describe the equipment condition and technician performance..."
              className="w-full glass-panel bg-white/40 p-8 rounded-[2.5rem] outline-none font-bold text-[var(--primary)] min-h-[200px] border-2 border-transparent focus:border-violet-500/30 transition-all"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-8 rounded-[2.5rem] flex items-center gap-4 hover:bg-white/60 cursor-pointer transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
                <ThumbsUp size={24} />
              </div>
              <p className="font-black text-sm uppercase text-[var(--primary)]">Recommend Provider</p>
            </div>
            <div className="glass-panel p-8 rounded-[2.5rem] flex items-center gap-4 hover:bg-white/60 cursor-pointer transition-all">
              <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-600">
                <Award size={24} />
              </div>
              <p className="font-black text-sm uppercase text-[var(--primary)]">Flawless Operation</p>
            </div>
          </div>
        </div>

        {/* REPUTATION SIDEBAR */}
        <div className="space-y-6">
          <div className="glass-panel bg-primary text-white p-10 rounded-[3rem] relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
               <Heart size={160} className="text-violet-500" />
            </div>

            <h4 className="text-xs font-black uppercase text-violet-400 tracking-widest mb-6">Clinic Reputation</h4>
            <div className="space-y-6 relative z-10">
               <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-[10px] font-black opacity-50 uppercase mb-1">Trust Score</p>
                  <p className="text-3xl font-black">98.4<span className="text-sm text-violet-400 ml-1">XP</span></p>
               </div>
               
               <p className="text-xs font-bold opacity-60 leading-relaxed uppercase italic">
                 High-quality feedback increases your clinic's priority for future emergency asset overrides.
               </p>

               <div className="space-y-3">
                  {["Detailed Review +5XP", "Photo Verification +10XP"].map((bonus, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-400">
                      <Zap size={12} fill="currentColor" /> {bonus}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/search')}
            className="w-full bg-violet-600 text-white p-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-violet-600/20 hover:bg-violet-700 transition-all flex items-center justify-center gap-3 group"
          >
            Submit Feedback
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <footer className="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]">
        ResourceRX Ecosystem • Quality Assurance Node
      </footer>
    </motion.div>
  );
}