'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle,
  WhatsappLogo,
  WarningCircle,
  ArrowRight,
  Sparkle,
} from '@phosphor-icons/react';
import { AGENCY_CONFIG } from '../data/travelData';

interface PlanJourneyModalProps {
  isOpen: boolean;
  initialContext: string;
  onClose: () => void;
}

export const PlanJourneyModal: React.FC<PlanJourneyModalProps> = ({
  isOpen,
  initialContext,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('Next 30 Days');
  const [paxCount, setPaxCount] = useState('4-6 Travelers (Innova Crysta)');
  const [tripNotes, setTripNotes] = useState(initialContext);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTripNotes(initialContext || 'Custom Tour Package or Fleet Booking');
    setSubmitted(false);
    setErrors({});
  }, [initialContext, isOpen]);

  if (!isOpen) return null;

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { fullName?: string; phone?: string } = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^[0-9+\-\s]{8,15}$/.test(phone.trim())) {
      nextErrors.phone = 'Please provide a valid 10-digit mobile or WhatsApp number.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${
    AGENCY_CONFIG.whatsappNumber
  }?text=${encodeURIComponent(
    `Hello Travelioo,\n• Name: ${fullName || 'Guest'}\n• Phone: ${phone}\n• Window: ${travelDate}\n• Group Size: ${paxCount}\n• Requirements: ${tripNotes}`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="relative z-10 w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-900 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-orange-100 text-[#FF5B37] flex items-center justify-center">
                <Sparkle size={16} weight="fill" />
              </span>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 leading-none">
                  Book or Customize Tour
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Instant response from our trip planner within 15 mins
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} weight="bold" />
            </button>
          </div>

          {submitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle size={36} weight="fill" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Booking Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{fullName}</strong>. Our senior tour specialist has received your requirements and will reach out to you at{' '}
                <strong className="text-slate-900">{phone}</strong> within 15 minutes.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/25 transition-all cursor-pointer"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={validateAndSubmit} className="mt-5 space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name <span className="text-[#FF5B37]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vikram Malhotra"
                  className={`w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-[#FF5B37]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <WarningCircle size={14} weight="bold" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Phone / WhatsApp Number <span className="text-[#FF5B37]">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-[#FF5B37]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <WarningCircle size={14} weight="bold" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Travel Window & Group Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Travel Window
                  </label>
                  <select
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#FF5B37]"
                  >
                    <option value="Next 30 Days">Next 30 Days</option>
                    <option value="Upcoming Long Weekend">Upcoming Long Weekend</option>
                    <option value="Nov / Dec 2026">Nov / Dec 2026 Holiday</option>
                    <option value="Flexible / Just Inquiring">Flexible Dates</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Group & Fleet Size
                  </label>
                  <select
                    value={paxCount}
                    onChange={(e) => setPaxCount(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#FF5B37]"
                  >
                    <option value="Solo / Couple (Sedan)">Couple (Sedan / Cab)</option>
                    <option value="4-6 Travelers (Innova Crysta)">4-6 Pax (Innova Crysta)</option>
                    <option value="8-12 Travelers (Maharaja Tempo)">8-12 Pax (Maharaja Tempo)</option>
                    <option value="16-26 Travelers (Urbania / 26-Seater)">16-26 Pax (Urbania Van)</option>
                  </select>
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Trip Specifics / Route Notes
                </label>
                <textarea
                  rows={3}
                  value={tripNotes}
                  onChange={(e) => setTripNotes(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 p-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#FF5B37]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-full bg-[#FF5B37] hover:bg-[#E64A26] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF5B37]/30 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={15} weight="bold" />
                </button>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
