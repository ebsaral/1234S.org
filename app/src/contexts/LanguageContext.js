import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && mockData.translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);
  
  const changeLanguage = (langCode) => {
    if (mockData.translations[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('preferred-language', langCode);
    }
  };
  
  const t = (key) => {
    return mockData.translations[currentLanguage]?.[key] || key;
  };

  const hasKey = (key) => {
    return mockData.translations[currentLanguage]?.[key] !== undefined;
  };
  
  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];
  
  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      hasKey,
      availableLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};