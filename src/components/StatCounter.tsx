import React from 'react';
import { Award, Users, GraduationCap, Trees, BookOpenCheck, ShieldCheck } from 'lucide-react';
import { SCHOOL_STATS } from '../data/schoolData';

export const StatCounter: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-900 group-hover:text-amber-600 transition-colors" />;
    }
  };

  return (
    <section className="relative z-30 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {SCHOOL_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center group ${
                idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-amber-50 flex items-center justify-center mb-3 transition-colors border border-blue-100/80 shadow-sm">
                {getIcon(stat.iconName)}
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight font-display">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1 font-display">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
