import React, { useState, useEffect } from 'react';
import { Trophy, Award, Sparkles, ChevronLeft, ChevronRight, GraduationCap, Star, BookOpen } from 'lucide-react';
import { TOPPERS_DATA } from '../data/schoolData';
import { TopperStudent } from '../types';

export const ToppersSection: React.FC = () => {
  const [mobileTab, setMobileTab] = useState<'classXII' | 'classX'>('classXII');
  const [mobileSlideIndex, setMobileSlideIndex] = useState<number>(0);

  const activeMobileList: TopperStudent[] = TOPPERS_DATA[mobileTab];

  // Auto-advance mobile slideshow every 4 seconds if untouched
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileSlideIndex((prev) => (prev + 1) % activeMobileList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeMobileList.length]);

  const nextSlide = () => {
    setMobileSlideIndex((prev) => (prev + 1) % activeMobileList.length);
  };

  const prevSlide = () => {
    setMobileSlideIndex((prev) => (prev - 1 + activeMobileList.length) % activeMobileList.length);
  };

  const renderTopperCard = (student: TopperStudent, isMobileSlide: boolean = false) => (
    <div
      key={student.id}
      className={`group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isMobileSlide ? 'w-full' : 'h-full'
      }`}
    >
      {/* Top Banner & Photo */}
      <div className="relative pt-6 px-6 pb-4 bg-gradient-to-b from-blue-50/60 to-white text-center">
        {/* Class / Year Pill */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-900 text-white shadow-xs">
            <GraduationCap className="w-3 h-3" />
            {student.classGrade}
          </span>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-300/60">
            {student.year}
          </span>
        </div>

        {/* Student Avatar / Photo */}
        <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-amber-300 to-blue-900 shadow-md group-hover:scale-105 transition-transform duration-300">
          <img
            src={student.avatarUrl}
            alt={student.name}
            className="w-full h-full object-cover rounded-full bg-slate-100"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
            }}
          />
          {/* Gold Laurel Icon Badge */}
          <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-md border-2 border-white">
            <Trophy className="w-4 h-4" />
          </div>
        </div>

        {/* Score Badge */}
        <div className="mt-4 inline-block">
          <div className="inline-flex items-baseline gap-1 px-4 py-1 rounded-xl bg-blue-950 text-white shadow-md border border-amber-400/40">
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
              {student.percentage}
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              Aggregate
            </span>
          </div>
        </div>
      </div>

      {/* Info & Achievements */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white border-t border-slate-100 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-display text-center">
            {student.name}
          </h3>
          {student.stream && (
            <p className="text-xs font-semibold text-blue-700 text-center mt-0.5">
              {student.stream}
            </p>
          )}

          <div className="mt-3 inline-flex w-full justify-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              {student.rankTitle}
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <p className="text-xs text-slate-600 leading-relaxed text-center font-medium bg-slate-50 p-2 rounded-lg border border-slate-100">
            {student.keyHighlight}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="toppers" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-500/15 text-amber-800 text-xs font-bold uppercase tracking-widest border border-amber-500/25">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Laurels & Board Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-display tracking-tight">
            Our Hall of Fame: <span className="text-blue-800">CBSE Board Toppers</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Heartiest congratulations to our brilliant scholars who illuminated the name of R.V. Public School with stellar 100% first-division scores in the CBSE Board Examinations.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href="#subject-toppers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 bg-blue-50 hover:bg-amber-50 px-4 py-2 rounded-full border border-blue-200 transition-colors shadow-2xs"
            >
              <span>View Subject-Wise Highest Achievers (100/100)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW: 2 ROWS of 4 CARDS (md and up)                  */}
        {/* Row 1: 4 from Class 12th                                    */}
        {/* Row 2: 4 from Class 10th                                    */}
        {/* ============================================================ */}
        <div className="hidden md:block space-y-14">
          {/* Row 1: Class XII Toppers */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-amber-400/40 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Class XII Senior Secondary Board Toppers
                  </h3>
                  <p className="text-xs text-slate-500">
                    All India Senior School Certificate Examination (AISSCE)
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Row 1 • Class 12th Achievers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TOPPERS_DATA.classXII.map((student) => renderTopperCard(student))}
            </div>
          </div>

          {/* Row 2: Class X Toppers */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-blue-800/30 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Class X Secondary Board Toppers
                  </h3>
                  <p className="text-xs text-slate-500">
                    All India Secondary School Examination (AISSE)
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Row 2 • Class 10th Achievers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TOPPERS_DATA.classX.map((student) => renderTopperCard(student))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW: INTERACTIVE SLIDESHOW CAROUSEL (< md)           */}
        {/* ============================================================ */}
        <div className="block md:hidden space-y-6">
          {/* Mobile Grade Switcher */}
          <div className="flex rounded-xl bg-slate-200/80 p-1 max-w-xs mx-auto">
            <button
              onClick={() => {
                setMobileTab('classXII');
                setMobileSlideIndex(0);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mobileTab === 'classXII'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              Class XII Toppers
            </button>
            <button
              onClick={() => {
                setMobileTab('classX');
                setMobileSlideIndex(0);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mobileTab === 'classX'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              Class X Toppers
            </button>
          </div>

          {/* Slideshow Card Container */}
          <div className="relative px-2">
            <div className="w-full">
              {renderTopperCard(activeMobileList[mobileSlideIndex], true)}
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Topper Slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white/95 shadow-lg border border-slate-200 flex items-center justify-center text-slate-800 hover:text-blue-900 active:scale-95 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Topper Slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white/95 shadow-lg border border-slate-200 flex items-center justify-center text-slate-800 hover:text-blue-900 active:scale-95 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slideshow Dot Indicators */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {activeMobileList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  mobileSlideIndex === idx
                    ? 'w-7 h-2 bg-blue-900'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <p className="text-[11px] text-slate-400 text-center">
            Slide {mobileSlideIndex + 1} of {activeMobileList.length} • Swipe or use arrows
          </p>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800/50">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-amber-400">
              100% Board Pass Record in CBSE Examinations
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Equipped with in-house remedial classes, doubt counters, and regular testing, our students excel with zero dependency on external private coaching.
            </p>
          </div>
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4" />
            Join Our Scholars
          </a>
        </div>
      </div>
    </section>
  );
};
