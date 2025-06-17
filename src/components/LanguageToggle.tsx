
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-24 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle language"
    >
      <Globe 
        className="text-white/80 group-hover:text-white transition-colors duration-300" 
        size={20} 
      />
      <span className="text-white/80 group-hover:text-white font-medium text-sm transition-colors duration-300">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageToggle;
