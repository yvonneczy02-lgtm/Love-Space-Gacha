import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverEffect = false
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/60 backdrop-blur-xl 
        border border-white/40 
        shadow-[0_8px_32px_0_rgba(255,255,255,0.5),_0_8px_32px_0_rgba(31,38,135,0.05)]
        rounded-3xl
        transition-all duration-300 ease-out
        ${hoverEffect ? 'hover:scale-[1.02] hover:bg-white/70 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.1)] cursor-pointer active:scale-95' : ''}
        ${className}
      `}
    >
      {/* Glossy reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
