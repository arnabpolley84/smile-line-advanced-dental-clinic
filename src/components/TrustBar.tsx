import React from 'react';
import { Star, ShieldCheck, Heart, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-5 sm:p-6 lg:p-8">
        
        {/* Top Grid: Rating & Category & Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center pb-6 border-b border-slate-100">
          
          {/* Rating Block */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
              <Star className="w-8 h-8 fill-amber-400 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">5.0 ★</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Google Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Based on <strong>15 Verified Patient Reviews</strong>
              </p>
            </div>
          </div>

          {/* Clinic Category & Metro Location */}
          <div className="flex items-center gap-3 md:border-l md:border-slate-100 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Category & Location</p>
              <h3 className="text-sm font-bold text-slate-900">Dental Clinic</h3>
              <p className="text-xs text-slate-600">Purbalok, near Jyotirindra Metro</p>
            </div>
          </div>

          {/* Clinic Attributes: Women-Owned & LGBTQ+ Friendly */}
          <div className="flex flex-col gap-1.5 md:border-l md:border-slate-100 md:pl-6">
            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Clinic Values</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-50 text-purple-800 text-xs font-semibold border border-purple-200/60">
                <Heart className="w-3 h-3 text-purple-600 fill-purple-200" />
                Women-Owned
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/60">
                <Users className="w-3 h-3 text-sky-600" />
                LGBTQ+ Friendly
              </span>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="flex items-center justify-start md:justify-end lg:border-l lg:border-slate-100 lg:pl-6">
            <a 
              href={CLINIC_INFO.mapsSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1.5 hover:underline"
            >
              <span>View Google Map Listing</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

        </div>

        {/* Bottom Highlights: Themes directly backed by patient reviews */}
        <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="font-medium">Meticulous Care</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="font-medium">Clear Explanations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="font-medium">Knowledgeable Doctors</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="font-medium">Reliable & Dependable</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="font-medium">Patient-First Comfort</span>
          </div>
        </div>

      </div>
    </section>
  );
};
