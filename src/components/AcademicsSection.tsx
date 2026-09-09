import React, { useState } from 'react';
import { GraduationCap, BookOpen, Sparkles, CheckCircle2, ChevronRight, Award, Compass, ArrowRight } from 'lucide-react';
import { ACADEMIC_LEVELS } from '../data/schoolData';
import { AcademicLevel } from '../types';

interface AcademicsSectionProps {
  onOpenEnquiry: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>(ACADEMIC_LEVELS[0].id);

  const activeLevel: AcademicLevel = ACADEMIC_LEVELS.find((lvl) => lvl.id === selectedLevelId) || ACADEMIC_LEVELS[0];

  return (
    <section id="academics" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            <span>Curriculum & Scholastic Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Comprehensive Academics at <span className="text-blue-900">R.V. Public School</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From playful discovery in early childhood to high-stakes board excellence and competitive entrance prep in Senior Secondary, our progressive pedagogical pathway nurtures critical intellect and curiosity.
          </p>
        </div>

        {/* Level Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {ACADEMIC_LEVELS.map((level) => {
            const isSelected = level.id === selectedLevelId;
            return (
              <button
                key={level.id}
                onClick={() => setSelectedLevelId(level.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-950/20 ring-2 ring-amber-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <span>{level.title.split('(')[0].trim()}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-600'
                }`}>
                  {level.gradeRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Active Level Display Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge & Age */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-blue-900 text-amber-300 text-xs font-bold rounded-lg uppercase tracking-wide">
                  {activeLevel.gradeRange}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-lg">
                  Target Age: {activeLevel.ageGroup}
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg">
                  CBSE Aligned & NEP 2020
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {activeLevel.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {activeLevel.description}
                </p>
              </div>

              {/* Key Focus Pillars */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Focus Areas & Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeLevel.focusAreas.map((focus, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs"
                    >
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Classroom Pedagogy & Infrastructure
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLevel.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <span>Apply for {activeLevel.gradeRange}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={activeLevel.image}
                  alt={activeLevel.title}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {activeLevel.gradeRange} Learning Environment
                  </span>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    {activeLevel.curriculumHighlights.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
