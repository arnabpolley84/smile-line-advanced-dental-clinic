import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, CLINIC_INFO } from '../data/clinicData';
import { TypingEffect } from './TypingEffect';

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const totalReviews = REVIEWS_DATA.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      id="reviews" 
      className="py-20 sm:py-24 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold mb-3 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>5.0 ★ Google Rating (15 Reviews)</span>
          </div>

          <div className="min-h-[44px]">
            <TypingEffect
              as="h2"
              text="What Our Patients Say"
              speed={24}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            />
          </div>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Genuine experiences shared by patients who visited Smile Line Advanced Dental Clinic in Purbalok, Kolkata.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div className="min-h-[290px] sm:min-h-[260px] bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md relative flex flex-col justify-between transition-all">
            
            {/* Top Row: Stars, Google Badge, Quote Mark */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-900">5.0</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Review</span>
                </span>
                <Quote className="w-8 h-8 text-teal-600/20" />
              </div>
            </div>

            {/* Review Text */}
            <blockquote className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed font-normal mb-6 italic">
              “{REVIEWS_DATA[currentIndex].text}”
            </blockquote>

            {/* Reviewer Meta */}
            <div className="flex items-center justify-between border-t border-slate-200/60 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {REVIEWS_DATA[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {REVIEWS_DATA[currentIndex].author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {REVIEWS_DATA[currentIndex].timeAgo}
                  </p>
                </div>
              </div>

              <div className="text-xs font-medium text-teal-800 bg-teal-50 px-3 py-1 rounded-lg border border-teal-100 hidden sm:block">
                {REVIEWS_DATA[currentIndex].highlight}
              </div>
            </div>

          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS_DATA.map((rev, idx) => (
                <button
                  key={rev.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View review by ${rev.author}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-teal-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Section 20: Google Review CTA */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-white to-sky-50/80 border border-teal-100 shadow-xs">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Loved Your Experience?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-md mx-auto">
            Your feedback helps other patients in Purbalok and Kolkata discover quality, trustworthy dental care.
          </p>
          <a
            href={CLINIC_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <ExternalLink className="w-4 h-4 text-teal-400" />
            <span>View / Leave a Google Review</span>
          </a>
        </div>

      </div>
    </section>
  );
};
