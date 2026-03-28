'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useIntlayer } from 'next-intlayer';
import { memo, useEffect, useRef, useState } from 'react';

type TimeRemaining = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(targetDate: string | Date): TimeRemaining {
  const total = new Date(targetDate).getTime() - new Date().getTime();

  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));

  return { total, days, hours, minutes, seconds };
}

function splitDigits(num: number, digits: number = 2): string[] {
  return num.toString().padStart(digits, '0').split('');
}

/* =========================
   Memoized Digit Component
========================= */

type DigitProps = {
  value: string;
};

const Digit = memo(function Digit({ value }: DigitProps) {
  const prevRef = useRef<string>(value);

  const prev = prevRef.current;

  useEffect(() => {
    if (value !== prevRef.current) {
      prevRef.current = value;
    }
  }, [value]);

  return (
    <div className='perspective-[800px]'>
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='flex items-center justify-center 
                     w-6 
                     h-6 
                     rounded-xl 
                     bg-gradient-to-b from-zinc-800 to-black 
                     text-white 
                     text-sm 
                     shadow-lg 
                     backface-hidden'
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

/* =========================
   Digit Group
========================= */

type DigitGroupProps = {
  value: number;
  label: string;
};

function DigitGroup({ value, label }: DigitGroupProps) {
  const digits = String(Number(value)).length;
  const split = splitDigits(value, digits);

  return (
    <div className='flex flex-col items-center text-center'>
      <div className='flex gap-1'>
        {split.map((d, i) => (
          <Digit key={i} value={d} />
        ))}
      </div>
      <div className='mt-1 text-xs opacity-70'>{label}</div>
    </div>
  );
}

/* =========================
   Main Component
========================= */

type FlipCountdownProProps = {
  className?: string;
  targetDate: string | Date;
};

export default function CountdownClock({ className, targetDate }: FlipCountdownProProps) {
  const content = useIntlayer('content-countdown');
  const [time, setTime] = useState<TimeRemaining>(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (time.total <= 0) {
    return;
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 font-mono ${className}`}>
      <div className='text-center text-xs text-gray-300'>{content.title}</div>

      <div className='flex flex-row items-center justify-center gap-5 text-gray-300'>
        <DigitGroup value={time.days} label={content.days.value} />
        <DigitGroup value={time.hours} label={content.hours.value} />
        <DigitGroup value={time.minutes} label={content.minutes.value} />
        <DigitGroup value={time.seconds} label={content.seconds.value} />
      </div>
    </div>
  );
}
