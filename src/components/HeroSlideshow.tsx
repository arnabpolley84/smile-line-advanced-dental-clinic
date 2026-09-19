import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';
import { SafeImage } from './SafeImage';

interface HeroSlideshowProps {
  onOpenAppointmentModal: () => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ onOpenAppointmentModal }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-slide transition every 6.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleCtaClick = (ctaText: string) => {
    if (ctaText.toLowerCase().includes('call') || ctaText.includes(CLINIC_INFO.phoneRaw)) {
      window.location.href = CLINIC_INFO.phoneTel;
    } else if (ctaText.toLowerCase().includes('service')) {
      const servicesEl = document.getElementById('services');
      if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' });
    } else if (ctaText.toLowerCase().includes('contact')) {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenAppointmentModal();
    }
  };

  return (
    <section 
      id="home"
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Dental Clinic Hero Carousel"
    >
      {/* Slide Images Container */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Background Image with carefully balanced object positioning */}
            <div className="absolute inset-0 w-full h-full">
              <SafeImage
                src={slide.image}
                fallbackSrc={slide.fallbackImage}
                alt={slide.imageAlt}
                className="w-full h-full object-cover"
                style={{ objectPosition: slide.objectPosition || 'center right' }}
              />
            </div>

            {/*
              ============================================================
              LENUS-INSPIRED HORIZONTAL DARK-TO-TRANSPARENT FADE EFFECT
              - LEFT: moderately dark for crisp typography & readability
              - CENTER: soft gentle gradient feathering
              - RIGHT: image remains bright, vibrant, and clearly visible
              ============================================================
            */}
            {/* Desktop / Tablet Horizontal Fade */}
            <div 
              className="absolute inset-0 hidden sm:block pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.85) 30%, rgba(15, 23, 42, 0.50) 58%, rgba(15, 23, 42, 0.15) 80%, rgba(15, 23, 42, 0.0) 100%)'
              }}
            />

            {/* Mobile Vertical + Lateral Fade to ensure high contrast without obscuring faces */}
            <div 
              className="absolute inset-0 sm:hidden pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.90) 0%, rgba(15, 23, 42, 0.78) 55%, rgba(15, 23, 42, 0.45) 100%)'
              }}
            />

            {/* Subtle top & bottom edge softening for organic page blending */}
            <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-slate-950/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Trust Badge / Micro Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium mb-4 sm:mb-5 backdrop-blur-sm animate-in fade-in duration-500">
            <span className="flex items-center text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300 mr-1" />
              5.0 ★ Rated
            </span>
            <span className="text-teal-400/60">•</span>
            <span>{currentSlide.badge}</span>
          </div>

          {/* Headline with Tasteful Typing Effect */}
          <div className="min-h-[95px] sm:min-h-[110px] md:min-h-[125px]">
            <TypingEffect
              as="h1"
              key={`headline-${currentSlide.id}`}
              triggerKey={currentSlide.id}
              text={currentSlide.headline}
              speed={24}
              delay={120}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] drop-shadow-sm"
            />
          </div>

          {/* Bengali Clinic Name Subtle Accent */}
          <div className="text-teal-300/90 font-medium text-xs sm:text-sm tracking-wide mt-1.5 mb-3 font-bengali">
            {CLINIC_INFO.bengaliName} • পুরবালোক, কলকাতা
          </div>

          {/* Supporting Text with Smooth Reveal */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance">
            {currentSlide.supportingText}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={() => handleCtaClick(currentSlide.primaryCtaText)}
              id="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-teal-600 hover:bg-teal-500 active:scale-98 transition-all shadow-lg shadow-teal-900/30 cursor-pointer"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleCtaClick(currentSlide.secondaryCtaText)}
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-100 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/60 backdrop-blur-sm active:scale-98 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>{currentSlide.secondaryCtaText}</span>
            </button>
          </div>

          {/* Quick Clinic Assurance Indicators */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Near Jyotirindra Metro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Meticulous & Clear Guidance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Women-Owned Practice</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows (Desktop / Tablet) */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-slate-900/60 hover:bg-slate-900/90 text-white border border-slate-700/50 backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-slate-900/60 hover:bg-slate-900/90 text-white border border-slate-700/50 backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center items-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive ? 'w-8 bg-teal-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
