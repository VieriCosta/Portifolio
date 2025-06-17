
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import AboutContent from '../components/AboutContent';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <ThemeToggle />
        <LanguageToggle />
        <Navigation />
        <AboutContent />
      </div>
    </LanguageProvider>
  );
};

export default About;
