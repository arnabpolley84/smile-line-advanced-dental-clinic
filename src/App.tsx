/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlideshow } from './components/HeroSlideshow';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PatientExperience } from './components/PatientExperience';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { AppointmentCTA } from './components/AppointmentCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('General Dental Consultation');

  const handleOpenAppointmentModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-teal-500 selection:text-white pb-16 sm:pb-0">
      {/* Sticky Header with strict single-line desktop navigation */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Slideshow with Lenus-inspired Horizontal Fade Overlay */}
        <HeroSlideshow onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 2. Trust Bar (5.0 ★ Rating, 15 Reviews, Attributes) */}
        <TrustBar />

        {/* 3. About Smile Line Advanced Dental Clinic */}
        <AboutSection onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 4. Dental Services Section with Interactive Category Cards */}
        <ServicesSection 
          onSelectServiceForBooking={(serviceName) => handleOpenAppointmentModal(serviceName)} 
        />

        {/* 5. Why Choose Smile Line (Review-backed Strengths) */}
        <WhyChooseUs />

        {/* 6. Patient Experience & Journey */}
        <PatientExperience onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 7. Reviews & Testimonials Carousel + Google Review CTA */}
        <ReviewsCarousel />

        {/* 8. Full-Width Appointment CTA */}
        <AppointmentCTA onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 9. Contact, Location, Opening Hours & Booking Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar (Call | Appointment | Directions) */}
      <MobileBottomBar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        preselectedService={preselectedService}
      />
    </div>
  );
}
