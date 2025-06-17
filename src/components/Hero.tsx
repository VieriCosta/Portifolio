
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 transition-all duration-1000"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-white/80 text-lg md:text-xl font-light animate-fade-in">
              {t('greeting')}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in delay-300">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                João Silva
              </span>
            </h1>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-100 animate-fade-in delay-500">
            {t('role')}
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in delay-700">
            {t('description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in delay-1000">
            <button className="group px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              {t('contact')}
            </button>
            <button className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
              {t('projects')}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 animate-fade-in delay-1200">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                className="group p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                aria-label={label}
                style={{ animationDelay: `${1400 + index * 200}ms` }}
              >
                <Icon 
                  size={24} 
                  className="text-white/80 group-hover:text-white transition-colors duration-300 group-hover:rotate-12" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
