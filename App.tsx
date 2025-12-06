import React, { useState } from 'react';
import { LiquidBackground } from './components/LiquidBackground';
import { GachaCard } from './components/GachaCard';
import { GlassCard } from './components/GlassCard';
import { HistoryDrawer } from './components/HistoryDrawer';
import { Category, CardData } from './types';
import { generateCardContent } from './services/geminiService';

const App: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<Category>('deep-talk');
  const [history, setHistory] = useState<CardData[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  
  // Track how many deep talk cards have been drawn to control progression
  const [deepTalkCount, setDeepTalkCount] = useState(0);

  const handleDraw = async () => {
    if (loading) return;
    setLoading(true);
    
    // Smooth scroll to top if needed on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Artificial delay for anticipation if API is too fast
    const minDelay = new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Pass the current count to the service to determine the "stage" of the conversation
      const [content] = await Promise.all([
        generateCardContent(category, deepTalkCount),
        minDelay
      ]);

      const newCard: CardData = {
        id: crypto.randomUUID(),
        category,
        timestamp: Date.now(),
        ...content
      };

      setCurrentCard(newCard);
      setHistory(prev => [newCard, ...prev]);

      if (category === 'deep-talk') {
        setDeepTalkCount(prev => prev + 1);
      }

    } catch (error) {
      console.error("Failed to generate", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 relative selection:bg-pink-200 selection:text-pink-900">
      <LiquidBackground />

      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center">
        
        {/* Header */}
        <header className="w-full flex justify-between items-center max-w-sm mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☁️</span>
            <h1 className="text-lg font-bold tracking-tight text-stone-700">Love Space</h1>
          </div>
          <button 
            onClick={() => setIsHistoryOpen(true)}
            className="p-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors backdrop-blur-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-600">
              <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
            </svg>
          </button>
        </header>

        {/* Main Content Area - Centered Vertically */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-6 mb-8">
          
          {/* Category Switcher */}
          <div className="p-1 bg-white/30 backdrop-blur-md rounded-full flex gap-1 shadow-inner border border-white/20">
            <button
              onClick={() => setCategory('deep-talk')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === 'deep-talk' 
                  ? 'bg-white shadow-sm text-stone-800' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              深夜话题
            </button>
            <button
              onClick={() => setCategory('activity')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === 'activity' 
                  ? 'bg-white shadow-sm text-stone-800' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              互动挑战
            </button>
          </div>

          {/* Card Display */}
          <GachaCard data={currentCard} loading={loading} />

        </div>

        {/* Floating Action Button / Bottom Controls */}
        <div className="sticky bottom-8 w-full max-w-sm flex justify-center pb-4 z-20">
          <GlassCard 
            onClick={handleDraw}
            hoverEffect={!loading}
            className={`
              w-full py-4 px-8 rounded-2xl flex items-center justify-center gap-3
              bg-gradient-to-r from-pink-100/80 to-indigo-100/80
              border-2 border-white
              group shadow-lg
              ${loading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}
            `}
          >
            <span className={`text-xl transition-transform duration-500 ${loading ? 'animate-spin' : 'group-hover:rotate-12'}`}>
              {category === 'deep-talk' ? '💬' : '🎲'}
            </span>
            <span className="text-lg font-semibold text-stone-700 tracking-wide">
              {loading ? '抽取中...' : (currentCard ? '再抽一张' : '开始抽取')}
            </span>
          </GlassCard>
        </div>
      </main>

      <HistoryDrawer 
        history={history} 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
      />
    </div>
  );
};

export default App;