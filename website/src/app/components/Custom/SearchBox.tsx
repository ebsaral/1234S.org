'use client';

import { useState } from 'react';

type SearchBoxProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = '', onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value); // propagate value to parent
  };

  return (
    <div className='relative w-full max-w-md mx-auto'>
      <input
        type='text'
        className='w-full border rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
