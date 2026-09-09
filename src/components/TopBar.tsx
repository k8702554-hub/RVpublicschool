import React from 'react';
import { Phone, Mail, Clock, MapPin, Sparkles, Download } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TopBarProps {
  onOpenEnquiry: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-blue-900 text-white text-xs border-b border-blue-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-4">
          {/* Left: CBSE affiliation badge & Location */}
          <div className="flex items-center gap-5 text-[11px]">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Affiliation No: {SCHOOL_INFO.affiliationNumber} | CBSE New Delhi</span>
            </span>

            <span className="text-blue-300/60">•</span>

            <span className="hidden lg:inline-flex items-center gap-1.5 text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Gwalior Road, Rohta, Agra</span>
            </span>

            <span className="text-blue-300/60 hidden xl:inline">•</span>

            <span className="hidden xl:inline-flex items-center gap-1.5 text-blue-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon – Sat: 7:30 AM – 2:30 PM</span>
            </span>
          </div>

          {/* Right: Contact details & Quick Actions */}
          <div className="flex items-center gap-5 text-[11px]">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold transition-colors"
              title="Call School Office"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Ph: +91 {SCHOOL_INFO.phone}</span>
            </a>

            <div className="hidden lg:flex items-center gap-3 uppercase tracking-wider text-[10px] text-blue-200">
              <span className="hover:text-amber-300 cursor-pointer transition-colors">Alumni</span>
              <span>•</span>
              <span className="hover:text-amber-300 cursor-pointer transition-colors">Parent Portal</span>
              <span>•</span>
              <span className="hover:text-amber-300 cursor-pointer transition-colors">Careers</span>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white font-bold px-3 py-1 rounded-full transition-all shadow-sm shadow-amber-500/30 text-[10px] uppercase tracking-wider"
            >
              <Download className="w-3 h-3" />
              <span>Admission Open 2026-27</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
