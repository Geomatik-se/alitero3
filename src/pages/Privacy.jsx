import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Privacy = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].privacyPolicy;

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
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.responsible.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.responsible.content}
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.dataCollection.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.sections.dataCollection.intro}
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>{currentLanguage === 'de' ? 'Kontaktformulare:' : currentLanguage === 'en' ? 'Contact Forms:' : currentLanguage === 'sv' ? 'Kontaktformulär:' : 'Kapcsolati űrlapok:'}</strong> {t.sections.dataCollection.contact}
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>{currentLanguage === 'de' ? 'Website-Analytik:' : currentLanguage === 'en' ? 'Website Analytics:' : currentLanguage === 'sv' ? 'Webbplatsanalys:' : 'Weboldal-analitika:'}</strong> {t.sections.dataCollection.analytics}
              </li>
            </ul>
          </section>

          {/* Purposes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.purposes.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.sections.purposes.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.sections.purposes.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.legalBasis.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.legalBasis.content}
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.dataSharing.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.dataSharing.content}
            </p>
          </section>

          {/* Storage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.storage.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.storage.content}
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.rights.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.sections.rights.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {t.sections.rights.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.contact.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.contact.content}
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.cookies.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.cookies.content}
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.security.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.security.content}
            </p>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.thirdParties.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.sections.thirdParties.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>StaticForms:</strong> {t.sections.thirdParties.staticforms}
              </li>
            </ul>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
              {t.sections.changes.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t.sections.changes.content}
            </p>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
          <p className="text-gray-700 text-lg">
            {currentLanguage === 'de' 
              ? 'Haben Sie noch Fragen zu dieser Datenschutzerklärung? Kontaktieren Sie uns gerne!' 
              : currentLanguage === 'en'
              ? 'Do you have any further questions about this privacy policy? Feel free to contact us!'
              : currentLanguage === 'sv'
              ? 'Har du fler frågor om denna integritetspolicy? Kontakta oss gärna!'
              : 'Még kérdések az adatvédelmi nyilatkozattal kapcsolatban? Vegye fel velünk a kapcsolatot!'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
