import React from 'react';
import {
  BookMarked,
  GraduationCap,
  MonitorPlay,
  HeartHandshake,
  Compass,
  Trophy,
  ShieldCheck,
  Sparkles,
  Award,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/schoolData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookMarked':
        return <BookMarked className="w-6 h-6 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-500" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-500" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      default:
        return <Award className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/15 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/25">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>The R.V. Public School Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-display tracking-tight">
            Why Discerning Parents Choose <span className="text-blue-800">R.V. Public School</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We deliver the ideal balance between national CBSE educational benchmark standards and affectionate individualized mentoring in an inspiring 8-acre environment.
          </p>
        </div>

        {/* 8 Distinct Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-amber-50 flex items-center justify-center text-blue-900 group-hover:text-amber-600 border border-blue-100/60 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-blue-800 rounded-full group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors border border-blue-100/50">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-900 transition-colors font-display">
                  {item.title}
                </h3>

                {item.image && (
                  <div className="relative h-36 rounded-xl overflow-hidden my-2 border border-slate-200/80 shadow-inner group/img">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-75" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white px-2 py-0.5 rounded bg-blue-950/80 backdrop-blur-xs border border-white/20">
                      Child Development Model
                    </span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>CBSE Benchmark</span>
                <span className="text-amber-500 font-bold">★ Excellence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
