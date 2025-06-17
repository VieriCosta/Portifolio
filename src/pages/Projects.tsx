
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import ProjectsList from '../components/ProjectsList';
import Navigation from '../components/Navigation';

const Projects = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <ThemeToggle />
        <LanguageToggle />
        <Navigation />
        <ProjectsList />
      </div>
    </LanguageProvider>
  );
};

export default Projects;
