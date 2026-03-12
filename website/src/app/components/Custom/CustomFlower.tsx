import { Flower } from 'lucide-react';

export default function CustomFlower() {
  return (
    <div
      className={`z-20 relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 shadow-lg my-8 group transition-all duration-300 hover:scale-110 hover:bg-white`}
    >
      <div className='relative w-16 h-16 flex items-center justify-center'>
        {/* Soft blue glow */}
        <div className='absolute inset-0 rounded-full bg-blue-300/20 blur-xl animate-pulse' />

        {/* Gradient definitions */}
        <svg width='0' height='0'>
          <defs>
            {/* Deep blue petals */}
            <linearGradient id='midnightPetals' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#2a0a4a' />
              <stop offset='50%' stopColor='#7c3aed' />
              <stop offset='100%' stopColor='#2a0a4a' />
            </linearGradient>
          </defs>
        </svg>

        {/* Flower */}
        <Flower
          className='w-14 h-14 transition-all duration-700 ease-in-out group-hover:scale-110'
          stroke='url(#midnightPetals)'
          strokeWidth={2.2}
        />
      </div>
    </div>
  );
}
