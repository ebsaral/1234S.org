import { Pencil } from 'lucide-react';

const CustomPencil = () => {
  return (
    <div className='relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg my-8 group transition-all hover:scale-110 duration-300'>
      <svg className='w-10 h-10 transition-transform duration-300 group-hover:scale-125'>
        <defs>
          <linearGradient id='rainbow-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E74C3C' />
            <stop offset='20%' stopColor='#F1C40F' />
            <stop offset='40%' stopColor='#2ECC71' />
            <stop offset='60%' stopColor='#3498DB' />
            <stop offset='80%' stopColor='#E74C3C' />
            <stop offset='100%' stopColor='#F1C40F' />
          </linearGradient>
        </defs>

        <Pencil stroke='url(#rainbow-gradient)' size={40} />
      </svg>
    </div>
  );
};
export default CustomPencil;
