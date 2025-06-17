
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, FolderOpen, Contact } from 'lucide-react';

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, key: 'home' },
    { path: '/projects', icon: FolderOpen, key: 'projects' },
    { path: '/contact', icon: Contact, key: 'contact' }
  ];

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className="flex flex-col gap-2">
        {navItems.map(({ path, icon: Icon, key }) => (
          <Link
            key={path}
            to={path}
            className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 group ${
              location.pathname === path
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
            }`}
            aria-label={t(key)}
          >
            <Icon size={20} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
