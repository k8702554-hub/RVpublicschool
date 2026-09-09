import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Award, Phone, CheckCircle2, ChevronRight, Download, Calendar } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onExploreAcademics: () => void;
  onExploreFacilities: () => void;
}

const HERO_SLIDES = [
  {
    image: '/prospectus/campus_building.jpg',
    headline: 'Nurturing Intellect, Character & Leadership',
    subtitle: "Agra's Premier 8-Acre CBSE Senior Secondary Campus dedicated to academic rigor, futuristic digital classrooms, and holistic student growth.",
    badge: 'Admission Open 2026-27',
    stat: '20,000+ Students Mentored Till Date',
  },
  {
    image: '/prospectus/gallery_robotics.jpg',
    headline: 'Next-Generation Digital Smart Learning',
    subtitle: '75" 4K interactive smart boards, robotics innovation labs, and experiential inquiry-based pedagogy aligned with NEP 2020.',
    badge: 'Modern Infrastructure & STEM',
    stat: '1:25 Focused Teacher-Student Ratio',
  },
  {
    image: '/prospectus/gallery_sports.jpg',
    headline: 'Championing Athletic & Sporting Mastery',
    subtitle: 'Extensive sports stadium, turf cricket nets, basketball courts, and NIS-certified coaches empowering state & national athletes.',
    badge: 'Holistic Sports & Co-Curricular',
    stat: '8-Acre Green Eco-Campus',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
  onExploreAcademics,
  onExploreFacilities,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative min-h-[580px] lg:min-h-[640px] bg-blue-950 overflow-hidden flex flex-col justify-between">
      {/* Background Carousel Images with Subtle Fade */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100 pointer-events-none'
          }`}
        >
          <img
            src={item.image}
            alt="R.V. Public School Campus Agra"
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Professional Polish Blue Gradient & Radial Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/85 to-transparent z-10" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent z-10" />
        </div>
      ))}

      {/* Main Content & Floating News Card */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column Text */}
          <div className="max-w-2xl space-y-5">
            {/* Amber Badge */}
            <div>
              <span className="inline-block bg-amber-500/20 text-amber-400 px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest border border-amber-500/30">
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display">
              Empowering Minds for a <span className="text-amber-400 italic">Brilliant</span> Tomorrow.
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed opacity-90 font-normal">
              {slide.subtitle}
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap gap-4 pt-1 text-xs sm:text-sm text-blue-100 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Nursery to Class XII (CBSE)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Science, Commerce & Humanities
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                8-Acre Green Eco-Campus
              </span>
            </div>

            {/* Professional Polish Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenEnquiry}
                className="bg-white text-blue-900 px-8 py-3.5 rounded-md font-bold hover:bg-slate-100 transition-all shadow-md text-sm sm:text-base flex items-center gap-2"
              >
                <span>Admission Process</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </button>

              <button
                onClick={onExploreFacilities}
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-md font-bold backdrop-blur-sm hover:bg-white/10 transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <span>Campus Facilities</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="text-blue-200 hover:text-amber-300 text-sm font-semibold flex items-center gap-1.5 transition-colors pl-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Helpline: {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Floating Card: Latest Updates & News (as styled in Professional Polish) */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full max-w-sm hidden lg:block shadow-2xl shadow-blue-950/60 shrink-0">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md shadow-amber-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight uppercase tracking-tight font-display">
                  Latest Updates & News
                </h3>
                <span className="text-[10px] text-amber-300 uppercase tracking-wider font-semibold">
                  Official Circulars
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-blue-100">
              <li className="pb-2.5 border-b border-white/10 hover:text-white transition-colors">
                <span className="font-semibold text-amber-400 block mb-0.5">Admission Open 2026–27</span>
                Registration for Session 2026–27 is now open for Nursery to Grade IX & XI.
              </li>
              <li className="pb-2.5 border-b border-white/10 hover:text-white transition-colors">
                <span className="font-semibold text-amber-400 block mb-0.5">Academic Distinction</span>
                100% CBSE Board pass rate recorded with distinction honors.
              </li>
              <li className="hover:text-white transition-colors">
                <span className="font-semibold text-amber-400 block mb-0.5">Smart Classrooms</span>
                75" 4K interactive smart panels installed across all senior wings.
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[11px]">
              <span className="text-blue-200">CBSE Affiliated No. {SCHOOL_INFO.affiliationNumber}</span>
              <button
                onClick={onOpenEnquiry}
                className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
              >
                Apply Online →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators & Quick Bar */}
      <div className="relative z-20 bg-blue-950/90 border-t border-blue-900/80 backdrop-blur-md py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Slide Dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-blue-800 hover:bg-blue-600'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="text-xs text-blue-200 ml-2 font-medium">
                {slide.stat}
              </span>
            </div>

            {/* Quick Strip Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Managed by <strong>{SCHOOL_INFO.managedBy}</strong></span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CBSE Affiliation: <strong>{SCHOOL_INFO.affiliationNumber}</strong></span>
              </div>
              <button
                onClick={onExploreAcademics}
                className="text-amber-400 hover:underline font-bold"
              >
                View Academic Streams →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
