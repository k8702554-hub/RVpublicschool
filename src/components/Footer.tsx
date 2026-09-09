import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenEnquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Golden Glow Accent in Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: School Identity & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <SchoolLogo size="md" variant="light" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              R.V. Public School is a leading CBSE-affiliated senior secondary co-educational school situated on an 8-acre lush green campus on Gwalior Road, Agra. Managed by <strong>{SCHOOL_INFO.managedBy}</strong>.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Award className="w-4 h-4 shrink-0" />
                <span>CBSE Affiliation: {SCHOOL_INFO.affiliationNumber}</span>
              </div>
              <p className="text-slate-400">School Code: {SCHOOL_INFO.schoolCode} • Estd. 2012</p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  About School
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Academics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Campus Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admissions')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Admission Open 2026–27
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              School Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {SCHOOL_INFO.address.street}, {SCHOOL_INFO.address.area}, {SCHOOL_INFO.address.city}, {SCHOOL_INFO.address.state} – {SCHOOL_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="text-white hover:text-amber-400 font-bold transition-colors"
                >
                  {SCHOOL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors break-all"
                >
                  {SCHOOL_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>School: {SCHOOL_INFO.schoolHours}</p>
                  <p>Office: {SCHOOL_INFO.officeHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Admissions CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Stay Informed
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to the R.V. Public School newsletter for latest event bulletins, circulars, and admission notifications.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to school updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-slate-700 bg-slate-900 focus-within:ring-2 focus-within:ring-amber-500">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email address..."
                    className="w-full px-3 py-2 text-xs text-white bg-transparent focus:outline-none placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 flex items-center justify-center font-bold text-xs"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-full shadow-lg shadow-amber-500/20 transition-all uppercase tracking-wider"
              >
                Admission Open 2026–27
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Circles & Verification */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} R.V. Public School, Agra. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Managed by {SCHOOL_INFO.managedBy} • Affiliated to CBSE New Delhi (Affiliation No. {SCHOOL_INFO.affiliationNumber}, School Code: {SCHOOL_INFO.schoolCode})
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <span className="hidden md:inline">📍 Garhi Thakur Das, Rohta, Gwalior Road, Agra</span>
            <span className="text-white font-semibold">📞 Helpline: {SCHOOL_INFO.phone}, {SCHOOL_INFO.altPhone}</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 text-white cursor-pointer transition-colors text-[10px] font-bold" title="Facebook">
                f
              </div>
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 text-white cursor-pointer transition-colors text-[10px] font-bold" title="Twitter / X">
                x
              </div>
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 text-white cursor-pointer transition-colors text-[10px] font-bold" title="Instagram">
                i
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
