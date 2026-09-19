import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Calendar, 
  User, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Dental Consultation',
    preferredDate: '',
    preferredTime: 'Evening (5:30 PM - 7:30 PM)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Purbalok, Kolkata</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="Contact & Clinic Location"
              speed={22}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            />
          </div>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated near Jyotirindra Metro Station in Purbalok. Reach out by phone, book an appointment online, or get turn-by-turn directions.
          </p>
        </div>

        {/* 2-Column Layout: Clinic Information & Opening Hours on Left, Appointment Form & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Address, Phone, Plus Code, Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-6">
              
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  Dental Clinic
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Smile Line Advanced Dental Clinic
                </h3>
                <p className="font-bengali text-teal-800 text-sm font-medium mt-0.5">
                  স্মাইল লাইন অ্যাডভান্সড ডেন্টাল ক্লিনিক
                </p>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</h4>
                  <p className="text-sm font-medium text-slate-800 mt-0.5 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-teal-700 font-medium mt-1">
                    Landmark: {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telephone</h4>
                  <a 
                    href={CLINIC_INFO.phoneTel} 
                    className="text-base sm:text-lg font-bold text-teal-700 hover:text-teal-800 transition-colors inline-block mt-0.5"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">
                    Click to call directly from your device
                  </p>
                </div>
              </div>

              {/* Google Plus Code */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Google Plus Code</h4>
                  <p className="text-sm font-mono font-semibold text-slate-800 mt-0.5">
                    {CLINIC_INFO.plusCode}
                  </p>
                  <p className="text-xs text-slate-500">
                    Search code directly on Google Maps
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={CLINIC_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Directions</span>
                </a>
              </div>

            </div>

            {/* Dedicated Editable Opening Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Clinic Opening Hours</h3>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Opens 5:30 PM
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {CLINIC_INFO.openingHours.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <span className="font-semibold text-slate-800">{item.days}</span>
                    <div className="text-right">
                      <span className="font-bold text-teal-700 block">{item.hours}</span>
                      <span className="text-[11px] text-slate-500">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                <span>Prior telephone or online booking is recommended to avoid waiting time.</span>
              </p>
            </div>

          </div>

          {/* Right Column: Appointment Form & Embedded Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Appointment Request Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  Convenient Scheduling
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our clinic team will contact you to confirm your consultation slot.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Thank You, {formData.name || 'Patient'}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    We have received your appointment request for <strong>{formData.service}</strong>. We will call you back at <strong>{formData.phone}</strong> to confirm your slot.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-white text-slate-700 text-xs font-semibold border border-slate-200 hover:bg-slate-50"
                    >
                      Book Another Visit
                    </button>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 flex items-center gap-1"
                    >
                      <span>Message on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="form-full-name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          id="form-full-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="form-phone-number" className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          id="form-phone-number"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your Mobile Number"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50/50"
                        />
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Service Selection */}
                    <div>
                      <label htmlFor="form-service" className="block text-xs font-semibold text-slate-700 mb-1">
                        Dental Service Required
                      </label>
                      <select
                        id="form-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.name}>
                            {srv.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label htmlFor="form-preferred-time" className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Evening Time
                      </label>
                      <select
                        id="form-preferred-time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                      >
                        <option value="Evening (5:30 PM - 6:30 PM)">5:30 PM – 6:30 PM</option>
                        <option value="Evening (6:30 PM - 7:30 PM)">6:30 PM – 7:30 PM</option>
                        <option value="Night (7:30 PM - 8:30 PM)">7:30 PM – 8:30 PM</option>
                        <option value="Night (8:30 PM - 9:30 PM)">8:30 PM – 9:30 PM</option>
                        <option value="Sunday By Appointment">Sunday (Special Prior Booking)</option>
                      </select>
                    </div>

                  </div>

                  {/* Notes / Concern */}
                  <div>
                    <label htmlFor="form-patient-notes" className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Message or Dental Concern (Optional)
                    </label>
                    <textarea
                      id="form-patient-notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="E.g., toothache, cleaning checkup, crown replacement, consultation..."
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-appointment-form"
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Location Map Area with Direction Details */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Purbalok Clinic Location</span>
                </div>
                <a
                  href={CLINIC_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Container */}
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                <iframe
                  title="Smile Line Advanced Dental Clinic Purbalok Location Map"
                  src="https://maps.google.com/maps?q=151%2F1+Basanta+Rd+Nitai+Nagar+Purbalok+Kolkata+700099&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Near Jyotirindra Metro Station</span>
                <span className="font-mono">{CLINIC_INFO.plusCode}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
