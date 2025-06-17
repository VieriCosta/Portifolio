
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <ThemeToggle />
        <LanguageToggle />
        <Navigation />
        <ContactForm />
      </div>
    </LanguageProvider>
  );
};

export default Contact;
