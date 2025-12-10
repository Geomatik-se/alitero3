import React from 'react';
import {Link} from 'react-router-dom';
import {useLanguage} from '../../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram} = FiIcons;

const Footer = () => {
  const {t} = useLanguage();
  
  const quickLinks = [
    {key: 'home', path: '/'},
    {key: 'references', path: '/references'},
    {key: 'about', path: '/about'},
    {key: 'contact', path: '/contact'}
  ];
  
  const legalLinks = [
    {key: 'impressum', path: '/impressum'},
    {key: 'privacy', path: '/privacy'}
  ];
  
  const socialLinks = [
    {icon: FiFacebook, href: '#', label: 'Facebook'},
    {icon: FiTwitter, href: '#', label: 'Twitter'},
    {icon: FiLinkedin, href: '#', label: 'LinkedIn'},
    {icon: FiInstagram, href: '#', label: 'Instagram'}
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L24</span>
              </div>
              <span className="font-bold text-xl">landingspage24</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{t('footer.contact.location')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-400" />
                <a href="mailto:hello@landingspage24.com" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.contact.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-blue-400" />
                <a href="tel:+491234567890" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.contact.phone')}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {t(`footer.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <h4 className="font-medium text-sm text-gray-400">{t('footer.social')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <SafeIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;