import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import LanguageSelector from './LanguageSelector';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCode, FiMenu, FiX } = FiIcons;

const Header = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiCode} className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">WebDev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/services') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t.nav.services}
            </Link>
            <Link
              to="/request"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/request') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t.nav.request}
            </Link>
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {t.nav.services}
              </Link>
              <Link
                to="/request"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/request') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {t.nav.request}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;