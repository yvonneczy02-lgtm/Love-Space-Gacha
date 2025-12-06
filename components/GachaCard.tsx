
import React from 'react';
import { CardData } from '../types';
import { GlassCard } from './GlassCard';

interface GachaCardProps {
  data: CardData | null;
  loading: boolean;
}

export const GachaCard: React.FC<GachaCardProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <GlassCard className="w-full max-w-[300px] aspect-[3/4] flex flex-col items-center justify-center p-6 animate-pulse bg-white/70">
        <div className="w-20 h-20 bg-pink-100/50 rounded-full mb-8 animate-bounce-soft flex items-center justify-center">
             <div className="w-12 h-12 bg-white/60 rounded-full blur-sm" />
        </div>
        <div className="h-4 bg-stone-200/50 rounded-full w-2/3 mb-4" />
        <div className="h-3 bg-stone-200/50 rounded-full w-4/5" />
      </GlassCard>
    );
  }

  if (!data) {
    return (
      <GlassCard className="w-full max-w-[300px] aspect-[3/4] flex flex-col items-center justify-center p-6 text-center text-stone-500 bg-white/60">
        <div className="w-28 h-28 bg-gradient-to-tr from-pink-50 to-blue-50 rounded-full mb-6 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white">
            <span className="text-6xl animate-bounce-soft drop-shadow-sm">✨</span>
        </div>
        <h3 className="text-2xl font-bold text-stone-700 mb-2 tracking-wide">Love Space</h3>
        <p className="text-stone-400 font-medium bg-white/40 px-4 py-1.5 rounded-full text-sm">点击按钮 开启浪漫</p>
      </GlassCard>
    );
  }

  return (
    <div className="perspective-1000 w-full max-w-[300px] group">
      <GlassCard className="aspect-[3/4] flex flex-col p-6 text-center animate-float-in border-t-2 border-white/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] justify-between">
        
        {/* Top Section: Category & Icon */}
        <div className="flex flex-col items-center w-full">
            <div className="relative mb-4">
                <div className="absolute inset-0 bg-pink-200/40 blur-3xl rounded-full transform scale-150" />
                <div className="relative w-28 h-28 bg-gradient-to-b from-white to-white/60 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(255,182,193,0.2)] border border-white/80 transition-transform duration-500 group-hover:scale-105">
                    <span className="text-7xl drop-shadow-sm select-none filter hue-rotate-0">
                        {data.icon}
                    </span>
                </div>
            </div>
          
            <span className="inline-block px-3 py-0.5 bg-pink-50/80 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest text-pink-400 uppercase shadow-sm border border-pink-100 mb-3">
                {data.category === 'deep-talk' ? 'Deep Talk' : 'Activity'}
            </span>

            <h2 className="text-xl font-black text-stone-700 leading-tight line-clamp-2 px-2">
                {data.title}
            </h2>
        </div>

        {/* Middle Section: Main Description (Centered) */}
        {/* Using text-lg to ensure it fits nicely without scrolling */}
        <div className="flex-1 flex items-center justify-center w-full px-1 py-2">
             <p className="text-lg text-stone-600 font-medium leading-relaxed break-words">
                {data.description}
            </p>
        </div>

        {/* Bottom Section: Suggestion */}
        {data.suggestion && (
          <div className="mt-2 pt-3 border-t border-dashed border-stone-200 w-full">
            <div className="bg-orange-50/50 rounded-xl p-2 w-full">
                <p className="text-xs text-stone-500 font-medium line-clamp-2">
                💡 {data.suggestion}
                </p>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};
