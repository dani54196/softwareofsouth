import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(
    navigator.language.split(/[-_]/)[0]
  );

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    setCurrentLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ currentLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
