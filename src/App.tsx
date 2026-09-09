import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatCounter } from './components/StatCounter';
import { AdmissionOpenBanner } from './components/AdmissionOpenBanner';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionSection } from './components/AdmissionSection';
import { ToppersSection } from './components/ToppersSection';
import { SubjectToppersSection } from './components/SubjectToppersSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { AdmissionModal } from './components/AdmissionModal';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Synchronize active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections: { id: ActiveTab; offset: number }[] = [
        { id: 'contact', offset: document.getElementById('contact')?.offsetTop || 0 },
        { id: 'admissions', offset: document.getElementById('admissions')?.offsetTop || 0 },
        { id: 'gallery', offset: document.getElementById('gallery')?.offsetTop || 0 },
        { id: 'activities', offset: document.getElementById('activities')?.offsetTop || 0 },
        { id: 'facilities', offset: document.getElementById('facilities')?.offsetTop || 0 },
        { id: 'toppers', offset: document.getElementById('toppers')?.offsetTop || 0 },
        { id: 'academics', offset: document.getElementById('academics')?.offsetTop || 0 },
        { id: 'about', offset: document.getElementById('about')?.offsetTop || 0 },
        { id: 'home', offset: 0 },
      ];

      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        if (scrollPos >= section.offset - 100) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Announcement Bar */}
      <TopBar onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      {/* Main Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            scrollToSection(tab);
          }
        }}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home">
          <HeroSection
            onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
            onExploreAcademics={() => scrollToSection('academics')}
            onExploreFacilities={() => scrollToSection('facilities')}
          />
        </section>

        {/* Animated Key Statistics */}
        <StatCounter />

        {/* Admission Open CTA Banner */}
        <div className="mt-12 sm:mt-16">
          <AdmissionOpenBanner onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />
        </div>

        {/* Why Choose Us: 8 Features */}
        <WhyChooseUsSection />

        {/* About School, Campus & Leadership Messages */}
        <AboutSection />

        {/* Academics: Nursery to Class XII */}
        <AcademicsSection onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

        {/* Board Examination Toppers (Class XII & Class X) */}
        <ToppersSection />

        {/* Subject-Wise Century Scorers & High Achievers */}
        <SubjectToppersSection />

        {/* Facilities: All 13 Categories */}
        <FacilitiesSection />

        {/* School Activities & Celebrations (Filterable by Category) */}
        <ActivitiesSection />

        {/* Campus Life Gallery with Lightbox */}
        <GallerySection />

        {/* Admissions Roadmap, Eligibility & Enquiry Form */}
        <AdmissionSection />

        {/* Community Testimonials & Accolades */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact Page: Google Map, Address, Contact 9808124401, Form */}
        <ContactSection />
      </main>

      {/* Global Institutional Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            scrollToSection(tab);
          }
        }}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
      />

      {/* Floating Action Widgets (Scroll Progress, WhatsApp, Call, Scroll to Top) */}
      <FloatingWidgets />

      {/* Quick Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
