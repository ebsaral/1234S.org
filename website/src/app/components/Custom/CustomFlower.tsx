import { Flower } from 'lucide-react';

export default function CustomFlower() {
  return (
    <div className='relative w-16 h-16 flex items-center justify-center'>
      {/* Soft blue glow */}
      <div className='absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse' />

      {/* Gradient definitions */}
      <svg width='0' height='0'>
        <defs>
          {/* Deep blue petals */}
          <linearGradient id='midnightPetals' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#2563eb' />
            <stop offset='50%' stopColor='#00ac42' />
            <stop offset='100%' stopColor='#2563eb' />
          </linearGradient>
        </defs>
      </svg>

      {/* Flower */}
      <Flower
        className='w-14 h-14 transition-all duration-700 ease-in-out hover:scale-105'
        stroke='url(#midnightPetals)'
        strokeWidth={2.2}
      />
    </div>
  );
}
