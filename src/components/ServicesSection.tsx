import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Gem, 
  Smile, 
  HeartPulse, 
  Baby, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem } from '../types';
import { TypingEffect } from './TypingEffect';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Gem': return <Gem className="w-5 h-5 text-teal-600" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-teal-600" />;
      case 'Baby': return <Baby className="w-5 h-5 text-teal-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-100">
            <span>Comprehensive Dental Treatments</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="Our Dental Services"
              speed={26}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            />
          </div>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From routine oral hygiene and preventive check-ups to precision restorative and aesthetic care, we provide personalized treatments tailored to your oral health and comfort.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-teal-50 border border-slate-200/60 group-hover:border-teal-200 flex items-center justify-center transition-colors shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/60">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-900 transition-colors mb-2">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-teal-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Learn Details</span>
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.name)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600/10 hover:bg-teal-600 text-teal-700 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Information Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-teal-50/60 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0"></span>
            <span>Unsure which treatment fits your condition? Contact us for an initial dental examination.</span>
          </div>
          <button
            onClick={() => onSelectServiceForBooking("General Dental Consultation")}
            className="shrink-0 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Book Initial Check-Up
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                {selectedService.category}
              </span>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {selectedService.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedService.details}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-100">
              <p className="font-medium text-slate-800 mb-1">Our Approach:</p>
              <p>Procedures are carried out with careful patient comfort, sterilized instruments, and clear explanation throughout.</p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedService(null)}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sName = selectedService.name;
                  setSelectedService(null);
                  onSelectServiceForBooking(sName);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
