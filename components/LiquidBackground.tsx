import React from 'react';

export const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfbf7]">
      {/* Soft warm blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-100/50 rounded-full blur-[80px] animate-bounce" style={{ animationDuration: '12s' }} />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]" />
      
      {/* Noise texture overlay for paper feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};
