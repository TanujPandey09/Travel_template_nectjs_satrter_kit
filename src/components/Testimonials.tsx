import React from 'react';
import { Star, CheckCircle, SteeringWheel, Sparkle } from '@phosphor-icons/react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-slate-50/60 relative w-full">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/70 text-[#FF5B37] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={14} weight="fill" />
            <span>Traveler Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Loved By Over 15,000+ Happy Voyagers
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Real stories from families, couples, and corporate groups who trusted us with their holidays and outstation travels.
          </p>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.09)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Route Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} weight="fill" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-slate-900">5.0</span>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                    <CheckCircle size={13} weight="fill" className="text-emerald-600" />
                    Verified Booking
                  </span>
                </div>

                {/* Quote */}
                <p className="text-base text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Trip Details Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.travelerName}</h4>
                  <p className="text-xs text-slate-500">{item.roleAndCity}</p>
                </div>

                <div className="text-right">
                  <span className="inline-block text-[11px] font-semibold text-[#FF5B37] bg-orange-50 px-2.5 py-1 rounded-full">
                    {item.tripTaken}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.vehicleUsed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
