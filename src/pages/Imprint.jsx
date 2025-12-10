import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Imprint = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].imprint;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-blue-100">{t.lastUpdated}: 10. Dezember 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          {t.introduction}
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {/* Responsible */}
          <section className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.sections.responsible.title}</h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 text-lg font-semibold">{t.sections.responsible.name}</p>
              </div>
              <div>
                <p className="text-gray-700">{t.sections.responsible.address}</p>
              </div>
              <div>
                <p className="text-gray-700">{t.sections.responsible.email}</p>
              </div>
              <div>
                <p className="text-gray-700">{t.sections.responsible.phone}</p>
              </div>
            </div>
          </section>

          {/* EU Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.eu.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.eu.content}
            </p>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.liability.title}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t.sections.liability.intro}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.sections.liability.accuracy}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.sections.liability.liability_clause}
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.copyright.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.copyright.content}
            </p>
          </section>

          {/* Data Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.dataprivacy.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.dataprivacy.content}
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.disclaimer.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.disclaimer.content}
            </p>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
          <p className="text-gray-700 text-lg">
            {currentLanguage === 'de' 
              ? 'Bei Fragen zum Impressum kontaktieren Sie uns unter info@alitero.eu'
              : currentLanguage === 'en'
              ? 'If you have any questions about this legal notice, please contact us at info@alitero.eu'
              : currentLanguage === 'sv'
              ? 'Om du har några frågor om detta meddelande, kontakta oss på info@alitero.eu'
              : 'Ha kérdése van az impresszummal kapcsolatban, vegye fel velünk a kapcsolatot a info@alitero.eu címen'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
