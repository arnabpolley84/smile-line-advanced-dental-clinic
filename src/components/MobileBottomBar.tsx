import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileBottomBarProps {
  onOpenAppointmentModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAppointmentModal }) => {
  return (
    <div 
      id="mobile-bottom-bar"
      className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl safe-area-inset-bottom"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* Call Now */}
        <a
          href={CLINIC_INFO.phoneTel}
          id="mobile-bar-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-semibold transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-teal-400 mb-0.5" />
          <span className="whitespace-nowrap">Call Now</span>
        </a>

        {/* Book Appointment */}
        <button
          onClick={onOpenAppointmentModal}
          id="mobile-bar-appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-[11px] font-semibold transition-all active:scale-95 shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="whitespace-nowrap">Appointment</span>
        </button>

        {/* Directions */}
        <a
          href={CLINIC_INFO.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-directions"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold transition-all active:scale-95"
        >
          <Navigation className="w-4 h-4 text-sky-400 mb-0.5" />
          <span className="whitespace-nowrap">Directions</span>
        </a>

      </div>
    </div>
  );
};
