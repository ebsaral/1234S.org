import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockData } from '../data/mock';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(mockData.settings.currentTheme);
  const [language, setLanguage] = useState(mockData.settings.currentLanguage);

  const themeClasses = mockData.themes[theme];
  const content = mockData.content[language];

  const toggleTheme = () => {
    setTheme(prev => prev === 'spiritual' ? 'minimalist' : 'spiritual');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  useEffect(() => {
    document.body.className = themeClasses.background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      language,
      themeClasses,
      content,
      toggleTheme,
      toggleLanguage
    }}>
      {children}
    </ThemeContext.Provider>
  );
};