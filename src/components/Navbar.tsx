import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MonitorSmartphone, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <MonitorSmartphone className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-slate-900">HBM Informatique</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600'
                } transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              <Globe className="h-5 w-5" />
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>

            <a
              href="https://wa.me/22941745959?text=Hello,%20I%20need%20your%20IT%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              {t('nav.quote')}
            </a>
          </div>

          <div className="flex items-center md:hidden gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              <Globe className="h-5 w-5" />
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/22941745959?text=Hello,%20I%20need%20your%20IT%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
            >
              {t('nav.quote')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
