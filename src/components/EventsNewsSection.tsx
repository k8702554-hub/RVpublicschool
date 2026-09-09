import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Bell, Award, Sparkles, ChevronRight } from 'lucide-react';
import { UPCOMING_EVENTS, LATEST_NEWS } from '../data/schoolData';

interface EventsNewsSectionProps {
  onOpenEnquiry: () => void;
}

export const EventsNewsSection: React.FC<EventsNewsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="events" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <Bell className="w-3.5 h-3.5 text-amber-600" />
            <span>Notices, Happenings & Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Latest News & <span className="text-blue-900">Upcoming Events</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Stay updated with academic bulletins, CBSE board notifications, sporting meets, and cultural galas at R.V. Public School.
          </p>
        </div>

        {/* 2-Column: Events Calendar vs Latest Circulars/News */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Upcoming Events */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span>Upcoming School Events</span>
              </h3>
              <span className="text-xs font-bold text-blue-900 hover:underline cursor-pointer">
                Academic Calendar 2025–26
              </span>
            </div>

            <div className="space-y-4">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start"
                >
                  {/* Calendar Date Block */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white flex flex-col items-center justify-center shrink-0 border border-amber-500/30 shadow-md">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-400">
                      {event.month.slice(0, 3)}
                    </span>
                    <span className="text-xl sm:text-2xl font-black font-display leading-tight">
                      {event.day}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 text-[11px] font-bold">
                        {event.category}
                      </span>
                      {event.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                          {event.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                      {event.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{event.time}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{event.venue}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Latest Circulars & News Board */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-600" />
                <span>Notice Board & Circulars</span>
              </h3>
              <span className="text-xs font-bold text-amber-600">Official</span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md divide-y divide-slate-100 space-y-4">
              {LATEST_NEWS.map((news, idx) => (
                <div key={news.id} className={`space-y-2 ${idx > 0 ? 'pt-4' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {news.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {news.date}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-900 transition-colors">
                    {news.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {news.summary}
                  </p>

                  {news.linkText && (
                    <button
                      onClick={onOpenEnquiry}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 pt-1"
                    >
                      <span>{news.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}

              {/* Download Brochure Banner */}
              <div className="pt-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>School Prospectus</span>
                  </div>
                  <h5 className="font-bold text-sm text-white">
                    Download Official Information Brochure (2025–26)
                  </h5>
                  <p className="text-xs text-slate-300">
                    Get detailed information about curriculum, faculty profiles, and fee schedules.
                  </p>
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow"
                  >
                    Request Brochure via Email / WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
