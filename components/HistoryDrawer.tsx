import React from 'react';
import { CardData } from '../types';
import { GlassCard } from './GlassCard';

interface HistoryDrawerProps {
  history: CardData[];
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({ history, isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-stone-900/10 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-[75vh] z-50 transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="h-full w-full max-w-2xl mx-auto bg-[#fdfbf7]/90 backdrop-blur-2xl rounded-t-[2.5rem] shadow-[0_-10px_60px_rgba(0,0,0,0.1)] border-t border-white/60 flex flex-col">
          {/* Handle */}
          <div className="w-full flex justify-center pt-5 pb-3 cursor-pointer" onClick={onClose}>
            <div className="w-16 h-1.5 bg-stone-300/70 rounded-full" />
          </div>

          <div className="px-8 pb-2 flex items-baseline gap-3">
            <h3 className="text-2xl font-bold text-stone-700">回忆胶囊</h3>
            <span className="text-sm text-stone-400 font-medium">{history.length} 条记录</span>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-4 pt-4">
            {history.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-stone-400 gap-4">
                  <span className="text-4xl opacity-50">🍃</span>
                  <p>还没有记录哦，快去抽取吧 ~</p>
              </div>
            ) : (
              history.map((item) => (
                <GlassCard key={item.id} className="p-5 flex items-start gap-4 !bg-white/60 hover:!bg-white/80 transition-colors">
                  <div className="text-3xl bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm shrink-0">
                      {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between w-full mb-1">
                      <h4 className="font-bold text-stone-800 truncate">{item.title}</h4>
                      <span className="text-xs text-stone-400 whitespace-nowrap ml-2 mt-1">
                        {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-snug">{item.description}</p>
                  </div>
                </GlassCard>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};