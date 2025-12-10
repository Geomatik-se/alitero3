import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCode } = FiIcons;

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <SafeIcon icon={FiCode} className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">AliteroEU</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-600">{t.footer.copyright}</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                {t.footer.privacy}
              </Link>
              <Link to="/imprint" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                {t.footer.imprint}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;