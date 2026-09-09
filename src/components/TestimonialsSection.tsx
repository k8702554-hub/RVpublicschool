import React from 'react';
import { Star, Quote, Heart, CheckCircle, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Voices of Trust: <span className="text-blue-900">Parents & Alumni</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Read authentic experiences from parents and graduates whose educational journey began at R.V. Public School, Agra.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between space-y-6"
            >
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                  <Quote className="w-4 h-4" />
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                "{item.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-900 font-semibold">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 shadow-xl border border-amber-500/30 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
              4.8 / 5.0
            </div>
            <div className="text-xs text-slate-300">Justdial & Google Reviews</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-800" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
              100%
            </div>
            <div className="text-xs text-slate-300">Parent Satisfaction Rate</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-800" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
              14+ Years
            </div>
            <div className="text-xs text-slate-300">Unblemished Safety Record</div>
          </div>
        </div>
      </div>
    </section>
  );
};
