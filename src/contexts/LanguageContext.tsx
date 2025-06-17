
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  greeting: {
    pt: "Olá, eu sou",
    en: "Hello, I'm"
  },
  role: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer"
  },
  description: {
    pt: "Transformo ideias em experiências digitais incríveis. Especialista em criar soluções web modernas e eficientes.",
    en: "I transform ideas into amazing digital experiences. Expert in creating modern and efficient web solutions."
  },
  contact: {
    pt: "Entrar em Contato",
    en: "Get in Touch"
  },
  projects: {
    pt: "Ver Projetos",
    en: "View Projects"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
