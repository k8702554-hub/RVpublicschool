import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Share2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hello R.V. Public School Agra, I have an inquiry regarding: ${formData.subject || 'Admissions & Campus'}`);
    window.open(`https://wa.me/919808124401?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Campus Location & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Connect with <span className="text-blue-900">R.V. Public School</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We invite prospective parents and visitors to visit our 8-acre campus or contact our administration desk on Gwalior Road, Agra.
          </p>
        </div>

        {/* 4 Info Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Campus Address</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {SCHOOL_INFO.address.street}, {SCHOOL_INFO.address.area}, {SCHOOL_INFO.address.city}, {SCHOOL_INFO.address.state} – {SCHOOL_INFO.address.pincode}
              </p>
            </div>
            <span className="text-[11px] text-amber-700 font-semibold">
              {SCHOOL_INFO.address.landmark}
            </span>
          </div>

          {/* Contact Helpline */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Helpline & Enquiries</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Direct Line: <strong className="text-slate-900">{SCHOOL_INFO.phone}</strong>
              </p>
              <p className="text-xs text-slate-500">
                Available during operational school hours.
              </p>
            </div>
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600"
            >
              <span>Call Now</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Email */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-900" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Email Desks</h4>
              <p className="text-xs sm:text-sm text-slate-600 break-all">
                {SCHOOL_INFO.email}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 break-all">
                {SCHOOL_INFO.admissionEmail}
              </p>
            </div>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600"
            >
              <span>Send Email</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Working Hours */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Clock className="w-5 h-5 text-emerald-700" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Visiting Hours</h4>
              <p className="text-xs text-slate-600">
                <strong>School Hours:</strong><br />
                {SCHOOL_INFO.schoolHours}
              </p>
              <p className="text-xs text-slate-600">
                <strong>Administrative Office:</strong><br />
                {SCHOOL_INFO.officeHours}
              </p>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">Sunday Closed</span>
          </div>
        </div>

        {/* 2-Column: Google Maps & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Map & Travel Guide */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative min-h-[380px] flex-1 flex flex-col">
              {/* Google Map iframe centered around Rohta, Gwalior Road, Agra */}
              <iframe
                title="R.V. Public School Agra Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.886866127113!2d77.9863!3d27.1189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974770000000000%3A0x0!2sGarhi+Thakur+Das%2C+Rohta%2C+Gwalior+Road%2C+Agra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                className="w-full h-full flex-1 border-0 min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-sm text-slate-900">R.V. Public School, Agra</h5>
                  <p className="text-xs text-slate-500">Garhi Thakur Das, Rohta, Gwalior Road</p>
                </div>
                <a
                  href="https://maps.google.com/?q=R+V+Public+School+Garhi+Thakur+Das+Gwalior+Road+Agra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Media Links & Connect Bar */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Official Social Channels
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/rvpublicschoolagra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-200 transition-colors shadow-2xs text-xs font-bold"
                >
                  Facebook
                </a>
                <a
                  href="https://www.justdial.com/Agra/R-V-Public-School-Near-Garhi-Thakur-Das-Gwalior-Road/0562PX562-X562-250328125729-N2W2_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-amber-500 hover:text-slate-950 text-slate-700 border border-slate-200 transition-colors shadow-2xs text-xs font-bold"
                >
                  Justdial Verified
                </a>
                <button
                  onClick={handleWhatsAppDirect}
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-2xs text-xs font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Direct Communication
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Have questions regarding syllabus, admissions, fee concessions, or bus routes? Write to us directly.
              </p>
            </div>

            {submitted ? (
              <div className="my-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Thank you, <strong>{formData.name}</strong>. Our administrative coordinator will reply to your inquiry within 24 hours. For immediate attention, please call <strong>{SCHOOL_INFO.phone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' });
                  }}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 my-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sunil Verma"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Admission Enquiry">Admission Open (2026–27)</option>
                      <option value="Fee Structure & Concessions">Fee Structure & Concessions</option>
                      <option value="Transport Routes">School Bus Transport Routes</option>
                      <option value="Academics & Streams">Senior Secondary Streams (XI/XII)</option>
                      <option value="General Campus Visit">Book Campus Visit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Your Message / Question <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow transition-all cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Send Message to School Office</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5 justify-center">
              <span>You can also reach our desk directly at</span>
              <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-blue-900 hover:underline">
                {SCHOOL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
