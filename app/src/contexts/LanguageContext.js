import React, { createContext, useContext, useState, useEffect } from 'react';
import { data } from '../data/data';

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
    if (savedLanguage && data.translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);
  
  const changeLanguage = (langCode) => {
    if (data.translations[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('preferred-language', langCode);
    }
  };
  
  const t = (key) => {
    const keys = key.split('.');
    var currData = data.translations[currentLanguage];

    for(var k = 0; k < keys.length; k++){
      if(k==keys.length-1){
        return currData?.[keys[k]] || key;
      }
      else {
        currData = currData?.[keys[k]];
        if(!currData) {
          return key;
        }
      }
    }
  };

  const hasKey = (key) => {
    const keys = key.split('.');
    var currData = data.translations[currentLanguage];

    for(var k = 0; k < keys.length; k++){
      if(k==keys.length-1){
        return currData?.[keys[k]] !== undefined
      }
      else {
        currData = currData?.[keys[k]]
        if(currData == undefined) {
          return false
        }
      }
    }
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