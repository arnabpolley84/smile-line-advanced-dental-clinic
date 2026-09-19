import React, { useState } from 'react';
import { X, Calendar, Phone, Clock, User, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'General Dental Consultation',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService,
    date: '',
    timeSlot: '5:30 PM - 6:30 PM',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Appointment Requested!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our clinic team will reach out at <strong>{formData.phone}</strong> to confirm your slot for <strong>{formData.service}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl text-left border border-slate-200/80 text-xs space-y-1.5 text-slate-700">
              <p className="font-semibold text-slate-900">Smile Line Advanced Dental Clinic</p>
              <p>📍 151/1, Basanta Rd., Nitai Nagar, near Jyotirindra Metro, Purbalok, Kolkata</p>
              <p>🕒 Clinic Hours: Monday – Saturday 5:30 PM – 9:30 PM</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs"
              >
                <span>Notify via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={resetAndClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                Smile Line Dental Care
              </span>
              <h3 id="modal-headline" className="text-xl font-bold text-slate-900 mt-1">
                Book a Dental Appointment
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Purbalok, Kolkata • Evening Consultations (Opens 5:30 PM)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter patient name"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Treatment / Consultation
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  >
                    <option value="5:30 PM - 6:30 PM">5:30 PM – 6:30 PM</option>
                    <option value="6:30 PM - 7:30 PM">6:30 PM – 7:30 PM</option>
                    <option value="7:30 PM - 8:30 PM">7:30 PM – 8:30 PM</option>
                    <option value="8:30 PM - 9:30 PM">8:30 PM – 9:30 PM</option>
                    <option value="Sunday By Appointment">Sunday (Special Request)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Dental Concern or Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe any symptoms or preferences..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="text-xs font-medium text-slate-600 hover:text-teal-700 inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Or call us immediately at {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
