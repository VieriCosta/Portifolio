
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Hero from '../components/Hero';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative">
        <ThemeToggle />
        <LanguageToggle />
        <Hero />
      </div>
    </LanguageProvider>
  );
};

export default Index;
