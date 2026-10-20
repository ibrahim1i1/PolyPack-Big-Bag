import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import {type Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (selectedLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred_lang') as Language;
    return saved === 'en' ? 'en' : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (selectedLang: Language) => {
    setLangState(selectedLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};