import React from 'react';
import {useLanguage} from '../contexts/LanguageContext';

const PrivacyPage = () => {
  const {t} = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('privacy.title')}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              <strong>{t('privacy.effectiveDate')}</strong>
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.introduction.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.introduction.text')}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.informationCollected.title')}
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('privacy.informationCollected.personalInfo.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('privacy.informationCollected.personalInfo.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {t('privacy.informationCollected.personalInfo.items', {returnObjects: true}).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-6">
                {t('privacy.informationCollected.personalInfo.details')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('privacy.informationCollected.automaticInfo.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('privacy.informationCollected.automaticInfo.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                {t('privacy.informationCollected.automaticInfo.items', {returnObjects: true}).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.informationUse.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.informationUse.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                {t('privacy.informationUse.items', {returnObjects: true}).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.legalBasis.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.legalBasis.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                {t('privacy.legalBasis.items', {returnObjects: true}).map((item, index) => (
                  <li key={index}>
                    <strong>{item.term}</strong>{item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataSharing.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.dataSharing.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                {t('privacy.dataSharing.items', {returnObjects: true}).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataSecurity.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.dataSecurity.text')}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.gdprRights.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.gdprRights.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                {t('privacy.gdprRights.items', {returnObjects: true}).map((item, index) => (
                  <li key={index}>
                    <strong>{item.term}</strong>{item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.cookies.text')}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataRetention.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.dataRetention.text')}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.internationalTransfer.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.internationalTransfer.text')}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.policyChanges.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.policyChanges.text')}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.contact.intro')}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>{t('privacy.contact.company')}</strong><br />
                  Email: {t('privacy.contact.email')}<br />
                  Phone: {t('privacy.contact.phone')}<br />
                  {t('privacy.contact.address')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;