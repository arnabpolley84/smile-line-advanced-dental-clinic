import React from 'react';
import { Phone, MapPin, Clock, Star, Heart, Navigation, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-white shrink-0 shadow-md">
                <svg 
                  className="w-6 h-6 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10" />
                  <path d="M8 13.5c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" />
                  <circle cx="9" cy="9" r="1" fill="currentColor" />
                  <circle cx="15" cy="9" r="1" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  Smile Line Advanced Dental Clinic
                </h3>
                <p className="font-bengali text-teal-400 text-xs font-medium">
                  {CLINIC_INFO.bengaliName}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dedicated to compassionate, high-quality dental care in Purbalok, Kolkata. We emphasize clear explanations, comfortable clinical treatments, and long-term oral wellness.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-1 text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>5.0 ★ Google Rated (15 Reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>Women-Owned</span>
              <span>•</span>
              <span>LGBTQ+ Friendly</span>
              <span>•</span>
              <span>Metro Accessible</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Clinic', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Patient Reviews', href: '#reviews' },
                { label: 'Clinic Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-teal-400 transition-colors text-xs cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Dental Treatments
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id} className="text-slate-400">
                  {srv.name}
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleNavClick('#services')}
                  className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer text-xs"
                >
                  View All Treatments &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Clinic Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  151/1, Basanta Rd., Nitai Nagar, near Jyotirindra Metro Station, Purbalok, Kolkata, WB 700099
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a 
                  href={CLINIC_INFO.phoneTel} 
                  className="hover:text-teal-300 font-semibold text-white"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon – Sat: 5:30 PM – 9:30 PM</p>
                  <p className="text-slate-500 text-[11px]">Sunday: By Advance Appointment</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="font-mono text-slate-400">{CLINIC_INFO.plusCode}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Smile Line Advanced Dental Clinic. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Purbalok, Kolkata Dental Practice</span>
            <span>•</span>
            <a href={CLINIC_INFO.phoneTel} className="text-teal-400 hover:underline">
              {CLINIC_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
