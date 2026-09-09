import React, { useState } from 'react';
import { Sparkles, Calendar, Tag, Compass, Award, Trees, Dumbbell, Palette, X, ArrowRight } from 'lucide-react';
import { SCHOOL_ACTIVITIES } from '../data/schoolData';
import { SchoolActivity } from '../types';

export const ActivitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<SchoolActivity | null>(null);

  const categories = [
    { id: 'all', label: 'All Activities (11)', icon: Compass },
    { id: 'eco_environment', label: 'Eco & Environment', icon: Trees },
    { id: 'academic_stem', label: 'Academic & STEM', icon: Award },
    { id: 'sports_athletics', label: 'Sports & Athletics', icon: Dumbbell },
    { id: 'culture_celebrations', label: 'Culture & Wellness', icon: Palette },
    { id: 'excursions_tours', label: 'Excursions & Tours', icon: Compass },
  ];

  const filteredActivities =
    activeCategory === 'all'
      ? SCHOOL_ACTIVITIES
      : SCHOOL_ACTIVITIES.filter((act) => act.category === activeCategory);

  return (
    <section id="activities" className="py-16 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-900/10 text-blue-900 text-xs font-bold uppercase tracking-widest border border-blue-900/20">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Co-Curricular & Student Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-display tracking-tight">
            School Activities & <span className="text-amber-600">Celebrations</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Nurturing well-rounded personalities through vibrant cultural celebrations, environmental initiatives, sports competitions, and inspiring educational expeditions.
          </p>
        </div>

        {/* Category Classification Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs ${
                  isActive
                    ? 'bg-blue-950 text-white shadow-md border-blue-950 scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:text-blue-900'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <div
              key={activity.id}
              onClick={() => setSelectedActivity(activity)}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-950/85 text-white backdrop-blur-xs border border-white/20 shadow-xs">
                    <Tag className="w-3 h-3 text-amber-400" />
                    {activity.categoryLabel}
                  </span>
                  <span className="text-[10px] font-bold text-amber-950 bg-amber-400 px-2 py-0.5 rounded shadow-xs">
                    #{index + 1}
                  </span>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/95 px-2.5 py-1 rounded bg-black/50 backdrop-blur-xs">
                    {activity.highlightBadge}
                  </span>
                  {activity.frequencyOrDate && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-200">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {activity.frequencyOrDate}
                    </span>
                  )}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-display">
                    {activity.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-amber-800 line-clamp-2">
                    {activity.caption}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 group-hover:underline inline-flex items-center gap-1">
                    View Activity Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">RVPS Activity</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full activity view */}
        {selectedActivity && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
            onClick={() => setSelectedActivity(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 w-full bg-slate-900">
                <img
                  src={selectedActivity.imageUrl}
                  alt={selectedActivity.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow-md">
                    {selectedActivity.categoryLabel}
                  </span>
                  {selectedActivity.frequencyOrDate && (
                    <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full">
                      {selectedActivity.frequencyOrDate}
                    </span>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-blue-950 font-display">
                  {selectedActivity.title}
                </h3>
                <p className="text-sm font-semibold text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200/80">
                  {selectedActivity.caption}
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedActivity.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    R.V. Public School, Rohta, Gwalior Road, Agra
                  </span>
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
