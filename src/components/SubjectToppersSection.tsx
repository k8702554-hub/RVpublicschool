import React, { useState } from 'react';
import { Award, BookOpen, Star, Sparkles, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { SUBJECT_TOPPERS_DATA } from '../data/schoolData';
import { SubjectTopper } from '../types';

export const SubjectToppersSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Subjects' },
    { id: 'science', label: 'Science & Math' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'humanities', label: 'Humanities & Social Sc.' },
    { id: 'stem', label: 'Computer Sc. & IT' },
    { id: 'languages', label: 'Languages' },
  ];

  const filteredToppers =
    activeFilter === 'all'
      ? SUBJECT_TOPPERS_DATA
      : SUBJECT_TOPPERS_DATA.filter((item) => item.subjectCategory === activeFilter);

  return (
    <section id="subject-toppers" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Distinction • 100/100 Century Scorers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-display tracking-tight">
            Subject-Wise <span className="text-blue-800">Highest Achievers</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Celebrating our scholars who achieved perfect 100/100 and near-century 99/100 marks in individual CBSE board subjects through conceptual rigor and faculty mentorship.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs ${
                  isActive
                    ? 'bg-blue-950 text-white shadow-md scale-102 border-blue-950'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:text-blue-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredToppers.map((topper) => {
            const isCentury = topper.marks.includes('100');
            return (
              <div
                key={topper.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Card Top Strip */}
                <div className="p-5 pb-3 bg-gradient-to-b from-blue-50/50 to-transparent">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                      {topper.classGrade}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {topper.year}
                    </span>
                  </div>

                  {/* Subject Name Tag */}
                  <div className="text-center">
                    <span className="inline-block font-extrabold text-sm sm:text-base text-slate-900 font-display group-hover:text-blue-900 transition-colors">
                      {topper.subject}
                    </span>
                  </div>
                </div>

                {/* Avatar and Marks Callout */}
                <div className="px-5 py-3 flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="w-22 h-22 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-amber-300 to-blue-900 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={topper.photoUrl}
                        alt={topper.studentName}
                        className="w-full h-full object-cover rounded-full bg-slate-100"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                        }}
                      />
                    </div>
                    {/* Centurion Trophy Badge */}
                    <div className={`absolute -bottom-1 -right-1 p-1.5 rounded-full shadow-md border-2 border-white ${
                      isCentury ? 'bg-amber-500 text-slate-950' : 'bg-blue-900 text-white'
                    }`}>
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>

                  {/* Marks Pill */}
                  <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-xl shadow-xs border ${
                    isCentury
                      ? 'bg-amber-50 text-amber-950 border-amber-300 font-black'
                      : 'bg-blue-950 text-white border-blue-900 font-bold'
                  }`}>
                    <span className="text-lg sm:text-xl font-black font-display tracking-tight text-amber-600">
                      {topper.marks}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">
                      {isCentury ? 'Perfect 100' : 'Distinction'}
                    </span>
                  </div>

                  {/* Student Name */}
                  <h4 className="mt-3 text-base font-bold text-slate-900 font-display group-hover:text-blue-900 transition-colors">
                    {topper.studentName}
                  </h4>
                  {topper.stream && (
                    <p className="text-xs text-blue-700 font-semibold mt-0.5">
                      {topper.stream}
                    </p>
                  )}
                </div>

                {/* Achievement Highlight */}
                {topper.achievementText && (
                  <div className="p-4 pt-2 border-t border-slate-100 bg-slate-50/60">
                    <p className="text-xs text-slate-600 leading-relaxed text-center font-medium">
                      {topper.achievementText}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Achievement Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-900">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              100
            </div>
            <div>
              <h5 className="font-bold text-sm sm:text-base text-white">
                Multiple Perfect Century Scores
              </h5>
              <p className="text-xs text-slate-300">
                In Mathematics, Computer Science, Science & Political Science
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-800 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-sm sm:text-base text-white">
                Zero Private Coaching Reliance
              </h5>
              <p className="text-xs text-slate-300">
                School-guided doubt counters, mock papers & NCERT mastery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-800 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-sm sm:text-base text-white">
                Individual Subject Mentors
              </h5>
              <p className="text-xs text-slate-300">
                Expert senior teachers dedicated to student board excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
