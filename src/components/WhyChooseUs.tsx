import React from 'react';
import { UserCheck, MessageSquare, Award, Clock, ShieldCheck, CheckCircle, Star } from 'lucide-react';
import { WHY_CHOOSE_POINTS, CLINIC_INFO } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';
import { SafeImage } from './SafeImage';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-teal-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-teal-600" />;
      case 'Award': return <Award className="w-5 h-5 text-teal-600" />;
      case 'Clock': return <Clock className="w-5 h-5 text-teal-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 text-xs font-semibold mb-3 border border-teal-500/20">
            <Star className="w-3.5 h-3.5 fill-teal-400" />
            <span>Backed by 5.0 ★ Google Patient Feedback</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="Why Choose Smile Line?"
              speed={24}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
            />
          </div>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Our patients appreciate our calm environment, transparent communication, and meticulous treatment standards right here in Purbalok, Kolkata.
          </p>
        </div>

        {/* Content Layout: 5 Review-backed Cards + Visual Treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Points Grid (7 columns) */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_POINTS.map((point) => (
              <div 
                key={point.id}
                className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-700/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(point.icon)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {point.desc}
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-[11px] text-teal-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{point.proof}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Showcase (5 columns) with Lenus Dark-Fade Treatment */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/70 bg-slate-950">
              
              {/* Image Container with high quality dental practice image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
                <SafeImage
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85"
                  fallbackSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Dental professional explaining dental care at Smile Line Dental Clinic"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />

                {/* Vertical and lateral gradient fade to blend naturally into the dark section */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.40) 45%, rgba(15, 23, 42, 0.15) 100%)'
                  }}
                />
              </div>

              {/* Patient Trust Box Overlaid on bottom of image */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-700/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                    Purbalok Dental Practice
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  151/1, Basanta Rd., Nitai Nagar
                </h4>
                <p className="text-xs text-slate-300">
                  Near Jyotirindra Metro Station, Purbalok, Kolkata. Clear communication and reliable dental solutions.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Evening Consultations</span>
                  <a 
                    href={CLINIC_INFO.phoneTel} 
                    className="text-teal-400 hover:text-teal-300 font-semibold"
                  >
                    Call {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
