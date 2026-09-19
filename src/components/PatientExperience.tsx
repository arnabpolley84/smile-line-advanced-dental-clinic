import React from 'react';
import { CARE_JOURNEY_STEPS } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface PatientExperienceProps {
  onOpenAppointmentModal: () => void;
}

export const PatientExperience: React.FC<PatientExperienceProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Patient Journey</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="Our Patient Care Approach"
              speed={24}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            />
          </div>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From your first telephone call or walk-in to your post-treatment guidance, experience a systematic, gentle, and transparent dental journey.
          </p>
        </div>

        {/* 4-Step Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {CARE_JOURNEY_STEPS.map((step, idx) => (
            <div 
              key={step.step}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-teal-600 font-mono tracking-tighter">
                    {step.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 text-xs font-bold">
                    ✓
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1">
                <span>Smile Line Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Journey CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAppointmentModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Consultation Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
