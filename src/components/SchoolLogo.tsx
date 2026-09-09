import React from 'react';

interface SchoolLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({ size = 'md', variant = 'light' }) => {
  const isDark = variant === 'dark';

  const dimensions = {
    sm: { icon: 'w-10 h-10', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-12 h-12', text: 'text-lg sm:text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14 sm:w-16 sm:h-16', text: 'text-xl sm:text-2xl', sub: 'text-[11px]' },
  }[size];

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Royal Circular Crest Emblem as specified in Professional Polish design */}
      <div className={`relative flex items-center justify-center ${dimensions.icon} rounded-full bg-blue-900 border-2 border-amber-500 shadow-md shrink-0`}>
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-amber-400 font-extrabold text-base sm:text-lg font-display tracking-tighter">
            RV
          </span>
          <span className="text-[7px] font-bold text-amber-200 tracking-widest uppercase -mt-0.5">
            AGRA
          </span>
        </div>
      </div>

      {/* School Name & Tagline */}
      <div className="flex flex-col leading-none">
        <h1 className={`font-extrabold uppercase tracking-tight font-display ${dimensions.text} ${
          isDark ? 'text-blue-900' : 'text-white'
        }`}>
          R.V. Public School
        </h1>
        <p className={`mt-1 font-semibold uppercase tracking-[0.18em] ${dimensions.sub} ${
          isDark ? 'text-slate-500' : 'text-amber-400'
        }`}>
          Nurturing Excellence • Inspiring Values
        </p>
        <span className={`text-[8px] uppercase tracking-wider font-medium mt-0.5 ${
          isDark ? 'text-slate-400' : 'text-blue-200'
        }`}>
          Senior Secondary • CBSE Affiliated • Estd. 2012
        </span>
      </div>
    </div>
  );
};
