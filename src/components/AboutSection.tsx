import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Phone, Calendar, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  onOpenAppointmentModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Dental Practice</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="About Smile Line Advanced Dental Clinic"
              speed={22}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            />
          </div>

          <p className="font-bengali text-teal-700 text-sm mt-1 font-medium">
            স্মাইল লাইন অ্যাডভান্সড ডেন্টাল ক্লিনিক • পুরবালোক, কলকাতা
          </p>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Located in Purbalok near Jyotirindra Metro Station, Smile Line Advanced Dental Clinic provides comprehensive, patient-centered dental care focused on clear communication, gentle technique, and lasting oral health.
          </p>
        </div>

        {/* Content & Visual Grid with Lenus-inspired image fade transition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Pillars */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                At <strong className="text-slate-900 font-semibold">Smile Line Advanced Dental Clinic</strong>, we believe visiting the dentist should be a comfortable, reassuring experience. We prioritize listening attentively to your dental concerns and taking the time to explain your diagnosis and options clearly before starting any procedure.
              </p>
              <p>
                Guided by skilled dental practitioners — including <strong className="text-slate-900 font-semibold">Dr. Sharmistha</strong>, praised by patients for her meticulous approach and caring communication — our clinic emphasizes conservative, personalized treatments designed around what is truly best for your smile.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Clear Communication</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No rushed decisions. We walk you through every step so you understand your oral health thoroughly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Meticulous Treatment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every filling, cleaning, and restorative procedure is carried out with precision, clean hygiene, and gentle care.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>
              <a
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual with Lenus-style soft gradient edge fading */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-white group">
              
              {/* Primary Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <SafeImage
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern clean clinic consultation room at Smile Line Dental Clinic"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />

                {/* Lenus-inspired edge gradient feathering so image merges softly */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(15,23,42,0.3) 100%)'
                  }}
                />
              </div>

              {/* Floating Trust Badge on image corner */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-900">5.0 ★ Google Rating</span>
                  </div>
                  <span className="text-[11px] text-teal-700 font-medium">Purbalok, Kolkata</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 italic">
                  “The doctors are very meticulous and knowledgeable... committed to solving the patient's problem.”
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
