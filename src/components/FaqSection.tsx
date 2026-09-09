import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { FAQS, SCHOOL_INFO } from '../data/schoolData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'admission', label: 'Admissions' },
    { id: 'academics', label: 'Academics & CBSE' },
    { id: 'transport', label: 'Transport & Safety' },
    { id: 'facilities', label: 'Campus & Facilities' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Parent Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Frequently Asked <span className="text-blue-900">Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Find prompt answers to common queries regarding admissions, CBSE curriculum, bus transport, and school facilities.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-500'} shrink-0`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-base">
            Still Have Questions?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            Our admission officers are happy to assist you over the phone or in person.
          </p>
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call School Helpline: {SCHOOL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
