import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiArrowRight } = FiIcons;

const Services = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen pt-10">
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.process.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-200 absolute top-4 right-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{t.process.step1.title}</h3>
              <p className="text-gray-600 relative z-10">{t.process.step1.description}</p>
            </div>
            <div className="relative p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-200 absolute top-4 right-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{t.process.step2.title}</h3>
              <p className="text-gray-600 relative z-10">{t.process.step2.description}</p>
            </div>
            <div className="relative p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-200 absolute top-4 right-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{t.process.step3.title}</h3>
              <p className="text-gray-600 relative z-10">{t.process.step3.description}</p>
            </div>
            <div className="relative p-6 bg-blue-50 rounded-xl">
              <div className="text-5xl font-bold text-blue-200 absolute top-4 right-4">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{t.process.step4.title}</h3>
              <p className="text-gray-600 relative z-10">{t.process.step4.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-blue-200 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t.example.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-semibold">
              {t.example.subtitle}
            </p>
            
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Features</h3>
              <ul className="space-y-2">
                {t.example.features && t.example.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-blue-200 pt-6 space-y-4 mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  {t.example.servicePackage}
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {t.example.priceOneYear}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  {t.example.servicePackageThreeYears}
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  {t.example.priceThreeYears}
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/request"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                {t.hero.cta}
                <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;