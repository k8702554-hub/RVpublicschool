import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  Download,
  AlertCircle,
  Clock,
  Sparkles,
  Send,
  UserCheck,
} from 'lucide-react';
import { SCHOOL_INFO, ADMISSION_STEPS } from '../data/schoolData';
import { AdmissionEnquiryData } from '../types';

export const AdmissionSection: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionEnquiryData>({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    gradeApplying: 'Nursery',
    gender: 'Male',
    dateOfBirth: '',
    previousSchool: '',
    residentialAddress: '',
    transportRequired: true,
    additionalNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instant local submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello R.V. Public School Agra, I would like to enquire about admission for my child ${formData.studentName || ''} for Grade ${formData.gradeApplying}. Please provide details on fees and prospectus.`
    );
    window.open(`https://wa.me/919808124401?text=${message}`, '_blank');
  };

  return (
    <section id="admissions" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Admission Open 2026-27 (Session 2026–2027)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Seamless Admission Process at <span className="text-blue-900">R.V. Public School</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We welcome young learners from across Agra into our nurturing academic family. Follow our transparent 4-step admission roadmap or submit the online enquiry below.
          </p>
        </div>

        {/* 4-Step Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMISSION_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="text-4xl font-extrabold text-amber-500/30 group-hover:text-amber-500/60 transition-colors font-display mb-2">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 absolute bottom-0 left-0" />
            </div>
          ))}
        </div>

        {/* 2-Column: Eligibility & Documents vs Online Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Eligibility Table & Required Documents */}
          <div className="lg:col-span-5 space-y-8">
            {/* Eligibility Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-amber-600" />
                  <span>Age & Eligibility Criteria</span>
                </h3>
                <span className="text-[11px] font-semibold text-slate-500">As of 31st March</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-y border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Grade Level</th>
                      <th className="py-2.5 px-3">Age Requirement</th>
                      <th className="py-2.5 px-3">Entry Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="py-2 px-3 font-semibold text-slate-900">Nursery</td>
                      <td className="py-2 px-3">3+ Years</td>
                      <td className="py-2 px-3">Informal Interaction</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-slate-900">LKG & UKG</td>
                      <td className="py-2 px-3">4+ & 5+ Years</td>
                      <td className="py-2 px-3">Readiness Observation</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-slate-900">Grades I – V</td>
                      <td className="py-2 px-3">6+ to 10 Years</td>
                      <td className="py-2 px-3">Basic Literacy Test</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-slate-900">Grades VI – IX</td>
                      <td className="py-2 px-3">11+ to 14 Years</td>
                      <td className="py-2 px-3">Aptitude Evaluation</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-slate-900">Grade XI (All Streams)</td>
                      <td className="py-2 px-3">15+ to 16 Years</td>
                      <td className="py-2 px-3">Class X CBSE Marks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Required Documents Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <span>Documents Required</span>
              </h3>
              <div className="space-y-2.5">
                {[
                  'Attested copy of Municipal Birth Certificate',
                  'Original Transfer Certificate (TC) countersigned by proper authority',
                  'Photocopy of previous class report card / mark sheet',
                  'Copy of Child and Parents’ Aadhaar Cards',
                  'Four recent passport-size colored photographs of student',
                  'Medical fitness & blood group certificate',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-amber-500/40 space-y-4">
              <h4 className="text-base font-bold text-white font-display">
                Need Immediate Assistance?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with our Admission Counselor on campus or via phone/WhatsApp.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 px-4 rounded-xl shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SCHOOL_INFO.phone}</span>
                </a>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Online Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Quick Online Registration
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Admission Enquiry Form (Session 2026–27)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Please fill out the form below. Our admission office will contact you within 24 working hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.parentName}</strong>. We have registered your admission inquiry for <strong>{formData.studentName}</strong> for <strong>Grade {formData.gradeApplying}</strong>. Our counselors will call you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          studentName: '',
                          parentName: '',
                          phone: '',
                          email: '',
                          gradeApplying: 'Nursery',
                          gender: 'Male',
                          dateOfBirth: '',
                          previousSchool: '',
                          residentialAddress: '',
                          transportRequired: true,
                          additionalNotes: '',
                        });
                      }}
                      className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Student Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Student Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>

                    {/* Parent Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Parent / Guardian Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Mobile Contact Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Grade Applying For */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Grade Applying For <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="gradeApplying"
                        value={formData.gradeApplying}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      >
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11 - Science (PCM)">Grade 11 - Science (PCM)</option>
                        <option value="Grade 11 - Science (PCB)">Grade 11 - Science (PCB)</option>
                        <option value="Grade 11 - Commerce">Grade 11 - Commerce</option>
                        <option value="Grade 11 - Humanities/Arts">Grade 11 - Humanities/Arts</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>

                    {/* Gender */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Previous School & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Previous School Attended (if applicable)
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="School name and city"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Residential Area in Agra
                      </label>
                      <input
                        type="text"
                        name="residentialAddress"
                        value={formData.residentialAddress}
                        onChange={handleChange}
                        placeholder="e.g. Rohta / Gwalior Road / Sadar"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Transport Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="transportRequired"
                      name="transportRequired"
                      checked={formData.transportRequired}
                      onChange={handleChange}
                      className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                    />
                    <label htmlFor="transportRequired" className="text-xs sm:text-sm text-slate-700 cursor-pointer">
                      Require school GPS bus transport facility across Agra
                    </label>
                  </div>

                  {/* Additional notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Additional Queries or Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Any specific questions regarding stream options, fee structure, or timings..."
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-slate-900 hover:from-blue-800 hover:to-slate-800 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg shadow-blue-950/20 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-400" />
                          <span>Submit Online Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
