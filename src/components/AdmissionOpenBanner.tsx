import React from 'react';
import { Sparkles, ArrowRight, Phone, Download, CheckCircle, Calendar, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionOpenBannerProps {
  onOpenEnquiry: () => void;
}

export const AdmissionOpenBanner: React.FC<AdmissionOpenBannerProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="relative bg-blue-950 text-white overflow-hidden py-10 border-y border-blue-900">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-blue-900/40 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-blue-950/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 rounded-sm text-xs font-bold uppercase tracking-widest border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admission Open 2026-27 (Session 2026–27)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              Invest in Your Child’s Bright Future with <span className="text-amber-400 italic font-serif">R.V. Public School</span>
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Accepting admissions from <strong>Nursery to Grade IX</strong> and <strong>Grade XI (Science, Commerce & Humanities)</strong>. Limited seats allocated on first-come merit basis. Special fee concessions available for meritorious students.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-blue-200">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Zero Admission Registration Queue</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Doorstep GPS Bus Pickup Available</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Personalized Career Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full border border-white/20 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline: {SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
