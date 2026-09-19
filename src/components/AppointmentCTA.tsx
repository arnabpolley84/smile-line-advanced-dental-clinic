import React from 'react';
import { Phone, Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';

interface AppointmentCTAProps {
  onOpenAppointmentModal: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-4 border border-teal-500/30">
            <Clock className="w-3.5 h-3.5" />
            <span>Evening Clinic Hours: 5:30 PM – 9:30 PM</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="Ready to Take Care of Your Smile?"
              speed={24}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
            />
          </div>

          <p className="mt-4 text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            Get in touch with Smile Line Advanced Dental Clinic to discuss your dental care needs, routine check-ups, or tooth discomfort.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CLINIC_INFO.phoneTel}
              id="cta-banner-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-900 bg-white hover:bg-slate-100 shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenAppointmentModal}
              id="cta-banner-book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-950/40 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Metro & Location reminder */}
          <p className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>151/1, Basanta Rd., Nitai Nagar, near Jyotirindra Metro Station, Purbalok, Kolkata</span>
          </p>

        </div>
      </div>
    </section>
  );
};
