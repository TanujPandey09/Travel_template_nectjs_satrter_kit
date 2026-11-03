'use client';

import React, { useState, useMemo } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { CalendarBlank, CaretLeft, CaretRight, X } from '@phosphor-icons/react';

interface DatePickerProps {
  id?: string;
  value: string; // 'YYYY-MM-DD'
  onChange: (value: string) => void;
  minDate?: string; // 'YYYY-MM-DD'
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const DatePicker: React.FC<DatePickerProps> = ({
  id,
  value,
  onChange,
  minDate,
  placeholder = 'Select date',
  className = '',
  ariaLabel = 'Select date',
}) => {
  const [open, setOpen] = useState(false);

  // Parse initial view year and month from current value or today
  const initialDate = useMemo(() => {
    if (value) {
      const [y, m, d] = value.split('-').map(Number);
      if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        return new Date(y, m - 1, d);
      }
    }
    return new Date();
  }, [value]);

  const [viewYear, setViewYear] = useState<number>(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState<number>(initialDate.getMonth());

  // Today in YYYY-MM-DD format
  const todayStr = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }, []);

  // Sync view month when opened or value changes
  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen && value) {
      const [y, m] = value.split('-').map(Number);
      if (!isNaN(y) && !isNaN(m)) {
        setViewYear(y);
        setViewMonth(m - 1);
      }
    }
    setOpen(nextOpen);
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  // Build grid of days
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();
    const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();

    const days: Array<{
      day: number;
      dateStr: string;
      isCurrentMonth: boolean;
      isDisabled: boolean;
      isSelected: boolean;
      isToday: boolean;
    }> = [];

    // Empty padding slots for days before 1st of month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({
        day: 0,
        dateStr: '',
        isCurrentMonth: false,
        isDisabled: true,
        isSelected: false,
        isToday: false,
      });
    }

    // Days in current month
    for (let day = 1; day <= totalDays; day++) {
      const mStr = String(viewMonth + 1).padStart(2, '0');
      const dStr = String(day).padStart(2, '0');
      const dateStr = `${viewYear}-${mStr}-${dStr}`;

      const isPast = dateStr < todayStr;
      const isBeforeMin = minDate ? dateStr < minDate : false;
      const isDisabled = isPast || isBeforeMin;
      const isSelected = value === dateStr;
      const isToday = dateStr === todayStr;

      days.push({
        day,
        dateStr,
        isCurrentMonth: true,
        isDisabled,
        isSelected,
        isToday,
      });
    }

    return days;
  }, [viewYear, viewMonth, value, todayStr, minDate]);

  // Formatted display text in trigger
  const displayLabel = useMemo(() => {
    if (!value) return placeholder;
    const [y, m, d] = value.split('-').map(Number);
    if (isNaN(y) || isNaN(m) || isNaN(d)) return placeholder;
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, [value, placeholder]);

  return (
    <Popover.Root open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <button
          type="button"
          id={id}
          aria-label={ariaLabel}
          className={`flex h-[52px] sm:h-[58px] w-full cursor-pointer items-center justify-between rounded-xl border border-white/25 bg-white/10 px-4 sm:px-[17px] text-base sm:text-[17px] text-white outline-none transition-all hover:bg-white/[0.14] focus:border-white/60 focus:ring-2 focus:ring-white/20 text-left ${className}`}
        >
          <span
            className={`truncate pr-2 font-medium ${
              value ? 'text-white' : 'text-white/60'
            }`}
          >
            {displayLabel}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {value && (
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    onChange('');
                  }
                }}
                className="flex h-5 w-5 items-center justify-center rounded-full text-white/50 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                title="Clear date"
              >
                <X size={13} weight="bold" />
              </span>
            )}
            <CalendarBlank size={20} className="text-white/80" />
          </div>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={8}
          className="z-50 w-[304px] select-none rounded-2xl border border-white/20 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur-2xl ring-1 ring-black/50"
        >
          {/* Header Month / Year & Prev/Next Nav */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-sm font-bold tracking-tight text-white">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                aria-label="Previous month"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <CaretLeft size={16} weight="bold" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 pt-3 pb-1 text-center text-[11px] font-semibold text-white/45">
            {WEEKDAYS.map((wd) => (
              <div key={wd}>{wd}</div>
            ))}
          </div>

          {/* Calendar Day Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((item, index) => {
              if (!item.isCurrentMonth) {
                return <div key={`empty-${index}`} className="h-8 w-8" />;
              }

              return (
                <button
                  key={item.dateStr}
                  type="button"
                  disabled={item.isDisabled}
                  onClick={() => {
                    onChange(item.dateStr);
                    setOpen(false);
                  }}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-all ${
                    item.isSelected
                      ? 'bg-[#FF5B37] text-white font-bold shadow-md shadow-[#FF5B37]/40 ring-2 ring-[#FF5B37]/30'
                      : item.isDisabled
                      ? 'text-white/20 cursor-not-allowed'
                      : item.isToday
                      ? 'border border-[#FF5B37] text-white hover:bg-white/15'
                      : 'text-white/85 hover:bg-white/15 hover:text-white cursor-pointer'
                  }`}
                >
                  {item.day}
                </button>
              );
            })}
          </div>

          {/* Quick shortcuts: Today & Reset */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => {
                onChange(todayStr);
                setOpen(false);
              }}
              className="text-[#FF5B37] hover:underline font-semibold cursor-pointer"
            >
              Today
            </button>
            {value && (
              <button
                type="button"
                onClick={() => {
                  onChange('');
                  setOpen(false);
                }}
                className="text-white/50 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

