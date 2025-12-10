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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.pricing.title}</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {t.pricing.description}
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 text-left inline-block w-full max-w-lg">
                <h3 className="font-semibold text-gray-900 mb-4">{t.pricing.included}</h3>
                <ul className="space-y-3">
                  {t.pricing.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
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
        </div>
      </section>
    </div>
  );
};

export default Services;