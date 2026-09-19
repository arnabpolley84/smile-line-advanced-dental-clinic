import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Shield, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification / Quick Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center whitespace-nowrap">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Google 5.0 ★ Rated Clinic
            </span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="flex items-center gap-1 text-slate-300 hidden md:inline-flex">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Purbalok, Kolkata (near Jyotirindra Metro)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden lg:inline">Evening Clinic Hours: 5:30 PM – 9:30 PM</span>
            <a 
              href={CLINIC_INFO.phoneTel} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-header"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
            : 'bg-white border-b border-slate-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo & Clinic Name */}
            <a 
              href="#home" 
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-white shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform shrink-0">
                {/* Dental smile icon */}
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
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

              <div className="flex flex-col min-w-0">
                <span className="text-slate-900 font-bold text-sm sm:text-base lg:text-lg tracking-tight leading-tight whitespace-nowrap">
                  Smile Line <span className="text-teal-700 font-semibold hidden sm:inline">Advanced Dental</span>
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium whitespace-nowrap flex items-center gap-1.5">
                  <span className="font-bengali text-teal-800 hidden xs:inline">স্মাইল লাইন ডেন্টাল</span>
                  <span className="text-slate-400 hidden xs:inline">•</span>
                  <span className="text-slate-500">Purbalok, Kolkata</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu: STRICT Single-Line Requirement */}
            <nav 
              className="hidden xl:flex items-center gap-5 lg:gap-7 whitespace-nowrap text-sm font-medium text-slate-600"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="whitespace-nowrap hover:text-teal-700 transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Header Right CTAs */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Call Now Button (Desktop / Tablet) */}
              <a 
                href={CLINIC_INFO.phoneTel}
                id="header-call-btn"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 transition-all active:scale-95 whitespace-nowrap"
                title={`Call ${CLINIC_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="whitespace-nowrap">Call Now</span>
              </a>

              {/* Book Appointment CTA */}
              <button
                id="header-book-btn"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm shadow-teal-600/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Book Appointment</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 shrink-0 cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-800" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu — Guaranteed full containment inside viewport */}
        {mobileMenuOpen && (
          <div 
            id="mobile-dropdown-menu"
            className="xl:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="py-2 px-3 bg-slate-50 rounded-lg flex items-center justify-between text-xs text-slate-600 mb-2">
              <span className="font-medium text-slate-900">Purbalok, Kolkata</span>
              <span className="text-teal-700 font-semibold">5.0 ★ Google Rated</span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-teal-50 hover:text-teal-800 font-medium text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={CLINIC_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold text-center transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call Clinic</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold text-center transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
