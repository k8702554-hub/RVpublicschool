import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, BookOpen, GraduationCap, Building2, Shield, Image, HelpCircle, Mail, MapPin } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'about', label: 'About School', icon: null },
    { id: 'academics', label: 'Academics', icon: <GraduationCap className="w-4 h-4 inline mr-1" /> },
    { id: 'toppers', label: 'Toppers', icon: null },
    { id: 'activities', label: 'School Activities', icon: null },
    { id: 'facilities', label: 'Facilities', icon: <Building2 className="w-4 h-4 inline mr-1" /> },
    { id: 'admissions', label: 'Admissions', icon: <BookOpen className="w-4 h-4 inline mr-1" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-4 h-4 inline mr-1" /> },
    { id: 'contact', label: 'Contact', icon: null },
  ];

  const handleNavClick = (id: ActiveTab) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    // Smooth scroll to top or corresponding element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 bg-white shadow-md border-b border-slate-100 ${
      isScrolled ? 'py-2.5 shadow-slate-200/80' : 'py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <SchoolLogo size={isScrolled ? 'sm' : 'md'} variant="dark" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1 text-sm font-medium transition-colors relative group ${
                    isActive
                      ? 'text-blue-700 font-bold border-b-2 border-blue-700'
                      : 'text-slate-700 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                  {item.id === 'admissions' && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500 text-white rounded-full">
                      Open
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-200 hover:shadow-amber-300 transition-all text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>Admission Open 2026-27</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-full shadow-sm"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between p-2.5 text-sm font-semibold rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'admissions' && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-500 text-white rounded-full">
                    Open
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>Garhi Thakur Das, Rohta, Gwalior Road, Agra</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-full border border-slate-300"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>Call Helpline</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-full shadow-md shadow-amber-200"
              >
                <span>Admission Open 2026-27</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
