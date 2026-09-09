import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWidgets: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowScrollTop(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello R.V. Public School Agra, I am interested in admission for the 2026-27 academic session.');
    window.open(`https://wa.me/919808124401?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[9999] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-300 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons Group (Bottom Right) */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 border border-slate-700 shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1 backdrop-blur-sm"
          >
            <ArrowUp className="w-5 h-5 text-amber-400" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          aria-label={`Call School at ${SCHOOL_INFO.phone}`}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white hover:bg-blue-800 shadow-xl border border-amber-400/40 transition-all transform hover:-translate-y-1"
        >
          <Phone className="w-5 h-5 text-amber-300 animate-pulse" />
          {/* Tooltip */}
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow border border-slate-700 pointer-events-none">
            Call: {SCHOOL_INFO.phone}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 shadow-2xl shadow-emerald-600/40 border border-emerald-400/40 transition-all transform hover:-translate-y-1"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          {/* Tooltip */}
          <span className="absolute right-15 bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow border border-slate-700 pointer-events-none">
            WhatsApp Admission Desk (9808124401)
          </span>
        </button>
      </div>
    </>
  );
};
