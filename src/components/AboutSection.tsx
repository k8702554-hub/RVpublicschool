import React, { useState } from 'react';
import { Target, Compass, Sparkles, Award, Quote, CheckCircle2, Building, ShieldCheck, HeartHandshake, Users } from 'lucide-react';
import { SCHOOL_INFO, LEADERSHIP } from '../data/schoolData';

type LeaderKey = 'principal' | 'chairman' | 'viceChairman' | 'managingDirector' | 'founder' | 'ramvatiDevi' | 'founders';

export const AboutSection: React.FC = () => {
  const [activeMessageTab, setActiveMessageTab] = useState<LeaderKey>('principal');

  const currentLeader = LEADERSHIP[activeMessageTab] || LEADERSHIP.principal;

  const leaderTabs: { key: LeaderKey; label: string }[] = [
    { key: 'principal', label: "Principal's Desk" },
    { key: 'chairman', label: "Chairman's Desk" },
    { key: 'viceChairman', label: "Vice Chairman" },
    { key: 'managingDirector', label: "Managing Director" },
    { key: 'founder', label: "Late Sh. Narottam Das (Founder)" },
    { key: 'ramvatiDevi', label: "Late Sh. Ramvati Devi" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <Building className="w-3.5 h-3.5 text-amber-600" />
            <span>Legacy of Educational Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            About <span className="text-blue-900">R.V. Public School</span>, Agra
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Established in 2012 under the visionary guidance of <strong>RV Educational Trust</strong>, R.V. Public School stands as a beacon of academic distinction, holistic character cultivation, and modern technological pedagogy in Agra.
          </p>
        </div>

        {/* 2-Column: About School Highlights & Campus Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                An 8-Acre Sanctuary for Intellectual & Moral Flourishing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nestled amidst serene, pollution-free greenery along Gwalior Road, Agra, our expansive 8-acre campus provides the ideal ecosystem for curious minds. We are affiliated with the Central Board of Secondary Education (CBSE), New Delhi, catering to scholars from Playgroup to Class XII.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that education must go beyond rote textbook memorization. By harmonizing CBSE academic rigor with experiential digital learning, competitive examination coaching (JEE, NEET, NDA, CUET), fine arts, and professional athletic training, we nurture well-rounded global leaders anchored in Indian values.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To sculpt intellectually luminous, morally resilient, and globally capable young leaders who serve society with courage and empathy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide an inclusive, stimulating, and child-safe environment fostering critical scientific curiosity, creative arts, and physical prowess.
                </p>
              </div>
            </div>

            {/* Credential checklist */}
            <div className="space-y-2 pt-2">
              {[
                `Affiliated with CBSE New Delhi (Affiliation No. ${SCHOOL_INFO.affiliationNumber})`,
                `Managed by the prestigious ${SCHOOL_INFO.managedBy}`,
                'Comprehensive Science, Commerce & Humanities streams',
                'Strict 1:25 teacher-student ratio for focused mentoring',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/prospectus/campus_building.jpg"
                  alt="R.V. Public School Agra Campus"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Green Oasis on Gwalior Road
                  </span>
                  <h4 className="text-lg font-bold">8-Acre Sprawling Academic & Sports Campus</h4>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-amber-500/40 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
                    14+
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Years of Trust</h5>
                    <p className="text-xs text-slate-400">Guiding generations of Agra students since 2012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Messages: Principal, Chairman, Vice Chairman, MD & Founders Tabs */}
        <div className="pt-10">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
            {/* Tab switchers */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">
                  Visionary Leadership & Governance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  Words of Inspiration & Guidance
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl self-start lg:self-auto">
                {leaderTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveMessageTab(tab.key)}
                    className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                      activeMessageTab === tab.key
                        ? 'bg-blue-900 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Leader Profile & Message */}
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Leader Photo & Profile */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-amber-400/50 bg-slate-100">
                    <img
                      src={currentLeader.image}
                      alt={currentLeader.name}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-900 text-amber-400 p-2 rounded-xl shadow border border-amber-400/30">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 font-display">
                    {currentLeader.name}
                  </h4>
                  <p className="text-sm font-bold text-amber-600 uppercase tracking-wide">
                    {currentLeader.designation}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {currentLeader.qualification}
                  </p>
                  {currentLeader.motto && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[10px] font-bold uppercase tracking-wider">
                      Motto: {currentLeader.motto}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-8 space-y-4">
                <blockquote className="text-base sm:text-lg font-medium text-slate-800 italic border-l-4 border-amber-500 pl-4 bg-amber-50/50 py-3 rounded-r-xl">
                  "{currentLeader.quote}"
                </blockquote>

                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentLeader.message.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  R.V. Public School, Agra • RV Educational Trust
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
